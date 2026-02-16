// src/composer-tools/interaction-engine/triggers/OnScrollTrigger.ts

import { BaseTrigger } from "./TriggerStrategy";
import { logger } from "../utils/Logger";

export interface OnScrollConfig {
  type?: "direction" | "section" | "layer" | "progress";
  direction?: "up" | "down" | "both";
  threshold?: number;
  replay?: boolean;
  debounceDelay?: number;
  sectionId?: string;
  sectionThreshold?: number;
  sectionRootMargin?: string;
  layerThreshold?: number;
  layerRootMargin?: string;
  progressEffect?:
  | "fade"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "custom";
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
  // Direct animation properties (mapped to custom* internally)
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

export class OnScrollTrigger extends BaseTrigger {
  private lastScrollY = 0;
  private hasTriggered = false;
  private debounceTimeout?: ReturnType<typeof setTimeout>;
  private observer?: IntersectionObserver;
  private targetSection?: HTMLElement;
  private progressRAF?: number;
  private directionRAF?: number;
  private isTrackingProgress = false;
  private interactionConfig?: OnScrollConfig;
  private isFinished = false;

  constructor(config?: OnScrollConfig) {
    super();
    this.interactionConfig = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    const config = this.getConfig(target);
    if (config.type === "section") {
      this.attachSectionMode();
    } else if (config.type === "layer") {
      this.attachLayerMode();
    } else if (config.type === "progress") {
      this.attachProgressMode();
    } else {
      this.attachDirectionMode();
    }
  }

