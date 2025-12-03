import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type FeatureItem = {
  icon: string;
  text: React.JSX.Element;
};

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
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "List",
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

  renderIcon(iconName: string, className: string) {
    if (!iconName) return null;
    return <Base.Icon name={iconName} propsIcon={{ className }} />;
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const iconBackground = this.getPropValue("iconBackground");

    const features = this.castToObject<FeatureItem[]>("features");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const iconWrapperClass = `${this.decorateCSS("icon-wrapper")} ${
      iconBackground ? this.decorateCSS("with-bg") : ""
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
                {features.map((item: FeatureItem, index: number) => {
                  const text = item.text;
                  const icon = item.icon;
                  const hasText = this.castToString(text);
                  
                  if (!hasText && !icon) return null;

                  return (
                    <Base.Row key={index} className={this.decorateCSS("row")}>
                      {icon && (
                        <div className={iconWrapperClass}>
                          {this.renderIcon(icon, this.decorateCSS("icon"))}
                        </div>
                      )}
                      <Base.H6 className={this.decorateCSS("text")}>{text}</Base.H6>
                    </Base.Row>
                  );
                })}
              </div>
            )}

            {buttons.length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((buttonItem: INPUTS.CastedButton, index: number) => {
                  const text = buttonItem.text;
                  const url = buttonItem.url;
                  const type = buttonItem.type;
                  const icon = buttonItem.icon;

                  if (!this.castToString(text)) return null;

                  return (
                    <ComposerLink key={index} path={url}>
                      <Base.Button
                        buttonType={type}
                        className={this.decorateCSS("button")}
                      >
                        {icon && (
                          <Base.Icon 
                            name={icon} 
                            propsIcon={{ className: this.decorateCSS("btn-icon") }} 
                          />
                        )}
                        <Base.P className={this.decorateCSS("button-text")}>
                          {text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature24;