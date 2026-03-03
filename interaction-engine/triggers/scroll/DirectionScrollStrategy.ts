// src/composer-tools/interaction-engine/triggers/scroll/DirectionScrollStrategy.ts

import { ScrollModeStrategy, OnScrollConfig } from './types';

export class DirectionScrollStrategy implements ScrollModeStrategy {
  private lastScrollY = 0;
  /**
   * Bug 2 fix: Per-direction trigger tracking.
   * - replay=true  → both flags reset when element leaves viewport
   * - replay=false → each direction fires independently once
   */
  private hasTriggeredDown = false;
  private hasTriggeredUp = false;
  /** Whether the element is currently considered visible (for exit detection) */
  private wasVisible = false;

  private directionRAF?: number;

  /** Cached layout geometry (not affected by CSS transforms) */
  private cachedOffsetTop = 0;
  private cachedElementHeight = 0;
  /** Debounced resize handler for refreshing cached geometry */
  private resizeTimeout?: ReturnType<typeof setTimeout>;

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

    // Bug 2 fix: Use layout-based geometry (not affected by CSS transforms)
    // instead of getBoundingClientRect() which changes with scale/translate.
    this.cachedElementHeight = target.offsetHeight;
    this.cachedOffsetTop = this.computeOffsetTop(
      target,
      scrollContainer instanceof Window ? null : scrollContainer as HTMLElement
    );

    // Resize handler: recache geometry on window resize
    const resizeHandler = () => {
      if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.cachedElementHeight = target.offsetHeight;
        this.cachedOffsetTop = this.computeOffsetTop(
          target,
          scrollContainer instanceof Window ? null : scrollContainer as HTMLElement
        );
      }, 200);
    };
    addEventListenerFn(window, 'resize', resizeHandler as EventListener);

    const scrollHandler = () => {
      const currentOffset =
        scrollContainer instanceof Window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;

      if (currentOffset === this.lastScrollY) return;

      const direction: 'down' | 'up' = currentOffset > this.lastScrollY ? 'down' : 'up';

      // Bug 2 fix: Layout-based visibility check using cached dimensions
      const viewportHeight = scrollContainer instanceof Window
        ? window.innerHeight
        : (scrollContainer as HTMLElement).clientHeight;

      const elementTop = this.cachedOffsetTop - currentOffset;
      const elementBottom = elementTop + this.cachedElementHeight;

      const rawThreshold = config.threshold ?? 0;
      let requiredVisible: number;
      if (this.cachedElementHeight <= rawThreshold) {
        requiredVisible = 1;
      } else if (rawThreshold > 0 && rawThreshold <= 1) {
        requiredVisible = this.cachedElementHeight * rawThreshold;
      } else {
        requiredVisible = rawThreshold;
      }

      const visibleHeight = Math.min(elementBottom, viewportHeight) - Math.max(elementTop, 0);
      const isVisible = visibleHeight > requiredVisible;

      if (isVisible) {
        const directionMatches = config.direction === 'both' || config.direction === direction;
        const hasTriggeredThisDir = direction === 'down' ? this.hasTriggeredDown : this.hasTriggeredUp;

        if (directionMatches && !hasTriggeredThisDir) {
          // Fire the animation
          if (direction === 'down') this.hasTriggeredDown = true;
          else this.hasTriggeredUp = true;
          fire();
        }
        this.wasVisible = true;
      } else if (this.wasVisible) {
        // Element left the viewport
        this.wasVisible = false;

        if (config.replay) {
          // replay=true: reset BOTH direction flags so it fires again on re-entry
          if (this.hasTriggeredDown || this.hasTriggeredUp) {
            if (cleanup) cleanup();
          }
          this.hasTriggeredDown = false;
          this.hasTriggeredUp = false;
        }
        // replay=false: per-direction flags stay set — each direction fires at most once
      }

      this.lastScrollY = currentOffset;
    };

    // Bug 2 fix: Use RAF throttling instead of setTimeout debounce.
    // Debounce with 50ms was too coarse and caused missed direction changes.
    let rafPending = false;
    const rafScrollHandler = () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          rafPending = false;
          scrollHandler();
        });
      }
    };

    if (scrollContainer instanceof Window) {
      addEventListenerFn(window, 'scroll', rafScrollHandler, { passive: true });
    } else {
      addEventListenerFn(scrollContainer, 'scroll', rafScrollHandler, { passive: true });
    }

    addEventListenerFn(document, 'scroll', rafScrollHandler, true);

    this.lastScrollY =
      scrollContainer instanceof Window
        ? window.scrollY
        : (scrollContainer as HTMLElement).scrollTop;

    // RAF fallback for programmatic scrolling
    let lastCheckedOffset = this.lastScrollY;
    const rafCheck = () => {
      const currentOffset =
        scrollContainer instanceof Window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;
      if (currentOffset !== lastCheckedOffset) {
        lastCheckedOffset = currentOffset;
        rafScrollHandler();
      }
      this.directionRAF = requestAnimationFrame(rafCheck);
    };
    this.directionRAF = requestAnimationFrame(rafCheck);
  }

  detach(): void {
    if (this.directionRAF) {
      cancelAnimationFrame(this.directionRAF);
      this.directionRAF = undefined;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = undefined;
    }
    this.hasTriggeredDown = false;
    this.hasTriggeredUp = false;
    this.wasVisible = false;
    this.lastScrollY = 0;
    this.cachedOffsetTop = 0;
    this.cachedElementHeight = 0;
  }

  /**
   * Compute the element's top offset relative to its scroll container
   * using the offsetParent chain (not affected by CSS transforms).
   */
  private computeOffsetTop(element: HTMLElement, scrollRoot: HTMLElement | null): number {
    let offset = 0;
    let current: HTMLElement | null = element;
    while (current) {
      offset += current.offsetTop;
      const parent = current.offsetParent as HTMLElement | null;
      if (parent && scrollRoot && parent === scrollRoot) break;
      current = parent;
    }
    return offset;
  }
}
