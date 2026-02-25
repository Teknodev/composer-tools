// src/composer-tools/interaction-engine/commands/AnimateCommand.ts

import {
  BaseAnimationCommand,
  InteractionContext,
  AnimationEngine,
  AnimationEngineType,
  DEFAULT_ANIMATE_CSS_ANIMATION,
  DEFAULT_ANIMATION_PROPERTY,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_EASING,
  DEFAULT_LOOP_DURATION,
  VALID_PLAYBACK_DIRECTIONS,
} from "../core/types";
import { AnimationEngineResolver } from "../core/AnimationEngineResolver";
import { AnimateCssAnimationEngine } from "../animations/AnimateCssAnimationEngine";
import { logger } from '../utils/Logger';
import { buildLoopKeyframesFromComputed } from './animate/KeyframeBuilder';
import { AnimationObserverManager } from './animate/AnimationObserverManager';

export class AnimateCommand extends BaseAnimationCommand {
  /** Info needed to reverse a standard property animation during cleanup */
  private _standardCleanupInfo?: {
    property: string;
    duration: number;
    easing: string;
    engine: AnimationEngine;
  };
  private observerManager = new AnimationObserverManager();

  /**
   * Guard against re-entrant cleanup calls.  If cleanup() is called again
   * while a previous cleanup is still in progress (e.g. reverse animation
   * running), the second call returns immediately — the in-progress cleanup
   * will finish on its own or be aborted by forceCancel().
   */
  private _isCleaningUp = false;

  async execute(context: InteractionContext): Promise<void> {
    // Cancel any existing animations for THIS interaction only
    // Don't cancel animations from other interactions on the same element
    this.cancelAllAnimations();

    this.animationTarget = context.target;

    // IMPORTANT: do NOT clear `originalStyles` here. The original (pre-animation)
    // values must be preserved across fast/overlapping executions so we can
    // always restore to the true initial state. Only capture originals if
    // they are not already stored (storeOriginalStyles is idempotent now).

    const engine = AnimationEngineResolver.resolve(context.config.engine);

    // Check if we're using animate.css
    if (AnimationEngineResolver.isAnimateCss(context.config.engine)) {
      // Store original styles so cleanup can restore them after animate.css runs
      this.storeOriginalStyles(context.target, ['opacity', 'transform']);

      // If we previously applied inline "frozen" properties during cleanup,
      // remove them so adding the animate.css classes will restart the animation.
      try {
        ['opacity', 'transform'].forEach((p) => context.target.style.removeProperty(p));
        // Ensure no inline animation or transition blocks class animation restart
        context.target.style.removeProperty('animation');
        context.target.style.removeProperty('transition');
        // Force reflow to ensure class-based animation restarts reliably
        void context.target.offsetWidth;
      } catch (err) {
        /* ignore */
      }

      this.isAnimating = true;

      const animationName =
        context.config.animateCssAnimation || context.config.animation || DEFAULT_ANIMATE_CSS_ANIMATION;
      const formattedAnimationName = animationName.startsWith("animate__")
        ? animationName
        : `animate__${animationName}`;

      // Sanitize playback direction to avoid passing semantic directions (e.g. 'up')
      const rawCssDirection =
        context.config.animateCssDirection ?? context.config.animationDirection;
      const sanitizedCssDirection = (VALID_PLAYBACK_DIRECTIONS as readonly string[]).includes(rawCssDirection)
        ? rawCssDirection
        : undefined;

      const animationConfig = {
        // support both new `animateCss*` keys and legacy keys
        animation: formattedAnimationName,
        delay: context.config.animateCssDelay ?? context.config.delay,
        iterationCount: context.config.animateCssIterationCount ?? context.config.iterationCount,
        direction: sanitizedCssDirection,
        fillMode: context.config.animateCssFillMode ?? context.config.fillMode,
        triggerType: context.triggerType, // Pass trigger type for cleanup logic
      };

      const duration = context.config.animateCssDuration ?? context.config.duration ?? DEFAULT_ANIMATION_DURATION;

      const result = await engine.animate(context.target, animationConfig, duration);

      // Store cancel function if provided
      if (result && typeof result === "object" && result.cancel) {
        this.cancelAnimation = result.cancel;
      }

      this.isAnimating = false;
      return;
    }

    // Web Animations API path
    const {
      property = DEFAULT_ANIMATION_PROPERTY,
      duration = DEFAULT_ANIMATION_DURATION,
      easing = DEFAULT_EASING,
      delay = 0,
      iterationCount = 1,
    } = context.config;

    // Sanitize playback direction coming from config
    const rawDirection =
      context.config.animationDirection ?? context.config.animateCssDirection;
    const sanitizedDirection = (VALID_PLAYBACK_DIRECTIONS as readonly string[]).includes(rawDirection as string)
      ? (rawDirection as any)
      : undefined;

    // Check if using loop/transform mode (Framer-style)
    // Only treat as loop mode if transform-related values are actually non-default
    const cfg = context.config || {};
    const hasScale = cfg.scale !== undefined && cfg.scale !== 1;
    const hasRotate = cfg.rotate && (cfg.rotate.x || cfg.rotate.y || cfg.rotate.z);
    const hasSkew = cfg.skew && (cfg.skew.x || cfg.skew.y);
    const hasOffset = cfg.offset && (cfg.offset.x || cfg.offset.y);
    const isLoopMode = Boolean(cfg.loopType || hasScale || hasRotate || hasSkew || hasOffset);

    if (isLoopMode) {
      // Loop/Transform Animation Mode
      await this.executeLoopAnimation(context);
    } else {
      // Standard property animation
      // Support UI-provided shortcuts like `opacity` in config
      const targetValue =
        property === 'opacity' && context.config.opacity !== undefined
          ? context.config.opacity
          : (context.config.value ?? context.config.to ?? 0.8);

      // Store original values for cleanup BEFORE animation starts (use registry-aware helper)
      this.storeOriginalStyles(context.target, [property]);
      // Debug: show what we stored for this command
      logger.debug('AnimateCommand: stored original for', { property, value: this.originalStyles.get(property) });

      // Set animation flag
      this.isAnimating = true;

      // Use the WebAnimationsAPI engine
      const animationConfig = {
        [property]: targetValue,
        delay,
        iterationCount,
        // only include direction when it's a valid playback direction
        ...(sanitizedDirection && { direction: sanitizedDirection }),
        triggerType: context.triggerType, // Pass trigger type for cleanup logic
      };

      const result = await engine.animate(context.target, animationConfig, duration, easing);

      // Store cancel function and finished promise if provided
      if (result && typeof result === "object") {
        if (result.cancel) {
          this.cancelAnimation = result.cancel;
        }
        if (result.finished && iterationCount !== "infinite") {
          // Wait for animation to actually finish before resetting isAnimating flag
          result.finished.then(() => {
            this.isAnimating = false;
          }).catch(() => {
            // If animation is cancelled, immediately set isAnimating to false
            this.isAnimating = false;
          });
        }
      }

      // Store the property-specific cleanup info for the cleanup() method
      this._standardCleanupInfo = { property, duration, easing, engine };

      // For infinite animations, don't wait for finish
      if (iterationCount === "infinite") {
        this.isAnimating = false;
      }
    }
  }

