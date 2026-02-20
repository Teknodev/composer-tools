// src/composer-tools/interaction-engine/utils/ErrorHandler.ts

import { logger, LogContext } from './Logger';

export class InteractionEngineError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context?: LogContext,
    public readonly originalError?: Error
  ) {
    super(message);
    this.name = 'InteractionEngineError';
    
    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InteractionEngineError);
    }
  }
}

export class ValidationError extends InteractionEngineError {
  constructor(message: string, context?: LogContext, originalError?: Error) {
    super(message, 'VALIDATION_ERROR', context, originalError);
    this.name = 'ValidationError';
  }
}

export class ExecutionError extends InteractionEngineError {
  constructor(message: string, context?: LogContext, originalError?: Error) {
    super(message, 'EXECUTION_ERROR', context, originalError);
    this.name = 'ExecutionError';
  }
}

export class ConfigurationError extends InteractionEngineError {
  constructor(message: string, context?: LogContext, originalError?: Error) {
    super(message, 'CONFIGURATION_ERROR', context, originalError);
    this.name = 'ConfigurationError';
  }
}

export class FactoryError extends InteractionEngineError {
  constructor(message: string, context?: LogContext, originalError?: Error) {
    super(message, 'FACTORY_ERROR', context, originalError);
    this.name = 'FactoryError';
  }
}

export type ErrorRecoveryStrategy = (error: InteractionEngineError) => void;

export class ErrorHandler {
  private static instance: ErrorHandler;
  private recoveryStrategies: Map<string, ErrorRecoveryStrategy> = new Map();
  private errorListeners: Array<(error: InteractionEngineError) => void> = [];

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  handle(error: Error | InteractionEngineError, context?: LogContext): void {
    let engineError: InteractionEngineError;

    if (error instanceof InteractionEngineError) {
      engineError = error;
    } else {
      engineError = new ExecutionError(
        error.message,
        context,
        error
      );
    }

    // Log the error
    logger.error(engineError.message, engineError.originalError || engineError, {
      ...engineError.context,
      code: engineError.code,
    });

    // Notify listeners
    this.notifyListeners(engineError);

    // Try recovery strategy
    const strategy = this.recoveryStrategies.get(engineError.code);
    if (strategy) {
      try {
        strategy(engineError);
      } catch (recoveryError) {
        logger.error('Error recovery failed', recoveryError as Error, {
          component: 'ErrorHandler',
          originalError: engineError.code,
        });
      }
    }
  }

  registerRecoveryStrategy(errorCode: string, strategy: ErrorRecoveryStrategy): void {
    this.recoveryStrategies.set(errorCode, strategy);
  }

  unregisterRecoveryStrategy(errorCode: string): void {
    this.recoveryStrategies.delete(errorCode);
  }

  addErrorListener(listener: (error: InteractionEngineError) => void): void {
    this.errorListeners.push(listener);
  }

  removeErrorListener(listener: (error: InteractionEngineError) => void): void {
    const index = this.errorListeners.indexOf(listener);
    if (index > -1) {
      this.errorListeners.splice(index, 1);
    }
  }

  private notifyListeners(error: InteractionEngineError): void {
    this.errorListeners.forEach(listener => {
      try {
        listener(error);
      } catch (err) {
        logger.error('Error listener failed', err as Error, {
          component: 'ErrorHandler',
        });
      }
    });
  }

  /**
   * Wraps a function with error handling
   */
  static wrap<T extends (...args: any[]) => any>(
    fn: T,
    context?: LogContext
  ): T {
    return ((...args: any[]) => {
      try {
        const result = fn(...args);
        if (result instanceof Promise) {
          return result.catch((error: Error) => {
            ErrorHandler.getInstance().handle(error, context);
            throw error;
          });
        }
        return result;
      } catch (error) {
        ErrorHandler.getInstance().handle(error as Error, context);
        throw error;
      }
    }) as T;
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();
