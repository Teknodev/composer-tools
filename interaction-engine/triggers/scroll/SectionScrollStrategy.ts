// src/composer-tools/interaction-engine/triggers/scroll/SectionScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';
import { logger } from '../../utils/Logger';
import { resolveSectionId } from '../../utils/resolveSectionId';

export class SectionScrollStrategy implements ScrollModeStrategy {
  private observer?: IntersectionObserver;
  private targetSection?: HTMLElement;
  private hasTriggered = false;

  attach(
    _target: HTMLElement,
    fire: () => void,
    cleanup: (() => void) | undefined,
    config: OnScrollConfig,
    _addEventListenerFn: (
      element: EventTarget,
      type: string,
      handler: EventListener,
      options?: boolean | AddEventListenerOptions
    ) => void
  ): void {
    if (!config.sectionId) {
      logger.warn('OnScrollTrigger: sectionId is required for section mode');
      return;
    }

    const dummyFallback = _target; // use target element as fallback
    const result = resolveSectionId(config.sectionId, dummyFallback, 'SectionScrollStrategy');
    this.targetSection = result.target === dummyFallback && !result.elements ? undefined : result.target;

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
