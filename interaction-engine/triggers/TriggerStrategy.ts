// src/composer-tools/interaction-engine/triggers/TriggerStrategy.ts

export interface TriggerStrategy {
  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void;
  detach(): void;
}

export abstract class BaseTrigger implements TriggerStrategy {
  protected target?: HTMLElement;
  protected fire?: () => void;
  protected cleanup?: () => void;
  protected eventListeners: Array<{
    element: EventTarget;
    type: string;
    handler: EventListener;
  }> = [];

  protected addEventListener(
    element: EventTarget,
    type: string,
    handler: EventListener
  ): void {
    element.addEventListener(type, handler);
    this.eventListeners.push({ element, type, handler });
  }

  protected clearEventListeners(): void {
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners = [];
  }

  abstract attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void;

  detach(): void {
    this.clearEventListeners();
    this.target = undefined;
    this.fire = undefined;
    this.cleanup = undefined;
  }
}