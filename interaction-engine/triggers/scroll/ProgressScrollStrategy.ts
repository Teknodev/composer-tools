// src/composer-tools/interaction-engine/triggers/scroll/ProgressScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';

/**
 * Hysteresis band (in progress units 0–1) to prevent oscillation at
 * range boundaries.  Once in a range, viewportProgress must overshoot
 * the threshold by this amount to leave it.
 */
const HYSTERESIS = 0.03;

export class ProgressScrollStrategy implements ScrollModeStrategy {
  private progressRAF?: number;

  /**
   * Cached, pre-transform element geometry captured once at attach time.
   * offsetHeight / offsetTop are NOT affected by CSS transforms, so
   * they give the true layout size -- preventing the feedback loop where
   * scale() changes getBoundingClientRect() which changes progress which
   * changes scale.
   *
   * NOTE: We intentionally do NOT use IntersectionObserver here because
   * the observer uses the *visual* (transformed) bounding box and would
   * oscillate when scale/translate effects are applied.  Instead we use
   * a scroll-event-driven RAF loop with layout-based visibility checks.
   */
  private cachedElementHeight = 0;
  private cachedOffsetTop = 0;
  /** Debounced resize handler for refreshing cached geometry */
  private resizeTimeout?: ReturnType<typeof setTimeout>;
  private resizeHandler?: () => void;

