// src/composer-tools/interaction-engine/triggers/ClickTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class ClickTrigger extends BaseTrigger {
  private boundClickHandler?: (event: Event) => void;
  private config?: Record<string, any>;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundClickHandler = async () => {
      // Cancel any ongoing animation before starting new one
      await cleanup?.();
      fire();
      // For click, animate to target and then reverse back to original
      if (cleanup) {
        const duration = this.config?.duration || 500;
        const delay = this.config?.delay || 0;
        setTimeout(() => cleanup(), duration + delay + 100);
      }
    };

    let triggerTarget = target;
    if (this.config?.sectionId) {
      if (this.config.sectionId.startsWith('.')) {
        const className = this.config.sectionId.slice(1);
        try {
          // 1) Try exact token match
          let elements = document.querySelectorAll(`[class~="${className}"]`);
          // 2) Fallback to prefixed token if nothing matched and the token isn't already prefixed
          if (elements.length === 0 && !className.startsWith('auto-generate-')) {
            const prefixed = `auto-generate-${className}`;
            elements = document.querySelectorAll(`[class~="${prefixed}"]`);
            console.log("ClickTrigger: fallback to prefixed token", { className, prefixed }, elements);
          } else {
            console.log("ClickTrigger: found elements for", { className }, elements);
          }

          triggerTarget = (elements[0] as HTMLElement) || target;
          // Attach to all elements with the class token
          for (let i = 0; i < elements.length; i++) {
            this.addEventListener(elements[i] as HTMLElement, 'click', this.boundClickHandler);
          }
        } catch (error) {
          console.error("ClickTrigger: error finding elements", error);
        }
      } else {
        triggerTarget = document.getElementById(this.config.sectionId) || target;
        this.addEventListener(triggerTarget, 'click', this.boundClickHandler);
      }
    } else {
      this.addEventListener(target, 'click', this.boundClickHandler);
    }
    
    this.target = triggerTarget;
  }
}