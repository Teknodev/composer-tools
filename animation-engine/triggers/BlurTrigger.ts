import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires callback on the "blur" DOM event.
 */
export class BlurTriggerStrategy implements ITriggerStrategy {
  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const handler = () => callback();
    element.addEventListener("blur", handler, true); // capture for non-focusable wrappers
    return {
      detach() {
        element.removeEventListener("blur", handler, true);
      },
    };
  }
}
