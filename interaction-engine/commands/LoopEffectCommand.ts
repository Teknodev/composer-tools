// interaction-engine/commands/LoopEffectCommand.ts

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
import { buildIndividualLoopKeyframesFromDefaults, INDIVIDUAL_TRANSFORM_PROPS } from './animate/KeyframeBuilder';
import { normaliseCssEasing } from './animate/easingUtils';
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
  private observerManager = new AnimationObserverManager();

  /**
   * Override forceCancel to also disconnect the observer manager,
   * preventing IntersectionObserver callbacks from firing for cancelled animations.
   */
  public override forceCancel(): void {
    this.observerManager.disconnect();
    super.forceCancel();
  }

  async execute(context: InteractionContext): Promise<void> {
    this.cancelAllAnimations();

    const config = context.config as LoopEffectConfig;
    const element = context.target;

    this.storeOriginalStyles(element, ['opacity', ...INDIVIDUAL_TRANSFORM_PROPS, 'transform']);

    if (AnimationEngineResolver.isAnimateCss(config.engine)) {
      const engine = AnimationEngineResolver.resolve(config.engine) as AnimateCssAnimationEngine;
      await this.executeWithAnimateCss(element, config, engine);
    } else {
      await this.executeWithWebAnimations(element, config);
    }
  }

  private async executeWithWebAnimations(element: HTMLElement, config: LoopEffectConfig): Promise<void> {
    const { tracks, opacityKeyframes } = buildIndividualLoopKeyframesFromDefaults(config);

    const animationOptions: KeyframeAnimationOptions = {
      duration: config.transition?.duration ?? DEFAULT_LOOP_DURATION,
      easing: normaliseCssEasing(config.transition?.easing ?? DEFAULT_EASING),
      iterations: Infinity,
      direction: config.type === 'mirror' ? 'alternate' : 'normal',
      delay: config.delay ?? 0,
      fill: 'both',
    };

    const animations: Animation[] = [];

    // Create per-property transform animations using individual CSS properties
    for (const track of tracks) {
      const anim = element.animate(track.keyframes, animationOptions);
      this.activeAnimations.set(track.key, anim);
      animations.push(anim);
    }

    // Create opacity animation separately
    if (opacityKeyframes) {
      const anim = element.animate(opacityKeyframes, { ...animationOptions, composite: 'replace' });
      this.activeAnimations.set('loop-opacity', anim);
      animations.push(anim);
    }

    if (animations.length > 0) {
      this.cancelAnimation = () => animations.forEach(a => a.cancel());
    }

    if (config.offScreen === 'pause' && animations.length > 0) {
      this.observerManager.setup(element, animations);
    }
  }

  private async executeWithAnimateCss(
    element: HTMLElement,
    config: LoopEffectConfig,
    engine: AnimateCssAnimationEngine,
  ): Promise<void> {
    const animationName = config.animateCssAnimation ?? config.animation ?? DEFAULT_ANIMATE_CSS_ANIMATION;
    const formattedName = animationName.startsWith('animate__') ? animationName : `animate__${animationName}`;

    const result = await engine.animate(
      element,
      {
        animation: formattedName,
        delay: config.delay,
        iterationCount: 'infinite',
        direction: config.type === 'mirror' ? 'alternate' : 'normal',
        fillMode: config.animateCssFillMode ?? 'both',
        offScreen: config.offScreen,
      },
      config.animateCssDuration ?? config.transition?.duration ?? DEFAULT_LOOP_DURATION,
    );

    if (result && typeof result === 'object' && result.cancel) {
      this.cancelAnimation = result.cancel;
    }

    logger.debug('LoopEffectCommand: animate.css loop started', {
      animation: formattedName,
      type: config.type,
    });
  }

  /**
   * Smooth cleanup: captures current mid-loop position, cancels the infinite
   * animation, then smoothly reverses back to the original values.
   * Supports abort via forceCancel() for rapid re-triggering.
   */
  async cleanup(context: InteractionContext): Promise<void> {
    this.observerManager.disconnect();

    const element = context.target;
    const computed = getComputedStyle(element);
    const currentOpacity = computed.opacity;
    const currentScale = computed.getPropertyValue('scale') || 'none';
    const currentTranslate = computed.getPropertyValue('translate') || 'none';
    const currentRotate = computed.getPropertyValue('rotate') || 'none';
    const currentTransform = computed.transform;

    this.cancelAllAnimations();

    // Freeze element at the captured mid-loop position so it doesn't snap.
    element.style.opacity = currentOpacity;
    element.style.setProperty('scale', currentScale);
    element.style.setProperty('translate', currentTranslate);
    element.style.setProperty('rotate', currentRotate);
    element.style.transform = currentTransform;

    const originalOpacity = this.originalStyles.get('opacity') ?? '1';
    const originalScale = this.originalStyles.get('scale') ?? 'none';
    const originalTranslate = this.originalStyles.get('translate') ?? 'none';
    const originalRotate = this.originalStyles.get('rotate') ?? 'none';
    const originalTransform = this.originalStyles.get('transform') ?? 'none';

    // Normalise identity transforms before comparing: the browser may return
    // 'matrix(1, 0, 0, 1, 0, 0)' for an element whose stored original is 'none'.
    const IDENTITY_PATTERNS = new Set(['none', 'matrix(1, 0, 0, 1, 0, 0)']);
    const normalizeTransform = (t: string) =>
      IDENTITY_PATTERNS.has(t.trim()) ? 'none' : t;

    const isAtOriginal =
      currentOpacity === originalOpacity &&
      normalizeTransform(currentTransform) === normalizeTransform(originalTransform) &&
      currentScale === originalScale &&
      currentTranslate === originalTranslate &&
      currentRotate === originalRotate;

    if (isAtOriginal) {
      this.restoreOriginalStyles(element);
      return;
    }

    const config = context.config as LoopEffectConfig;
    const duration = Math.min(config.transition?.duration ?? 600, 600);

    return new Promise<void>((resolve) => {
      const animation = element.animate(
        [
          {
            opacity: currentOpacity, scale: currentScale, translate: currentTranslate,
            rotate: currentRotate, transform: currentTransform,
          },
          {
            opacity: originalOpacity, scale: originalScale, translate: originalTranslate,
            rotate: originalRotate, transform: originalTransform,
          },
        ],
        { duration, easing: 'ease-out', fill: 'forwards' },
      );

      this.reverseAnimation = animation;
      this._cleanupAbortFn = () => animation.cancel();

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
    this.observerManager.disconnect();
    if (this._cleanupAbortFn) {
      this._cleanupAbortFn();
      this._cleanupAbortFn = undefined;
    }
    this.cancelAllAnimations();
    this.restoreOriginalStyles(context.target);
  }
}
