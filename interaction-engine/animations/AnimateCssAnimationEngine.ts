// interaction-engine/animations/AnimateCssAnimationEngine.ts

import { AnimationEngine } from '../core/types';
import { logger } from '../utils/Logger';

/**
 * Global fallback-timeout registry so cancelAll() can clear them by element.
 * Uses WeakMap so DOM elements removed without explicit cancelAll() can be GC'd.
 */
const activeTimeouts = new WeakMap<HTMLElement, number>();

/**
 * Global animationend-listener registry so cancelAll() can remove stale
 * listeners that would otherwise leak on the DOM element indefinitely.
 * Uses WeakMap to prevent retaining DOM element references.
 */
const activeListeners = new WeakMap<HTMLElement, (e: AnimationEvent) => void>();

/**
 * Delay-timeout registry — when delay > 0 the engine uses JS setTimeout to
 * defer class-addition instead of relying solely on the CSS animation-delay
 * property (which animate.css v4 only honours via utility classes).
 * Uses WeakMap for GC-friendliness.
 */
const activeDelayTimeouts = new WeakMap<HTMLElement, number>();

/** CSS custom-properties and inline styles written during animate.css animations. */
const ANIMATE_STYLE_PROPS = [
  '--animate-duration',
  '--animate-delay',
  '--animate-repeat',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
] as const;

/**
 * Remove animate.css artefacts from an element and force a reflow.
 * IMPORTANT: Must NOT touch individual CSS transform properties (scale, translate,
 * rotate) — they are preserved so prior transform interactions compose correctly.
 * @param specificClass When provided, only that class is removed; otherwise all `animate__*` classes are removed.
 */
function resetElement(element: HTMLElement, specificClass?: string): void {
  try {
    if (specificClass) {
      element.classList.remove('animate__animated', specificClass);
    } else {
      for (const cls of Array.from(element.classList)) {
        if (cls.startsWith('animate__')) element.classList.remove(cls);
      }
    }
    for (const prop of ANIMATE_STYLE_PROPS) {
      element.style.removeProperty(prop);
    }
    element.style.removeProperty('animation');
    void element.offsetWidth; // force reflow so subsequent class additions restart the animation
  } catch {
    /* ignore cleanup errors */
  }
}

/**
 * Apply all animation-specific inline CSS properties for the given config.
 * Called both on initial play and when offScreen=pause brings the element
 * back into view — ensures custom duration/delay/repeat are always active.
 */
function applyAnimationStyles(
  element: HTMLElement,
  duration: number,
  properties: Record<string, any>,
): void {
  // Always set duration explicitly so resetElement() -> re-play is consistent.
  element.style.setProperty('--animate-duration', `${duration}ms`);

  if (properties.delay) {
    element.style.setProperty('--animate-delay', `${properties.delay}ms`);
    element.style.setProperty('animation-delay', `${properties.delay}ms`);
  }
  if (properties.iterationCount && properties.iterationCount !== 1) {
    // animate.css v4 reads animation-iteration-count via --animate-repeat.
    element.style.setProperty('--animate-repeat', String(properties.iterationCount));
  }
  if (properties.direction && properties.direction !== 'normal') {
    element.style.setProperty('animation-direction', properties.direction);
  }
  if (properties.fillMode && properties.fillMode !== 'none') {
    element.style.setProperty('animation-fill-mode', properties.fillMode);
  }
}

