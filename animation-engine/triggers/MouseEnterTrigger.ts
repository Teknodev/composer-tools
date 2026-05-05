import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires callback on the "mouseenter" DOM event.
 */
export class MouseEnterTriggerStrategy implements ITriggerStrategy {
  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const handler = () => callback();
    element.addEventListener("mouseenter", handler);
    return {
      detach() {
        element.removeEventListener("mouseenter", handler);
      },
    };
  }
}
