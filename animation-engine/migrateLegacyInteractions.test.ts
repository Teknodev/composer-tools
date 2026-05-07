import { describe, it, expect } from "vitest";
import { migrateLegacyInteractions, LegacyInteractionType } from "./migrateLegacyInteractions";
import { AnimateActionConfig, OpenModalActionConfig } from "../../types/interaction";

describe("migrateLegacyInteractions", () => {
  const COMPONENT_ID = "abc123";

  it("(a) migrates an animate action with full new fields", () => {
    const legacy: Record<string, LegacyInteractionType[]> = {
      heading: [
        {
          type: "Click",
          trigger_action: "animate",
          animation_kind: "bounceIn",
          duration_ms: 1200,
          easing: "ease-in-out",
          visible_on: "Desktop",
          delay_seconds: 0.5,
        },
      ],
    };

    const result = migrateLegacyInteractions(legacy, COMPONENT_ID);

    expect(result).toHaveLength(1);
    const interaction = result[0];
    expect(interaction.action.type).toBe("animate");
    expect(interaction.trigger.type).toBe("click");

    const action = interaction.action as AnimateActionConfig;
    expect(action.animation.engine).toBe("animate-css");
    expect((action.animation as any).animationName).toBe("bounceIn");
    expect(action.timing.duration).toBe(1200);
    expect(action.timing.easing).toBe("ease-in-out");
    // delay_seconds is preserved into timing.delay (ms).
    expect(action.timing.delay).toBe(500);
    expect(action.target.type).toBe("selector");

    // Legacy meta block carries the device + display fields forward.
    const meta = (interaction as any)._legacyMeta;
    expect(meta).toBeDefined();
    expect(meta.visibleOn).toBe("Desktop");
  });

  it("(b) animate action with missing animation_kind falls back to fadeIn", () => {
    const legacy: Record<string, LegacyInteractionType[]> = {
      heading: [
        {
          type: "Hover",
          trigger_action: "animate",
          duration_ms: 800,
        },
      ],
    };

    const result = migrateLegacyInteractions(legacy, COMPONENT_ID);

    expect(result).toHaveLength(1);
    const action = result[0].action as AnimateActionConfig;
    expect((action.animation as any).animationName).toBe("fadeIn");
    // Defaults still applied for the unspecified fields.
    expect(action.timing.duration).toBe(800);
    expect(action.timing.easing).toBe("ease-out");
  });

  it("also migrates the very-old PlayAnimation casing", () => {
    const legacy: Record<string, LegacyInteractionType[]> = {
      heading: [
        {
          type: "Click",
          trigger_action: "PlayAnimation",
          animation_kind: "shake",
        },
      ],
    };

    const result = migrateLegacyInteractions(legacy, COMPONENT_ID);

    expect(result).toHaveLength(1);
    const action = result[0].action as AnimateActionConfig;
    expect(action.type).toBe("animate");
    expect((action.animation as any).animationName).toBe("shake");
    // Default fallbacks for duration_ms and easing.
    expect(action.timing.duration).toBe(600);
    expect(action.timing.easing).toBe("ease-out");
  });

  it("(c) Show Modal still works (regression)", () => {
    const legacy: Record<string, LegacyInteractionType[]> = {
      "cta-button": [
        {
          type: "Click",
          trigger_action: "Show Modal",
          modal: "SignUpModal",
          visible_on: "All",
          show_once: true,
        },
      ],
    };

    const result = migrateLegacyInteractions(legacy, COMPONENT_ID);

    expect(result).toHaveLength(1);
    const interaction = result[0];
    const action = interaction.action as OpenModalActionConfig;
    expect(action.type).toBe("open-modal");
    expect(action.modalId).toBe("SignUpModal");
    expect(interaction.trigger.type).toBe("click");
  });

  it("skips Show Modal entries that are missing the modal id", () => {
    const legacy: Record<string, LegacyInteractionType[]> = {
      key: [{ type: "Click", trigger_action: "Show Modal" }],
    };
    expect(migrateLegacyInteractions(legacy, COMPONENT_ID)).toHaveLength(0);
  });
});
