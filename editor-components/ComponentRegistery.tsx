import { CATEGORIES, Component, iComponent } from "./EditorComponent";

export type TRegistryState = { [key in CATEGORIES]: typeof Component[] };

/**
 * A custom component that was fetched but could NOT be registered (bad bundle,
 * missing addProp, did not extend Component, etc.). Kept OUT of
 * availableComponents so the page builder never tries to render it; surfaced
 * separately so the UI can show the user why their component is missing.
 */
export type CustomComponentLoadFailure = {
  name: string;
  version?: number;
  reason: string;
  customComponentId?: string;
};

class ComponentsRegistery {
  private availableComponents: TRegistryState = {} as TRegistryState;
  private customLoadFailures: CustomComponentLoadFailure[] = [];

  constructor() {
    Object.values(CATEGORIES).forEach((item) => {
      this.availableComponents[item] = [];
    });
  }

  getComponents(): TRegistryState {
    return this.availableComponents;
  }

  setCustomLoadFailures(failures: CustomComponentLoadFailure[]) {
    this.customLoadFailures = failures;
  }

  getCustomLoadFailures(): CustomComponentLoadFailure[] {
    return this.customLoadFailures;
  }
  register(components: typeof Component[]) {
    components.forEach((component: typeof Component) => {
      this.availableComponents[component.getCategory()].push(component);
    });
  }

  ensureCategory(category: string) {
    if (!this.availableComponents[category as CATEGORIES]) {
      this.availableComponents[category as CATEGORIES] = [];
    }
  }

  registerDynamic(components: typeof Component[], forceCategory?: CATEGORIES) {
    components.forEach((component: typeof Component) => {
      const category = forceCategory || component.getCategory();
      this.ensureCategory(category);

      if (category === CATEGORIES.CUSTOM) {
        const compId = (component as any).customComponentId;
        const exists = compId && this.availableComponents[category].some(
          (c) => (c as any).customComponentId === compId
        );
        if (!exists) {
          this.availableComponents[category].push(component);
        }
      } else {
        const exists = this.availableComponents[category].some(
          (c) => c.getName() === component.getName()
        );
        if (!exists) {
          this.availableComponents[category].push(component);
        }
      }
    });
  }

  /**
   * Drops registered custom components the authoritative list no longer
   * carries, and reports what went.
   *
   * registerDynamic only ever appends — it dedupes on customComponentId, and a
   * new version carries a new id. So after a Block Builder save produced v2,
   * returning to the editor re-ran the loader and added v2 while v1 stayed
   * behind, and the picker listed both until a reload rebuilt the registry from
   * scratch. The server already answers with one entry per name (plus versions
   * a page still references), so mirroring that list is the whole fix.
   *
   * Entries without a customComponentId are left alone — nothing in the fetched
   * list can vouch for them either way.
   */
  pruneCustomComponents(validIds: Set<string>): typeof Component[] {
    const category = CATEGORIES.CUSTOM;
    const registered = this.availableComponents[category];
    if (!registered) return [];

    const isStale = (c: typeof Component) => {
      const id = (c as unknown as { customComponentId?: string }).customComponentId;
      return !!id && !validIds.has(String(id));
    };

    const removed = registered.filter(isStale);
    if (removed.length > 0) {
      this.availableComponents[category] = registered.filter((c) => !isStale(c));
    }
    return removed;
  }

  unregisterCustomComponent(customComponentId: string) {
    const category = CATEGORIES.CUSTOM;
    if (this.availableComponents[category]) {
      this.availableComponents[category] = this.availableComponents[category]
        .filter((c) => (c as any).customComponentId !== customComponentId);
    }
  }

  /**
   * Clears all components from a given category.
   * For CUSTOM category, also cleans up window.__CUSTOM_COMPONENTS__ and injected styles.
   */
  clearCategory(category: CATEGORIES) {
    if (!this.availableComponents[category]) return;

    if (category === CATEGORIES.CUSTOM) {
      // Clean up injected stylesheets for each custom component
      const customComps = this.availableComponents[category];
      for (const comp of customComps) {
        const compId = (comp as any).customComponentId;
        if (compId) {
          const styleEl = document.querySelector(`style[data-key="${compId}"]`);
          if (styleEl) styleEl.remove();
        }
      }
      // Clear the global registry
      if (typeof window !== "undefined" && window.__CUSTOM_COMPONENTS__) {
        window.__CUSTOM_COMPONENTS__ = {};
      }
      // Drop recorded load failures too — they are re-derived on next load.
      this.customLoadFailures = [];
    }

    this.availableComponents[category] = [];
  }
}

export default ComponentsRegistery;
