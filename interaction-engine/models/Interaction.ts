// src/composer-tools/interaction-engine/models/Interaction.ts

import { TriggerStrategy } from '../triggers/TriggerStrategy';
import { InteractionCommand, InteractionContext, InteractionConfig, InteractionMetadata, BaseAnimationCommand } from '../core/types';
import { logger } from '../utils/Logger';
import { errorHandler, ExecutionError } from '../utils/ErrorHandler';
import { ResourceManager, Disposable } from '../utils/ResourceManager';
import { performanceMonitor } from '../utils/PerformanceMonitor';

/**
 * Represents a single interaction (trigger + command pair)
 * Manages lifecycle, execution, and resource cleanup
 */
export class Interaction implements Disposable {
  private mounted = false;
  private target?: HTMLElement;
  private isExecuting = false;
  private executionQueue: Array<{ fire: () => void; timestamp: number }> = [];
  private lastExecutionTime = 0;
  private readonly debounceDelay: number;
  private readonly priority: number;
  private readonly maxQueueSize = 10;
  private executionCount = 0;
  private resourceManager = new ResourceManager();
  private readonly interactionId: string;

  constructor(
    private trigger: TriggerStrategy,
    private command: InteractionCommand,
    private config: InteractionConfig,
    private triggerType: string,
    interactionId?: string
  ) {
    this.debounceDelay = config.debounceDelay || 0;
    this.priority = config.priority || 0;
    this.interactionId = interactionId || `interaction-${Date.now()}-${Math.random()}`;

    logger.debug('Interaction created', {
      component: 'Interaction',
      interactionId: this.interactionId,
      priority: this.priority,
    });
  }

  /**
   * Mount the interaction to a target element
   */
  mount(target: HTMLElement): void {
    if (this.mounted) {
      logger.warn('Attempted to mount already mounted interaction', {
        component: 'Interaction',
        interactionId: this.interactionId,
      });
      return;
    }

    this.target = target;

    // Set queueable based on trigger type for better UX
    // Note: on appear has special handling in fire function

    const fire = () => {
      // Debouncing: Skip execution if called too soon
      const now = performance.now();
      if (this.debounceDelay > 0 && now - this.lastExecutionTime < this.debounceDelay) {
        logger.debug('Execution debounced', {
          component: 'Interaction',
          interactionId: this.interactionId,
        });
        return;
      }
      this.lastExecutionTime = now;

      // Prevent concurrent execution of the same interaction
      if (this.isExecuting) {
        // Special handling for animation commands: cancel current execution and start new one
        if (this.command instanceof BaseAnimationCommand) {
          this.cleanupCommand();
          // Continue to execute new command
        } else if (this.config.queueable) {
          // Queue for later execution if interaction is busy
          if (this.executionQueue.length >= this.maxQueueSize) {
            logger.warn('Execution queue full, dropping oldest execution', {
              component: 'Interaction',
              interactionId: this.interactionId,
              queueSize: this.executionQueue.length,
            });
            this.executionQueue.shift();
          }
          this.executionQueue.push({ fire, timestamp: now });
          return;
        } else {
          return;
        }
      }

      this.executeCommand();
    };

    const cleanup = () => {
      return this.cleanupCommand();
    };

    try {
      this.trigger.attach(target, fire, cleanup);
      this.mounted = true;

      logger.info('Interaction mounted', {
        component: 'Interaction',
        interactionId: this.interactionId,
        elementId: target.id,
      });
    } catch (error) {
      errorHandler.handle(
        new ExecutionError('Failed to mount interaction', {
          component: 'Interaction',
          interactionId: this.interactionId,
        }, error as Error)
      );
    }
  }

  /**
   * Unmount the interaction and cleanup resources
   */
  unmount(): void {
    if (!this.mounted) {
      return;
    }

    try {
      this.trigger.detach();
      this.mounted = false;
      this.isExecuting = false;

      if (this.target) {
        // For on appear trigger, don't undo so animation state is preserved
        if (this.triggerType !== 'appear') {
          this.undoCommand();
        }
      }

      this.clearQueue();
      this.target = undefined;

      logger.info('Interaction unmounted', {
        component: 'Interaction',
        interactionId: this.interactionId,
        executionCount: this.executionCount,
      });
    } catch (error) {
      errorHandler.handle(error as Error, {
        component: 'Interaction',
        interactionId: this.interactionId,
        method: 'unmount',
      });
    }
  }

  /**
   * Check if interaction is mounted
   */
  isMounted(): boolean {
    return this.mounted;
  }

  /**
   * Get a copy of the configuration
   */
  getConfig(): InteractionConfig {
    return { ...this.config };
  }

