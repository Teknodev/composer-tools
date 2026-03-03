// src/composer-tools/interaction-engine/index.ts

// Core
export * from './core/types';
export { AnimationEngineResolver } from './core/AnimationEngineResolver';

// Utils
export { Logger, LogLevel, logger } from './utils/Logger';
export type { LogContext, LogEntry, LogHandler } from './utils/Logger';
export {
  ErrorHandler,
  InteractionEngineError,
  ValidationError,
  ExecutionError,
  ConfigurationError,
  FactoryError,
  errorHandler,
} from './utils/ErrorHandler';
export type { ErrorRecoveryStrategy } from './utils/ErrorHandler';
export {
  ResourceManager,
  WeakResourceManager,
} from './utils/ResourceManager';
export type { Disposable, Pausable } from './utils/ResourceManager';
export {
  PerformanceMonitor,
  performanceMonitor,
  measurePerformance,
  measureAsyncPerformance,
} from './utils/PerformanceMonitor';
export type {
  PerformanceMetrics,
  PerformanceStats,
  PerformanceThreshold,
} from './utils/PerformanceMonitor';

// Commands
export { OpenModalCommand } from './commands/OpenModalCommand';
export { NavigateCommand } from './commands/NavigateCommand';
export { AnimateCommand } from './commands/AnimateCommand';
export { LoopEffectCommand } from './commands/LoopEffectCommand';
export type { LoopEffectConfig } from './commands/LoopEffectCommand';

// Triggers
export * from './triggers/TriggerStrategy';
export { PressTrigger } from './triggers/PressTrigger';
export { HoverTrigger } from './triggers/HoverTrigger';
export { ClickTrigger } from './triggers/ClickTrigger';
export { LoadTrigger } from './triggers/LoadTrigger';
export type { LoadTriggerConfig } from './triggers/LoadTrigger';
export { OnAppearTrigger } from './triggers/OnAppearTrigger';
export type { OnAppearConfig } from './triggers/OnAppearTrigger';
export { OnScrollTrigger } from './triggers/OnScrollTrigger';
export type { OnScrollConfig } from './triggers/OnScrollTrigger';

// Models
export { Interaction } from './models/Interaction';

// Composite
export { ElementInteractions } from './composite/ElementInteractions';

// Animation Engines
export { WebAnimationsAPI } from './animations/WebAnimationsAPI';
export { AnimateCssAnimationEngine } from './animations/AnimateCssAnimationEngine';

// Services
export { SimpleRouter } from './services/SimpleRouter';
export { BasicModalService } from './services/ModalService';

// Factories
export { InteractionFactory } from './factory/InteractionFactory';
export { TriggerFactory } from './factory/TriggerFactory';

// Schema & Validation
export * from './schema/InteractionSchema';
export { ConfigValidator } from './schema/ConfigValidator';
export type { ValidationResult } from './schema/ConfigValidator';

// Bootstrap
export { bootstrapInteractions } from './bootstrap/InteractionBootstrap';
export type { BootstrapDependencies } from './bootstrap/InteractionBootstrap';
export {
  initializeInteractionEngine,
  getInteractionEngine,
  bootstrapPageInteractions,
  cleanupActiveInteractions,
} from './bootstrap/EngineManager';
