/**
 * Animation Engine — barrel export.
 */

export { TransformStateManager, transformStateManager } from "./TransformStateManager";
export type { TransformValues } from "./TransformStateManager";
export { TRANSFORM_VALUE_KEYS } from "./TransformStateManager";
export { WebAnimationEngine, webAnimationEngine } from "./WebAnimationEngine";
export type { AnimationHandle } from "./WebAnimationEngine";
export { AnimateCssAdapter, animateCssAdapter } from "./AnimateCssAdapter";
export { TextAnimationEngine, textAnimationEngine } from "./TextAnimationEngine";
export {
  ANIMATION_PRESETS,
  resolvePresetConfig,
  detectPresetFromConfig,
  getEffectKeyframes,
  buildCustomKeyframes,
  getFragmentDuration,
} from "./textAnimationPresets";
export type { TextAnimationPresetName } from "./textAnimationPresets";
export { splitText, resolveStaggerIndices, playScramble } from "./textAnimationSplitUtils";
export { TriggerEngine, triggerEngine } from "./TriggerEngine";
export {
  AnimationPriorityManager,
  animationPriorityManager,
} from "./AnimationPriorityManager";
export type { PriorityAnimationController } from "./AnimationPriorityManager";
export { InteractionManager } from "./InteractionManager";
export { AnimationPreview } from "./AnimationPreview";
export type { PreviewHandle } from "./AnimationPreview";
export {
  detectSelectorSpecificity,
  computeEffectivePriority,
  SELECTOR_PRIORITY,
} from "./selector-utils";
export type { SelectorSpecificity } from "./selector-utils";
export * from "./constants";
