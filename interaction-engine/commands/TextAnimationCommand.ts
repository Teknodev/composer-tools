// interaction-engine/commands/TextAnimationCommand.ts

import {
  BaseAnimationCommand,
  InteractionContext,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_EASING,
} from '../core/types';
import { AnimationEngineResolver } from '../core/AnimationEngineResolver';
import { logger } from '../utils/Logger';
import { TEXT_ANIMATION_PRESETS } from '../text-animations/presets';
import { normaliseCssEasing } from './animate/easingUtils';

export class TextAnimationCommand extends BaseAnimationCommand {
  async execute(context: InteractionContext): Promise<void> {
    logger.debug('TextAnimationCommand.execute', {
      element: context.target,
      config: context.config,
      metadata: context.metadata,
    });

    const textAnimationConfig = context.config.textAnimation;
    if (!textAnimationConfig) {
      logger.warn('TextAnimationCommand: no textAnimation config provided');
      return;
    }

    this.cancelAllAnimations();

    const preset = TEXT_ANIMATION_PRESETS[textAnimationConfig.preset];
    if (!preset) {
      logger.warn(`TextAnimationCommand: preset "${textAnimationConfig.preset}" not found`);
      return;
    }

    const textContent = context.target.textContent ?? '';
    if (!textContent.trim()) {
      logger.warn('TextAnimationCommand: target element has no text content');
      return;
    }

    await this.applyTextAnimation(context.target, textAnimationConfig, preset, textContent, context.config);
  }

  private async applyTextAnimation(
    target: HTMLElement,
    config: any,
    preset: any,
    textContent: string,
    fullConfig?: any,
  ): Promise<void> {
    const { granularity, enterEffect, transition } = config;

    const textSegments = this.splitText(textContent, granularity);

    if (!target.hasAttribute('data-original-text')) {
      target.setAttribute('data-original-text', target.textContent ?? '');
    }

    target.innerHTML = '';
    // Restore target-level visibility (may have been hidden by cleanup)
    target.style.removeProperty('opacity');

    const spans: HTMLSpanElement[] = [];
    const animatableSpans: HTMLSpanElement[] = [];

    // Determine initial styles so characters start hidden/transformed before their animation fires
    const initialStyles = (enterEffect && preset.supportsEnterEffect)
      ? this.getInitialStylesForEnterEffect(enterEffect)
      : this.getInitialStylesForPreset(preset, fullConfig);

    for (const segment of textSegments) {
      const span = document.createElement('span');
      span.textContent = segment;

      if (segment.trim().length > 0) {
        span.style.display = 'inline-block';
        span.style.whiteSpace = 'pre';
        // Apply initial animation state so the character is not visible before its turn
        Object.assign(span.style, initialStyles);
        animatableSpans.push(span);
      } else {
        span.style.display = 'inline';
      }

      spans.push(span);
      target.appendChild(span);
    }

    if (enterEffect && preset.supportsEnterEffect) {
      if (AnimationEngineResolver.isAnimateCss(fullConfig?.engine)) {
        await this.applyEnterEffectsWithAnimateCss(animatableSpans, enterEffect, transition, fullConfig);
      } else {
        await this.applyEnterEffects(animatableSpans, enterEffect, transition);
      }
    } else if (preset.id === 'custom' && AnimationEngineResolver.isAnimateCss(fullConfig?.engine)) {
      await this.applyAnimateCssToSpans(animatableSpans, fullConfig, transition);
    } else {
      await this.applyPresetAnimation(animatableSpans, preset, transition, fullConfig);
    }
  }

  private splitText(text: string, granularity: string): string[] {
    switch (granularity) {
      case 'character':
        return text.split('');
      case 'word':
        return text.split(/(\s+)/).filter((s) => s.length > 0);
      case 'layer':
      case 'element':
        return [text];
      default:
        return text.split('');
    }
  }

  private async applyEnterEffects(
    spans: HTMLSpanElement[],
    enterEffect: any,
    transition: any,
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.delay ?? 100);

