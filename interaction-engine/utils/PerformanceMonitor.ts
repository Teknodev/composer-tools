// src/composer-tools/interaction-engine/utils/PerformanceMonitor.ts

import { logger } from './Logger';

/**
 * Performance metrics for a single operation
 */
export interface PerformanceMetrics {
  /** Operation name */
  operation: string;
  /** Duration in milliseconds */
  duration: number;
  /** Timestamp when operation started */
  startTime: number;
  /** Timestamp when operation ended */
  endTime: number;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Aggregated performance statistics
 */
export interface PerformanceStats {
  /** Total number of operations */
  count: number;
  /** Average duration */
  avg: number;
  /** Minimum duration */
  min: number;
  /** Maximum duration */
  max: number;
  /** Total duration */
  total: number;
  /** Standard deviation */
  stdDev: number;
  /** 95th percentile */
  p95: number;
  /** 99th percentile */
  p99: number;
}

/**
 * Performance threshold configuration
 */
export interface PerformanceThreshold {
  /** Operation name pattern (supports wildcards) */
  pattern: string;
  /** Warning threshold in ms */
  warning: number;
  /** Error threshold in ms */
  error: number;
}

/**
 * Monitors and tracks performance metrics
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private activeOperations: Map<string, number> = new Map();
  private thresholds: PerformanceThreshold[] = [];
  private maxMetricsPerOperation = 1000;
  private enabled = true;

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Enable or disable performance monitoring
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Check if monitoring is enabled
   */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Set maximum metrics to store per operation
   */
  setMaxMetricsPerOperation(max: number): void {
    this.maxMetricsPerOperation = max;
  }

  /**
   * Add a performance threshold
   */
  addThreshold(threshold: PerformanceThreshold): void {
    this.thresholds.push(threshold);
  }

  /**
   * Remove all thresholds
   */
  clearThresholds(): void {
    this.thresholds = [];
  }

  /**
   * Start measuring an operation
   */
  start(operation: string, id?: string): string {
    if (!this.enabled) {
      return '';
    }

    const operationId = id || `${operation}-${Date.now()}-${Math.random()}`;
    this.activeOperations.set(operationId, performance.now());
    return operationId;
  }

  /**
   * End measuring an operation
   */
  end(operationId: string, operation: string, metadata?: Record<string, any>): PerformanceMetrics | null {
    if (!this.enabled || !this.activeOperations.has(operationId)) {
      return null;
    }

    const startTime = this.activeOperations.get(operationId)!;
    const endTime = performance.now();
    const duration = endTime - startTime;

    this.activeOperations.delete(operationId);

    const metric: PerformanceMetrics = {
      operation,
      duration,
      startTime,
      endTime,
      metadata,
    };

    // Store metric
    if (!this.metrics.has(operation)) {
      this.metrics.set(operation, []);
    }
    const operationMetrics = this.metrics.get(operation)!;
    operationMetrics.push(metric);

    // Trim if exceeds max
    if (operationMetrics.length > this.maxMetricsPerOperation) {
      operationMetrics.shift();
    }

    // Check thresholds
    this.checkThresholds(metric);

    return metric;
  }

  /**
   * Measure a synchronous function
   */
  measure<T>(operation: string, fn: () => T, metadata?: Record<string, any>): T {
    if (!this.enabled) {
      return fn();
    }

    const id = this.start(operation);
    try {
      const result = fn();
      this.end(id, operation, metadata);
      return result;
    } catch (error) {
      this.end(id, operation, { ...metadata, error: true });
      throw error;
    }
  }

  /**
   * Measure an asynchronous function
   */
  async measureAsync<T>(
    operation: string,
    fn: () => Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    if (!this.enabled) {
      return fn();
    }

    const id = this.start(operation);
    try {
      const result = await fn();
      this.end(id, operation, metadata);
      return result;
    } catch (error) {
      this.end(id, operation, { ...metadata, error: true });
      throw error;
    }
  }

  /**
   * Get metrics for a specific operation
   */
  getMetrics(operation: string): readonly PerformanceMetrics[] {
    return this.metrics.get(operation) || [];
  }

  /**
   * Get all operation names
   */
  getOperations(): string[] {
    return Array.from(this.metrics.keys());
  }

