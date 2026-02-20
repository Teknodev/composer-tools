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
import { WebAnimationsAPI } from "../animations/WebAnimationsAPI";
import { AnimateCssAnimationEngine } from "../animations/AnimateCssAnimationEngine";
import { SimpleRouter } from "../services/SimpleRouter";
import { BasicModalService } from "../services/ModalService";
import { InteractionSchema } from "../schema/InteractionSchema";
import { bootstrapInteractions, BootstrapDependencies } from "./InteractionBootstrap";

// Production-level interaction engine setup
export const initializeInteractionEngine = (
  animationEngine: "webAnimations" | "animateCss" = "webAnimations"
) => {
  // Create factories
  const commandFactory = new InteractionFactory();
  const triggerFactory = new TriggerFactory();

  // Register core triggers
  triggerFactory.register("press", (config) => new PressTrigger(config));
  triggerFactory.register("hover", (config) => new HoverTrigger(config));
  triggerFactory.register("click", (config) => new ClickTrigger(config));
  triggerFactory.register("loop", (config) => new LoopTrigger(config));
  triggerFactory.register("textAnimate", (config) => new TextAnimateTrigger(config));
  triggerFactory.register("load", (config) => new LoadTrigger());
  triggerFactory.register("appear", (config) => new OnAppearTrigger(config));
  triggerFactory.register("scroll", (config) => new OnScrollTrigger(config));

  // Register core commands
  commandFactory.register("openModal", () => new OpenModalCommand());
  commandFactory.register("navigate", () => new NavigateCommand());
  commandFactory.register("animate", () => new AnimateCommand());
  commandFactory.register("textAnimate", () => new TextAnimationCommand());
  commandFactory.register("loopEffect", () => new LoopEffectCommand());

  // Create services
  const router = new SimpleRouter();
  const modalService = new BasicModalService();
  const selectedAnimationEngine =
    animationEngine === "animateCss" ? new AnimateCssAnimationEngine() : new WebAnimationsAPI();

  return {
    commandFactory,
    triggerFactory,
    router,
    modalService,
    animationEngine: selectedAnimationEngine,
    engineType: animationEngine,
  };
};

// Global interaction engine instance
let interactionEngineInstance: ReturnType<typeof initializeInteractionEngine> | null = null;
let activeCleanup: (() => void) | null = null;

export const getInteractionEngine = (
  animationEngine: "webAnimations" | "animateCss" = "webAnimations"
) => {
  if (!interactionEngineInstance || interactionEngineInstance.engineType !== animationEngine) {
    interactionEngineInstance = initializeInteractionEngine(animationEngine);
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
    animationEngine: engine.animationEngine,
  });

  return activeCleanup;
};

export const cleanupActiveInteractions = () => {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }
};
