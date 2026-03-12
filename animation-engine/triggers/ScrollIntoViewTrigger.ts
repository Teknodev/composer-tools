import { ScrollIntoViewTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Uses IntersectionObserver to fire when an element scrolls into view.
 * Supports an offset (rootMargin) and a once/repeat flag.
 */
export class ScrollIntoViewTriggerStrategy implements ITriggerStrategy {
  constructor(private config: ScrollIntoViewTrigger) {}

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const { offset = 0, once = true } = this.config;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callback();
            if (once) {
              observer.unobserve(element);
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