  attach(
    target: HTMLElement,
    _fire: () => void,
    _cleanup: (() => void) | undefined,
    config: OnScrollConfig,
    addEventListenerFn?: (
      element: EventTarget,
      type: string,
      handler: EventListener,
      options?: boolean | AddEventListenerOptions
    ) => void
  ): void {
    const scrollRoot = (target.closest('#playground') as HTMLElement | null) || null;
    let lastRange: 'before' | 'during' | 'after' | null = null;
    let animationCompleted = false;

    // Bug 4: Track previous display value for removeOnComplete feature
    let previousDisplay: string | null = null;

    // Cache original element geometry (pre-transform)
    this.cachedElementHeight = target.offsetHeight;
    this.cachedOffsetTop = this.computeOffsetTop(target, scrollRoot);

    // Resize handler: recache geometry on window resize
    this.resizeHandler = () => {
      if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.cachedElementHeight = target.offsetHeight;
        this.cachedOffsetTop = this.computeOffsetTop(target, scrollRoot);
      }, 200);
    };
    if (addEventListenerFn) {
      addEventListenerFn(window, 'resize', this.resizeHandler as EventListener);
    } else {
      window.addEventListener('resize', this.resizeHandler);
    }

    // Scroll-driven RAF loop
    // A single RAF is scheduled per scroll event.  The RAF computes
    // visibility and progress entirely from cached layout dimensions +
    // scrollTop -- never from getBoundingClientRect().
    let rafPending = false;

    const updateProgress = () => {
      rafPending = false;

      const viewportHeight = scrollRoot ? scrollRoot.clientHeight : window.innerHeight;
      const scrollTop = scrollRoot ? scrollRoot.scrollTop : window.scrollY;

      const elementHeight = this.cachedElementHeight;
      const elementTop = this.cachedOffsetTop - scrollTop;
      const elementBottom = elementTop + elementHeight;

      // Layout-based visibility check (replaces IntersectionObserver)
      // Uses cached layout dimensions so transform effects cannot cause oscillation.
      const isVisible = elementBottom > 0 && elementTop < viewportHeight;

      if (!isVisible) {
        if (config.replay && lastRange !== null) {
          animationCompleted = false;
          lastRange = null;
          // Bug 4: Restore element visibility on replay reset
          if (config.removeOnComplete && previousDisplay !== null) {
            target.style.display = previousDisplay === 'none' ? '' : previousDisplay;
            previousDisplay = null;
          }
          if (config.engine === 'animateCss') {
            this.removeAnimateCssClasses(target);
          } else {
            target.style.opacity = '';
            target.style.transform = '';
            target.style.scale = '';
            target.style.translate = '';
            target.style.rotate = '';
            target.style.filter = '';
          }
        }
        return;
      }

      // ── Progress formula ────────────────────────────────────────
      // progress = 0  → element's top edge at viewport bottom (just entering)
      // progress = 1  → element fully scrolled into view
      //
      // As user scrolls down the element moves up. Its top edge enters
      // the viewport first (elementTop crosses below viewportHeight).
      // progress linearly increases until the element has travelled its
      // own height into the viewport.
      //
      // No scale-adjust is needed: at progress ≈ 0 the element is both
      // transparent (opacity 0) and visually small (scale < 1), so the
      // visual edge naturally enters the viewport a bit after progress
      // becomes positive — producing a smooth fade-in with no gap.

      let viewportProgress: number;

      if (elementHeight < 1) {
        // Degenerate zero-height element — treat as fully visible
        viewportProgress = 1;
      } else {
        viewportProgress = (viewportHeight - elementTop) / elementHeight;
      }

      viewportProgress = Math.max(0, Math.min(viewportProgress, 2));

      const startThreshold = config.progressStart ?? 0;
      const endThreshold = config.progressEnd ?? 1;

      if (animationCompleted && !config.replay) {
        return;
      }

      // ── Range classification with hysteresis ──────────────────────
      // Once in a range, require an extra HYSTERESIS overshoot to leave.
      // This prevents jitter at exact threshold boundaries.
      const enterBefore = lastRange === 'during'
        ? viewportProgress < startThreshold - HYSTERESIS
        : viewportProgress < startThreshold;

      const enterAfter = lastRange === 'during'
        ? viewportProgress > endThreshold + HYSTERESIS
        : viewportProgress > endThreshold;

      if (enterBefore) {
        if (lastRange !== 'before') {
          lastRange = 'before';
          if (config.engine === 'animateCss') {
            this.removeAnimateCssClasses(target);
          } else {
            target.style.opacity = '';
            target.style.transform = '';
            target.style.scale = '';
            target.style.translate = '';
            target.style.rotate = '';
            target.style.filter = '';
          }
        }
      } else if (enterAfter) {
        if (!animationCompleted) {
          if (config.engine !== 'animateCss') {
            const effect = config.progressEffect || 'fade';
            this.applyProgressEffect(target, 1, effect, config);
          } else {
            this.removeAnimateCssClasses(target);
          }
          animationCompleted = true;
          console.log('Progress animation completed for element:', animationCompleted);
          lastRange = 'after';
          // Bug 4: removeOnComplete — hide element after progress animation completes
          if (config.removeOnComplete) {
            previousDisplay = target.style.display || getComputedStyle(target).display;
            target.style.display = 'none';
          }
        }
      } else {
        const effectProgress =
          (viewportProgress - startThreshold) / (endThreshold - startThreshold);

        if (lastRange !== 'during') {
          lastRange = 'during';
          animationCompleted = false;
          if (config.engine === 'animateCss') {
            this.addAnimateCssClasses(target, config);
          }
          // Bug 3 fix: Removed target.getAnimations().forEach(anim => anim.cancel())
          // which was cancelling ALL animations on the element including those
          // from other interactions. Progress mode uses direct style manipulation,
          // so no animation cancellation is needed here.
        }

        if (config.engine !== 'animateCss') {
          const effect = config.progressEffect || 'fade';
          this.applyProgressEffect(target, effectProgress, effect, config);
        }
      }

    };

    const scheduleUpdate = () => {
      if (!rafPending) {
        rafPending = true;
        this.progressRAF = requestAnimationFrame(updateProgress);
      }
    };

    // Register scroll listener.
    // No IntersectionObserver — it relies on the visual bounding box
    // which is affected by CSS transforms (scale, translate) and causes oscillation.
    const scrollContainer: EventTarget = scrollRoot || window;

    if (addEventListenerFn) {
      addEventListenerFn(scrollContainer, 'scroll', scheduleUpdate as EventListener, { passive: true });
      if (scrollContainer !== window) {
        addEventListenerFn(window, 'scroll', scheduleUpdate as EventListener, { passive: true });
      }
    } else {
      scrollContainer.addEventListener('scroll', scheduleUpdate, { passive: true });
    }

    // Run once immediately to set initial state
    updateProgress();
  }

  detach(): void {
    if (this.progressRAF) {
      cancelAnimationFrame(this.progressRAF);
      this.progressRAF = undefined;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = undefined;
    }
    // Note: resizeHandler is cleaned up by central listener tracking when
    // addEventListenerFn was used. For fallback path, we clean manually.
    this.resizeHandler = undefined;
    this.cachedElementHeight = 0;
    this.cachedOffsetTop = 0;
  }

  /**
   * Compute the element's top offset relative to its scroll container
   * (or the page) without being affected by CSS transforms.
   * Uses offsetTop chain which reflects layout position, not visual position.
   */
  private computeOffsetTop(element: HTMLElement, scrollRoot: HTMLElement | null): number {
    let offset = 0;
    let current: HTMLElement | null = element;

    while (current) {
      offset += current.offsetTop;
      const parent = current.offsetParent as HTMLElement | null;

      // Stop accumulating once we reach the scroll root
      if (parent && scrollRoot && parent === scrollRoot) {
        break;
      }
      current = parent;
    }

    return offset;
  }

  // --- Effect helpers ---

  private applyProgressEffect(
    element: HTMLElement,
    progress: number,
    effect: string,
    config: OnScrollConfig
  ): void {
    const normalizedProgress = Math.max(0, Math.min(1, progress));

    switch (effect) {
      case 'fade':
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideUp':
        element.style.translate = `0px ${(1 - normalizedProgress) * 100}px`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideDown':
        element.style.translate = `0px ${(normalizedProgress - 1) * 100}px`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideLeft':
        element.style.translate = `${(normalizedProgress - 1) * 100}px 0px`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideRight':
        element.style.translate = `${(1 - normalizedProgress) * 100}px 0px`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'scale': {
        const scale = 0.5 + normalizedProgress * 0.5;
        element.style.scale = String(scale);
        element.style.opacity = normalizedProgress.toString();
        break;
      }
      case 'custom':
        this.applyCustomEffect(element, normalizedProgress, config);
        break;
    }
  }

  private applyCustomEffect(
    element: HTMLElement,
    progress: number,
    config: OnScrollConfig
  ): void {
    // Uses individual CSS transform properties (scale, translate, rotate) to
    // avoid conflicts with animate.css animations that use composite `transform`.
    // Convention: at progress=1 (fully scrolled), effects resolve to their
    // identity/initial values so the element reaches its normal appearance.

    if (config.customOpacityStart !== undefined || config.customOpacityEnd !== undefined) {
      const opacityStart = config.customOpacityStart ?? 0;
      const opacityEnd = config.customOpacityEnd ?? 1;
      const opacity = opacityStart + (opacityEnd - opacityStart) * progress;
      element.style.opacity = opacity.toString();
    }

    if (config.customTranslateX !== undefined && config.customTranslateX !== 0) {
      const tx = config.customTranslateX * (1 - progress);
      if (config.customTranslateY !== undefined && config.customTranslateY !== 0) {
        const ty = config.customTranslateY * (1 - progress);
        element.style.translate = `${tx}px ${ty}px`;
      } else {
        element.style.translate = `${tx}px 0px`;
      }
    } else if (config.customTranslateY !== undefined && config.customTranslateY !== 0) {
      const ty = config.customTranslateY * (1 - progress);
      element.style.translate = `0px ${ty}px`;
    }

    if (config.customScaleStart !== undefined || config.customScaleEnd !== undefined) {
      const scaleStart = config.customScaleStart ?? 1;
      const scaleEnd = config.customScaleEnd ?? 1;
      element.style.scale = String(scaleStart + (scaleEnd - scaleStart) * progress);
    }

    if (config.customRotate !== undefined && config.customRotate !== 0) {
      element.style.rotate = `${config.customRotate * (1 - progress)}deg`;
    }

    if (config.customBlur !== undefined && config.customBlur !== 0) {
      element.style.filter = `blur(${config.customBlur * (1 - progress)}px)`;
    }
  }

  private addAnimateCssClasses(element: HTMLElement, config: OnScrollConfig): void {
    if (!config.animateCssAnimation) return;
    element.classList.add('animate__animated', `animate__${config.animateCssAnimation}`);
  }

  private removeAnimateCssClasses(element: HTMLElement): void {
    const classes = Array.from(element.classList).filter((cls) => cls.startsWith('animate__'));
    classes.forEach((cls) => element.classList.remove(cls));
  }
}
