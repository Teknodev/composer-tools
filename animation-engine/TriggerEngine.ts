/**
 * TriggerEngine
 *
 * Factory that maps AnimationInteractionTrigger configs to the appropriate
 * trigger strategy, attaches it to a DOM element, and tracks cleanup handles.
 */

import { AnimationInteractionTrigger } from "../../types/animation-interaction";
import {
  TriggerCleanup,
  PageLoadTriggerStrategy,
  ScrollIntoViewTriggerStrategy,
  ScrollProgressTriggerStrategy,
  ScrollDirectionTriggerStrategy,
  SectionInViewTriggerStrategy,
  LayerInViewTriggerStrategy,
  HoverTriggerStrategy,
  MouseEnterTriggerStrategy,
  MouseLeaveTriggerStrategy,
  ClickTriggerStrategy,
  FocusTriggerStrategy,
  BlurTriggerStrategy,
} from "./triggers";

const cleanupMap = new WeakMap<HTMLElement, TriggerCleanup[]>();

function getOrCreateCleanups(el: HTMLElement): TriggerCleanup[] {
  let list = cleanupMap.get(el);
  if (!list) {
    list = [];
    cleanupMap.set(el, list);
  }
  return list;
}

export class TriggerEngine {
  /**
   * Attach a trigger to an element.
   *
   * @param element  The DOM element to observe / listen on.
   * @param trigger  The trigger configuration.
   * @param onFire   Callback fired when the trigger condition is met.
   *                 For scroll-progress, receives a progress (0–1).
   * @param onLeave  Optional callback for the "leave" part of a Hover trigger.
   * @returns A cleanup handle.  Also auto-tracked per-element for bulk teardown.
   */
  register(
    element: HTMLElement,
    trigger: AnimationInteractionTrigger,
    onFire: (progress?: number) => void,
    onLeave?: () => void
  ): TriggerCleanup {
    const strategy = this.createStrategy(trigger, onLeave);
    const cleanup = strategy.attach(element, onFire);
    getOrCreateCleanups(element).push(cleanup);
    return cleanup;
  }

  /**
   * Detach all triggers tracked for an element.
   */
  unregisterAll(element: HTMLElement): void {
    const list = cleanupMap.get(element);
    if (!list) return;
    for (const cleanup of list) {
      cleanup.detach();
    }
    cleanupMap.delete(element);
  }

  // ── Internal ──────────────────────────────────────────────────────────

  private createStrategy(
    trigger: AnimationInteractionTrigger,
    onLeave?: () => void
  ) {
    switch (trigger.type) {
      case "page-load":
        return new PageLoadTriggerStrategy();
      case "scroll-into-view":
        return new ScrollIntoViewTriggerStrategy(trigger);
      case "scroll-progress":
        return new ScrollProgressTriggerStrategy(trigger);
      case "scroll-direction":
        return new ScrollDirectionTriggerStrategy(trigger);
      case "section-in-view":
        return new SectionInViewTriggerStrategy(trigger);
      case "layer-in-view":
        return new LayerInViewTriggerStrategy(trigger);
      case "hover":
        return new HoverTriggerStrategy(onLeave);
      case "mouse-enter":
        return new MouseEnterTriggerStrategy();
      case "mouse-leave":
        return new MouseLeaveTriggerStrategy();
      case "click":
        return new ClickTriggerStrategy();
      case "focus":
        return new FocusTriggerStrategy(onLeave);
      case "blur":
        return new BlurTriggerStrategy();
      default:
        throw new Error(
          `Unknown trigger type: ${(trigger as any).type}`
        );
    }
  }
}

export const triggerEngine = new TriggerEngine();
