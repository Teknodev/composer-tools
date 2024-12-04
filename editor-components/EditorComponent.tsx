import axios from "axios";
import * as React from "react";
import { getProjectHook } from "../custom-hooks/project";
import { EventEmitter } from "../EventEmitter";
import sanitizeHtml from "sanitize-html";
import { renderToString } from "react-dom/server";
import { THEMES, TTheme } from "./location/themes";
import { LexicalEditor } from "lexical/LexicalEditor";
import { $createParagraphNode, $getRoot, EditorState, TextNode } from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { ExtendedTextNode } from "../../prefabs/playground/plugins/ExtendedTextNode";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import InlineEditor from "../../prefabs/playground/inline-editor";

type PreSufFix = {
  label: string;
  className: string;
};

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
type TypeCSSProp = { [key: string]: { id: string; class: string; }[]; };
export type iComponent = {
  render(): any;
  getName(): string;
  getProps(): TypeUsableComponentProps[];
  getPropValue(propName: string, properties?: GetPropValueProperties): TypeUsableComponentProps;
  getExportedCSSClasses(): { [key: string]: string; };
  getCSSClasses(sectionName?: string | null): any;
  addProp(prop: TypeUsableComponentProps): void;
  setProp(key: string, value: any): void;
  setCSSClasses(key: string, value: { id: string; class: string; }[]): void;
  decorateCSS(cssValue: string): string;
  getCategory(): CATEGORIES;
  id: string;

  customStates: any
};
type AvailablePropTypes =
  | { type: "string"; value: string; }
  | { type: "number"; value: number; }
  | { type: "boolean"; value: boolean; }
  | { type: "page"; value: string; }
  | { type: "array"; value: TypeUsableComponentProps[]; }
  | { type: "object"; value: TypeUsableComponentProps[]; }
  | { type: "image"; value: string; }
  | { type: "video"; value: string; }
  | { type: "select"; value: string; }
  | { type: "color"; value: string; }
  | { type: "icon"; value: string; }
  | { type: "location"; value: TypeLocation; };

