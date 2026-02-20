// src/composer-tools/interaction-engine/commands/OpenModalCommand.ts

import { BaseInteractionCommand, InteractionContext } from '../core/types';

export class OpenModalCommand extends BaseInteractionCommand {
  async execute(context: InteractionContext): Promise<void> {
    if (!context.modalService) {
      throw new Error('ModalService not provided in context');
    }

    const modalId = context.config.modalId;
    if (!modalId) {
      throw new Error('modalId not specified in config');
    }

    context.modalService.open(modalId, context.config.modalConfig);
  }

  undo(context: InteractionContext): void {
    // Modal closing would need to be handled by the modal service
    // This is a simplified implementation
  }
}