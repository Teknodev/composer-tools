import { LayerInViewTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Uses IntersectionObserver to fire when the element (layer) scrolls into
 * the viewport.  The InteractionManager is responsible for passing the
 * correct target element — this strategy simply observes what it receives.
 */
export class LayerInViewTriggerStrategy implements ITriggerStrategy {
  constructor(private config: LayerInViewTrigger) {}

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
