// src/composer-tools/interaction-engine/commands/TextAnimationCommand.ts

import {
  BaseAnimationCommand,
  InteractionContext,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_EASING,
} from "../core/types";
import { AnimationEngineResolver } from "../core/AnimationEngineResolver";
import { logger } from "../utils/Logger";
import { TEXT_ANIMATION_PRESETS } from "../text-animations/presets";

export class TextAnimationCommand extends BaseAnimationCommand {
  constructor() {
    super();
    logger.debug("TextAnimationCommand instantiated");
  } 
  private mapEasing(easing: string): string {
    // The easing values are already in CSS format, but handle legacy camelCase values
    const easingMap: Record<string, string> = {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      linear: "linear",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
    };
    return easingMap[easing] || easing; // Return the easing as-is if it's already valid
  }

  async execute(context: InteractionContext): Promise<void> {
    // Debug log to confirm execution in preview/page
    logger.debug("TextAnimationCommand.execute called", {
      element: context.target,
      config: context.config,
      metadata: context.metadata,
    });

    const textAnimationConfig = context.config.textAnimation;
    if (!textAnimationConfig) {
      logger.warn("No text animation config provided");
      return;
    }

    // Cancel any existing animations for this element
    this.cancelAllAnimations();

    const preset = TEXT_ANIMATION_PRESETS[textAnimationConfig.preset];
    if (!preset) {
      logger.warn(`Text animation preset "${textAnimationConfig.preset}" not found`);
      return;
    }

    // Get text content from the element (not from config)
    const textContent = context.target.textContent || "";
    if (!textContent.trim()) {
      logger.warn("No text content found in target element for text animation");
      return;
    }

    // Apply the animation based on granularity
    await this.applyTextAnimation(
      context.target,
      textAnimationConfig,
      preset,
      textContent,
      context.config,
    );
  }

  private async applyTextAnimation(
    target: HTMLElement,
    config: any,
    preset: any,
    textContent: string,
    fullConfig?: any,
  ): Promise<void> {
    // Debug: report invocation details
    logger.debug("[TextAnimation] applyTextAnimation start", {
      target,
      config,
      preset,
      textContent,
      fullConfig,
    });
    const { granularity, enterEffect, transition } = config;

    // Split text based on granularity
    const textSegments = this.splitText(textContent, granularity);

    // Save original text for restoration
    if (!target.hasAttribute("data-original-text")) {
      target.setAttribute("data-original-text", target.textContent || "");
    }

    // Clear existing content
    target.innerHTML = "";

    // Create spans for each segment
    const spans: HTMLSpanElement[] = [];
    const animatableSpans: HTMLSpanElement[] = [];
    textSegments.forEach((segment, index) => {
      const span = document.createElement("span");
      span.textContent = segment;

      if (segment.trim().length > 0) {
        // This is a word/character segment that should be animated
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre";
        spans.push(span);
        animatableSpans.push(span);
      } else {
        // This is whitespace that should not be animated
        span.style.display = "inline";
        spans.push(span); // Include in DOM but not in animation
      }

      target.appendChild(span);
    });
    // Debug: report spans created
    logger.debug("[TextAnimation] spans created", {
      total: spans.length,
      animatable: animatableSpans.length,
    });

    // Apply enter effects
    if (enterEffect && preset.supportsEnterEffect) {
      logger.debug("[TextAnimation] using enterEffect branch");
      // Resolve engine from config to decide animation strategy
      if (AnimationEngineResolver.isAnimateCss(fullConfig?.engine)) {
        await this.applyEnterEffectsWithAnimateCss(animatableSpans, enterEffect, transition, fullConfig);
      } else {
        await this.applyEnterEffects(animatableSpans, enterEffect, transition);
      }
      logger.debug("[TextAnimation] enterEffect complete");
    } else if (preset.id === "custom" && AnimationEngineResolver.isAnimateCss(fullConfig?.engine)) {
      // Apply Animate.css for custom preset
      logger.debug("[TextAnimation] using animateCss branch for custom preset");
      await this.applyAnimateCssToSpans(animatableSpans, fullConfig, transition);
      logger.debug("[TextAnimation] animateCss custom preset complete");
    } else {
      // Apply basic preset animation
      logger.debug("[TextAnimation] using preset animation branch", { presetId: preset.id });
      await this.applyPresetAnimation(animatableSpans, preset, transition, fullConfig);
      logger.debug("[TextAnimation] preset animation complete");
    }
  }

  private async applyAnimateCssToSpans(
    spans: HTMLSpanElement[],
    config: any,
    transition: any,
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.staggerDelay || 100);

      // Apply Animate.css animation
      const animationName = config.animation || "bounce";
      const duration = config.duration || DEFAULT_ANIMATION_DURATION;
      const iterationCount = config.iterationCount || 1;
      const direction = config.animationDirection || config.animateCssDirection || config.direction || "normal";
      const fillMode = config.fillMode || "both";

      span.style.animationName = animationName;
      span.style.animationDuration = `${duration}ms`;
      span.style.animationDelay = `${delay}ms`;
      span.style.animationIterationCount = String(iterationCount);
      span.style.animationDirection = direction;
      span.style.animationFillMode = fillMode;

