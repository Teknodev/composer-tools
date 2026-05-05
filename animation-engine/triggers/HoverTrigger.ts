import { ITriggerStrategy, TriggerCleanup } from "./ITriggerStrategy";

/**
 * Hover trigger — fires separate callbacks for mouseenter and mouseleave.
 * The main callback (enter) is invoked on mouseenter; additional leave
 * handling is done at the InteractionManager level using the HoverTrigger
 * config's enter/leave animations.
 */
export class HoverTriggerStrategy implements ITriggerStrategy {
  private leaveCallback?: () => void;

  constructor(onLeave?: () => void) {
    this.leaveCallback = onLeave;
  }

  attach(element: HTMLElement, callback: () => void): TriggerCleanup {
    const onEnter = () => callback();
    const onLeave = () => this.leaveCallback?.();

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);

    return {
      detach() {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      },
    };
  }
}
