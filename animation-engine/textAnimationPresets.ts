/**
 * textAnimationPresets
 *
 * Defines user-friendly animation presets that map to the internal
 * TextAnimationConfig effect system.  Also contains the keyframe factories
 * and fragment-duration logic extracted from TextAnimationEngine.
 *
 * Preset names are what the editor UI shows.  Internally they resolve to
 * the existing TextAnimationEffect values so saved configs stay compatible.
 */

import {
  TextAnimationConfig,
  TextAnimationEffect,
  TextAnimationSplitMode,
  CustomTextProperty,
} from "../../types/animation-interaction";
import { CUSTOM_TEXT_PROPERTY_UNITS } from "./constants";

// ── Preset definitions ────────────────────────────────────────────────────

export type TextAnimationPresetName =
  | "fade"
  | "slide"
  | "scale"
  | "rotate"
  | "typing"
  | "reveal"
  | "stagger"
  | "custom";

export interface TextAnimationPresetDescriptor {
  value: TextAnimationPresetName;
  label: string;
  description: string;
}

/**
 * Ordered list of animation presets shown in the editor dropdown.
 * "Custom" is always last.
 */
export const ANIMATION_PRESETS: TextAnimationPresetDescriptor[] = [
  { value: "fade",    label: "Fade",    description: "Elements fade in smoothly" },
  { value: "slide",   label: "Slide",   description: "Elements slide in from the side" },
  { value: "scale",   label: "Scale",   description: "Elements scale up into view" },
  { value: "rotate",  label: "Rotate",  description: "Elements rotate into place" },
  { value: "typing",  label: "Typing",  description: "Characters appear one by one" },
  { value: "reveal",  label: "Reveal",  description: "Characters fade and slide up" },
  { value: "stagger", label: "Stagger", description: "Words animate in sequentially" },
  { value: "custom",  label: "Custom",  description: "Define your own animation" },
];

/**
 * Maps each preset to the internal effect + default splitBy.
 * Does NOT include staggerDelay/staggerDirection — those are user overrides.
 */
const PRESET_EFFECT_MAP: Record<
  TextAnimationPresetName,
  { effect: TextAnimationEffect; splitBy: TextAnimationSplitMode; customProperties?: CustomTextProperty[] }
> = {
  fade:    { effect: "fade-characters",  splitBy: "characters" },
  slide:   { effect: "slide-characters", splitBy: "characters" },
  scale:   { effect: "staggered-words",  splitBy: "words" },
  rotate:  {
    effect: "custom",
    splitBy: "characters",
    customProperties: [
      { property: "rotate", from: "15", to: "0" },
      { property: "opacity", from: "0", to: "1" },
    ],
  },
  typing:  { effect: "typewriter",       splitBy: "characters" },
  reveal:  { effect: "character-reveal",  splitBy: "characters" },
  stagger: { effect: "staggered-words",  splitBy: "words" },
  custom:  {
    effect: "custom",
    splitBy: "characters",
    customProperties: [
      { property: "opacity", from: "0", to: "1" },
      { property: "translateY", from: "20", to: "0" },
    ],
  },
};

/**
 * Resolve a preset name into a full TextAnimationConfig.
 * Preserves existing user-overrides (staggerDelay, staggerDirection, splitBy)
 * when provided.
 */
export function resolvePresetConfig(
  preset: TextAnimationPresetName,
  overrides?: Partial<Pick<TextAnimationConfig, "staggerDelay" | "staggerDirection" | "splitBy">>
): TextAnimationConfig {
  const base = PRESET_EFFECT_MAP[preset];
  return {
    engine: "text-animation",
    effect: base.effect,
    splitBy: overrides?.splitBy ?? base.splitBy,
    staggerDelay: overrides?.staggerDelay ?? 50,
    staggerDirection: overrides?.staggerDirection,
    ...(base.customProperties ? { customProperties: base.customProperties } : {}),
  };
}

/**
 * Detect which preset (if any) matches a saved TextAnimationConfig.
 * Used to highlight the correct preset in the UI when loading existing configs.
 * Returns "custom" if no preset matches.
 */
