import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Fires callback on mouseup — the "release" counterpart of the Press trigger.
 * Uses mouseup instead of blur so the trigger works on all elements
 * (divs, text, etc.) — not just natively focusable ones.
 */
export class BlurTriggerStrategy implements ITriggerStrategy {
  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const handler = () => callback();
    element.addEventListener("mouseup", handler);
    return {
      detach() {
        element.removeEventListener("mouseup", handler);
      },
    };
  }
}
