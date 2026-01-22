// src/composer-tools/interaction-engine/commands/TextAnimationCommand.ts

import { BaseAnimationCommand, InteractionContext } from '../core/types';
import { TEXT_ANIMATION_PRESETS } from '../text-animations/presets';

export class TextAnimationCommand extends BaseAnimationCommand {

  private mapEasing(easing: string): string {
    // The easing values are already in CSS format, but handle legacy camelCase values
    const easingMap: Record<string, string> = {
      'ease': 'ease',
      'easeIn': 'ease-in',
      'easeOut': 'ease-out',
      'easeInOut': 'ease-in-out',
      'linear': 'linear',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    };
    return easingMap[easing] || easing; // Return the easing as-is if it's already valid
  }

  async execute(context: InteractionContext): Promise<void> {
    // Debug log to confirm execution in preview/page
    // eslint-disable-next-line no-console
    console.log('TextAnimationCommand.execute called', {
      element: context.target,
      config: context.config,
      metadata: context.metadata,
    });

    const textAnimationConfig = context.config.textAnimation;
    if (!textAnimationConfig) {
      console.warn('No text animation config provided');
      return;
    }

    // Cancel any existing animations for this element
    this.cancelAllAnimations();

    const preset = TEXT_ANIMATION_PRESETS[textAnimationConfig.preset];
    if (!preset) {
      console.warn(`Text animation preset "${textAnimationConfig.preset}" not found`);
      return;
    }

    // Get text content from the element (not from config)
    const textContent = context.target.textContent || '';
    if (!textContent.trim()) {
      console.warn('No text content found in target element for text animation');
      return;
    }

    // Apply the animation based on granularity
    await this.applyTextAnimation(context.target, textAnimationConfig, preset, textContent, context.config);
  }

