/**
 * ModalActionHandler
 *
 * Runtime handler for the "open-modal" action type.
 * Opens a modal when an interaction trigger fires.
 */

import { OpenModalActionConfig } from "../../types/interaction";
import ModalService from "../composer-base-components/modal/modal.service";
import { editor } from "../../classes/Editor";

export class ModalActionHandler {
  /**
   * Execute the open-modal action.
   * Emits an "open" event on the ModalService with the modal configuration.
   */
  static execute(config: OpenModalActionConfig): void {
    if (!config.modalId) {
      console.warn("[ModalActionHandler] No modalId specified, skipping.");
      return;
    }

    const allModals = editor.getModals();
    const lower = config.modalId.toLowerCase();
    const modal = allModals.find(
      (m) =>
        m.id === config.modalId ||
        m.name === config.modalId ||
        m.signature?.getName() === config.modalId ||
        m.name.toLowerCase().includes(lower) ||
        m.signature?.getName().toLowerCase().includes(lower)
    );

    if (!modal) {
      console.warn(`[ModalActionHandler] Modal not found for ID: ${config.modalId}`);
      return;
    }

    ModalService.emit("open", {
      modal,
      modalId: config.modalId,
      openAnimation: config.openAnimation || undefined,
      closeOnOutsideClick: config.closeOnOutsideClick,
      closeOnEsc: config.closeOnEsc,
    });
  }
}
