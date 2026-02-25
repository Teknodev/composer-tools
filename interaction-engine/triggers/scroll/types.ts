// src/composer-tools/interaction-engine/triggers/scroll/types.ts

export interface OnScrollConfig {
  type?: 'direction' | 'section' | 'layer' | 'progress';
  direction?: 'up' | 'down' | 'both';
  threshold?: number;
  replay?: boolean;
  debounceDelay?: number;
  sectionId?: string;
  sectionThreshold?: number;
  sectionRootMargin?: string;
  layerThreshold?: number;
  layerRootMargin?: string;
  progressEffect?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'custom';
  progressStart?: number;
  progressEnd?: number;
  // Custom progress settings
  customOpacityStart?: number;
  customOpacityEnd?: number;
  customTranslateX?: number;
  customTranslateY?: number;
  customScaleStart?: number;
  customScaleEnd?: number;
  customRotate?: number;
  customBlur?: number;
  minProgressHeight?: number;
  // Direct animation properties
  opacity?: number;
  scale?: number;
  translateX?: string | number;
  translateY?: string | number;
  rotate?: { mode: string; x?: number; y?: number; z?: number };
  skew?: { x?: number; y?: number };
  offset?: { x?: string | number; y?: string | number };
  delay?: number;
  duration?: number;
  easing?: string;
  engine?: string;
  animateCssAnimation?: string;
}

/**
 * Interface for scroll mode strategy implementations.
 * Each scroll mode (direction, section, layer, progress) implements this.
 */
export interface ScrollModeStrategy {
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
  ): void;
  detach(): void;
}
