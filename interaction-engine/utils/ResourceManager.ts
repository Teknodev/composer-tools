// src/composer-tools/interaction-engine/utils/ResourceManager.ts

import { logger } from './Logger';

/**
 * Interface for resources that can be cleaned up
 */
export interface Disposable {
  dispose(): void;
}

/**
 * Interface for resources that can be paused/resumed
 */
export interface Pausable {
  pause(): void;
  resume(): void;
  isPaused(): boolean;
}

/**
 * Manages lifecycle of resources to prevent memory leaks
 */
export class ResourceManager implements Disposable {
  private resources: Set<Disposable> = new Set();
  private timers: Set<number> = new Set();
  private intervals: Set<number> = new Set();
  private observers: Set<IntersectionObserver | MutationObserver | ResizeObserver> = new Set();
  private eventListeners: Array<{
    target: EventTarget;
    type: string;
    listener: EventListener;
    options?: AddEventListenerOptions;
  }> = [];
  private disposed = false;

  /**
   * Register a disposable resource
   */
  register(resource: Disposable): void {
    if (this.disposed) {
      logger.warn('Attempting to register resource on disposed ResourceManager', {
        component: 'ResourceManager',
      });
      return;
    }
    this.resources.add(resource);
  }

  /**
   * Unregister a disposable resource
   */
  unregister(resource: Disposable): void {
    this.resources.delete(resource);
  }

  /**
   * Add a timeout with automatic cleanup
   */
  setTimeout(handler: () => void, timeout: number): number {
    const id = window.setTimeout(() => {
      handler();
      this.timers.delete(id);
    }, timeout);
    this.timers.add(id);
    return id;
  }

  /**
   * Clear a specific timeout
   */
  clearTimeout(id: number): void {
    window.clearTimeout(id);
    this.timers.delete(id);
  }

  /**
   * Add an interval with automatic cleanup
   */
  setInterval(handler: () => void, interval: number): number {
    const id = window.setInterval(handler, interval);
    this.intervals.add(id);
    return id;
  }

  /**
   * Clear a specific interval
   */
  clearInterval(id: number): void {
    window.clearInterval(id);
    this.intervals.delete(id);
  }

  /**
   * Add an event listener with automatic cleanup
   */
  addEventListener<K extends keyof HTMLElementEventMap>(
    target: EventTarget,
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    options?: AddEventListenerOptions
  ): void;
  addEventListener(
    target: EventTarget,
    type: string,
    listener: EventListener,
    options?: AddEventListenerOptions
  ): void {
    target.addEventListener(type, listener, options);
    this.eventListeners.push({ target, type, listener, options });
  }

  /**
   * Remove a specific event listener
   */
  removeEventListener(target: EventTarget, type: string, listener: EventListener): void {
    target.removeEventListener(type, listener);
    const index = this.eventListeners.findIndex(
      el => el.target === target && el.type === type && el.listener === listener
    );
    if (index > -1) {
      this.eventListeners.splice(index, 1);
    }
  }

  /**
   * Register an observer with automatic cleanup
   */
  registerObserver(observer: IntersectionObserver | MutationObserver | ResizeObserver): void {
    this.observers.add(observer);
  }

  /**
   * Unregister and disconnect an observer
   */
  unregisterObserver(observer: IntersectionObserver | MutationObserver | ResizeObserver): void {
    observer.disconnect();
    this.observers.delete(observer);
  }

  /**
   * Check if disposed
   */
  isDisposed(): boolean {
    return this.disposed;
  }

  /**
   * Dispose all managed resources
   */
  dispose(): void {
    if (this.disposed) {
      return;
    }

    // Clear all timers
    this.timers.forEach(id => window.clearTimeout(id));
    this.timers.clear();

    // Clear all intervals
    this.intervals.forEach(id => window.clearInterval(id));
    this.intervals.clear();

    // Remove all event listeners
    this.eventListeners.forEach(({ target, type, listener }) => {
      target.removeEventListener(type, listener);
    });
    this.eventListeners = [];

    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();

    // Dispose all registered resources
    this.resources.forEach(resource => {
      try {
        resource.dispose();
      } catch (error) {
        logger.error('Error disposing resource', error as Error, {
          component: 'ResourceManager',
        });
      }
    });
    this.resources.clear();

    this.disposed = true;

    logger.debug('ResourceManager disposed', {
      component: 'ResourceManager',
    });
  }

  /**
   * Get current resource counts for monitoring
   */
  getResourceCounts(): {
    disposables: number;
    timers: number;
    intervals: number;
    observers: number;
    eventListeners: number;
  } {
    return {
      disposables: this.resources.size,
      timers: this.timers.size,
      intervals: this.intervals.size,
      observers: this.observers.size,
      eventListeners: this.eventListeners.length,
    };
  }
}

/**
 * Weak reference manager for preventing memory leaks with DOM elements
 */
export class WeakResourceManager {
  private weakMap = new WeakMap<object, ResourceManager>();

  /**
   * Get or create a ResourceManager for an object
   */
  getOrCreate(key: object): ResourceManager {
    let manager = this.weakMap.get(key);
    if (!manager) {
      manager = new ResourceManager();
      this.weakMap.set(key, manager);
    }
    return manager;
  }

  /**
   * Get ResourceManager for an object if it exists
   */
  get(key: object): ResourceManager | undefined {
    return this.weakMap.get(key);
  }

  /**
   * Dispose and remove ResourceManager for an object
   */
  dispose(key: object): void {
    const manager = this.weakMap.get(key);
    if (manager) {
      manager.dispose();
      // WeakMap will automatically clean up when key is garbage collected
    }
  }
}
