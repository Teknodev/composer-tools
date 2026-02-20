// src/composer-tools/interaction-engine/utils/Validator.ts

import { ValidationError } from './ErrorHandler';
import { LogContext } from './Logger';

export interface ValidationRule<T = any> {
  validate: (value: T, context?: LogContext) => boolean;
  message: string;
}

export class Validator {
  /**
   * Validates that a value is defined and not null
   */
  static required<T>(value: T | null | undefined, fieldName: string, context?: LogContext): T {
    if (value === null || value === undefined) {
      throw new ValidationError(
        `${fieldName} is required`,
        { ...context, field: fieldName }
      );
    }
    return value;
  }

  /**
   * Validates that a value is a string
   */
  static isString(value: any, fieldName: string, context?: LogContext): string {
    if (typeof value !== 'string') {
      throw new ValidationError(
        `${fieldName} must be a string`,
        { ...context, field: fieldName, receivedType: typeof value }
      );
    }
    return value;
  }

  /**
   * Validates that a value is a number
   */
  static isNumber(value: any, fieldName: string, context?: LogContext): number {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new ValidationError(
        `${fieldName} must be a valid number`,
        { ...context, field: fieldName, receivedType: typeof value }
      );
    }
    return value;
  }

  /**
   * Validates that a value is a boolean
   */
  static isBoolean(value: any, fieldName: string, context?: LogContext): boolean {
    if (typeof value !== 'boolean') {
      throw new ValidationError(
        `${fieldName} must be a boolean`,
        { ...context, field: fieldName, receivedType: typeof value }
      );
    }
    return value;
  }

  /**
   * Validates that a value is within a range
   */
  static inRange(value: number, min: number, max: number, fieldName: string, context?: LogContext): number {
    if (value < min || value > max) {
      throw new ValidationError(
        `${fieldName} must be between ${min} and ${max}`,
        { ...context, field: fieldName, value, min, max }
      );
    }
    return value;
  }

  /**
   * Validates that a value is one of allowed values
   */
  static oneOf<T>(value: T, allowed: readonly T[], fieldName: string, context?: LogContext): T {
    if (!allowed.includes(value)) {
      throw new ValidationError(
        `${fieldName} must be one of: ${allowed.join(', ')}`,
        { ...context, field: fieldName, value, allowed }
      );
    }
    return value;
  }

  /**
   * Validates that an object has required properties
   */
  static hasProperties<T extends object>(
    obj: T,
    properties: (keyof T)[],
    objectName: string,
    context?: LogContext
  ): T {
    const missing = properties.filter(prop => !(prop in obj));
    if (missing.length > 0) {
      throw new ValidationError(
        `${objectName} is missing required properties: ${missing.join(', ')}`,
        { ...context, object: objectName, missing }
      );
    }
    return obj;
  }

  /**
   * Validates a DOM element exists
   */
  static isElement(element: any, elementName: string, context?: LogContext): HTMLElement {
    if (!(element instanceof HTMLElement)) {
      throw new ValidationError(
        `${elementName} must be a valid HTMLElement`,
        { ...context, element: elementName }
      );
    }
    return element;
  }

  /**
   * Validates a CSS selector is valid
   */
  static isValidSelector(selector: string, context?: LogContext): string {
    try {
      document.querySelector(selector);
      return selector;
    } catch (error) {
      throw new ValidationError(
        `Invalid CSS selector: ${selector}`,
        { ...context, selector },
        error as Error
      );
    }
  }

  /**
   * Validates array is not empty
   */
  static notEmpty<T>(arr: T[], fieldName: string, context?: LogContext): T[] {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new ValidationError(
        `${fieldName} must be a non-empty array`,
        { ...context, field: fieldName }
      );
    }
    return arr;
  }

  /**
   * Validates using custom rules
   */
  static custom<T>(value: T, rules: ValidationRule<T>[], fieldName: string, context?: LogContext): T {
    for (const rule of rules) {
      if (!rule.validate(value, context)) {
        throw new ValidationError(
          rule.message,
          { ...context, field: fieldName, value }
        );
      }
    }
    return value;
  }

  /**
   * Creates a validation schema for objects
   */
  static createSchema<T extends Record<string, any>>(
    schema: {
      [K in keyof T]?: (value: T[K], context?: LogContext) => T[K];
    }
  ): (obj: T, context?: LogContext) => T {
    return (obj: T, context?: LogContext) => {
      const validated = { ...obj };
      for (const [key, validator] of Object.entries(schema)) {
        if (validator && key in obj) {
          validated[key as keyof T] = validator(obj[key as keyof T], context);
        }
      }
      return validated;
    };
  }
}
