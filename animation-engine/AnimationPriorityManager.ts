/**
 * AnimationPriorityManager
 *
 * Ensures that only the highest-priority animation controls an element at
 * a time.  Lower-priority animations (e.g. loop animations) are paused when
 * a higher-priority one (e.g. hover) starts, and resumed when it ends.
 *
 * Priority is computed from two additive sources:
 *   1. **Trigger priority** — inherent to the trigger type (page-load < hover < click)
 *   2. **Selector specificity** — derived from the CSS selector targeting the element:
 *        id (+30) > class (+20) > element (+10)
 *
 * When two animations share the same effective priority, non-conflicting
 * transform sub-properties are merged (both play concurrently) while
 * conflicting properties use **last-write-wins** for the higher-specificity
 * source.
 */

import {
  SelectorSpecificity,
  SELECTOR_PRIORITY,
} from "./selector-utils";

export interface PriorityAnimationController {
  pause(): void;
  resume(): void;
  cancel(): void;
}

interface ActiveEntry {
  interactionId: string;
  /** Base priority from the interaction (trigger-based) */
  basePriority: number;
  /** Selector-specificity tier (auto-detected at play time) */
  specificity: SelectorSpecificity;
  /** Effective priority = basePriority + SELECTOR_PRIORITY[specificity] */
  effectivePriority: number;
  controller: PriorityAnimationController;
  paused: boolean;
}

export class AnimationPriorityManager {
  private actives = new WeakMap<HTMLElement, ActiveEntry[]>();

  private getOrCreate(element: HTMLElement): ActiveEntry[] {
    let list = this.actives.get(element);
    if (!list) {
      list = [];
      this.actives.set(element, list);
    }
    return list;
  }

  /**
   * Register a new animation.  If it has higher effective priority than
   * existing ones, those are paused.  If it has lower priority, it is
   * paused immediately and queued.
   *
   * @param element         Target DOM element
   * @param interactionId   Unique interaction identifier
   * @param basePriority    Trigger-based priority (e.g. 0, 15, 20)
   * @param controller      Pause/resume/cancel handles for the animation
   * @param specificity     CSS selector specificity tier (default: "element")
   */
  onAnimationStart(
    element: HTMLElement,
    interactionId: string,
    basePriority: number,
    controller: PriorityAnimationController,
    specificity: SelectorSpecificity = "element"
  ): void {
    const list = this.getOrCreate(element);

    // Remove any stale entry with the same id
    const staleIdx = list.findIndex(
      (e) => e.interactionId === interactionId
    );
    if (staleIdx !== -1) list.splice(staleIdx, 1);

    const effectivePriority =
      basePriority + SELECTOR_PRIORITY[specificity];

    const entry: ActiveEntry = {
      interactionId,
      basePriority,
      specificity,
      effectivePriority,
      controller,
      paused: false,
    };
    list.push(entry);

    // Find the current maximum effective priority among other running (not-paused) entries
    const maxRunningPriority = list.reduce(
      (max, e) =>
        e.interactionId !== interactionId && !e.paused
          ? Math.max(max, e.effectivePriority)
          : max,
      -Infinity
    );

    if (effectivePriority >= maxRunningPriority) {
      // This is the new highest → pause all lower-priority running animations
      for (const e of list) {
        if (
          e.interactionId !== interactionId &&
          !e.paused &&
          e.effectivePriority < effectivePriority
        ) {
          e.controller.pause();
          e.paused = true;
        }
      }
    } else {
      // A higher priority animation is already running → pause this one
      entry.controller.pause();
      entry.paused = true;
    }
  }

  /**
   * Called when an animation finishes or is cancelled.
   * Resumes the next-highest-priority paused animation, if any.
   */
  onAnimationEnd(element: HTMLElement, interactionId: string): void {
    const list = this.actives.get(element);
    if (!list) return;

    const idx = list.findIndex((e) => e.interactionId === interactionId);
    // Idempotent: if the entry was already removed (e.g. by a prior
    // synchronous cancel), bail out so we don't accidentally resume
    // a paused animation a second time.
    if (idx === -1) return;
    list.splice(idx, 1);

    if (list.length === 0) return;

    // Find the highest-priority paused animation and resume it
    let best: ActiveEntry | null = null;
    for (const e of list) {
      if (e.paused && (!best || e.effectivePriority > best.effectivePriority)) {
        best = e;
      }
    }

    if (best) {
      best.paused = false;
      best.controller.resume();
    }
  }

  /**
   * Query the effective priority of a specific animation on an element.
   * Returns -Infinity if the animation is not tracked.
   */
  getEffectivePriority(element: HTMLElement, interactionId: string): number {
    const list = this.actives.get(element);
    if (!list) return -Infinity;
    const entry = list.find((e) => e.interactionId === interactionId);
    return entry ? entry.effectivePriority : -Infinity;
  }

  /**
   * Cancel and remove all tracked animations for an element.
   */
  cancelAll(element: HTMLElement): void {
    const list = this.actives.get(element);
    if (!list) return;
    for (const e of list) {
      e.controller.cancel();
    }
    this.actives.delete(element);
  }

  /**
   * Clear tracking without cancelling (for use during teardown when
   * engines handle their own cancellation).
   */
  clear(element: HTMLElement): void {
    this.actives.delete(element);
  }
}

export const animationPriorityManager = new AnimationPriorityManager();
