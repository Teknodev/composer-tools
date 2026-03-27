/**
 * AnimateCssAdapter
 *
 * Plays Animate.css animations using the Web Animations API (element.animate())
 * with keyframes extracted from the Animate.css stylesheet at runtime.
 *
 * This approach supports multiple concurrent Animate.css animations on the
 * same element without CSS cascade conflicts — each animation is a separate
 * WAAPI Animation instance identified by its interactionId.
 *
 * Integrates with the TransformStateManager:
 *  - **Write-lock**: when the first Animate.css animation starts on an element,
 *    the TSM is locked so that concurrent web-api interactions queue their
 *    transform updates instead of writing to the DOM. On the last animation's
 *    end the TSM is unlocked and queued updates are flushed.
 *  - **Accumulated transforms**: baked into extracted keyframes at play time
 *    so the preset animation layers on top of existing visual state.
 *  - **Pause / Resume**: full WAAPI pause/resume support so the priority
 *    manager can suspend Animate.css animations when a higher-priority
 *    interaction starts.
 */

import { AnimateCssConfig, TimingConfig } from "../../types/animation-interaction";
import { transformStateManager, TransformValues, TransformStateManager } from "./TransformStateManager";

// ── Keyframe extraction cache ──────────────────────────────────────────────

/**
 * Cache of extracted keyframes from Animate.css @keyframes rules.
 * Keyed by animation name (e.g. "fadeIn", "bounce").
 */
const keyframeCache = new Map<string, Keyframe[]>();

/**
 * Extract keyframes for a given animation name from all loaded stylesheets.
 * Results are cached for subsequent lookups.
 */
export function getAnimateCssKeyframes(animationName: string): Keyframe[] | null {
  if (keyframeCache.has(animationName)) {
    return keyframeCache.get(animationName)!;
  }

  for (const sheet of document.styleSheets) {
    try {
      const rules = sheet.cssRules || sheet.rules;
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (
          rule instanceof CSSKeyframesRule &&
          rule.name === animationName
        ) {
          const keyframes = extractKeyframesFromRule(rule);
          keyframeCache.set(animationName, keyframes);
          return keyframes;
        }
      }
    } catch {
      // Cross-origin stylesheet — skip
    }
  }

  return null;
}

/**
 * Convert a CSSKeyframesRule into a Keyframe[] array suitable for element.animate().
 */
function extractKeyframesFromRule(rule: CSSKeyframesRule): Keyframe[] {
  const keyframes: Keyframe[] = [];

  for (let i = 0; i < rule.cssRules.length; i++) {
    const kfRule = rule.cssRules[i] as CSSKeyframeRule;
    const keyframe: Keyframe = {};

    // Parse the offset from the keyText (e.g. "0%", "50%", "100%", "from", "to")
    const keyText = kfRule.keyText.trim();
    if (keyText === "from") {
      keyframe.offset = 0;
    } else if (keyText === "to") {
      keyframe.offset = 1;
    } else {
      // Handle comma-separated values like "0%, 100%"
      const parts = keyText.split(",").map((s) => s.trim());
      // For simplicity, take the first value as the offset
      const percent = parseFloat(parts[0]);
      if (!isNaN(percent)) {
        keyframe.offset = percent / 100;
      }
    }

    // Extract all declared CSS properties from the keyframe
    const style = kfRule.style;
    for (let j = 0; j < style.length; j++) {
      const prop = style[j];
      const value = style.getPropertyValue(prop);
      // Convert kebab-case to camelCase for WAAPI
      const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      (keyframe as any)[camelProp] = value;
    }

    keyframes.push(keyframe);
  }

  // Sort by offset
  keyframes.sort((a, b) => (a.offset ?? 0) - (b.offset ?? 0));

  return keyframes;
}

// ── Active animation tracking ──────────────────────────────────────────────

interface ActiveCssAnimationEntry {
  /** The WAAPI Animation instance */
  animation: Animation;
  /** The promise resolver to call when this animation finishes */
  resolve: () => void;
  /** The promise rejector to call when this animation is cancelled */
  reject: (reason: any) => void;
}

