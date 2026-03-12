/**
 * InteractionManager
 *
 * The central orchestrator that wires triggers → animation engines → priority.
 * Scoped to a single component section's DOM subtree.
 *
 * Usage:
 *   const mgr = new InteractionManager();
 *   mgr.initialize(rootElement, componentId, animationInteractions, breakpoint);
 *   // … later, when interactions change or on unmount:
 *   mgr.destroy();
 */

import {
  AnimationInteraction,
  AnimationInteractions,
  Interaction,
  Interactions,
  AnimationConfig,
  AnimateActionConfig,
  TimingConfig,
  TargetConfig,
  HoverTrigger,
  FocusTrigger,
  TriggerType,
  WebAnimationProperty,
  migrateInteraction,
  getAnimateFields,
} from "../../types/interaction";
import { triggerEngine } from "./TriggerEngine";
import { webAnimationEngine, AnimationHandle } from "./WebAnimationEngine";
import { animateCssAdapter } from "./AnimateCssAdapter";
import { textAnimationEngine } from "./TextAnimationEngine";
import {
  animationPriorityManager,
  PriorityAnimationController,
} from "./AnimationPriorityManager";
import { transformStateManager, TransformValues } from "./TransformStateManager";
import { TriggerCleanup } from "./triggers/ITriggerStrategy";
import { PROPERTY_DEFAULT_UNITS } from "./constants";
import { ModalActionHandler } from "./ModalActionHandler";
import { NavigateActionHandler } from "./NavigateActionHandler";
import { detectSelectorSpecificity } from "./selector-utils";

// ── Baseline Style Store ───────────────────────────────────────────────────

/**
 * Captures and restores the inline styles of elements before state-based
 * interactions (Hover / Focus) begin.  When the interaction is interrupted
 * (e.g. mouseleave before hover-enter animation finishes) the element can
 * be reverted to its pre-animation appearance.
 *
 * Only inline styles are captured because the animation engine commits final
 * values via `commitStyles()` which writes to `element.style`.
 */
const BASELINE_STYLE_PROPS = [
  "transform",
  "opacity",
  "filter",
  "width",
  "height",
] as const;

interface BaselineSnapshot {
  cssText: string;
  props: Record<string, string>;
}

class BaselineStyleStore {
  private store = new WeakMap<HTMLElement, BaselineSnapshot>();

  /**
   * Capture the element's current inline styles.  Idempotent — will not
   * overwrite an existing snapshot so that the *original* baseline is
   * preserved even across rapid re-enters.
   *
   * Only inline values are stored — no computed-style fallback.  When
   * a property has no inline value the empty string is recorded so that
   * restore() / smoothRevertToBaseline() will call removeProperty(),
   * letting the element fall back to its CSS-defined (responsive) value
   * instead of a stale computed pixel value.
   */
  capture(el: HTMLElement): void {
    if (this.store.has(el)) return;
    const props: Record<string, string> = {};
    for (const prop of BASELINE_STYLE_PROPS) {
      props[prop] = el.style.getPropertyValue(prop);
    }
    this.store.set(el, {
      cssText: el.style.cssText,
      props,
    });
  }

  /**
   * Restore the element's inline styles to the previously captured baseline
   * and remove the snapshot.
   */
  restore(el: HTMLElement): void {
    const snap = this.store.get(el);
    if (!snap) return;
    // Restore each tracked property — avoids overwriting unrelated inline styles
    // that may have been set by other systems.
    for (const prop of BASELINE_STYLE_PROPS) {
      const original = snap.props[prop];
      if (original) {
        el.style.setProperty(prop, original);
      } else {
        el.style.removeProperty(prop);
      }
    }
    this.store.delete(el);
  }

  has(el: HTMLElement): boolean {
    return this.store.has(el);
  }

  /**
   * Read the snapshot without deleting it.  Used by the smooth-revert
   * logic to apply baseline values while keeping the snapshot available
   * for rapid re-enter cycles.
   */
  get(el: HTMLElement): BaselineSnapshot | undefined {
    return this.store.get(el);
  }

