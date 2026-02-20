// src/composer-tools/interaction-engine/utils/Logger.ts

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

export interface LogContext {
  component?: string;
  method?: string;
  elementId?: string;
  interactionId?: string;
  [key: string]: any;
}

export interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  message: string;
  context?: LogContext;
  error?: Error;
}

export type LogHandler = (entry: LogEntry) => void;

export class Logger {
  private static instance: Logger;
  private level: LogLevel = LogLevel.WARN;
  private handlers: LogHandler[] = [];
  private logHistory: LogEntry[] = [];
  private maxHistorySize = 100;

  private constructor() {
    // Add default console handler in development
    if (process.env.NODE_ENV !== 'production') {
      this.addHandler(this.consoleHandler);
    }
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  getLevel(): LogLevel {
    return this.level;
  }

  addHandler(handler: LogHandler): void {
    this.handlers.push(handler);
  }

  removeHandler(handler: LogHandler): void {
    const index = this.handlers.indexOf(handler);
    if (index > -1) {
      this.handlers.splice(index, 1);
    }
  }

  clearHandlers(): void {
    this.handlers = [];
  }

  getHistory(): readonly LogEntry[] {
    return [...this.logHistory];
  }

  clearHistory(): void {
    this.logHistory = [];
  }

  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, error?: Error, context?: LogContext): void {
    this.log(LogLevel.ERROR, message, { ...context }, error);
  }

  private log(level: LogLevel, message: string, context?: LogContext, error?: Error): void {
    if (level < this.level) {
      return;
    }

    const entry: LogEntry = {
      timestamp: new Date(),
      level,
      message,
      context,
      error,
    };

    // Add to history
    this.logHistory.push(entry);
    if (this.logHistory.length > this.maxHistorySize) {
      this.logHistory.shift();
    }

    // Call all handlers
    this.handlers.forEach(handler => {
      try {
        handler(entry);
      } catch (err) {
        // Prevent handler errors from breaking the logger
        console.error('Log handler error:', err);
      }
    });
  }

  private consoleHandler: LogHandler = (entry: LogEntry) => {
    const { level, message, context, error } = entry;
    const prefix = `[InteractionEngine${context?.component ? `::${context.component}` : ''}]`;
    const contextStr = context ? JSON.stringify(context) : '';

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(prefix, message, contextStr);
        break;
      case LogLevel.INFO:
        console.info(prefix, message, contextStr);
        break;
      case LogLevel.WARN:
        console.warn(prefix, message, contextStr);
        break;
      case LogLevel.ERROR:
        console.error(prefix, message, contextStr, error);
        break;
    }
  };
}

// Export singleton instance
export const logger = Logger.getInstance();
