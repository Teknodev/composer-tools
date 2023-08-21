import axios from "axios";
import * as React from "react";
import { getProjectHook } from "../custom-hooks/project";

type TypeCSSProp = { [key: string]: { id: string, class: string }[] };
export type iComponent = {
  render(): any;
  getName(): string;
  getProps(): TypeUsableComponentProps[];
  getPropValue(propName: string): TypeUsableComponentProps;
  getExportedCSSClasses(): string[];
  getCSSClasses(sectionName?: string | null): any;
  addProp(prop: TypeUsableComponentProps): void;
  setProp(key: string, value: any): void;
  setCSSClasses(key: string, value: { id: string, class: string }[]): void;
  decorateCSS(cssValue: string): string;
  getCategory(): CATEGORIES;
};
type AvailablePropTypes =
  | { type: "string"; value: string }
  | { type: "number"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "page"; value: string }
  | { type: "array"; value: TypeUsableComponentProps[] }
  | { type: "object"; value: TypeUsableComponentProps[] }
  | { type: "image"; value: string }
  | { type: "select"; value: string }
  | { type: "color"; value: string};

export type TypeReactComponent = {
  type: string;
  props: TypeUsableComponentProps[];
  cssClasses: TypeCSSProp;
  children: string;
};
export type TypeUsableComponentProps = {
  key: string;
  displayer: string;
  additionalParams?: { selectItems?: string[] };
} & AvailablePropTypes & {
  getPropValue?: (propName: string) => any;
};

export enum CATEGORIES {
  NAVIGATOR = "navigator",
  TESTIMONIALS = "testimonials",
  LIST = "list",
  HEADER = "header",
  PRICING = "pricing",
  FOOTER = "footer",
  TEAM = "team",
  CONTENT = "content",
  FORM = "form",
  DOWNLOAD = "download",
  CALLTOACTION = "callToAction",
  SLIDER = "slider",
  FAQ = "faq",
  MODAL = "modal",
  LOGOCLOUDS = "logoClouds",
  STATS = "stats",
  FEATURE = "feature"
}

export abstract class Component
  extends React.Component<{}, { componentProps: any }>
  implements iComponent {
  private styles: any;
  private _props: any;
  protected category: CATEGORIES;
  abstract getName(): string;

  constructor(props: any, styles: any) {
    super(props);
    this._props = props;
    this.styles = styles;
    let sectionsKeyValue: any = {};
    Object.keys(this.styles).forEach((key, index) => {
      sectionsKeyValue[key] = (props && props[key]) || [];
    });
    this.state = {
      componentProps: {
        props: [],
        cssClasses: sectionsKeyValue,
      },
    };
  }

  getCategory(): CATEGORIES {
    return this.category;
  }
  getProps(): TypeUsableComponentProps[] {
    return this.state.componentProps.props;
  }
  getPropValue(propName: string): any {
    let props: TypeUsableComponentProps[] = this.state.componentProps.props.filter(
      (prop: TypeUsableComponentProps) => prop.key == propName
    );
    let prop = props[0] || null;
    return prop?.value;
  }
  getExportedCSSClasses() {
    return this.styles;
  }
  getCSSClasses(sectionName: string | null = null): string {
    return sectionName
      ? this.state.componentProps.cssClasses[sectionName]
      : this.state.componentProps.cssClasses;
  }
  addProp(prop: TypeUsableComponentProps) {
    prop.value = (this._props && this._props[prop.key]) || prop.value;
    prop = this.attachValueGetter(prop);
    this.state.componentProps.props.push(prop);
  }
  setProp(key: string, value: any): void {
    let i = this.state.componentProps.props
      .map((prop: any) => prop.key)
      .indexOf(key);


      this.state.componentProps.props[i].value = value;
      this.state.componentProps.props[i] = this.attachValueGetter(
        this.state.componentProps.props[i]
      );
      this.state = ({ componentProps: { ...this.state.componentProps } });

  }
  setCSSClasses(key: string, value: { id: string, class: string }[]) {
    this.state.componentProps.cssClasses[key] = value;
    this.state = ({ componentProps: { ...this.state.componentProps } });
  }
  decorateCSS(cssValue: string) {
    let cssClass = [this.styles[cssValue]];
    let cssManuplations = Object.entries(this.getCSSClasses()).filter(
      ([p, v]) => v.length > 0
    );
    cssManuplations.forEach(([key, value]: any) => {
      if (key == cssValue) {
        value.forEach((el: any) => {
          cssClass.push(el.class);
        });
      }
    });
    return cssClass.join(" ");
  }

  private attachValueGetter(propValue: any) {
    if (Array.isArray(propValue.value)) {
      propValue.value = propValue.value.map(
        (propValueItem: TypeUsableComponentProps) => {
          if (Array.isArray(propValueItem.value)) {
            propValueItem = this.attachValueGetter(propValueItem);
            propValueItem["getPropValue"] = (propName: string) => {
              return (propValueItem.value as TypeUsableComponentProps[]).filter(
                (prop: TypeUsableComponentProps) => prop.key == propName
              )[0].value;
            };
          }

          return propValueItem;
        }
      );
    }
    return propValue;
  }

  castToObject<Type>(propName: string): Type {
    let i = this.state.componentProps.props
      .map((prop: any) => prop.key)
      .indexOf(propName);
    let castedObject = this.castingProcess(this.state.componentProps.props[i]);
    return castedObject;
  }

  private castingProcess(object: any) {
    let casted = object.value.map((propValue: any) => {
      if (propValue.hasOwnProperty("getPropValue")) {
        propValue.value.forEach((nestedObject: any, index: number) => {
          propValue[nestedObject.key] = propValue.getPropValue(
            nestedObject.key
          );
          if (nestedObject.hasOwnProperty("getPropValue")) {
            propValue[nestedObject.key] = this.castingProcess(nestedObject);
          }
        });
      }
      return propValue;
    });

    return casted;
  }
}

