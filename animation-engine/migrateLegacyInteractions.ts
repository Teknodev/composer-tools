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
  InteractionTrigger,
} from "../../types/interaction";

// ---------------------------------------------------------------------------
// Legacy types (from EditorComponent.tsx)
// ---------------------------------------------------------------------------

export interface LegacyInteractionType {
  type?: string; // "Click" | "Hover" | "Form Submission"
  modal?: string;
  trigger_action?: string; // "Show Modal"
  visible_on?: string; // "All" | "Desktop" | "Mobile" | "Tablet"
  show_once?: boolean;
  display_option?: "show_once" | "show_always" | "show_with_delay";
  delay_seconds?: number;
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
      // Only handle "Show Modal" trigger action
      if (legacy.trigger_action !== "Show Modal") continue;
      if (!legacy.modal) continue;

      const trigger = legacyTypeToTrigger(legacy.type);

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
