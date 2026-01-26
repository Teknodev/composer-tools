// src/composer-tools/interaction-engine/core/types.ts

/**
 * Context passed to interaction commands during execution
 */
export interface InteractionContext {
  /** Target HTML element for the interaction */
  target: HTMLElement;
  /** Configuration object for the interaction */
  config: InteractionConfig;
  /** Trigger type for the interaction */
  triggerType: string;
  /** Optional router service for navigation */
  router?: Router;
  /** Optional modal service for modal operations */
  modalService?: ModalService;
  /** Optional animation engine for animations */
  animationEngine?: AnimationEngine;
  /** Metadata about the interaction execution */
  metadata?: InteractionMetadata;
}

/**
 * Metadata about an interaction execution
 */
export interface InteractionMetadata {
  /** Unique identifier for this execution */
  executionId: string;
  /** Timestamp when execution started */
  startTime: number;
  /** Element ID if available */
  elementId?: string;
  /** Interaction ID if available */
  interactionId?: string;
  /** Priority level */
  priority?: number;
}

/**
 * Base configuration interface for interactions
 */
export interface InteractionConfig extends Record<string, any> {
  /** Delay before execution (ms) */
  delay?: number;
  /** Debounce delay (ms) */
  debounceDelay?: number;
  /** Priority level (higher = earlier execution) */
  priority?: number;
  /** Whether to queue executions or skip */
  queueable?: boolean;
  /** Use requestAnimationFrame for execution */
  useRAF?: boolean;
}

/**
 * Router service interface for navigation
 */
export interface Router {
  /**
   * Navigate to a path
   * @param path - Target path
   */
  navigate(path: string): void | Promise<void>;
  
  /**
   * Get current path
   */
  getCurrentPath?(): string;
  
  /**
   * Check if navigation is supported
   */
  isSupported?(): boolean;
}

/**
 * Modal service interface
 */
export interface ModalService {
  /**
   * Open a modal
   * @param modalId - Modal identifier
   * @param config - Modal configuration
   */
  open(modalId: string, config?: Record<string, any>): void | Promise<void>;
  
  /**
   * Close a modal
   * @param modalId - Modal identifier
   */
  close?(modalId: string): void | Promise<void>;
  
  /**
   * Check if a modal is open
   * @param modalId - Modal identifier
   */
  isOpen?(modalId: string): boolean;
}

/**
 * Result from animation execution
 */
export interface AnimationResult {
  /** Function to cancel the animation */
  cancel?: () => void;
  /** Promise that resolves when animation completes */
  finished?: Promise<void>;
  /** Reference to the animation object */
  animation?: Animation;
}

/**
 * Animation engine interface
 */
export interface AnimationEngine {
  /**
   * Animate an element
   * @param element - Target element
   * @param properties - Animation properties
   * @param duration - Duration in milliseconds
   * @param easing - Easing function
   */
  animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing?: string
  ): Promise<AnimationResult | void>;
  
  /**
   * Cancel all animations on an element
   * @param element - Target element
   */
  cancelAll?(element: HTMLElement): void;
  
  /**
   * Check if engine is supported in current environment
   */
  isSupported?(): boolean;
}

/**
 * Interface for interaction commands
 */
export interface InteractionCommand {
  /**
   * Execute the interaction command
   * @param context - Execution context
   */
  execute(context: InteractionContext): Promise<void> | void;
  
  /**
   * Cleanup resources after execution. May be asynchronous to allow
   * animation reversal to finish before callers proceed.
   * @param context - Execution context
   */
  cleanup?(context: InteractionContext): void | Promise<void>;
  
  /**
   * Undo the command's effects
   * @param context - Execution context
   */
  undo?(context: InteractionContext): void;
  
  /**
   * Validate the command configuration
   * @param config - Configuration to validate
   * @throws {ValidationError} If configuration is invalid
   */
  validate?(config: InteractionConfig): void;
}

/**
 * Base class for interaction commands with common functionality
 */
export abstract class BaseInteractionCommand implements InteractionCommand {
  /**
   * Execute the interaction command
   * Must be implemented by subclasses
   */
  abstract execute(context: InteractionContext): Promise<void> | void;

  /**
   * Cleanup resources after execution
   * Override to add cleanup logic
   */
  cleanup?(context: InteractionContext): void {}

  /**
   * Undo the command's effects
   * Override to add undo logic
   */
  undo?(context: InteractionContext): void {}
}

/**
 * Base class for animation commands with animation management
 */
export abstract class BaseAnimationCommand extends BaseInteractionCommand {
  protected cancelAnimation?: () => void;
  protected reverseAnimation?: Animation;
  protected activeAnimations: Map<string, Animation> = new Map();
  protected cleanupFunctions: Map<string, () => void> = new Map();
  protected originalStyles: Map<string, string> = new Map();
  protected isAnimating: boolean = false;
  protected animationTarget?: HTMLElement;

  /**
   * Cancel all active animations for this command
   */
  protected cancelAllAnimations(): void {
    // Cancel Web Animations API animations
    if (this.cancelAnimation) {
      this.cancelAnimation();
      this.cancelAnimation = undefined;
    }
    if (this.reverseAnimation) {
      this.reverseAnimation.cancel();
      this.reverseAnimation = undefined;
    }

    // Cancel all active animations from the map
    this.activeAnimations.forEach((animation) => {
      animation.cancel();
    });
    this.activeAnimations.clear();

    // Run cleanup functions
    this.cleanupFunctions.forEach(cleanup => cleanup());
    this.cleanupFunctions.clear();

    this.isAnimating = false;
  }

  /**
   * Restore element to its original styles
   * @param target - Target element
   */
  protected restoreOriginalStyles(target: HTMLElement): void {
    this.originalStyles.forEach((value, property) => {
      target.style.setProperty(property, value);
    });
    this.originalStyles.clear();
  }

  /**
   * Store original styles before animation
   * @param target - Target element
   * @param properties - CSS properties to store
   */
  protected storeOriginalStyles(target: HTMLElement, properties: string[]): void {
    properties.forEach(property => {
      const originalValue = getComputedStyle(target).getPropertyValue(property);
      this.originalStyles.set(property, originalValue);
    });
  }

  /**
   * Undo animation and restore original styles
   */
  undo(context: InteractionContext): void {
    this.cancelAllAnimations();
    this.restoreOriginalStyles(this.animationTarget || context.target);
  }
}