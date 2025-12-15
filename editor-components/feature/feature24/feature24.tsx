import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
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
      value:
        "Completely iterate covalent strategic theme areas via accurate e-markets.",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "Expertly crafted components" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "Built-in interactive examples" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "Beautifully designed templates" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "SEO & accessibility best practices" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "Highly customizable layouts" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "TiTick" },
            },
            { type: "string", key: "text", displayer: "Text", value: "Performance optimized" },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Get Started",
          "",
          null,
          null,
          "Primary"
        ),
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
    const iconBackground = this.getPropValue("iconBackground");
    const itemCount = this.getPropValue("itemCount");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const features = this.castToObject<FeatureItem[]>("features");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const iconWrapperClassName = `${this.decorateCSS("icon-wrapper")} ${
      iconBackground ? this.decorateCSS("with-bg") : ""
    }`;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(subtitleExist || titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
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
              </Base.VerticalContent>
            )}

            {features.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCount, tablet: 4, phone: 2 }}
                className={this.decorateCSS("list")}
              >
                {features.map((item: FeatureItem, index: number) => {
                  const text = item.text;
                  const hasText = this.castToString(text);

                  const media = item.icon;
                  const hasMedia =
                    !!media &&
                    ((media.type === "icon" && !!media.name) ||
                      (media.type !== "icon" && !!media.url));

                  if (!hasText && !hasMedia) return null;

                  const mediaEl = hasMedia ? (
                    <Base.Media
                      value={media}
                      className={this.decorateCSS("icon")}
                    />
                  ) : null;

                  const rowClassName = `${this.decorateCSS("row")} ${
                    !iconBackground ? this.decorateCSS("no-bg-icon") : ""
                  }`;

                  return (
                    <Base.Row key={index} className={rowClassName}>
                      {mediaEl &&
                        (iconBackground ? (
                          <div className={iconWrapperClassName}>{mediaEl}</div>
                        ) : (
                          mediaEl
                        ))}
                      {hasText && (
                        <Base.H6 className={this.decorateCSS("text")}>
                          {text}
                        </Base.H6>
                      )}
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
                          <Base.Media
                            value={{ type: "icon", name: icon }}
                            className={this.decorateCSS("btn-icon")}
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
