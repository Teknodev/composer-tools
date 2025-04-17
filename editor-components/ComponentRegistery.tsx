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
}

export default ComponentsRegistery;