/**
 * Per-element registry of all currently active Animate.css animations.
 * Keyed by interactionId.
 */
const activeAnimations = new WeakMap<HTMLElement, Map<string, ActiveCssAnimationEntry>>();

function getOrCreateRegistry(el: HTMLElement): Map<string, ActiveCssAnimationEntry> {
  let map = activeAnimations.get(el);
  if (!map) {
    map = new Map();
    activeAnimations.set(el, map);
  }
  return map;
}

// ── Public API ─────────────────────────────────────────────────────────────

export class AnimateCssAdapter {
  /**
   * Play an Animate.css animation on an element using the Web Animations API.
   * Returns a promise that resolves when the animation completes.
   *
   * Multiple concurrent animations are fully supported — each is an independent
   * WAAPI Animation instance.
   *
   * **Write-lock coordination**: when the first animation starts on an element
   * the TransformStateManager is locked. While locked, any interaction-driven
   * `applyTransform` / `removeTransform` calls are queued instead of writing
   * to the DOM.  When the last concurrent animation finishes the lock is
   * released and queued operations are replayed, preventing transform conflicts.
   *
   * @param accumulatedTransform  Optional accumulated transform state from
   *        preceding interactions. When provided, the accumulated transform is
   *        baked into each extracted keyframe so the Animate.css animation
   *        runs on top of the existing visual state.
   */
  play(
    element: HTMLElement,
    interactionId: string,
    config: AnimateCssConfig,
    timing: TimingConfig,
    accumulatedTransform?: TransformValues
  ): { promise: Promise<void>; animation: Animation } {
    const registry = getOrCreateRegistry(element);

    // If the same interaction is already playing, cancel it first
    if (registry.has(interactionId)) {
      this.cancel(element, interactionId);
    }

    // Defensively remove any leftover Animate.css CSS classes that may have
    // been added by external code or SSR.  This ensures a clean slate.
    const classesToRemove = [...element.classList].filter(
      (c) => c === "animate__animated" || c.startsWith("animate__") && c !== "animate__animated"
    );
    for (const cls of classesToRemove) {
      element.classList.remove(cls);
    }

    // Force a reflow so the browser fully deregisters any previous animation
    // effect before we create a new one.  Without this, rapid re-fires of the
    // same animate.css animation may be silently ignored.
    void element.offsetWidth;

    // Extract keyframes from the Animate.css stylesheet
    const rawKeyframes = getAnimateCssKeyframes(config.animationName);
    if (!rawKeyframes || rawKeyframes.length === 0) {
      // Fallback: if we can't extract keyframes, resolve immediately
      console.warn(
        `AnimateCssAdapter: Could not find @keyframes "${config.animationName}" in stylesheets.`
      );
      // Return a no-op Animation stub
      const noopAnim = element.animate([], { duration: 0 });
      return { promise: Promise.resolve(), animation: noopAnim };
    }

    // ── Lock the TransformStateManager for this element ─────────────────
    // Ref-counted: safe for multiple concurrent Animate.css animations.
    transformStateManager.lockElement(element);

    // Deep-clone keyframes so we don't mutate the cache
    const keyframes = rawKeyframes.map((kf) => ({ ...kf }));

    // Prefix each keyframe's transform with accumulated state so the
    // Animate.css animation runs on top of previous transforms.
    const accumulatedStr = accumulatedTransform
      ? TransformStateManager.buildTransformString(accumulatedTransform)
      : "";
    if (accumulatedStr) {
      for (const kf of keyframes) {
        const existing = (kf as any).transform;
        if (existing) {
          // Prepend accumulated transform before the Animate.css transform
          (kf as any).transform = `${accumulatedStr} ${existing}`;
        } else {
          // Keyframe has no transform — inject accumulated state to avoid reset
          (kf as any).transform = accumulatedStr;
        }
      }
    }

    // Build WAAPI options from timing config.
    // Use fill: "forwards" (never "both") to avoid backwards-fill projecting
    // the first keyframe values and visually overriding concurrent animations.
    // Use composite: "replace" (the default) because accumulated transforms are
    // already baked into the keyframes above — using "add" would double them.
    const resolvedFill = timing.fillMode === "both" ? "forwards" as const
      : (timing.fillMode || "none");
    const options: KeyframeAnimationOptions = {
      duration: timing.duration ?? 1000,
      easing: timing.easing || "ease",
      delay: timing.delay ?? 0,
      iterations:
        timing.iterationCount === "infinite"
          ? Infinity
          : (Number(timing.iterationCount) || 1),
      direction: timing.direction || "normal",
      fill: resolvedFill,
    };

    const animation = element.animate(keyframes, options);

    const promise = new Promise<void>((resolve, reject) => {
      const entry: ActiveCssAnimationEntry = {
        animation,
        resolve,
        reject,
      };

      registry.set(interactionId, entry);

      const onFinish = () => {
        this.removeEntry(element, interactionId, false);
      };

      animation.addEventListener("finish", onFinish, { once: true });
      animation.addEventListener("cancel", () => {
        // If cancelled externally (not through our cancel()), clean up
        if (registry.has(interactionId)) {
          this.removeEntry(element, interactionId, true);
        }
      }, { once: true });
    });

    return { promise, animation };
  }