export type TypeReactComponent = {
  type: string;
  props: TypeUsableComponentProps[];
  cssClasses: TypeCSSProp;
  children: string;
  id: string;
};
export type TypeUsableComponentProps = {
  id?: string;
  key: string;
  displayer: string;
  additionalParams?: { selectItems?: string[]; maxElementCount?: number; };
  max?: number;
} & AvailablePropTypes & {
  getPropValue?: (propName: string, properties?: GetPropValueProperties) => any;
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

//@ts-ignore
export abstract class Component extends React.Component<{}, { states: any; componentProps: any; }> implements iComponent {
  private styles: any;
  private _props: any;
  public customStates: any = {};
  public id: string;
  protected category: CATEGORIES;
  abstract getName(): string;

  constructor(props: any, styles: any) {
    super(props);
    this._props = props;
    this.styles = styles;
    this.id = Math.random().toString();
    this.onChange = this.onChange.bind(this);
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
    let props: TypeUsableComponentProps[] = this.state.componentProps.props.filter((prop: TypeUsableComponentProps) => prop.key === key);
    let prop = props[0] || null;
    return prop;
  }

  getPropValue(propName: string, properties?: GetPropValueProperties): any {
    let prop = properties?.parent_object?.filter((prop: TypeUsableComponentProps) => prop.key === propName)[0] || this.getProp(propName);

    const isStringMustBeElement = prop?.type == "string" && !properties?.as_string;

    return isStringMustBeElement ? this.getPropValueAsElement(prop, properties) : prop?.value;
  }

  removeSuffixesAndPrefixes(htmlString: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const elementsWithClass = doc.querySelectorAll('[class]');
    elementsWithClass.forEach(element => {
      const isSuffixOrPrefixElement = element.className.includes("suffix-prefix-elem");
      if (isSuffixOrPrefixElement) element.remove();
    });

    return doc.body.innerHTML;
  }

  updateHTML(editor: LexicalEditor, value: string, clear: boolean) {
    const root = $getRoot();
    const parser = new DOMParser();
    const dom = parser.parseFromString(value, "text/html");
    const nodes = $generateNodesFromDOM(editor, dom);
    if (clear) {
      root.clear();
    }
    try {
      root.append(...nodes);
    } catch {
      const p = $createParagraphNode();
      p.append(...nodes);
      root.append(p);
    }
  };

  prepopulatedRichText(editor: LexicalEditor, html: string) {

    this.updateHTML(
      editor,
      html,
      true
    );

    return editor;
  };

  findObjectById(arr: any, targetId: string) {
    for (let i in arr) {
      if (arr[i].id === targetId) {
        return i.toString();
      }
      if (arr[i].value) {
        let result: any = this.findObjectById(arr[i].value, targetId);
        if (result) {
          return i.toString() + "." + result;
        }
      }
    }
    return null;
  };

  setValueAtPath(obj: any, path: string[], value: string) {
    let current = obj;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]].value;
    }
    current[path[path.length - 1]].value = value;
    return current;
  };

  onStateReady(editor: LexicalEditor) {
    const htmlString = $generateHtmlFromNodes(editor, null);

    let propRoute: string[] = this.findObjectById(
      this.getProps(),
      editor._config.namespace,
    ).split(".");
    let componentProps = this.getProps();
    this.setValueAtPath(componentProps, propRoute, htmlString);

    EventEmitter.emit("propUpdated", {
      component: this,
      type: componentProps[parseInt(propRoute[0])].type,
      key: componentProps[parseInt(propRoute[0])].key,
      value: componentProps[parseInt(propRoute[0])].value,

    });
  }

  onChange(editorState: EditorState, editor: LexicalEditor) {
    editorState.read.bind(this);
    editorState.read(() => this.onStateReady(editor));
  };

  getPropValueAsElement(prop: TypeUsableComponentProps, properties?: GetPropValueProperties) {
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

      return React.createElement("span", { className: `${elem.className} suffix-prefix-elem`, children: elem.label });
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

      const htmlWithPrefixAndSuffix = html.substring(0, firstTagStartIndex) + stringPrefix + html.substring(firstTagStartIndex, firstTagEndIndex) + stringSuffix + html.substring(firstTagEndIndex);

      const sanitizedHtml = sanitize(htmlWithPrefixAndSuffix, options);

      const editorConfig = {
        namespace: prop.id,
        onError: (error: Error) => {
          console.error('Lexical Error:', error);
        },
        editorState: (editor: any) => this.prepopulatedRichText(editor, prop.value as string),
        nodes: [
          ExtendedTextNode,
          { replace: TextNode, with: (node: TextNode) => new ExtendedTextNode(node.__text) },
          ListNode,
          ListItemNode,
          HeadingNode,
          QuoteNode,
          CodeNode,
          CodeHighlightNode
        ]
      };

      return (
        <InlineEditor
          initialConfig={editorConfig}
          onChange={this.onChange}
          HTML={
            //@ts-ignore
            () => <blinkpage dangerouslySetInnerHTML={sanitizedHtml}></blinkpage>
          }
        />
      );
    };

    return <SanitizeHTML html={prop?.value}></SanitizeHTML>;
  }

  getExportedCSSClasses() {
    return this.styles;
  }
  getCSSClasses(sectionName: string | null = null): string {
    return sectionName ? this.state.componentProps.cssClasses[sectionName] : this.state.componentProps.cssClasses;
  }
  addProp(prop: TypeUsableComponentProps) {
    const attachPropId = (_prop: TypeUsableComponentProps) => {
      if (_prop.type == "array" || _prop.type == "object") {
        _prop.value = (_prop.value as TypeUsableComponentProps[]).map((v: TypeUsableComponentProps) => attachPropId(v));
      } else {
        _prop.id = _prop.key + "-" + Math.round(Math.random() * 1000000000).toString();
      }
      return _prop;
    };
    prop = attachPropId(prop);
    prop = this.attachValueGetter(prop);

    this.state.componentProps.props.push(prop);
  }

  setProp(key: string, value: any): void {
    let i = this.state.componentProps.props.map((prop: any) => prop.key).indexOf(key);

    if (i == -1) return;

    this.state.componentProps.props[i].value = value;
    this.state.componentProps.props[i] = this.attachValueGetter(this.state.componentProps.props[i]);
    this.setState({ componentProps: { ...this.state.componentProps } });
  }

  setComponentState(key: string, value: any): void {
    this.customStates[key] = value;
    EventEmitter.emit("forceReload");
    EventEmitter.emit("stateChanged", { id: this.id, key, value });

  }

  getComponentState(key: string): any {
    return this.customStates[key];
  }

  setCSSClasses(key: string, value: { id: string; class: string; }[]) {
    this.state.componentProps.cssClasses[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }

  decorateCSS(cssValue: string) {
    let cssClass = [this.styles[cssValue]];
    let cssManuplations = Object.entries(this.getCSSClasses()).filter(([p, v]) => v.length > 0);
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
          propValueItem["getPropValue"] = (propName: string, properties?: GetPropValueProperties) => {
            if (!properties) properties = {};
            properties.parent_object = propValueItem.value as TypeUsableComponentProps[];
            return this.getPropValue(propName, properties);
          };
        }

        return propValueItem;
      });
    }
    return propValue;
  }

  castToObject<Type>(propName: string): Type {
    let i = this.state.componentProps.props.map((prop: any) => prop.key).indexOf(propName);

    let castedObject = this.castingProcess(this.state.componentProps.props[i]);
    return castedObject;
  }

  castToString(elem: JSX.Element): string {
    return elem.props?.html;
  }

  private castingProcess(object: any) {
    let casted = object.value.map((propValue: any) => {
      let clonedPropValue = { ...propValue };
      if (clonedPropValue.hasOwnProperty("getPropValue")) {
        clonedPropValue.value.forEach((nestedObject: any, index: number) => {
          clonedPropValue[nestedObject.key] = clonedPropValue.getPropValue(nestedObject.key);
          if (nestedObject.hasOwnProperty("getPropValue")) {
            clonedPropValue[nestedObject.key] = this.castingProcess(nestedObject);
          }
        });
      } else {
        const value = this.getPropValue(clonedPropValue.key, { parent_object: object.value });
        clonedPropValue = {
          key: clonedPropValue.key,
          value,
        };
      }
      return clonedPropValue;
    });

    if (object.type == "object") {
      const isObjectContainsAnotherObject = object.value.some((val: TypeUsableComponentProps) => val.type == "object");

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
  insertForm(name: string, data: Object) {
    const projectSettings = JSON.parse(getProjectHook().data);
    const project = projectSettings._id;
    let config = {
      ...{ data: { name, data, project } },
      method: "post",
      url: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : process.env.NEXT_PUBLIC_PUBLIC_URL + "/fn-execute/project/insert-form",
    };
    return axios.request(config).then((r: any) => r.data);
  }
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
  protected themes: TTheme[] = THEMES;

  constructor(props: any, styles: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "theme",
      displayer: "Map Theme",
      value: "Theme-0",
      additionalParams: {
        selectItems: ["Theme-0", "Theme-1", "Theme-2", "Theme-3", "Theme-4", "Theme-5"],
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
  protected category = CATEGORIES.STATS;
}

export abstract class BaseContacts extends Component {
  protected category = CATEGORIES.FORM;

  insertForm(name: string, data: Object) {
    const projectSettings = JSON.parse(getProjectHook().data);
    const project = projectSettings._id;
    let config = {
      ...{ data: { name, data, project } },
      method: "post",
      url: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : process.env.NEXT_PUBLIC_PUBLIC_URL + "/fn-execute/project/insert-form",
    };
    return axios.request(config).then((r: any) => r.data);
  }
}

export abstract class BaseFeature extends Component {
  protected category = CATEGORIES.FEATURE;
}
