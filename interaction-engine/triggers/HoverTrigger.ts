// src/composer-tools/interaction-engine/triggers/HoverTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export class HoverTrigger extends BaseTrigger {
  private boundEnterHandler?: (event: Event) => void;
  private boundLeaveHandler?: (event: Event) => void;
  private persistOnLeave: boolean = false;
  private config?: Record<string, any>;

  constructor(config?: Record<string, any>) {
    super();
    this.persistOnLeave = Boolean(config?.persistOnLeave || config?.keepOnLeave || config?.hold);
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.fire = fire;
    this.cleanup = cleanup;

    // Debug: report attachment
    // eslint-disable-next-line no-console
    console.log('HoverTrigger: attaching to', target, 'with config', this.config);

    this.boundEnterHandler = async (event?: Event) => {
      // Debug: enter fired
      // eslint-disable-next-line no-console
      console.log('HoverTrigger: enter handler fired on', event?.currentTarget || event?.target || target);
      // Reverse any previous animation before starting new one to avoid
      // mid-animation 'frozen' states when switching between elements.
      await cleanup?.();
      fire();
    };

    this.boundLeaveHandler = async () => {
      if (!this.target) {
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

    let triggerTarget = target;
    if (this.config?.sectionId) {
      if (this.config.sectionId.startsWith('.')) {
        const className = this.config.sectionId.slice(1);
        try {
          let elements = document.querySelectorAll(`[class~="${className}"]`);
          if (elements.length === 0 && !className.startsWith('auto-generate-')) {
            const prefixed = `auto-generate-${className}`;
            elements = document.querySelectorAll(`[class~="${prefixed}"]`);
            console.log("HoverTrigger: fallback to prefixed token", { className, prefixed }, elements);
          } else {
            console.log("HoverTrigger: found elements for", { className }, elements);
          }

          triggerTarget = (elements[0] as HTMLElement) || target;
          // Attach to all elements with the class token
          for (let i = 0; i < elements.length; i++) {
            this.addEventListener(elements[i] as HTMLElement, 'mouseenter', this.boundEnterHandler);
            if (cleanup && !this.persistOnLeave) {
              this.addEventListener(elements[i] as HTMLElement, 'mouseleave', this.boundLeaveHandler);
            }
          }
        } catch (error) {
          console.error("HoverTrigger: error finding elements", error);
        }
      } else {
        triggerTarget = document.getElementById(this.config.sectionId) || target;
        this.addEventListener(triggerTarget, 'mouseenter', this.boundEnterHandler);
        if (cleanup && !this.persistOnLeave) {
          this.addEventListener(triggerTarget, 'mouseleave', this.boundLeaveHandler);
        }
      }
    } else {
      this.addEventListener(target, 'mouseenter', this.boundEnterHandler);
      if (cleanup && !this.persistOnLeave) {
        this.addEventListener(target, 'mouseleave', this.boundLeaveHandler);
      }
    }
    
    this.target = triggerTarget;
  }
}