export abstract class BaseNavigator extends Component {
  protected category = CATEGORIES.NAVIGATOR;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class Testimonials extends Component {
  protected category = CATEGORIES.TESTIMONIALS;

  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseList extends Component {
  protected category = CATEGORIES.LIST;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseHeader extends Component {
  protected category = CATEGORIES.HEADER;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BasePricingTable extends Component {
  protected category = CATEGORIES.PRICING;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseFooter extends Component {
  protected category = CATEGORIES.FOOTER;
  constructor(props: any, styles: any) {
    super(props, styles);
  }

  insertForm(name: string, data: Object) {
    const project = getProjectHook()._id;
    let config = { ...{ data: { name, data, project } }, method: "post", url: process.env.REACT_APP_API_URL + "/fn-execute/project/insert-form" };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class Team extends Component {
  protected category = CATEGORIES.TEAM;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseContent extends Component {
  protected category = CATEGORIES.CONTENT;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseDownload extends Component {
  protected category = CATEGORIES.DOWNLOAD;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseCallToAction extends Component {
  protected category = CATEGORIES.CALLTOACTION;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseSlider extends Component {
  protected category = CATEGORIES.SLIDER;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseFAQ extends Component {
  protected category = CATEGORIES.FAQ;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseModal extends Component {
  protected category = CATEGORIES.MODAL;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
  insertForm(name: string, data: Object) {
    const project = getProjectHook()._id;
    let config = { ...{ data: { name, data, project } }, method: "post", url: process.env.REACT_APP_API_URL + "/fn-execute/project/insert-form" };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class LogoClouds extends Component {
  protected category = CATEGORIES.LOGOCLOUDS;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseStats extends Component {
  protected category = CATEGORIES.STATS;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}

export abstract class BaseContacts extends Component {
  protected category = CATEGORIES.FORM;
  constructor(props: any, styles: any) {
    super(props, styles);
  }

  insertForm(name: string, data: Object) {
    const projectSettings = JSON.parse(getProjectHook().data);
    const project = projectSettings._id;
    let config = { ...{ data: { name, data, project } }, method: "post", url: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : process.env.NEXT_PUBLIC_PUBLIC_URL + "/fn-execute/project/insert-form" };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class BaseFeature extends Component {
  protected category = CATEGORIES.FEATURE;
  constructor(props: any, styles: any) {
    super(props, styles);
  }
}