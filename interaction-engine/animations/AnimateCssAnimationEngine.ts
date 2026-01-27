// src/composer-tools/interaction-engine/animations/AnimateCssAnimationEngine.ts

import { AnimationEngine } from '../core/types';
import { logger } from '../utils/Logger';

export class AnimateCssAnimationEngine implements AnimationEngine {
  async animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing?: string
  ): Promise<void> {
    // Check if animate.css is loaded
    if (!this.isAnimateCssLoaded()) {
      logger.warn('animate.css not found. Please include animate.css in your project.');
      return;
    }

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

    // Add animate.css classes
    element.classList.add('animate__animated', formattedAnimationClass);

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
      element.style.animationIterationCount = properties.iterationCount.toString();
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
      // For infinite animations, don't wait for animationend
      if (properties.iterationCount === "infinite") {
        // Resolve after delay, leaving the animation running
        setTimeout(() => {
          resolve();
        }, properties.delay || 0);
        return;
      }

      const handleAnimationEnd = () => {
        element.classList.remove('animate__animated', formattedAnimationClass);
        element.style.removeProperty('--animate-duration');
        element.style.removeProperty('--animate-delay');
        element.style.removeProperty('animation-iteration-count');
        element.style.removeProperty('animation-direction');
        element.style.removeProperty('animation-fill-mode');
        element.removeEventListener('animationend', handleAnimationEnd);
        resolve();
      };

      element.addEventListener('animationend', handleAnimationEnd);

      // Calculate total animation time for fallback
      const iterationCount = typeof properties.iterationCount === 'number' ? properties.iterationCount : 1;
      const totalDuration = (duration || 1000) * iterationCount + (properties.delay || 0);

      // Fallback timeout in case animationend doesn't fire
      setTimeout(() => {
        element.classList.remove('animate__animated', formattedAnimationClass);
        element.style.removeProperty('--animate-duration');
        element.style.removeProperty('--animate-delay');
        element.style.removeProperty('animation-iteration-count');
        element.style.removeProperty('animation-direction');
        element.style.removeProperty('animation-fill-mode');
        resolve();
      }, totalDuration + 100);
    });
  }

  private isAnimateCssLoaded(): boolean {
    // Check if animate.css styles are available
    const testElement = document.createElement('div');
    testElement.className = 'animate__animated animate__bounce';
    document.body.appendChild(testElement);

    const hasAnimation = window.getComputedStyle(testElement).animationName !== 'none';
    document.body.removeChild(testElement);

    return hasAnimation;
  }
}