import { ScrollProgressTrigger } from "../../../types/animation-interaction";
import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires continuously with a progress value (0–1) as the element scrolls
 * between startPercent and endPercent of the viewport.
 *
 * Uses IntersectionObserver to know when the element is visible, then
 * a scroll listener to compute fine-grained progress.
 */
export class ScrollProgressTriggerStrategy implements ITriggerStrategy {
  constructor(private config: ScrollProgressTrigger) {}

  attach(
    element: HTMLElement,
    callback: (progress?: number) => void
  ): TriggerCleanup {
    const { startPercent = 0, endPercent = 100 } = this.config;
    let isVisible = false;
    let rafId = 0;

    const computeProgress = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Position of element center relative to viewport height
      const elementCenter = rect.top + rect.height / 2;
      const startTriggerPx = viewportHeight * (1 - startPercent / 100);
      const endTriggerPx = viewportHeight * (1 - endPercent / 100);
      const range = startTriggerPx - endTriggerPx;

      if (range === 0) {
        callback(1);
        return;
      }

      const raw = (startTriggerPx - elementCenter) / range;
      const clamped = Math.max(0, Math.min(1, raw));
      callback(clamped);
    };

    const onScroll = () => {
      if (!isVisible) return;
      if (rafId) return; // Throttle to one computation per frame
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        computeProgress();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
          if (isVisible) computeProgress();
        }
      },
      { threshold: buildThresholds() }
    );

    observer.observe(element);

    // Use the nearest scrollable ancestor or window
    const scrollTarget = findScrollableAncestor(element) ?? window;
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    return {
      detach() {
        observer.unobserve(element);
        observer.disconnect();
        scrollTarget.removeEventListener("scroll", onScroll);
        if (rafId) cancelAnimationFrame(rafId);
      },
    };
  }
}

function buildThresholds(): number[] {
  const steps = 20;
  return Array.from({ length: steps + 1 }, (_, i) => i / steps);
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
