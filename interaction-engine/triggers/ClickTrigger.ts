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
    const triggerTarget = this.config?.sectionId ? document.getElementById(this.config.sectionId) || target : target;
    
    this.target = triggerTarget;
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundClickHandler = () => {
      fire();
      // For click, animate to target and then reverse back to original
      if (cleanup) {
        const duration = this.config?.duration || 500;
        const delay = this.config?.delay || 0;
        setTimeout(() => cleanup(), duration + delay + 100);
      }
    };

    this.addEventListener(triggerTarget, 'click', this.boundClickHandler);
  }
}