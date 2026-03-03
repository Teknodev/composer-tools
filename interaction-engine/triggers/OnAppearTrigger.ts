// interaction-engine/triggers/OnAppearTrigger.ts

import { BaseTrigger } from './TriggerStrategy';
import { logger } from '../utils/Logger';

export interface OnAppearConfig {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export class OnAppearTrigger extends BaseTrigger {
  private observer?: IntersectionObserver;
  private hasTriggered = false;
  private timeoutId?: number;
  private readonly config: OnAppearConfig;

  constructor(config?: OnAppearConfig) {
    super();
    this.config = config ?? {};
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    const { threshold = 0.1, rootMargin = '0px', once = false, delay = 0 } = this.config;

    logger.debug('OnAppearTrigger: attaching', { threshold, rootMargin, once, delay });

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (once && this.hasTriggered) continue;

            if (delay > 0) {
              this.timeoutId = window.setTimeout(() => {
                fire();
                this.hasTriggered = true;
              }, delay);
            } else {
              fire();
              this.hasTriggered = true;
            }

            if (once) {
              this.observer?.disconnect();
            }
          } else if (cleanup && this.hasTriggered && !once) {
            if (this.timeoutId) {
              clearTimeout(this.timeoutId);
              this.timeoutId = undefined;
            }
            cleanup();
            this.hasTriggered = false;
          }
        }
      },
      { threshold, rootMargin },
    );

    this.observer.observe(target);
  }

  detach(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.hasTriggered = false;
    super.detach();
  }
}
