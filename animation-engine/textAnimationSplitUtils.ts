/**
 * textAnimationSplitUtils
 *
 * Text-splitting, fragment-wrapping, stagger-direction resolution,
 * and the scramble-text effect helper — extracted from TextAnimationEngine
 * for clarity and reuse.
 */

import {
  TextAnimationSplitMode,
  StaggerDirection,
  TimingConfig,
} from "../../types/animation-interaction";

// ── Fragment wrapper styles ───────────────────────────────────────────────

export const FRAGMENT_BASE_STYLE  = "display:inline-block;white-space:pre-wrap;margin:0;padding:0;line-height:inherit;vertical-align:baseline;";
export const FRAGMENT_WORD_STYLE  = "display:inline-block;white-space:pre-wrap;margin:0;padding:0;line-height:inherit;vertical-align:baseline;";
export const FRAGMENT_LINE_STYLE  = "display:block;";

// ── Scramble alphabet ─────────────────────────────────────────────────────

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

// ── Text splitting ────────────────────────────────────────────────────────

/**
 * Split the text content of an element into `<span>` fragments based on mode.
 * **Mutates the element**: replaces its innerHTML with the fragments.
 * Returns an empty array (and leaves element untouched) if there's no text.
 *
 * Safety: if the element's DOM already consists of fragment `<span>` wrappers
 * from a previous animation that was not cleaned up, we read the raw
 * textContent (which ignores the wrapper markup) and proceed normally.
 * This prevents nested re-wrapping on repeated triggers.
 */
export function splitText(
  element: HTMLElement,
  mode: TextAnimationSplitMode
): HTMLSpanElement[] {
  const text = element.textContent || "";
  if (!text.trim()) return [];

  const fragments: HTMLSpanElement[] = [];
  // Track positions where <br> elements should be inserted to preserve
  // multi-line layout in character/word modes.
  const lineBreaks: { afterIndex: number }[] = [];

  if (mode === "entire") {
    const span = document.createElement("span");
    span.style.cssText = FRAGMENT_BASE_STYLE;
    span.textContent = text;
    fragments.push(span);
  } else if (mode === "characters") {
    for (const char of text) {
      if (char === "\n") {
        // Explicit newlines become <br> elements.
        lineBreaks.push({ afterIndex: fragments.length });
        continue;
      }
      const span = document.createElement("span");
      // No inline style yet — plain inline spans wrap identically to
      // the original text, which we need for line-break measurement.
      span.textContent = char;
      fragments.push(span);
    }
  } else if (mode === "words") {
    const words = text.split(/(\s+)/);
    for (const word of words) {
      if (!word) continue;
      if (/\n/.test(word)) {
        lineBreaks.push({ afterIndex: fragments.length });
        continue;
      }
      const span = document.createElement("span");
      // No inline style yet — measured as plain inline first.
      span.textContent = word;
      fragments.push(span);
    }
  } else if (mode === "lines") {
    const lines = text.split(/\n/);
    for (const line of lines) {
      const span = document.createElement("span");
      span.style.cssText = FRAGMENT_LINE_STYLE;
      span.textContent = line || "\u00A0";
      fragments.push(span);
    }
  }

  if (fragments.length === 0) return [];

  // ── Style normalization (character & word modes) ────────────────────
  // For character and word modes we need display:inline-block for
  // animation transforms, but inline-block + non-breaking spaces changes
  // word-wrapping behaviour.
  if (mode === "characters" || mode === "words") {
    // Apply animation-ready styles on each fragment.
    for (const frag of fragments) {
      frag.style.cssText =
        mode === "words" ? FRAGMENT_WORD_STYLE : FRAGMENT_BASE_STYLE;
      if (mode === "characters") {
        if (frag.textContent === " ") frag.textContent = "\u00A0";
      } else {
        frag.textContent = (frag.textContent || "").replace(/ /g, "\u00A0");
      }
    }
  }

  // ── DOM insertion ───────────────────────────────────────────────────
  // Replace element content with fragment spans.
  // After whitespace fragments, insert a <wbr> (word-break opportunity) so
  // line-wrapping works naturally despite fragments using display:inline-block
  // with non-breaking spaces that would otherwise prevent word-boundary breaks.
  element.innerHTML = "";
  for (let i = 0; i < fragments.length; i++) {
    const frag = fragments[i];
    element.appendChild(frag);
    if (
      (mode === "characters" && frag.textContent === "\u00A0") ||
      (mode === "words" && /^\u00A0+$/.test(frag.textContent ?? ""))
    ) {
      element.appendChild(document.createElement("wbr"));
    }
  }

  return fragments;
}

// ── Stagger direction resolver ────────────────────────────────────────────

/**
 * Compute a stagger rank for each fragment.
 * `result[i]` = the stagger position for cluster index `i`.
 */
export function resolveStaggerIndices(
  total: number,
  direction: StaggerDirection = "start-to-end"
): number[] {
  const indices = Array.from({ length: total }, (_, i) => i);

  if (direction === "end-to-start") {
    indices.reverse();
  } else if (direction === "random") {
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
  }

  const ranks = new Array<number>(total);
  for (let rank = 0; rank < total; rank++) {
    ranks[indices[rank]] = rank;
  }
  return ranks;
}

// ── Scramble effect helper ────────────────────────────────────────────────

export interface ScrambleResult {
  intervals: ReturnType<typeof setInterval>[];
  promises: Promise<void>[];
}

/**
 * Run the scramble-text effect on fragment spans.
 * Each character is randomised via setInterval and resolved after scrambleDuration.
 */
export function playScramble(
  fragments: HTMLSpanElement[],
  originalChars: string[],
  timing: TimingConfig,
  staggerDelay: number
): ScrambleResult {
  const intervals: ReturnType<typeof setInterval>[] = [];
  const promises: Promise<void>[] = [];
  const scrambleDuration = Math.max(200, timing.duration * 0.6);

  fragments.forEach((span, i) => {
    const realChar = originalChars[i];
    if (!realChar || realChar.trim() === "") return;

    const startTime = performance.now() + timing.delay + i * staggerDelay;
    const endTime = startTime + scrambleDuration;

    const promise = new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        const now = performance.now();
        if (now < startTime) return;
        if (now >= endTime) {
          span.textContent = realChar;
          clearInterval(interval);
          resolve();
          return;
        }
        span.textContent =
          SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }, 40);

      intervals.push(interval);
    });

    promises.push(promise);
  });

  return { intervals, promises };
}
