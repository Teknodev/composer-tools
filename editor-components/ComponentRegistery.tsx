import { CATEGORIES, iComponent } from "./EditorComponent";

class ComponentsRegistery {

    private availableComponents: any = {};

    constructor() {
        Object.values(CATEGORIES).forEach((item) => {
            this.availableComponents[item] = [];
        })
    }

    getComponents(): { [key in CATEGORIES]: iComponent[] } {
        return this.availableComponents;
    }
    register(components: iComponent[]) {
        components.forEach((component: iComponent) => {
            this.availableComponents[component.getCategory()].push(component)
        })
    }
}

export default ComponentsRegistery;