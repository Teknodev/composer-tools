// src/composer-tools/interaction-engine/commands/animate/KeyframeBuilder.ts

/**
 * Shared keyframe building logic for loop and transform animations.
 * Used by both AnimateCommand and LoopEffectCommand.
 */

export interface TransformConfig {
  opacity?: number;
  scale?: number;
  rotate?: {
    mode?: string;
    x?: number;
    y?: number;
    z?: number;
  };
  skew?: {
    x?: number;
    y?: number;
  };
  offset?: {
    x?: number | string;
    y?: number | string;
  };
}

export interface KeyframeBuildResult {
  keyframes: Keyframe[];
  hasAnimated: boolean;
}

/**
 * Individual CSS transform properties (CSS Transforms Level 2).
 * Using individual properties (`scale`, `translate`, `rotate`) instead of
 * the composite `transform` property allows animate.css animations to run
 * without overriding existing transform state.
 */
export interface IndividualTransformProperties {
  scale?: string;
  translate?: string;
  rotate?: string;
  /** Skew / 3D multi-axis rotation fallback to composite `transform`. */
  transform?: string;
}

/** A single animation track (one CSS property) for WAAPI. */
export interface AnimationTrack {
  /** Unique key for the activeAnimations map */
  key: string;
  keyframes: Keyframe[];
  /** True when this track animates the composite `transform` property (skew/3D) */
  isCompositeTransform?: boolean;
}

/** CSS individual transform properties (CSS Transforms Level 2). */
export const INDIVIDUAL_TRANSFORM_PROPS = ['scale', 'translate', 'rotate'] as const;

/** All properties that may be affected by transform interactions. */
export const ALL_TRANSFORM_PROPS = [...INDIVIDUAL_TRANSFORM_PROPS, 'transform'] as const;

/**
 * Build the transform string from config properties.
 */
