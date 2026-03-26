/**
 * ModalActionHandler
 *
 * Runtime handler for the "open-modal" action type.
 * Opens a modal when an interaction trigger fires.
 */

import { OpenModalActionConfig } from "../../types/interaction";
import ModalService from "../composer-base-components/modal/modal.service";

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

    ModalService.emit("open", {
      modalId: config.modalId,
      openAnimation: config.openAnimation || undefined,
      closeOnOutsideClick: config.closeOnOutsideClick,
      closeOnEsc: config.closeOnEsc,
    });
  }
}
