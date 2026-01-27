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
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundPressHandler = async () => {
      // Reverse any ongoing animation before starting the press animation
      await cleanup?.();
      fire();
    };

    this.boundReleaseHandler = async () => {
      if (!this.target) {
        await cleanup?.();
        return;
      }

      // Delegate to the animation engine so it can capture current
      // computed styles and run a smooth transition back to originals.
      // Avoid calling `cancel()` here to prevent an immediate snap.
      await cleanup?.();
    };

    let triggerTarget = target;
    if (this.config?.sectionId) {
      if (this.config.sectionId.startsWith('.')) {
        const className = this.config.sectionId.slice(1);
        try {
          let elements = document.querySelectorAll(`[class~="${className}"]`);
          if (elements.length === 0 && !className.startsWith('auto-generate-')) {
            const prefixed = `auto-generate-${className}`;
            elements = document.querySelectorAll(`[class~="${prefixed}"]`);
            console.log("PressTrigger: fallback to prefixed token", { className, prefixed }, elements);
          } else {
            console.log("PressTrigger: found elements for", { className }, elements);
          }

          triggerTarget = (elements[0] as HTMLElement) || target;
          // Attach to all elements with the class token
          for (let i = 0; i < elements.length; i++) {
            this.addEventListener(elements[i] as HTMLElement, 'mousedown', this.boundPressHandler);
          }
          // Attach a single document-level mouseup listener for release handling
          if (cleanup) {
            this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
          }
        } catch (error) {
          console.error("PressTrigger: error finding elements", error);
        }
      } else {
        triggerTarget = document.getElementById(this.config.sectionId) || target;
        this.addEventListener(triggerTarget, 'mousedown', this.boundPressHandler);
        if (cleanup) {
          this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
        }
      }
    } else {
      this.addEventListener(target, 'mousedown', this.boundPressHandler);
      if (cleanup) {
        this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
      }
    }
    
    this.target = triggerTarget;
  }
}