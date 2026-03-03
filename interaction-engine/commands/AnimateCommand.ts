// src/composer-tools/interaction-engine/commands/AnimateCommand.ts

import {
  BaseAnimationCommand,
  InteractionContext,
  AnimationEngine,
  DEFAULT_ANIMATE_CSS_ANIMATION,
  DEFAULT_ANIMATION_PROPERTY,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_EASING,
  DEFAULT_LOOP_DURATION,
  VALID_PLAYBACK_DIRECTIONS,
} from "../core/types";
import { AnimationEngineResolver } from "../core/AnimationEngineResolver";
import { AnimateCssAnimationEngine } from "../animations/AnimateCssAnimationEngine";
import { buildLoopKeyframesFromComputed, buildSplitKeyframes, isTransformIdentity, INDIVIDUAL_TRANSFORM_PROPS } from './animate/KeyframeBuilder';
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

  /** Tracks the engine type used in the last execute() call */
  private _lastUsedEngine?: 'webAnimations' | 'animateCss';

  /**
   * Guard against re-entrant cleanup calls.  If cleanup() is called again
   * while a previous cleanup is still in progress (e.g. reverse animation
   * running), the second call returns immediately — the in-progress cleanup
   * will finish on its own or be aborted by forceCancel().
   */
  private _isCleaningUp = false;

  async execute(context: InteractionContext): Promise<void> {
    this.cancelAllAnimations();
    this.animationTarget = context.target;

    const engine = AnimationEngineResolver.resolve(context.config.engine);

    if (AnimationEngineResolver.isAnimateCss(context.config.engine)) {
      this._lastUsedEngine = 'animateCss';
      this.storeOriginalStyles(context.target, ['opacity', 'transform', ...INDIVIDUAL_TRANSFORM_PROPS]);

      // Snapshot the composite `transform` inline style (set by prior skew/3D
      // interactions) so it can be restored after the animate.css animation.
      // Individual transform properties (scale, translate, rotate) are NOT
      // removed — they compose with animate.css's `transform` via the CSS cascade.
      let compositeTransformSnapshot = '';
      try {
        compositeTransformSnapshot = context.target.style.getPropertyValue('transform') || '';
        context.target.style.removeProperty('opacity');
        context.target.style.removeProperty('transform');
        context.target.style.removeProperty('animation');
        context.target.style.removeProperty('transition');
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

      const rawCssDirection =
        context.config.animateCssDirection ?? context.config.animationDirection;
      const sanitizedCssDirection = (VALID_PLAYBACK_DIRECTIONS as readonly string[]).includes(rawCssDirection)
        ? rawCssDirection
        : undefined;

      const animationConfig = {
        animation: formattedAnimationName,
        delay: context.config.animateCssDelay ?? context.config.delay,
        iterationCount: context.config.animateCssIterationCount ?? context.config.iterationCount,
        direction: sanitizedCssDirection,
        fillMode: context.config.animateCssFillMode ?? context.config.fillMode,
        triggerType: context.triggerType,
      };

      const duration = context.config.animateCssDuration ?? context.config.duration ?? DEFAULT_ANIMATION_DURATION;

      const result = await engine.animate(context.target, animationConfig, duration);

      // Restore composite `transform` snapshot (for skew / 3D multi-axis rotation)
      if (compositeTransformSnapshot) {
        try {
          context.target.style.setProperty('transform', compositeTransformSnapshot);
        } catch (_) { /* ignore */ }
      }

      if (result && typeof result === "object" && result.cancel) {
        this.cancelAnimation = result.cancel;
      }

      this.isAnimating = false;
      return;
    }

    // Web Animations API path
    this._lastUsedEngine = 'webAnimations';
    const {
      property = DEFAULT_ANIMATION_PROPERTY,
      duration = DEFAULT_ANIMATION_DURATION,
      easing = DEFAULT_EASING,
      delay = 0,
      iterationCount = 1,
    } = context.config;

    const rawDirection =
      context.config.animationDirection ?? context.config.animateCssDirection;
    const sanitizedDirection = (VALID_PLAYBACK_DIRECTIONS as readonly string[]).includes(rawDirection as string)
      ? (rawDirection as any)
      : undefined;

    const cfg = context.config || {};
    const hasScale = cfg.scale !== undefined && cfg.scale !== 1;
    const hasRotate = cfg.rotate && (cfg.rotate.x || cfg.rotate.y || cfg.rotate.z);
    const hasSkew = cfg.skew && (cfg.skew.x || cfg.skew.y);
    const hasOffset = cfg.offset && (cfg.offset.x || cfg.offset.y);
    let isLoopMode = Boolean(cfg.loopType || hasScale || hasRotate || hasSkew || hasOffset);

    // Enter loop mode if the element already has a non-identity transform
    // (including individual CSS transform properties) or has a delay.
    if (!isLoopMode) {
      const hasAnyTransformConfig =
        cfg.scale !== undefined ||
        (cfg.rotate && (cfg.rotate.x !== undefined || cfg.rotate.y !== undefined || cfg.rotate.z !== undefined)) ||
        (cfg.skew && (cfg.skew.x !== undefined || cfg.skew.y !== undefined)) ||
        (cfg.offset && (cfg.offset.x !== undefined || cfg.offset.y !== undefined));

      if (hasAnyTransformConfig) {
        const computedStyle = getComputedStyle(context.target);
        const currentTransform = computedStyle.transform;
        const currentScale = computedStyle.getPropertyValue('scale');
        const currentTranslate = computedStyle.getPropertyValue('translate');
        const currentRotate = computedStyle.getPropertyValue('rotate');

        const isTransformNone = !currentTransform ||
          currentTransform === 'none' ||
          currentTransform === 'matrix(1, 0, 0, 1, 0, 0)';
        const isScaleNone = !currentScale || currentScale === 'none' || currentScale === '1';
        const isTranslateNone = !currentTranslate || currentTranslate === 'none' ||
          currentTranslate === '0px' || currentTranslate === '0px 0px';
        const isRotateNone = !currentRotate || currentRotate === 'none' || currentRotate === '0deg';

        const isIdentity = isTransformNone && isScaleNone && isTranslateNone && isRotateNone;
        if (!isIdentity || delay > 0) {
          isLoopMode = true;
        }
      }
    }

    if (isLoopMode) {
      await this.executeLoopAnimation(context);
    } else {
      const targetValue =
        property === 'opacity' && context.config.opacity !== undefined
          ? context.config.opacity
          : (context.config.value ?? context.config.to ?? 0.8);

      this.storeOriginalStyles(context.target, [property]);

      this.isAnimating = true;

      // Use the WebAnimationsAPI engine
      const animationConfig = {
        [property]: targetValue,
        delay,
        iterationCount,
        ...(sanitizedDirection && { direction: sanitizedDirection }),
        triggerType: context.triggerType,
      };

      const result = await engine.animate(context.target, animationConfig, duration, easing);

      if (result && typeof result === "object") {
        if (result.cancel) {
          this.cancelAnimation = result.cancel;
        }
        if (result.finished && iterationCount !== "infinite") {
          result.finished.then(() => {
            this.isAnimating = false;
            // Promote the WAAPI final state to inline styles and remove the
            // animation from the compositor.  Leaving a fill:'forwards' animation
            // alive in getAnimations() silently shadows any later inline style
            // writes to the same properties and causes unexpected visual bugs.
            if (result.animation) {
              try {
                result.animation.commitStyles();
              } catch (_) {
                // Element not rendered (display:none, removed from DOM) — ignore.
              }
              try {
                result.animation.cancel();
              } catch (_) {
                // Already cancelled — ignore.
              }
            }
            if (context.config.removeOnComplete && context.target) {
              this.hideElement(context.target);
            }
          }).catch(() => {
            this.isAnimating = false;
          });
        }
      }

      this._standardCleanupInfo = { property, duration, easing, engine };

      if (iterationCount === "infinite") {
        this.isAnimating = false;
      }
    }
  }

  private async executeLoopAnimation(context: InteractionContext): Promise<void> {
    const config = context.config;

    this.storeOriginalStyles(context.target, ['opacity', ...INDIVIDUAL_TRANSFORM_PROPS, 'transform']);

    const hasExplicitLoopType = Boolean(config.loopType);

    // Composite: 'add' only when concurrent + non-identity target;
    // identity targets always use 'replace' (add + identity = no-op).
    const targetIsIdentity = isTransformIdentity(config as any);

    const runningAnimations = context.target.getAnimations()
      .filter(a => a.playState === 'running');
    const hasConcurrentAnimations = runningAnimations.length > 0;

    const useAdditive = hasConcurrentAnimations && !targetIsIdentity;

    const split = buildSplitKeyframes(config, context.target, useAdditive);

    if (split.transformTracks.length === 0 && !split.hasOpacity) {
      const { keyframes, hasAnimated } = buildLoopKeyframesFromComputed(config, context.target);
      if (!hasAnimated) return;
      await this._runLegacyLoopAnimation(context, keyframes, hasExplicitLoopType);
      return;
    }

    const loopType = config.loopType || "loop";
    const iterations = config.iterationCount === "infinite" || hasExplicitLoopType
      ? Infinity
      : (config.iterationCount || 1);
    const isOneShotTransform = !hasExplicitLoopType && iterations !== Infinity;

    // One-shot: keep only the last keyframe so the browser resolves "from" at play time.
    if (isOneShotTransform) {
      for (const track of split.transformTracks) {
        if (!useAdditive && track.keyframes.length >= 2) {
          track.keyframes = [track.keyframes[track.keyframes.length - 1]];
        }
      }
      if (split.opacityKeyframes && split.opacityKeyframes.length >= 2) {
        split.opacityKeyframes = [split.opacityKeyframes[split.opacityKeyframes.length - 1]];
      }
    }

    const sharedOptions: KeyframeAnimationOptions = {
      duration: config.duration || DEFAULT_LOOP_DURATION,
      easing: config.easing || DEFAULT_EASING,
      iterations,
      direction: loopType === "mirror" ? "alternate" : "normal",
      fill: isOneShotTransform ? "forwards" : "both",
      delay: config.delay || 0,
    };

    const animations: Animation[] = [];

    // Create per-property transform animations using individual CSS properties.
    // This prevents conflicts with animate.css which only uses composite `transform`.
    for (const track of split.transformTracks) {
      const compositeMode: CompositeOperation | undefined =
        useAdditive && !track.isCompositeTransform ? 'add' : undefined;
      const anim = context.target.animate(track.keyframes, {
        ...sharedOptions,
        ...(compositeMode ? { composite: compositeMode } : {}),
      });
      this.activeAnimations.set(track.key, anim);
      animations.push(anim);
    }

    if (split.opacityKeyframes) {
      const opacityAnim = context.target.animate(split.opacityKeyframes, {
        ...sharedOptions,
        composite: 'replace',
      });
      this.activeAnimations.set('loop-opacity', opacityAnim);
      animations.push(opacityAnim);
    }

    this.cancelAnimation = () => animations.forEach((a) => a.cancel());

    if (config.offScreen === "pause" && animations.length > 0) {
      this.observerManager.setup(context.target, animations);
    }

    this.isAnimating = true;

    if (iterations !== Infinity) {
      Promise.allSettled(animations.map((a) => a.finished)).then((results) => {
        this.isAnimating = false;
        // Cancel any animations that are still running (e.g. if one was
        // cancelled causing Promise.allSettled to report 'rejected' while
        // others continued).
        for (const r of results) {
          if (r.status === 'rejected') {
            animations.forEach((a) => { try { a.cancel(); } catch (_) { /* noop */ } });
            break;
          }
        }
        if (isOneShotTransform && context.target) {
          try {
            const computed = getComputedStyle(context.target);
            // Promote individual transform properties to inline styles
            const propsToCommit = new Set<string>();
            for (const track of split.transformTracks) {
              const kf = track.keyframes[track.keyframes.length - 1];
              for (const prop of Object.keys(kf)) propsToCommit.add(prop);
            }
            if (split.hasOpacity) propsToCommit.add('opacity');
            for (const prop of propsToCommit) {
              const val = computed.getPropertyValue(prop);
              if (val) context.target.style.setProperty(prop, val);
            }
            animations.forEach((a) => { try { a.cancel(); } catch (_) { /* noop */ } });
          } catch (_e) {
            // leave fill:forwards as fallback
          }
        }
        if (config.removeOnComplete && context.target) {
          this.hideElement(context.target);
        }
      });
    }
  }

  /** Legacy combined-keyframe loop animation fallback. */
  private async _runLegacyLoopAnimation(
    context: InteractionContext,
    keyframes: Keyframe[],
    hasExplicitLoopType: boolean,
  ): Promise<void> {
    const config = context.config;
    const loopType = config.loopType || "loop";
    const iterations = config.iterationCount === "infinite" || hasExplicitLoopType
      ? Infinity
      : (config.iterationCount || 1);
    const isOneShotTransform = !hasExplicitLoopType && iterations !== Infinity;

    const animation = context.target.animate(keyframes, {
      duration: config.duration || DEFAULT_LOOP_DURATION,
      easing: config.easing || DEFAULT_EASING,
      iterations,
      direction: loopType === "mirror" ? "alternate" : "normal",
      fill: isOneShotTransform ? "forwards" : "both",
      delay: config.delay || 0,
    });

    this.activeAnimations.set('loop-animation', animation);
    this.cancelAnimation = () => animation.cancel();

    if (config.offScreen === "pause") {
      this.observerManager.setup(context.target, animation);
    }

    this.isAnimating = true;

    if (iterations !== Infinity) {
      animation.finished.then(() => {
        this.isAnimating = false;
        if (isOneShotTransform && context.target) {
          try {
            animation.commitStyles();
            animation.cancel();
          } catch (_e) {
            try {
              const computed = getComputedStyle(context.target);
              ['opacity', 'transform'].forEach((prop) => {
                const val = computed.getPropertyValue(prop);
                if (val) context.target.style.setProperty(prop, val);
              });
              animation.cancel();
            } catch (_e2) { /* leave fill:forwards */ }
          }
        }
        if (config.removeOnComplete && context.target) {
          this.hideElement(context.target);
        }
      }).catch(() => {
        this.isAnimating = false;
      });
    }
  }

  undo(context: InteractionContext): void {
    this.observerManager.disconnect();
    this.showRemovedElement();

    if (this.cancelAnimation) {
      this.cancelAnimation();
      this.cancelAnimation = undefined;
    }
    if (this.reverseAnimation) {
      this.reverseAnimation.cancel();
      this.reverseAnimation = undefined;
    }

    this.originalStyles.forEach((value, property) => {
      context.target.style.setProperty(property, value);
    });
    this.originalStyles.clear();
  }

  async cleanup(context: InteractionContext): Promise<void> {
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
    this.showRemovedElement();

    const preserveEnd = Boolean(context.config?.preserveEndState || context.config?.keepEndState);
    if (preserveEnd) {
      this.cancelAllAnimations();

      const prop = context.config?.property;
      const finalVal = context.config?.value ?? context.config?.to;
      if (prop && finalVal !== undefined) {
        try {
          context.target.style.setProperty(prop, String(finalVal));
        } catch (err) {
          /* ignore */
        }
      }

      this._standardCleanupInfo = undefined;
      return Promise.resolve();
    }

    if (this._standardCleanupInfo) {
      const { property, duration, easing, engine } = this._standardCleanupInfo;
      this._standardCleanupInfo = undefined;

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

        if (result && typeof result === 'object') {
          if (result.animation) {
            this.reverseAnimation = result.animation;
          }
          if (result.finished) {
            try {
              await result.finished;
            } catch {
              return;
            }
          }
          this.reverseAnimation = undefined;
        }

        this.restoreOriginalStyles(context.target);
      }
      return;
    }

    this.observerManager.disconnect();

    if (AnimationEngineResolver.isAnimateCss(context.config.engine)) {
      return new Promise<void>((resolve) => {
        const animationName = context.config.animateCssAnimation || context.config.animation || DEFAULT_ANIMATE_CSS_ANIMATION;
        const animationClass = animationName.startsWith("animate__")
          ? animationName
          : `animate__${animationName}`;

        const properties = Array.from(this.originalStyles.keys());

        const computed = getComputedStyle(context.target);
        properties.forEach((prop) => {
          try {
            const val = computed.getPropertyValue(prop);
            context.target.style.setProperty(prop, val);
          } catch (err) {
            /* ignore property errors */
          }
        });

        context.target.classList.remove('animate__animated', animationClass);
        context.target.style.removeProperty('--animate-duration');
        context.target.style.removeProperty('--animate-delay');
        context.target.style.removeProperty('animation-iteration-count');
        context.target.style.removeProperty('animation-direction');
        context.target.style.removeProperty('animation-fill-mode');

        const targetValues: Record<string, any> = {};
        properties.forEach((prop) => {
          targetValues[prop] = this.originalStyles.get(prop) || '';
        });

        if (properties.length > 0) {
          const duration = Math.min(context.config.duration || 1000, 600);
          const transitionValue = properties.map(p => `${p} ${duration}ms ease-out`).join(', ');

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

          this._cleanupAbortFn = () => finishCleanup(true);
          context.target.style.transition = transitionValue;

          const onTransitionEnd = (_ev: Event) => finishCleanup(true);
          context.target.addEventListener('transitionend', onTransitionEnd);

          requestAnimationFrame(() => {
            properties.forEach((prop) => {
              try {
                context.target.style.setProperty(prop, targetValues[prop]);
              } catch (err) {
                /* ignore */
              }
            });
          });

          setTimeout(() => finishCleanup(true), duration + 100);
        } else {
          try {
            this.restoreOriginalStyles(context.target);
          } catch (err) {
            /* ignore */
          }
          resolve();
        }
      });
    }

    const currentKeyframe: Record<string, any> = {};
    const targetKeyframe: Record<string, any> = {};
    const computedStyle = getComputedStyle(context.target);

    this.originalStyles.forEach((originalValue, property) => {
      const currentValue = computedStyle.getPropertyValue(property);
      currentKeyframe[property] = currentValue;
      targetKeyframe[property] = originalValue;
    });

    if (Object.keys(currentKeyframe).length > 0) {
      this.cancelAllAnimations();

      const duration = Math.min(context.config.duration || 1000, 600);

      return new Promise<void>((resolve) => {
        const animation = context.target.animate([currentKeyframe, targetKeyframe], {
          duration: duration,
          easing: 'ease-out',
          fill: 'forwards'
        });

        this.reverseAnimation = animation;

        this._cleanupAbortFn = () => {
          animation.cancel();
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
      this.cancelAllAnimations();
      this.restoreOriginalStyles(context.target);
      return Promise.resolve();
    }
  }

  private _cachedAnimateCssEngine?: AnimateCssAnimationEngine;

  public override forceCancel(): void {
    this._isCleaningUp = false;
    // Disconnect observer to prevent IntersectionObserver callbacks from
    // firing for a now-cancelled animation (memory leak fix).
    this.observerManager.disconnect();
    super.forceCancel();
  }

  protected cancelAllAnimations(): void {
    super.cancelAllAnimations();

    // Only touch Animate.css cleanup if the last execute() actually used
    // the Animate.css engine — avoids unnecessary overhead for pure WAAPI.
    if (this._lastUsedEngine === 'animateCss' && this.animationTarget) {
      if (!this._cachedAnimateCssEngine) {
        this._cachedAnimateCssEngine = new AnimateCssAnimationEngine();
      }
      if (this._cachedAnimateCssEngine.cancelAll) {
        this._cachedAnimateCssEngine.cancelAll(this.animationTarget);
      }
    }
  }
}
