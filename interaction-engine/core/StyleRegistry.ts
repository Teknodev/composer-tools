// src/composer-tools/interaction-engine/core/StyleRegistry.ts

/**
 * Registry that holds the *true initial* computed styles for an element.
 * We keep this global (weakly) per-element so multiple command instances
 * animating the same DOM node never overwrite the real initial values.
 */
export const originalStyleRegistry: WeakMap<HTMLElement, Map<string, string>> = new WeakMap();
