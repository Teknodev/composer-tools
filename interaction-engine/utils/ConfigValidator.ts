// src/composer-tools/interaction-engine/utils/ConfigValidator.ts

import { Validator } from './Validator';
import { InteractionConfig } from '../core/types';
import { LogContext } from './Logger';

/**
 * Configuration schemas for different interaction types
 */
export const ConfigSchemas = {
  /**
   * Base interaction config schema
   */
  base: Validator.createSchema<InteractionConfig>({
    delay: (value, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'delay', context), 0, 60000, 'delay', context);
      }
      return value;
    },
    debounceDelay: (value, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'debounceDelay', context), 0, 5000, 'debounceDelay', context);
      }
      return value;
    },
    priority: (value, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'priority', context), -100, 100, 'priority', context);
      }
      return value;
    },
    queueable: (value, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'queueable', context);
      }
      return value;
    },
    useRAF: (value, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'useRAF', context);
      }
      return value;
    },
  }),

  /**
   * Animation config schema
   */
  animation: Validator.createSchema({
    engine: (value: string, context) => {
      if (value) {
        return Validator.oneOf(value, ['webAnimations', 'animateCss'] as const, 'engine', context);
      }
      return value;
    },
    duration: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'duration', context), 0, 60000, 'duration', context);
      }
      return value;
    },
    easing: (value: string, context) => {
      if (value) {
        return Validator.isString(value, 'easing', context);
      }
      return value;
    },
    iterationCount: (value: number | string, context) => {
      if (value !== undefined) {
        if (value === 'infinite') return value;
        return Validator.inRange(Validator.isNumber(value, 'iterationCount', context), 1, 1000, 'iterationCount', context);
      }
      return value;
    },
    direction: (value: string, context) => {
      if (value) {
        return Validator.oneOf(
          value,
          ['normal', 'reverse', 'alternate', 'alternate-reverse'] as const,
          'direction',
          context
        );
      }
      return value;
    },
    // Also accept explicit animationDirection and animateCssDirection keys
    animationDirection: (value: string, context) => {
      if (value) {
        return Validator.oneOf(
          value,
          ['normal', 'reverse', 'alternate', 'alternate-reverse'] as const,
          'animationDirection',
          context
        );
      }
      return value;
    },
    animateCssDirection: (value: string, context) => {
      if (value) {
        return Validator.oneOf(
          value,
          ['normal', 'reverse', 'alternate', 'alternate-reverse'] as const,
          'animateCssDirection',
          context
        );
      }
      return value;
    },
  }),

  /**
   * Scroll trigger config schema
   */
  scrollTrigger: Validator.createSchema({
    type: (value: string, context) => {
      if (value) {
        return Validator.oneOf(
          value,
          ['section', 'layer', 'progress'] as const,
          'type',
          context
        );
      }
      return value;
    },
    direction: (value: string, context) => {
      if (value) {
        return Validator.oneOf(
          value,
          ['up', 'down', 'both'] as const,
          'direction',
          context
        );
      }
      return value;
    },
    threshold: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'threshold', context), 0, 1, 'threshold', context);
      }
      return value;
    },
    replay: (value: boolean, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'replay', context);
      }
      return value;
    },
    debounce: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'debounce', context), 0, 1000, 'debounce', context);
      }
      return value;
    },
  }),

  /**
   * Appear trigger config schema
   */
  appearTrigger: Validator.createSchema({
    threshold: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'threshold', context), 0, 1, 'threshold', context);
      }
      return value;
    },
    once: (value: boolean, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'once', context);
      }
      return value;
    },
    delay: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'delay', context), 0, 60000, 'delay', context);
      }
      return value;
    },
    rootMargin: (value: string, context) => {
      if (value) {
        return Validator.isString(value, 'rootMargin', context);
      }
      return value;
    },
  }),

  /**
   * Load trigger config schema
   */
  loadTrigger: Validator.createSchema({
    delay: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'delay', context), 0, 60000, 'delay', context);
      }
      return value;
    },
    waitForImages: (value: boolean, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'waitForImages', context);
      }
      return value;
    },
    waitForElement: (value: string, context) => {
      if (value) {
        return Validator.isValidSelector(value, context);
      }
      return value;
    },
  }),

  /**
   * Loop animation config schema
   */
  loopAnimation: Validator.createSchema({
    loopType: (value: string, context) => {
      if (value) {
        return Validator.oneOf(value, ['loop', 'mirror'] as const, 'loopType', context);
      }
      return value;
    },
    offScreen: (value: string, context) => {
      if (value) {
        return Validator.oneOf(value, ['pause', 'continue'] as const, 'offScreen', context);
      }
      return value;
    },
    opacity: (value: number, context) => {
      if (value !== undefined) {
        return Validator.inRange(Validator.isNumber(value, 'opacity', context), 0, 1, 'opacity', context);
      }
      return value;
    },
  }),

  /**
   * Navigation config schema
   */
  navigation: Validator.createSchema({
    path: (value: string, context) => {
      return Validator.required(Validator.isString(value, 'path', context), 'path', context);
    },
    target: (value: string, context) => {
      if (value) {
        return Validator.oneOf(value, ['_self', '_blank', '_parent', '_top'] as const, 'target', context);
      }
      return value;
    },
  }),

  /**
   * Modal config schema
   */
  modal: Validator.createSchema({
    modalId: (value: string, context) => {
      return Validator.required(Validator.isString(value, 'modalId', context), 'modalId', context);
    },
    closeOnOutsideClick: (value: boolean, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'closeOnOutsideClick', context);
      }
      return value;
    },
    closeOnEscape: (value: boolean, context) => {
      if (value !== undefined) {
        return Validator.isBoolean(value, 'closeOnEscape', context);
      }
      return value;
    },
  }),
};

/**
 * Validates interaction configuration based on type
 */
export class ConfigValidator {
  /**
   * Validate base interaction config
   */
  static validateBase(config: InteractionConfig, context?: LogContext): InteractionConfig {
    return ConfigSchemas.base(config, context);
  }

  /**
   * Validate animation config
   */
  static validateAnimation(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.animation(validated as any, context);
  }

  /**
   * Validate scroll trigger config
   */
  static validateScrollTrigger(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.scrollTrigger(validated as any, context);
  }

  /**
   * Validate appear trigger config
   */
  static validateAppearTrigger(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.appearTrigger(validated as any, context);
  }

  /**
   * Validate load trigger config
   */
  static validateLoadTrigger(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.loadTrigger(validated as any, context);
  }

  /**
   * Validate loop animation config
   */
  static validateLoopAnimation(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    const animationValidated = ConfigSchemas.animation(validated as any, context);
    return ConfigSchemas.loopAnimation(animationValidated as any, context);
  }

  /**
   * Validate navigation config
   */
  static validateNavigation(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.navigation(validated as any, context);
  }

  /**
   * Validate modal config
   */
  static validateModal(config: any, context?: LogContext): any {
    const validated = ConfigSchemas.base(config, context);
    return ConfigSchemas.modal(validated as any, context);
  }
}
