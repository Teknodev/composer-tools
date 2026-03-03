// src/composer-tools/interaction-engine/triggers/TriggerStrategy.ts

import { logger } from '../utils/Logger';
import { resolveSectionId as _resolveSectionId, SectionIdResult } from '../utils/resolveSectionId';

export type { SectionIdResult };

export interface TriggerStrategy {
  attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void;
  detach(): void;
}

export abstract class BaseTrigger implements TriggerStrategy {
  protected target?: HTMLElement;
  protected fire?: () => void;
  protected cleanup?: () => void;
  protected eventListeners: Array<{
    element: EventTarget;
    type: string;
    handler: EventListener;
    options?: boolean | AddEventListenerOptions;
  }> = [];

  protected addEventListener(
    element: EventTarget,
    type: string,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions
  ): void {
    element.addEventListener(type, handler, options);
    this.eventListeners.push({ element, type, handler, options });
  }

  protected clearEventListeners(): void {
    this.eventListeners.forEach(({ element, type, handler, options }) => {
      element.removeEventListener(type, handler, options);
    });
    this.eventListeners = [];
  }

  /**
   * Resolve a sectionId to DOM element(s).
   * Delegates to shared utility.
   */
  protected resolveSectionId(sectionId: string, fallback: HTMLElement): SectionIdResult {
    return _resolveSectionId(sectionId, fallback, this.constructor.name);
  }

  abstract attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void;

  detach(): void {
    this.clearEventListeners();
    this.target = undefined;
    this.fire = undefined;
    this.cleanup = undefined;
  }
}