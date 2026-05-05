import { SectionInViewTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Uses IntersectionObserver to fire when the component section element
 * scrolls into the viewport. Supports an offset (rootMargin), a once flag,
 * and a replay flag.
 *
 * This is similar to ScrollIntoViewTrigger but is semantically scoped
 * to the entire section rather than a specific child element.
 *
 * - once=true: fire once, then unobserve
 * - once=false, replay=true: fire every time the section re-enters the viewport
 * - once=false, replay=false: fire once (don't unobserve, but callback only executes once)
 */
export class SectionInViewTriggerStrategy implements ITriggerStrategy {
  constructor(private config: SectionInViewTrigger) {}

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const { offset = 0, once = true, replay = false } = this.config;
    let hasFired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (once) {
              callback();
              observer.unobserve(element);
              return;
            }

            if (replay) {
              callback();
              return;
            }

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
