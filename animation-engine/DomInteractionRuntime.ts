/**
 * DomInteractionRuntime
 *
 * A pure DOM-driven interaction runtime that resolves targets directly from the
 * DOM at trigger time, using event delegation on the playground root. Eliminates
 * reliance on memorized sections or cached structures.
 *
 * Architecture:
 *  - A single set of delegated event listeners on the playground root element
 *    handles click, mouseover, mouseenter, mouseleave, focusin, focusout events.
 *  - When a delegated event fires, the runtime identifies which component/section
 *    the event originated from by walking up to the nearest `[class*="auto-generate-"]`.
 *  - It looks up interactions for that component from the registry.
 *  - For animation interactions, it delegates to InteractionManager.
 *  - For legacy modal interactions, it uses LegacyModalActionHandler.
 *  - Non-event triggers (page-load, scroll) are handled via InteractionManager
 *    per-component, initialized lazily from DOM.
 *
 * The runtime uses a MutationObserver to detect newly added/removed DOM elements
 * and re-initialize animation managers for affected components.
 */

import { Interactions, Interaction } from "../../types/interaction";
import { InteractionManager } from "./InteractionManager";
import {
  LegacyModalActionHandler,
  LegacyModalInteraction,
  SetModalInstanceFn,
} from "./LegacyModalActionHandler";
import {
  LegacyInteractionType,
  migrateLegacyInteractions,
  getLegacyMeta,
} from "./migrateLegacyInteractions";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Assign unique IDs to child elements of a component section.
 * Matches children against the component's exported CSS class map and assigns
 * IDs of the form: `{componentId}-{cssClassName}-{count}`.
 *
 * This is a local equivalent of utils/dom-utils.assignIdsToElements to avoid
 * cross-rootDir imports from composer-tools.
 */
function assignIdsToComponentElements(
  element: HTMLElement,
  componentId: string,
  cssClasses: Record<string, string>
): void {
  const counters = new Map<string, number>();

  const walk = (collection: HTMLCollection, prefix: string) => {
    Array.from(collection).forEach((el) => {
      const className = Object.entries(cssClasses).find(([, module]) =>
        el.classList.contains(module)
      )?.[0];

      if (!className) {
        walk(el.children, prefix);
        return;
      }

      const count = (counters.get(className) || 0) + 1;
      counters.set(className, count);
      (el as HTMLElement).id = `${prefix}-${className}-${count}`;

      walk(el.children, prefix);
    });
  };

  walk([element] as unknown as HTMLCollection, componentId);
}

/** A component's full interaction config for the runtime */
export interface ComponentInteractionConfig {
  componentId: string;
  /** Animation interactions from InteractionsContext (new system) */
  animationInteractions?: Interactions;
  /** Legacy interactions from section.props.interactions */
  legacyInteractions?: Record<string, LegacyInteractionType[]>;
  /** CSS classes for ID assignment (from component.getExportedCSSClasses()) */
  cssClasses?: Record<string, string>;
}

interface ManagedComponent {
  componentId: string;
  manager: InteractionManager;
  legacyInteractions: Interaction[];
}

// ---------------------------------------------------------------------------
// Auto-generate class parsing
// ---------------------------------------------------------------------------

const AUTO_GEN_REGEX = /^auto-generate-([a-f0-9-]+?-[a-f0-9-]+?-[a-f0-9-]+?-[a-f0-9-]+?-[a-f0-9-]+?)-(.+)$/;

/**
 * Walk up from the event target to find the nearest element with an
 * `auto-generate-{componentId}-{section}` class. Returns the componentId
 * and sectionName, or null if not found.
 */
function findComponentFromEvent(target: HTMLElement): {
  element: HTMLElement;
  componentId: string;
  sectionName: string;
} | null {
  let current: HTMLElement | null = target;
  while (current) {
    for (const cls of current.classList) {
      const match = cls.match(AUTO_GEN_REGEX);
      if (match) {
        return {
          element: current,
          componentId: match[1],
          sectionName: match[2],
        };
      }
    }
    current = current.parentElement;
  }
  return null;
}

/**
 * Walk up from the event target to find the nearest element with a UUID-pattern ID.
 * This is used to identify elements for legacy interaction key matching.
 */
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

