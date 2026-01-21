// src/composer-tools/interaction-engine/composite/ElementInteractions.ts

import { Interaction } from '../models/Interaction';
import { Disposable } from '../utils/ResourceManager';
import { logger } from '../utils/Logger';
import { errorHandler } from '../utils/ErrorHandler';
import { performanceMonitor } from '../utils/PerformanceMonitor';

/**
 * Performance monitoring data
 */
interface PerformanceMetrics {
  executionCount: number;
  averageExecutionTime: number;
  lastExecutionTime: number;
  totalExecutionTime: number;
  errorCount: number;
}

/**
 * Manages multiple interactions for a single element
 * Handles lifecycle, priority ordering, and performance monitoring
 */
export class ElementInteractions implements Disposable {
  private interactions: Interaction[] = [];
  private mounted = false;
  private targetElement?: HTMLElement;
  private interactionExecutionMap: Map<string, boolean> = new Map();
  private performanceMetrics: PerformanceMetrics = {
    executionCount: 0,
    averageExecutionTime: 0,
    lastExecutionTime: 0,
    totalExecutionTime: 0,
    errorCount: 0,
  };
  private readonly elementId: string;

  constructor(elementId?: string) {
    this.elementId = elementId || `element-${Date.now()}-${Math.random()}`;
    
    logger.debug('ElementInteractions created', {
      component: 'ElementInteractions',
      elementId: this.elementId,
    });
  }

  /**
   * Add an interaction to this element
   * Interactions are automatically sorted by priority
   */
  addInteraction(interaction: Interaction): void {
    if (this.mounted && this.targetElement) {
      logger.warn('Adding interaction to mounted element', {
        component: 'ElementInteractions',
        elementId: this.elementId,
        interactionId: interaction.getId(),
      });
    }

    // Insert interaction in priority order (higher priority first)
    const insertIndex = this.interactions.findIndex(
      i => i.getPriority() < interaction.getPriority()
    );
    
    if (insertIndex === -1) {
      this.interactions.push(interaction);
    } else {
      this.interactions.splice(insertIndex, 0, interaction);
    }

    if (this.mounted && this.targetElement) {
      try {
        interaction.mount(this.targetElement);
      } catch (error) {
        errorHandler.handle(error as Error, {
          component: 'ElementInteractions',
          elementId: this.elementId,
          method: 'addInteraction',
        });
      }
    }

    logger.debug('Interaction added', {
      component: 'ElementInteractions',
      elementId: this.elementId,
      interactionId: interaction.getId(),
      priority: interaction.getPriority(),
      totalInteractions: this.interactions.length,
    });
  }

  /**
   * Remove an interaction from this element
   */
  removeInteraction(interaction: Interaction): void {
    const index = this.interactions.indexOf(interaction);
    if (index > -1) {
      try {
        if (this.mounted) {
          interaction.unmount();
        }
        this.interactions.splice(index, 1);
        
        logger.debug('Interaction removed', {
          component: 'ElementInteractions',
          elementId: this.elementId,
          interactionId: interaction.getId(),
        });
      } catch (error) {
        errorHandler.handle(error as Error, {
          component: 'ElementInteractions',
          elementId: this.elementId,
          method: 'removeInteraction',
        });
      }
    }
  }

  /**
   * Mount all interactions to a target element
   */
  mount(targetElement: HTMLElement): void {
    if (this.mounted) {
      logger.warn('Attempted to mount already mounted ElementInteractions', {
        component: 'ElementInteractions',
        elementId: this.elementId,
      });
      return;
    }

    const perfId = performanceMonitor.start('elementInteractions.mount');

    this.targetElement = targetElement;

    let mountedCount = 0;
    let errorCount = 0;

    for (const interaction of this.interactions) {
      try {
        interaction.mount(targetElement);
        mountedCount++;
      } catch (error) {
        errorCount++;
        errorHandler.handle(error as Error, {
          component: 'ElementInteractions',
          elementId: this.elementId,
          interactionId: interaction.getId(),
          method: 'mount',
        });
      }
    }

    this.mounted = true;

    performanceMonitor.end(perfId, 'elementInteractions.mount', {
      elementId: this.elementId,
      mountedCount,
      errorCount,
      totalInteractions: this.interactions.length,
    });

    logger.info('ElementInteractions mounted', {
      component: 'ElementInteractions',
      elementId: this.elementId,
      mountedCount,
      errorCount,
      totalInteractions: this.interactions.length,
    });
  }

