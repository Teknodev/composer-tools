import { BaseTrigger } from './TriggerStrategy';

export class TextAnimateTrigger extends BaseTrigger {
  private config?: Record<string, any>;
  private observer?: IntersectionObserver;
  private hasTriggered = false;
  private timeoutId?: number;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;



    // Also trigger when element appears in viewport
    try {
      const threshold = 0.1;
      const rootMargin = '0px';

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.hasTriggered) {
              // fire (respect potential delay in config)
              const delay = (this.config && this.config.delay) || 0;
              if (delay > 0) {
                this.timeoutId = window.setTimeout(() => {
                  try {
                    this.fire?.();
                  } catch (e) {}
                  this.hasTriggered = true;
                }, delay);
              } else {
                try {
                  this.fire?.();
                } catch (e) {}
                this.hasTriggered = true;
              }
            }
          } else {
            // Element left viewport
            if (this.hasTriggered && cleanup) {
              if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
              }
              try {
                cleanup();
              } catch (e) {}
              this.hasTriggered = false;
            }
          }
        });
      }, { threshold, rootMargin });

      this.observer.observe(target);
    } catch (err) {
      // IntersectionObserver may not be available in some environments
    }
  }

  detach(): void {
    try {
      this.cleanup?.();
    } catch (err) {
      /* ignore */
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.clearEventListeners();
    this.target = undefined;
    this.fire = undefined;
    this.cleanup = undefined;
  }
}