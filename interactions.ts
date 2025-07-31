import { InteractionType } from "./editor-components/types";

/**
 * Command interface for handling different interaction effects
 */
export interface InteractionCommand {
  execute(
    interaction: InteractionType,
    context: InteractionContext
  ): Promise<void> | void;
  canExecute(
    interaction: InteractionType,
    context: InteractionContext
  ): boolean;
}

/**
 * Context for interaction execution
 */
export interface InteractionContext {
  projectId: string;
  elementId: string;
  modals: any[];
  pages: any[];
  animations: any[];
}

/**
 * Command for handling link interactions
 */
export class LinkInteractionCommand implements InteractionCommand {
  execute(interaction: InteractionType, context: InteractionContext): void {
    if (interaction.action !== "link") return;

    const linkInteraction = interaction as any;
    console.log("Executing link interaction:", {
      type: linkInteraction.link_type,
      url: linkInteraction.url,
      pageId: linkInteraction.page_id,
      sectionId: linkInteraction.section_id,
    });

    // Implementation would handle:
    // - External links: window.open or location.href
    // - Internal pages: router navigation
    // - Section scrolling: smooth scroll to element
  }

  canExecute(
    interaction: InteractionType,
    context: InteractionContext
  ): boolean {
    return interaction.action === "link";
  }
}

/**
 * Command for handling modal interactions
 */
export class ModalInteractionCommand implements InteractionCommand {
  execute(interaction: InteractionType, context: InteractionContext): void {
    if (interaction.action !== "modal") return;

    const modalInteraction = interaction as any;
    const modal = context.modals.find(
      (m) => m.id === modalInteraction.modal_id
    );

    if (!modal) {
      console.warn("Modal not found:", modalInteraction.modal_id);
      return;
    }

    console.log("Executing modal interaction:", {
      modalId: modalInteraction.modal_id,
      displayOption: interaction.display_option,
      delay: interaction.delay_seconds,
    });

    // Implementation would handle:
    // - Show modal with proper timing
    // - Handle display options (once, always, with delay)
    // - Track modal state
  }

  canExecute(
    interaction: InteractionType,
    context: InteractionContext
  ): boolean {
    if (interaction.action !== "modal") return false;
    const modalInteraction = interaction as any;
    return context.modals.some((m) => m.id === modalInteraction.modal_id);
  }
}

/**
 * Command for handling animation interactions
 */
export class AnimationInteractionCommand implements InteractionCommand {
  execute(interaction: InteractionType, context: InteractionContext): void {
    if (interaction.action !== "animation") return;

    const animationInteraction = interaction as any;

    console.log("Executing animation interaction:", {
      type: animationInteraction.animation_type,
      duration: animationInteraction.duration,
      easing: animationInteraction.easing,
    });

    // Implementation would handle:
    // - CSS animations or transitions
    // - JavaScript-based animations
    // - Animation sequencing
  }

  canExecute(
    interaction: InteractionType,
    context: InteractionContext
  ): boolean {
    return interaction.action === "animation";
  }
}

/**
 * Invoker class that manages and executes interaction commands
 */
export class InteractionCommandInvoker {
  private commands: Map<string, InteractionCommand> = new Map();

  constructor() {
    this.registerCommand("link", new LinkInteractionCommand());
    this.registerCommand("modal", new ModalInteractionCommand());
    this.registerCommand("animation", new AnimationInteractionCommand());
  }

  registerCommand(action: string, command: InteractionCommand): void {
    this.commands.set(action, command);
  }

  executeInteraction(
    interaction: InteractionType,
    context: InteractionContext
  ): void {
    const command = this.commands.get(interaction.action);

    if (!command) {
      console.warn("No command found for action:", interaction.action);
      return;
    }

    if (!command.canExecute(interaction, context)) {
      console.warn("Command cannot execute interaction:", interaction);
      return;
    }

    try {
      command.execute(interaction, context);
    } catch (error) {
      console.error("Error executing interaction command:", error);
    }
  }

  getAvailableCommands(): { action: string }[] {
    return Array.from(this.commands.entries()).map(([action, command]) => ({
      action,
    }));
  }
}
