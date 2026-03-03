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
    
    this.boundClickHandler = () => {
      // Check if trigger should only fire once
      if (this.config?.once && this.hasTriggered) {
        return;
      }

      // Do NOT await cleanup here — command.execute() will synchronously cancel
      // any running animations (including in-progress cleanup reverses) via
      // cancelAllAnimations(). Awaiting cleanup caused race conditions where a
      // slow reverse animation blocked re-triggering.
      fire();
      this.hasTriggered = true;
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

  override detach(): void {
    this.hasTriggered = false;
    super.detach();
  }
}