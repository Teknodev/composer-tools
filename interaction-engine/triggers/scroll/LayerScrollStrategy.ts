// src/composer-tools/interaction-engine/triggers/scroll/LayerScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';

export class LayerScrollStrategy implements ScrollModeStrategy {
  private observer?: IntersectionObserver;
  private hasTriggered = false;

  attach(
    target: HTMLElement,
    fire: () => void,
    cleanup: (() => void) | undefined,
    config: OnScrollConfig
  ): void {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: config.layerRootMargin || '0px',
      threshold: config.layerThreshold || 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!this.hasTriggered) {
            this.hasTriggered = true;
            fire();
          }
        } else {
          if (config.replay && this.hasTriggered) {
            if (cleanup) cleanup();
            this.hasTriggered = false;
          }
        }
      });
    }, observerOptions);

    this.observer.observe(target);
  }

  detach(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.hasTriggered = false;
  }
}
