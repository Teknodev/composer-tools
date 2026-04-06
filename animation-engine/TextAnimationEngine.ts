/**
 * TextAnimationEngine
 *
 * Orchestrates the text animation lifecycle:
 *   detect element → read initial styles → prepare animation → run → finalize.
 *
 * Text splitting, keyframe generation, and scramble logic live in dedicated
 * modules (textAnimationSplitUtils, textAnimationPresets) for clarity.
 *
 * Safety: if the target element has no text content the engine returns a no-op
 * handle so non-text elements are never affected.
 */

import {
  TextAnimationConfig,
  TimingConfig,
} from "../../types/animation-interaction";
import type { AnimationHandle } from "./WebAnimationEngine";
import { getAnimateCssKeyframes } from "./AnimateCssAdapter";
import { getEffectKeyframes, buildCustomKeyframes, getFragmentDuration } from "./textAnimationPresets";
import { splitText, resolveStaggerIndices, playScramble } from "./textAnimationSplitUtils";

// ── Active animation registry ─────────────────────────────────────────────

interface ActiveEntry {
  animations: Animation[];
  originalHTML: string;
  originalStyle: string;
  scrambleIntervals: ReturnType<typeof setInterval>[];
  scramblePromises: Promise<void>[];
}

const activeAnimations = new WeakMap<HTMLElement, Map<string, ActiveEntry>>();

function getOrCreateRegistry(el: HTMLElement): Map<string, ActiveEntry> {
  let map = activeAnimations.get(el);
  if (!map) {
    map = new Map();
    activeAnimations.set(el, map);
  }
  return map;
}

// ── Engine ─────────────────────────────────────────────────────────────────

export class TextAnimationEngine {
  /**
   * Play a text animation on an element.
   *
   * Lifecycle:  detect → read → prepare → run → finalize
   */
  play(
    element: HTMLElement,
    interactionId: string,
    config: TextAnimationConfig,
    timing: TimingConfig
  ): AnimationHandle {
    const registry = getOrCreateRegistry(element);

    // ── 1. Detect ──────────────────────────────────────────────────────
    // Element-wide lock: if ANY text animation is already running on this
    // element (regardless of interaction ID), reject the new trigger so
    // the active animation can finish without interruption or DOM corruption.
    if (registry.size > 0) return this.createNoopHandle();

    const text = element.textContent || "";
    if (!text.trim()) return this.createNoopHandle();

    // ── 2. Read ────────────────────────────────────────────────────────
    const originalHTML = element.innerHTML;
    const originalStyle = element.style.cssText;

    // ── 3. Prepare ─────────────────────────────────────────────────────
    // Lock element dimensions before splitting to prevent layout shift.
    // When text is replaced with display:inline-block fragment spans the
    // natural wrapping behaviour can change, collapsing multi-line text
    // into a single line.  Explicit width/height preserve the visual box.
    element.style.boxSizing = "border-box";
    element.style.width = element.offsetWidth + "px";
    element.style.height = element.offsetHeight + "px";

    const fragments = splitText(element, config.splitBy);
    if (fragments.length === 0) {
      element.innerHTML = originalHTML;
      element.style.cssText = originalStyle;
      return this.createNoopHandle();
    }

    // Preserve the element's text-rendering styles on each fragment span.
    // CSS properties like font-size, color, line-height normally inherit,
    // but applying them explicitly ensures consistency even when the original
    // content had inner elements whose styles don't cascade to bare <span>s.
    const cs = getComputedStyle(element);
    const inheritStyle =
      `font-size:${cs.fontSize};font-family:${cs.fontFamily};` +
      `font-weight:${cs.fontWeight};line-height:${cs.lineHeight};` +
      `letter-spacing:${cs.letterSpacing};color:${cs.color};` +
      `text-transform:${cs.textTransform};`;
    for (const span of fragments) {
      span.style.cssText += inheritStyle;
    }

    const originalChars = text.split("");

    // Resolve keyframes: animate.css override > custom > built-in effect
    const keyframes = config.animateCssName
      ? getAnimateCssKeyframes(config.animateCssName)
      : config.effect === "custom" && config.customProperties?.length
        ? buildCustomKeyframes(config.customProperties)
        : null;

    const fragDuration = getFragmentDuration(
      config.effect, timing.duration, fragments.length, config.staggerDelay
    );

    const staggerRanks = resolveStaggerIndices(
      fragments.length, config.staggerDirection ?? "start-to-end"
    );

    // Pre-hide fragments (skip for scramble and animate.css overrides which
    // define their own initial visual state)
    if (config.effect !== "scramble-text" && !config.animateCssName) {
      for (const span of fragments) span.style.opacity = "0";
    }

    // ── 4. Run ─────────────────────────────────────────────────────────
    const allAnimations: Animation[] = [];
    const scrambleIntervals: ReturnType<typeof setInterval>[] = [];

    for (let i = 0; i < fragments.length; i++) {
      const kf = keyframes
        ? (Array.isArray(keyframes[0]) ? keyframes : keyframes.map((k) => ({ ...k })))
        : getEffectKeyframes(config.effect);

      const anim = fragments[i].animate(kf as Keyframe[], {
        duration: fragDuration,
        delay: timing.delay + staggerRanks[i] * config.staggerDelay,
        easing: timing.easing,
        fill: timing.fillMode === "none" ? "none" : "forwards",
        iterations: 1,
        direction: timing.direction,
      });
      allAnimations.push(anim);
    }

    let scramblePromises: Promise<void>[] = [];
    if (config.effect === "scramble-text") {
      const result = playScramble(fragments, originalChars, timing, config.staggerDelay);
      scrambleIntervals.push(...result.intervals);
      scramblePromises = result.promises;
    }

    // Store in registry
    const entry: ActiveEntry = {
      animations: allAnimations,
      originalHTML,
      originalStyle,
      scrambleIntervals,
      scramblePromises,
    };
    registry.set(interactionId, entry);

    // ── 5. Finalize ────────────────────────────────────────────────────
    const allCompletionPromises: Promise<unknown>[] = [
      ...allAnimations.map((a) => a.finished.catch(() => a)),
      ...scramblePromises,
    ];

    const finishedPromise = Promise.all(allCompletionPromises)
      .then(() => {
        if (!registry.has(interactionId)) return allAnimations[0];
        for (const iv of scrambleIntervals) clearInterval(iv);

        if (element.isConnected) {
          // For persistent fill modes, capture the animation's final visual
          // state before restoring the DOM so we can apply it directly to
          // the element — this preserves the visual outcome without leaving
          // split <span> fragments in the DOM.
          const finalStyles =
            timing.fillMode !== "none"
              ? this.computeFinalStyles(allAnimations, fragments)
              : null;

          // Always restore DOM structure to prevent fragment accumulation.
          element.innerHTML = originalHTML;
          element.style.cssText = originalStyle;

          // Re-apply extracted final styles when fillMode persists.
          if (finalStyles) {
            for (const [prop, value] of finalStyles) {
              element.style.setProperty(prop, value);
            }
          }
        }

        registry.delete(interactionId);
        return allAnimations[0];
      })
      .catch(() => {
        if (registry.has(interactionId)) {
          for (const iv of scrambleIntervals) clearInterval(iv);
          if (element.isConnected) {
            element.innerHTML = originalHTML;
            element.style.cssText = originalStyle;
          }
          registry.delete(interactionId);
        }
        return allAnimations[0];
      });

    let cancelled = false;

    const handle: AnimationHandle = {
      animation: allAnimations[0],
      pause: () => allAnimations.forEach((a) => a.pause()),
      resume: () => allAnimations.forEach((a) => a.play()),
      cancel: () => {
        if (cancelled) return;
        cancelled = true;
        for (const iv of scrambleIntervals) clearInterval(iv);
        for (const a of allAnimations) {
          try { a.cancel(); } catch { /* noop */ }
        }
        if (element.isConnected) {
          element.innerHTML = originalHTML;
          element.style.cssText = originalStyle;
        }
        registry.delete(interactionId);
      },
      finished: finishedPromise,
    };

    return handle;
  }

