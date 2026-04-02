/**
 * LegacyModalActionHandler
 *
 * Handles "Show Modal" interactions from the legacy interaction system
 * (section.props.interactions). Manages show_once / show_with_delay / cooldown
 * logic that was previously embedded in useSectionInteraction.
 *
 * This handler is invoked by DomInteractionRuntime when a legacy open-modal
 * interaction fires. It replaces the processModalInteraction / handleModalInteraction
 * logic previously in useSectionInteraction.tsx.
 */

import { Modal } from "../../classes/Modal";
import { editor } from "../../classes/Editor";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DisplayOption = "show_once" | "show_always" | "show_with_delay";

export interface LegacyModalInteraction {
  /** Modal name to open */
  modalName: string;
  /** Display option controlling repeat-show behavior */
  displayOption: DisplayOption | undefined;
  /** Seconds before re-showing (for show_with_delay) */
  delaySeconds?: number;
  /** Device filter — "All" | "Desktop" | "Mobile" | "Tablet" etc. */
  visibleOn?: string;
}

export type SetModalInstanceFn = (modal: Modal | null) => void;

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export class LegacyModalActionHandler {
  private shownModals = new Set<string>();
  private cooldownModals = new Set<string>();
  private pendingCooldowns = new Map<string, { delaySeconds: number; modalKey: string }>();

  private setModalInstance: SetModalInstanceFn | null = null;

  /** Bind the React state setter (called once from the hook) */
  bindModalSetter(setter: SetModalInstanceFn): void {
    this.setModalInstance = setter;
  }

  /**
   * Called when a modal is closed (modalInstance becomes null).
   * Starts cooldown timers for any pending show_with_delay modals.
   */
  onModalClosed(): void {
    this.pendingCooldowns.forEach(({ delaySeconds, modalKey }) => {
      this.cooldownModals.add(modalKey);
      setTimeout(() => {
        this.cooldownModals.delete(modalKey);
      }, delaySeconds * 1000);
    });
    this.pendingCooldowns.clear();
  }

  /** Reset all tracking state (call on page change) */
  reset(): void {
    this.shownModals.clear();
    this.cooldownModals.clear();
    this.pendingCooldowns.clear();
  }

  /**
   * Check device visibility filter.
   * Returns true if the interaction should execute on the current device.
   */
  shouldShowOnDevice(visibleOn: string | undefined, currentDevice: string): boolean {
    if (!visibleOn) return false;
    return (
      visibleOn === "All" ||
      visibleOn.toLowerCase() === currentDevice.toLowerCase()
    );
  }

  /**
   * Execute a legacy modal interaction.
   *
   * @param interaction  The parsed legacy interaction config
   * @param elementId    The ID of the triggering element (for show_once/cooldown tracking)
   */
  execute(interaction: LegacyModalInteraction, elementId: string): void {
    const { modalName, displayOption, delaySeconds } = interaction;

    if (!this.canShowModal(modalName, displayOption, elementId)) return;

    const modal = this.findModal(modalName);
    if (!modal || !this.setModalInstance) return;

    this.setModalInstance(modal);

    // Track show_with_delay cooldown for when modal closes
    if (displayOption === "show_with_delay" && delaySeconds) {
      const modalKey = `${elementId}-${modalName}`;
      this.pendingCooldowns.set(modalKey, { delaySeconds, modalKey });
    }
  }

  // ── Private ─────────────────────────────────────────────────────────

  private canShowModal(
    modalName: string,
    displayOption: DisplayOption | undefined,
    elementId: string
  ): boolean {
    if (displayOption === "show_always") return true;

    const modalKey = `${elementId}-${modalName}`;

    if (displayOption === "show_once") {
      if (this.shownModals.has(modalKey)) return false;
      this.shownModals.add(modalKey);
      return true;
    }

    if (displayOption === "show_with_delay") {
      return !this.cooldownModals.has(modalKey);
    }

    return true;
  }

  private findModal(modalName: string): Modal | undefined {
    const allModals = editor.getModals();
    const lower = modalName.toLowerCase();
    return allModals.find(
      (m) =>
        m.name === modalName ||
        m.signature?.getName() === modalName ||
        m.name.toLowerCase().includes(lower) ||
        m.signature?.getName().toLowerCase().includes(lower)
    );
  }
}