      promises.push(
        new Promise<void>((resolve) => {
          const handleAnimationEnd = () => {
            span.removeEventListener("animationend", handleAnimationEnd);
            resolve();
          };
          span.addEventListener("animationend", handleAnimationEnd);
        }),
      );
    });

    await Promise.all(promises);
  }

  private splitText(text: string, granularity: string): string[] {
    switch (granularity) {
      case "character":
        return text.split("");
      case "word":
        // Split on whitespace but preserve spaces between words
        const words = text.split(/(\s+)/);
        // Filter out empty strings but keep spaces
        return words.filter((segment) => segment.length > 0);
      case "layer":
        return [text]; // Single layer
      case "element":
        return [text]; // Single element
      default:
        return text.split("");
    }
  }

  private async applyEnterEffects(
    spans: HTMLSpanElement[],
    enterEffect: any,
    transition: any,
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
      const animation = span.animate(
        [
          {
            opacity: enterEffect.opacity?.active ? enterEffect.opacity.value : 1,
            transform: enterEffect.scale?.active ? `scale(${enterEffect.scale.value})` : "scale(1)",
            filter: enterEffect.blur?.active ? `blur(${enterEffect.blur.value}px)` : "blur(0px)",
          },
          {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0px)",
          },
        ],
        {
          duration: transition?.duration || DEFAULT_ANIMATION_DURATION,
          delay,
          easing: this.mapEasing(transition?.easing || DEFAULT_EASING),
          fill: "forwards",
        },
      );

      this.activeAnimations.set(`span-${index}`, animation);
      promises.push(
        new Promise((resolve) => {
          animation.addEventListener("finish", () => resolve());
        }),
      );
    });

    await Promise.all(promises);
  }

  /**
   * Apply enter effects using Animate.css class-based animations per span.
   * Falls back to Web Animations API for properties not supported by animate.css.
   */
  private async applyEnterEffectsWithAnimateCss(
    spans: HTMLSpanElement[],
    enterEffect: any,
    transition: any,
    fullConfig?: any,
  ): Promise<void> {
    const promises: Promise<void>[] = [];
    const animationName = fullConfig?.animateCssAnimation || fullConfig?.animation || 'fadeIn';
    const duration = transition?.duration || fullConfig?.duration || DEFAULT_ANIMATION_DURATION;

    spans.forEach((span, index) => {
      const delay = index * (transition?.delay || 100);

      // Apply initial hidden state
      if (enterEffect.opacity?.active) {
        span.style.opacity = enterEffect.opacity.value.toString();
      }
      if (enterEffect.scale?.active) {
        span.style.transform = `scale(${enterEffect.scale.value})`;
      }
      if (enterEffect.blur?.active) {
        span.style.filter = `blur(${enterEffect.blur.value}px)`;
      }

      // Apply animate.css classes with stagger delay
      const formattedName = animationName.startsWith('animate__')
        ? animationName
        : `animate__${animationName}`;

      span.style.setProperty('--animate-duration', `${duration}ms`);
      span.style.setProperty('--animate-delay', `${delay}ms`);
      span.classList.add('animate__animated', formattedName);

      promises.push(
        new Promise<void>((resolve) => {
          const handleEnd = () => {
            span.removeEventListener('animationend', handleEnd);
            // Clean up to final state
            span.style.opacity = '1';
            span.style.transform = 'none';
            span.style.filter = 'none';
            span.classList.remove('animate__animated', formattedName);
            span.style.removeProperty('--animate-duration');
            span.style.removeProperty('--animate-delay');
            resolve();
          };
          span.addEventListener('animationend', handleEnd);

          // Fallback timeout
          setTimeout(() => {
            span.removeEventListener('animationend', handleEnd);
            span.style.opacity = '1';
            span.style.transform = 'none';
            span.style.filter = 'none';
            resolve();
          }, duration + delay + 100);
        }),
      );
    });

    await Promise.all(promises);
  }

  private async applyPresetAnimation(
    spans: HTMLSpanElement[],
    preset: any,
    transition: any,
    fullConfig?: any,
  ): Promise<void> {
    const promises: Promise<void>[] = [];

    spans.forEach((span, index) => {
      const delay = index * (transition?.delay || transition?.staggerDelay || 100);

      // Create keyframes based on preset
      const keyframes = this.createKeyframesForPreset(preset, transition, fullConfig);

      const animation = span.animate(keyframes, {
        duration: transition?.duration || preset.defaultConfig?.timing?.duration || DEFAULT_ANIMATION_DURATION,
        delay,
        easing: this.mapEasing(
          transition?.easing || preset.defaultConfig?.timing?.easing || DEFAULT_EASING,
        ),
        fill: "forwards",
        iterations: 1,
      });

      this.activeAnimations.set(`span-${index}`, animation);
      promises.push(
        new Promise((resolve) => {
          animation.addEventListener("finish", () => resolve());
        }),
      );
    });

    await Promise.all(promises);
  }

  private createKeyframesForPreset(preset: any, transition: any, fullConfig?: any): Keyframe[] {
    const duration = transition?.duration || preset.defaultConfig?.timing?.duration || 1000;

    // Handle custom preset with Web Animation API config
    if (preset.id === "custom" && fullConfig) {
      const startTransforms = [
        fullConfig.scale !== undefined && fullConfig.scale !== 1 && `scale(${fullConfig.scale})`,
        fullConfig.rotate?.z && `rotate(${fullConfig.rotate.z}deg)`,
        fullConfig.rotate?.x && `rotateX(${fullConfig.rotate.x}deg)`,
        fullConfig.rotate?.y && `rotateY(${fullConfig.rotate.y}deg)`,
        fullConfig.skew?.x && `skewX(${fullConfig.skew.x}deg)`,
        fullConfig.skew?.y && `skewY(${fullConfig.skew.y}deg)`,
        (fullConfig.offset?.x || fullConfig.offset?.y) &&
          `translate(${fullConfig.offset.x || 0}px, ${fullConfig.offset.y || 0}px)`,
      ]
        .filter(Boolean)
        .join(" ");

      return [
        {
          opacity: fullConfig.opacity !== undefined ? fullConfig.opacity : 0,
          transform: startTransforms || "scale(0.5)",
        },
        {
          opacity: 1,
          transform: "none",
        },
      ];
    }

    switch (preset.id) {
      case "blur":
        return [
          { opacity: 0, filter: "blur(10px)" },
          { opacity: 1, filter: "blur(0px)" },
        ];
      case "flip":
        return [
          { opacity: 0, transform: "rotateY(180deg)" },
          { opacity: 1, transform: "rotateY(0deg)" },
        ];
      case "shake":
        return [
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(0px)" },
        ];
      case "shoot":
        return [
          { opacity: 0, transform: "translateY(100%)" },
          { opacity: 1, transform: "translateY(0%)" },
        ];
      case "rotate":
        return [
          { opacity: 0, transform: "rotate(360deg)" },
          { opacity: 1, transform: "rotate(0deg)" },
        ];
      case "scale":
        return [
          { opacity: 0, transform: "scale(0.5)" },
          { opacity: 1, transform: "scale(1)" },
        ];
      case "stagger":
        return [{ opacity: 0 }, { opacity: 1 }];
      default:
        return [{ opacity: 0 }, { opacity: 1 }];
    }
  }

  private cancelAnimations(target: HTMLElement): void {
    // Cancel all active animations
    this.activeAnimations.forEach((animation, key) => {
      if (key.startsWith("span-")) {
        animation.cancel();
      }
    });
    this.activeAnimations.clear();

    // Run cleanup functions
    this.cleanupFunctions.forEach((cleanup) => cleanup());
    this.cleanupFunctions.clear();

    // Restore original content
    const originalText = target.getAttribute("data-original-text");
    if (originalText) {
      target.textContent = originalText;
      target.removeAttribute("data-original-text");
    }
  }

  undo(context: InteractionContext): void {
    this.cancelAnimations(context.target);
  }

  /**
   * Smooth cleanup — fades out animated spans then restores original text.
   * Supports abort via forceCancel() for rapid re-triggering.
   */
  async cleanup(context: InteractionContext): Promise<void> {
    const target = context.target;
    const originalText = target.getAttribute("data-original-text");

    // Nothing to revert if text animation was never applied
    if (!originalText) {
      return;
    }

    // Gather all animated spans
    const spans = Array.from(target.querySelectorAll("span")) as HTMLSpanElement[];

    if (spans.length === 0) {
      // No spans — restore original text directly
      target.textContent = originalText;
      target.removeAttribute("data-original-text");
      return;
    }

    // Abort flag — set by _cleanupAbortFn when forceCancel() fires during
    // the fade-out.  Prevents the post-await text restoration from wiping out
    // a newly-started execute()'s spans.
    let aborted = false;
    this._cleanupAbortFn = () => {
      aborted = true;
    };

    // Fade out all spans smoothly
    const duration = 300;
    const fadeAnimations: Animation[] = [];
    const promises: Promise<void>[] = [];

    spans.forEach((span) => {
      const animation = span.animate(
        [
          { opacity: getComputedStyle(span).opacity },
          { opacity: "0" },
        ],
        {
          duration,
          easing: "ease-out",
          fill: "forwards",
        },
      );
      fadeAnimations.push(animation);
      promises.push(
        new Promise<void>((resolve) => {
          animation.onfinish = () => resolve();
          animation.oncancel = () => resolve();
        }),
      );
    });

    try {
      await Promise.all(promises);
    } catch {
      // Animations cancelled
    }

    // If a new execute() started while we were fading out, don't touch the DOM
    if (aborted) {
      this._cleanupAbortFn = undefined;
      return;
    }
    this._cleanupAbortFn = undefined;

    // Cancel any tracked active animations from the original execute()
    this.activeAnimations.forEach((animation) => animation.cancel());
    this.activeAnimations.clear();
    this.cleanupFunctions.forEach((fn) => fn());
    this.cleanupFunctions.clear();

    // Restore original text content
    target.textContent = originalText;
    target.removeAttribute("data-original-text");
  }
}