  private async executeLoopAnimation(context: InteractionContext): Promise<void> {
    const config = context.config;

    // Store original styles
    this.storeOriginalStyles(context.target, ['opacity', 'transform']);

    // Build keyframes based on config using the element's current computed styles
    const hasExplicitLoopType = Boolean(config.loopType);
    const { keyframes, hasAnimated } = buildLoopKeyframesFromComputed(config, context.target);

    if (!hasAnimated) {
      // Nothing to animate in loop mode
      logger.warn('AnimateCommand: loop mode has no animated properties, skipping', config);
      return;
    }

    // Configure animation options
    const loopType = config.loopType || "loop";
    
    // Use configured iterationCount. If this is a loop-type config, default to infinite.
    const iterations = config.iterationCount === "infinite" || hasExplicitLoopType
      ? Infinity
      : (config.iterationCount || 1);

    // One-shot transforms (no explicit loopType, finite iterations) should play
    // from initial → target and stay there, not loop back.
    const isOneShotTransform = !hasExplicitLoopType && iterations !== Infinity;

    // For Web Animations API, we need to animate with proper keyframes
    const animation = context.target.animate(keyframes, {
      duration: config.duration || DEFAULT_LOOP_DURATION,
      easing: config.easing || DEFAULT_EASING,
      iterations: iterations,
      direction: loopType === "mirror" ? "alternate" : "normal",
      fill: isOneShotTransform ? "forwards" : "both",
      delay: config.delay || 0,
    });

    // Store animation reference for cancellation
    this.activeAnimations.set('loop-animation', animation);
    this.cancelAnimation = () => animation.cancel();

    // Setup intersection observer for offScreen behavior
    if (config.offScreen === "pause") {
      this.observerManager.setup(context.target, animation);
    }

    this.isAnimating = true;

    // For non-infinite animations, wait for finish
    if (iterations !== Infinity) {
      animation.finished.then(() => {
        this.isAnimating = false;
        // For one-shot transforms, commit the final values as inline styles
        // so the animation state persists permanently (survives re-renders,
        // GC of Animation object, etc.)
        if (isOneShotTransform && context.target) {
          try {
            animation.commitStyles();
            animation.cancel();
          } catch (_e) {
            // commitStyles may fail in some browsers; fall back to manual inline style setting
            try {
              const computed = getComputedStyle(context.target);
              ['opacity', 'transform'].forEach((prop) => {
                const val = computed.getPropertyValue(prop);
                if (val) context.target.style.setProperty(prop, val);
              });
              animation.cancel();
            } catch (_e2) {
              // leave fill:forwards as final fallback
            }
          }
        }
      }).catch(() => {
        // If animation is cancelled, immediately set isAnimating to false
        this.isAnimating = false;
      });
    }
  }