function findBlinkpageElement(target: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = target;
  while (current) {
    if (current.id && UUID_PATTERN.test(current.id)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Runtime
// ---------------------------------------------------------------------------

export class DomInteractionRuntime {
  private rootElement: HTMLElement | null = null;
  private components = new Map<string, ManagedComponent>();
  private legacyModalHandler = new LegacyModalActionHandler();
  private mutationObserver: MutationObserver | null = null;
  private destroyed = false;
  private currentDevice = "desktop";
  private pendingMutationTimeout: ReturnType<typeof setTimeout> | null = null;

  // Track event listeners for cleanup
  private boundHandlers: Array<{
    type: string;
    handler: EventListener;
    options?: AddEventListenerOptions;
  }> = [];

  // ── Public API ────────────────────────────────────────────────────

  /**
   * Initialize the runtime on a root container element (e.g. #playground).
   *
   * @param root           The playground root element
   * @param configs        Component interaction configs for all sections on the page
   * @param setModalFn     React state setter for modal instances
   * @param deviceType     Current device type for device filtering
   */
  initialize(
    root: HTMLElement,
    configs: ComponentInteractionConfig[],
    setModalFn: SetModalInstanceFn,
    deviceType: string = "desktop"
  ): void {
    console.log("configs: ", configs)
    this.destroy();
    this.destroyed = false;
    this.rootElement = root;
    this.currentDevice = deviceType;
    this.legacyModalHandler.bindModalSetter(setModalFn);

    // Step 1: Assign IDs to all section elements
    this.assignAllIds(configs);

    // Step 2: Register animation interaction managers per component
    for (const config of configs) {
      this.registerComponent(config);
    }

    // Step 3: Attach delegated event listeners on root
    this.attachDelegatedListeners();

    // Step 4: Set up MutationObserver for dynamic DOM changes
    this.setupMutationObserver(configs);
  }

  /**
   * Update the device type (e.g., when user switches preview device).
   */
  setDeviceType(device: string): void {
    this.currentDevice = device;
  }

  /**
   * Notify that a modal was closed (for cooldown tracking).
   */
  onModalClosed(): void {
    this.legacyModalHandler.onModalClosed();
  }

  /**
   * Reset all tracking state (call on page navigation).
   */
  resetState(): void {
    this.legacyModalHandler.reset();
  }

  /**
   * Tear down everything.
   */
  destroy(): void {
    this.destroyed = true;

    // Remove delegated event listeners
    if (this.rootElement) {
      for (const { type, handler, options } of this.boundHandlers) {
        this.rootElement.removeEventListener(type, handler, options);
      }
    }
    this.boundHandlers = [];

    // Destroy all component managers
    for (const comp of this.components.values()) {
      comp.manager.destroy();
    }
    this.components.clear();

    // Disconnect mutation observer
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }

    if (this.pendingMutationTimeout) {
      clearTimeout(this.pendingMutationTimeout);
      this.pendingMutationTimeout = null;
    }

    this.rootElement = null;
  }

  // ── Private: Component registration ─────────────────────────────

  private registerComponent(config: ComponentInteractionConfig): void {
    const { componentId, animationInteractions, legacyInteractions } = config;

    // Create animation interaction manager
    const manager = new InteractionManager();

    // The InteractionManager resolves section elements from DOM at init time.
    // We pass document.documentElement as root so it can find elements globally.
    if (animationInteractions && Object.keys(animationInteractions).length > 0) {
        console.log("animationInteractions: ", animationInteractions)
      manager.initialize(
        document.documentElement,
        componentId,
        animationInteractions,
        true // isPreviewMode
      );
    }

    // Migrate legacy interactions to the new format for delegated handling
    const migratedLegacy = legacyInteractions
      ? migrateLegacyInteractions(legacyInteractions, componentId)
      : [];

    this.components.set(componentId, {
      componentId,
      manager,
      legacyInteractions: migratedLegacy,
    });
  }

  // ── Private: ID assignment ──────────────────────────────────────

  private assignAllIds(configs: ComponentInteractionConfig[]): void {
    for (const config of configs) {
      this.assignComponentIds(config);
    }
  }

  private assignComponentIds(config: ComponentInteractionConfig): void {
    if (!config.cssClasses) return;

    // Find the component's root element in the DOM
    const selector = `[class*="auto-generate-${CSS.escape(config.componentId)}-"]`;
    const elements = document.querySelectorAll<HTMLElement>(selector);

    for (const el of elements) {
      assignIdsToComponentElements(el, config.componentId, config.cssClasses);
    }
  }

  // ── Private: Delegated event listeners ──────────────────────────

  private attachDelegatedListeners(): void {
    if (!this.rootElement) return;

    const addListener = (
      type: string,
      handler: (e: Event) => void,
      options?: AddEventListenerOptions
    ) => {
      this.rootElement!.addEventListener(type, handler, options);
      this.boundHandlers.push({ type, handler, options });
    };

    // Click delegation — captures click events for legacy modal interactions
    addListener("click", this.handleDelegatedClick, { capture: true });

    // Mouseover delegation — captures hover events for legacy modal interactions
    addListener("mouseover", this.handleDelegatedMouseover, { capture: true });
  }

  private handleDelegatedClick = (e: Event): void => {
    if (this.destroyed) return;
    this.processLegacyEvent(e as MouseEvent, "click");
  };

  private handleDelegatedMouseover = (e: Event): void => {
    if (this.destroyed) return;
    this.processLegacyEvent(e as MouseEvent, "mouseover");
  };

  /**
   * Process a delegated event for legacy modal interactions.
   *
   * Flow:
   * 1. Find which component the event originated from (via auto-generate class or UUID ID)
   * 2. Look up migrated legacy interactions for that component
   * 3. Filter by trigger type and device
   * 4. Resolve target using the selector stored in _legacyMeta
   * 5. Execute matching interactions
   */
  private processLegacyEvent(event: MouseEvent, eventType: string): void {
    const target = event.target as HTMLElement;
    if (!target) return;

    // Walk up to find which component this event belongs to
    const componentInfo = findComponentFromEvent(target);

    // Also find the nearest blinkpage element (for ID matching + container priority)
    const blinkpageEl = findBlinkpageElement(target);

    for (const comp of this.components.values()) {
      if (comp.legacyInteractions.length === 0) continue;

      // Check each legacy interaction
      let containerMatch: { interaction: Interaction; elementId: string } | null = null;

      for (const interaction of comp.legacyInteractions) {
        const meta = getLegacyMeta(interaction);
        if (!meta) continue;

        // Check trigger type matches event
        const isClickType = interaction.trigger.type === "click";
        const isHoverType = interaction.trigger.type === "hover";
        const isClickEvent = eventType === "click";
        const isHoverEvent = eventType === "mouseover";

        if (!(isClickEvent && isClickType) && !(isHoverEvent && isHoverType)) continue;

        // Check device filter
        if (!this.legacyModalHandler.shouldShowOnDevice(meta.visibleOn, this.currentDevice)) {
          continue;
        }

        // Resolve target elements from DOM at trigger time
        try {
          const matchedElements = document.querySelectorAll<HTMLElement>(meta.selector);
          if (matchedElements.length === 0) {
            console.warn(
              "[DomInteractionRuntime] Interaction target not found:",
              meta.selector
            );
            continue;
          }

          // Check if the event target is within (or is) any of the matched elements
          let matched = false;
          let matchedElementId = "";

          for (const matchedEl of matchedElements) {
            if (matchedEl === target || matchedEl.contains(target)) {
              matched = true;
              matchedElementId = matchedEl.id || blinkpageEl?.id || "";

              // Container match has lower priority
              if (matchedEl.id?.includes("-container-")) {
                containerMatch = { interaction, elementId: matchedElementId };
                matched = false; // Don't execute immediately, wait for non-container match
              }
              break;
            }
          }

          if (matched) {
            this.executeLegacyInteraction(interaction, matchedElementId);
            return; // First non-container match wins
          }
        } catch (error) {
          console.warn(
            "[DomInteractionRuntime] Invalid interaction selector:",
            meta.selector,
            error
          );
          continue;
        }
      }

      // If we only found a container match, execute it
      if (containerMatch) {
        this.executeLegacyInteraction(containerMatch.interaction, containerMatch.elementId);
        return;
      }
    }
  }

  private executeLegacyInteraction(interaction: Interaction, elementId: string): void {
    const meta = getLegacyMeta(interaction);
    if (!meta) return;

    if (interaction.action.type === "open-modal") {
      const legacyConfig: LegacyModalInteraction = {
        modalName: interaction.action.modalId,
        displayOption: meta.displayOption as LegacyModalInteraction["displayOption"],
        delaySeconds: meta.delaySeconds,
        visibleOn: meta.visibleOn,
      };
      this.legacyModalHandler.execute(legacyConfig, elementId);
    }
  }

  // ── Private: MutationObserver ───────────────────────────────────

  private setupMutationObserver(configs: ComponentInteractionConfig[]): void {
    if (!this.rootElement) return;

    this.mutationObserver = new MutationObserver((mutations) => {
      if (this.destroyed) return;

      // Debounce mutation processing
      if (this.pendingMutationTimeout) {
        clearTimeout(this.pendingMutationTimeout);
      }

      this.pendingMutationTimeout = setTimeout(() => {
        // Wait for a paint cycle after debounce to ensure newly added elements
        // are fully rendered before re-initializing interaction managers.
        requestAnimationFrame(() => {
          if (this.destroyed) return;
          this.handleMutations(mutations, configs);
          this.pendingMutationTimeout = null;
        });
      }, 200);
    });

    this.mutationObserver.observe(this.rootElement, {
      childList: true,
      subtree: true,
    });
  }

  private handleMutations(
    mutations: MutationRecord[],
    configs: ComponentInteractionConfig[]
  ): void {
    if (this.destroyed) return;

    // Check if any added nodes contain auto-generate elements
    let hasNewElements = false;
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) {
          if (
            node.querySelector('[class*="auto-generate-"]') ||
            Array.from(node.classList).some((c) => c.startsWith("auto-generate-"))
          ) {
            hasNewElements = true;
            break;
          }
        }
      }
      if (hasNewElements) break;
    }

    if (!hasNewElements) return;

    // Re-assign IDs for all components (only assigns where !el.id)
    this.assignAllIds(configs);

    // Refresh animation managers for components that may have new DOM elements
    for (const config of configs) {
      const existing = this.components.get(config.componentId);
      if (
        existing &&
        config.animationInteractions &&
        Object.keys(config.animationInteractions).length > 0
      ) {
        existing.manager.refresh(
          document.documentElement,
          config.componentId,
          config.animationInteractions,
          true
        );
      }
    }
  }
}
