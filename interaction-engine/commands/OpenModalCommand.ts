// src/composer-tools/interaction-engine/commands/OpenModalCommand.ts

import { BaseInteractionCommand, InteractionContext } from '../core/types';
import { ExecutionError, ConfigurationError } from '../utils/ErrorHandler';

export class OpenModalCommand extends BaseInteractionCommand {
  async execute(context: InteractionContext): Promise<void> {
    if (!context.modalService) {
      throw new ExecutionError('ModalService not provided in context', {
        component: 'OpenModalCommand',
      });
    }

    const modalId = context.config.modalId;
    if (!modalId) {
      throw new ConfigurationError('modalId not specified in config', {
        component: 'OpenModalCommand',
        config: context.config,
      });
    }

    context.modalService.open(modalId, context.config.modalConfig);
  }
}