  /**
   * Update the configuration
   */
  updateConfig(newConfig: InteractionConfig): void {
    logger.debug('Configuration updated', {
      component: 'Interaction',
      interactionId: this.interactionId,
    });
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get the priority level
   */
  getPriority(): number {
    return this.priority;
  }

  /**
   * Get interaction ID
   */
  getId(): string {
    return this.interactionId;
  }

  /**
   * Get execution statistics
   */
  getStats(): {
    executionCount: number;
    queueSize: number;
    isExecuting: boolean;
    isMounted: boolean;
  } {
    return {
      executionCount: this.executionCount,
      queueSize: this.executionQueue.length,
      isExecuting: this.isExecuting,
      isMounted: this.mounted,
    };
  }

  /**
   * Clear the execution queue
   */
  clearQueue(): void {
    const queueSize = this.executionQueue.length;
    this.executionQueue = [];
    if (queueSize > 0) {
      logger.debug('Execution queue cleared', {
        component: 'Interaction',
        interactionId: this.interactionId,
        clearedCount: queueSize,
      });
    }
  }

  /**
   * Dispose and cleanup all resources
   */
  dispose(): void {
    this.unmount();
    this.resourceManager.dispose();
  }

  /**
   * Execute the command with proper error handling and monitoring
   */
  private executeCommand(): void {
    if (!this.target) {
      return;
    }

    this.isExecuting = true;
    this.executionCount++;

    const executionId = `${this.interactionId}-exec-${this.executionCount}`;
    const perfId = performanceMonitor.start('interaction.execute', executionId);

    // Get services from global context
    const services = (window as any).interactionServices || {};

    const metadata: InteractionMetadata = {
      executionId,
      startTime: performance.now(),
      interactionId: this.interactionId,
      elementId: this.target.id,
      priority: this.priority,
    };

    const context: InteractionContext = {
      target: this.target,
      config: this.config,
      triggerType: this.triggerType,
      router: services.router,
      modalService: services.modalService,
      animationEngine: services.animationEngine,
      metadata,
    };

    const finishExecution = (error?: Error) => {
      this.isExecuting = false;
      performanceMonitor.end(perfId, 'interaction.execute', {
        interactionId: this.interactionId,
        success: !error,
      });
      if (!error) {
        this.processQueue();
      }
    };

    try {
      // Use requestAnimationFrame for better performance with animations
      const executeCommand = () => {
        try {
          const result = this.command.execute(context);
          if (result instanceof Promise) {
            result
              .then(() => finishExecution())
              .catch(error => {
                errorHandler.handle(
                  new ExecutionError('Command execution failed', {
                    component: 'Interaction',
                    interactionId: this.interactionId,
                    executionId,
                  }, error)
                );
                finishExecution(error);
              });
          } else {
            finishExecution();
          }
        } catch (error) {
          errorHandler.handle(
            new ExecutionError('Command execution failed', {
              component: 'Interaction',
              interactionId: this.interactionId,
              executionId,
            }, error as Error)
          );
          finishExecution(error as Error);
        }
      };

      // Batch animation-related commands in requestAnimationFrame
      if (this.config.useRAF !== false && (this.config.animation || this.config.property)) {
        requestAnimationFrame(executeCommand);
      } else {
        executeCommand();
      }
    } catch (error) {
      errorHandler.handle(error as Error, {
        component: 'Interaction',
        interactionId: this.interactionId,
        method: 'executeCommand',
      });
      finishExecution(error as Error);
    }
  }

  /**
   * Cleanup command resources
   */
  private async cleanupCommand(): Promise<void> {
    if (!this.target) {
      return;
    }

    const services = (window as any).interactionServices || {};
    const context: InteractionContext = {
      target: this.target,
      config: this.config,
      router: services.router,
      modalService: services.modalService,
      animationEngine: services.animationEngine,
    };

    try {
      const result = this.command.cleanup?.(context);
      if (result && typeof (result as Promise<void>).then === 'function') {
        await result as Promise<void>;
      }
    } catch (error) {
      errorHandler.handle(error as Error, {
        component: 'Interaction',
        interactionId: this.interactionId,
        method: 'cleanupCommand',
      });
    }
  }

  /**
   * Undo command effects
   */
  private undoCommand(): void {
    if (!this.target) {
      return;
    }

    const services = (window as any).interactionServices || {};
    const context: InteractionContext = {
      target: this.target,
      config: this.config,
      router: services.router,
      modalService: services.modalService,
      animationEngine: services.animationEngine,
    };

    try {
      this.command.undo?.(context);
    } catch (error) {
      errorHandler.handle(error as Error, {
        component: 'Interaction',
        interactionId: this.interactionId,
        method: 'undoCommand',
      });
    }
  }

  /**
   * Process queued executions
   */
  private processQueue(): void {
    if (this.executionQueue.length > 0 && !this.isExecuting) {
      // Remove stale queued executions (older than 5 seconds)
      const now = performance.now();
      const staleThreshold = 5000;
      this.executionQueue = this.executionQueue.filter(
        item => now - item.timestamp < staleThreshold
      );

      const nextExecution = this.executionQueue.shift();
      if (nextExecution) {
        // Use setTimeout to prevent stack overflow
        this.resourceManager.setTimeout(nextExecution.fire, 0);
      }
    }
  }
}