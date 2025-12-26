import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature37.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface ListItem {
  title: React.JSX.Element;
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
}

class Feature37 extends BaseFeature {
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
      value: "Why Choose Us?",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Count in a Row",
      value: 1,
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image","video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e36c0f959f6002d79b66c?alt=media",
      },
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Perfect Design",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon","image"] },
              value: { type: "icon", name: "FaTools" },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Good Quality",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon","image"] },
              value: { type: "icon", name: "FaThumbsUp" },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Free Test-Drive",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon","image"] },
              value: { type: "icon", name: "FaCar" },
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Feature 37";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");
    const itemsPerRow = this.getPropValue("itemsPerRow") || 4;
    const image = this.getPropValue("image");
    const list = (this.castToObject<ListItem[]>("items") || []);
    const filteredList = list.filter((item) => {
      const hasTitle = this.castToString(item.title);
      const hasText = this.castToString(item.text);
      const hasIcon =
        (item.icon?.type === "icon" && item.icon.name) ||
        ((item.icon?.type === "image" || item.icon?.type === "video") &&
          item.icon.url);
      return hasTitle || hasText || hasIcon;
    });
    const isSparse = filteredList.length > 0 && filteredList.length <= 2;
    const isEmpty = filteredList.length === 0;
    const hasImage = image && (
      (image.type === "image" && image.url) || 
      (image.type === "video" && image.url)
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          {(this.castToString(subtitle) ||
            this.castToString(title) ||
            this.castToString(description)) && (
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
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
          )}

          <Base.Row
            className={`${this.decorateCSS("features-grid")}${
              isSparse ? ` ${this.decorateCSS("features-grid-compact")}` : ""
            }${isEmpty ? ` ${this.decorateCSS("features-grid-empty")}` : ""}`}
          >

            <Base.ListGrid
              gridCount={{
                pc: itemsPerRow,
                tablet: 1,
                phone: 1,
              }}
              className={`${this.decorateCSS("features-list")}${
                isEmpty ? ` ${this.decorateCSS("features-list-empty")}` : ""
              }${hasImage ? "" : ` ${this.decorateCSS("features-list-full")}`}`}
            >
              {filteredList.map((item, index) => {
                const hasItemTitle = this.castToString(item.title);
                const hasItemText = this.castToString(item.text);
                const hasItemIcon =
                  (item.icon?.type === "icon" && item.icon.name) ||
                  ((item.icon?.type === "image" ||
                    item.icon?.type === "video") &&
                    item.icon.url);

                return (
                  <div key={index} className={this.decorateCSS("feature-card")}>
                    {hasItemIcon && (
                      <div className={this.decorateCSS("icon-container")}>
                        <Base.Media
                          value={item.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    )}

                    {(hasItemTitle || hasItemText) && (
                      <div className={this.decorateCSS("content")}>
                        {hasItemTitle && (
                          <Base.H4 className={this.decorateCSS("item-title")}>
                            {item.title}
                          </Base.H4>
                        )}
                        {hasItemText && (
                          <Base.SectionDescription
                            className={this.decorateCSS("item-description")}
                          >
                            {item.text}
                          </Base.SectionDescription>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </Base.ListGrid>

            {hasImage && (
              <div
                className={`${this.decorateCSS("image-wrapper")}${
                  isSparse ? ` ${this.decorateCSS("image-wrapper-compact")}` : ""
                }${isEmpty ? ` ${this.decorateCSS("image-wrapper-full")}` : ""}`}
              >
                <Base.Media
                  value={image}
                  className={this.decorateCSS("image")}
                />
                {overlay && <div className={this.decorateCSS("overlay")} />}
              </div>
            )}

          </Base.Row>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature37;
