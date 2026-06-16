/**
 * ModalActionHandler
 *
 * Runtime handler for the "open-modal" action type.
 * Opens a modal when an interaction trigger fires.
 */

import { OpenModalActionConfig } from "../../types/interaction";
import ModalService from "../composer-base-components/modal/modal.service";
import { editor } from "../../classes/Editor";

/**
 * How long (ms) after a modal closes a hover/mouse-enter trigger is ignored.
 * When a modal opens its overlay covers the trigger element, firing mouseleave;
 * closing the modal removes the overlay and fires a fresh mouseenter that would
 * immediately re-open it. Swallowing re-opens within this window keeps the modal
 * closed until the user genuinely leaves and hovers the element again.
 */
const REOPEN_COOLDOWN_MS = 400;

export class ModalActionHandler {
  /**
   * Execute the open-modal action.
   * Emits an "open" event on the ModalService with the modal configuration.
   *
   * @param config       The open-modal action config.
   * @param triggerType  The trigger that fired this action (e.g. "hover", "click").
   *                     Hover/mouse-enter triggers respect a short re-open cooldown.
   */
  static execute(config: OpenModalActionConfig, triggerType?: string): void {
    if (!config.modalId) {
      console.warn("[ModalActionHandler] No modalId specified, skipping.");
      return;
    }

    // Never open a second modal while one is already visible — this is what
    // breaks the hover re-open loop and prevents stacked modals.
    if (ModalService.isOpen) return;

    // Hover/mouse-enter: ignore the re-trigger that fires the instant the
    // overlay is removed on close, so the modal stays closed until re-hover.
    const isHoverLike = triggerType === "hover" || triggerType === "mouse-enter";
    if (isHoverLike && Date.now() - ModalService.lastClosedAt < REOPEN_COOLDOWN_MS) {
      return;
    }

    const allModals = editor.getModals();
    const key = config.modalId;
    const lower = key.toLowerCase();
    const modal = allModals.find(
      (m) =>
        m.id === key ||
        m.name === key ||
        m.signature?.getName?.() === key ||
        m.name?.toLowerCase().includes(lower) ||
        m.signature?.getName?.().toLowerCase().includes(lower) ||
        (m.localization || []).some(
          (l) => (l.modal?.json as any)?.id === key
        )
    );

    if (!modal) {
      console.warn(
        `[ModalActionHandler] Modal not found for ID: ${config.modalId}. ` +
          `Available modals (${allModals.length}):`,
        allModals.map((m) => ({
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
