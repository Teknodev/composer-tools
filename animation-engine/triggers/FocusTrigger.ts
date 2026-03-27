import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Press trigger — fires separate callbacks for mousedown and mouseup.
 * The main callback (enter) is invoked on mousedown; the leave callback
 * is invoked on mouseup, mirroring the HoverTriggerStrategy pattern.
 *
 * Uses mousedown/mouseup instead of focus/blur so the trigger works on
 * all elements (divs, text, etc.) — not just natively focusable ones.
 */
export class FocusTriggerStrategy implements ITriggerStrategy {
  private leaveCallback?: () => void;

  constructor(onLeave?: () => void) {
    this.leaveCallback = onLeave;
  }

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const onMouseDown = () => callback();
    const onMouseUp = () => this.leaveCallback?.();

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("mouseup", onMouseUp);

    return {
      detach() {
        element.removeEventListener("mousedown", onMouseDown);
        element.removeEventListener("mouseup", onMouseUp);
      },
    };
  }
}
