import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires callback on the "mouseleave" DOM event.
 */
export class MouseLeaveTriggerStrategy implements ITriggerStrategy {
  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const handler = () => callback();
    element.addEventListener("mouseleave", handler);
    return {
      detach() {
        element.removeEventListener("mouseleave", handler);
      },
    };
  }
}
