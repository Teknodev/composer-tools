// src/composer-tools/interaction-engine/services/ModalService.ts

import { ModalService } from '../core/types';

export class BasicModalService implements ModalService {
  open(modalId: string, config?: Record<string, any>): void {
    // Basic implementation - dispatch custom event
    const event = new CustomEvent('openModal', {
      detail: { modalId, config }
    });
    window.dispatchEvent(event);
  }
}