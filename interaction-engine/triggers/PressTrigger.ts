// src/composer-tools/interaction-engine/triggers/PressTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class PressTrigger extends BaseTrigger {
  private boundPressHandler?: (event: Event) => void;
  private boundReleaseHandler?: (event: Event) => void;

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;
    
this.boundPressHandler = () => fire();

    this.boundReleaseHandler = () => {
      if (!target) {
        cleanup?.();
        return;
      }

      // Delegate to the animation engine so it can capture current
      // computed styles and run a smooth transition back to originals.
      // Avoid calling `cancel()` here to prevent an immediate snap.
      cleanup?.();
    };

    this.addEventListener(target, 'mousedown', this.boundPressHandler);
    if (cleanup) {
      // Attach mouseup to document to ensure it's captured even if mouse moves outside element
      this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
    }
  }
}