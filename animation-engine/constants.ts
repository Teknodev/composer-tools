/**
 * Animate.css animation catalog — grouped by category.
 * These names correspond to Animate.css v4 class names (without the "animate__" prefix).
 */

export interface AnimateCssCategoryGroup {
  label: string;
  animations: string[];
}

export const ANIMATE_CSS_CATALOG: AnimateCssCategoryGroup[] = [
  {
    label: "Attention Seekers",
    animations: [
      "bounce",
      "flash",
      "pulse",
      "rubberBand",
      "shakeX",
      "shakeY",
      "headShake",
      "swing",
      "tada",
      "wobble",
      "jello",
      "heartBeat",
    ],
  },
  {
    label: "Back Entrances",
    animations: ["backInDown", "backInLeft", "backInRight", "backInUp"],
  },
  {
    label: "Back Exits",
    animations: ["backOutDown", "backOutLeft", "backOutRight", "backOutUp"],
  },
  {
    label: "Bouncing Entrances",
    animations: [
      "bounceIn",
      "bounceInDown",
      "bounceInLeft",
      "bounceInRight",
      "bounceInUp",
    ],
  },
  {
    label: "Bouncing Exits",
    animations: [
      "bounceOut",
      "bounceOutDown",
      "bounceOutLeft",
      "bounceOutRight",
      "bounceOutUp",
    ],
  },
  {
    label: "Fading Entrances",
    animations: [
      "fadeIn",
      "fadeInDown",
      "fadeInDownBig",
      "fadeInLeft",
      "fadeInLeftBig",
      "fadeInRight",
      "fadeInRightBig",
      "fadeInUp",
      "fadeInUpBig",
      "fadeInTopLeft",
      "fadeInTopRight",
      "fadeInBottomLeft",
      "fadeInBottomRight",
    ],
  },
  {
    label: "Fading Exits",
    animations: [
      "fadeOut",
      "fadeOutDown",
      "fadeOutDownBig",
      "fadeOutLeft",
      "fadeOutLeftBig",
      "fadeOutRight",
      "fadeOutRightBig",
      "fadeOutUp",
      "fadeOutUpBig",
      "fadeOutTopLeft",
      "fadeOutTopRight",
      "fadeOutBottomLeft",
      "fadeOutBottomRight",
    ],
  },
  {
    label: "Flippers",
    animations: ["flip", "flipInX", "flipInY", "flipOutX", "flipOutY"],
  },
  {
    label: "Lightspeed",
    animations: [
      "lightSpeedInRight",
      "lightSpeedInLeft",
      "lightSpeedOutRight",
      "lightSpeedOutLeft",
    ],
  },
  {
    label: "Rotating Entrances",
    animations: [
      "rotateIn",
      "rotateInDownLeft",
      "rotateInDownRight",
      "rotateInUpLeft",
      "rotateInUpRight",
    ],
  },
  {
    label: "Rotating Exits",
    animations: [
      "rotateOut",
      "rotateOutDownLeft",
      "rotateOutDownRight",
      "rotateOutUpLeft",
      "rotateOutUpRight",
    ],
  },
  {
    label: "Specials",
    animations: ["hinge", "jackInTheBox", "rollIn", "rollOut"],
  },
  {
    label: "Zooming Entrances",
    animations: ["zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"],
  },
  {
    label: "Zooming Exits",
    animations: [
      "zoomOut",
      "zoomOutDown",
      "zoomOutLeft",
      "zoomOutRight",
      "zoomOutUp",
    ],
  },
  {
    label: "Sliding Entrances",
    animations: ["slideInDown", "slideInLeft", "slideInRight", "slideInUp"],
  },
  {
    label: "Sliding Exits",
    animations: ["slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp"],
  },
];

/**
 * Flat list of all Animate.css animation names.
 */
export const ALL_ANIMATE_CSS_NAMES: string[] = ANIMATE_CSS_CATALOG.flatMap(
  (group) => group.animations
);

// ---------------------------------------------------------------------------
// Easing presets
// ---------------------------------------------------------------------------

