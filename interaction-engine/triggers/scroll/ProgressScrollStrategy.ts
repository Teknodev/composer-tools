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

    // Cache original element geometry (pre-transform)
    this.cachedElementHeight = target.offsetHeight;
    this.cachedOffsetTop = this.computeOffsetTop(target, scrollRoot);

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
          if (config.engine === 'animateCss') {
            this.removeAnimateCssClasses(target);
          } else {
            target.style.opacity = '';
            target.style.transform = '';
            target.style.filter = '';
          }
        }
        return;
      }

      let viewportProgress = 0;

      if (elementHeight <= viewportHeight) {
        const minHeight = config.minProgressHeight ?? 150;
        if (minHeight > 0 && elementHeight < minHeight) {
          viewportProgress = (config.progressEnd ?? 1) + 0.01;
        } else if (elementBottom <= viewportHeight && elementTop >= 0) {
          const fullyVisiblePosition = viewportHeight - elementHeight;
          if (elementTop >= fullyVisiblePosition) {
            const distanceTraveled = fullyVisiblePosition - elementTop;
            viewportProgress = distanceTraveled / fullyVisiblePosition;
          } else {
            const distancePastFullyVisible = fullyVisiblePosition - elementTop;
            viewportProgress = 1 + distancePastFullyVisible / fullyVisiblePosition;
          }
        } else if (elementTop < 0) {
          const distancePastTop = Math.abs(elementTop);
          viewportProgress = 2 + distancePastTop / elementHeight;
        } else if (elementTop < viewportHeight && elementBottom > viewportHeight) {
          const visibleHeight = viewportHeight - elementTop;
          viewportProgress = visibleHeight / elementHeight;
        } else {
          viewportProgress = 0;
        }
      } else {
        if (elementTop >= 0) {
          const visibleHeight = Math.min(elementBottom - viewportHeight, elementHeight);
          viewportProgress = Math.max(0, visibleHeight / elementHeight);
        } else if (elementBottom <= 0) {
          viewportProgress = 0;
        } else {
          const scrolled = Math.abs(elementTop);
          const totalScroll = elementHeight;
          viewportProgress = scrolled / totalScroll;
        }
      }

      viewportProgress = Math.max(0, viewportProgress);

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
          lastRange = 'after';
        }
      } else {
        const effectProgress =
          (viewportProgress - startThreshold) / (endThreshold - startThreshold);

        if (lastRange !== 'during') {
          lastRange = 'during';
          animationCompleted = false;
          if (config.engine === 'animateCss') {
            this.addAnimateCssClasses(target, config);
          } else {
            target.getAnimations().forEach((anim) => anim.cancel());
          }
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
        element.style.transform = `translateY(${(1 - normalizedProgress) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideDown':
        element.style.transform = `translateY(${(normalizedProgress - 1) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideLeft':
        element.style.transform = `translateX(${(normalizedProgress - 1) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'slideRight':
        element.style.transform = `translateX(${(1 - normalizedProgress) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;
      case 'scale': {
        const scale = 0.5 + normalizedProgress * 0.5;
        element.style.transform = `scale(${scale})`;
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
    const transforms: string[] = [];

    if (config.customOpacityStart !== undefined || config.customOpacityEnd !== undefined) {
      const opacityStart = config.customOpacityStart ?? 0;
      const opacityEnd = config.customOpacityEnd ?? 1;
      const opacity = opacityStart + (opacityEnd - opacityStart) * progress;
      element.style.opacity = opacity.toString();
    }

    if (config.customTranslateX !== undefined && config.customTranslateX !== 0) {
      transforms.push(`translateX(${config.customTranslateX * progress}px)`);
    }

    if (config.customTranslateY !== undefined && config.customTranslateY !== 0) {
      transforms.push(`translateY(${config.customTranslateY * progress}px)`);
    }

    if (config.customScaleStart !== undefined || config.customScaleEnd !== undefined) {
      const scaleStart = config.customScaleStart ?? 1;
      const scaleEnd = config.customScaleEnd ?? 1;
      transforms.push(`scale(${scaleStart + (scaleEnd - scaleStart) * progress})`);
    }

    if (config.customRotate !== undefined && config.customRotate !== 0) {
      transforms.push(`rotate(${config.customRotate * progress}deg)`);
    }

    if (config.customBlur !== undefined && config.customBlur !== 0) {
      element.style.filter = `blur(${config.customBlur * progress}px)`;
    }

    element.style.transform = transforms.length > 0 ? transforms.join(' ') : '';
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
