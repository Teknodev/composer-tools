import * as React from "react";
import { BaseFeature, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TiTick } from "react-icons/ti";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature24 extends BaseFeature {
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
      value: "A better way to improve skills",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "boolean",
      key: "enableIconBackground",
      displayer: "Icon Background",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Row",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Expertly crafted components",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Built-in interactive examples",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Beautifully designed templates",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "SEO & accessibility best practices",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Mobile notifications included",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TiTick",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Highly customizable layouts",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Feature 24";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const features = this.getPropValue("features");
    const enableIconBackground = this.getPropValue("enableIconBackground");

    const iconWrapperClass = `${this.decorateCSS("icon-wrapper")} ${
      enableIconBackground ? this.decorateCSS("with-bg") : ""
    }`;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {this.castToString(description) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

            {features.length > 0 && (
              <div className={this.decorateCSS("list")}>
                {features.map((item: TypeUsableComponentProps, index: number) => {
                  const text = item.getPropValue("text");
                  const icon = item.getPropValue("icon");
                  const hasText = this.castToString(text);
                  
                  if (!hasText && !icon) return null;

                  return (
                    <Base.Row key={index} className={this.decorateCSS("row")}>
                      {icon && (
                        <div className={iconWrapperClass}>
                          {icon === "TiTick" ? (
                            <TiTick className={this.decorateCSS("icon")} />
                          ) : (
                            <Base.Icon 
                              name={icon} 
                              propsIcon={{ className: this.decorateCSS("icon") }} 
                            />
                          )}
                        </div>
                      )}
                      <Base.P className={this.decorateCSS("text")}>{text}</Base.P>
                    </Base.Row>
                  );
                })}
              </div>
            )}

            {this.getPropValue("buttons").length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {this.castToObject<INPUTS.CastedButton[]>("buttons").map(
                  (button: INPUTS.CastedButton, index: number) => {
                    return (
                      this.castToString(button.text) && (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button
                            buttonType={button.type}
                            className={this.decorateCSS("button")}
                          >
                            <Base.P className={this.decorateCSS("button-text")}>
                              {button.text}
                            </Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    );
                  }
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature24;