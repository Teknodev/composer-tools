// src/composer-tools/interaction-engine/bootstrap/EngineManager.ts

import { InteractionFactory } from "../factory/InteractionFactory";
import { TriggerFactory } from "../factory/TriggerFactory";
import { PressTrigger } from "../triggers/PressTrigger";
import { HoverTrigger } from "../triggers/HoverTrigger";
import { ClickTrigger } from "../triggers/ClickTrigger";
import { TextAnimateTrigger } from "../triggers/TextAnimateTrigger";
import { LoopTrigger } from "../triggers/LoopTrigger";
import { LoadTrigger } from "../triggers/LoadTrigger";
import { OnAppearTrigger } from "../triggers/OnAppearTrigger";
import { OnScrollTrigger } from "../triggers/OnScrollTrigger";
import { OpenModalCommand } from "../commands/OpenModalCommand";
import { NavigateCommand } from "../commands/NavigateCommand";
import { AnimateCommand } from "../commands/AnimateCommand";
import { TextAnimationCommand } from "../commands/TextAnimationCommand";
import { LoopEffectCommand } from "../commands/LoopEffectCommand";
import { SimpleRouter } from "../services/SimpleRouter";
import { BasicModalService } from "../services/ModalService";
import { InteractionSchema } from "../schema/InteractionSchema";
import { bootstrapInteractions } from "./InteractionBootstrap";

/**
 * Initialize the interaction engine with trigger/command factories and services.
 *
 * Animation engine is **no longer resolved globally** — each command resolves
 * its own engine from `config.engine` via `AnimationEngineResolver`.
 */
export const initializeInteractionEngine = () => {
  // Create factories
  const commandFactory = new InteractionFactory();
  const triggerFactory = new TriggerFactory();

  // Register core triggers
  triggerFactory.register("press", (config) => new PressTrigger(config));
  triggerFactory.register("hover", (config) => new HoverTrigger(config));
  triggerFactory.register("click", (config) => new ClickTrigger(config));
  triggerFactory.register("loop", (config) => new LoopTrigger(config));
  triggerFactory.register("textAnimate", (config) => new TextAnimateTrigger(config));
  triggerFactory.register("load", (config) => new LoadTrigger(config));
  triggerFactory.register("appear", (config) => new OnAppearTrigger(config));
  triggerFactory.register("scroll", (config) => new OnScrollTrigger(config));

  // Register core commands
  commandFactory.register("openModal", () => new OpenModalCommand());
  commandFactory.register("navigate", () => new NavigateCommand());
  commandFactory.register("animate", () => new AnimateCommand());
  commandFactory.register("textAnimate", () => new TextAnimationCommand());
  commandFactory.register("loopEffect", () => new LoopEffectCommand());

  // Create shared services
  const router = new SimpleRouter();
  const modalService = new BasicModalService();

  return {
    commandFactory,
    triggerFactory,
    router,
    modalService,
  };
};

// Global interaction engine instance
let interactionEngineInstance: ReturnType<typeof initializeInteractionEngine> | null = null;
let activeCleanup: (() => void) | null = null;

export const getInteractionEngine = () => {
  if (!interactionEngineInstance) {
    interactionEngineInstance = initializeInteractionEngine();
  }
  return interactionEngineInstance;
};

export const bootstrapPageInteractions = (
  schema: InteractionSchema
) => {
  const engine = getInteractionEngine();

  if (activeCleanup) {
    activeCleanup();
  }

  activeCleanup = bootstrapInteractions(schema, {
    commandFactory: engine.commandFactory,
    triggerFactory: engine.triggerFactory,
    router: engine.router,
    modalService: engine.modalService,
  });

  return activeCleanup;
};

export const cleanupActiveInteractions = () => {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }
};