  undo(context: InteractionContext): void {
    // Disconnect observer if exists
    this.observerManager.disconnect();

    // Cancel any running animations
    if (this.cancelAnimation) {
      this.cancelAnimation();
      this.cancelAnimation = undefined;
    }
    if (this.reverseAnimation) {
      this.reverseAnimation.cancel();
      this.reverseAnimation = undefined;
    }

    // Restore original styles
    this.originalStyles.forEach((value, property) => {
      context.target.style.setProperty(property, value);
    });
    this.originalStyles.clear();
  }

  async cleanup(context: InteractionContext): Promise<void> {
    // Re-entry guard — prevent double-cleanup from falling through
    // _standardCleanupInfo check into wrong fallback paths.
    if (this._isCleaningUp) {
      return;
    }
    this._isCleaningUp = true;

    try {
      await this._cleanupImpl(context);
    } finally {
      this._isCleaningUp = false;
    }
  }

  private async _cleanupImpl(context: InteractionContext): Promise<void> {
    // If caller requested to preserve end state, set final values and skip restoring originals
    const preserveEnd = Boolean(context.config?.preserveEndState || context.config?.keepEndState);
    if (preserveEnd) {
      // Cancel running animations but DO NOT restore original styles
      this.cancelAllAnimations();

      // If a specific property animation was used, set its final value inline
      const prop = context.config?.property;
      const finalVal = context.config?.value ?? context.config?.to;
      if (prop && finalVal !== undefined) {
        try {
          context.target.style.setProperty(prop, String(finalVal));
        } catch (err) {
          /* ignore */
        }
      }

      // For animate.css or other class-based animations, we can't always infer the final
      // computed value here; leave classes removed and any inline values as-is.
      this._standardCleanupInfo = undefined;
      return Promise.resolve();
    }

    // Handle standard property animation cleanup (reverse to original value)
    if (this._standardCleanupInfo) {
      const { property, duration, easing, engine } = this._standardCleanupInfo;
      this._standardCleanupInfo = undefined;

      // Cancel the forward animation before starting reverse
      this.cancelAllAnimations();

      const originalValue = this.originalStyles.get(property);
      if (originalValue !== undefined) {
        const cleanupDuration = Math.min(duration, 600);
        const result = await engine.animate(
          context.target,
          { [property]: originalValue },
          cleanupDuration,
          easing,
        );

        // Track the reverse animation so forceCancel() can abort it
        if (result && typeof result === 'object') {
          if (result.animation) {
            this.reverseAnimation = result.animation;
          }
          if (result.finished) {
            try {
              await result.finished;
            } catch {
              // Animation was cancelled (e.g. by forceCancel on re-trigger) — exit
              return;
            }
          }
          this.reverseAnimation = undefined;
        }

        // Commit final values as inline styles, cancel fill:forwards animation
        this.restoreOriginalStyles(context.target);
      }
      return;
    }

    // Disconnect observer if exists
    this.observerManager.disconnect();

    const engine = AnimationEngineResolver.resolve(context.config.engine);

    // For animate.css animations, smoothly reverse using a CSS transition instead
    if (AnimationEngineResolver.isAnimateCss(context.config.engine)) {
      return new Promise<void>((resolve) => {
        const animationName = context.config.animateCssAnimation || context.config.animation || DEFAULT_ANIMATE_CSS_ANIMATION;
        const animationClass = animationName.startsWith("animate__")
          ? animationName
          : `animate__${animationName}`;

        // Determine which properties we previously stored
        const properties = Array.from(this.originalStyles.keys());

        // Capture computed (current) values and apply them inline to "freeze" visual state
        const computed = getComputedStyle(context.target);
        properties.forEach((prop) => {
          try {
            const val = computed.getPropertyValue(prop);
            context.target.style.setProperty(prop, val);
          } catch (err) {
            /* ignore property errors */
          }
        });

        // Remove animate.css classes and variables so the element no longer relies on the CSS animation
        context.target.classList.remove('animate__animated', animationClass);
        context.target.style.removeProperty('--animate-duration');
        context.target.style.removeProperty('--animate-delay');
        context.target.style.removeProperty('animation-iteration-count');
        context.target.style.removeProperty('animation-direction');
        context.target.style.removeProperty('animation-fill-mode');

        // Build target values from stored originals
        const targetValues: Record<string, any> = {};
        properties.forEach((prop) => {
          targetValues[prop] = this.originalStyles.get(prop) || '';
        });

        if (properties.length > 0) {
          // Use a short CSS transition to animate back to original values
          const duration = Math.min(context.config.duration || 1000, 600);
          const transitionValue = properties.map(p => `${p} ${duration}ms ease-out`).join(', ');

          // De-duplication guard — only one resolve per cleanup
          let resolved = false;
          const finishCleanup = (restoreStyles: boolean) => {
            if (resolved) return;
            resolved = true;
            this._cleanupAbortFn = undefined;

            try {
              context.target.removeEventListener('transitionend', onTransitionEnd);
              context.target.style.removeProperty('transition');
              context.target.style.removeProperty('--animate-duration');
              context.target.style.removeProperty('--animate-delay');

              if (restoreStyles) {
                properties.forEach((prop) => context.target.style.removeProperty(prop));
              }
            } catch (err) {
              /* ignore */
            }
            resolve();
          };

          // Allow forceCancel() to abort the CSS transition instantly
          this._cleanupAbortFn = () => finishCleanup(false);

          // Apply transition
          context.target.style.transition = transitionValue;

          const onTransitionEnd = (_ev: Event) => finishCleanup(true);
          context.target.addEventListener('transitionend', onTransitionEnd);

          // Force reflow then apply target values to trigger transition
          requestAnimationFrame(() => {
            properties.forEach((prop) => {
              try {
                context.target.style.setProperty(prop, targetValues[prop]);
              } catch (err) {
                /* ignore */
              }
            });
          });

          // Fallback timeout
          setTimeout(() => finishCleanup(true), duration + 100);
        } else {
          // Nothing stored, just restore and resolve
          try {
            this.restoreOriginalStyles(context.target);
          } catch (err) {
            /* ignore */
          }
          resolve();
        }
      });
    }

    // For Web Animations API - smoothly animate back to all original values
    // DON'T cancel existing animations yet - we need them running for smooth transition
    
    // Build keyframes for ALL original styles
    const currentKeyframe: Record<string, any> = {};
    const targetKeyframe: Record<string, any> = {};
    const computedStyle = getComputedStyle(context.target);

    this.originalStyles.forEach((originalValue, property) => {
      const currentValue = computedStyle.getPropertyValue(property);
      currentKeyframe[property] = currentValue;
      targetKeyframe[property] = originalValue;
    });

    if (Object.keys(currentKeyframe).length > 0) {
      // Cancel NOW right before starting reverse animation
      this.cancelAllAnimations();

      // Create a smooth transition back to all original values
      const duration = Math.min(context.config.duration || 1000, 600); // Max 600ms for cleanup

      return new Promise<void>((resolve) => {
        const animation = context.target.animate([currentKeyframe, targetKeyframe], {
          duration: duration,
          easing: 'ease-out',
          fill: 'forwards'
        });

        // Store the cleanup animation reference
        this.reverseAnimation = animation;

        // Allow forceCancel() to abort this reverse animation
        this._cleanupAbortFn = () => {
          animation.cancel();
          // oncancel will handle resolve + cleanup
        };

        animation.onfinish = () => {
          this._cleanupAbortFn = undefined;
          this.restoreOriginalStyles(context.target);
          this.reverseAnimation = undefined;
          resolve();
        };

        animation.oncancel = () => {
          this._cleanupAbortFn = undefined;
          this.reverseAnimation = undefined;
          resolve();
        };
      });
    } else {
      // Fallback if no original values stored
      this.cancelAllAnimations();
      this.restoreOriginalStyles(context.target);
      return Promise.resolve();
    }
  }

  /** Cached AnimateCss engine for cancelAllAnimations */
  private _cachedAnimateCssEngine?: AnimateCssAnimationEngine;

  /**
   * Override forceCancel to also reset the _isCleaningUp guard.
   * forceCancel() is called synchronously from Interaction.fire() and
   * bypasses cleanup()'s try/finally block, so we must clear the flag here.
   */
  public override forceCancel(): void {
    this._isCleaningUp = false;
    super.forceCancel();
  }

  protected cancelAllAnimations(): void {
    // Call parent cancelAllAnimations first
    super.cancelAllAnimations();
    
    // Also cancel any Animate.css timeouts
    if (this.animationTarget) {
      if (!this._cachedAnimateCssEngine) {
        this._cachedAnimateCssEngine = new AnimateCssAnimationEngine();
      }
      if (this._cachedAnimateCssEngine.cancelAll) {
        this._cachedAnimateCssEngine.cancelAll(this.animationTarget);
      }
    }
  }
}