export function buildTransformString(config: TransformConfig): { transform: string; hasTransform: boolean } {
  const transforms: string[] = [];

  if (config.offset) {
    const x = config.offset.x || 0;
    const y = config.offset.y || 0;
    transforms.push(`translate(${x}px, ${y}px)`);
  }

  if (config.scale !== undefined) {
    transforms.push(`scale(${config.scale})`);
  }

  if (config.rotate) {
    if (config.rotate.mode === '3D') {
      const x = config.rotate.x || 0;
      const y = config.rotate.y || 0;
      const z = config.rotate.z || 0;
      transforms.push(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
    } else {
      const z = config.rotate.z || 0;
      transforms.push(`rotate(${z}deg)`);
    }
  }

  if (config.skew) {
    const x = config.skew.x || 0;
    const y = config.skew.y || 0;
    transforms.push(`skew(${x}deg, ${y}deg)`);
  }

  return {
    transform: transforms.join(' '),
    hasTransform: transforms.length > 0,
  };
}

/**
 * Build individual CSS transform property values from config.
 * Uses `scale`, `translate`, `rotate` individual properties where possible,
 * falling back to composite `transform` for skew and 3D multi-axis rotation.
 */
export function buildIndividualTransformProperties(config: TransformConfig): {
  properties: IndividualTransformProperties;
  hasTransform: boolean;
  hasSkew: boolean;
  hasCompositeTransformFallback: boolean;
} {
  const properties: IndividualTransformProperties = {};
  let hasTransform = false;
  let hasSkew = false;
  let hasCompositeTransformFallback = false;
  const compositeTransformParts: string[] = [];

  if (config.offset) {
    const x = config.offset.x || 0;
    const y = config.offset.y || 0;
    properties.translate = `${x}px ${y}px`;
    hasTransform = true;
  }

  if (config.scale !== undefined) {
    properties.scale = String(config.scale);
    hasTransform = true;
  }

  if (config.rotate) {
    const x = config.rotate.x || 0;
    const y = config.rotate.y || 0;
    const z = config.rotate.z || 0;
    if (config.rotate.mode === '3D' && (x || y)) {
      // Multi-axis 3D rotation can't be expressed as a single `rotate` property
      compositeTransformParts.push(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
      hasCompositeTransformFallback = true;
    } else {
      properties.rotate = `${z}deg`;
    }
    hasTransform = true;
  }

  if (config.skew) {
    const x = config.skew.x || 0;
    const y = config.skew.y || 0;
    compositeTransformParts.push(`skew(${x}deg, ${y}deg)`);
    hasTransform = true;
    hasSkew = true;
    hasCompositeTransformFallback = true;
  }

  if (compositeTransformParts.length > 0) {
    properties.transform = compositeTransformParts.join(' ');
  }

  return { properties, hasTransform, hasSkew, hasCompositeTransformFallback };
}

/**
 * Build loop keyframes from a fixed initial state (used by LoopEffectCommand).
 */
export function buildLoopKeyframesFromDefaults(
  config: TransformConfig & { loopType?: string; type?: string }
): KeyframeBuildResult {
  const initialState: Keyframe = {
    opacity: 1,
    transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
  };

  return buildKeyframesCommon(config, initialState);
}

/**
 * Build loop keyframes from the element's current computed styles (used by AnimateCommand).
 */
export function buildLoopKeyframesFromComputed(
  config: TransformConfig & { loopType?: string; [key: string]: any },
  element: HTMLElement
): KeyframeBuildResult {
  const computed = getComputedStyle(element);
  const initialState: Keyframe = {
    opacity: parseFloat(computed.getPropertyValue('opacity')) || 1,
    transform:
      computed.getPropertyValue('transform') ||
      'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
  };

  return buildKeyframesCommon(config, initialState);
}

/**
 * Separate per-property keyframe tracks for independent WAAPI instances.
 * Uses individual CSS transform properties (scale, translate, rotate) to
 * avoid conflicts with animate.css animations that use composite `transform`.
 */
export interface SplitKeyframeBuildResult {
  /** Per-property transform animation tracks */
  transformTracks: AnimationTrack[];
  opacityKeyframes: Keyframe[] | null;
  hasTransform: boolean;
  hasOpacity: boolean;
  /** True when skew or 3D multi-axis rotation requires composite transform property */
  hasCompositeTransformFallback: boolean;
}

/**
 * Returns true when all transform values are at their neutral defaults.
 */
export function isTransformIdentity(config: TransformConfig): boolean {
  if (config.scale !== undefined && config.scale !== 1) return false;

  if (config.rotate) {
    if (config.rotate.x && config.rotate.x !== 0) return false;
    if (config.rotate.y && config.rotate.y !== 0) return false;
    if (config.rotate.z && config.rotate.z !== 0) return false;
  }

  if (config.skew) {
    if (config.skew.x && config.skew.x !== 0) return false;
    if (config.skew.y && config.skew.y !== 0) return false;
  }

  if (config.offset) {
    const x = config.offset.x;
    const y = config.offset.y;
    const xIsZero = !x || x === 0 || x === '0' || x === '0px' || x === '0%';
    const yIsZero = !y || y === 0 || y === '0' || y === '0px' || y === '0%';
    if (!xIsZero || !yIsZero) return false;
  }

  return true;
}

/**
 * Build separate per-property keyframe tracks using individual CSS transform properties.
 * Each property (scale, translate, rotate) gets its own WAAPI animation track,
 * preventing conflicts with animate.css animations that use the composite `transform`.
 *
 * @param useAdditive When true, keyframes start from identity (for additive composition).
 *   When false/undefined, keyframes start from the element's current computed values.
 */
export function buildSplitKeyframes(
  config: TransformConfig & { loopType?: string; [key: string]: any },
  element: HTMLElement,
  useAdditive?: boolean,
): SplitKeyframeBuildResult {
  const loopType = config.loopType || config.type;
  const { properties, hasTransform, hasCompositeTransformFallback } =
    buildIndividualTransformProperties(config);

  const transformTracks: AnimationTrack[] = [];

  if (hasTransform) {
    const propEntries: Array<{
      key: string; prop: string; targetVal: string; isComposite?: boolean;
    }> = [];

    if (properties.scale !== undefined) {
      propEntries.push({ key: 'loop-scale', prop: 'scale', targetVal: properties.scale });
    }
    if (properties.translate !== undefined) {
      propEntries.push({ key: 'loop-translate', prop: 'translate', targetVal: properties.translate });
    }
    if (properties.rotate !== undefined) {
      propEntries.push({ key: 'loop-rotate', prop: 'rotate', targetVal: properties.rotate });
    }
    if (properties.transform !== undefined) {
      propEntries.push({
        key: 'loop-skew-transform', prop: 'transform',
        targetVal: properties.transform, isComposite: true,
      });
    }

    for (const entry of propEntries) {
      const fromVal = useAdditive
        ? 'none'
        : (getComputedStyle(element).getPropertyValue(entry.prop) || 'none');
      const initial: Keyframe = { [entry.prop]: fromVal };
      const animated: Keyframe = { [entry.prop]: entry.targetVal };

      let keyframes: Keyframe[];
      if (loopType === 'mirror') {
        keyframes = [initial, animated];
      } else if (loopType) {
        keyframes = [initial, animated, initial];
      } else {
        keyframes = [initial, animated];
      }

      transformTracks.push({
        key: entry.key,
        keyframes,
        isCompositeTransform: entry.isComposite,
      });
    }
  }

  let opacityKeyframes: Keyframe[] | null = null;
  const hasOpacity = config.opacity !== undefined;
  if (hasOpacity) {
    const computed = getComputedStyle(element);
    const currentOpacity = parseFloat(computed.getPropertyValue('opacity')) || 1;
    const initial: Keyframe = { opacity: currentOpacity };
    const animated: Keyframe = { opacity: config.opacity };
    if (loopType === 'mirror') {
      opacityKeyframes = [initial, animated];
    } else if (loopType) {
      opacityKeyframes = [initial, animated, initial];
    } else {
      opacityKeyframes = [initial, animated];
    }
  }

  return { transformTracks, opacityKeyframes, hasTransform, hasOpacity, hasCompositeTransformFallback };
}

/**
 * Build per-property animation tracks from fixed identity initial state.
 * Used by LoopEffectCommand for infinite loop animations with individual
 * CSS transform properties.
 */
export function buildIndividualLoopKeyframesFromDefaults(
  config: TransformConfig & { loopType?: string; type?: string },
): {
  tracks: AnimationTrack[];
  opacityKeyframes: Keyframe[] | null;
  hasTransform: boolean;
  hasOpacity: boolean;
} {
  const loopType = config.loopType || config.type;
  const { properties, hasTransform } = buildIndividualTransformProperties(config);

  const IDENTITY: Record<string, string> = {
    scale: '1',
    translate: '0px 0px',
    rotate: '0deg',
    transform: 'none',
  };

  const tracks: AnimationTrack[] = [];

  const makeTrack = (
    key: string, prop: string, targetVal: string, isComposite?: boolean,
  ) => {
    const identity = IDENTITY[prop] || 'none';
    const from: Keyframe = { [prop]: identity };
    const to: Keyframe = { [prop]: targetVal };
    let keyframes: Keyframe[];
    if (loopType === 'mirror') {
      keyframes = [from, to];
    } else {
      keyframes = [from, to, from];
    }
    tracks.push({ key, keyframes, isCompositeTransform: isComposite });
  };

  if (properties.scale !== undefined) makeTrack('loop-scale', 'scale', properties.scale);
  if (properties.translate !== undefined) makeTrack('loop-translate', 'translate', properties.translate);
  if (properties.rotate !== undefined) makeTrack('loop-rotate', 'rotate', properties.rotate);
  if (properties.transform !== undefined) makeTrack('loop-skew-transform', 'transform', properties.transform, true);

  let opacityKeyframes: Keyframe[] | null = null;
  const hasOpacity = config.opacity !== undefined;
  if (hasOpacity) {
    const initial: Keyframe = { opacity: 1 };
    const animated: Keyframe = { opacity: config.opacity };
    if (loopType === 'mirror') {
      opacityKeyframes = [initial, animated];
    } else {
      opacityKeyframes = [initial, animated, initial];
    }
  }

  return { tracks, opacityKeyframes, hasTransform, hasOpacity };
}

function buildKeyframesCommon(
  config: TransformConfig & { loopType?: string; type?: string },
  initialState: Keyframe
): KeyframeBuildResult {
  const animatedState: Keyframe = {} as Keyframe;
  let hasAnimated = false;

  if (config.opacity !== undefined) {
    animatedState.opacity = config.opacity;
    hasAnimated = true;
  }

  const { transform, hasTransform } = buildTransformString(config);
  if (hasTransform) {
    animatedState.transform = transform;
    hasAnimated = true;
  }

  // Determine loop type — support both `loopType` (AnimateCommand) and `type` (LoopEffectCommand)
  const loopType = config.loopType || config.type;

  if (loopType === 'mirror') {
    return { keyframes: [initialState, animatedState], hasAnimated };
  } else if (loopType) {
    return { keyframes: [initialState, animatedState, initialState], hasAnimated };
  } else {
    // One-shot transform
    return { keyframes: [initialState, animatedState], hasAnimated };
  }
}