  private async applyTextAnimation(
    target: HTMLElement,
    config: any,
    preset: any,
    textContent: string,
    fullConfig?: any
  ): Promise<void> {
    // Debug: report invocation details
    // eslint-disable-next-line no-console
    console.log('[TextAnimation] applyTextAnimation start', { target, config, preset, textContent, fullConfig });
    const { granularity, enterEffect, transition } = config;

    // Split text based on granularity
    const textSegments = this.splitText(textContent, granularity);

    // Save original text for restoration
    if (!target.hasAttribute('data-original-text')) {
      target.setAttribute('data-original-text', target.textContent || '');
    }

    // Clear existing content
    target.innerHTML = '';

    // Create spans for each segment
    const spans: HTMLSpanElement[] = [];
    const animatableSpans: HTMLSpanElement[] = [];
    textSegments.forEach((segment, index) => {
      const span = document.createElement('span');
      span.textContent = segment;

      if (segment.trim().length > 0) {
        // This is a word/character segment that should be animated
        span.style.display = 'inline-block';
        span.style.whiteSpace = 'pre';
        spans.push(span);
        animatableSpans.push(span);
      } else {
        // This is whitespace that should not be animated
        span.style.display = 'inline';
        spans.push(span); // Include in DOM but not in animation
      }

      target.appendChild(span);
    });
      // Debug: report spans created
      // eslint-disable-next-line no-console
      console.log('[TextAnimation] spans created', { total: spans.length, animatable: animatableSpans.length });

      // Apply enter effects
      if (enterEffect && preset.supportsEnterEffect) {
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] using enterEffect branch');
        await this.applyEnterEffects(animatableSpans, enterEffect, transition);
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] enterEffect complete');
      } else if (preset.id === 'custom' && fullConfig?.engine === 'animateCss') {
        // Apply Animate.css for custom preset
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] using animateCss branch for custom preset');
        await this.applyAnimateCssToSpans(animatableSpans, fullConfig, transition);
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] animateCss custom preset complete');
      } else {
        // Apply basic preset animation
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] using preset animation branch', { presetId: preset.id });
        await this.applyPresetAnimation(animatableSpans, preset, transition, fullConfig);
        // eslint-disable-next-line no-console
        console.log('[TextAnimation] preset animation complete');
      }
  }

  private async applyAnimateCssToSpans(
    spans: HTMLSpanElement[],
    config: any,
    transition: any
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.staggerDelay || 100);
      
      // Apply Animate.css animation
      const animationName = config.animation || 'bounce';
      const duration = config.duration || 1000;
      const iterationCount = config.iterationCount || 1;
      const direction = config.direction || 'normal';
      const fillMode = config.fillMode || 'both';
      
      span.style.animationName = animationName;
      span.style.animationDuration = `${duration}ms`;
      span.style.animationDelay = `${delay}ms`;
      span.style.animationIterationCount = String(iterationCount);
      span.style.animationDirection = direction;
      span.style.animationFillMode = fillMode;
      
      promises.push(new Promise<void>(resolve => {
        const handleAnimationEnd = () => {
          span.removeEventListener('animationend', handleAnimationEnd);
          resolve();
        };
        span.addEventListener('animationend', handleAnimationEnd);
      }));
    });

    await Promise.all(promises);
  }

  private splitText(text: string, granularity: string): string[] {
    switch (granularity) {
      case 'character':
        return text.split('');
      case 'word':
        // Split on whitespace but preserve spaces between words
        const words = text.split(/(\s+)/);
        // Filter out empty strings but keep spaces
        return words.filter(segment => segment.length > 0);
      case 'layer':
        return [text]; // Single layer
      case 'element':
        return [text]; // Single element
      default:
        return text.split('');
    }
  }

  private async applyEnterEffects(
    spans: HTMLSpanElement[],
    enterEffect: any,
    transition: any
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.delay || 100);

      // Apply initial enter effect styles
      if (enterEffect.opacity?.active) {
        span.style.opacity = enterEffect.opacity.value.toString();
      }
      if (enterEffect.scale?.active) {
        span.style.transform = `scale(${enterEffect.scale.value})`;
      }
      if (enterEffect.blur?.active) {
        span.style.filter = `blur(${enterEffect.blur.value}px)`;
      }

      // Animate to final state
      const animation = span.animate([
        {
          opacity: enterEffect.opacity?.active ? enterEffect.opacity.value : 1,
          transform: enterEffect.scale?.active ? `scale(${enterEffect.scale.value})` : 'scale(1)',
          filter: enterEffect.blur?.active ? `blur(${enterEffect.blur.value}px)` : 'blur(0px)',
        },
        {
          opacity: 1,
          transform: 'scale(1)',
          filter: 'blur(0px)',
        }
      ], {
        duration: transition?.duration || 1000,
        delay,
        easing: this.mapEasing(transition?.easing || 'ease'),
        fill: 'forwards',
      });

      this.activeAnimations.set(`span-${index}`, animation);
      promises.push(new Promise(resolve => {
        animation.addEventListener('finish', () => resolve());
      }));
    });

    await Promise.all(promises);
  }

  private async applyPresetAnimation(
    spans: HTMLSpanElement[],
    preset: any,
    transition: any,
    fullConfig?: any
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.delay || transition?.staggerDelay || 100);

      // Create keyframes based on preset
      const keyframes = this.createKeyframesForPreset(preset, transition, fullConfig);

      const animation = span.animate(keyframes, {
        duration: transition?.duration || preset.defaultConfig?.timing?.duration || 1000,
        delay,
        easing: this.mapEasing(transition?.easing || preset.defaultConfig?.timing?.easing || 'ease'),
        fill: 'forwards',
        iterations: 1,
      });

      this.activeAnimations.set(`span-${index}`, animation);
      promises.push(new Promise(resolve => {
        animation.addEventListener('finish', () => resolve());
      }));
    });

    await Promise.all(promises);
  }

  private createKeyframesForPreset(preset: any, transition: any, fullConfig?: any): Keyframe[] {
    const duration = transition?.duration || preset.defaultConfig?.timing?.duration || 1000;

    // Handle custom preset with Web Animation API config
    if (preset.id === 'custom' && fullConfig) {
      const startTransforms = [
        fullConfig.scale !== undefined && fullConfig.scale !== 1 && `scale(${fullConfig.scale})`,
        fullConfig.rotate?.z && `rotate(${fullConfig.rotate.z}deg)`,
        fullConfig.rotate?.x && `rotateX(${fullConfig.rotate.x}deg)`,
        fullConfig.rotate?.y && `rotateY(${fullConfig.rotate.y}deg)`,
        fullConfig.skew?.x && `skewX(${fullConfig.skew.x}deg)`,
        fullConfig.skew?.y && `skewY(${fullConfig.skew.y}deg)`,
        (fullConfig.offset?.x || fullConfig.offset?.y) && `translate(${fullConfig.offset.x || 0}px, ${fullConfig.offset.y || 0}px)`,
      ].filter(Boolean).join(' ');

      return [
        { 
          opacity: fullConfig.opacity !== undefined ? fullConfig.opacity : 0, 
          transform: startTransforms || 'scale(0.5)' 
        },
        { 
          opacity: 1, 
          transform: 'none' 
        }
      ];
    }

    switch (preset.id) {
      case 'blur':
        return [
          { opacity: 0, filter: 'blur(10px)' },
          { opacity: 1, filter: 'blur(0px)' }
        ];
      case 'flip':
        return [
          { opacity: 0, transform: 'rotateY(180deg)' },
          { opacity: 1, transform: 'rotateY(0deg)' }
        ];
      case 'shake':
        return [
          { transform: 'translateX(-5px)' },
          { transform: 'translateX(5px)' },
          { transform: 'translateX(-5px)' },
          { transform: 'translateX(5px)' },
          { transform: 'translateX(0px)' }
        ];
      case 'shoot':
        return [
          { opacity: 0, transform: 'translateY(100%)' },
          { opacity: 1, transform: 'translateY(0%)' }
        ];
      case 'rotate':
        return [
          { opacity: 0, transform: 'rotate(360deg)' },
          { opacity: 1, transform: 'rotate(0deg)' }
        ];
      case 'scale':
        return [
          { opacity: 0, transform: 'scale(0.5)' },
          { opacity: 1, transform: 'scale(1)' }
        ];
      case 'stagger':
        return [
          { opacity: 0 },
          { opacity: 1 }
        ];
      default:
        return [
          { opacity: 0 },
          { opacity: 1 }
        ];
    }
  }

  private cancelAnimations(target: HTMLElement): void {
    // Cancel all active animations
    this.activeAnimations.forEach((animation, key) => {
      if (key.startsWith('span-')) {
        animation.cancel();
      }
    });
    this.activeAnimations.clear();

    // Run cleanup functions
    this.cleanupFunctions.forEach(cleanup => cleanup());
    this.cleanupFunctions.clear();

    // Restore original content
    const originalText = target.getAttribute('data-original-text');
    if (originalText) {
      target.textContent = originalText;
      target.removeAttribute('data-original-text');
    }
  }

  undo(context: InteractionContext): void {
    this.cancelAnimations(context.target);
  }

  cleanup(context: InteractionContext): void {
    // For text animations, don't interrupt on hover out - let them complete naturally
    // Only cancel if explicitly requested (e.g., on component unmount)
    return;
  }
}