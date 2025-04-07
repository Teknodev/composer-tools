import * as React from "react";
import { getProjectHook } from "../custom-hooks/project";
import { EventEmitter, EVENTS } from "../EventEmitter";
import sanitizeHtml from "sanitize-html";
import { renderToString } from "react-dom/server";
import { THEMES, TTheme } from "./location/themes";
import InlineEditor from "../../custom-hooks/UseInlineEditor";
import { v4 as uuidv4 } from 'uuid';
import { Pages } from "classes/bucket";


export function generateComponentId(){
  return uuidv4();
}

type PreSufFix = {
  label: string;
  className: string;
};

export type InteractionType = Pages["page_interactions"] ;

export type TypeLocation = {
  lng: number;
  lat: number;
};

type GetPropValueProperties = {
  parent_object?: TypeUsableComponentProps[];
  as_string?: boolean;
  suffix?: PreSufFix;
  prefix?: PreSufFix;
};

export type CSSClass = {
  id: string;
  class: string;
}

export type TypeCSSProp = { [key: string]: CSSClass[] };

export interface iComponent {
  render(): any;
  getInstanceName(): string;
  getName(): string;
  getProps(): TypeUsableComponentProps[];
  getPropValue(
    propName: string,
    properties?: GetPropValueProperties
  ): TypeUsableComponentProps;
  getExportedCSSClasses(): { [key: string]: string };
  getCSSClasses(sectionName?: string | null): TypeCSSProp | CSSClass[];
  getInteractions(sectionName?: string | null): any;
  addProp(prop: TypeUsableComponentProps): void;
  setProp(key: string, value: any): void;
  setCSSClasses(key: string, value: { id: string; class: string }[]): void;
  setInteraction(key: string, value: InteractionType): void;
  decorateCSS(cssValue: string): string;
  getCategory(): CATEGORIES;
  initializeProp(prop: TypeUsableComponentProps): void;
  id: string;
}
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
  | { type: "icon"; value: string }
  | { type: "location"; value: TypeLocation }
  | { type: "dateTime"; value: string ; additionalParams? : {mode?:string, timeInterval?:number, yearRange? : number, yearStart?: number}}
  | { type: "multiSelect"; value: string[] }
  | { type: "file"; value: string }

export type TypeReactComponent = {
  type: string;
  props?: TypeUsableComponentProps[];
  cssClasses?: TypeCSSProp;
  interactions?: InteractionType;
  id?: string;
};
export type TypeUsableComponentProps = {
  id?: string;
  key: string;
  displayer: string;
  additionalParams?: { selectItems?: string[]; maxElementCount?: number };
  max?: number;
} & AvailablePropTypes & {
  getPropValue?: (
    propName: string,
    properties?: GetPropValueProperties
  ) => any;
};

type MemorizedElement = {
  jsxElement?: React.JSX.Element,
  value?: string;
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
  LOCATION = "location",
  HTTP_CODES = "HTTPCodes",
  BANNER = "banner",
  ECOMMERCE = "ecommerce",
}

