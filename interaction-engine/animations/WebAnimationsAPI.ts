// src/composer-tools/interaction-engine/animations/WebAnimationsAPI.ts

import { AnimationEngine } from '../core/types';

export class WebAnimationsAPI implements AnimationEngine {
  async animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing = 'ease'
  ): Promise<{ cancel?: () => void } | void> {
    const { delay = 0, iterationCount = 1, ...animationProperties } = properties;
    
    // Get current values for all animated properties
    const currentValues: Record<string, any> = {};
    Object.keys(animationProperties).forEach(property => {
      currentValues[property] = getComputedStyle(element).getPropertyValue(property);
    });

    const keyframes = [currentValues, animationProperties];

    const animation = element.animate(keyframes, {
      duration,
      easing,
      fill: 'forwards',
      delay,
      iterations: iterationCount === 'infinite' ? Infinity : iterationCount,
    });

    return new Promise((resolve) => {
      // For infinite animations, resolve immediately but keep animation running
      if (iterationCount === 'infinite') {
        setTimeout(() => {
          resolve({ cancel: () => animation.cancel(), animation });
        }, delay);
        return;
      }

      // Resolve with cancel and animation reference
      animation.onfinish = () => resolve({ cancel: () => animation.cancel(), animation });
      // Return the cancel function and animation immediately for non-infinite animations
      resolve({ cancel: () => animation.cancel(), animation });
    });
  }
}