  /**
   * Get statistics for an operation
   */
  getStats(operation: string): PerformanceStats | null {
    const metrics = this.metrics.get(operation);
    if (!metrics || metrics.length === 0) {
      return null;
    }

    const durations = metrics.map(m => m.duration).sort((a, b) => a - b);
    const count = durations.length;
    const total = durations.reduce((sum, d) => sum + d, 0);
    const avg = total / count;
    const min = durations[0];
    const max = durations[count - 1];

    // Calculate standard deviation
    const variance = durations.reduce((sum, d) => sum + Math.pow(d - avg, 2), 0) / count;
    const stdDev = Math.sqrt(variance);

    // Calculate percentiles
    const p95Index = Math.floor(count * 0.95);
    const p99Index = Math.floor(count * 0.99);
    const p95 = durations[p95Index] || max;
    const p99 = durations[p99Index] || max;

    return {
      count,
      avg,
      min,
      max,
      total,
      stdDev,
      p95,
      p99,
    };
  }

  /**
   * Get statistics for all operations
   */
  getAllStats(): Map<string, PerformanceStats> {
    const stats = new Map<string, PerformanceStats>();
    for (const operation of this.metrics.keys()) {
      const stat = this.getStats(operation);
      if (stat) {
        stats.set(operation, stat);
      }
    }
    return stats;
  }

  /**
   * Clear metrics for a specific operation
   */
  clearMetrics(operation: string): void {
    this.metrics.delete(operation);
  }

  /**
   * Clear all metrics
   */
  clearAllMetrics(): void {
    this.metrics.clear();
    this.activeOperations.clear();
  }

  /**
   * Get a performance report
   */
  getReport(): string {
    const stats = this.getAllStats();
    if (stats.size === 0) {
      return 'No performance data available';
    }

    let report = '=== Performance Report ===\n\n';

    for (const [operation, stat] of stats) {
      report += `Operation: ${operation}\n`;
      report += `  Count: ${stat.count}\n`;
      report += `  Avg: ${stat.avg.toFixed(2)}ms\n`;
      report += `  Min: ${stat.min.toFixed(2)}ms\n`;
      report += `  Max: ${stat.max.toFixed(2)}ms\n`;
      report += `  StdDev: ${stat.stdDev.toFixed(2)}ms\n`;
      report += `  P95: ${stat.p95.toFixed(2)}ms\n`;
      report += `  P99: ${stat.p99.toFixed(2)}ms\n`;
      report += '\n';
    }

    return report;
  }

  /**
   * Check if metric exceeds thresholds
   */
  private checkThresholds(metric: PerformanceMetrics): void {
    for (const threshold of this.thresholds) {
      if (this.matchesPattern(metric.operation, threshold.pattern)) {
        if (metric.duration >= threshold.error) {
          logger.error(
            `Performance threshold exceeded (ERROR)`,
            undefined,
            {
              component: 'PerformanceMonitor',
              operation: metric.operation,
              duration: metric.duration,
              threshold: threshold.error,
              metadata: metric.metadata,
            }
          );
        } else if (metric.duration >= threshold.warning) {
          logger.warn(
            `Performance threshold exceeded (WARNING)`,
            {
              component: 'PerformanceMonitor',
              operation: metric.operation,
              duration: metric.duration,
              threshold: threshold.warning,
              metadata: metric.metadata,
            }
          );
        }
        break;
      }
    }
  }

  /**
   * Check if operation matches pattern (supports wildcards)
   */
  private matchesPattern(operation: string, pattern: string): boolean {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return regex.test(operation);
  }
}

/**
 * Decorator for measuring method performance
 */
export function measurePerformance(operation?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const operationName = operation || `${target.constructor.name}.${propertyKey}`;

    descriptor.value = function (...args: any[]) {
      const monitor = PerformanceMonitor.getInstance();
      return monitor.measure(operationName, () => originalMethod.apply(this, args));
    };

    return descriptor;
  };
}

/**
 * Decorator for measuring async method performance
 */
export function measureAsyncPerformance(operation?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const operationName = operation || `${target.constructor.name}.${propertyKey}`;

    descriptor.value = async function (...args: any[]) {
      const monitor = PerformanceMonitor.getInstance();
      return monitor.measureAsync(operationName, () => originalMethod.apply(this, args));
    };

    return descriptor;
  };
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
