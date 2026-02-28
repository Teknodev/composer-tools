// src/composer-tools/interaction-engine/core/BaseAnimationCommand.ts

import { BaseInteractionCommand } from './BaseInteractionCommand';
import { InteractionContext } from './types';
import { originalStyleRegistry } from './StyleRegistry';
import { logger } from '../utils/Logger';

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
   * Optional callback set during async cleanup operations.
   * Called by forceCancel() to abort an in-progress cleanup
   * (e.g. a CSS transition or a reverse animation) so that a new
   * execute() can start immediately without waiting.
   */
  protected _cleanupAbortFn?: () => void;

  /**
   * Publicly accessible method to synchronously cancel all running
   * animations **and** abort any in-progress async cleanup.
   *
   * Used by Interaction.fire() to guarantee a clean slate before
   * re-executing the command on rapid state triggers (hover/press).
   */
  public forceCancel(): void {
    if (this._cleanupAbortFn) {
      this._cleanupAbortFn();
      this._cleanupAbortFn = undefined;
    }
    this.cancelAllAnimations();
  }

  /**
   * Cancel all active animations for this command
   */
  protected cancelAllAnimations(): void {
    if (this.cancelAnimation) {
      logger.debug('BaseAnimationCommand: cancelling cancelAnimation');
      this.cancelAnimation();
      this.cancelAnimation = undefined;
    }
    if (this.reverseAnimation) {
      logger.debug('BaseAnimationCommand: cancelling reverseAnimation');
      this.reverseAnimation.cancel();
      this.reverseAnimation = undefined;
    }

    this.activeAnimations.forEach((animation) => {
      logger.debug('BaseAnimationCommand: cancelling active animation');
      animation.cancel();
    });
    this.activeAnimations.clear();

    this.cleanupFunctions.forEach((cleanup) => cleanup());
    this.cleanupFunctions.clear();

    this.isAnimating = false;
  }

  /**
   * Restore element to its original styles
   */
  protected restoreOriginalStyles(target: HTMLElement): void {
    const registry = originalStyleRegistry.get(target);

    logger.debug('restoreOriginalStyles', {
      registry: registry ? Object.fromEntries(registry) : null,
      commandStored: Object.fromEntries(this.originalStyles),
    });

    this.originalStyles.forEach((value, property) => {
      const original = registry?.get(property) ?? value;
      try {
        target.style.setProperty(property, original);
      } catch (err) {
        /* ignore */
      }
    });

    this.originalStyles.clear();
  }

  /**
   * Store original styles before animation
   */
  protected storeOriginalStyles(target: HTMLElement, properties: string[]): void {
    let registry = originalStyleRegistry.get(target);
    if (!registry) {
      registry = new Map<string, string>();
      originalStyleRegistry.set(target, registry);
    }

    properties.forEach((property) => {
      if (!registry!.has(property)) {
        const initial = getComputedStyle(target).getPropertyValue(property);
        registry!.set(property, initial);
        logger.debug('storeOriginalStyles: captured initial for element', {
          target,
          property,
          initial,
        });
      }

      if (!this.originalStyles.has(property)) {
        this.originalStyles.set(property, registry!.get(property)!);
      }
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
