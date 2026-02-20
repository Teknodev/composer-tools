// src/composer-tools/interaction-engine/triggers/LoadTrigger.ts

import { BaseTrigger } from './TriggerStrategy';

export interface LoadTriggerConfig {
  delay?: number;
  waitForImages?: boolean;
  waitForElement?: boolean;
}

export class LoadTrigger extends BaseTrigger {
  private boundHandler?: () => void;
  private timeoutId?: number;
  private hasTriggered = false;

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    this.target = target;
    this.fire = fire;
    this.cleanup = cleanup;

    // Get configuration from data attributes or defaults
    const config = this.getConfig(target);
    const { delay = 0, waitForImages = false, waitForElement = true } = config;

    const executeFire = () => {
      if (this.hasTriggered) return;
      
      if (delay > 0) {
        this.timeoutId = window.setTimeout(() => {
          fire();
          this.hasTriggered = true;
        }, delay);
      } else {
        fire();
        this.hasTriggered = true;
      }
    };

    // Check if element should wait for itself to be ready
    if (waitForElement) {
      // If element is already in DOM and visible, check document state
      if (document.readyState === 'complete') {
        // Page already loaded
        if (waitForImages) {
          this.waitForAllImages(target, executeFire);
        } else {
          executeFire();
        }
      } else if (document.readyState === 'interactive' && !waitForImages) {
        // DOM ready but resources might still be loading
        executeFire();
      } else {
        // Wait for full page load
        this.boundHandler = () => {
          if (waitForImages) {
            this.waitForAllImages(target, executeFire);
          } else {
            executeFire();
          }
        };
        this.addEventListener(window, 'load', this.boundHandler);
      }
    } else {
      // Just check document state without element-specific logic
      if (document.readyState === 'complete') {
        executeFire();
      } else {
        this.boundHandler = () => executeFire();
        this.addEventListener(window, 'load', this.boundHandler);
      }
    }
  }

  detach(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.hasTriggered = false;
    super.detach();
  }

  private waitForAllImages(element: HTMLElement, callback: () => void): void {
    const images = element.querySelectorAll('img');
    
    if (images.length === 0) {
      callback();
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        callback();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener('load', checkAllLoaded, { once: true });
        img.addEventListener('error', checkAllLoaded, { once: true }); // Count errors as "loaded" to prevent hanging
      }
    });
  }

  private getConfig(target: HTMLElement): LoadTriggerConfig {
    const config: LoadTriggerConfig = {};

    // Read from data attributes
    const delayAttr = target.getAttribute('data-load-delay');
    if (delayAttr) {
      const parsed = parseInt(delayAttr, 10);
      config.delay = isNaN(parsed) ? 0 : parsed;
    }

    const waitForImagesAttr = target.getAttribute('data-load-wait-images');
    if (waitForImagesAttr) {
      config.waitForImages = waitForImagesAttr === 'true';
    }

    const waitForElementAttr = target.getAttribute('data-load-wait-element');
    if (waitForElementAttr) {
      config.waitForElement = waitForElementAttr === 'true';
    }

    return config;
  }
}