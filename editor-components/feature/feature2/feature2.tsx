import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Box = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
  button: Button;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Feature2 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Consultation and initial meeting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The architecture company meets with the client to discuss their needs, budget, and timeline. They may also visit the site to get a better understanding of the project.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaGlobe",
              },
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Concept design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Based on the client's requirements, the architecture company creates a concept design that outlines the overall vision for the project. This may include sketches, 3D models, or computer-generated renderings.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "SiAltiumdesigner",
              },
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Design development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Once the client approves the concept design, the architecture company begins to develop detailed drawings and plans. This may involve collaborating with engineers, contractors, and other specialists to ensure that the design is feasible.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "CgIfDesign",
              },
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Permitting and approvals",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities. This may involve submitting plans and documents for review and responding to any questions or co",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaRegNewspaper",
              },
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

    this.addProp({
      type: "boolean",
      key: "number",
      displayer: "Number",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setComponentState("windowWidth", window.innerWidth);
      window.addEventListener("resize", () => {
        this.setComponentState("windowWidth", window.innerWidth);
      });
    }
  }

  static getName(): string {
    return "Feature 2";
  }

  getItemCount(): number {
    if (this.getComponentState("windowWidth") <= 896) return 1;

    return this.getPropValue("itemCount");
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<Button[]>("buttons");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const hasValidButtons = buttons && buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    const items = this.castToObject<Box[]>("items");
    const itemCount: number = this.getItemCount();
    const showBadge = !!this.getPropValue("number");
    const showLine = !!this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: itemCount, tablet: 4, phone: 1 }} className={this.decorateCSS("wrapper")}>
            {items.map((item: Box, index: number) => {
              const subtitleExist = !!this.castToString(item.subtitle);
              const titleExist = !!this.castToString(item.title);
              const descExist = !!this.castToString(item.description);
              const iconExist = !!(item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url));
              const btnText = item.button ? this.castToString(item.button.text) : "";
              const btnIconExist = item.button?.icon && (item.button.icon.type === "icon" ? item.button.icon.name : item.button.icon.url);
              const hasItemButton = !!(btnText || btnIconExist);
              const shouldRender = subtitleExist || titleExist || descExist || iconExist;

              if (!shouldRender) return null;

              return (
                <div
                  key={index}
                  className={`
                      ${this.decorateCSS("item")}
                      ${!showLine
                        ? this.decorateCSS("remove-line")
                        : (((index + 1) % itemCount === 0) ||
                          (items[index + 1] && !items[index + 1]?.icon?.name))
                          ? this.decorateCSS("remove-line")
                          : ""}
                    `}
                >
                  {iconExist && (
                    <div className={this.decorateCSS("icon-container")}>
                      {showBadge && (
                        <Base.P className={this.decorateCSS("item-index")}>{index + 1}.</Base.P>
                      )}
                      <Base.Media
                        value={item.icon}
                        className={this.decorateCSS("icon")}
                      />
                    </div>
                  )}
                  <Base.VerticalContent className={this.decorateCSS("item-content")}>
                    {subtitleExist && (
                      <Base.H6 className={this.decorateCSS("item-subtitle")}>
                        {item.subtitle}
                      </Base.H6>
                    )}
                    {titleExist && (
                      <Base.H5 className={this.decorateCSS("item-title")}>
                        {item.title}
                      </Base.H5>
                    )}
                    {descExist && (
                      <Base.P className={this.decorateCSS("item-description")}>
                        {item.description}
                      </Base.P>
                    )}
                    {hasItemButton && (
                      <ComposerLink path={item.button.url}>
                        <Base.Button buttonType={item.button.type} className={this.decorateCSS("item-button")}>
                          {btnText && (
                            <Base.P className={this.decorateCSS("item-button-text")}>{item.button.text}</Base.P>
                          )}
                          {btnIconExist && (
                            <Base.Media className={this.decorateCSS("item-button-icon")} value={item.button.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </Base.VerticalContent>
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature2;