  /**
   * Unmount all interactions
   */
  unmount(): void {
    if (!this.mounted) {
      return;
    }

    const perfId = performanceMonitor.start('elementInteractions.unmount');

    let unmountedCount = 0;
    let errorCount = 0;

    for (const interaction of this.interactions) {
      try {
        interaction.unmount();
        unmountedCount++;
      } catch (error) {
        errorCount++;
        errorHandler.handle(error as Error, {
          component: 'ElementInteractions',
          elementId: this.elementId,
          interactionId: interaction.getId(),
          method: 'unmount',
        });
      }
    }

    this.targetElement = undefined;
    this.mounted = false;

    performanceMonitor.end(perfId, 'elementInteractions.unmount', {
      elementId: this.elementId,
      unmountedCount,
      errorCount,
    });

    logger.info('ElementInteractions unmounted', {
      component: 'ElementInteractions',
      elementId: this.elementId,
      unmountedCount,
      errorCount,
    });
  }

  /**
   * Check if mounted
   */
  isMounted(): boolean {
    return this.mounted;
  }

  /**
   * Get all interactions (readonly)
   */
  getInteractions(): readonly Interaction[] {
    return [...this.interactions];
  }

  /**
   * Clear all interactions
   */
  clearInteractions(): void {
    if (this.mounted) {
      for (const interaction of this.interactions) {
        try {
          interaction.unmount();
        } catch (error) {
          errorHandler.handle(error as Error, {
            component: 'ElementInteractions',
            elementId: this.elementId,
            method: 'clearInteractions',
          });
        }
      }
    }
    
    const clearedCount = this.interactions.length;
    this.interactions = [];
    this.interactionExecutionMap.clear();

    logger.debug('Interactions cleared', {
      component: 'ElementInteractions',
      elementId: this.elementId,
      clearedCount,
    });
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics(): Readonly<PerformanceMetrics> {
    // Update metrics from individual interactions
    let totalExecutions = 0;
    for (const interaction of this.interactions) {
      const stats = interaction.getStats();
      totalExecutions += stats.executionCount;
    }

    return {
      ...this.performanceMetrics,
      executionCount: totalExecutions,
    };
  }

  /**
   * Optimize interactions based on performance
   */
  optimizeInteractions(): void {
    // Sort interactions by priority
    this.interactions.sort((a, b) => b.getPriority() - a.getPriority());
    
    // Clear queues if performance is degrading
    const metrics = this.getPerformanceMetrics();
    if (metrics.averageExecutionTime > 100) {
      logger.warn('Performance degradation detected, clearing queues', {
        component: 'ElementInteractions',
        elementId: this.elementId,
        avgExecutionTime: metrics.averageExecutionTime,
      });
      
      this.interactions.forEach(i => i.clearQueue());
    }

    logger.debug('Interactions optimized', {
      component: 'ElementInteractions',
      elementId: this.elementId,
      interactionCount: this.interactions.length,
    });
  }

  /**
   * Get element ID
   */
  getElementId(): string {
    return this.elementId;
  }

  /**
   * Get statistics
   */
  getStats(): {
    interactionCount: number;
    mountedInteractions: number;
    totalExecutions: number;
    isMounted: boolean;
  } {
    const mountedInteractions = this.interactions.filter(i => i.isMounted()).length;
    const metrics = this.getPerformanceMetrics();

    return {
      interactionCount: this.interactions.length,
      mountedInteractions,
      totalExecutions: metrics.executionCount,
      isMounted: this.mounted,
    };
  }

  /**
   * Dispose and cleanup all resources
   */
  dispose(): void {
    this.unmount();
    
    // Dispose all interactions
    for (const interaction of this.interactions) {
      try {
        interaction.dispose();
      } catch (error) {
        errorHandler.handle(error as Error, {
          component: 'ElementInteractions',
          elementId: this.elementId,
          method: 'dispose',
        });
      }
    }
    
    this.clearInteractions();

    logger.debug('ElementInteractions disposed', {
      component: 'ElementInteractions',
      elementId: this.elementId,
    });
  }
}