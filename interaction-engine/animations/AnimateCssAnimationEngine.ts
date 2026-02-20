// src/composer-tools/interaction-engine/animations/AnimateCssAnimationEngine.ts

import { AnimationEngine } from '../core/types';
import { logger } from '../utils/Logger';

// Global timeout registry for AnimateCss animations
const activeTimeouts = new Map<HTMLElement, number>();

export class AnimateCssAnimationEngine implements AnimationEngine {
  async animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing?: string
  ): Promise<{ cancel?: () => void } | void> {
    const execId = (properties && (properties as any).__executionId) || undefined;
    if (execId) {
      try {
        delete (properties as any).__executionId;
      } catch (err) {
        /* ignore */
      }
    }

    try {
      console.debug('AnimateCssAnimationEngine.animate: started', { execId, elementId: element.id, properties, duration });
    } catch (err) {
      /* ignore */
    }
    // Check if animate.css is loaded
    // if (!this.isAnimateCssLoaded()) {
    //   logger.warn('animate.css not found. Please include animate.css in your project.');
    //   return;
    // }

    const animationClass = properties.animation || properties.class || 'animate__bounce';

    // Ensure proper animate.css class format
    const formattedAnimationClass = animationClass.startsWith('animate__')
      ? animationClass
      : `animate__${animationClass}`;

    // CLEANUP: ensure any previous animate.css artifacts are removed so adding
    // classes below will always restart the animation (handles interrupted/infinite runs)
    try {
      Array.from(element.classList)
        .filter(c => c.startsWith('animate__'))
        .forEach(c => element.classList.remove(c));

      element.style.removeProperty('--animate-duration');
      element.style.removeProperty('--animate-delay');
      element.style.removeProperty('animation-iteration-count');
      element.style.removeProperty('animation-direction');
      element.style.removeProperty('animation-fill-mode');
      element.style.animation = '';

      // Force reflow so subsequent class additions reliably restart animation
      void element.offsetWidth;
    } catch (err) {
      /* ignore cleanup errors */
    }

    // Optionally observe visibility to pause/resume by re-adding classes on re-entry
    let visibilityObserver: IntersectionObserver | undefined;
    const offScreenMode = (properties && (properties as any).offScreen) || undefined;

    if (offScreenMode === 'pause') {
      try {
        visibilityObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            try { console.debug('AnimateCssAnimationEngine.visibilityObserver: entry', { execId, elementId: element.id, isIntersecting: entry.isIntersecting }); } catch (e) {}
            if (entry.isIntersecting) {
              // Re-add classes to restart animation on re-entry
              element.classList.add('animate__animated', formattedAnimationClass);
              try { element.style.removeProperty('animation'); } catch (e) {}
              void element.offsetWidth; // force reflow
            } else {
              // Remove classes when leaving view to stop animation
              element.classList.remove('animate__animated', formattedAnimationClass);
              try { element.style.animation = ''; } catch (e) {}
            }
          });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        visibilityObserver.observe(element);
      } catch (e) {
        visibilityObserver = undefined;
      }
    }

    element.classList.add('animate__animated', formattedAnimationClass);

    try {
      console.debug('AnimateCssAnimationEngine.animate: classes added', { execId, elementId: element.id, formattedAnimationClass, offScreenMode, elementClasses: Array.from(element.classList) });
    } catch (e) {
      /* ignore */
    }

    // Set custom duration if provided
    if (duration && duration !== 1000) {
      element.style.setProperty('--animate-duration', `${duration}ms`);
    }

    // Set custom delay if provided
    if (properties.delay) {
      element.style.setProperty('--animate-delay', `${properties.delay}ms`);
    }

    // Set iteration count if provided
    if (properties.iterationCount && properties.iterationCount !== 1) {
      element.style.setProperty('--animate-repeat', properties.iterationCount.toString());
      element.style.animationIterationCount = properties.iterationCount.toString();
      try { console.debug('AnimateCssAnimationEngine.animate: set iteration', { iterationCount: properties.iterationCount }); } catch (e) {}
    }

    // Set direction if provided
    if (properties.direction && properties.direction !== 'normal') {
      element.style.animationDirection = properties.direction;
    }

    // Set fill mode if provided
    if (properties.fillMode && properties.fillMode !== 'none') {
      element.style.animationFillMode = properties.fillMode;
    }

    // Wait for animation to complete
    return new Promise((resolve) => {
      let fallbackTimeoutId: number;

      const cancel = () => {
        // Remove event listener
        element.removeEventListener('animationend', handleAnimationEnd);
        // Clean up classes and styles
        element.classList.remove('animate__animated', formattedAnimationClass);
        element.style.removeProperty('--animate-duration');
        element.style.removeProperty('--animate-delay');
        element.style.removeProperty('--animate-repeat');
        element.style.removeProperty('animation-iteration-count');
        element.style.removeProperty('animation-direction');
        element.style.removeProperty('animation-fill-mode');
        try {
          element.style.animation = '';
          void element.offsetWidth;
        } catch (e) {
          /* ignore */
        }
        if (visibilityObserver) {
          try { visibilityObserver.disconnect(); } catch (e) {}
          visibilityObserver = undefined;
        }
      };

      // For infinite animations, don't wait for animationend
      if (properties.iterationCount === "infinite") {
        // Resolve after delay, leaving the animation running
        setTimeout(() => {
          try { console.debug('AnimateCssAnimationEngine.animate: finished (infinite)', { execId, elementId: element.id }); } catch (e) {}
          resolve({ cancel });
        }, properties.delay || 0);
        return;
      }

      const handleAnimationEnd = () => {
        try { console.debug('AnimateCssAnimationEngine.animate: finished', { execId, elementId: element.id }); } catch (e) {}
        
        element.classList.remove('animate__animated', formattedAnimationClass);
        element.style.removeProperty('--animate-duration');
        element.style.removeProperty('--animate-delay');
        element.style.removeProperty('--animate-repeat');
        element.style.removeProperty('animation-iteration-count');
        element.style.removeProperty('animation-direction');
        element.style.removeProperty('animation-fill-mode');
        // Ensure any inline animation is cleared so subsequent class additions restart correctly
        try {
          element.style.animation = '';
          void element.offsetWidth;
        } catch (e) {
          /* ignore */
        }
        
        if (visibilityObserver) {
          try { visibilityObserver.disconnect(); } catch (e) {}
          visibilityObserver = undefined;
        }
        element.removeEventListener('animationend', handleAnimationEnd);
        activeTimeouts.delete(element);
        resolve({ cancel });
      };

      element.addEventListener('animationend', handleAnimationEnd);

      // Calculate total animation time for fallback
      const iterationCount = typeof properties.iterationCount === 'number' ? properties.iterationCount : 1;
      const totalDuration = (duration || 1000) * iterationCount + (properties.delay || 0);

      // Fallback timeout in case animationend doesn't fire
      fallbackTimeoutId = window.setTimeout(() => {
        try { console.debug('AnimateCssAnimationEngine.animate: fallback finished', { execId, elementId: element.id }); } catch (e) {}
        
        element.classList.remove('animate__animated', formattedAnimationClass);
        element.style.removeProperty('--animate-duration');
        element.style.removeProperty('--animate-delay');
        element.style.removeProperty('--animate-repeat');
        element.style.removeProperty('animation-iteration-count');
        element.style.removeProperty('animation-direction');
        element.style.removeProperty('animation-fill-mode');
        try {
          element.style.animation = '';
          void element.offsetWidth;
        } catch (e) {
          /* ignore */
        }
        
        if (visibilityObserver) {
          try { visibilityObserver.disconnect(); } catch (e) {}
          visibilityObserver = undefined;
        }
        this.activeTimeouts.delete(element);
        resolve({ cancel });
      }, totalDuration + 100);

      activeTimeouts.set(element, fallbackTimeoutId);
    });
  }

  cancelAll(element: HTMLElement): void {
    const timeoutId = activeTimeouts.get(element);
    if (timeoutId) {
      clearTimeout(timeoutId);
      activeTimeouts.delete(element);
    }

    // Clean up animation classes and styles
    try {
      Array.from(element.classList)
        .filter(c => c.startsWith('animate__'))
        .forEach(c => element.classList.remove(c));

      element.style.removeProperty('--animate-duration');
      element.style.removeProperty('--animate-delay');
      element.style.removeProperty('--animate-repeat');
      element.style.removeProperty('animation-iteration-count');
      element.style.removeProperty('animation-direction');
      element.style.removeProperty('animation-fill-mode');
      element.style.animation = '';
      void element.offsetWidth;
    } catch (e) {
      /* ignore */
    }
  }

  private isAnimateCssLoaded(): boolean {
    // Check if animate.css is loaded by looking for the animate__animated class in stylesheets
    try {
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i] as CSSStyleSheet;
        try {
          const rules = sheet.cssRules || sheet.rules;
          for (let j = 0; j < rules.length; j++) {
            const rule = rules[j] as CSSStyleRule;
            if (rule.selectorText && rule.selectorText.includes('.animate__animated')) {
              return true;
            }
          }
        } catch (e) {
          // Cross-origin stylesheet, skip
          continue;
        }
      }
    } catch (e) {
      /* ignore */
    }

    // Fallback: check if the class exists in computed styles
    try {
      const testElement = document.createElement('div');
      testElement.className = 'animate__animated';
      document.body.appendChild(testElement);
      const computedStyle = window.getComputedStyle(testElement);
      const hasAnimation = computedStyle.animationName !== 'none';
      document.body.removeChild(testElement);
      return hasAnimation;
    } catch (e) {
      /* ignore */
    }

    return false;
  }
}