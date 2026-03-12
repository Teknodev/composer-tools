import { SectionInViewTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Uses IntersectionObserver to fire when the component section element
 * scrolls into the viewport. Supports an offset (rootMargin) and a
 * once/repeat flag.
 *
 * This is similar to ScrollIntoViewTrigger but is semantically scoped
 * to the entire section rather than a specific child element.
 */
export class SectionInViewTriggerStrategy implements ITriggerStrategy {
  constructor(private config: SectionInViewTrigger) {}

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
