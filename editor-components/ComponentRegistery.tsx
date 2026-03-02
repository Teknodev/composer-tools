import { CATEGORIES, Component, iComponent } from "./EditorComponent";

export type TRegistryState = { [key in CATEGORIES]: typeof Component[] };
class ComponentsRegistery {
  private availableComponents: TRegistryState = {} as TRegistryState;

  constructor() {
    Object.values(CATEGORIES).forEach((item) => {
      this.availableComponents[item] = [];
    });
  }

  getComponents(): TRegistryState {
    return this.availableComponents;
  }
  register(components: typeof Component[]) {
    components.forEach((component: typeof Component) => {
      this.availableComponents[component.getCategory()].push(component);
    });
  }

  ensureCategory(category: string) {
    if (!this.availableComponents[category]) {
      this.availableComponents[category] = [];
    }
  }

  registerDynamic(components: iComponent[], forceCategory?: CATEGORIES) {
    components.forEach((component: iComponent) => {
      const category = forceCategory || component.getCategory();
      this.ensureCategory(category);
      const exists = this.availableComponents[category].some(
        (c: iComponent) => c.getName() === component.getName()
      );
      if (!exists) {
        this.availableComponents[category].push(component);
      }
    });
  }
}

export default ComponentsRegistery;
