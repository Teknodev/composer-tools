// interaction-engine/commands/NavigateCommand.ts

import { BaseInteractionCommand, InteractionContext } from '../core/types';
import { ExecutionError, ConfigurationError } from '../utils/ErrorHandler';

export class NavigateCommand extends BaseInteractionCommand {
  execute(context: InteractionContext): void {
    if (!context.router) {
      throw new ExecutionError('Router not provided in context', {
        component: 'NavigateCommand',
      });
    }

    const destination = context.config.path ?? context.config.url;
    if (!destination) {
      throw new ConfigurationError('navigate command requires a "path" or "url" in config', {
        component: 'NavigateCommand',
        config: context.config,
      });
    }

    context.router.navigate(destination);
  }
}
