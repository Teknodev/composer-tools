import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires callback on the "click" DOM event.
 */
export class ClickTriggerStrategy implements ITriggerStrategy {
  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const handler = () => callback();
    element.addEventListener("click", handler);
    return {
      detach() {
        element.removeEventListener("click", handler);
      },
    };
  }
}
