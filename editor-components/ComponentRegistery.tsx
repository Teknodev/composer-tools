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
