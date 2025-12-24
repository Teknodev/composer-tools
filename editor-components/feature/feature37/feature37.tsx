import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature37.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface ListItem {
  title: string;
  text: string;
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
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image","video"],
      },
      value: {
        type: "image",
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
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
    const list = this.castToObject<ListItem[]>("items");
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
            <div className={this.decorateCSS("header")}>
              <Base.VerticalContent>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("heading")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {this.castToString(description) && (
                  <Base.SectionDescription
                    className={this.decorateCSS("header-description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            </div>
          )}

          <Base.Row className={this.decorateCSS("featuresGrid")}>

            <div
              className={this.decorateCSS("featuresList")}
              style={{
                gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`,
                width: hasImage ? "" : "100%"
              }}
            >
              {list.map((item, index) => (
                <div key={index} className={this.decorateCSS("featureCard")}>
                  <div className={this.decorateCSS("iconContainer")}>
                    <Base.Media
                      value={item.icon}
                      className={this.decorateCSS("icon")}
                    />
                  </div>

                  <div className={this.decorateCSS("content")}>
                    <Base.H4 className={this.decorateCSS("title")}>
                      {item.title}
                    </Base.H4>
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {item.text}
                    </Base.SectionDescription>
                  </div>
                </div>
              ))}
            </div>

            {hasImage && (
              <div className={this.decorateCSS("imageWrapper")}>
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