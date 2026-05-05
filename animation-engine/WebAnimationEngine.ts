/**
 * WebAnimationEngine
 *
 * Wraps the Web Animations API (element.animate()) to play property-based
 * keyframe animations.  Translates the app-level WebAnimationConfig / TimingConfig
 * into WAAPI-compatible keyframes and options.
 *
 * Transform sub-properties are routed through the TransformStateManager so that
 * multiple interactions controlling different sub-properties don't conflict.
 *
 * Supports full 3D transforms: translateX/Y/Z, scale/scaleX/scaleY,
 * rotate/rotateX/rotateY, skewX/skewY.
 */

import {
  WebAnimationConfig,
  WebAnimationProperty,
  TimingConfig,
} from "../../types/animation-interaction";
import {
  transformStateManager,
  TransformValues,
  TransformStateManager,
} from "./TransformStateManager";
import { PROPERTY_DEFAULT_UNITS } from "./constants";

// ── Types ──────────────────────────────────────────────────────────────────

export interface AnimationHandle {
  animation: Animation;
  pause(): void;
  resume(): void;
  cancel(): void;
  finished: Promise<Animation>;
}

// ── Helpers ────────────────────────────────────────────────────────────────

/** Set of all CSS transform sub-properties handled by the engine. */
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

function resolveValue(prop: WebAnimationProperty, raw: string | number): string {
  const unit = prop.unit ?? PROPERTY_DEFAULT_UNITS[prop.property] ?? "";
  if (typeof raw === "number") return `${raw}${unit}`;
  // If the user already provided a unit in the string, keep it
  if (/[a-z%]$/i.test(String(raw))) return String(raw);
  return `${raw}${unit}`;
}

function buildKeyframes(
  properties: WebAnimationProperty[],
  accumulatedTransform?: TransformValues
): [Keyframe[], WebAnimationProperty[]] {
  const from: Record<string, string> = {};
  const to: Record<string, string> = {};
  const transformProps: WebAnimationProperty[] = [];

  for (const prop of properties) {
    if (TRANSFORM_PROPS.has(prop.property)) {
      transformProps.push(prop);
      continue;
    }

    const fromVal = resolveValue(prop, prop.from);
    const toVal = resolveValue(prop, prop.to);

    switch (prop.property) {
      case "opacity":
        from["opacity"] = fromVal;
        to["opacity"] = toVal;
        break;
      case "width":
        from["width"] = fromVal;
        to["width"] = toVal;
        break;
      case "height":
        from["height"] = fromVal;
        to["height"] = toVal;
        break;
      case "blur":
        from["filter"] = `blur(${fromVal})`;
        to["filter"] = `blur(${toVal})`;
        break;
      case "brightness":
        from["filter"] = `brightness(${fromVal})`;
        to["filter"] = `brightness(${toVal})`;
        break;
      case "custom":
        if (prop.customProperty) {
          from[prop.customProperty] = fromVal;
          to[prop.customProperty] = toVal;
        }
        break;
    }
  }

  // Combine filter values if both blur and brightness are specified
  const blurProp = properties.find((p) => p.property === "blur");
  const brightProp = properties.find((p) => p.property === "brightness");
  if (blurProp && brightProp) {
    from["filter"] = `blur(${resolveValue(blurProp, blurProp.from)}) brightness(${resolveValue(brightProp, brightProp.from)})`;
    to["filter"] = `blur(${resolveValue(blurProp, blurProp.to)}) brightness(${resolveValue(brightProp, brightProp.to)})`;
  }

  // Build transform keyframe values from transform properties
  if (transformProps.length > 0) {
    from["transform"] = buildTransformKeyframeValue(transformProps, "from", accumulatedTransform);
    to["transform"] = buildTransformKeyframeValue(transformProps, "to", accumulatedTransform);
  } else if (accumulatedTransform && Object.keys(accumulatedTransform).length > 0) {
    // No transform properties in this animation, but we have accumulated state.
    // Preserve it in both keyframes so the animation doesn't reset transforms.
    const accumulated = TransformStateManager.buildTransformString(accumulatedTransform);
    if (accumulated) {
      from["transform"] = accumulated;
      to["transform"] = accumulated;
    }
  }

  return [[from, to], transformProps];
}

/**
 * Build a single keyframe's `transform` value from the explicitly animated
 * transform sub-properties plus any accumulated state.
 *
 * Follows the same canonical composition order as
 * TransformStateManager.buildTransformString:
 *   translate3d/translate → scale/scaleX/scaleY → rotate/rotateX/rotateY → skew
 */
