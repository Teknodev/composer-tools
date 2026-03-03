// interaction-engine/commands/animate/easingUtils.ts

/**
 * Normalises an easing string to a valid CSS easing value.
 * Handles legacy camelCase variants and shorthand aliases.
 */
export function normaliseCssEasing(easing: string): string {
  const map: Readonly<Record<string, string>> = {
    ease: 'ease',
    linear: 'linear',
    // kebab-case — already valid, pass through
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    // legacy camelCase variants
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // shorthand alias → materialise a sensible default
    'cubic-bezier': 'cubic-bezier(0.4, 0, 0.2, 1)',
  };
  return map[easing] ?? easing;
}
