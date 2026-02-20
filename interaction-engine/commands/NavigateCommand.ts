// src/composer-tools/interaction-engine/commands/NavigateCommand.ts

import { BaseInteractionCommand, InteractionContext } from '../core/types';

export class NavigateCommand extends BaseInteractionCommand {
  execute(context: InteractionContext): void {
    if (!context.router) {
      throw new Error('Router not provided in context');
    }

    const path = context.config.path;
    if (!path) {
      throw new Error('path not specified in config');
    }

    context.router.navigate(path);
  }

  undo(context: InteractionContext): void {
    // Navigation undo would require history management
    // This is a simplified implementation
  }
}