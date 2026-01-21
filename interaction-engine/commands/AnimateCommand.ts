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
    const isLoopMode = context.config.loopType || context.config.scale || context.config.rotate || context.config.skew || context.config.offset;

    if (isLoopMode) {
      // Loop/Transform Animation Mode
      await this.executeLoopAnimation(context);
    } else {
      // Standard property animation
      const targetValue = context.config.value || context.config.to || 0.8;

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

    // Build keyframes based on config
    const keyframes = this.buildLoopKeyframes(config);

    // Configure animation options
    const loopType = config.loopType || "loop";
    
    // Use configured iterationCount, default to 1 if not specified
    const iterations = config.iterationCount === "infinite" ? Infinity : (config.iterationCount || 1);

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

  private buildLoopKeyframes(config: any): Keyframe[] {
    const initialState: Keyframe = {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
    };

    const animatedState: Keyframe = {};

    // Apply opacity
    if (config.opacity !== undefined) {
      animatedState.opacity = config.opacity;
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
    }

    // Return keyframes based on loop type
    if (config.loopType === "mirror") {
      return [initialState, animatedState];
    } else {
      return [initialState, animatedState, initialState];
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

  cleanup(context: InteractionContext): void {
    // Disconnect observer if exists
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    const engineType = context.config.engine || "webAnimations";
    const engine =
      engineType === "animateCss" ? new AnimateCssAnimationEngine() : new WebAnimationsAPI();

    // For animate.css animations, remove classes and styles with transition
    if (engine instanceof AnimateCssAnimationEngine) {
      // Add transition before removing animation
      context.target.style.transition = 'all 0.3s ease-out';
      
      setTimeout(() => {
        context.target.classList.remove(
          "animate__animated",
          `animate__${context.config.animation || "bounce"}`
        );
        context.target.style.removeProperty("--animate-duration");
        context.target.style.removeProperty("--animate-delay");
        context.target.style.removeProperty("animation-iteration-count");
        context.target.style.removeProperty("animation-direction");
        context.target.style.removeProperty("animation-fill-mode");

        // Restore any original inline styles that were saved when the animation started
        try {
          this.restoreOriginalStyles(context.target);
        } catch (err) {
          /* ignore */
        }
        
        // Remove transition after animation is removed
        setTimeout(() => {
          context.target.style.removeProperty("transition");
        }, 300);
      }, 10);
      return;
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
      };

      animation.oncancel = () => {
        this.reverseAnimation = undefined;
      };
    } else {
      // Fallback if no original values stored
      this.cancelAllAnimations();
      this.restoreOriginalStyles(context.target);
    }
  }
}