  clear(el: HTMLElement): void {
    this.store.delete(el);
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────

const TRANSFORM_PROPS = new Set([
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "skewX",
  "skewY",
]);

/** Default duration (ms) for the CSS-transition based smooth revert to baseline */
const DEFAULT_REVERT_DURATION_MS = 250;
/** Easing for the smooth revert transition */
const DEFAULT_REVERT_EASING = "ease-out";

/**
 * Derive a smooth-revert transition duration from the interactions in a group.
 * Uses 40 % of the shortest animation duration, clamped to [150, 500] ms.
 */
function deriveRevertDuration(interactions: Interaction[]): number {
  if (interactions.length === 0) return DEFAULT_REVERT_DURATION_MS;
  const durations = interactions.map((i) => {
    const fields = getAnimateFields(i);
    return fields ? fields.timing.duration : 1000;
  });
  const shortest = Math.min(...durations);
  return Math.max(150, Math.min(Math.round(shortest * 0.4), 500));
}

/**
 * Given a WebAnimationProperty and a raw value, resolve into a string with units.
 * Mirrors the same logic in WebAnimationEngine but kept local to avoid coupling.
 */
function resolveValueForAccumulation(
  prop: WebAnimationProperty,
  raw: string | number
): string {
  const unit = prop.unit ?? PROPERTY_DEFAULT_UNITS[prop.property] ?? "";
  if (typeof raw === "number") return `${raw}${unit}`;
  if (/[a-z%]$/i.test(String(raw))) return String(raw);
  return `${raw}${unit}`;
}

/**
 * Forward-compute what the accumulated TransformValues will be after an
 * interaction's animation finishes, assuming it runs to completion.
 * For web-api animations this updates `accumulated` in-place with the
 * resolved "to" values of any transform sub-properties.
 * For animate-css animations the accumulated state passes through unchanged
 * (attention-seeker effects end at identity transforms).
 */
function advanceAccumulatedState(
  accumulated: TransformValues,
  config: AnimationConfig
): void {
  if (config.engine !== "web-api") return;
  for (const prop of config.properties) {
    if (TRANSFORM_PROPS.has(prop.property)) {
      const val = resolveValueForAccumulation(prop, prop.to);
      (accumulated as any)[prop.property] = val;
    }
  }
}

export class InteractionManager {
  private cleanups: TriggerCleanup[] = [];
  private trackedElements = new Set<HTMLElement>();
  private destroyed = false;

  /** Stores pre-animation inline styles for state-based triggers (hover/focus) */
  private baselineStore = new BaselineStyleStore();

  /**
   * Tracks active enter-animation IDs per element so that they can be
   * cancelled when the state ends (mouseleave / blur) before completion.
   */
  private activeEnterAnimations = new WeakMap<HTMLElement, Set<string>>();

  /**
   * Tracks active smooth-revert CSS transition cleanup timeouts per element.
   * If a new enter cycle begins while a revert is in progress the revert is
   * cancelled and the element freezes at its current mid-transition position.
   */
  private activeRevertTimeouts = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

  /**
   * Monotonically increasing cycle counter per element.  Each enter/leave
   * state transition increments the count.  Stale `.finished` promise
   * callbacks compare their captured cycle and bail if it changed — this
   * prevents a completed animation from an old cycle from triggering a
   * restore that overwrites the current cycle's animation.
   */
  private animationCycle = new WeakMap<HTMLElement, number>();

  /**
   * Elements whose smooth-revert was interrupted by a re-enter (hover spam).
   * When set, the next enter animation uses implicit "from" (single keyframe)
   * so WAAPI interpolates from the current computed state instead of snapping
   * to the configured "from" value.
   */
  private interruptedRevert = new WeakSet<HTMLElement>();

  /**
   * Tracks pending setTimeout IDs for delay-scheduled animations.
   * Cleared on destroy() and when state-based triggers (hover/focus) leave.
   */
  private pendingDelayTimeouts = new Set<ReturnType<typeof setTimeout>>();

  /**
   * Tracks pending delay timeout IDs scoped per trigger-group.
   * Each attachGrouped*() call creates its own Set so mouseleave/blur
   * only cancels timeouts belonging to that specific trigger group.
   */
  private groupedDelayTimeouts: Set<Set<ReturnType<typeof setTimeout>>> = new Set();

  /**
   * Tracks active animation IDs from non-state triggers (click, page-load,
   * scroll-into-view, mouse-enter, mouse-leave) per element. Used to detect
   * when all non-state animations on an element have completed so the
   * baseline can be restored.
   */
  private activeNonStateAnimations = new WeakMap<HTMLElement, Set<string>>();

  /**
   * Tracks non-state interaction IDs whose animation has already completed
   * on a given element and whose trigger has `replay: false`.  When the
   * trigger fires again the fire() callback checks this set and skips
   * the animation so it keeps its final state instead of replaying.
   */
  private completedNonReplayAnimations = new WeakMap<HTMLElement, Set<string>>();

  /**
   * Elements whose text-animation enter was still running when a
   * mouseleave / blur fired.  Text animations cannot be cancelled
   * mid-run, so the leave handler skips their revert.  When the
   * text animation finishes naturally, the `.finished` handler
   * checks this set and skips the normal smooth-revert (the text
   * engine already restored the original HTML + cssText).
   */
  private deferredTextAnimationReverts = new WeakSet<HTMLElement>();

  // ── Public ──────────────────────────────────────────────────────────────

  /**
   * Set up all triggers / animations for a component's sections.
   *
   * @param rootElement    The root DOM node of the component section.
   * @param componentId    The component UUID (used to find auto-generate-* classes).
   * @param interactions   The full AnimationInteractions record (keyed by section).
   * @param isPreviewMode  Defence-in-depth: if false, skip all trigger attachment.
   *                       Callers must opt-in to preview mode.
   */
  initialize(
    rootElement: HTMLElement,
    componentId: string,
    interactions: Interactions,
    isPreviewMode: boolean = true
  ): void {
    this.destroyed = false;

    // Defence-in-depth: only attach triggers in preview mode
    if (!isPreviewMode) return;

    for (const [sectionName, interactionList] of Object.entries(interactions)) {
      if (!interactionList || interactionList.length === 0) continue;

      // Resolve the section element directly from the DOM at init time.
      // Uses document-level query so it works regardless of component tree structure.
      const sectionElement = this.resolveSectionElement(rootElement, componentId, sectionName);
      if (!sectionElement) continue;

      // Migrate legacy interactions and filter to enabled only
      const enabled = interactionList
        .map(migrateInteraction)
        .filter((i) => i.enabled);
      if (enabled.length === 0) continue;

      // Separate non-animate actions: they get simple trigger → dispatch wiring
      const nonAnimateInteractions = enabled.filter(
        (i) => i.action?.type && i.action.type !== "animate"
      );
      const animateInteractions = enabled.filter(
        (i) => !i.action?.type || i.action.type === "animate"
      );

      // Wire up non-animate interactions: one trigger per interaction
      for (const interaction of nonAnimateInteractions) {
        const cleanup = triggerEngine.register(
          sectionElement,
          interaction.trigger,
          () => {
            if (this.destroyed) return;
            this.dispatchNonAnimateAction(interaction);
          }
        );
        this.cleanups.push(cleanup);
        this.trackedElements.add(sectionElement);
      }

      // Group animate interactions by trigger type so we register one trigger per type
      const groups = new Map<TriggerType, Interaction[]>();
      for (const interaction of animateInteractions) {
        const type = interaction.trigger.type;
        let group = groups.get(type);
        if (!group) {
          group = [];
          groups.set(type, group);
        }
        group.push(interaction);
      }

      // For each trigger type group, sort by delay and attach a single trigger
      for (const [triggerType, group] of groups) {
        if (this.destroyed) return;

        // Sort interactions by delay ascending — this is the execution order
        const sorted = [...group].sort((a, b) => {
          const aDelay = getAnimateFields(a)?.timing.delay ?? 0;
          const bDelay = getAnimateFields(b)?.timing.delay ?? 0;
          return aDelay - bDelay;
        });

        // scroll-progress is special — each needs its own trigger registration
        if (triggerType === "scroll-progress") {
          for (const interaction of sorted) {
            this.attachScrollProgressInteraction(sectionElement, interaction);
          }
          continue;
        }

        // layer-in-view: each interaction registers one trigger per resolved
        // target element so the IntersectionObserver watches the actual
        // animation target (the layer) instead of the whole section.
        if (triggerType === "layer-in-view") {
          for (const interaction of sorted) {
            this.attachLayerInViewInteraction(rootElement, sectionElement, interaction);
          }
          continue;
        }

        // Hover and Focus are two-state triggers — use grouped attachment
        if (triggerType === "hover") {
          this.attachGroupedHoverInteractions(sectionElement, sorted);
          continue;
        }

        if (triggerType === "focus") {
          this.attachGroupedFocusInteractions(sectionElement, sorted);
          continue;
        }

        // Standard triggers (page-load, click, scroll-into-view, mouse-enter,
        // mouse-leave, blur): register one trigger that fires all interactions
        // in delay-sorted order.
        const triggerConfig = sorted[0].trigger;

        // Prepare interaction entries with animation config — target resolution
        // is deferred to trigger time so we always query the live DOM.
        const interactionEntries = sorted.map((interaction) => {
          const af = getAnimateFields(interaction)!;
          return {
            interaction,
            animFields: af,
          };
        });

        const cleanup = triggerEngine.register(
          sectionElement,
          triggerConfig,
          () => {
            if (this.destroyed) return;

            // Resolve targets dynamically from the live DOM at trigger time.
            // This ensures selectors match even for elements rendered after init.
            const resolvedEntries = interactionEntries.map(({ interaction, animFields }) => ({
              interaction,
              targets: this.resolveTargets(sectionElement, animFields.target),
              animFields,
            }));

            const allTargetElements = new Set<HTMLElement>();
            for (const { targets } of resolvedEntries) {
              for (const el of targets) allTargetElements.add(el);
            }

            // Capture baseline styles before any animation runs (idempotent)
            for (const el of allTargetElements) {
              this.baselineStore.capture(el);
            }

            // Schedule each interaction independently using setTimeout so that
            // delayed animations are created only when they actually start.
            // This avoids WAAPI backwards-fill from later animations projecting
            // their starting keyframe values and hiding earlier animations.
            for (const el of allTargetElements) {
              // Pre-compute the accumulated transform chain so each deferred
              // callback knows what transform state to animate from.
              const accumulatedSnapshots: TransformValues[] = [];
              let running = transformStateManager.getCurrentValues(el);
              for (const { interaction, animFields } of resolvedEntries) {
                accumulatedSnapshots.push({ ...running });
                advanceAccumulatedState(running, animFields.animation);
              }

              resolvedEntries.forEach(({ interaction, targets, animFields }, idx) => {
                if (!targets.includes(el)) return;
                const delay = animFields.timing.delay ?? 0;
                const snapshot = accumulatedSnapshots[idx];

                const fire = () => {
                  if (this.destroyed) return;

                  // Replay guard: skip if this non-replay interaction
                  // already completed on this element.
                  const trigger = interaction.trigger;
                  if ("replay" in trigger && trigger.replay === false) {
                    const done = this.completedNonReplayAnimations.get(el);
                    if (done?.has(interaction.id)) return;
                  }

                  // Element-wide guard: if ANY non-state animation is already
                  // running on this element, ignore the re-trigger so every
                  // current animation plays fully without interruption.
                  const running = this.activeNonStateAnimations.get(el);
                  if (running && running.size > 0) return;

                  // Use live accumulated transform when available — falls back
                  // to pre-computed snapshot for resilience.
                  const liveAccumulated = transformStateManager.getCurrentValues(el);
                  const hasLiveState = Object.keys(liveAccumulated).length > 0;
                  const accumulated = hasLiveState ? liveAccumulated : snapshot;

                  // Track this non-state animation BEFORE starting so the
                  // "running" state is visible to any synchronous re-trigger.
                  this.trackNonStateAnimation(el, interaction.id);

                  // Override timing to remove delay — the setTimeout handled it
                  const timingNoDelay: TimingConfig = { ...animFields.timing, delay: 0 };
                  this.playAnimationWithConfig(
                    el,
                    interaction.id,
                    animFields.animation,
                    timingNoDelay,
                    interaction.priority,
                    accumulated,
                    animFields.target.selector,
                    undefined,
                    animFields.removeOnComplete
                  );
                };

                if (delay <= 0) {
                  fire();
                } else {
                  const tid = setTimeout(fire, delay);
                  this.pendingDelayTimeouts.add(tid);
                }
              });
            }
          }
        );

        this.cleanups.push(cleanup);
        this.trackedElements.add(sectionElement);
      }
    }
  }

  /**
   * Tear down everything: detach triggers, cancel animations, clear state.
   */
  destroy(): void {
    this.destroyed = true;

    // Clear all pending delay-scheduled animations
    for (const tid of this.pendingDelayTimeouts) {
      clearTimeout(tid);
    }
    this.pendingDelayTimeouts.clear();

    for (const cleanup of this.cleanups) {
      cleanup.detach();
    }
    this.cleanups = [];

    for (const el of this.trackedElements) {
      // Cancel any in-progress smooth-revert transitions
      this.cancelSmoothRevert(el);
      this.completedNonReplayAnimations.delete(el);
      webAnimationEngine.cancelAll(el);
      animateCssAdapter.cancelAll(el);
      textAnimationEngine.cancelAll(el);
      animationPriorityManager.clear(el);
      transformStateManager.clear(el);
      triggerEngine.unregisterAll(el);
      // Restore baseline styles before releasing the snapshot, so elements
      // return to their pre-animation appearance on teardown.
      this.baselineStore.restore(el);
    }
    this.trackedElements.clear();
  }

  /**
   * Re-initialize with updated interactions.
   */
  refresh(
    rootElement: HTMLElement,
    componentId: string,
    interactions: Interactions,
    isPreviewMode: boolean = true
  ): void {
    this.destroy();
    this.initialize(rootElement, componentId, interactions, isPreviewMode);
  }

  /**
   * Cancel all active animations on an element and smoothly transition it
   * back to its pre-animation baseline styles.
   *
   * Safe to call at any time — no-ops if the element has no stored snapshot.
   * Does not change the interaction trigger system, event handling, or
   * animation scheduling — only performs cleanup.
   */
  restoreBaseSnapshot(el: HTMLElement): void {
    if (!this.baselineStore.has(el)) return;

    // Cancel any in-progress smooth revert first
    this.cancelSmoothRevert(el);

    // Capture computed state while animations are still visually active
    const frozenState = this.captureComputedState(el);

    // Cancel all active animations across every engine
    this.cancelEnterAnimations(el);
    webAnimationEngine.cancelAll(el);
    animateCssAdapter.cancelAll(el);
    textAnimationEngine.cancelAll(el);
    animationPriorityManager.clear(el);

    // Clear non-state animation tracking
    this.activeNonStateAnimations.delete(el);

    // Smoothly revert to baseline
    this.smoothRevertToBaseline(el, frozenState, DEFAULT_REVERT_DURATION_MS);
  }

  /**
   * Restore all tracked elements to their baseline styles.
   * Batches reads before writes to avoid layout thrashing across elements.
   */
  restoreAllBaseSnapshots(): void {
    // Phase 1: batch-read all computed states while animations are active
    const snapshots = new Map<HTMLElement, Record<string, string>>();
    for (const el of this.trackedElements) {
      if (!this.baselineStore.has(el)) continue;
      this.cancelSmoothRevert(el);
      snapshots.set(el, this.captureComputedState(el));
    }

    // Phase 2: cancel and revert
    for (const [el, frozenState] of snapshots) {
      this.cancelEnterAnimations(el);
      webAnimationEngine.cancelAll(el);
      animateCssAdapter.cancelAll(el);
      textAnimationEngine.cancelAll(el);
      animationPriorityManager.clear(el);
      this.activeNonStateAnimations.delete(el);
      this.smoothRevertToBaseline(el, frozenState, DEFAULT_REVERT_DURATION_MS);
    }
  }

  // ── Internal: action dispatch ───────────────────────────────────────────

  /**
   * Dispatch a non-animate action (open-modal, navigate) when a trigger fires.
   */
  private dispatchNonAnimateAction(interaction: Interaction): void {
    switch (interaction.action.type) {
      case "open-modal":
        ModalActionHandler.execute(interaction.action);
        break;
      case "navigate":
        NavigateActionHandler.execute(interaction.action);
        break;
      default:
        console.warn(
          `[InteractionManager] Unknown action type: ${(interaction.action as any).type}`
        );
    }
  }

  // ── Internal: grouped trigger attachment ────────────────────────────────

  /**
   * Attach a single hover trigger that fires all hover interactions
   * in delay-sorted order on mouseenter, and smoothly reverts to
   * baseline on mouseleave.
   */
  private attachGroupedHoverInteractions(
    sectionElement: HTMLElement,
    sortedInteractions: Interaction[]
  ): void {
    // Prepare interaction entries — target resolution is deferred to trigger time
    const entries = sortedInteractions.map((interaction) => {
      const af = getAnimateFields(interaction)!;
      return {
        interaction,
        animFields: af,
      };
    });

    // Use the first interaction's trigger config
    const hoverTrigger = sortedInteractions[0].trigger as HoverTrigger;

    // Pre-compute smooth-revert duration from the interaction timings
    const revertDurationMs = deriveRevertDuration(sortedInteractions);

    // Scoped timeout set for this trigger group only
    const groupTimeouts = new Set<ReturnType<typeof setTimeout>>();
    this.groupedDelayTimeouts.add(groupTimeouts);

    // Track the last set of resolved targets so mouseleave can revert them
    let lastResolvedTargets = new Set<HTMLElement>();

    const cleanup = triggerEngine.register(
      sectionElement,
      hoverTrigger,
      () => {
        // ── mouseenter ──────────────────────────────────────────────
        if (this.destroyed) return;

        // Increment animation cycle — invalidates stale .finished callbacks
        // from the previous enter/leave cycle on these elements.
        for (const el of lastResolvedTargets) {
          this.animationCycle.set(el, (this.animationCycle.get(el) ?? 0) + 1);
        }

        // Resolve targets dynamically from the live DOM at trigger time
        const resolvedEntries = entries.map(({ interaction, animFields }) => ({
          interaction,
          targets: this.resolveTargets(sectionElement, animFields.target),
          animFields,
        }));

        const allTargetElements = new Set<HTMLElement>();
        for (const { targets } of resolvedEntries) {
          for (const el of targets) allTargetElements.add(el);
        }
        lastResolvedTargets = allTargetElements;

        // Cancel any in-progress smooth revert from a previous mouseleave
        for (const el of allTargetElements) {
          this.cancelSmoothRevert(el);
        }

        // Capture baseline styles before any enter animation runs
        for (const el of allTargetElements) {
          this.baselineStore.capture(el);
        }

        // Schedule enter animations per-element with setTimeout for delays
        for (const el of allTargetElements) {
          const enterIds = this.getOrCreateEnterIds(el);
          // If this element's revert was interrupted, use implicit "from"
          // so WAAPI interpolates from the current position (no snap).
          const wasInterrupted = this.interruptedRevert.has(el);
          this.interruptedRevert.delete(el);

          // Pre-compute accumulated transform chain
          const accumulatedSnapshots: TransformValues[] = [];
          let running = transformStateManager.getCurrentValues(el);
          for (const { interaction, animFields } of resolvedEntries) {
            accumulatedSnapshots.push({ ...running });
            advanceAccumulatedState(running, animFields.animation);
          }

          resolvedEntries.forEach(({ interaction, targets, animFields }, idx) => {
            if (!targets.includes(el)) return;
            const enterId = interaction.id + "-enter";
            enterIds.add(enterId);
            const delay = animFields.timing.delay ?? 0;
            const snapshot = accumulatedSnapshots[idx];

            const fire = () => {
              if (this.destroyed) return;
              // Race fix: bail if this enter cycle was superseded
              if (!enterIds.has(enterId)) return;
              groupTimeouts.delete(tid);
              this.pendingDelayTimeouts.delete(tid);
              const liveAccumulated = transformStateManager.getCurrentValues(el);
              const hasLive = Object.keys(liveAccumulated).length > 0;
              const accumulated = hasLive ? liveAccumulated : snapshot;
              const timingNoDelay: TimingConfig = { ...animFields.timing, delay: 0 };
              this.playAnimationWithConfig(
                el,
                enterId,
                animFields.animation,
                timingNoDelay,
                interaction.priority,
                accumulated,
                animFields.target.selector,
                wasInterrupted,
                animFields.removeOnComplete
              );
            };

            let tid: ReturnType<typeof setTimeout>;
            if (delay <= 0) {
              fire();
            } else {
              tid = setTimeout(fire, delay);
              groupTimeouts.add(tid);
              this.pendingDelayTimeouts.add(tid);
            }
          });
        }
      },
      // ── mouseleave ────────────────────────────────────────────────
      () => {
        if (this.destroyed) return;

        // Increment animation cycle — invalidates stale .finished callbacks
        for (const el of lastResolvedTargets) {
          this.animationCycle.set(el, (this.animationCycle.get(el) ?? 0) + 1);
        }

        // Cancel pending delayed enter animations for this trigger group only
        // (animations that haven't started yet should not run after leave)
        this.clearGroupDelayTimeouts(groupTimeouts);

        // Use the targets that were resolved during the last mouseenter
        const allTargetElements = lastResolvedTargets;

        for (const el of allTargetElements) {
          // Capture current visual state while animations still apply
          const frozenState = this.captureComputedState(el);
          // Cancel running enter animations on this element
          this.cancelEnterAnimations(el);
          // Smooth revert to baseline from the frozen visual state
          this.smoothRevertToBaseline(el, frozenState, revertDurationMs);
        }
      }
    );

    this.cleanups.push(cleanup);
    this.trackedElements.add(sectionElement);
  }

  /**
   * Attach a single focus trigger that fires all focus interactions
   * in delay-sorted order on focus, and smoothly reverts on blur.
   */
  private attachGroupedFocusInteractions(
    sectionElement: HTMLElement,
    sortedInteractions: Interaction[]
  ): void {
    // Prepare interaction entries — target resolution is deferred to trigger time
    const entries = sortedInteractions.map((interaction) => {
      const af = getAnimateFields(interaction)!;
      return {
        interaction,
        animFields: af,
      };
    });

    const focusTrigger = sortedInteractions[0].trigger as FocusTrigger;

    // Pre-compute smooth-revert duration from the interaction timings
    const revertDurationMs = deriveRevertDuration(sortedInteractions);

    // Scoped timeout set for this trigger group only
    const groupTimeouts = new Set<ReturnType<typeof setTimeout>>();
    this.groupedDelayTimeouts.add(groupTimeouts);

    // Track the last set of resolved targets so blur can revert them
    let lastResolvedTargets = new Set<HTMLElement>();

    const cleanup = triggerEngine.register(
      sectionElement,
      focusTrigger,
      () => {
        // ── focus ───────────────────────────────────────────────────
        if (this.destroyed) return;

        // Increment animation cycle — invalidates stale .finished callbacks
        for (const el of lastResolvedTargets) {
          this.animationCycle.set(el, (this.animationCycle.get(el) ?? 0) + 1);
        }

        // Resolve targets dynamically from the live DOM at trigger time
        const resolvedEntries = entries.map(({ interaction, animFields }) => ({
          interaction,
          targets: this.resolveTargets(sectionElement, animFields.target),
          animFields,
        }));

        const allTargetElements = new Set<HTMLElement>();
        for (const { targets } of resolvedEntries) {
          for (const el of targets) allTargetElements.add(el);
        }
        lastResolvedTargets = allTargetElements;

        // Cancel any in-progress smooth revert from a previous blur
        for (const el of allTargetElements) {
          this.cancelSmoothRevert(el);
        }

        // Capture baseline styles before any enter animation runs
        for (const el of allTargetElements) {
          this.baselineStore.capture(el);
        }

        // Schedule enter animations per-element with setTimeout for delays
        for (const el of allTargetElements) {
          const enterIds = this.getOrCreateEnterIds(el);
          // If this element's revert was interrupted, use implicit "from"
          // so WAAPI interpolates from the current position (no snap).
          const wasInterrupted = this.interruptedRevert.has(el);
          this.interruptedRevert.delete(el);

          // Pre-compute accumulated transform chain
          const accumulatedSnapshots: TransformValues[] = [];
          let running = transformStateManager.getCurrentValues(el);
          for (const { interaction, animFields } of resolvedEntries) {
            accumulatedSnapshots.push({ ...running });
            advanceAccumulatedState(running, animFields.animation);
          }

          resolvedEntries.forEach(({ interaction, targets, animFields }, idx) => {
            if (!targets.includes(el)) return;
            const enterId = interaction.id + "-enter";
            enterIds.add(enterId);
            const delay = animFields.timing.delay ?? 0;
            const snapshot = accumulatedSnapshots[idx];

            const fire = () => {
              if (this.destroyed) return;
              // Race fix: bail if this enter cycle was superseded
              if (!enterIds.has(enterId)) return;
              groupTimeouts.delete(tid);
              this.pendingDelayTimeouts.delete(tid);
              const liveAccumulated = transformStateManager.getCurrentValues(el);
              const hasLive = Object.keys(liveAccumulated).length > 0;
              const accumulated = hasLive ? liveAccumulated : snapshot;
              const timingNoDelay: TimingConfig = { ...animFields.timing, delay: 0 };
              this.playAnimationWithConfig(
                el,
                enterId,
                animFields.animation,
                timingNoDelay,
                interaction.priority,
                accumulated,
                animFields.target.selector,
                wasInterrupted,
                animFields.removeOnComplete
              );
            };

            let tid: ReturnType<typeof setTimeout>;
            if (delay <= 0) {
              fire();
            } else {
              tid = setTimeout(fire, delay);
              groupTimeouts.add(tid);
              this.pendingDelayTimeouts.add(tid);
            }
          });
        }
      },
      // ── blur ──────────────────────────────────────────────────────
      () => {
        if (this.destroyed) return;

        // Increment animation cycle — invalidates stale .finished callbacks
        for (const el of lastResolvedTargets) {
          this.animationCycle.set(el, (this.animationCycle.get(el) ?? 0) + 1);
        }

        // Cancel pending delayed enter animations for this trigger group only
        // (animations that haven't started yet should not run after blur)
        this.clearGroupDelayTimeouts(groupTimeouts);

        // Use the targets that were resolved during the last focus event
        const allTargetElements = lastResolvedTargets;

        for (const el of allTargetElements) {
          // Capture current visual state while animations still apply
          const frozenState = this.captureComputedState(el);
          // Cancel running enter animations on this element
          this.cancelEnterAnimations(el);
          // Smooth revert to baseline from the frozen visual state
          this.smoothRevertToBaseline(el, frozenState, revertDurationMs);
        }
      }
    );

    this.cleanups.push(cleanup);
    this.trackedElements.add(sectionElement);
  }

  // ── Internal: individual attachment ──────────────────────────────────────

  private attachLayerInViewInteraction(
    rootElement: HTMLElement,
    sectionElement: HTMLElement,
    interaction: Interaction
  ): void {
    const af = getAnimateFields(interaction);
    if (!af) return;

    const trigger = interaction.trigger as { targetSelector?: string };
    const layerSelector = (trigger.targetSelector ?? "").trim();

    // Resolve the observed element: the "layer" whose viewport entry fires
    // the animation.  Falls back to the section element when no selector
    // is provided or when the selector doesn't match.
    //
    // Cascading lookup mirrors resolveSectionElement: try the local subtree
    // first (rootElement may not yet be attached to document at init time),
    // then fall back to the full document.
    let observedElement: HTMLElement = sectionElement;
    if (layerSelector) {
      const safeSelector = this.toSafeSelector(layerSelector);
      try {
        const matched =
          (sectionElement.matches(safeSelector) ? sectionElement : null) ??
          sectionElement.querySelector<HTMLElement>(safeSelector) ??
          rootElement.querySelector<HTMLElement>(safeSelector) ??
          document.querySelector<HTMLElement>(safeSelector);
        if (matched) {
          observedElement = matched;
        }
      } catch { /* invalid selector — fall back to section */ }
    }

    // The animation targets — the elements that actually get animated.
    const targetElements = this.resolveTargets(sectionElement, af.target);

    for (const el of targetElements) {
      this.baselineStore.capture(el);
      this.trackedElements.add(el);
    }

    // Register the trigger on the *observed* element so the
    // IntersectionObserver watches the layer, not the animation targets.
    const cleanup = triggerEngine.register(
      observedElement,
      interaction.trigger,
      () => {
        if (this.destroyed) return;

        for (const el of targetElements) {
          // Replay guard
          if ("replay" in interaction.trigger && interaction.trigger.replay === false) {
            const done = this.completedNonReplayAnimations.get(el);
            if (done?.has(interaction.id)) return;
          }

          // Element-wide guard
          const running = this.activeNonStateAnimations.get(el);
          if (running && running.size > 0) continue;

          this.baselineStore.capture(el);
          const accumulated = transformStateManager.getCurrentValues(el);
          this.trackNonStateAnimation(el, interaction.id);

          this.playAnimationWithConfig(
            el,
            interaction.id,
            af.animation,
            af.timing,
            interaction.priority,
            accumulated,
            af.target.selector,
            undefined,
            af.removeOnComplete
          );
        }
      }
    );

    this.cleanups.push(cleanup);
    this.trackedElements.add(observedElement);
  }

  private attachScrollProgressInteraction(
    sectionElement: HTMLElement,
    interaction: Interaction
  ): void {
    const af = getAnimateFields(interaction);
    if (!af) return;

    // scroll-progress requires frame-by-frame scrubbing via the Web Animations API.
    // Animate.css is time-based and cannot be interpolated by scroll position.
    if (af.animation.engine !== "web-api") {
      console.warn(
        `[InteractionManager] scroll-progress only supports the web-api engine. ` +
        `Skipping interaction "${interaction.name}" (engine: ${af.animation.engine}).`
      );
      return;
    }

    // For scroll-progress, we use progress-based WAAPI playback
    const targetElements = this.resolveTargets(
      sectionElement,
      af.target
    );

    let handles: AnimationHandle[] = [];
    let initialized = false;

    // Capture baseline styles before scroll-progress animations start
    for (const el of targetElements) {
      this.baselineStore.capture(el);
    }

    const cleanup = triggerEngine.register(
      sectionElement,
      interaction.trigger,
      (progress?: number) => {
        if (this.destroyed || progress == null) return;

        if (!initialized) {
          // Create paused animations and seek to progress
          for (const el of targetElements) {
            if (af.animation.engine === "web-api") {
              const handle = webAnimationEngine.play(
                el,
                interaction.id,
                af.animation,
                { ...af.timing, iterationCount: 1, fillMode: "both" }
              );
              handle.pause();
              handles.push(handle);
            }
          }
          initialized = true;
        }

        // Scrub animations to the current progress
        for (const handle of handles) {
          const duration =
            typeof af.timing.duration === "number"
              ? af.timing.duration
              : 1000;
          if (handle.animation.currentTime !== undefined) {
            handle.animation.currentTime = progress * duration;
          }
        }
      }
    );

    this.cleanups.push(cleanup);
    this.trackedElements.add(sectionElement);
    targetElements.forEach((el) => this.trackedElements.add(el));
  }

  private playAnimation(
    element: HTMLElement,
    interaction: Interaction,
    accumulatedTransform?: TransformValues
  ): void {
    const af = getAnimateFields(interaction);
    if (!af) return;
    this.playAnimationWithConfig(
      element,
      interaction.id,
      af.animation,
      af.timing,
      interaction.priority,
      accumulatedTransform,
      af.target.selector,
      undefined,
      af.removeOnComplete
    );
  }

  private playAnimationWithConfig(
    element: HTMLElement,
    interactionId: string,
    config: AnimationConfig,
    timing: TimingConfig,
    priority: number,
    accumulatedTransform?: TransformValues,
    targetSelector?: string,
    useImplicitFrom?: boolean,
    removeOnComplete?: boolean
  ): void {
    this.trackedElements.add(element);

    // Snapshot the current animation cycle so .finished callbacks can detect
    // whether this element has since moved to a new enter/leave cycle.
    const cycle = this.animationCycle.get(element) ?? 0;

    // Compute selector-specificity for priority manager
    const specificity = detectSelectorSpecificity(targetSelector ?? "");

    if (config.engine === "web-api") {
      const cancelRef = { cancelled: false };

      const handle = webAnimationEngine.play(
        element,
        interactionId,
        config,
        timing,
        accumulatedTransform,
        useImplicitFrom
      );

      const controller: PriorityAnimationController = {
        pause: () => handle.pause(),
        resume: () => handle.resume(),
        cancel: () => {
          cancelRef.cancelled = true;
          handle.cancel();
        },
      };

      animationPriorityManager.onAnimationStart(
        element,
        interactionId,
        priority,
        controller,
        specificity
      );

      handle.finished
        .then(() => {
          if (cancelRef.cancelled) return;
          animationPriorityManager.onAnimationEnd(element, interactionId);
          if ((this.animationCycle.get(element) ?? 0) !== cycle) return;
          this.onNonStateAnimationEnd(element, interactionId, timing.fillMode, removeOnComplete);
        })
        .catch(() => {
          // Animation was cancelled — clean up tracking so the
          // interaction can be re-triggered after cancellation.
          this.cleanupNonStateTracking(element, interactionId);
        });
    } else if (config.engine === "animate-css") {
      // Animate.css now supports real pause/resume via WAAPI
      const cancelRef = { cancelled: false };

      const { promise: cssPromise, animation: cssAnimation } =
        animateCssAdapter.play(element, interactionId, config, timing, accumulatedTransform);

      const controller: PriorityAnimationController = {
        pause: () => {
          animateCssAdapter.pause(element, interactionId);
        },
        resume: () => {
          animateCssAdapter.resume(element, interactionId);
        },
        cancel: () => {
          cancelRef.cancelled = true;
          animateCssAdapter.cancel(element, interactionId);
        },
      };

      animationPriorityManager.onAnimationStart(
        element,
        interactionId,
        priority,
        controller,
        specificity
      );

      cssPromise
        .then(() => {
          if (cancelRef.cancelled) return;
          animationPriorityManager.onAnimationEnd(element, interactionId);
          if ((this.animationCycle.get(element) ?? 0) !== cycle) return;
          this.onNonStateAnimationEnd(element, interactionId, timing.fillMode, removeOnComplete);
        })
        .catch(() => {
          this.cleanupNonStateTracking(element, interactionId);
        });
    } else if (config.engine === "text-animation") {
      // Text animation: operates on text content instead of the whole element.
      // Fail-safe: skip if the element has no text content.
      if (!element.textContent?.trim()) return;

      // Element-wide guard: if any text animation is already running on
      // this element, reject the trigger so the current animation can
      // finish without interruption or DOM corruption from overlapping splits.
      if (textAnimationEngine.isPlayingAny(element)) {
        this.cleanupNonStateTracking(element, interactionId);
        return;
      }

      const handle = textAnimationEngine.play(
        element,
        interactionId,
        config,
        timing
      );

      const cancelRef2 = { cancelled: false };

      const controller: PriorityAnimationController = {
        pause: () => handle.pause(),
        resume: () => handle.resume(),
        cancel: () => {
          cancelRef2.cancelled = true;
          handle.cancel();
        },
      };

      animationPriorityManager.onAnimationStart(
        element,
        interactionId,
        priority,
        controller,
        specificity
      );

      handle.finished
        .then(() => {
          if (cancelRef2.cancelled) return;

          // Always clean up priority — the animation genuinely finished.
          animationPriorityManager.onAnimationEnd(element, interactionId);

          if ((this.animationCycle.get(element) ?? 0) !== cycle) return;

          // If leave was triggered while text animation was running,
          // the text engine already restored innerHTML + cssText —
          // just clean up tracking, no smooth revert needed.
          if (this.deferredTextAnimationReverts.has(element)) {
            this.deferredTextAnimationReverts.delete(element);
            this.cleanupNonStateTracking(element, interactionId);
            return;
          }

          // TextAnimationEngine already restored innerHTML + style.cssText
          // so skip smoothRevertToBaseline — just clean up tracking.
          this.cleanupNonStateTracking(element, interactionId);

          if (removeOnComplete) {
            const ids = this.activeNonStateAnimations.get(element);
            if (!ids || ids.size === 0) {
              element.style.display = "none";
            }
          }
        })
        .catch(() => {
          animationPriorityManager.onAnimationEnd(element, interactionId);
          this.cleanupNonStateTracking(element, interactionId);
        });
    }
  }

  // ── Delay-timeout helpers ──────────────────────────────────────────────

  /**
   * Cancel all pending delay-scheduled animation timeouts.
   * Called on destroy() to ensure no stale timeouts remain.
   */
  private clearPendingDelayTimeouts(): void {
    for (const tid of this.pendingDelayTimeouts) {
      clearTimeout(tid);
    }
    this.pendingDelayTimeouts.clear();
    for (const group of this.groupedDelayTimeouts) {
      group.clear();
    }
  }

  /**
   * Cancel pending delay-scheduled timeouts for a specific trigger group.
   * Called on mouseleave / blur to only cancel timeouts belonging to that
   * trigger group, avoiding interference with unrelated groups.
   */
  private clearGroupDelayTimeouts(groupTimeouts: Set<ReturnType<typeof setTimeout>>): void {
    for (const tid of groupTimeouts) {
      clearTimeout(tid);
      this.pendingDelayTimeouts.delete(tid);
    }
    groupTimeouts.clear();
  }

  // ── Smooth-revert helpers ────────────────────────────────────────────────

  /**
   * Read an element's current *computed* style for all baseline properties.
   * Must be called while WAAPI animations are still active — after cancel()
   * the animation effect is removed and computed values revert to inline.
   */
  private captureComputedState(el: HTMLElement): Record<string, string> {
    const computed = getComputedStyle(el);
    const values: Record<string, string> = {};
    for (const prop of BASELINE_STYLE_PROPS) {
      values[prop] = computed.getPropertyValue(prop);
    }
    return values;
  }

  /**
   * Cancel an in-progress smooth-revert CSS transition on an element.
   * Freezes the element at its current mid-transition visual position so
   * a new enter animation can start from there without a snap.
   */
  private cancelSmoothRevert(el: HTMLElement): void {
    const timeout = this.activeRevertTimeouts.get(el);
    if (timeout == null) return;

    clearTimeout(timeout);
    this.activeRevertTimeouts.delete(el);

    // Mark this element as having been interrupted mid-revert so the
    // next enter animation can use implicit "from" (single keyframe)
    // and avoid a visual snap to the configured start values.
    this.interruptedRevert.add(el);

    // Flush any pending rAF transform writes that could overwrite the
    // frozen inline styles we're about to set.
    transformStateManager.flushNow(el);

    // Freeze at current mid-transition position: read computed values
    // BEFORE removing the transition, then bake them into inline styles.
    const computed = getComputedStyle(el);
    for (const prop of BASELINE_STYLE_PROPS) {
      const val = computed.getPropertyValue(prop);
      if (val) {
        el.style.setProperty(prop, val);
      }
    }

    // Remove the temporary transition so future animations aren't affected
    el.style.removeProperty("transition");
  }

  /**
   * Smoothly transition an element back to its baseline (pre-animation)
   * styles using a temporary CSS transition instead of an instant snap.
   *
   * Flow:
   * 1. Write the `frozenState` (mid-animation computed values) into inline
   *    styles so the element holds its current visual position.
   * 2. Apply a CSS `transition` on all baseline properties.
   * 3. Force a reflow so the browser registers the "from" values.
   * 4. Write baseline values — the CSS transition animates to them.
   * 5. After the transition ends, clean up the temporary `transition`
   *    property and release the baseline snapshot.
   *
   * @param frozenState  Computed property values captured *before* the
   *                     WAAPI animation was cancelled.
   * @param durationMs   Transition duration in milliseconds.
   */
  private smoothRevertToBaseline(
    el: HTMLElement,
    frozenState: Record<string, string>,
    durationMs: number
  ): void {
    const snap = this.baselineStore.get(el);
    if (!snap) return;

    // Race fix: clear any previous revert timeout still pending so two
    // cleanup callbacks never race against each other.
    const prevTimeout = this.activeRevertTimeouts.get(el);
    if (prevTimeout != null) {
      clearTimeout(prevTimeout);
      this.activeRevertTimeouts.delete(el);
    }

    // 1. Clear transform-state-manager contributions so they don't interfere
    //    with the inline-style driven transition.
    transformStateManager.clear(el);

    // 2. Freeze the element at its current (mid-animation) visual position
    //    by writing the captured computed values into inline styles.
    for (const prop of BASELINE_STYLE_PROPS) {
      const val = frozenState[prop];
      if (val && val !== "none" && val !== "") {
        el.style.setProperty(prop, val);
      }
    }

    // 3. Apply a temporary CSS transition on all baseline properties
    const transitionStr = BASELINE_STYLE_PROPS
      .map((p) => `${p} ${durationMs}ms ${DEFAULT_REVERT_EASING}`)
      .join(", ");
    el.style.transition = transitionStr;

    // 4. Force a synchronous reflow so the browser captures the "from"
    //    values before we set the "to" values in the next step.
    void el.offsetHeight;

    // 5. Apply baseline values — this triggers the CSS transition
    for (const prop of BASELINE_STYLE_PROPS) {
      const original = snap.props[prop];
      if (original) {
        el.style.setProperty(prop, original);
      } else {
        el.style.removeProperty(prop);
      }
    }

    // 6. Schedule cleanup after the transition completes.  A timeout is
    //    more reliable than transitionend (which may not fire if the
    //    element is removed from the DOM or if the values didn't change).
    //    NOTE: Snapshot is NOT cleared here — it must survive across rapid
    //    re-trigger cycles so capture() never overwrites the original
    //    baseline with a mid-animation state.  Released only on destroy().
    const cleanup = () => {
      el.style.removeProperty("transition");
      transformStateManager.clear(el);
      this.activeRevertTimeouts.delete(el);
    };
    const timeoutId = setTimeout(cleanup, durationMs + 50);
    this.activeRevertTimeouts.set(el, timeoutId);
  }

  // ── Non-state animation tracking helpers ─────────────────────────────────

  /**
   * Register an animation ID as a non-state-trigger animation on an element.
   */
  private trackNonStateAnimation(el: HTMLElement, interactionId: string): void {
    let ids = this.activeNonStateAnimations.get(el);
    if (!ids) {
      ids = new Set();
      this.activeNonStateAnimations.set(el, ids);
    }
    ids.add(interactionId);
  }

  /**
   * Remove a non-state animation ID from tracking. Called on cancellation
   * (`.catch`) so the interaction can be re-triggered after the animation
   * is cancelled (e.g. by destroy() or priority cancellation).
   */
  private cleanupNonStateTracking(el: HTMLElement, interactionId: string): void {
    const ids = this.activeNonStateAnimations.get(el);
    if (!ids) return;
    ids.delete(interactionId);
    if (ids.size === 0) {
      this.activeNonStateAnimations.delete(el);
    }
  }

  /**
   * Called when a non-state animation completes naturally. Removes the ID
   * from tracking and, if no more non-state animations remain, smoothly
   * reverts the element to its baseline — unless the animation's fillMode
   * indicates that final values should persist.
   */
  private onNonStateAnimationEnd(
    el: HTMLElement,
    interactionId: string,
    fillMode?: string,
    removeOnComplete?: boolean
  ): void {
    const ids = this.activeNonStateAnimations.get(el);
    if (!ids) return;
    ids.delete(interactionId);

    // Track completion for non-replay guard
    let done = this.completedNonReplayAnimations.get(el);
    if (!done) {
      done = new Set();
      this.completedNonReplayAnimations.set(el, done);
    }
    done.add(interactionId);

    // If animations are still running, wait for all to complete
    if (ids.size > 0) return;
    this.activeNonStateAnimations.delete(el);

    // removeOnComplete: hide the element after all animations finish
    if (removeOnComplete) {
      el.style.display = "none";
      return;
    }

    // fillMode "forwards" or "both" means the animation's final values
    // should persist — do not restore baseline in that case.
    if (fillMode === "forwards" || fillMode === "both") return;

    // Don't restore if hover/focus enter animations are still active —
    // the state-based exit handler owns the restore for those.
    const enterIds = this.activeEnterAnimations.get(el);
    if (enterIds && enterIds.size > 0) return;

    // Don't restore if a smooth revert is already in progress
    if (this.activeRevertTimeouts.has(el)) return;

    // Only restore if we have a snapshot
    if (!this.baselineStore.has(el)) return;

    const frozenState = this.captureComputedState(el);
    this.smoothRevertToBaseline(el, frozenState, DEFAULT_REVERT_DURATION_MS);
  }

  // ── Enter-animation tracking helpers ─────────────────────────────────────

  /**
   * Get or create the Set of active enter-animation IDs for an element.
   */
  private getOrCreateEnterIds(el: HTMLElement): Set<string> {
    let ids = this.activeEnterAnimations.get(el);
    if (!ids) {
      ids = new Set();
      this.activeEnterAnimations.set(el, ids);
    }
    return ids;
  }

  /**
   * Cancel all active enter-animations on an element, clean up their
   * transform contributions and priority-manager entries, then clear
   * the tracking set.
   */
  private cancelEnterAnimations(el: HTMLElement): void {
    const ids = this.activeEnterAnimations.get(el);
    if (!ids || ids.size === 0) return;

    let hasRunningTextAnimation = false;

    for (const id of ids) {
      // Text animations must run to completion — do not cancel them.
      // Instead, mark the element so the text-animation .finished handler
      // knows a leave already happened and skips smooth revert.
      if (textAnimationEngine.isPlaying(el, id)) {
        hasRunningTextAnimation = true;
        animationPriorityManager.onAnimationEnd(el, id);
        continue;
      }
      webAnimationEngine.cancel(el, id);
      animateCssAdapter.cancel(el, id);
      animationPriorityManager.onAnimationEnd(el, id);
      transformStateManager.removeTransform(el, id);
    }

    if (hasRunningTextAnimation) {
      this.deferredTextAnimationReverts.add(el);
    }

    ids.clear();
  }

  // ── Section element resolution ───────────────────────────────────────────

  /**
   * Resolve the section DOM element for a component section at the time of call.
   * Searches the full document so it works for dynamically added elements.
   *
   * `sectionName` can be one of two formats:
   *  1. A CSS class key from the component's exported classes (e.g. "container",
   *     "heading"). Resolved via the `auto-generate-{componentId}-{sectionName}`
   *     class convention.
   *  2. An element ID assigned by `assignIdsToElements` (e.g. "compId-heading-1")
   *     or a raw UUID. Resolved via `#id` selector.
   *
   * The method tries the class-based lookup first (fast path for the common
   * case), then falls back to an ID-based lookup.
   */
  private resolveSectionElement(
    rootElement: HTMLElement,
    componentId: string,
    sectionName: string
  ): HTMLElement | null {
    // 1. Try class-based lookup (style-section keys: "container", "heading")
    const targetClassName = `auto-generate-${componentId}-${sectionName}`;
    const byClass =
      rootElement.querySelector<HTMLElement>(`.${CSS.escape(targetClassName)}`) ??
      (rootElement.classList.contains(targetClassName) ? rootElement : null) ??
      document.querySelector<HTMLElement>(`.${CSS.escape(targetClassName)}`);
    if (byClass) return byClass;

    // 2. Try ID-based lookup (elementId keys: "compId-heading-1", UUID, etc.)
    try {
      const byId =
        rootElement.querySelector<HTMLElement>(`#${CSS.escape(sectionName)}`) ??
        document.getElementById(sectionName);
      if (!byId) {
        console.warn(
          "[InteractionManager] Section element not found for component:",
          componentId,
          "section:",
          sectionName
        );
      }
      return byId;
    } catch {
      const fallback = document.getElementById(sectionName);
      if (!fallback) {
        console.warn(
          "[InteractionManager] Section element not found for component:",
          componentId,
          "section:",
          sectionName
        );
      }
      return fallback;
    }
  }

  // ── Target resolution ────────────────────────────────────────────────────

  /**
   * Resolve target elements from the DOM at trigger time using the CSS selector
   * stored in the interaction target config. Falls back to the section element
   * when the selector is empty or matches nothing.
   *
   * This is the core of the DOM-driven approach: targets are always resolved
   * from the live DOM, never from cached references.
   */
  private resolveTargets(
    sectionElement: HTMLElement,
    target: TargetConfig
  ): HTMLElement[] {
    if (!target.selector) return [sectionElement];

    const selector = target.selector.trim();

    // Sanitize simple selectors to attribute-selector equivalents so that
    // IDs / class names starting with digits or containing characters that
    // are invalid in CSS identifiers work reliably with querySelectorAll.
    //   #some-id        → [id="some-id"]
    //   .some-class     → [class~="some-class"]
    // Complex / compound selectors pass through unchanged.
    const safeSelector = this.toSafeSelector(selector);

    try {
      const matched = Array.from(
        document.querySelectorAll<HTMLElement>(safeSelector)
      );
      if (matched.length === 0) {
        console.warn(
          "[InteractionManager] Interaction target not found:",
          selector
        );
        return [sectionElement];
      }
      return matched;
    } catch (error) {
      console.warn(
        "[InteractionManager] Invalid interaction selector:",
        selector,
        error
      );
      return [sectionElement];
    }
  }

  /**
   * Convert simple `#id` or `.class` selectors into attribute-selector
   * equivalents that are immune to CSS identifier escaping issues.
   *
   * - `#foo`  → `[id="foo"]`
   * - `.bar`  → `[class~="bar"]`
   *
   * Compound / complex selectors (containing spaces, combinators, commas,
   * pseudo-classes, etc.) are returned as-is — they are assumed to already
   * be valid CSS.
   */
  private toSafeSelector(selector: string): string {
    // Bare ID selector: only `#` followed by non-whitespace, no combinators
    const bareIdMatch = /^#([^\s>+~,:[\]()]+)$/.exec(selector);
    if (bareIdMatch) {
      return `[id="${bareIdMatch[1].replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
    }

    // Bare class selector: only `.` followed by non-whitespace, no combinators
    const bareClassMatch = /^\.([^\s>+~,:[\]()]+)$/.exec(selector);
    if (bareClassMatch) {
      return `[class~="${bareClassMatch[1].replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
    }

    return selector;
  }
}
