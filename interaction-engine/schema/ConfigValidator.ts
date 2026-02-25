// src/composer-tools/interaction-engine/schema/ConfigValidator.ts

import {
  AnimationEngineType,
  VALID_PLAYBACK_DIRECTIONS,
} from '../core/types';
import { logger } from '../utils/Logger';

/** Result returned by validation helpers */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

const KNOWN_ENGINES = new Set<string>(Object.values(AnimationEngineType));

const KNOWN_COMMAND_TYPES = new Set([
  'animate',
  'loopEffect',
  'textAnimate',
  'navigate',
  'openModal',
]);

const KNOWN_TRIGGER_TYPES = new Set([
  'press',
  'hover',
  'click',
  'loop',
  'textAnimate',
  'load',
  'appear',
  'scroll',
]);

/**
 * Runtime validator for interaction configs.
 *
 * Call `validateInteractionConfig(config, commandType)` before executing
 * a command to catch misconfigurations early.
 */
export class ConfigValidator {
  /**
   * Validate a config object for the given command type.
   */
  static validate(
    config: Record<string, any> | undefined,
    commandType: string,
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!config) {
      errors.push('Config is undefined');
      return { valid: false, errors, warnings };
    }

    // Validate command type
    if (!KNOWN_COMMAND_TYPES.has(commandType)) {
      errors.push(`Unknown command type: "${commandType}"`);
    }

    // Validate engine if present
    if (config.engine !== undefined && !KNOWN_ENGINES.has(config.engine)) {
      errors.push(
        `Unknown animation engine: "${config.engine}". ` +
        `Valid values: ${Array.from(KNOWN_ENGINES).join(', ')}`,
      );
    }

    // Command-specific validation
    switch (commandType) {
      case 'animate':
        this.validateAnimateConfig(config, errors, warnings);
        break;
      case 'loopEffect':
        this.validateLoopEffectConfig(config, errors, warnings);
        break;
      case 'textAnimate':
        this.validateTextAnimateConfig(config, errors, warnings);
        break;
      case 'navigate':
        this.validateNavigateConfig(config, errors, warnings);
        break;
      case 'openModal':
        this.validateOpenModalConfig(config, errors, warnings);
        break;
    }

    const result: ValidationResult = {
      valid: errors.length === 0,
      errors,
      warnings,
    };

    // Log issues
    if (errors.length > 0) {
      logger.error(
        `ConfigValidator: validation failed for "${commandType}": ${errors.join('; ')}`,
      );
    }
    if (warnings.length > 0) {
      logger.warn('ConfigValidator: validation warnings', { commandType, warnings });
    }

    return result;
  }

  /**
   * Validate trigger type.
   */
  static validateTriggerType(triggerType: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!KNOWN_TRIGGER_TYPES.has(triggerType)) {
      errors.push(`Unknown trigger type: "${triggerType}"`);
    }

    return { valid: errors.length === 0, errors, warnings };
  }

  // ── Command-specific validators ────────────────────────────────

  private static validateAnimateConfig(
    config: Record<string, any>,
    errors: string[],
    warnings: string[],
  ): void {
    const isAnimateCss = config.engine === AnimationEngineType.AnimateCss;

    if (isAnimateCss) {
      // AnimateCss path: should have an animation name
      if (!config.animateCssAnimation && !config.animation) {
        warnings.push(
          'Animate.css command has no animation name; will use default "bounce"',
        );
      }
    }

    // Validate playback direction if present
    const direction = config.animationDirection ?? config.animateCssDirection;
    if (
      direction !== undefined &&
      !(VALID_PLAYBACK_DIRECTIONS as readonly string[]).includes(direction)
    ) {
      warnings.push(
        `Invalid playback direction: "${direction}". ` +
        `Valid values: ${VALID_PLAYBACK_DIRECTIONS.join(', ')}`,
      );
    }

    // Validate duration
    if (config.duration !== undefined && (typeof config.duration !== 'number' || config.duration < 0)) {
      errors.push(`Invalid duration: ${config.duration}`);
    }
  }

  private static validateLoopEffectConfig(
    config: Record<string, any>,
    errors: string[],
    warnings: string[],
  ): void {
    if (config.type && !['loop', 'mirror'].includes(config.type)) {
      errors.push(`Invalid loop type: "${config.type}". Expected "loop" or "mirror"`);
    }

    if (!config.type) {
      warnings.push('Loop effect config has no type; will default to "loop"');
    }

    if (config.transition) {
      if (config.transition.duration !== undefined && typeof config.transition.duration !== 'number') {
        errors.push('Loop effect transition.duration must be a number');
      }
    }
  }

  private static validateTextAnimateConfig(
    config: Record<string, any>,
    errors: string[],
    _warnings: string[],
  ): void {
    if (!config.textAnimation) {
      errors.push('textAnimate command requires a textAnimation config object');
      return;
    }

    if (!config.textAnimation.preset) {
      errors.push('textAnimation.preset is required');
    }

    const validGranularities = ['character', 'word', 'layer', 'element'];
    if (
      config.textAnimation.granularity &&
      !validGranularities.includes(config.textAnimation.granularity)
    ) {
      errors.push(
        `Invalid granularity: "${config.textAnimation.granularity}". ` +
        `Valid values: ${validGranularities.join(', ')}`,
      );
    }
  }

  private static validateNavigateConfig(
    config: Record<string, any>,
    errors: string[],
    _warnings: string[],
  ): void {
    if (!config.url && !config.path) {
      errors.push('Navigate command requires a url or path');
    }
  }

  private static validateOpenModalConfig(
    config: Record<string, any>,
    errors: string[],
    _warnings: string[],
  ): void {
    if (!config.modalId) {
      errors.push('openModal command requires a modalId');
    }
  }
}
