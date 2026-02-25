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