      if (enterEffect.opacity?.active) span.style.opacity = String(enterEffect.opacity.value);
      if (enterEffect.scale?.active) span.style.transform = `scale(${enterEffect.scale.value})`;
      if (enterEffect.blur?.active) span.style.filter = `blur(${enterEffect.blur.value}px)`;

      const animation = span.animate(
        [
          {
            opacity: enterEffect.opacity?.active ? enterEffect.opacity.value : 1,
            transform: enterEffect.scale?.active ? `scale(${enterEffect.scale.value})` : 'scale(1)',
            filter: enterEffect.blur?.active ? `blur(${enterEffect.blur.value}px)` : 'blur(0px)',
          },
          { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
        ],
        {
          duration: transition?.duration ?? DEFAULT_ANIMATION_DURATION,
          delay,
          easing: normaliseCssEasing(transition?.easing ?? DEFAULT_EASING),
          fill: 'both',
        },
      );

      this.activeAnimations.set(`span-${index}`, animation);
      promises.push(new Promise((resolve) => animation.addEventListener('finish', () => resolve())));
    });

    await Promise.all(promises);
  }

  private async applyEnterEffectsWithAnimateCss(
    spans: HTMLSpanElement[],
    enterEffect: any,
    transition: any,
    fullConfig?: any,
  ): Promise<void> {
    const animationName = fullConfig?.animateCssAnimation ?? fullConfig?.animation ?? 'fadeIn';
    const duration = transition?.duration ?? fullConfig?.duration ?? DEFAULT_ANIMATION_DURATION;
    const formattedName = animationName.startsWith('animate__') ? animationName : `animate__${animationName}`;

    const promises = spans.map((span, index) => {
      const delay = index * (transition?.delay ?? 100);

      if (enterEffect.opacity?.active) span.style.opacity = String(enterEffect.opacity.value);
      if (enterEffect.scale?.active) span.style.transform = `scale(${enterEffect.scale.value})`;
      if (enterEffect.blur?.active) span.style.filter = `blur(${enterEffect.blur.value}px)`;

      span.style.setProperty('--animate-duration', `${duration}ms`);
      span.style.setProperty('--animate-delay', `${delay}ms`);
      span.classList.add('animate__animated', formattedName);

      return new Promise<void>((resolve) => {
        const handleEnd = () => {
          span.removeEventListener('animationend', handleEnd);
          span.style.opacity = '1';
          span.style.transform = 'none';
          span.style.filter = 'none';
          span.classList.remove('animate__animated', formattedName);
          span.style.removeProperty('--animate-duration');
          span.style.removeProperty('--animate-delay');
          resolve();
        };
        span.addEventListener('animationend', handleEnd);
        // Fallback in case animationend doesn't fire
        setTimeout(() => {
          span.removeEventListener('animationend', handleEnd);
          span.style.opacity = '1';
          span.style.transform = 'none';
          span.style.filter = 'none';
          resolve();
        }, duration + delay + 100);
      });
    });

    await Promise.all(promises);
  }

  private async applyAnimateCssToSpans(
    spans: HTMLSpanElement[],
    config: any,
    transition: any,
  ): Promise<void> {
    const promises = spans.map((span, index) => {
      const delay = index * (transition?.staggerDelay ?? 100);
      const animationName = config.animation ?? 'bounce';
      const duration = config.duration ?? DEFAULT_ANIMATION_DURATION;

      span.style.animationName = animationName;
      span.style.animationDuration = `${duration}ms`;
      span.style.animationDelay = `${delay}ms`;
      span.style.animationIterationCount = String(config.iterationCount ?? 1);
      span.style.animationDirection = config.animationDirection ?? config.animateCssDirection ?? config.direction ?? 'normal';
      span.style.animationFillMode = config.fillMode ?? 'both';

      return new Promise<void>((resolve) => {
        const handleEnd = () => {
          span.removeEventListener('animationend', handleEnd);
          resolve();
        };
        span.addEventListener('animationend', handleEnd);
        // Fallback timeout in case animationend never fires
        // (e.g. invalid animation name, element hidden, etc.)
        const iterationCount = typeof config.iterationCount === 'number' ? config.iterationCount : 1;
        const totalDuration = duration * iterationCount + delay + 1000;
        setTimeout(() => {
          span.removeEventListener('animationend', handleEnd);
          resolve();
        }, totalDuration);
      });
    });

    await Promise.all(promises);
  }

  private async applyPresetAnimation(
    spans: HTMLSpanElement[],
    preset: any,
    transition: any,
    fullConfig?: any,
  ): Promise<void> {
    const promises = spans.map((span, index) => {
      const delay = index * (transition?.delay ?? transition?.staggerDelay ?? 100);
      const keyframes = this.createKeyframesForPreset(preset, transition, fullConfig);

      const animation = span.animate(keyframes, {
        duration: transition?.duration ?? preset.defaultConfig?.timing?.duration ?? DEFAULT_ANIMATION_DURATION,
        delay,
        easing: normaliseCssEasing(transition?.easing ?? preset.defaultConfig?.timing?.easing ?? DEFAULT_EASING),
        fill: 'both',
        iterations: 1,
      });

      this.activeAnimations.set(`span-${index}`, animation);
      return new Promise<void>((resolve) => animation.addEventListener('finish', () => resolve()));
    });

    await Promise.all(promises);
  }

  private createKeyframesForPreset(preset: any, transition: any, fullConfig?: any): Keyframe[] {
    if (preset.id === 'custom' && fullConfig) {
      const transforms = [
        fullConfig.scale !== undefined && fullConfig.scale !== 1 && `scale(${fullConfig.scale})`,
        fullConfig.rotate?.z && `rotate(${fullConfig.rotate.z}deg)`,
        fullConfig.rotate?.x && `rotateX(${fullConfig.rotate.x}deg)`,
        fullConfig.rotate?.y && `rotateY(${fullConfig.rotate.y}deg)`,
        fullConfig.skew?.x && `skewX(${fullConfig.skew.x}deg)`,
        fullConfig.skew?.y && `skewY(${fullConfig.skew.y}deg)`,
        (fullConfig.offset?.x || fullConfig.offset?.y) &&
          `translate(${fullConfig.offset.x ?? 0}px, ${fullConfig.offset.y ?? 0}px)`,
      ]
        .filter(Boolean)
        .join(' ');

      return [
        { opacity: fullConfig.opacity ?? 0, transform: transforms || 'scale(0.5)' },
        { opacity: 1, transform: 'none' },
      ];
    }

    switch (preset.id) {
      case 'blur':
        return [{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)' }];
      case 'flip':
        return [{ opacity: 0, transform: 'rotateY(180deg)' }, { opacity: 1, transform: 'rotateY(0deg)' }];
      case 'shake':
        return [
          { transform: 'translateX(-5px)' },
          { transform: 'translateX(5px)' },
          { transform: 'translateX(-5px)' },
          { transform: 'translateX(5px)' },
          { transform: 'translateX(0px)' },
        ];
      case 'shoot':
        return [{ opacity: 0, transform: 'translateY(100%)' }, { opacity: 1, transform: 'translateY(0%)' }];
      case 'rotate':
        return [{ opacity: 0, transform: 'rotate(360deg)' }, { opacity: 1, transform: 'rotate(0deg)' }];
      case 'scale':
        return [{ opacity: 0, transform: 'scale(0.5)' }, { opacity: 1, transform: 'scale(1)' }];
      case 'stagger':
      default:
        return [{ opacity: 0 }, { opacity: 1 }];
    }
  }

  /**
   * Returns inline CSS properties matching the first keyframe of a preset animation.
   * Applied to each span before it is appended to the DOM so characters start in
   * their "from" state (e.g. invisible / blurred / transformed) rather than
   * flashing visible during stagger delays.
   */
  private getInitialStylesForPreset(
    preset: any,
    fullConfig?: any,
  ): Record<string, string> {
    if (preset.id === 'custom' && fullConfig) {
      const transforms = [
        fullConfig.scale !== undefined && fullConfig.scale !== 1 && `scale(${fullConfig.scale})`,
        fullConfig.rotate?.z && `rotate(${fullConfig.rotate.z}deg)`,
        fullConfig.rotate?.x && `rotateX(${fullConfig.rotate.x}deg)`,
        fullConfig.rotate?.y && `rotateY(${fullConfig.rotate.y}deg)`,
        fullConfig.skew?.x && `skewX(${fullConfig.skew.x}deg)`,
        fullConfig.skew?.y && `skewY(${fullConfig.skew.y}deg)`,
        (fullConfig.offset?.x || fullConfig.offset?.y) &&
          `translate(${fullConfig.offset.x ?? 0}px, ${fullConfig.offset.y ?? 0}px)`,
      ]
        .filter(Boolean)
        .join(' ');

      return {
        opacity: String(fullConfig.opacity ?? 0),
        transform: transforms || 'scale(0.5)',
      };
    }

    switch (preset.id) {
      case 'blur':
        return { opacity: '0', filter: 'blur(10px)' };
      case 'flip':
        return { opacity: '0', transform: 'rotateY(180deg)' };
      case 'shoot':
        return { opacity: '0', transform: 'translateY(100%)' };
      case 'rotate':
        return { opacity: '0', transform: 'rotate(360deg)' };
      case 'scale':
        return { opacity: '0', transform: 'scale(0.5)' };
      case 'stagger':
        return { opacity: '0' };
      case 'shake':
        // Shake has no opacity entrance — characters stay visible
        return {};
      default:
        return { opacity: '0' };
    }
  }

  /**
   * Returns inline CSS properties matching the initial enter-effect state.
   * Used when the preset supports custom enter effects.
   */
  private getInitialStylesForEnterEffect(enterEffect: any): Record<string, string> {
    const styles: Record<string, string> = {};
    if (enterEffect.opacity?.active) styles.opacity = String(enterEffect.opacity.value);
    if (enterEffect.scale?.active) styles.transform = `scale(${enterEffect.scale.value})`;
    if (enterEffect.blur?.active) styles.filter = `blur(${enterEffect.blur.value}px)`;
    return styles;
  }

  undo(context: InteractionContext): void {
    this.cancelAllAnimations();
    const originalText = context.target.getAttribute('data-original-text');
    if (originalText !== null) {
      context.target.textContent = originalText;
      context.target.removeAttribute('data-original-text');
    }
  }

  async cleanup(context: InteractionContext): Promise<void> {
    const target = context.target;
    const originalText = target.getAttribute('data-original-text');

    if (!originalText) return;

    const spans = Array.from(target.querySelectorAll('span')) as HTMLSpanElement[];

    if (spans.length === 0) {
      target.textContent = originalText;
      target.removeAttribute('data-original-text');
      return;
    }

    let aborted = false;
    this._cleanupAbortFn = () => { aborted = true; };

    const duration = 300;
    const promises = spans.map((span) => {
      const animation = span.animate(
        [{ opacity: getComputedStyle(span).opacity }, { opacity: '0' }],
        { duration, easing: 'ease-out', fill: 'forwards' },
      );
      return new Promise<void>((resolve) => {
        animation.onfinish = () => resolve();
        animation.oncancel = () => resolve();
      });
    });

    try {
      await Promise.all(promises);
    } catch {
      // animations cancelled
    }

    // Always cancel and clear tracked animations — even on abort — to prevent
    // ghost animations from the previous applyPresetAnimation / applyEnterEffects call.
    this.activeAnimations.forEach((animation) => { try { animation.cancel(); } catch { /* noop */ } });
    this.activeAnimations.clear();
    this.cleanupFunctions.forEach((fn) => fn());
    this.cleanupFunctions.clear();

    if (aborted) {
      this._cleanupAbortFn = undefined;
      return;
    }
    this._cleanupAbortFn = undefined;

    target.textContent = originalText;
    target.removeAttribute('data-original-text');
    // Keep content invisible so it won't flash when re-entering viewport
    target.style.opacity = '0';
  }
}
