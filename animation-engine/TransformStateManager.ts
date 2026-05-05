/**
 * TransformStateManager
 *
 * Tracks per-element transform sub-property values contributed by different
 * interactions.  When multiple interactions set different transform sub-properties
 * (e.g. one sets scale, another sets translateX) they are composed into a single
 * `transform` string without conflicts.
 *
 * Features:
 *  1. **Full 3D transform support** — translateX/Y/Z, scale/scaleX/scaleY,
 *     rotate/rotateX/rotateY, skewX/skewY.
 *  2. **rAF-batched DOM writes** — multiple `applyTransform()` calls within
 *     the same frame produce a single `element.style.transform` write.
 *  3. **Write-lock for preset animations** — when an element is locked (e.g. while
 *     an Animate.css animation runs), TSM queues incoming contributions and
 *     replays them on unlock so the preset animation is never disrupted.
 *  4. **Snapshot / restore** for Animate.css animations that overwrite
 *     `transform` entirely.
 */

export interface TransformValues {
  translateX?: string;
  translateY?: string;
  translateZ?: string;
  scale?: string;
  scaleX?: string;
  scaleY?: string;
  rotate?: string;
  rotateX?: string;
  rotateY?: string;
  skewX?: string;
  skewY?: string;
}

/** All keys of TransformValues for iteration */
export const TRANSFORM_VALUE_KEYS: (keyof TransformValues)[] = [
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
];

interface TransformContribution {
  interactionId: string;
  values: TransformValues;
}

// ── Write-lock queue entry types ───────────────────────────────────────────

interface QueuedApply {
  kind: "apply";
  interactionId: string;
  values: TransformValues;
}

interface QueuedRemove {
  kind: "remove";
  interactionId: string;
}

type QueuedOperation = QueuedApply | QueuedRemove;

export class TransformStateManager {
  /**
   * Map from element → list of contributions, ordered by insertion.
   * Later contributions for the *same* sub-property win (last-write-wins per
   * sub-property, but different sub-properties from different interactions coexist).
   */
  private contributions = new WeakMap<HTMLElement, TransformContribution[]>();

  /** Snapshots taken before Animate.css animations run */
  private snapshots = new WeakMap<HTMLElement, string>();

  // ── rAF batching ──────────────────────────────────────────────────────

  /** Elements whose composed transform is dirty and needs a DOM write */
  private dirtyElements = new Set<HTMLElement>();

  /** The pending rAF callback ID (null when idle) */
  private rafId: number | null = null;

  // ── Write-lock (for preset/animate.css coordination) ─────────────────

  /** Elements currently locked — transforms are queued, not applied */
  private lockedElements = new WeakMap<HTMLElement, QueuedOperation[]>();

  /** Reference-count per element so nested lock/unlock pairs are safe */
  private lockRefCount = new WeakMap<HTMLElement, number>();

  // ── Public API ──────────────────────────────────────────────────────────

  /**
   * Record a transform contribution from a specific interaction.
   * Automatically schedules a rAF-batched DOM write.
   *
   * If the element is write-locked (preset animation in progress), the
   * contribution is queued and will be replayed on unlock.
   */
  applyTransform(
    element: HTMLElement,
    interactionId: string,
    values: TransformValues
  ): void {
    // If locked, queue this operation for replay on unlock
    const queue = this.lockedElements.get(element);
    if (queue) {
      queue.push({ kind: "apply", interactionId, values });
      return;
    }

    this.applyTransformInternal(element, interactionId, values);
  }

  /**
   * Remove a single interaction's contribution and schedule recompose.
   */
  removeTransform(element: HTMLElement, interactionId: string): void {
    // If locked, queue this removal for replay on unlock
    const queue = this.lockedElements.get(element);
    if (queue) {
      queue.push({ kind: "remove", interactionId });
      return;
    }

    this.removeTransformInternal(element, interactionId);
  }

  /**
   * Return the fully composed `transform` CSS string for an element.
   */
  getComposedTransform(element: HTMLElement): string {
    return TransformStateManager.buildTransformString(this.getMergedValues(element));
  }

  /**
   * Return the current merged TransformValues for an element (read-only query).
   * Used by InteractionManager to seed accumulated state for sequential chains.
   */
  getCurrentValues(element: HTMLElement): TransformValues {
    return { ...this.getMergedValues(element) };
  }

  // ── Write-lock API (for animate.css coordination) ───────────────────

