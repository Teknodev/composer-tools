// src/composer-tools/interaction-engine/core/AnimationEngineResolver.ts

import {
  AnimationEngine,
  AnimationEngineType,
  DEFAULT_ENGINE,
} from './types';
import { AnimateCssAnimationEngine } from '../animations/AnimateCssAnimationEngine';
import { WebAnimationsAPI } from '../animations/WebAnimationsAPI';
import { logger } from '../utils/Logger';

/**
 * Centralized resolver that maps a config's `engine` field to an
 * `AnimationEngine` implementation.
 *
 * Every animation command should use this resolver instead of
 * constructing engine instances inline.
 */
export class AnimationEngineResolver {
  /**
   * Resolve the correct AnimationEngine for the given engine identifier.
   *
   * @param engineId - Value from `config.engine`. Falls back to
   *   `DEFAULT_ENGINE` when `undefined`.
   * @returns A concrete `AnimationEngine` instance.
   * @throws If `engineId` is not a recognised `AnimationEngineType` value.
   */
  static resolve(engineId?: string): AnimationEngine {
    const resolved = engineId || DEFAULT_ENGINE;

    switch (resolved) {
      case AnimationEngineType.WebAnimations:
        return new WebAnimationsAPI();
      case AnimationEngineType.AnimateCss:
        return new AnimateCssAnimationEngine();
      default:
        logger.error(
          `AnimationEngineResolver: unknown engine "${resolved}". ` +
          `Valid values: ${Object.values(AnimationEngineType).join(', ')}`,
        );
        throw new Error(
          `Unknown animation engine: "${resolved}". ` +
          `Expected one of: ${Object.values(AnimationEngineType).join(', ')}`,
        );
    }
  }

  /**
   * Check whether the given engine id resolves to the AnimateCss engine.
   */
  static isAnimateCss(engineId?: string): boolean {
    return (engineId || DEFAULT_ENGINE) === AnimationEngineType.AnimateCss;
  }

  /**
   * Check whether the given engine id resolves to the Web Animations API engine.
   */
  static isWebAnimations(engineId?: string): boolean {
    return (engineId || DEFAULT_ENGINE) === AnimationEngineType.WebAnimations;
  }
}
