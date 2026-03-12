import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Focus trigger — fires separate callbacks for focus and blur.
 * The main callback (enter) is invoked on focus; the leave callback
 * is invoked on blur, mirroring the HoverTriggerStrategy pattern.
 */
export class FocusTriggerStrategy implements ITriggerStrategy {
  private leaveCallback?: () => void;

  constructor(onLeave?: () => void) {
    this.leaveCallback = onLeave;
  }

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const onFocus = () => callback();
    const onBlur = () => this.leaveCallback?.();

    element.addEventListener("focus", onFocus, true); // capture for non-focusable wrappers
    element.addEventListener("blur", onBlur, true);

    return {
      detach() {
        element.removeEventListener("focus", onFocus, true);
        element.removeEventListener("blur", onBlur, true);
      },
    };
  }
}