function buildTransformKeyframeValue(
  props: WebAnimationProperty[],
  key: "from" | "to",
  accumulatedTransform?: TransformValues
): string {
  // Determine which sub-properties this animation explicitly touches
  const touchedProps = new Set(props.map((p) => p.property));
  const parts: string[] = [];

  // Helper: get the resolved animation value for a specific property
  const getAnimVal = (propName: string): string | undefined => {
    const p = props.find((pr) => pr.property === propName);
    if (!p) return undefined;
    return resolveValue(p, key === "from" ? p.from : p.to);
  };

  // ── Translate ─────────────────────────────────────────────────────────
  const hasTx = touchedProps.has("translateX");
  const hasTy = touchedProps.has("translateY");
  const hasTz = touchedProps.has("translateZ");
  const accTx = accumulatedTransform?.translateX;
  const accTy = accumulatedTransform?.translateY;
  const accTz = accumulatedTransform?.translateZ;

  if (hasTx || hasTy || hasTz || accTx != null || accTy != null || accTz != null) {
    const xVal = hasTx ? getAnimVal("translateX")! : (accTx ?? "0px");
    const yVal = hasTy ? getAnimVal("translateY")! : (accTy ?? "0px");
    const zVal = hasTz ? getAnimVal("translateZ")! : (accTz ?? undefined);

    if (zVal != null) {
      parts.push(`translate3d(${xVal}, ${yVal}, ${zVal})`);
    } else {
      parts.push(`translate(${xVal}, ${yVal})`);
    }
  }

  // ── Scale ─────────────────────────────────────────────────────────────
  const hasScaleUnified = touchedProps.has("scale");
  const hasScaleX = touchedProps.has("scaleX");
  const hasScaleY = touchedProps.has("scaleY");
  const accScale = accumulatedTransform?.scale;
  const accScaleX = accumulatedTransform?.scaleX;
  const accScaleY = accumulatedTransform?.scaleY;

  if (hasScaleX || hasScaleY || accScaleX != null || accScaleY != null) {
    // Individual axis scaling
    const xVal = hasScaleX ? getAnimVal("scaleX")! : (accScaleX ?? "1");
    const yVal = hasScaleY ? getAnimVal("scaleY")! : (accScaleY ?? "1");
    parts.push(`scaleX(${xVal})`);
    parts.push(`scaleY(${yVal})`);
  } else if (hasScaleUnified) {
    parts.push(`scale(${getAnimVal("scale")})`);
  } else if (accScale != null) {
    parts.push(`scale(${accScale})`);
  }

  // ── Rotate ────────────────────────────────────────────────────────────
  const hasRotateUnified = touchedProps.has("rotate");
  const hasRotateX = touchedProps.has("rotateX");
  const hasRotateY = touchedProps.has("rotateY");
  const accRotate = accumulatedTransform?.rotate;
  const accRotateX = accumulatedTransform?.rotateX;
  const accRotateY = accumulatedTransform?.rotateY;

  if (hasRotateX || hasRotateY || accRotateX != null || accRotateY != null) {
    const rxVal = hasRotateX ? getAnimVal("rotateX")! : (accRotateX ?? undefined);
    const ryVal = hasRotateY ? getAnimVal("rotateY")! : (accRotateY ?? undefined);
    if (rxVal != null) parts.push(`rotateX(${rxVal})`);
    if (ryVal != null) parts.push(`rotateY(${ryVal})`);
    // If unified rotate is also set alongside axis rotates, include as rotateZ
    if (hasRotateUnified) {
      parts.push(`rotateZ(${getAnimVal("rotate")})`);
    } else if (accRotate != null) {
      parts.push(`rotateZ(${accRotate})`);
    }
  } else if (hasRotateUnified) {
    parts.push(`rotate(${getAnimVal("rotate")})`);
  } else if (accRotate != null) {
    parts.push(`rotate(${accRotate})`);
  }

  // ── Skew ──────────────────────────────────────────────────────────────
  const hasSx = touchedProps.has("skewX");
  const hasSy = touchedProps.has("skewY");
  const accSx = accumulatedTransform?.skewX;
  const accSy = accumulatedTransform?.skewY;

  if (hasSx || hasSy || accSx != null || accSy != null) {
    const xVal = hasSx ? getAnimVal("skewX")! : (accSx ?? "0deg");
    const yVal = hasSy ? getAnimVal("skewY")! : (accSy ?? "0deg");
    parts.push(`skew(${xVal}, ${yVal})`);
  }

  return parts.join(" ");
}

function mapTimingToOptions(timing: TimingConfig): KeyframeAnimationOptions {
  // Downgrade "both" to "forwards" to prevent backwards-fill from projecting
  // the first keyframe values onto the element before the animation starts.
  // This avoids the flicker where the final state briefly appears when
  // multiple animations are scheduled on the same element.
  const fill = timing.fillMode === "both" ? "forwards" : timing.fillMode;
  return {
    duration: timing.duration,
    delay: timing.delay,
    easing: timing.easing,
    iterations:
      timing.iterationCount === "infinite" ? Infinity : (Number(timing.iterationCount) || 1),
    direction: timing.direction,
    fill,
  };
}

// ── Active animation registry ──────────────────────────────────────────────

