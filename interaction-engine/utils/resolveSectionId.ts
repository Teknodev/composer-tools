// src/composer-tools/interaction-engine/utils/resolveSectionId.ts
// Shared utility for resolving sectionId to DOM element(s).
// Used by both BaseTrigger and SectionScrollStrategy.

import { logger } from './Logger';

export interface SectionIdResult {
  /** Primary target element (first match or fallback) */
  target: HTMLElement;
  /** All matched elements (null when sectionId was an id, not a class) */
  elements: HTMLElement[] | null;
}

/**
 * Resolve a sectionId to DOM element(s).
 * - If sectionId starts with '.', resolves by class token (with auto-generate- prefix fallback).
 * - Otherwise resolves by element id.
 * @param sectionId The section identifier (class or ID)
 * @param fallback Fallback element when resolution fails
 * @param callerName Optional name for debug logging
 * @returns The primary target and (for class selectors) all matched elements.
 */
export function resolveSectionId(
  sectionId: string,
  fallback: HTMLElement,
  callerName = 'resolveSectionId',
): SectionIdResult {
  if (sectionId.startsWith('.')) {
    const className = sectionId.slice(1);
    try {
      let nodeList = document.querySelectorAll(`[class~="${className}"]`);
      if (nodeList.length === 0 && !className.startsWith('auto-generate-')) {
        const prefixed = `auto-generate-${className}`;
        nodeList = document.querySelectorAll(`[class~="${prefixed}"]`);
        logger.debug(`${callerName}: fallback to prefixed token`, { className, prefixed, count: nodeList.length });
      } else {
        logger.debug(`${callerName}: found elements for`, { className, count: nodeList.length });
      }

      const elements = Array.from(nodeList) as HTMLElement[];
      return {
        target: elements[0] || fallback,
        elements: elements.length > 0 ? elements : null,
      };
    } catch (error) {
      logger.error(`${callerName}: error finding elements`, error as Error);
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
