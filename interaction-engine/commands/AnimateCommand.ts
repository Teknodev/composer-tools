// src/composer-tools/interaction-engine/commands/AnimateCommand.ts

import { BaseAnimationCommand, InteractionContext } from "../core/types";
import { AnimateCssAnimationEngine } from "../animations/AnimateCssAnimationEngine";
import { WebAnimationsAPI } from "../animations/WebAnimationsAPI";

export class AnimateCommand extends BaseAnimationCommand {

  async execute(context: InteractionContext): Promise<void> {
    // Cancel any existing animations for THIS interaction only
    // Don't cancel animations from other interactions on the same element
    this.cancelAllAnimations();

    // Clear previous original styles for this interaction
    this.originalStyles.clear();

    const engineType = context.config.engine || "webAnimations";
    const engine =
      engineType === "animateCss" ? new AnimateCssAnimationEngine() : new WebAnimationsAPI();

    

    // Check if we're using animate.css
    if (engine instanceof AnimateCssAnimationEngine) {
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
      const animationConfig = {
        animation: `animate__${context.config.animation || "bounce"}`,
        delay: context.config.delay,
        iterationCount: context.config.iterationCount,
        direction: context.config.direction,
        fillMode: context.config.fillMode,
      };
      await engine.animate(context.target, animationConfig, context.config.duration || 1000);
      this.isAnimating = false;
      return;
    }

    // Web Animations API path
    const {
      property = "opacity",
      duration = 1000,
      easing = "ease",
      delay = 0,
      iterationCount = 1,
      direction = "normal",
    } = context.config;

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

      // Store original values for cleanup BEFORE animation starts
      const computedStyle = getComputedStyle(context.target);
      const originalValue = computedStyle.getPropertyValue(property);
      this.originalStyles.set(property, originalValue);

      // Set animation flag
      this.isAnimating = true;

      // Use the WebAnimationsAPI engine
      const animationConfig = {
        [property]: targetValue,
        delay,
        iterationCount,
        direction,
      };

      const result = await engine.animate(context.target, animationConfig, duration, easing);

      // Store cancel function if provided
      if (result && typeof result === "object" && "cancel" in result && result.cancel) {
        this.cancelAnimation = result.cancel;
      }

      // Set cleanup to animate back to original value
      this.cleanup = async (context: InteractionContext) => {
        const originalValue = this.originalStyles.get(property);
        if (originalValue !== undefined) {
          await engine.animate(context.target, { [property]: originalValue }, duration, easing);
        }
      };

      // Reset animation flag when animation completes (for non-infinite)
      if (iterationCount !== "infinite") {
        setTimeout(() => {
          this.isAnimating = false;
        }, duration + delay);
      }
    }
  }

  private async executeLoopAnimation(context: InteractionContext): Promise<void> {
    const config = context.config;

    // Store original styles
    this.storeOriginalStyles(context.target, ['opacity', 'transform']);

    // Build keyframes based on config using the element's current computed styles
    const { keyframes, hasAnimated } = this.buildLoopKeyframes(config, context.target);

    if (!hasAnimated) {
      // Nothing to animate in loop mode
      // eslint-disable-next-line no-console
      console.warn('AnimateCommand: loop mode has no animated properties, skipping', config);
      return;
    }

    // Configure animation options
    const loopType = config.loopType || "loop";
    
    // Use configured iterationCount. If this is a loop-type config, default to infinite.
    const iterations = config.iterationCount === "infinite" || Boolean(config.loopType)
      ? Infinity
      : (config.iterationCount || 1);

    // For Web Animations API, we need to animate with proper keyframes
    const animation = context.target.animate(keyframes, {
      duration: config.duration || 2000,
      easing: config.easing || "ease",
      iterations: iterations,
      direction: loopType === "mirror" ? "alternate" : "normal",
      fill: "both",
      delay: config.delay || 0,
    });

    // Store animation reference for cancellation
    this.activeAnimations.set('loop-animation', animation);
    this.cancelAnimation = () => animation.cancel();

    // Setup intersection observer for offScreen behavior
    if (config.offScreen === "pause") {
      this.setupIntersectionObserver(context.target, animation);
    }

    this.isAnimating = true;
  }

  private buildLoopKeyframes(config: any, element: HTMLElement): { keyframes: Keyframe[]; hasAnimated: boolean } {
    const computed = getComputedStyle(element);
    const initialState: Keyframe = {
      opacity: parseFloat(computed.getPropertyValue('opacity')) || 1,
      transform: computed.getPropertyValue('transform') || 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
    };

    const animatedState: Keyframe = {} as Keyframe;
    let hasAnimated = false;

    // Apply opacity
    if (config.opacity !== undefined) {
      animatedState.opacity = config.opacity;
      hasAnimated = true;
    }

    // Build transform string
    const transforms: string[] = [];

    // Apply offset (translate)
    if (config.offset) {
      const x = config.offset.x || 0;
      const y = config.offset.y || 0;
      transforms.push(`translate(${x}px, ${y}px)`);
    }

    // Apply scale
    if (config.scale !== undefined) {
      transforms.push(`scale(${config.scale})`);
    }

    // Apply rotation
    if (config.rotate) {
      if (config.rotate.mode === '3D') {
        const x = config.rotate.x || 0;
        const y = config.rotate.y || 0;
        const z = config.rotate.z || 0;
        transforms.push(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
      } else {
        const z = config.rotate.z || 0;
        transforms.push(`rotate(${z}deg)`);
      }
    }

    // Apply skew
    if (config.skew) {
      const x = config.skew.x || 0;
      const y = config.skew.y || 0;
      transforms.push(`skew(${x}deg, ${y}deg)`);
    }

    if (transforms.length > 0) {
      animatedState.transform = transforms.join(' ');
      hasAnimated = true;
    }

    // Return keyframes based on loop type
    if (config.loopType === "mirror") {
      return { keyframes: [initialState, animatedState], hasAnimated };
    } else {
      return { keyframes: [initialState, animatedState, initialState], hasAnimated };
    }
  }

  private observer?: IntersectionObserver;

  private setupIntersectionObserver(element: HTMLElement, animation?: Animation): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (animation) {
            if (entry.isIntersecting) {
              animation.play();
            } else {
              animation.pause();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    this.observer.observe(element);
  }

  undo(context: InteractionContext): void {
    // Disconnect observer if exists
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

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
      return Promise.resolve();
    }
    // Disconnect observer if exists
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    const engineType = context.config.engine || "webAnimations";
    const engine =
      engineType === "animateCss" ? new AnimateCssAnimationEngine() : new WebAnimationsAPI();

    // For animate.css animations, smoothly reverse using a CSS transition instead
    if (engine instanceof AnimateCssAnimationEngine) {
      return new Promise<void>((resolve) => {
        const animationClass = `animate__${context.config.animation || "bounce"}`;

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

          // Apply transition
          context.target.style.transition = transitionValue;

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

          const onTransitionEnd = (ev: Event) => {
            // Clean up only after transition
            try {
              properties.forEach((prop) => context.target.style.removeProperty(prop));
              context.target.style.removeProperty('transition');
              context.target.style.removeProperty('--animate-duration');
              context.target.style.removeProperty('--animate-delay');
              context.target.removeEventListener('transitionend', onTransitionEnd);
            } catch (err) {
              /* ignore */
            }
            resolve();
          };

          context.target.addEventListener('transitionend', onTransitionEnd);

          // Fallback timeout
          setTimeout(() => {
            try {
              properties.forEach((prop) => context.target.style.removeProperty(prop));
              context.target.style.removeProperty('transition');
              context.target.style.removeProperty('--animate-duration');
              context.target.style.removeProperty('--animate-delay');
              context.target.removeEventListener('transitionend', onTransitionEnd);
            } catch (err) {
              /* ignore */
            }
            resolve();
          }, (Math.min(context.config.duration || 1000, 600) + 100));
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

        animation.onfinish = () => {
          this.restoreOriginalStyles(context.target);
          this.reverseAnimation = undefined;
          resolve();
        };

        animation.oncancel = () => {
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
}
