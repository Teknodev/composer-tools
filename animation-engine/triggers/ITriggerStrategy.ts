/**
 * Trigger strategy interface.
 * Each trigger type implements this to attach/detach DOM listeners or observers.
 */

export interface TriggerCleanup {
  detach(): void;
}

export interface ITriggerStrategy {
  /**
   * Attach the trigger to the given element.
   * @param callback  Fired when the trigger condition is met.
   *                  For scroll-progress, `progress` (0–1) is passed.
   */
  attach(
    element: HTMLElement,
    callback: (progress?: number) => void
  ): TriggerCleanup;
}
