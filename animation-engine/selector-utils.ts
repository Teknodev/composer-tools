/**
 * Selector Utilities
 *
 * Detects CSS selector specificity type and computes an effective numeric
 * priority that combines trigger-priority with selector-specificity scoring.
 *
 * Used by InteractionManager and AnimationPriorityManager to enforce:
 *   id  >  class  >  element
 * when multiple interactions target the same DOM element from different
 * selector origins.
 */

// ── Selector specificity type ──────────────────────────────────────────────

export type SelectorSpecificity = "id" | "class" | "element" | "compound";

/**
 * Numeric priority boost per selector-specificity tier.
 * Values are designed to slot *between* trigger-priority tiers so that
 * selector specificity acts as a secondary differentiator when two
 * interactions share the same trigger type.
 *
 *   element : +10   (lowest)
 *   class   : +20
 *   compound: +20   (treated as class-level)
 *   id      : +30   (highest)
 */
export const SELECTOR_PRIORITY: Record<SelectorSpecificity, number> = {
  id: 30,
  class: 20,
  element: 10,
  compound: 20,
};

// ── Detection ──────────────────────────────────────────────────────────────

/**
 * Regex patterns for bare (single) selectors.
 * Compound / complex selectors (containing spaces, combinators, commas,
 * pseudo-classes, brackets, etc.) fall through to "compound".
 */
const BARE_ID_RE = /^#[\w-]+$/;
const BARE_CLASS_RE = /^\.[\w-]+$/;
const BARE_ELEMENT_RE = /^[a-zA-Z][\w-]*$/;

/**
 * Detect the specificity tier of a CSS selector string.
 *
 * - `#foo`        → "id"
 * - `.bar`        → "class"
 * - `div`         → "element"
 * - `div.foo#bar` → "compound"
 * - (empty)       → "element"  (targets the section element itself)
 */
export function detectSelectorSpecificity(selector: string): SelectorSpecificity {
  const trimmed = selector.trim();
  if (!trimmed) return "element";
  if (BARE_ID_RE.test(trimmed)) return "id";
  if (BARE_CLASS_RE.test(trimmed)) return "class";
  if (BARE_ELEMENT_RE.test(trimmed)) return "element";
  return "compound";
}

// ── Effective priority ─────────────────────────────────────────────────────

/**
 * Compute the effective numeric priority for an interaction by combining
 * the interaction's own priority (usually trigger-based) with a selector-
 * specificity boost.
 *
 * @param triggerPriority  The base priority from the interaction (e.g. 0, 15, 20)
 * @param selector         The CSS selector string from TargetConfig
 * @returns An integer suitable for AnimationPriorityManager comparison
 */
export function computeEffectivePriority(
  triggerPriority: number,
  selector: string
): number {
  const specificity = detectSelectorSpecificity(selector);
  return triggerPriority + SELECTOR_PRIORITY[specificity];
}
