// src/composer-tools/interaction-engine/triggers/HoverTrigger.ts

import { BaseTrigger } from './TriggerStrategy';
import { logger } from '../utils/Logger';

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
    logger.debug('HoverTrigger: attaching to', { target, config: this.config });

    this.boundEnterHandler = (event?: Event) => {
      // Debug: enter fired
      logger.debug('HoverTrigger: enter handler fired on', { element: event?.currentTarget || event?.target || target });
      // Do NOT await cleanup here — command.execute() will synchronously cancel
      // any running animations (including in-progress cleanup reverses) via
      // cancelAllAnimations().  Awaiting cleanup caused race conditions where a
      // slow reverse animation blocked re-triggering.
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
      const { target: resolved, elements } = this.resolveSectionId(this.config.sectionId, target);
      triggerTarget = resolved;
      if (elements) {
        for (const el of elements) {
          this.addEventListener(el, 'mouseenter', this.boundEnterHandler);
          if (cleanup && !this.persistOnLeave) {
            this.addEventListener(el, 'mouseleave', this.boundLeaveHandler);
          }
        }
      } else {
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