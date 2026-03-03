// interaction-engine/animations/WebAnimationsAPI.ts

import { AnimationEngine } from '../core/types';

/** Properties consumed by animation options; must not appear in keyframes. */
const ANIMATION_OPTION_KEYS = new Set(['delay', 'iterationCount', 'composite', 'triggerType', 'direction']);

export class WebAnimationsAPI implements AnimationEngine {
  async animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing = 'ease',
  ): Promise<{ cancel?: () => void; finished?: Promise<any>; animation?: Animation } | void> {
    const { delay = 0, iterationCount = 1, composite, direction, triggerType: _triggerType, ...rest } = properties;

    // Strip any remaining non-CSS control keys that may have been passed through
    const cssProperties: Record<string, any> = {};
    for (const [key, value] of Object.entries(rest)) {
      if (!ANIMATION_OPTION_KEYS.has(key)) {
        cssProperties[key] = value;
      }
    }

    // Capture current computed values to build a from→to keyframe pair
    const currentValues: Record<string, any> = {};
    for (const key of Object.keys(cssProperties)) {
      currentValues[key] = getComputedStyle(element).getPropertyValue(key);
    }

    const keyframes = [currentValues, cssProperties];

    const isInfinite = iterationCount === 'infinite';
    const animationOptions: KeyframeAnimationOptions = {
      duration,
      easing,
      // 'both' is correct for infinite loops (fill on start too).
      // 'forwards' is correct for finite animations that should hold their end state.
      fill: isInfinite ? 'both' : 'forwards',
      delay,
      iterations: isInfinite ? Infinity : iterationCount,
      ...(direction ? { direction } : {}),
    };

    if (composite === 'add' || composite === 'accumulate') {
      animationOptions.composite = composite;
    }

    const animation = element.animate(keyframes, animationOptions);

    // NOTE: commitStyles() / cancel() for finite animations is NOT performed
    // here — the calling command (AnimateCommand, etc.) owns the animation
    // lifecycle and decides when to commit and cancel.  Previously this engine
    // did its own commitStyles+cancel in a finished.then() handler, which
    // conflicted with the command-level handler, causing double-cancel errors.

    return new Promise((resolve) => {
      // Resolve immediately for both finite and infinite animations.
      // The caller receives the cancel/finished handles and manages lifecycle.
      resolve({ cancel: () => animation.cancel(), finished: animation.finished, animation });
    });
  }
}
