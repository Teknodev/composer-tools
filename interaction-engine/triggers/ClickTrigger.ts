// src/composer-tools/interaction-engine/triggers/ClickTrigger.ts

import { BaseTrigger } from './TriggerStrategy';
import { logger } from '../utils/Logger';

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
      if (this.config.sectionId.startsWith('.')) {
        const className = this.config.sectionId.slice(1);
        try {
          // 1) Try exact token match
          let elements = document.querySelectorAll(`[class~="${className}"]`);
          // 2) Fallback to prefixed token if nothing matched and the token isn't already prefixed
          if (elements.length === 0 && !className.startsWith('auto-generate-')) {
            const prefixed = `auto-generate-${className}`;
            elements = document.querySelectorAll(`[class~="${prefixed}"]`);
            logger.debug('ClickTrigger: fallback to prefixed token', { className, prefixed, elements });
          } else {
            logger.debug('ClickTrigger: found elements for', { className, elements });
          }

          triggerTarget = (elements[0] as HTMLElement) || target;
          // Attach to all elements with the class token
          for (let i = 0; i < elements.length; i++) {
            this.addEventListener(elements[i] as HTMLElement, 'click', this.boundClickHandler);
          }
        } catch (error) {
          logger.error('ClickTrigger: error finding elements', error);
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