// src/composer-tools/interaction-engine/triggers/ClickTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class ClickTrigger extends BaseTrigger {
  private boundClickHandler?: (event: Event) => void;
  private config?: Record<string, any>;
  private hasTriggered = false;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundClickHandler = async () => {
      // Check if trigger should only fire once
      if (this.config?.once && this.hasTriggered) {
        return;
      }

      // Cancel any ongoing animation before starting new one
      await cleanup?.();
      fire();
      this.hasTriggered = true;
      // For click, animate and let it complete naturally (no forced reverse)
    };

    let triggerTarget = target;
    if (this.config?.sectionId) {
      const { target: resolved, elements } = this.resolveSectionId(this.config.sectionId, target);
      triggerTarget = resolved;
      if (elements) {
        for (const el of elements) {
          this.addEventListener(el, 'click', this.boundClickHandler);
        }
      } else {
        this.addEventListener(triggerTarget, 'click', this.boundClickHandler);
      }
    } else {
      this.addEventListener(target, 'click', this.boundClickHandler);
    }
    
    this.target = triggerTarget;
  }
}