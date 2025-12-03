import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TiTick } from "react-icons/ti";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type FeatureItem = {
  icon: TypeMediaInputValue;
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
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
    });

    const defaultItems = [
      "Expertly crafted components",
      "Built-in interactive examples",
      "Beautifully designed templates",
      "SEO & accessibility best practices",
      "Mobile notifications included",
      "Highly customizable layouts",
      "Cloud storage integration",
      "Real-time data sync",
      "Advanced security features",
      "Multi-language support",
      "Dark mode enabled",
      "Performance optimized",
      "User-friendly interface",
      "24/7 Customer support",
      "Regular updates",
      "Detailed documentation"
    ];

    this.addProp({
      type: "array",
      key: "features",
      displayer: "List",
      value: defaultItems.map((text, index) => ({
        type: "object",
        key: `item_${index}`,
        displayer: "Item",
        value: [
          {
            type: "media",
            key: "icon",
            displayer: "Icon / Image",
            additionalParams: {
              availableTypes: ["icon", "image"]
            },
            value: {
              type: "icon",
              name: "TiTick"
            }
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: text,
          },
        ],
      })),
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

  renderMedia(media: TypeMediaInputValue, className: string) {
    if (!media) return null;

    if (media.type === "image" && media.url) {
      return (
        <img 
          src={media.url} 
          alt="feature-icon" 
          className={className} 
        />
      );
    }

    if (media.type === "icon" && media.name) {
      if (media.name === "TiTick") {
        return <TiTick className={className} />;
      }
      return <Base.Icon name={media.name} propsIcon={{ className }} />;
    }

    return null;
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const iconBackground = this.getPropValue("iconBackground");
    const itemCount = this.getPropValue("itemCount");

    const features = this.castToObject<FeatureItem[]>("features");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const iconWrapperClass = `${this.decorateCSS("icon-wrapper")} ${
      iconBackground ? this.decorateCSS("with-bg") : ""
    }`;

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle 
                    className={`${this.decorateCSS("subtitle")} ${alignmentValue === "left" ? this.decorateCSS("subtitle-center") : ""}`}
                  >
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
              <Base.ListGrid 
                gridCount={{ pc: itemCount, tablet: 4, phone: 2 }} 
                className={this.decorateCSS("list")}
              >
                {features.map((item: FeatureItem, index: number) => {
                  const text = item.text;
                  const iconData = item.icon; 
                  const hasText = this.castToString(text);
                  
                  const hasMedia = (iconData?.type === "icon" && iconData.name) || (iconData?.type === "image" && iconData.url);

                  if (!hasText && !hasMedia) return null;

                  return (
                    <Base.Row key={index} className={this.decorateCSS("row")}>
                      {hasMedia && (
                        <div className={iconWrapperClass}>
                          {this.renderMedia(iconData, this.decorateCSS("icon"))}
                        </div>
                      )}
                      <Base.H6 className={this.decorateCSS("text")}>{text}</Base.H6>
                    </Base.Row>
                  );
                })}
              </Base.ListGrid>
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