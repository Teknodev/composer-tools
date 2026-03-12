/**
 * AnimationPreview
 *
 * Isolated utility for previewing a single AnimationInteraction on a DOM element
 * from the editor settings panel.  Does NOT activate the full trigger engine —
 * it plays the animation directly, exactly as configured.
 *
 * Key guarantees:
 * - Element returns to its original state after the preview finishes.
 * - Infinite iterations are capped to 1 so the preview always completes.
 * - Any in-flight preview is cancelled before starting a new one.
 * - Transform state is properly snapshotted/restored so no residual styles remain.
 * - Preview IDs use a `__preview__` prefix to avoid collisions with live interactions.
 */

import {
  AnimationInteraction,
  AnimationConfig,
  TimingConfig,
} from "../../types/animation-interaction";
import { webAnimationEngine, AnimationHandle } from "./WebAnimationEngine";
import { animateCssAdapter } from "./AnimateCssAdapter";
import { textAnimationEngine } from "./TextAnimationEngine";
import { transformStateManager } from "./TransformStateManager";

// ── Types ────────────────────────────────────────────────────────────────

export interface PreviewHandle {
  /** Cancel the running preview and restore the element */
  cancel(): void;
  /** Resolves when the preview finishes (or immediately if cancelled) */
  finished: Promise<void>;
}

const PREVIEW_ID_PREFIX = "__preview__";

// ── Implementation ──────────────────────────────────────────────────────

/**
 * Builds a safe timing config for preview:
 * - Caps infinite iterations to 1
 * - Overrides fillMode to "none" so the element reverts after playback
 */
function buildPreviewTiming(timing: TimingConfig): TimingConfig {
  return {
    ...timing,
    iterationCount:
      timing.iterationCount === "infinite" ? 1 : timing.iterationCount,
    fillMode: "none",
  };
}

export class AnimationPreview {
  /** Currently active preview per element (at most one at a time) */
  private static activePreview: {
    element: HTMLElement;
    previewId: string;
    handle?: AnimationHandle;
    cancel(): void;
  } | null = null;

  /**
   * Play a single AnimationInteraction on a target element as an isolated preview.
   * Any previously running preview is cancelled first.
   *
   * @param element      The DOM element to animate
   * @param interaction  The full interaction configuration
   * @returns A PreviewHandle with cancel() and finished promise
   */
  static play(
    element: HTMLElement,
    interaction: AnimationInteraction
  ): PreviewHandle {
    // Cancel any in-flight preview
    AnimationPreview.cancelActive();

    const previewId = `${PREVIEW_ID_PREFIX}${interaction.id}`;
    const previewTiming = buildPreviewTiming(interaction.timing);

    if (interaction.animation.engine === "web-api") {
      return AnimationPreview.playWebApi(
        element,
        previewId,
        interaction.animation,
        previewTiming
      );
    } else if (interaction.animation.engine === "text-animation") {
      return AnimationPreview.playTextAnimation(
        element,
        previewId,
        interaction.animation,
        previewTiming
      );
    } else {
      return AnimationPreview.playAnimateCss(
        element,
        previewId,
        interaction.animation,
        previewTiming
      );
    }
  }

  /**
   * Play the interaction's animation, automatically choosing the right engine.
   */
  static playAuto(
    element: HTMLElement,
    interaction: AnimationInteraction
  ): PreviewHandle {
    return AnimationPreview.play(element, interaction);
  }

  /**
   * Cancel the currently active preview, if any.
   */
  static cancelActive(): void {
    if (AnimationPreview.activePreview) {
      AnimationPreview.activePreview.cancel();
      AnimationPreview.activePreview = null;
    }
  }

  // ── Private: phase helper ────────────────────────────────────────────

  private static playPhase(
    element: HTMLElement,
    previewId: string,
    config: AnimationConfig,
    timing: TimingConfig
  ): PreviewHandle {
    if (config.engine === "web-api") {
      return AnimationPreview.playWebApi(
        element,
        previewId,
        config as AnimationConfig & { engine: "web-api" },
        timing
      );
    } else if (config.engine === "text-animation") {
      return AnimationPreview.playTextAnimation(
        element,
        previewId,
        config as AnimationConfig & { engine: "text-animation" },
        timing
      );
    } else {
      return AnimationPreview.playAnimateCss(
        element,
        previewId,
        config as AnimationConfig & { engine: "animate-css" },
        timing
      );
    }
  }

  // ── Private: Web Animations API preview ──────────────────────────────

  private static playWebApi(
    element: HTMLElement,
    previewId: string,
    config: AnimationConfig & { engine: "web-api" },
    timing: TimingConfig
  ): PreviewHandle {
    const handle = webAnimationEngine.play(element, previewId, config, timing);
    let cancelled = false;

    const cleanup = () => {
      if (cancelled) return;
      cancelled = true;
      handle.cancel();
      // Ensure no transform state is left behind from the preview
      transformStateManager.removeTransform(element, previewId);
    };

    AnimationPreview.activePreview = {
      element,
      previewId,
      handle,
      cancel: cleanup,
    };

    const finished = handle.finished
      .then(() => {
        // Animation completed naturally — remove any residual transform contributions
        transformStateManager.removeTransform(element, previewId);
      })
      .catch(() => {
        // Cancelled or errored — cleanup already handled
      })
      .finally(() => {
        if (AnimationPreview.activePreview?.previewId === previewId) {
          AnimationPreview.activePreview = null;
        }
      });

    return { cancel: cleanup, finished };
  }

  // ── Private: Animate.css preview ─────────────────────────────────────

  private static playAnimateCss(
    element: HTMLElement,
    previewId: string,
    config: AnimationConfig & { engine: "animate-css" },
    timing: TimingConfig
  ): PreviewHandle {
    let cancelled = false;

    const cleanup = () => {
      if (cancelled) return;
      cancelled = true;
      animateCssAdapter.cancel(element, previewId);
    };

    AnimationPreview.activePreview = {
      element,
      previewId,
      cancel: cleanup,
    };

    // animateCssAdapter.play already handles snapshot/restore of transforms
    // and class cleanup internally.
    // play() returns { promise, animation } — chain on promise.
    const { promise: cssPromise } = animateCssAdapter
      .play(element, previewId, config, timing);

    const finished = cssPromise
      .catch(() => {
        // Cancelled — cleanup handled by cancel()
      })
      .finally(() => {
        if (AnimationPreview.activePreview?.previewId === previewId) {
          AnimationPreview.activePreview = null;
        }
      });

    return { cancel: cleanup, finished };
  }

  // ── Private: Text Animation preview ──────────────────────────────────

  private static playTextAnimation(
    element: HTMLElement,
    previewId: string,
    config: AnimationConfig & { engine: "text-animation" },
    timing: TimingConfig
  ): PreviewHandle {
    const handle = textAnimationEngine.play(element, previewId, config, timing);
    let cancelled = false;

    const cleanup = () => {
      if (cancelled) return;
      cancelled = true;
      handle.cancel();
    };

    AnimationPreview.activePreview = {
      element,
      previewId,
      handle,
      cancel: cleanup,
    };

    const finished = handle.finished
      .then(() => {
        // Text animation completed — original HTML already restored by engine
      })
      .catch(() => {
        // Cancelled or errored — cleanup already handled
      })
      .finally(() => {
        if (AnimationPreview.activePreview?.previewId === previewId) {
          AnimationPreview.activePreview = null;
        }
      });

    return { cancel: cleanup, finished };
  }
}
