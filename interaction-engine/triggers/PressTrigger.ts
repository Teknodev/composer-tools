// src/composer-tools/interaction-engine/triggers/PressTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class PressTrigger extends BaseTrigger {
  private boundPressHandler?: (event: Event) => void;
  private boundReleaseHandler?: (event: Event) => void;
  private config?: Record<string, any>;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    const triggerTarget = this.config?.sectionId ? document.getElementById(this.config.sectionId) || target : target;
    
    this.target = triggerTarget;
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundPressHandler = () => fire();

    this.boundReleaseHandler = () => {
      (async () => {
        if (!triggerTarget) {
          await cleanup?.();
          return;
        }

        // Delegate to the animation engine so it can capture current
        // computed styles and run a smooth transition back to originals.
        // Avoid calling `cancel()` here to prevent an immediate snap.
        await cleanup?.();
      })();
    };

    this.addEventListener(triggerTarget, 'mousedown', this.boundPressHandler);
    if (cleanup) {
      // Attach mouseup to document to ensure it's captured even if mouse moves outside element
      this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
    }
  }
}