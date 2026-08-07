import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature20.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

interface Item {
  media: TypeMediaInputValue;
  overlay: boolean;
  subtitle: React.JSX.Element;
  sectionHeading: React.JSX.Element;
  description: React.JSX.Element;
  buttons: Button[];
}

class Feature20 extends BaseFeature {
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
      value: "High Quality Services",
    });
    
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Line",
      value: true,  
    });
    
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Build a positive impact on your business. Check out what we have to offer.",
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
      type: "boolean",
      key: "showDividers",
      displayer: "Dividers",
      value: true,  
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a5989e771c03002ccbd6c4?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],

              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/699c5a24771c03002cc6b0ca?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],

              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
              ],
            },
          ],
        },
      ],
    });

  }

  static getName(): string {
    return "Feature 20";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const description = this.getPropValue("description");
    const items = this.castToObject<Item[]>("items") || [];
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons && buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });
    const showLine = this.getPropValue("showLine") as boolean;
    const showDividers = this.getPropValue("showDividers") as boolean;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
           {(this.castToString(title) || subtitleExist || this.castToString(description) || hasValidButtons) && <div className={this.decorateCSS("header")}>
            {subtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
              {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {showLine && <div className={this.decorateCSS("line")} />}
              {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
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
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>}

            {items.map((item: Item, i: number) => {
              const itemButtons = item.buttons || [];
              const hasValidItemButtons = itemButtons.some((btn: Button) => {
                const btnText = this.castToString(btn.text);
                const btnIconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                return btnText || btnIconExist;
              });
              const hasTextContent = this.castToString(item.subtitle) || this.castToString(item.sectionHeading) || this.castToString(item.description) || hasValidItemButtons;
              return (hasTextContent || item.media) && (
              <React.Fragment key={i}>
                <div
                  className={`${this.decorateCSS("content")} ${
                    i % 2 === 1 ? this.decorateCSS("reverse") : ""
                  }`}
                >
                  <div className={`${this.decorateCSS("image-container")} ${!hasTextContent ? this.decorateCSS("full-width-container") : ""}`}>
                    {item.media && (
                      <Base.Media
                        value={item.media}
                        className={`${this.decorateCSS("image")} ${!hasTextContent ? this.decorateCSS("full-width-image") : ""}`}
                      />
                    )}
                    {item.overlay && item.media && <div className={this.decorateCSS("overlay")} />}
                  </div>
                  {hasTextContent && <Base.VerticalContent className={this.decorateCSS("text")}>
                    {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("item-subtitle")}>{item.subtitle}</Base.H5>}
                    {this.castToString(item.sectionHeading) && <Base.H4 className={this.decorateCSS("section-heading")}>{item.sectionHeading}</Base.H4>}
                    {this.castToString(item.description) && <Base.P className={this.decorateCSS("desc")}>{item.description}</Base.P>}
                    {hasValidItemButtons && (
                      <div className={this.decorateCSS("button-container")}>
                        {itemButtons.map((button: Button, buttonIndex: number) => {
                          const btnText = this.castToString(button.text);
                          const btnIconExist = button.icon && (button.icon.type === "icon" ? button.icon.name : button.icon.url);
                          if (!btnText && !btnIconExist) return null;
                          return (
                            <ComposerLink key={buttonIndex} path={button.url || '#'}>
                              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                {btnText && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                                {btnIconExist && <Base.Media className={this.decorateCSS("button-icon")} value={button.icon} />}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </Base.VerticalContent>}
                </div>
                {showDividers && i < items.length - 1 && <div className={this.decorateCSS("divider")} />}
              </React.Fragment>
            )})}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature20;