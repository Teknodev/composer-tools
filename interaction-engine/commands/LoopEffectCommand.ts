// src/composer-tools/interaction-engine/commands/LoopEffectCommand.ts

import {
  BaseAnimationCommand,
  InteractionContext,
  AnimationEngineType,
  DEFAULT_LOOP_DURATION,
  DEFAULT_EASING,
  DEFAULT_ANIMATE_CSS_ANIMATION,
} from '../core/types';
import { AnimationEngineResolver } from '../core/AnimationEngineResolver';
import { AnimateCssAnimationEngine } from '../animations/AnimateCssAnimationEngine';
import { buildLoopKeyframesFromDefaults } from './animate/KeyframeBuilder';
import { AnimationObserverManager } from './animate/AnimationObserverManager';
import { logger } from '../utils/Logger';

export interface LoopEffectConfig {
  engine?: AnimationEngineType | string;
  type: 'loop' | 'mirror';
  delay?: number;
  opacity?: number;
  scale?: number;
  rotate?: {
    mode: '2D' | '3D';
    x?: number;
    y?: number;
    z?: number;
  };
  skew?: {
    x?: number;
    y?: number;
  };
  offset?: {
    x?: number;
    y?: number;
  };
  offScreen?: 'play' | 'pause';
  transition?: {
    easing: string;
    duration: number;
  };
  // Animate.css specific
  animateCssAnimation?: string;
  animation?: string;
  animateCssDirection?: string;
  animateCssFillMode?: string;
  animateCssDuration?: number;
}

export class LoopEffectCommand extends BaseAnimationCommand {
  private animation?: Animation;
  private observerManager = new AnimationObserverManager();

  async execute(context: InteractionContext): Promise<void> {
    // Cancel any existing animations
    this.cancelAllAnimations();

    const config = context.config as LoopEffectConfig;
    const element = context.target;

    // Resolve animation engine from config
    const engine = AnimationEngineResolver.resolve(config.engine);

    // Store original styles
    this.storeOriginalStyles(element, ['opacity', 'transform']);

    // Route to the correct engine implementation
    if (AnimationEngineResolver.isAnimateCss(config.engine)) {
      await this.executeWithAnimateCss(element, config, engine as AnimateCssAnimationEngine);
    } else {
      await this.executeWithWebAnimations(element, config);
    }
  }

  /**
   * Execute loop effect using the Web Animations API.
   */
  private async executeWithWebAnimations(
    element: HTMLElement,
    config: LoopEffectConfig,
  ): Promise<void> {
    // Create keyframes based on loop type
    const { keyframes } = buildLoopKeyframesFromDefaults(config);

    // Configure animation options
    const animationOptions: KeyframeAnimationOptions = {
      duration: config.transition?.duration || DEFAULT_LOOP_DURATION,
      easing: this.mapEasing(config.transition?.easing || DEFAULT_EASING),
      iterations: Infinity,
      direction: config.type === 'mirror' ? 'alternate' : 'normal',
      delay: config.delay || 0,
      fill: 'both',
    };

    // Create and start the animation
    this.animation = element.animate(keyframes, animationOptions);
    this.activeAnimations.set('loop-effect', this.animation);

    // Setup intersection observer for offScreen behavior
    if (config.offScreen === 'pause') {
      this.observerManager.setup(element, this.animation);
    }
  }

  /**
   * Execute loop effect using Animate.css class-based animations.
   */
  private async executeWithAnimateCss(
    element: HTMLElement,
    config: LoopEffectConfig,
    engine: AnimateCssAnimationEngine,
  ): Promise<void> {
    const animationName =
      config.animateCssAnimation || config.animation || DEFAULT_ANIMATE_CSS_ANIMATION;
    const formattedAnimationName = animationName.startsWith('animate__')
      ? animationName
      : `animate__${animationName}`;

    const animationConfig: Record<string, any> = {
      animation: formattedAnimationName,
      delay: config.delay,
      iterationCount: 'infinite',
      direction: config.type === 'mirror' ? 'alternate' : 'normal',
      fillMode: config.animateCssFillMode || 'both',
      offScreen: config.offScreen,
    };

    const duration = config.animateCssDuration || config.transition?.duration || DEFAULT_LOOP_DURATION;

    const result = await engine.animate(element, animationConfig, duration);

    if (result && typeof result === 'object' && result.cancel) {
      this.cancelAnimation = result.cancel;
    }

    logger.debug('LoopEffectCommand: animate.css loop started', {
      animation: formattedAnimationName,
      type: config.type,
    });
  }

  private mapEasing(easing: string): string {
    const easingMap: Record<string, string> = {
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
      'cubic-bezier': 'cubic-bezier(0.4, 0, 0.2, 1)',
    };
    return easingMap[easing.toLowerCase()] || easing;
  }

  /**
   * Smooth cleanup — captures computed mid-loop position, cancels the
   * infinite animation, then animates back to the original values.
   * Supports abort via forceCancel() for rapid re-triggering.
   */
  async cleanup(context: InteractionContext): Promise<void> {
    // Disconnect observer
    this.observerManager.disconnect();

    const element = context.target;

    // Capture current computed values BEFORE cancelling — this gives us the
    // exact mid-loop position so we can smoothly reverse from it.
    const computedStyle = getComputedStyle(element);
    const currentOpacity = computedStyle.opacity;
    const currentTransform = computedStyle.transform;

    // Cancel all running loop animations
    this.cancelAllAnimations();

    // Freeze element at the captured position via inline styles so it
    // doesn't snap when the Web Animation fill effect is removed.
    element.style.opacity = currentOpacity;
    element.style.transform = currentTransform;

    // Build target from stored originals
    const originalOpacity = this.originalStyles.get('opacity') || '1';
    const originalTransform = this.originalStyles.get('transform') || 'none';

    // If already at original values, just restore immediately
    if (currentOpacity === originalOpacity && currentTransform === originalTransform) {
      this.restoreOriginalStyles(element);
      return;
    }

    const config = context.config as LoopEffectConfig;
    const duration = Math.min(config.transition?.duration || 600, 600);

    return new Promise<void>((resolve) => {
      const animation = element.animate(
        [
          { opacity: currentOpacity, transform: currentTransform },
          { opacity: originalOpacity, transform: originalTransform },
        ],
        {
          duration,
          easing: 'ease-out',
          fill: 'forwards',
        },
      );

      this.reverseAnimation = animation;

      // Allow forceCancel() to abort the reverse animation
      this._cleanupAbortFn = () => {
        animation.cancel();
        // oncancel will handle resolve + reference cleanup
      };

      animation.onfinish = () => {
        this._cleanupAbortFn = undefined;
        this.restoreOriginalStyles(element);
        this.reverseAnimation = undefined;
        resolve();
      };

      animation.oncancel = () => {
        this._cleanupAbortFn = undefined;
        this.reverseAnimation = undefined;
        resolve();
      };
    });
  }

  undo(context: InteractionContext): void {
    // Undo is immediate (called on unmount) — no smooth reverse needed
    this.observerManager.disconnect();
    if (this._cleanupAbortFn) {
      this._cleanupAbortFn();
      this._cleanupAbortFn = undefined;
    }
    this.cancelAllAnimations();
    this.restoreOriginalStyles(context.target);
  }
}
