// src/composer-tools/interaction-engine/triggers/OnAppearTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

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
  private interactionConfig?: OnAppearConfig;

  constructor(config?: OnAppearConfig) {
      super();
      this.interactionConfig = config;
    }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    // Get configuration from data attributes or defaults
    const config = this.getConfig(target);
    const { threshold = 0.1, rootMargin = '0px', once = false, delay = 0 } = this.interactionConfig || {};
    console.log('OnAppearTrigger config:', config);
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible
            if (once && this.hasTriggered) {
              return;
            }

            if (delay > 0) {
              // Delay execution
              this.timeoutId = window.setTimeout(() => {
                fire();
                this.hasTriggered = true;
              }, delay);
            } else {
              fire();
              this.hasTriggered = true;
            }

            // If once is true, disconnect after first trigger
            if (once && this.observer) {
              this.observer.disconnect();
            }
          } else {
            // Element is not visible (scrolled out)
            if (cleanup && this.hasTriggered && !once) {
              // Clear any pending delayed execution
              if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
              }
              cleanup();
              this.hasTriggered = false;
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
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

  private getConfig(target: HTMLElement): OnAppearConfig {
    const config: OnAppearConfig = {};

    // Read from data attributes
    const thresholdAttr = target.getAttribute('data-appear-threshold');
    if (thresholdAttr) {
      const parsed = parseFloat(thresholdAttr);
      config.threshold = isNaN(parsed) ? 0.1 : parsed;
    }

    const rootMarginAttr = target.getAttribute('data-appear-root-margin');
    if (rootMarginAttr) {
      config.rootMargin = rootMarginAttr;
    }

    const onceAttr = target.getAttribute('data-appear-once');
    if (onceAttr) {
      config.once = onceAttr === 'true';
    }

    const delayAttr = target.getAttribute('data-appear-delay');
    if (delayAttr) {
      const parsed = parseInt(delayAttr, 10);
      config.delay = isNaN(parsed) ? 0 : parsed;
    }

    return config;
  }
}
