// src/composer-tools/interaction-engine/triggers/PressTrigger.ts

import { BaseTrigger } from './TriggerStrategy';
import { logger } from '../utils/Logger';

export class PressTrigger extends BaseTrigger {
  private boundPressHandler?: (event: Event) => void;
  private boundReleaseHandler?: (event: Event) => void;
  private config?: Record<string, any>;
  private hasTriggered = false;

  constructor(config?: Record<string, any>) {
    super();
    this.config = config;
  }

  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void {
    logger.debug('PressTrigger: attaching with config:', { config: this.config });
    this.fire = fire;
    this.cleanup = cleanup;
    
    this.boundPressHandler = () => {
      // Check if trigger should only fire once
      if (this.config?.once && this.hasTriggered) {
        return;
      }

      // Do NOT await cleanup here — command.execute() will synchronously cancel
      // any running animations (including in-progress cleanup reverses) via
      // cancelAllAnimations().  Awaiting cleanup caused race conditions where a
      // slow reverse animation blocked re-triggering.
      fire();
      this.hasTriggered = true;
    };

    this.boundReleaseHandler = async () => {
      if (!this.target) {
        await cleanup?.();
        return;
      }

      // Delegate to the animation engine so it can capture current
      // computed styles and run a smooth transition back to originals.
      // Avoid calling `cancel()` here to prevent an immediate snap.
      await cleanup?.();
    };

    let triggerTarget = target;
    if (this.config?.sectionId) {
      const { target: resolved, elements } = this.resolveSectionId(this.config.sectionId, target);
      triggerTarget = resolved;
      if (elements) {
        for (const el of elements) {
          this.addEventListener(el, 'mousedown', this.boundPressHandler);
        }
      } else {
        this.addEventListener(triggerTarget, 'mousedown', this.boundPressHandler);
      }
      // Attach a single document-level mouseup listener for release handling
      if (cleanup) {
        this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
      }
    } else {
      this.addEventListener(target, 'mousedown', this.boundPressHandler);
      if (cleanup) {
        this.addEventListener(document, 'mouseup', this.boundReleaseHandler);
      }
    }
    
    this.target = triggerTarget;
  }
}