const activeAnimations = new WeakMap<HTMLElement, Map<string, Animation>>();

function getOrCreateRegistry(el: HTMLElement): Map<string, Animation> {
  let map = activeAnimations.get(el);
  if (!map) {
    map = new Map();
    activeAnimations.set(el, map);
  }
  return map;
}

// ── Public API ─────────────────────────────────────────────────────────────

export class WebAnimationEngine {
  /**
   * Play a Web Animations API animation on an element.
   * If an animation with the same interactionId is already running on this
   * element it will be cancelled first.
   *
   * @param accumulatedTransform  Optional accumulated transform state from
   *        preceding interactions in the same trigger group.  When provided,
   *        transform sub-properties NOT touched by this animation are preserved
   *        in the keyframes so the element doesn't snap back to its original
   *        position.
   * @param useImplicitFrom  When true, drops the explicit "from" keyframe so
   *        WAAPI interpolates from the element's current computed style.
   *        Used when re-entering mid-revert to avoid visual snaps.
   */
  play(
    element: HTMLElement,
    interactionId: string,
    config: WebAnimationConfig,
    timing: TimingConfig,
    accumulatedTransform?: TransformValues,
    useImplicitFrom?: boolean
  ): AnimationHandle {
    const registry = getOrCreateRegistry(element);

    // Cancel duplicate
    const existing = registry.get(interactionId);
    if (existing) {
      try { existing.cancel(); } catch { /* already finished */ }
    }

    let [keyframes, transformProps] = buildKeyframes(config.properties, accumulatedTransform);
    // When useImplicitFrom is true, drop the explicit "from" keyframe so
    // the browser interpolates from the element's current computed style
    // to the "to" keyframe.  This prevents a visual snap when a new
    // enter animation starts while the element is mid-revert-transition.
    if (useImplicitFrom && keyframes.length === 2) {
      keyframes = [keyframes[1]];
    }
    const options: KeyframeAnimationOptions = {
      ...mapTimingToOptions(timing),
      composite: config.composite ?? "replace",
    };

    const animation = element.animate(keyframes, options);
    registry.set(interactionId, animation);

    // When animation finishes, commit styles to inline and cancel the fill effect
    // so that subsequent animations see the real inline state.
    const finishedPromise = animation.finished
      .then((anim) => {
        // Guard: if the animation was already cancelled (e.g. by an interruption
        // in InteractionManager), do not commit styles — the caller has already
        // restored baseline or started a different animation sequence.
        if (anim.playState === "idle") {
          registry.delete(interactionId);
          return anim;
        }

        // Flush any pending rAF transform writes before commitStyles so that
        // element.style.transform is current.
        transformStateManager.flushNow(element);

        // Commit the final computed values into element.style, then cancel
        // the animation so its fill effect no longer shadows inline styles.
        try {
          anim.commitStyles();
        } catch {
          // commitStyles can throw if element is disconnected
        }
        try {
          anim.cancel();
        } catch {
          // already cancelled
        }

        // Always record the final transform sub-property values in the
        // TransformStateManager so subsequent animations see the correct
        // accumulated state.  The fillMode guard was removed because
        // commitStyles() always persists final values to inline style
        // regardless of fillMode — TSM must stay in sync.
        if (transformProps.length > 0) {
          const toValues: TransformValues = {};
          for (const p of transformProps) {
            const val = resolveValue(p, p.to);
            (toValues as any)[p.property] = val;
          }
          transformStateManager.applyTransform(element, interactionId, toValues);
          // Flush synchronously so inline style is immediately consistent
          transformStateManager.flushNow(element);
        } else {
          // No transform props in this animation, but commitStyles() may have
          // written a matrix to element.style.transform.  Re-sync TSM's
          // decomposed value over the matrix so subsequent animations see
          // consistent function-notation transforms.
          transformStateManager.recompose(element);
        }
        registry.delete(interactionId);
        return anim;
      })
      .catch((err) => {
        registry.delete(interactionId);
        throw err;
      });

    return {
      animation,
      pause: () => animation.pause(),
      resume: () => animation.play(),
      cancel: () => {
        try { animation.cancel(); } catch { /* noop */ }
        registry.delete(interactionId);
      },
      finished: finishedPromise,
    };
  }

  /**
   * Cancel a specific interaction's animation on an element.
   */
  cancel(element: HTMLElement, interactionId: string): void {
    const registry = activeAnimations.get(element);
    const anim = registry?.get(interactionId);
    if (anim) {
      try { anim.cancel(); } catch { /* noop */ }
      registry!.delete(interactionId);
    }
  }

  /**
   * Cancel all animations tracked on an element.
   */
  cancelAll(element: HTMLElement): void {
    const registry = activeAnimations.get(element);
    if (!registry) return;
    for (const [, anim] of registry) {
      try { anim.cancel(); } catch { /* noop */ }
    }
    registry.clear();
  }
}

export const webAnimationEngine = new WebAnimationEngine();
