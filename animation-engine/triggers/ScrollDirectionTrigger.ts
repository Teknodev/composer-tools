import { ScrollDirectionTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires when the user scrolls in the configured direction by at least
 * `threshold` pixels. Supports "down", "up", and "any" direction modes.
 */
export class ScrollDirectionTriggerStrategy implements ITriggerStrategy {
  constructor(private config: ScrollDirectionTrigger) {}

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const { direction = "down", threshold = 50 } = this.config;
    let lastScrollY = window.scrollY;
    let accumulated = 0;
    let lastDirection: "up" | "down" | null = null;
    let rafId = 0;

    const scrollTarget = findScrollableAncestor(element) ?? window;

    const getScrollY = (): number => {
      if (scrollTarget === window) return window.scrollY;
      return (scrollTarget as HTMLElement).scrollTop;
    };

    lastScrollY = getScrollY();

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const currentY = getScrollY();
        const delta = currentY - lastScrollY;
        lastScrollY = currentY;

        if (delta === 0) return;

        const currentDirection: "up" | "down" = delta > 0 ? "down" : "up";

        // Reset accumulation if direction changed
        if (currentDirection !== lastDirection) {
          accumulated = 0;
          lastDirection = currentDirection;
        }

        accumulated += Math.abs(delta);

        if (accumulated >= threshold) {
          const shouldFire =
            direction === "any" || direction === currentDirection;
          if (shouldFire) {
            callback();
          }
          accumulated = 0;
        }
      });
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    return {
      detach() {
        scrollTarget.removeEventListener("scroll", onScroll);
        if (rafId) cancelAnimationFrame(rafId);
      },
    };
  }
}

function findScrollableAncestor(el: HTMLElement): HTMLElement | null {
  let parent = el.parentElement;
  while (parent) {
    const { overflow, overflowY } = getComputedStyle(parent);
    if (/(auto|scroll)/.test(overflow + overflowY)) return parent;
    parent = parent.parentElement;
  }
  return null;
}
