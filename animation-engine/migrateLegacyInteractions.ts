/**
 * migrateLegacyInteractions
 *
 * Converts legacy `section.props.interactions` (Record<string, InteractionType[]>)
 * into the new `Interaction[]` format with proper CSS selectors.
 *
 * Legacy keys can be:
 *   - Element IDs (UUID-pattern) → converted to `#${id}` CSS selector
 *   - CSS class names → converted to `[class*="${className}"]` selector
 *
 * Legacy InteractionType shape:
 *   { type: "Click"|"Hover", modal: string, trigger_action: "Show Modal",
 *     visible_on: "All"|"Desktop"|"Mobile", display_option: string, delay_seconds: number }
 */

import { v4 as uuidv4 } from "uuid";
import {
  Interaction,
  Interactions,
  OpenModalActionConfig,
  AnimateActionConfig,
  InteractionTrigger,
  DEFAULT_TIMING,
} from "../../types/interaction";
import { Logger } from "classes/Logger";

const log = new Logger("migrateLegacyInteractions");

// ---------------------------------------------------------------------------
// Legacy types (from EditorComponent.tsx)
// ---------------------------------------------------------------------------

export interface LegacyInteractionType {
  type?: string; // "Click" | "Hover" | "Form Submission"
  modal?: string;
  trigger_action?: string; // "Show Modal" | "animate" | "PlayAnimation"
  visible_on?: string; // "All" | "Desktop" | "Mobile" | "Tablet"
  show_once?: boolean;
  display_option?: "show_once" | "show_always" | "show_with_delay";
  delay_seconds?: number;
  // D3-router animate fields (added when trigger_action === "animate")
  animation_kind?: string;     // Animate.css name (one of 89), e.g. "fadeIn"
  duration_ms?: number;        // Animation duration in milliseconds
  easing?: string;             // CSS easing string, e.g. "ease-out"
}

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

// ---------------------------------------------------------------------------
// Conversion helpers
// ---------------------------------------------------------------------------

/**
 * Convert a legacy interaction key to a CSS selector.
 *
 * - UUID-patterned keys → `#${key}` (ID selector)
 * - Everything else → `[class*="${key}"]` (class contains selector)
 */
function keyToSelector(key: string, componentId?: string): string {
  // Use attribute selectors to avoid CSS identifier escaping issues
  // with UUIDs and auto-generate class names that start with digits.
  if (UUID_PATTERN.test(key)) {
    return `[id="${key}"]`;
  }

  // If we have a componentId, use the auto-generate class convention
  if (componentId) {
    return `[class~="auto-generate-${componentId}-${key}"]`;
  }

  return `[class*="${key}"]`;
}

/**
 * Convert a legacy event type string to a new-system InteractionTrigger.
 */
function legacyTypeToTrigger(type: string | undefined): InteractionTrigger {
  switch (type) {
    case "Click":
      return { type: "click" };
    case "Hover":
      return { type: "hover" };
    default:
      return { type: "click" }; // default to click
  }
}

// ---------------------------------------------------------------------------
// Main migration function
// ---------------------------------------------------------------------------

/**
 * Migrate legacy `section.props.interactions` to new `Interactions` format.
 *
 * @param legacyInteractions  The legacy interactions record (key → InteractionType[])
 * @param componentId         The component UUID (for building auto-generate selectors)
 * @returns                   New format Interactions record keyed by section name
 *
 * The returned Interactions use a single key "__legacy__" to group all migrated
 * interactions for the component. Each gets a proper CSS selector in its target.
 */
export function migrateLegacyInteractions(
  legacyInteractions: Record<string, LegacyInteractionType[]>,
  componentId: string
): Interaction[] {
  const result: Interaction[] = [];

  for (const [key, interactionList] of Object.entries(legacyInteractions)) {
    if (!Array.isArray(interactionList)) continue;

    const selector = keyToSelector(key, componentId);

    for (const legacy of interactionList) {
      const triggerAction = legacy.trigger_action;
      const trigger = legacyTypeToTrigger(legacy.type);

      // ── Animate action (D3 router output) ─────────────────────────
      // The router now emits `trigger_action: "animate"` with new fields
      // (animation_kind/duration_ms/easing). The very-old casing
      // "PlayAnimation" is also accepted for backward compatibility.
      if (triggerAction === "animate" || triggerAction === "PlayAnimation") {
        let animationName = legacy.animation_kind;
        if (!animationName) {
          log.warn("missing_animation_kind_falling_back_to_fadeIn", { trigger_action: triggerAction, type: legacy.type });
          animationName = "fadeIn";
        }
        const action: AnimateActionConfig = {
          type: "animate",
          animation: { engine: "animate-css", animationName },
          timing: {
            ...DEFAULT_TIMING,
            duration: typeof legacy.duration_ms === "number" ? legacy.duration_ms : 600,
            easing: legacy.easing ?? "ease-out",
            delay: typeof legacy.delay_seconds === "number" ? legacy.delay_seconds * 1000 : DEFAULT_TIMING.delay,
          },
          target: { type: "selector", selector },
        };

        const interaction: Interaction = {
          id: uuidv4(),
          name: `Legacy: ${legacy.type || "Click"} → animate ${animationName}`,
          trigger,
          action,
          enabled: true,
          priority: trigger.type === "click" ? 20 : 15,
        };

        // Preserve the same legacy metadata block as the modal path so
        // runtime code that reads visible_on / display_option keeps working.
        (interaction as any)._legacyMeta = {
          selector,
          visibleOn: legacy.visible_on || "All",
          displayOption: legacy.display_option || (legacy.show_once ? "show_once" : "show_always"),
          delaySeconds: legacy.delay_seconds,
        };

        result.push(interaction);
        continue;
      }

      // ── Open-modal action (existing path) ─────────────────────────
      if (triggerAction !== "Show Modal") continue;
      if (!legacy.modal) continue;

      const action: OpenModalActionConfig = {
        type: "open-modal",
        modalId: legacy.modal,
        closeOnOutsideClick: true,
        closeOnEsc: true,
      };

      const interaction: Interaction = {
        id: uuidv4(),
        name: `Legacy: ${legacy.type || "Click"} → ${legacy.modal}`,
        trigger,
        action,
        enabled: true,
        priority: trigger.type === "click" ? 20 : 15,
      };

      // Attach legacy metadata for runtime use (device filter, display option)
      (interaction as any)._legacyMeta = {
        selector,
        visibleOn: legacy.visible_on || "All",
        displayOption: legacy.display_option || (legacy.show_once ? "show_once" : "show_always"),
        delaySeconds: legacy.delay_seconds,
      };

      result.push(interaction);
    }
  }

  return result;
}

/**
 * Extract legacy metadata from a migrated interaction.
 * Returns null if this is not a migrated legacy interaction.
 */
export function getLegacyMeta(interaction: Interaction): {
  selector: string;
  visibleOn: string;
  displayOption: "show_once" | "show_always" | "show_with_delay";
  delaySeconds?: number;
} | null {
  return (interaction as any)._legacyMeta || null;
}