  private attachSectionMode(): void {
    if (!this.target) return;
    const config = this.getConfig(this.target);

    if (!config.sectionId) {
      logger.warn("OnScrollTrigger: sectionId is required for section mode");
      return;
    }

    if (config.sectionId.startsWith(".")) {
      const className = config.sectionId.slice(1);
      try {
        let elements = document.querySelectorAll(`[class~="${className}"]`);
        if (elements.length === 0 && !className.startsWith("auto-generate-")) {
          const prefixed = `auto-generate-${className}`;
          elements = document.querySelectorAll(`[class~="${prefixed}"]`);
          logger.debug("OnScrollTrigger: fallback to prefixed token", {
            className,
            prefixed,
            elements,
          });
        } else {
          logger.debug("OnScrollTrigger: found section elements for", { className, elements });
        }
        this.targetSection = (elements[0] as HTMLElement) || undefined;
      } catch (error) {
        logger.error("OnScrollTrigger: error finding section elements", error as Error);
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
      rootMargin: config.sectionRootMargin || "0px",
      threshold: config.sectionThreshold || 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section entered viewport
          if (!this.hasTriggered) {
            this.hasTriggered = true;
            if (this.fire) this.fire();
          }
        } else {
          // Section left viewport
          if (config.replay && this.hasTriggered) {
            // Remove animation when replay is enabled
            if (this.cleanup) this.cleanup();
            this.hasTriggered = false;
          }
        }
      });
    }, observerOptions);

    this.observer.observe(this.targetSection);
  }

  private attachLayerMode(): void {
    if (!this.target) return;
    const config = this.getConfig(this.target);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: config.layerRootMargin || "0px",
      threshold: config.layerThreshold || 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Layer entered viewport
          if (!this.hasTriggered) {
            this.hasTriggered = true;
            if (this.fire) this.fire();
          }
        } else {
          // Layer left viewport
          if (config.replay && this.hasTriggered) {
            // Remove animation when replay is enabled
            if (this.cleanup) this.cleanup();
            this.hasTriggered = false;
          }
        }
      });
    }, observerOptions);

    this.observer.observe(this.target);
  }

  private attachDirectionMode(): void {
    if (!this.target) return;
    const config = this.getConfig(this.target);

    // Find the actual scrollable container dynamically
    const findScrollContainer = (): HTMLElement | Window => {
      let element: HTMLElement | null = this.target || null;
      while (element && element !== document.body) {
        const style = window.getComputedStyle(element);
        if (
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          element.scrollHeight > element.clientHeight
        ) {
          return element;
        }
        element = element.parentElement;
      }
      // Check for playground specifically
      const playground = document.getElementById("playground");
      if (playground && playground.scrollHeight > playground.clientHeight) {
        return playground;
      }
      return window;
    };

    const scrollContainer = findScrollContainer();

    const scrollHandler = () => {
      // Determine scroll direction based on the scroll container's offset
      const currentOffset =
        scrollContainer instanceof Window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;
      
      // Skip if scroll position hasn't changed
      if (currentOffset === this.lastScrollY) {
        return;
      }
      
      const direction = currentOffset > this.lastScrollY ? "down" : "up";

      // Only trigger if the target is at least partially visible in the viewport.
      if (!this.target) return;
      const rect = this.target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const requiredVisible = config.threshold ?? 0;
      const isVisible = visibleHeight > requiredVisible;

      if (isVisible) {
        if (config.direction === "both" || config.direction === direction) {
          // Correct direction - trigger animation
          if (!this.hasTriggered) {
            this.hasTriggered = true;
            if (this.fire) this.fire();
          } else {
            // Already triggered - skip to avoid re-triggering on every scroll event while visible
          }
        } else if (config.replay && this.hasTriggered) {
          // Visible but scrolling in the opposite direction and replay enabled:
          // immediately remove the animation so it can be re‑triggered on the next
          // correct-direction scroll.
          if (this.cleanup) this.cleanup();
          this.hasTriggered = false;
        }
      } else {
        // If the element is not visible and replay is enabled, ensure animation can be replayed later
        if (config.replay && this.hasTriggered) {
          if (this.cleanup) this.cleanup();
          this.hasTriggered = false;
        }
      }

      // Store last scroll offset so that direction detection is based on
      // actual scroll movement (of window or playground), not element position.
      this.lastScrollY = currentOffset;
    };

    const debouncedScrollHandler = () => {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      this.debounceTimeout = setTimeout(scrollHandler, config.debounceDelay || 50);
    };

    // Attach to scroll container (playground) if available, otherwise fallback to window
    if (scrollContainer instanceof Window) {
      this.addEventListener(window, "scroll", debouncedScrollHandler);
    } else {
      this.addEventListener(scrollContainer, "scroll", debouncedScrollHandler);
    }

    // Also attach a capturing scroll listener at the document level.
    // Scroll events don't bubble, and in preview the actual scrollable element
    // can vary. Capturing ensures we still receive scroll events reliably.
    this.addEventListener(document, "scroll", debouncedScrollHandler, true);
    
    // Initialize lastScrollY to current scroll position to detect direction correctly from the start
    this.lastScrollY = scrollContainer instanceof Window
      ? window.scrollY
      : (scrollContainer as HTMLElement).scrollTop;

    // Use RAF polling as fallback if scroll events don't fire reliably
    let rafId: number | null = null;
    let lastCheckedOffset = this.lastScrollY;
    
    const rafCheck = () => {
      if (!this.target) return;
      const currentOffset = scrollContainer instanceof Window ? window.scrollY : (scrollContainer as HTMLElement).scrollTop;
      if (currentOffset !== lastCheckedOffset) {
        lastCheckedOffset = currentOffset;
        scrollHandler();
      }
      rafId = requestAnimationFrame(rafCheck);
    };
    
    this.directionRAF = requestAnimationFrame(rafCheck);
  }

  private attachProgressMode(): void {
    if (!this.target) return;
    const config = this.getConfig(this.target);
    // Try to scope progress calculations to the closest scrollable container
    // (e.g. #playground in preview). If none is found, fall back to window viewport.
    const scrollRoot =
      (this.target.closest("#playground") as HTMLElement | null) || null;
    let frameCount = 0;
    let lastRange: "before" | "during" | "after" | null = null;
    let animationCompleted = false;

    const updateProgress = () => {
      if (!this.target || !this.isTrackingProgress) return;

      frameCount++;

      const rect = this.target.getBoundingClientRect();
      const rootRect = scrollRoot ? scrollRoot.getBoundingClientRect() : null;
      const viewportHeight = scrollRoot ? scrollRoot.clientHeight : window.innerHeight;

      // Positions relative to the scroll root (playground) if available,
      // otherwise relative to the window viewport.
      const elementTop = rect.top - (rootRect ? rootRect.top : 0);
      const elementBottom = rect.bottom - (rootRect ? rootRect.top : 0);
      const elementHeight = rect.height;

      let viewportProgress = 0;

      // Element must be at least partially in viewport for progress > 0
      if (elementBottom <= 0 || elementTop >= viewportHeight) {
        // Element completely outside viewport
        viewportProgress = 0;
      } else if (elementHeight <= viewportHeight) {
        // Element smaller than viewport
        // Progress calculation:
        // 0 -> 1: Element entering until fully visible
        // 1 -> 2: Element moving from fully visible position to viewport top
        // 2+: Element exiting from top

        if (elementBottom <= viewportHeight && elementTop >= 0) {
          // Element is fully visible in viewport
          // When element first becomes fully visible: top = (viewportHeight - elementHeight)
          // When element reaches viewport top: top = 0

          const fullyVisiblePosition = viewportHeight - elementHeight;

          if (elementTop >= fullyVisiblePosition) {
            // Element is entering - not yet at "fully visible" position
            // Progress from 0 to 1
            const distanceTraveled = fullyVisiblePosition - elementTop;
            viewportProgress = distanceTraveled / fullyVisiblePosition;
          } else {
            // Element has reached or passed "fully visible" position
            // Progress from 1 to 2 as it moves toward top
            const distancePastFullyVisible = fullyVisiblePosition - elementTop;
            viewportProgress = 1 + distancePastFullyVisible / fullyVisiblePosition;
          }
        } else if (elementTop < 0) {
          // Element's top is above viewport
          const distancePastTop = Math.abs(elementTop);
          viewportProgress = 2 + distancePastTop / elementHeight;
        } else if (elementTop < viewportHeight && elementBottom > viewportHeight) {
          // Element entering from bottom
          const visibleHeight = viewportHeight - elementTop;
          viewportProgress = visibleHeight / elementHeight;
        } else {
          viewportProgress = 0;
        }
      } else {
        // Element larger than viewport
        if (elementTop >= 0) {
          // Element entering
          const visibleHeight = Math.min(elementBottom - viewportHeight, elementHeight);
          viewportProgress = Math.max(0, visibleHeight / elementHeight);
        } else if (elementBottom <= 0) {
          // Element completely above viewport
          viewportProgress = 0;
        } else {
          // Element filling viewport, calculate based on scroll
          const scrolled = Math.abs(elementTop);
          const totalScroll = elementHeight;
          viewportProgress = scrolled / totalScroll;
        }
      }

      viewportProgress = Math.max(0, viewportProgress);

      // Apply start and end thresholds
      const startThreshold = config.progressStart ?? 0;
      const endThreshold = config.progressEnd ?? 1;

      // Check if interaction is outside its range
      if (animationCompleted && !config.replay) {
        // Animation already completed, skip all processing
        this.progressRAF = requestAnimationFrame(updateProgress);
        return;
      }

      if (viewportProgress < startThreshold) {
        // Before this interaction's range - don't apply anything
        if (lastRange !== "before") {
          lastRange = "before";
          if (config.engine === 'animateCss') {
            this.removeAnimateCssClasses(this.target);
          }
        }
      } else if (viewportProgress > endThreshold) {
        // After this interaction's range - mark as completed
        if (!animationCompleted) {
          // Apply final state one last time
          if (config.engine !== 'animateCss') {
            const effect = config.progressEffect || "fade";
            this.applyProgressEffect(this.target, 1, effect);
          } else {
            this.removeAnimateCssClasses(this.target);
          }
          animationCompleted = true;
          lastRange = "after";
        }
      } else {
        // During this interaction's range - map viewport progress to effect progress
        const effectProgress =
          (viewportProgress - startThreshold) / (endThreshold - startThreshold);

        if (lastRange !== "during") {
          lastRange = "during";
          if (config.engine === 'animateCss') {
            this.addAnimateCssClasses(this.target, config);
          }
        }

        // Apply effect based on config
        if (config.engine !== 'animateCss') {
          const effect = config.progressEffect || "fade";
          this.applyProgressEffect(this.target, effectProgress, effect);
        }
      }

      if (this.isTrackingProgress) {
        this.progressRAF = requestAnimationFrame(updateProgress);
      }
    };

    // Use IntersectionObserver to start/stop RAF when element enters/leaves viewport
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isTrackingProgress = true;
            updateProgress();
          } else {
            this.isTrackingProgress = false;
            if (this.progressRAF) {
              cancelAnimationFrame(this.progressRAF);
            }
            // Reset animation state when leaving viewport if replay is enabled
            if (config.replay) {
              animationCompleted = false;
              lastRange = null;
              if (config.engine === 'animateCss') {
                this.removeAnimateCssClasses(this.target);
              }
            }
          }
        });
      },
      {
        root: scrollRoot || null,
        threshold: 0,
      },
    );

    this.observer.observe(this.target);

    // Start immediately if element is already in viewport
    const rect = this.target.getBoundingClientRect();
    const rootRect = scrollRoot ? scrollRoot.getBoundingClientRect() : null;
    const viewportHeight = scrollRoot ? scrollRoot.clientHeight : window.innerHeight;
    const elementTop = rect.top - (rootRect ? rootRect.top : 0);
    const elementBottom = rect.bottom - (rootRect ? rootRect.top : 0);
    if (elementTop < viewportHeight && elementBottom > 0) {
      this.isTrackingProgress = true;
      updateProgress();
    }
  }

  private applyProgressEffect(element: HTMLElement, progress: number, effect: string): void {
    const config = this.target ? this.getConfig(this.target) : {};
    const startProgress = 0;
    const endProgress = 1;

    // Normalize progress between start and end
    const normalizedProgress = Math.max(
      0,
      Math.min(1, (progress - startProgress) / (endProgress - startProgress)),
    );

    switch (effect) {
      case "fade":
        element.style.opacity = normalizedProgress.toString();
        break;

      case "slideUp":
        element.style.transform = `translateY(${(1 - normalizedProgress) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;

      case "slideDown":
        element.style.transform = `translateY(${(normalizedProgress - 1) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;

      case "slideLeft":
        element.style.transform = `translateX(${(normalizedProgress - 1) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;

      case "slideRight":
        element.style.transform = `translateX(${(1 - normalizedProgress) * 100}px)`;
        element.style.opacity = normalizedProgress.toString();
        break;

      case "scale":
        const scale = 0.5 + normalizedProgress * 0.5; // Scale from 0.5 to 1
        element.style.transform = `scale(${scale})`;
        element.style.opacity = normalizedProgress.toString();
        break;

      case "custom":
        this.applyCustomEffect(element, normalizedProgress, config);
        break;
    }
  }

  private applyCustomEffect(element: HTMLElement, progress: number, config: OnScrollConfig): void {
    const transforms: string[] = [];

    // Opacity
    if (config.customOpacityStart !== undefined || config.customOpacityEnd !== undefined) {
      const opacityStart = config.customOpacityStart ?? 0;
      const opacityEnd = config.customOpacityEnd ?? 1;
      const opacity = opacityStart + (opacityEnd - opacityStart) * progress;
      element.style.opacity = opacity.toString();
    }

    // TranslateX
    if (config.customTranslateX !== undefined && config.customTranslateX !== 0) {
      const translateX = config.customTranslateX * (1 - progress);
      transforms.push(`translateX(${translateX}px)`);
    }

    // TranslateY
    if (config.customTranslateY !== undefined && config.customTranslateY !== 0) {
      const translateY = config.customTranslateY * (1 - progress);
      transforms.push(`translateY(${translateY}px)`);
    }

    // Scale
    if (config.customScaleStart !== undefined || config.customScaleEnd !== undefined) {
      const scaleStart = config.customScaleStart ?? 1;
      const scaleEnd = config.customScaleEnd ?? 1;
      const scale = scaleStart + (scaleEnd - scaleStart) * progress;
      transforms.push(`scale(${scale})`);
    }

    // Rotate
    if (config.customRotate !== undefined && config.customRotate !== 0) {
      const rotate = config.customRotate * (1 - progress);
      transforms.push(`rotate(${rotate}deg)`);
    }

    // Blur
    if (config.customBlur !== undefined && config.customBlur !== 0) {
      const blur = config.customBlur * (1 - progress);
      element.style.filter = `blur(${blur}px)`;
    }

    // Apply all transforms
    if (transforms.length > 0) {
      element.style.transform = transforms.join(" ");
    }
  }

  private addAnimateCssClasses(element: HTMLElement, config: OnScrollConfig): void {
    if (!config.animateCssAnimation) return;
    element.classList.add('animate__animated', `animate__${config.animateCssAnimation}`);
  }

  private removeAnimateCssClasses(element: HTMLElement): void {
    // Remove all animate__ classes
    const classes = Array.from(element.classList).filter(cls => cls.startsWith('animate__'));
    classes.forEach(cls => element.classList.remove(cls));
  }

  private getConfig(target: HTMLElement): OnScrollConfig {
    // If config was passed to constructor, use it (for multiple interactions)
    if (this.interactionConfig) {
      const config = { ...this.interactionConfig };
      // Set defaults for scroll trigger config
      if (!config.type) config.type = "direction";
      if (!config.direction) config.direction = "both";
      if (config.threshold === undefined) config.threshold = 50;
      if (config.replay === undefined) config.replay = false;
      if (config.debounceDelay === undefined) config.debounceDelay = 50;

      // Map direct animation properties to custom* properties for progress effects
      if (config.opacity !== undefined) {
        config.customOpacityEnd = config.opacity;
        config.customOpacityStart = 0;
      }
      if (config.scale !== undefined) {
        config.customScaleEnd = config.scale;
        config.customScaleStart = 0.8; // Default start scale
      }
      if (config.translateX !== undefined) {
        config.customTranslateX = typeof config.translateX === 'string' ? parseFloat(config.translateX) : config.translateX;
      }
      if (config.translateY !== undefined) {
        config.customTranslateY = typeof config.translateY === 'string' ? parseFloat(config.translateY) : config.translateY;
      }
      if (config.rotate?.z !== undefined) {
        config.customRotate = config.rotate.z;
      }

      return config;
    }

    // Otherwise read from data attributes (for single interaction or backward compatibility)
    const config: OnScrollConfig = {};

    const typeAttr = target.getAttribute("data-scroll-type");
    if (
      typeAttr &&
      (typeAttr === "direction" ||
        typeAttr === "section" ||
        typeAttr === "layer" ||
        typeAttr === "progress")
    ) {
      config.type = typeAttr as "direction" | "section" | "layer" | "progress";
    }

    const directionAttr = target.getAttribute("data-scroll-direction");
    if (
      directionAttr &&
      (directionAttr === "up" || directionAttr === "down" || directionAttr === "both")
    ) {
      config.direction = directionAttr as "up" | "down" | "both";
    }

    const thresholdAttr = target.getAttribute("data-scroll-threshold");
    if (thresholdAttr) {
      const parsed = parseInt(thresholdAttr, 10);
      config.threshold = isNaN(parsed) ? 50 : parsed;
    }

    const replayAttr = target.getAttribute("data-scroll-replay");
    if (replayAttr) {
      config.replay = replayAttr === "true";
    }

    const debounceAttr = target.getAttribute("data-scroll-debounce");
    if (debounceAttr) {
      const parsed = parseInt(debounceAttr, 10);
      config.debounceDelay = isNaN(parsed) ? 50 : parsed;
    }

    const sectionIdAttr = target.getAttribute("data-scroll-section-id");
    if (sectionIdAttr) {
      config.sectionId = sectionIdAttr;
    }

    const sectionThresholdAttr = target.getAttribute("data-scroll-section-threshold");
    if (sectionThresholdAttr) {
      const parsed = parseFloat(sectionThresholdAttr);
      config.sectionThreshold = isNaN(parsed) ? 0.1 : parsed;
    }

    const sectionRootMarginAttr = target.getAttribute("data-scroll-section-root-margin");
    if (sectionRootMarginAttr) {
      config.sectionRootMargin = sectionRootMarginAttr;
    }

    const layerThresholdAttr = target.getAttribute("data-scroll-layer-threshold");
    if (layerThresholdAttr) {
      const parsed = parseFloat(layerThresholdAttr);
      config.layerThreshold = isNaN(parsed) ? 0.1 : parsed;
    }

    const layerRootMarginAttr = target.getAttribute("data-scroll-layer-root-margin");
    if (layerRootMarginAttr) {
      config.layerRootMargin = layerRootMarginAttr;
    }

    const progressEffectAttr = target.getAttribute("data-scroll-progress-effect");
    if (
      progressEffectAttr &&
      ["fade", "slideUp", "slideDown", "slideLeft", "slideRight", "scale", "custom"].includes(
        progressEffectAttr,
      )
    ) {
      config.progressEffect = progressEffectAttr as
        | "fade"
        | "slideUp"
        | "slideDown"
        | "slideLeft"
        | "slideRight"
        | "scale"
        | "custom";
    }

    const progressStartAttr = target.getAttribute("data-scroll-progress-start");
    if (progressStartAttr) {
      const parsed = parseFloat(progressStartAttr);
      config.progressStart = isNaN(parsed) ? 0 : parsed;
    }

    const progressEndAttr = target.getAttribute("data-scroll-progress-end");
    if (progressEndAttr) {
      const parsed = parseFloat(progressEndAttr);
      config.progressEnd = isNaN(parsed) ? 1 : parsed;
    }

    // Custom progress attributes
    const customOpacityStartAttr = target.getAttribute("data-scroll-custom-opacity-start");
    if (customOpacityStartAttr) {
      const parsed = parseFloat(customOpacityStartAttr);
      config.customOpacityStart = isNaN(parsed) ? undefined : parsed;
    }

    const customOpacityEndAttr = target.getAttribute("data-scroll-custom-opacity-end");
    if (customOpacityEndAttr) {
      const parsed = parseFloat(customOpacityEndAttr);
      config.customOpacityEnd = isNaN(parsed) ? undefined : parsed;
    }

    const customTranslateXAttr = target.getAttribute("data-scroll-custom-translate-x");
    if (customTranslateXAttr) {
      const parsed = parseFloat(customTranslateXAttr);
      config.customTranslateX = isNaN(parsed) ? undefined : parsed;
    }

    const customTranslateYAttr = target.getAttribute("data-scroll-custom-translate-y");
    if (customTranslateYAttr) {
      const parsed = parseFloat(customTranslateYAttr);
      config.customTranslateY = isNaN(parsed) ? undefined : parsed;
    }

    const customScaleStartAttr = target.getAttribute("data-scroll-custom-scale-start");
    if (customScaleStartAttr) {
      const parsed = parseFloat(customScaleStartAttr);
      config.customScaleStart = isNaN(parsed) ? undefined : parsed;
    }

    const customScaleEndAttr = target.getAttribute("data-scroll-custom-scale-end");
    if (customScaleEndAttr) {
      const parsed = parseFloat(customScaleEndAttr);
      config.customScaleEnd = isNaN(parsed) ? undefined : parsed;
    }

    const customRotateAttr = target.getAttribute("data-scroll-custom-rotate");
    if (customRotateAttr) {
      const parsed = parseFloat(customRotateAttr);
      config.customRotate = isNaN(parsed) ? undefined : parsed;
    }

    const customBlurAttr = target.getAttribute("data-scroll-custom-blur");
    if (customBlurAttr) {
      const parsed = parseFloat(customBlurAttr);
      config.customBlur = isNaN(parsed) ? undefined : parsed;
    }

    // Set defaults
    if (!config.type) config.type = "direction";
    if (!config.direction) config.direction = "both";
    if (config.threshold === undefined) config.threshold = 50;
    if (config.replay === undefined) config.replay = false;
    if (config.debounceDelay === undefined) config.debounceDelay = 50;

    return config;
  }

  detach(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = undefined;
    }

    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    if (this.progressRAF) {
      cancelAnimationFrame(this.progressRAF);
      this.progressRAF = undefined;
    }

    if (this.directionRAF) {
      cancelAnimationFrame(this.directionRAF);
      this.directionRAF = undefined;
    }

    this.isTrackingProgress = false;
    this.hasTriggered = false;
    this.lastScrollY = 0;
    this.targetSection = undefined;
    super.detach();
  }
}