export function detectPresetFromConfig(config: TextAnimationConfig): TextAnimationPresetName {
  const effect = config.effect;

  // Direct, unambiguous mappings first
  if (effect === "typewriter")        return "typing";
  if (effect === "character-reveal")  return "reveal";
  if (effect === "fade-characters")   return "fade";
  if (effect === "slide-characters")  return "slide";
  if (effect === "word-reveal")       return "reveal";
  if (effect === "scramble-text")     return "custom"; // scramble has no preset — show as custom

  if (effect === "staggered-words") {
    // "stagger" and "scale" both map to staggered-words, differentiate by splitBy
    return config.splitBy === "words" ? "stagger" : "scale";
  }

  if (effect === "custom") {
    // Check if it matches the "rotate" preset
    const props = config.customProperties ?? [];
    const hasRotate = props.some((p) => p.property === "rotate");
    const hasOpacity = props.some((p) => p.property === "opacity");
    if (hasRotate && hasOpacity && props.length === 2) return "rotate";
  }

  return "custom";
}

// ── Keyframe factories ────────────────────────────────────────────────────

/** Return WAAPI keyframes for a built-in effect. */
export function getEffectKeyframes(effect: TextAnimationEffect): Keyframe[] {
  switch (effect) {
    case "typewriter":
      return [
        { opacity: 0, visibility: "hidden" as string },
        { opacity: 1, visibility: "visible" as string },
      ];
    case "character-reveal":
      return [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0px)" },
      ];
    case "word-reveal":
      return [
        { opacity: 0, transform: "translateY(30px)" },
        { opacity: 1, transform: "translateY(0px)" },
      ];
    case "fade-characters":
      return [{ opacity: 0 }, { opacity: 1 }];
    case "slide-characters":
      return [
        { opacity: 0, transform: "translateX(-15px)" },
        { opacity: 1, transform: "translateX(0px)" },
      ];
    case "staggered-words":
      return [
        { opacity: 0, transform: "translateY(25px) scale(0.95)" },
        { opacity: 1, transform: "translateY(0px) scale(1)" },
      ];
    case "scramble-text":
      return [{ opacity: 0.7 }, { opacity: 1 }];
    default:
      return [{ opacity: 0 }, { opacity: 1 }];
  }
}

/**
 * Build WAAPI keyframes from user-defined custom properties.
 * Groups transform and filter sub-properties into composite strings.
 */
export function buildCustomKeyframes(props: CustomTextProperty[]): Keyframe[] {
  const from: Record<string, string> = {};
  const to: Record<string, string> = {};
  const tfFrom: string[] = [];
  const tfTo: string[] = [];
  const flFrom: string[] = [];
  const flTo: string[] = [];

  // Property → CSS function name mapping for transforms and filters
  const TRANSFORM_FN: Record<string, string> = {
    translateX: "translateX", translateY: "translateY",
    scale: "scale", rotate: "rotate",
  };
  const FILTER_FN: Record<string, string> = {
    blur: "blur", brightness: "brightness",
  };

  for (const p of props) {
    const unit = CUSTOM_TEXT_PROPERTY_UNITS[p.property] ?? "";
    const fn = TRANSFORM_FN[p.property];
    const ff = FILTER_FN[p.property];

    if (fn) {
      tfFrom.push(`${fn}(${p.from}${unit})`);
      tfTo.push(`${fn}(${p.to}${unit})`);
    } else if (ff) {
      flFrom.push(`${ff}(${p.from}${unit})`);
      flTo.push(`${ff}(${p.to}${unit})`);
    } else if (p.property === "letterSpacing") {
      from["letterSpacing"] = `${p.from}${unit}`;
      to["letterSpacing"] = `${p.to}${unit}`;
    } else {
      // opacity, color — set directly
      from[p.property] = p.from;
      to[p.property] = p.to;
    }
  }

  if (tfFrom.length) { from["transform"] = tfFrom.join(" "); to["transform"] = tfTo.join(" "); }
  if (flFrom.length) { from["filter"] = flFrom.join(" "); to["filter"] = flTo.join(" "); }

  // Fallback: at least a basic fade
  if (Object.keys(from).length === 0) {
    from["opacity"] = "0";
    to["opacity"] = "1";
  }

  return [from, to];
}

/**
 * Calculate per-fragment animation duration.
 *
 * Typewriter: short per-char reveal (20-80ms each).
 * Others: remaining time after stagger offsets, clamped to [100ms, baseDuration].
 */
export function getFragmentDuration(
  effect: TextAnimationEffect,
  baseDuration: number,
  totalFragments: number,
  staggerDelay: number
): number {
  if (effect === "typewriter") {
    return Math.max(20, Math.min(80, baseDuration / (totalFragments || 1)));
  }
  const available = baseDuration - staggerDelay * (totalFragments - 1);
  return Math.max(100, Math.min(baseDuration, available));
}