  /** Check whether a specific animation is currently running on an element. */
  isPlaying(element: HTMLElement, interactionId: string): boolean {
    return activeAnimations.get(element)?.has(interactionId) ?? false;
  }

  /** Check whether ANY text animation is currently running on an element. */
  isPlayingAny(element: HTMLElement): boolean {
    const registry = activeAnimations.get(element);
    return !!registry && registry.size > 0;
  }

  /** Cancel a specific text animation on an element and restore original HTML. */
  cancel(element: HTMLElement, interactionId: string): void {
    const registry = activeAnimations.get(element);
    const entry = registry?.get(interactionId);
    if (!entry) return;

    for (const iv of entry.scrambleIntervals) clearInterval(iv);
    for (const anim of entry.animations) {
      try { anim.cancel(); } catch { /* noop */ }
    }
    if (element.isConnected) {
      element.innerHTML = entry.originalHTML;
      element.style.cssText = entry.originalStyle;
    }
    registry!.delete(interactionId);
  }

  /** Cancel all text animations on an element. */
  cancelAll(element: HTMLElement): void {
    const registry = activeAnimations.get(element);
    if (!registry) return;
    for (const [id] of registry) {
      this.cancel(element, id);
    }
    registry.clear();
  }

  /**
   * Extract the animation's final visual styles from the last keyframe of
   * each fragment animation.  Returns [property, value] pairs that should
   * be applied to the element itself when fillMode is "forwards" or "both",
   * so the DOM can be restored (fragment spans removed) while preserving
   * the visual outcome.
   */
  private computeFinalStyles(
    animations: Animation[],
    fragments: HTMLSpanElement[]
  ): [string, string][] | null {
    // Read computed styles from the last fragment that finished — its
    // animated properties represent the "final" state the user expects.
    const lastFragment = fragments[fragments.length - 1];
    if (!lastFragment || !lastFragment.isConnected) return null;

    const cs = getComputedStyle(lastFragment);
    const styles: [string, string][] = [];

    // Only capture properties that text animations commonly modify.
    const opacity = cs.opacity;
    if (opacity && opacity !== "1") styles.push(["opacity", opacity]);

    const transform = cs.transform;
    if (transform && transform !== "none") styles.push(["transform", transform]);

    const filter = cs.filter;
    if (filter && filter !== "none") styles.push(["filter", filter]);

    const visibility = cs.visibility;
    if (visibility && visibility !== "visible") styles.push(["visibility", visibility]);

    return styles.length > 0 ? styles : null;
  }

  private createNoopHandle(): AnimationHandle {
    const noopAnim = new Animation();
    return {
      animation: noopAnim,
      pause: () => {},
      resume: () => {},
      cancel: () => {},
      finished: Promise.resolve(noopAnim),
    };
  }
}

export const textAnimationEngine = new TextAnimationEngine();
