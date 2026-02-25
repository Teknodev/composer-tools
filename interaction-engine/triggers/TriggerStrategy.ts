// src/composer-tools/interaction-engine/triggers/TriggerStrategy.ts

import { logger } from '../utils/Logger';

export interface SectionIdResult {
  /** Primary target element (first match or fallback) */
  target: HTMLElement;
  /** All matched elements (null when sectionId was an id, not a class) */
  elements: HTMLElement[] | null;
}

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
   * - If sectionId starts with '.', resolves by class token (with auto-generate- prefix fallback).
   * - Otherwise resolves by element id.
   * @returns The primary target and (for class selectors) all matched elements.
   */
  protected resolveSectionId(sectionId: string, fallback: HTMLElement): SectionIdResult {
    const triggerName = this.constructor.name;

    if (sectionId.startsWith('.')) {
      const className = sectionId.slice(1);
      try {
        let nodeList = document.querySelectorAll(`[class~="${className}"]`);
        if (nodeList.length === 0 && !className.startsWith('auto-generate-')) {
          const prefixed = `auto-generate-${className}`;
          nodeList = document.querySelectorAll(`[class~="${prefixed}"]`);
          logger.debug(`${triggerName}: fallback to prefixed token`, { className, prefixed, count: nodeList.length });
        } else {
          logger.debug(`${triggerName}: found elements for`, { className, count: nodeList.length });
        }

        const elements = Array.from(nodeList) as HTMLElement[];
        return {
          target: elements[0] || fallback,
          elements: elements.length > 0 ? elements : null,
        };
      } catch (error) {
        logger.error(`${triggerName}: error finding elements`, error);
        return { target: fallback, elements: null };
      }
    }

    // ID-based lookup
    const el = document.getElementById(sectionId);
    return {
      target: (el as HTMLElement) || fallback,
      elements: null,
    };
  }

  abstract attach(target: HTMLElement, fire: () => void, cleanup?: () => void): void;

  detach(): void {
    this.clearEventListeners();
    this.target = undefined;
    this.fire = undefined;
    this.cleanup = undefined;
  }
}