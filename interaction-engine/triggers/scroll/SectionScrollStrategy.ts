// src/composer-tools/interaction-engine/triggers/scroll/SectionScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';
import { logger } from '../../utils/Logger';

export class SectionScrollStrategy implements ScrollModeStrategy {
  private observer?: IntersectionObserver;
  private targetSection?: HTMLElement;
  private hasTriggered = false;

  attach(
    _target: HTMLElement,
    fire: () => void,
    cleanup: (() => void) | undefined,
    config: OnScrollConfig
  ): void {
    if (!config.sectionId) {
      logger.warn('OnScrollTrigger: sectionId is required for section mode');
      return;
    }

    if (config.sectionId.startsWith('.')) {
      const className = config.sectionId.slice(1);
      try {
        let elements = document.querySelectorAll(`[class~="${className}"]`);
        if (elements.length === 0 && !className.startsWith('auto-generate-')) {
          const prefixed = `auto-generate-${className}`;
          elements = document.querySelectorAll(`[class~="${prefixed}"]`);
          logger.debug('OnScrollTrigger: fallback to prefixed token', { className, prefixed, elements });
        } else {
          logger.debug('OnScrollTrigger: found section elements for', { className, elements });
        }
        this.targetSection = (elements[0] as HTMLElement) || undefined;
      } catch (error) {
        logger.error('OnScrollTrigger: error finding section elements', error as Error);
      }
    } else {
      this.targetSection = document.getElementById(config.sectionId) || undefined;
    }

    if (!this.targetSection) {
      logger.warn(`OnScrollTrigger: Section with selector "${config.sectionId}" not found`);
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: config.sectionRootMargin || '0px',
      threshold: config.sectionThreshold || 0.1,
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

    this.observer.observe(this.targetSection);
  }

  detach(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.hasTriggered = false;
    this.targetSection = undefined;
  }
}
