// src/composer-tools/interaction-engine/triggers/scroll/DirectionScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';

export class DirectionScrollStrategy implements ScrollModeStrategy {
  private lastScrollY = 0;
  private hasTriggered = false;
  private debounceTimeout?: ReturnType<typeof setTimeout>;
  private directionRAF?: number;

  attach(
    target: HTMLElement,
    fire: () => void,
    cleanup: (() => void) | undefined,
    config: OnScrollConfig,
    addEventListenerFn: (
      element: EventTarget,
      type: string,
      handler: EventListener,
      options?: boolean | AddEventListenerOptions
    ) => void
  ): void {
    const findScrollContainer = (): HTMLElement | Window => {
      let element: HTMLElement | null = target;
      while (element && element !== document.body) {
        const style = window.getComputedStyle(element);
        if (
          (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
          element.scrollHeight > element.clientHeight
        ) {
          return element;
        }
        element = element.parentElement;
      }
      const playground = document.getElementById('playground');
      if (playground && playground.scrollHeight > playground.clientHeight) {
        return playground;
      }
      return window;
    };

    const scrollContainer = findScrollContainer();

    const scrollHandler = () => {
      const currentOffset =
        scrollContainer instanceof Window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;

      if (currentOffset === this.lastScrollY) return;

      const direction = currentOffset > this.lastScrollY ? 'down' : 'up';

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

      const rawThreshold = config.threshold ?? 0;
      let requiredVisible: number;
      if (rect.height <= rawThreshold) {
        requiredVisible = 1;
      } else if (rawThreshold > 0 && rawThreshold <= 1) {
        requiredVisible = rect.height * rawThreshold;
      } else {
        requiredVisible = rawThreshold;
      }

      const isVisible = visibleHeight > requiredVisible;

      if (isVisible) {
        if (config.direction === 'both' || config.direction === direction) {
          if (!this.hasTriggered) {
            this.hasTriggered = true;
            fire();
          }
        } else if (config.replay && this.hasTriggered) {
          if (cleanup) cleanup();
          this.hasTriggered = false;
        }
      } else if (config.replay && this.hasTriggered) {
        if (cleanup) cleanup();
        this.hasTriggered = false;
      }

      this.lastScrollY = currentOffset;
    };

    const debouncedScrollHandler = () => {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(scrollHandler, config.debounceDelay || 50);
    };

    if (scrollContainer instanceof Window) {
      addEventListenerFn(window, 'scroll', debouncedScrollHandler);
    } else {
      addEventListenerFn(scrollContainer, 'scroll', debouncedScrollHandler);
    }

    addEventListenerFn(document, 'scroll', debouncedScrollHandler, true);

    this.lastScrollY =
      scrollContainer instanceof Window
        ? window.scrollY
        : (scrollContainer as HTMLElement).scrollTop;

    // RAF fallback for programmatic scrolling
    // IMPORTANT: Route through debouncedScrollHandler (not scrollHandler
    // directly) so that the debounce delay is respected.  Calling
    // scrollHandler() directly here bypassed debounce and caused rapid
    // fire→cleanup→fire cycles at direction-change boundaries.
    let lastCheckedOffset = this.lastScrollY;
    const rafCheck = () => {
      const currentOffset =
        scrollContainer instanceof Window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;
      if (currentOffset !== lastCheckedOffset) {
        lastCheckedOffset = currentOffset;
        debouncedScrollHandler();
      }
      this.directionRAF = requestAnimationFrame(rafCheck);
    };
    this.directionRAF = requestAnimationFrame(rafCheck);
  }

  detach(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = undefined;
    }
    if (this.directionRAF) {
      cancelAnimationFrame(this.directionRAF);
      this.directionRAF = undefined;
    }
    this.hasTriggered = false;
    this.lastScrollY = 0;
  }
}
