// src/composer-tools/interaction-engine/triggers/HoverTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class HoverTrigger extends BaseTrigger {
  private boundEnterHandler?: (event: Event) => void;
  private boundLeaveHandler?: (event: Event) => void;
  private persistOnLeave: boolean = false;

  constructor(config?: Record<string, any>) {
    super();
    this.persistOnLeave = Boolean(config?.persistOnLeave || config?.keepOnLeave || config?.hold);
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundEnterHandler = () => fire();

    this.boundLeaveHandler = async () => {
      if (!target) {
        await cleanup?.();
        return;
      }

      // Delegate restore to the animation engine so it can capture the
      // current computed style and perform a smooth transition back to
      // the original values. Do NOT call `cancel()` here — that causes a snap.
      if (!this.persistOnLeave) {
        await cleanup?.();
      }
    };

    this.addEventListener(target, 'mouseenter', this.boundEnterHandler);
    if (cleanup && !this.persistOnLeave) {
      this.addEventListener(target, 'mouseleave', this.boundLeaveHandler);
    }
  }
}