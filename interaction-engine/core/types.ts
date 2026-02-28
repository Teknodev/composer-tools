// src/composer-tools/interaction-engine/core/types.ts
//
// Core interfaces and type definitions for the interaction engine.
// Class implementations are in separate files and re-exported here
// for backward compatibility.

export { BaseInteractionCommand } from './BaseInteractionCommand';
export { BaseAnimationCommand } from './BaseAnimationCommand';
export { originalStyleRegistry } from './StyleRegistry';

// ── Animation Engine Types ────────────────────────────────────────────

/** Supported animation engine identifiers */
export enum AnimationEngineType {
  WebAnimations = 'webAnimations',
  AnimateCss = 'animateCss',
}

/** Default animation engine when none is specified */
export const DEFAULT_ENGINE = AnimationEngineType.WebAnimations;

/** Default animate.css animation name */
export const DEFAULT_ANIMATE_CSS_ANIMATION = 'bounce';

/** Default CSS property for standard property animations */
export const DEFAULT_ANIMATION_PROPERTY = 'opacity';

/** Default animation duration in ms */
export const DEFAULT_ANIMATION_DURATION = 1000;

/** Default loop animation duration in ms */
export const DEFAULT_LOOP_DURATION = 2000;

/** Default animation easing */
export const DEFAULT_EASING = 'ease';

/** Valid CSS animation playback directions */
export const VALID_PLAYBACK_DIRECTIONS = [
  'normal',
  'reverse',
  'alternate',
  'alternate-reverse',
] as const;

export type PlaybackDirection = typeof VALID_PLAYBACK_DIRECTIONS[number];

// ── Typed Config Interfaces ───────────────────────────────────────────

/** Base fields shared by all animation configs */
export interface BaseAnimationConfig {
  engine?: AnimationEngineType | string;
  duration?: number;
  delay?: number;
  easing?: string;
}

/** Config for the `animate` command */
export interface AnimateCommandConfig extends BaseAnimationConfig {
  // Standard property animation
  property?: string;
  value?: any;
  to?: any;
  opacity?: number;
  // Playback
  iterationCount?: number | 'infinite';
  animationDirection?: PlaybackDirection;
  // Animate.css specific
  animateCssAnimation?: string;
  animation?: string;
  animateCssDuration?: number;
  animateCssDelay?: number;
  animateCssDirection?: PlaybackDirection;
  animateCssIterationCount?: number | 'infinite';
  animateCssFillMode?: string;
  fillMode?: string;
  // Loop/transform mode
  loopType?: 'loop' | 'mirror';
  scale?: number;
  rotate?: { mode?: '2D' | '3D'; x?: number; y?: number; z?: number };
  skew?: { x?: number; y?: number };
  offset?: { x?: number; y?: number };
  offScreen?: 'play' | 'pause';
  // Cleanup behaviour
  preserveEndState?: boolean;
  keepEndState?: boolean;
  // Trigger passthrough
  triggerType?: string;
}

/** Config for the `loopEffect` command */
export interface LoopEffectCommandConfig extends BaseAnimationConfig {
  type: 'loop' | 'mirror';
  opacity?: number;
  scale?: number;
  rotate?: { mode?: '2D' | '3D'; x?: number; y?: number; z?: number };
  skew?: { x?: number; y?: number };
  offset?: { x?: number; y?: number };
  offScreen?: 'play' | 'pause';
  transition?: { easing: string; duration: number };
}

/** Config for the `textAnimate` command */
export interface TextAnimateCommandConfig extends BaseAnimationConfig {
  textAnimation: {
    preset: string;
    granularity?: 'character' | 'word' | 'layer' | 'element';
    enterEffect?: Record<string, any>;
    transition?: Record<string, any>;
  };
}

/** Config for the `navigate` command */
export interface NavigateCommandConfig {
  url?: string;
  path?: string;
  target?: '_self' | '_blank';
}

/** Config for the `openModal` command */
export interface OpenModalCommandConfig {
  modalId: string;
  config?: Record<string, any>;
}

/** Discriminated union of all command configs */
export type CommandConfig =
  | AnimateCommandConfig
  | LoopEffectCommandConfig
  | TextAnimateCommandConfig
  | NavigateCommandConfig
  | OpenModalCommandConfig;

/**
 * Context passed to interaction commands during execution
 */
export interface InteractionContext {
  /** Target HTML element for the interaction */
  target: HTMLElement;
  /** Configuration object for the interaction */
  config: InteractionConfig;
  /** Trigger type for the interaction */
  triggerType: string;
  /** Optional router service for navigation */
  router?: Router;
  /** Optional modal service for modal operations */
  modalService?: ModalService;
  /** Metadata about the interaction execution */
  metadata?: InteractionMetadata;
}

/**
 * Metadata about an interaction execution
 */
export interface InteractionMetadata {
  /** Unique identifier for this execution */
  executionId: string;
  /** Timestamp when execution started */
  startTime: number;
  /** Element ID if available */
  elementId?: string;
  /** Interaction ID if available */
  interactionId?: string;
  /** Priority level */
  priority?: number;
}

/**
 * Base configuration interface for interactions
 */
export interface InteractionConfig extends Record<string, any> {
  /** Delay before execution (ms) */
  delay?: number;
  /** Debounce delay (ms) */
  debounceDelay?: number;
  /** Priority level (higher = earlier execution) */
  priority?: number;
  /** Whether to queue executions or skip */
  queueable?: boolean;
  /** Use requestAnimationFrame for execution */
  useRAF?: boolean;
}

/**
 * Router service interface for navigation
 */
export interface Router {
  navigate(path: string): void | Promise<void>;
  getCurrentPath?(): string;
  isSupported?(): boolean;
}

/**
 * Modal service interface
 */
export interface ModalService {
  open(modalId: string, config?: Record<string, any>): void | Promise<void>;
  close?(modalId: string): void | Promise<void>;
  isOpen?(modalId: string): boolean;
}

/**
 * Result from animation execution
 */
export interface AnimationResult {
  cancel?: () => void;
  finished?: Promise<void>;
  animation?: Animation;
}

/**
 * Animation engine interface
 */
export interface AnimationEngine {
  animate(
    element: HTMLElement,
    properties: Record<string, any>,
    duration: number,
    easing?: string
  ): Promise<AnimationResult | void>;
  cancelAll?(element: HTMLElement): void;
  isSupported?(): boolean;
}

/**
 * Interface for interaction commands
 */
export interface InteractionCommand {
  execute(context: InteractionContext): Promise<void> | void;
  cleanup?(context: InteractionContext): void | Promise<void>;
  undo?(context: InteractionContext): void;
  validate?(config: InteractionConfig): void;
}