  /**
   * Lock an element — all subsequent `applyTransform` / `removeTransform`
   * calls are queued instead of applied.  Supports ref-counted nesting so
   * multiple concurrent Animate.css animations can lock the same element
   * and it won't unlock until all of them finish.
   */
  lockElement(element: HTMLElement): void {
    const count = this.lockRefCount.get(element) ?? 0;
    this.lockRefCount.set(element, count + 1);
    if (count === 0) {
      // First lock — create the queue
      this.lockedElements.set(element, []);
    }
  }

  /**
   * Unlock an element — replays queued operations and schedules a DOM write.
   * Only actually unlocks when the ref-count reaches zero.
   */
  unlockElement(element: HTMLElement): void {
    const count = this.lockRefCount.get(element) ?? 0;
    if (count <= 0) return;

    const next = count - 1;
    this.lockRefCount.set(element, next);
    if (next > 0) return; // Still locked by another animation

    // Ref-count reached zero — replay queued operations
    const queue = this.lockedElements.get(element);
    this.lockedElements.delete(element);
    this.lockRefCount.delete(element);

    if (queue && queue.length > 0) {
      for (const op of queue) {
        if (op.kind === "apply") {
          this.applyTransformInternal(element, op.interactionId, op.values);
        } else {
          this.removeTransformInternal(element, op.interactionId);
        }
      }
      // applyTransformInternal / removeTransformInternal already schedule rAF
    }
  }

  /**
   * Query whether an element is currently write-locked.
   */
  isLocked(element: HTMLElement): boolean {
    return (this.lockRefCount.get(element) ?? 0) > 0;
  }

  // ── Snapshot / Restore (for Animate.css) ─────────────────────────────────

  /**
   * Snapshot the current transform state *before* an Animate.css animation starts.
   */
  snapshot(element: HTMLElement): void {
    this.snapshots.set(element, this.getComposedTransform(element));
  }

  /**
   * Restore the snapshotted transform *after* an Animate.css animation ends.
   */
  restore(element: HTMLElement): void {
    const saved = this.snapshots.get(element);
    if (saved !== undefined) {
      element.style.transform = saved;
      this.snapshots.delete(element);
    }
  }

  /**
   * Re-sync element.style.transform with the TransformStateManager's tracked
   * contributions.  Call this after commitStyles() writes a computed matrix to
   * ensure the inline style uses decomposed transform functions that match what
   * the manager tracks.
   *
   * If the manager has no tracked contributions the inline transform is left
   * untouched — commitStyles() already wrote the correct value.
   */
  recompose(element: HTMLElement): void {
    const merged = this.getMergedValues(element);
    // Only overwrite if we have tracked state; otherwise commitStyles' value
    // is the best we have and we should not clobber it.
    if (Object.keys(merged).length > 0) {
      // Write synchronously — this is called immediately after commitStyles()
      // where consistency is required before the next operation.
      element.style.transform = TransformStateManager.buildTransformString(merged);
    }
  }

  /**
   * Synchronously flush pending rAF writes for a specific element, or for
   * ALL dirty elements if no element is given.
   *
   * Use sparingly — primarily needed before `getComputedStyle()` reads or
   * `commitStyles()` calls that depend on the inline transform being current.
   */
  flushNow(element?: HTMLElement): void {
    if (element) {
      if (this.dirtyElements.has(element)) {
        this.composeAndWrite(element);
        this.dirtyElements.delete(element);
      }
    } else {
      // Flush all dirty elements
      for (const el of this.dirtyElements) {
        this.composeAndWrite(el);
      }
      this.dirtyElements.clear();
    }

    // Cancel the pending rAF if there are no more dirty elements
    if (this.dirtyElements.size === 0 && this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Clear all state for an element (used on teardown).
   */
  clear(element: HTMLElement): void {
    this.contributions.delete(element);
    this.snapshots.delete(element);
    this.dirtyElements.delete(element);
    this.lockedElements.delete(element);
    this.lockRefCount.delete(element);
  }

  // ── Internals: contribution management ───────────────────────────────

  private applyTransformInternal(
    element: HTMLElement,
    interactionId: string,
    values: TransformValues
  ): void {
    const list = this.getOrCreateList(element);
    const existing = list.find((c) => c.interactionId === interactionId);
    if (existing) {
      existing.values = { ...existing.values, ...values };
    } else {
      list.push({ interactionId, values });
    }
    this.scheduleCompose(element);
  }

  private removeTransformInternal(
    element: HTMLElement,
    interactionId: string
  ): void {
    const list = this.contributions.get(element);
    if (!list) return;
    const idx = list.findIndex((c) => c.interactionId === interactionId);
    if (idx !== -1) list.splice(idx, 1);
    this.scheduleCompose(element);
  }

  private getOrCreateList(element: HTMLElement): TransformContribution[] {
    let list = this.contributions.get(element);
    if (!list) {
      list = [];
      this.contributions.set(element, list);
    }
    return list;
  }

  /**
   * Merge all contributions into a single TransformValues object.
   * Later contributions overwrite earlier ones *per sub-property*.
   */
  private getMergedValues(element: HTMLElement): TransformValues {
    const list = this.contributions.get(element);
    if (!list || list.length === 0) return {};
    const merged: TransformValues = {};
    for (const contrib of list) {
      Object.assign(merged, contrib.values);
    }
    return merged;
  }

  // ── rAF batching internals ───────────────────────────────────────────

  /**
   * Mark an element as needing a DOM write and enqueue a single rAF callback.
   */
  private scheduleCompose(element: HTMLElement): void {
    this.dirtyElements.add(element);
    if (this.rafId === null) {
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        this.flushAllDirty();
      });
    }
  }

