import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires the callback once after two animation frames (double-rAF) to ensure
 * the DOM is fully painted before triggering animations.  A single rAF can
 * fire before the first paint, causing the first animation in a sequential
 * chain to be missed.
 */
export class PageLoadTriggerStrategy implements ITriggerStrategy {
  attach(
    _element: HTMLElement,
    callback: () => void
  ): TriggerCleanup {
    let outerRafId = requestAnimationFrame(() => {
      innerRafId = requestAnimationFrame(() => {
        callback();
        outerRafId = 0;
        innerRafId = 0;
      });
    });
    let innerRafId = 0;

    return {
      detach() {
        if (outerRafId) cancelAnimationFrame(outerRafId);
        if (innerRafId) cancelAnimationFrame(innerRafId);
      },
    };
  }
}