  /**
   * Pause an active Animate.css animation.
   * Uses WAAPI `.pause()` — fully supported on all modern browsers.
   */
  pause(element: HTMLElement, interactionId: string): void {
    const registry = activeAnimations.get(element);
    const entry = registry?.get(interactionId);
    if (entry) {
      try { entry.animation.pause(); } catch { /* noop */ }
    }
  }

  /**
   * Resume a paused Animate.css animation.
   */
  resume(element: HTMLElement, interactionId: string): void {
    const registry = activeAnimations.get(element);
    const entry = registry?.get(interactionId);
    if (entry) {
      try { entry.animation.play(); } catch { /* noop */ }
    }
  }

  /**
   * Called internally when an animation finishes or is cancelled.
   * Commits final styles to inline and cleans up, preserving accumulated
   * transform state from previous interactions.
   */
  removeEntry(element: HTMLElement, interactionId: string, isCancel: boolean): void {
    const registry = activeAnimations.get(element);
    const entry = registry?.get(interactionId);
    if (!entry) return;

    // Commit final styles into element.style, then cancel the animation
    // so that its fill effect no longer shadows inline styles.
    if (!isCancel) {
      try {
        entry.animation.commitStyles();
      } catch {
        // commitStyles can throw if element is disconnected
      }
    }
    try {
      entry.animation.cancel();
    } catch {
      // Already finished or cancelled
    }

    // Remove from registry
    registry!.delete(interactionId);

    // ── Unlock the TransformStateManager ────────────────────────────────
    // Ref-counted: only truly unlocks when the last concurrent animation ends.
    // On unlock, queued applyTransform/removeTransform calls are replayed.
    // Must unlock BEFORE recompose so that queued web-api contributions are
    // present in TSM when recompose reads the merged transform values.
    transformStateManager.unlockElement(element);

    // Re-sync element.style.transform with TransformStateManager's tracked
    // values (including any just-replayed queued operations from the unlock
    // above).  commitStyles() writes a computed matrix; recompose() overwrites
    // it with the correct decomposed function notation so the next animation's
    // keyframes (built from TSM values) match the inline state exactly.
    transformStateManager.recompose(element);

    // Resolve or reject the promise
    if (isCancel) {
      const err = new Error("Animation cancelled");
      err.name = "AbortError";
      entry.reject(err);
    } else {
      entry.resolve();
    }
  }

  /**
   * Cancel an active Animate.css animation immediately.
   */
  cancel(element: HTMLElement, interactionId: string): void {
    this.removeEntry(element, interactionId, true);
  }

  /**
   * Cancel all active Animate.css animations on an element.
   */
  cancelAll(element: HTMLElement): void {
    const registry = activeAnimations.get(element);
    if (!registry) return;
    // Collect IDs first to avoid mutation during iteration
    const ids = [...registry.keys()];
    for (const id of ids) {
      this.removeEntry(element, id, true);
    }
  }
}

export const animateCssAdapter = new AnimateCssAdapter();
