import { ScrollIntoViewTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Uses IntersectionObserver to fire when an element scrolls into view.
 * Supports an offset (rootMargin), a once flag, and a replay flag.
 *
 * - once=true: fire once, then unobserve
 * - once=false, replay=true: fire every time the element re-enters the viewport
 * - once=false, replay=false: fire once (don't unobserve, but callback only executes once)
 */
export class ScrollIntoViewTriggerStrategy implements ITriggerStrategy {
  constructor(private config: ScrollIntoViewTrigger) {}

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const { offset = 0, once = true, replay = false } = this.config;
    let hasFired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // If once, fire and unobserve
            if (once) {
              callback();
              observer.unobserve(element);
              return;
            }

            // If replay, fire every re-entry
            if (replay) {
              callback();
              return;
            }

            // Otherwise, fire only once but keep observing
            if (!hasFired) {
              hasFired = true;
              callback();
            }
          }
        }
      },
      {
        rootMargin: `${offset}px`,
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return {
      detach() {
        observer.unobserve(element);
        observer.disconnect();
      },
    };
  }
}
