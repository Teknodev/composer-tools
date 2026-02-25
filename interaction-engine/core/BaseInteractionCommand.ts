// src/composer-tools/interaction-engine/core/BaseInteractionCommand.ts

import { InteractionCommand, InteractionContext, InteractionConfig } from './types';

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