export function generateId(key: string): string {
  return key + "-" + Math.round(Math.random() * 1000000000).toString();
}
//@ts-ignore
export abstract class Component
  extends React.Component<{}, { states: any; componentProps: any }>
  implements iComponent
{
  private shadowProps: TypeUsableComponentProps[] = [];
  private styles: any;
  public id: string;
  static category: CATEGORIES;
  private memorizedElements: {[id: string]: MemorizedElement} = {};

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ states: any; componentProps: any; }>, snapshot?: any): void {
    EventEmitter.emit(EVENTS.COMPONENT_DID_UPDATE, { data: this });
  }

  constructor(props: any, styles: any) {
    super(props);
    this.styles = styles;
    this.id = props?.id || generateComponentId();

    let sectionsKeyValue: any = {};
    Object.keys(this.styles).forEach((key, index) => {
      sectionsKeyValue[key] = [];
    });
    
    this.state = {
      states: {},
      componentProps: {
        props: props?.props || [],
        cssClasses: props?.cssClasses || {...sectionsKeyValue},
        interactions: props?.interactions || {...sectionsKeyValue}
      },
    };

    if (props?.props?.length) {
      props?.props.forEach((prop: TypeUsableComponentProps) => {
        this.setProp(prop.key, prop.value);
      });
    }

    EventEmitter.emit(EVENTS.COMPONENT_ADDED, { data: this });
  }

  static getName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return this.name;
  }

  getName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return (this.constructor as typeof Component).getName();
  }

  static getInstanceName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return this.name;
  }

  getInstanceName(): string {
    return (this.constructor as typeof Component).name;
  }

  static getCategory(): CATEGORIES {
    return this.category;
  }

  getCategory(): CATEGORIES {
    return (this.constructor as typeof Component).category;
  }

  getProps(): TypeUsableComponentProps[] {
    return this.state.componentProps.props;
  }

  getShadowProps(): TypeUsableComponentProps[] {
    return this.shadowProps;
  }

  private getFilteredProp(key: string, props: TypeUsableComponentProps[]): TypeUsableComponentProps | null {
    return props.find((prop: TypeUsableComponentProps) => prop.key === key) || null;
  }

  getShadowProp(key: string): TypeUsableComponentProps | null {
    return this.getFilteredProp(key, this.shadowProps);
  }

  getProp(key: string): TypeUsableComponentProps | null {
    return this.getFilteredProp(key, this.state.componentProps.props);
  }

  getPropValue(propName: string, properties?: GetPropValueProperties): any {
    let prop =
      properties?.parent_object?.filter(
        (prop: TypeUsableComponentProps) => prop.key === propName
      )[0] || this.getProp(propName);

    const isStringMustBeElement =
      prop?.type == "string" && !properties?.as_string;

    return isStringMustBeElement
      ? this.getPropValueAsElement(prop, properties)
      : prop?.value;
  }

  removeSuffixesAndPrefixes(htmlString: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const elementsWithClass = doc.querySelectorAll("[class]");
    elementsWithClass.forEach((element) => {
      const isSuffixOrPrefixElement =
        element.className.includes("suffix-prefix-elem");
      if (isSuffixOrPrefixElement) element.remove();
    });

    return doc.body.innerHTML;
  }


  getPropValueAsElement(
    prop: TypeUsableComponentProps,
    properties?: GetPropValueProperties
  ) {
    const sanitize = (dirty: string, options: sanitizeHtml.IOptions) => ({
      __html: sanitizeHtml(dirty, {
        allowedAttributes: {
          a: ["href", "name", "target"],
          "*": ["style", "class"],
        },
        parseStyleAttributes: false,
      }),
    });

    const preSufFixToElement = (elem?: PreSufFix) => {
      if (!elem) return null;

      return React.createElement("span", {
        className: `${elem.className} suffix-prefix-elem`,
        children: elem.label,
      });
    };

    const SanitizeHTML = ({ html, options }: any) => {
      const prefix = preSufFixToElement(properties?.prefix);
      const suffix = preSufFixToElement(properties?.suffix);

      const stringPrefix = renderToString(prefix || <></>);
      const stringSuffix = renderToString(suffix || <></>);

      const hasHtmlTag = html.indexOf("<");

      if (hasHtmlTag != 0 && hasHtmlTag != -1) {
        html = `<p> ${html} </p>`;
      }

      const firstTagStartIndex = html.indexOf(">") + 1;
      const firstTagEndIndex = html.lastIndexOf("<");

      const htmlWithPrefixAndSuffix =
        html.substring(0, firstTagStartIndex) +
        stringPrefix +
        html.substring(firstTagStartIndex, firstTagEndIndex) +
        stringSuffix +
        html.substring(firstTagEndIndex);

      const sanitizedHtml = sanitize(htmlWithPrefixAndSuffix, options);

      return (
        <InlineEditor
          id={prop.id}
          value={prop.value as string}
          props={this.getProps()}
          sanitizedHtml={sanitizedHtml}
        />
      );
    };


    if(!this.memorizedElements[prop.id]) {
      this.memorizedElements[prop.id] = {};
    }

    const memorizedElement: MemorizedElement  = this.memorizedElements[prop.id];
    const isValueChanged = (!!memorizedElement?.value || memorizedElement?.value == "") 
    && prop.value != memorizedElement?.value;

    if(!memorizedElement.jsxElement || isValueChanged){
      memorizedElement["jsxElement"] = <SanitizeHTML html={prop?.value}></SanitizeHTML>;
      memorizedElement["value"] = prop.value as string;
    }

    return memorizedElement.jsxElement;
  }

  getExportedCSSClasses() {
    return this.styles;
  }
  getCSSClasses(sectionName: string | null = null): TypeCSSProp | CSSClass[] {
    const { cssClasses } = this.state.componentProps;
    
    return sectionName 
      ? cssClasses[sectionName]
      : cssClasses;
  }

  private attachPropId(_prop: TypeUsableComponentProps) {
    if (_prop.type == "array" || _prop.type == "object") {
      (_prop.value as TypeUsableComponentProps[]).forEach(
        (v: TypeUsableComponentProps) => this.attachPropId(v)
      );
    } else {
      _prop.id = generateId(_prop.key)
    }

    return _prop;
  }

  addProp(prop: TypeUsableComponentProps) {
    this.shadowProps.push(JSON.parse(JSON.stringify(prop)));
    if (this.getProp(prop.key)) return;
    this.initializeProp(prop);
    this.state.componentProps.props.push(prop);
  }

  setProp(key: string, value: any): void {
    let i = this.state.componentProps.props
      .map((prop: any) => prop.key)
      .indexOf(key);

    const prop: TypeUsableComponentProps = this.state.componentProps.props[i];

    const isInvalidIndex = i === -1;
    const isMatchingSimpleValue =
      prop.type !== "array" && prop.type !== "object" && prop.value === value;
    const isMatchingComplexValue =
      (prop.type === "array" || prop.type === "object") &&
      prop.value.every((item) => item.getPropValue) &&
      prop.value === value;

    if (isInvalidIndex || isMatchingSimpleValue || isMatchingComplexValue) {
      return;
    }

    this.state.componentProps.props[i].value = value;
    this.state.componentProps.props[i] = this.attachValueGetter(
      this.state.componentProps.props[i]
    );
    this.setState({ componentProps: { ...this.state.componentProps } });
  }

  setComponentState(key: string, value: any): void {
    this.state.states[key] = value;
    this.setState({ ...this.state });
  }

  getComponentState(key: string): any {
    return this.state.states[key];
  }

  setCSSClasses(key: string, value: { id: string; class: string }[]) {
    this.state.componentProps.cssClasses[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }
  setInteraction(key: string, value: InteractionType) {
    this.state.componentProps.interactions[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }
  getInteractions(sectionName: string | null = null): string {
    return sectionName
      ? this.state.componentProps.interactions[sectionName]
      : this.state.componentProps.interactions;
  }
  decorateCSS(section: string) {
    let cssClass = [this.styles[section]];
    
    let cssManuplations = Object.entries(this.getCSSClasses()).filter(
      ([p, v]) => v.length > 0
    );

    cssManuplations.forEach(([key, value]: any) => {
      if (key === section) {
        value.forEach((el: any) => {
          cssClass.push(el.class);
        });
      }
    });

    cssClass.push(
      generateAutoClassName(this.id, section)
    );
    
    return cssClass.join(" ");
  }

  private attachValueGetter(propValue: TypeUsableComponentProps) {
    if (Array.isArray(propValue.value)) {
      if (propValue.type === "multiSelect") {
        propValue.value = propValue.value.filter((value) => typeof value === "string") as string[];
        return propValue;
      }
      propValue.value = propValue.value.filter((value) => value != null);
      propValue.value = propValue.value.map(
        (propValueItem: TypeUsableComponentProps) => {
          if (Array.isArray(propValueItem.value)) {
            propValueItem = this.attachValueGetter(propValueItem);
            propValueItem["getPropValue"] = (
              propName: string,
              properties?: GetPropValueProperties
            ) => {
              if (!properties) properties = {};
              properties.parent_object =
                propValueItem.value as TypeUsableComponentProps[];
              return this.getPropValue(propName, properties);
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

  castToString(elem: JSX.Element): string {
    return elem.props?.html?.replace(/<\/?[^>]+(>|$)/g, "");
  }

  private castingProcess(object: any) {
    let casted = object.value.map((propValue: any) => {
      let clonedPropValue = { ...propValue };
      if (clonedPropValue.hasOwnProperty("getPropValue")) {
        clonedPropValue.value.forEach((nestedObject: any, index: number) => {
          clonedPropValue[nestedObject.key] = clonedPropValue.getPropValue(
            nestedObject.key
          );
          if (nestedObject.hasOwnProperty("getPropValue")) {
            clonedPropValue[nestedObject.key] =
              this.castingProcess(nestedObject);
          }
        });
      } else {
        const value = this.getPropValue(clonedPropValue.key, {
          parent_object: object.value,
        });
        clonedPropValue = {
          key: clonedPropValue.key,
          value,
        };
      }
      return clonedPropValue;
    });

    if (object.type == "object") {
      const isObjectContainsAnotherObject = object.value.some(
        (val: TypeUsableComponentProps) => val.type == "object"
      );

      let tmpCasted = [...casted];
      casted = {};

      tmpCasted.forEach((manipulatedValue) => {
        const initialProp = manipulatedValue;
        let value: any = {};

        if (initialProp.type == "object" && isObjectContainsAnotherObject) {
          initialProp.value.forEach((propVal: any) => {
            value[propVal.key] = initialProp[propVal.key];
          });
        } else {
          value = manipulatedValue.value;
        }

        casted[manipulatedValue.key] = value;
      });
    }

    return casted;
  }

  insertForm(name: string, data: Object) {
    const project = getProjectHook()._id;

    const inputData: { [key: string]: any } = {};
    const entries = Object.entries(data);
    entries.forEach(([_, value], index) => {
      inputData[`input_${index}`] = value;
    });

    EventEmitter.emit(EVENTS.INSERT_FORM, { name, data: inputData, project });
  }

  /**
   * Assigns a unique ID to the given property and integrates a method for retrieving its current value.
   * This ensures each property is distinct and always reflects the latest state.
   * The function directly modifies the prop object in place so it's not necessary to return it.
   */
  initializeProp(prop: TypeUsableComponentProps) {
    this.attachPropId(prop);
    this.attachValueGetter(prop);
  }
}

export abstract class BaseNavigator extends Component {
  static category = CATEGORIES.NAVIGATOR;
}

export abstract class Testimonials extends Component {
  static category = CATEGORIES.TESTIMONIALS;
}

export abstract class BaseList extends Component {
  static category = CATEGORIES.LIST;
}

export abstract class BaseHeader extends Component {
  static category = CATEGORIES.HEADER;
}

export abstract class BasePricingTable extends Component {
  static category = CATEGORIES.PRICING;
}

export abstract class BaseFooter extends Component {
  static category = CATEGORIES.FOOTER;
}

export abstract class Team extends Component {
  static category = CATEGORIES.TEAM;
}

export abstract class BaseContent extends Component {
  static category = CATEGORIES.CONTENT;
}

export abstract class BaseDownload extends Component {
  static category = CATEGORIES.DOWNLOAD;
}

export abstract class BaseCallToAction extends Component {
  static category = CATEGORIES.CALLTOACTION;
}

export abstract class BaseSlider extends Component {
  static category = CATEGORIES.SLIDER;
}

export abstract class BaseFAQ extends Component {
  static category = CATEGORIES.FAQ;
}

export abstract class BaseHTTPCodes extends Component {
  static category = CATEGORIES.HTTP_CODES;
}

export abstract class BaseImageGallery extends Component {
  static category = CATEGORIES.IMAGEGALLERY;
}

export abstract class BaseModal extends Component {
  static category = CATEGORIES.MODAL;
}

export abstract class LogoClouds extends Component {
  static category = CATEGORIES.LOGOCLOUDS;
}

export abstract class BaseBanner extends Component {
  static category = CATEGORIES.BANNER;
}

export abstract class BaseECommerce extends Component {
  static category = CATEGORIES.ECOMMERCE;
}

export abstract class Location extends Component {
  static category = CATEGORIES.LOCATION;
  protected themes: TTheme[] = THEMES;

  constructor(props: any, styles: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "theme",
      displayer: "Map Theme",
      value: "",
      additionalParams: {
        selectItems: [
          "Theme-0",
          "Theme-1",
          "Theme-2",
          "Theme-3",
          "Theme-4",
          "Theme-5",
        ],
      },
    });
  }

  selectTheme(selectedTheme: string) {
    return this.themes.find((theme: TTheme) => {
      return theme.name == selectedTheme;
    });
  }
}

export abstract class BaseStats extends Component {
  static category = CATEGORIES.STATS;
}

export abstract class BaseContacts extends Component {
  static category = CATEGORIES.FORM;
}

export abstract class BaseFeature extends Component {
  static category = CATEGORIES.FEATURE;
}

export function generateAutoClassName(componentId: string, section: string){
  return `auto-generate-${componentId}-${section}`;
};