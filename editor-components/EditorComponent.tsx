import axios from "axios";
import * as React from "react";
import { getProjectHook } from "../custom-hooks/project";
import { EventEmitter } from "../EventEmitter";
import sanitizeHtml from 'sanitize-html';

type GetPropValueOptions = {
  parent_object?: TypeUsableComponentProps[];
  as_string?: boolean;
};
type TypeCSSProp = { [key: string]: { id: string; class: string }[] };
export type iComponent = {
  render(): any;
  getName(): string;
  getProps(): TypeUsableComponentProps[];
  getPropValue(propName: string, options?: GetPropValueOptions): TypeUsableComponentProps;
  getExportedCSSClasses(): { [key: string]: string };
  getCSSClasses(sectionName?: string | null): any;
  addProp(prop: TypeUsableComponentProps): void;
  setProp(key: string, value: any): void;
  setCSSClasses(key: string, value: { id: string; class: string }[]): void;
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
  | { type: "video"; value: string }
  | { type: "select"; value: string }
  | { type: "color"; value: string }
  | { type: "icon"; value: string };

export type TypeReactComponent = {
  type: string;
  props: TypeUsableComponentProps[];
  cssClasses: TypeCSSProp;
  children: string;
};
export type TypeUsableComponentProps = {
  id?: string;
  key: string;
  displayer: string;
  additionalParams?: { selectItems?: string[] };
  max?: number;
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
  FEATURE = "feature",
  IMAGEGALLERY = "imageGallery",
  LOCATION = "Location",
}

export abstract class Component
  extends React.Component<{}, { states: any; componentProps: any }>
  implements iComponent
{
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
      states: {},
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
  getProp(key: string) {
    let props: TypeUsableComponentProps[] = this.state.componentProps.props.filter(
      (prop: TypeUsableComponentProps) => prop.key === key
    );
    let prop = props[0] || null;
    return prop;
  }

  getPropValue(propName: string, options?: GetPropValueOptions): any {
    let prop = (options?.parent_object?.filter(
      (prop: TypeUsableComponentProps) => prop.key === propName
    )[0] || this.getProp(propName));
    return prop?.type == "string" && !options?.as_string
      ? this.getPropValueAsElement(prop)
      : prop?.value;
  }

  getPropValueAsElement(prop: TypeUsableComponentProps) {
    const sanitize = (dirty:string, options: sanitizeHtml.IOptions) => ({
      __html: sanitizeHtml(
        dirty,
        {
          allowedAttributes: {
            'a': [ 'href', 'name', 'target' ],
            '*': [ 'style' ]
          },
          parseStyleAttributes: false
        }
      )
    });
    
    const SanitizeHTML = ({ html, options }: any) => (
      //@ts-ignore
      <blinkpage playground-seed={prop.id} prop-type={prop.type} style={{pointerEvents:"none", display:"inline-block", width: "100%"}} dangerouslySetInnerHTML={sanitize(html, options)}></blinkpage>
    );
    
    return <SanitizeHTML html={prop?.value}></SanitizeHTML>;
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
    const attachPropId = (_prop: TypeUsableComponentProps) => {
      if(_prop.type == "array" || _prop.type == "object"){
        _prop.value = (_prop.value as TypeUsableComponentProps[]).map((v:TypeUsableComponentProps) => attachPropId(v));
      }else{
        _prop.id = _prop.key + "-" +Math.round(Math.random() * 1000000000).toString();
      }
      return _prop
    }
    prop = attachPropId(prop);
    prop = this.attachValueGetter(prop);

    this.state.componentProps.props.push(prop);
  }

  setProp(key: string, value: any): void {
    let i = this.state.componentProps.props.map((prop: any) => prop.key).indexOf(key);

    if (i == -1) return;

    this.state.componentProps.props[i].value = value;
    this.state.componentProps.props[i] = this.attachValueGetter(
      this.state.componentProps.props[i]
    );
    this.setState({ componentProps: { ...this.state.componentProps } });
  }

  setComponentState(key: string, value: any): void {
    this.state.states[key] = value;
    EventEmitter.emit("forceReload");
  }

  getComponentState(key: string): any {
    return this.state.states[key];
  }

  setCSSClasses(key: string, value: { id: string; class: string }[]) {
    const componentPropsCopy = { ...this.state.componentProps };
    const cssClassesCopy = { ...componentPropsCopy.cssClasses };
    cssClassesCopy[key] = value;
    this.state.componentProps.cssClasses[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }

  decorateCSS(cssValue: string) {
    let cssClass = [this.styles[cssValue]];
    let cssManuplations = Object.entries(this.getCSSClasses()).filter(
      ([p, v]) => v.length > 0
    );
    cssManuplations.forEach(([key, value]: any) => {
      if (key === cssValue) {
        value.forEach((el: any) => {
          cssClass.push(el.class);
        });
      }
    });
    return cssClass.join(" ");
  }

  private attachValueGetter(propValue: TypeUsableComponentProps) {
    if (Array.isArray(propValue.value)) {
      propValue.value = propValue.value.filter((value) => value != null);
      propValue.value = propValue.value.map((propValueItem: TypeUsableComponentProps) => {
        if (Array.isArray(propValueItem.value)) {
          propValueItem = this.attachValueGetter(propValueItem);
          propValueItem["getPropValue"] = (propName: string) => {
            return this.getPropValue(propName,{parent_object: propValueItem.value as TypeUsableComponentProps[]});
          };
        }

        return propValueItem;
      });
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
      let clonedPropValue = {...propValue};
      if (clonedPropValue.hasOwnProperty("getPropValue")) {
        clonedPropValue.value.forEach((nestedObject: any, index: number) => {
          clonedPropValue[nestedObject.key] = clonedPropValue.getPropValue(nestedObject.key);
          if (nestedObject.hasOwnProperty("getPropValue")) {
            clonedPropValue[nestedObject.key] = this.castingProcess(nestedObject);
          }
        });
      }else{
        clonedPropValue = {key: clonedPropValue.key, value: object.getPropValue(clonedPropValue.key)};
      }
      return clonedPropValue;
    });

    if(object.type == "object"){
      let tmpCasted = [...casted];
      casted = {};
      tmpCasted.forEach((manipulatedValue) => casted[manipulatedValue.key] = manipulatedValue.value);
    }

    return casted;
  }
}

export abstract class BaseNavigator extends Component {
  protected category = CATEGORIES.NAVIGATOR;
}

export abstract class Testimonials extends Component {
  protected category = CATEGORIES.TESTIMONIALS;
}

export abstract class BaseList extends Component {
  protected category = CATEGORIES.LIST;
}

export abstract class BaseHeader extends Component {
  protected category = CATEGORIES.HEADER;
}

export abstract class BasePricingTable extends Component {
  protected category = CATEGORIES.PRICING;
}

export abstract class BaseFooter extends Component {
  protected category = CATEGORIES.FOOTER;

  insertForm(name: string, data: Object) {
    const project = getProjectHook()._id;
    let config = {
      ...{ data: { name, data, project } },
      method: "post",
      url: process.env.REACT_APP_API_URL + "/fn-execute/project/insert-form",
    };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class Team extends Component {
  protected category = CATEGORIES.TEAM;
}

export abstract class BaseContent extends Component {
  protected category = CATEGORIES.CONTENT;
}

export abstract class BaseDownload extends Component {
  protected category = CATEGORIES.DOWNLOAD;
}

export abstract class BaseCallToAction extends Component {
  protected category = CATEGORIES.CALLTOACTION;
}

export abstract class BaseSlider extends Component {
  protected category = CATEGORIES.SLIDER;
}

export abstract class BaseFAQ extends Component {
  protected category = CATEGORIES.FAQ;
}

export abstract class BaseImageGallery extends Component {
  protected category = CATEGORIES.IMAGEGALLERY;
}

export abstract class BaseModal extends Component {
  protected category = CATEGORIES.MODAL;

  insertForm(name: string, data: Object) {
    const project = getProjectHook()._id;
    let config = {
      ...{ data: { name, data, project } },
      method: "post",
      url: process.env.REACT_APP_API_URL + "/fn-execute/project/insert-form",
    };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class LogoClouds extends Component {
  protected category = CATEGORIES.LOGOCLOUDS;
}

export abstract class Location extends Component {
  protected category = CATEGORIES.LOCATION;
}

export abstract class BaseStats extends Component {
  protected category = CATEGORIES.STATS;
}

export abstract class BaseContacts extends Component {
  protected category = CATEGORIES.FORM;

  insertForm(name: string, data: Object) {
    const projectSettings = getProjectHook();
    const project = projectSettings._id;
    const url = process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_PUBLIC_UR;
    let config = {
      ...{ data: { name, data, project } },
      method: "post",
      url: url + "/fn-execute/project/insert-form",
    };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class BaseFeature extends Component {
  protected category = CATEGORIES.FEATURE;
}