export class AnimateCssAnimationEngine implements AnimationEngine {
  async animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    _easing?: string,
  ): Promise<{ cancel?: () => void } | void> {
    const animationClass = properties.animation || properties.class || 'animate__bounce';
    const formattedAnimationClass = animationClass.startsWith('animate__')
      ? animationClass
      : `animate__${animationClass}`;

    // Remove any previous animate.css artefacts — including any stale
    // animationend listener — so re-triggering reliably restarts cleanly.
    this.cancelAll(element);

    let visibilityObserver: IntersectionObserver | undefined;

    if (properties.offScreen === 'pause') {
      try {
        visibilityObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                // Re-apply classes AND custom CSS vars so duration/delay/etc.
                // are honoured every time the element re-enters the viewport.
                resetElement(element, formattedAnimationClass);
                element.classList.add('animate__animated', formattedAnimationClass);
                applyAnimationStyles(element, duration, properties);
                void element.offsetWidth;
              } else {
                element.classList.remove('animate__animated', formattedAnimationClass);
                element.style.removeProperty('animation');
              }
            }
          },
          { root: null, rootMargin: '0px', threshold: 0.1 },
        );
        visibilityObserver.observe(element);
      } catch {
        visibilityObserver = undefined;
      }
    }

    // Helper: adds animation classes and styles.  When called from the
    // deferred-delay path we zero out the CSS delay because JS already
    // handled the wait.
    const effectiveDelay = properties.delay || 0;
    const startAnimation = (applyDelay: boolean) => {
      element.classList.add('animate__animated', formattedAnimationClass);
      if (applyDelay) {
        applyAnimationStyles(element, duration, properties);
      } else {
        applyAnimationStyles(element, duration, { ...properties, delay: 0 });
      }
    };

    return new Promise((resolve) => {
      // Declared up-front (let, not const) so both `cancel` and
      // `handleAnimationEnd` can reference each other without any
      // temporal-dead-zone issues — previously `cancel` was defined before
      // `handleAnimationEnd`, causing a ReferenceError when cancel() was
      // called on infinite animations.
      let handleAnimationEnd: ((e: AnimationEvent) => void) | undefined;

      const cancel = () => {
        // Clear pending delay-start timeout.
        const pendingDelayId = activeDelayTimeouts.get(element);
        if (pendingDelayId !== undefined) {
          clearTimeout(pendingDelayId);
          activeDelayTimeouts.delete(element);
        }
        if (handleAnimationEnd) {
          element.removeEventListener('animationend', handleAnimationEnd);
          activeListeners.delete(element);
        }
        const fallbackId = activeTimeouts.get(element);
        if (fallbackId !== undefined) {
          clearTimeout(fallbackId);
          activeTimeouts.delete(element);
        }
        resetElement(element, formattedAnimationClass);
        visibilityObserver?.disconnect();
        visibilityObserver = undefined;
      };

      // Infinite animations resolve immediately, leaving the animation running.
      if (properties.iterationCount === 'infinite') {
        if (effectiveDelay > 0) {
          const delayId = window.setTimeout(() => {
            activeDelayTimeouts.delete(element);
            startAnimation(false);
          }, effectiveDelay);
          activeDelayTimeouts.set(element, delayId);
        } else {
          startAnimation(true);
        }
        setTimeout(() => resolve({ cancel }), effectiveDelay);
        return;
      }

      handleAnimationEnd = (e: AnimationEvent) => {
        // animationend bubbles — ignore events originating from child elements
        // to avoid resolving the promise before the parent animation finishes.
        if (e.target !== element) return;

        logger.debug('AnimateCssAnimationEngine: animationend', { elementId: element.id });

        element.removeEventListener('animationend', handleAnimationEnd!);
        activeListeners.delete(element);

        const fallbackId = activeTimeouts.get(element);
        if (fallbackId !== undefined) {
          clearTimeout(fallbackId);
          activeTimeouts.delete(element);
        }

        resetElement(element, formattedAnimationClass);
        visibilityObserver?.disconnect();
        visibilityObserver = undefined;

        resolve({ cancel });
      };

      element.addEventListener('animationend', handleAnimationEnd);
      activeListeners.set(element, handleAnimationEnd);

      // Start animation — defer class addition when delay > 0 so the
      // animation truly waits (animate.css v4 only honours --animate-delay
      // via utility classes, which we don't use).
      if (effectiveDelay > 0) {
        const delayId = window.setTimeout(() => {
          activeDelayTimeouts.delete(element);
          startAnimation(false);
        }, effectiveDelay);
        activeDelayTimeouts.set(element, delayId);
      } else {
        startAnimation(true);
      }

      const iterationCount = typeof properties.iterationCount === 'number' ? properties.iterationCount : 1;
      const totalDuration = duration * iterationCount + effectiveDelay;

      const fallbackId = window.setTimeout(() => {
        logger.debug('AnimateCssAnimationEngine: fallback timeout fired', { elementId: element.id });

        if (handleAnimationEnd) {
          element.removeEventListener('animationend', handleAnimationEnd);
          activeListeners.delete(element);
        }
        activeTimeouts.delete(element);

        resetElement(element, formattedAnimationClass);
        visibilityObserver?.disconnect();
        visibilityObserver = undefined;

        resolve({ cancel });
      }, totalDuration + 100);

      activeTimeouts.set(element, fallbackId);
    });
  }

  cancelAll(element: HTMLElement): void {
    // Clear pending delay-start timeout so a deferred animation doesn't
    // kick in after the caller has already cancelled everything.
    const delayId = activeDelayTimeouts.get(element);
    if (delayId !== undefined) {
      clearTimeout(delayId);
      activeDelayTimeouts.delete(element);
    }

    const timeoutId = activeTimeouts.get(element);
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      activeTimeouts.delete(element);
    }

    // Remove any live animationend listener so it doesn't fire after cancel.
    const listener = activeListeners.get(element);
    if (listener) {
      element.removeEventListener('animationend', listener);
      activeListeners.delete(element);
    }

    resetElement(element);
  }
}