  /**
   * Iterate all dirty elements, compute their transform string, and write
   * to `element.style.transform`. Called once per animation frame.
   */
  private flushAllDirty(): void {
    for (const el of this.dirtyElements) {
      this.composeAndWrite(el);
    }
    this.dirtyElements.clear();
  }

  /**
   * Build the composed transform string and write it to an element's inline style.
   */
  private composeAndWrite(element: HTMLElement): void {
    const str = TransformStateManager.buildTransformString(
      this.getMergedValues(element)
    );
    element.style.transform = str || "";
  }

  // ── Static: transform string composition ─────────────────────────────

  /**
   * Build a CSS transform string from TransformValues.
   * Public static so other modules (AnimateCssAdapter, WebAnimationEngine) can reuse it.
   *
   * Canonical composition order:
   *   translate3d(X, Y, Z)  →  scale() or scaleX()/scaleY()  →  rotate() or rotateX()/rotateY()  →  skew(X, Y)
   *
   * This deterministic ordering prevents visually different results depending
   * on which interaction applied first.
   */
  static buildTransformString(values: TransformValues): string {
    const parts: string[] = [];

    // ── Translate ──────────────────────────────────────────────────────
    const hasTx = values.translateX != null;
    const hasTy = values.translateY != null;
    const hasTz = values.translateZ != null;

    if (hasTx || hasTy || hasTz) {
      if (hasTz) {
        // 3D translate when Z is involved
        parts.push(
          `translate3d(${values.translateX ?? "0px"}, ${values.translateY ?? "0px"}, ${values.translateZ ?? "0px"})`
        );
      } else {
        parts.push(
          `translate(${values.translateX ?? "0px"}, ${values.translateY ?? "0px"})`
        );
      }
    }

    // ── Scale ──────────────────────────────────────────────────────────
    // Prefer individual axes when set; fall back to unified scale()
    const hasScaleUnified = values.scale != null;
    const hasScaleX = values.scaleX != null;
    const hasScaleY = values.scaleY != null;

    if (hasScaleX || hasScaleY) {
      // Individual axis scaling
      if (hasScaleX) parts.push(`scaleX(${values.scaleX})`);
      if (hasScaleY) parts.push(`scaleY(${values.scaleY})`);
    } else if (hasScaleUnified) {
      parts.push(`scale(${values.scale})`);
    }

    // ── Rotate ─────────────────────────────────────────────────────────
    // Prefer individual axes when set; fall back to unified rotate()
    const hasRotateUnified = values.rotate != null;
    const hasRotateX = values.rotateX != null;
    const hasRotateY = values.rotateY != null;

    if (hasRotateX || hasRotateY) {
      if (hasRotateX) parts.push(`rotateX(${values.rotateX})`);
      if (hasRotateY) parts.push(`rotateY(${values.rotateY})`);
      // If unified rotate is also set alongside axis rotates, include it as rotateZ
      if (hasRotateUnified) parts.push(`rotateZ(${values.rotate})`);
    } else if (hasRotateUnified) {
      parts.push(`rotate(${values.rotate})`);
    }

    // ── Skew ───────────────────────────────────────────────────────────
    if (values.skewX != null || values.skewY != null) {
      parts.push(
        `skew(${values.skewX ?? "0deg"}, ${values.skewY ?? "0deg"})`
      );
    }

    return parts.length > 0 ? parts.join(" ") : "";
  }

  /**
   * Convenience: build a transform string from values (delegates to static).
   */
  buildTransformStringFromValues(values: TransformValues): string {
    return TransformStateManager.buildTransformString(values);
  }
}

/** Singleton shared across the entire runtime */
export const transformStateManager = new TransformStateManager();
