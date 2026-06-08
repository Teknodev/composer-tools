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

    const modal = editor.findModalByKey(config.modalId);

    if (!modal) {
      const all = editor.getModals();
      console.warn(
        `[ModalActionHandler] Modal not found for ID: ${config.modalId}. ` +
          `Available modals (${all.length}):`,
        all.map((m) => ({
          id: m.id,
          name: m.name,
          jsonIds: (m.localization || []).map((l) => (l.modal?.json as any)?.id),
        }))
      );
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
