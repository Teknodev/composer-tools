import { CATEGORIES, Component, iComponent } from "./EditorComponent";

export type TRegistryState = { [key in CATEGORIES]: typeof Component[] };
class ComponentsRegistery {
  private availableComponents: TRegistryState = {} as TRegistryState;

  constructor() {
    Object.values(CATEGORIES).forEach((item) => {
      this.availableComponents[item] = [];
    });
  }

  getComponents(): TRegistryState  {
    return this.availableComponents;
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

  registerDynamic(components: typeof Component[]) {
    components.forEach((component: typeof Component) => {
      const category = component.getCategory();
      this.ensureCategory(category);
      const exists = this.availableComponents[category].some(
        (c) => c.getName() === component.getName()
      );
      if (!exists) {
        this.availableComponents[category].push(component);
      }
    });
  }
}

export default ComponentsRegistery;
