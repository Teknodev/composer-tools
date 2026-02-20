// src/composer-tools/interaction-engine/history/CommandHistory.ts

import { InteractionCommand, InteractionContext } from '../core/types';
import { logger } from '../utils/Logger';

export class CommandHistory {
  private undoStack: Array<{ command: InteractionCommand; context: InteractionContext }> = [];
  private redoStack: Array<{ command: InteractionCommand; context: InteractionContext }> = [];

  execute(command: InteractionCommand, context: InteractionContext): void {
    try {
      const result = command.execute(context);
      if (result instanceof Promise) {
        result.then(() => {
          this.undoStack.push({ command, context });
          this.redoStack = [];
        }).catch(error => {
          logger.error('Command execution failed:', error);
        });
      } else {
        this.undoStack.push({ command, context });
        this.redoStack = [];
      }
    } catch (error) {
      logger.error('Command execution failed:', error);
    }
  }

  undo(): void {
    const entry = this.undoStack.pop();
    if (entry && entry.command.undo) {
      try {
        entry.command.undo(entry.context);
        this.redoStack.push(entry);
      } catch (error) {
        logger.error('Command undo failed:', error);
      }
    }
  }

  redo(): void {
    const entry = this.redoStack.pop();
    if (entry) {
      try {
        const result = entry.command.execute(entry.context);
        if (result instanceof Promise) {
          result.then(() => {
            this.undoStack.push(entry);
          }).catch(error => {
            logger.error('Command redo failed:', error);
          });
        } else {
          this.undoStack.push(entry);
        }
      } catch (error) {
        logger.error('Command redo failed:', error);
      }
    }
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  clear(): void {
    this.undoStack = [];
    this.redoStack = [];
  }
}