export const EASING_PRESETS: { value: string; label: string }[] = [
  { value: "linear", label: "Linear" },
  { value: "ease", label: "Ease" },
  { value: "ease-in", label: "Ease In" },
  { value: "ease-out", label: "Ease Out" },
  { value: "ease-in-out", label: "Ease In Out" },
  { value: "cubic-bezier(0.25, 0.1, 0.25, 1)", label: "Smooth" },
  { value: "cubic-bezier(0.42, 0, 0.58, 1)", label: "Symmetric" },
  { value: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", label: "Elastic" },
  { value: "cubic-bezier(0.22, 1, 0.36, 1)", label: "Decelerate" },
];

// ---------------------------------------------------------------------------
// Default units per property
// ---------------------------------------------------------------------------

export const PROPERTY_DEFAULT_UNITS: Record<string, string> = {
  translateX: "px",
  translateY: "px",
  translateZ: "px",
  scale: "",
  scaleX: "",
  scaleY: "",
  rotate: "deg",
  rotateX: "deg",
  rotateY: "deg",
  skewX: "deg",
  skewY: "deg",
  opacity: "",
  width: "px",
  height: "px",
  blur: "px",
  brightness: "%",
  custom: "",
};

export const WEB_ANIMATION_PROPERTIES: {
  value: string;
  label: string;
  category: string;
}[] = [
  { value: "translateX", label: "Translate X", category: "Transform" },
  { value: "translateY", label: "Translate Y", category: "Transform" },
  { value: "translateZ", label: "Translate Z", category: "Transform" },
  { value: "scale", label: "Scale", category: "Transform" },
  { value: "scaleX", label: "Scale X", category: "Transform" },
  { value: "scaleY", label: "Scale Y", category: "Transform" },
  { value: "rotate", label: "Rotate", category: "Transform" },
  { value: "rotateX", label: "Rotate X", category: "Transform" },
  { value: "rotateY", label: "Rotate Y", category: "Transform" },
  { value: "skewX", label: "Skew X", category: "Transform" },
  { value: "skewY", label: "Skew Y", category: "Transform" },
  { value: "opacity", label: "Opacity", category: "Appearance" },
  { value: "width", label: "Width", category: "Size" },
  { value: "height", label: "Height", category: "Size" },
  { value: "blur", label: "Blur", category: "Filter" },
  { value: "brightness", label: "Brightness", category: "Filter" },
  { value: "custom", label: "Custom Property", category: "Custom" },
];

// ---------------------------------------------------------------------------
// Text Animation constants
// ---------------------------------------------------------------------------

import type {
  TextAnimationEffect,
  TextAnimationSplitMode,
  StaggerDirection,
  CustomTextPropertyName,
} from "../../types/animation-interaction";

export interface TextAnimationEffectDescriptor {
  value: TextAnimationEffect;
  label: string;
  description: string;
  /** Split modes this effect supports. If omitted, all modes are valid. */
  supportedSplitModes: TextAnimationSplitMode[];
}

export const TEXT_ANIMATION_EFFECTS: TextAnimationEffectDescriptor[] = [
  {
    value: "typewriter",
    label: "Typewriter",
    description: "Characters appear one by one like typing",
    supportedSplitModes: ["characters"],
  },
  {
    value: "character-reveal",
    label: "Character Reveal",
    description: "Characters fade and slide up into view",
    supportedSplitModes: ["characters"],
  },
  {
    value: "word-reveal",
    label: "Word Reveal",
    description: "Words fade and slide up into view",
    supportedSplitModes: ["words"],
  },
  {
    value: "scramble-text",
    label: "Scramble Text",
    description: "Characters scramble randomly then resolve",
    supportedSplitModes: ["characters"],
  },
  {
    value: "fade-characters",
    label: "Fade Characters",
    description: "Each character fades in individually",
    supportedSplitModes: ["characters", "words", "lines"],
  },
  {
    value: "slide-characters",
    label: "Slide Characters",
    description: "Characters slide in from a direction",
    supportedSplitModes: ["characters", "words", "lines"],
  },
  {
    value: "staggered-words",
    label: "Staggered Words",
    description: "Words animate in with staggered timing",
    supportedSplitModes: ["words", "lines", "entire"],
  },
  {
    value: "custom",
    label: "Custom",
    description: "Define your own animation properties",
    supportedSplitModes: ["characters", "words", "lines", "entire"],
  },
];

export const TEXT_ANIMATION_SPLIT_MODES: { value: TextAnimationSplitMode; label: string }[] = [
  { value: "characters", label: "Characters" },
  { value: "words", label: "Words" },
  { value: "lines", label: "Lines" },
  { value: "entire", label: "Entire Text" },
];

/** Default stagger delay between animated units (ms) */
export const DEFAULT_STAGGER_DELAY = 50;

// ---------------------------------------------------------------------------
// Stagger direction
// ---------------------------------------------------------------------------

export const STAGGER_DIRECTIONS: { value: StaggerDirection; label: string }[] = [
  { value: "start-to-end", label: "Start → End" },
  { value: "end-to-start", label: "End → Start" },
  { value: "random", label: "Random" },
];

// ---------------------------------------------------------------------------
// Custom text-animation properties
// ---------------------------------------------------------------------------

export interface CustomTextPropertyDescriptor {
  value: CustomTextPropertyName;
  label: string;
  defaultFrom: string;
  defaultTo: string;
  unit: string;
}

export const CUSTOM_TEXT_PROPERTIES: CustomTextPropertyDescriptor[] = [
  { value: "opacity", label: "Opacity", defaultFrom: "0", defaultTo: "1", unit: "" },
  { value: "translateX", label: "Translate X", defaultFrom: "-20", defaultTo: "0", unit: "px" },
  { value: "translateY", label: "Translate Y", defaultFrom: "20", defaultTo: "0", unit: "px" },
  { value: "scale", label: "Scale", defaultFrom: "0.5", defaultTo: "1", unit: "" },
  { value: "rotate", label: "Rotate", defaultFrom: "15", defaultTo: "0", unit: "deg" },
  { value: "blur", label: "Blur", defaultFrom: "4", defaultTo: "0", unit: "px" },
  { value: "letterSpacing", label: "Letter Spacing", defaultFrom: "10", defaultTo: "0", unit: "px" },
  { value: "color", label: "Color", defaultFrom: "#888888", defaultTo: "inherit", unit: "" },
  { value: "brightness", label: "Brightness", defaultFrom: "0.3", defaultTo: "1", unit: "" },
];

export const CUSTOM_TEXT_PROPERTY_UNITS: Record<CustomTextPropertyName, string> = {
  opacity: "",
  translateX: "px",
  translateY: "px",
  scale: "",
  rotate: "deg",
  blur: "px",
  letterSpacing: "px",
  color: "",
  brightness: "",
};
