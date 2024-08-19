import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp3.module.scss";

class LogoComp3Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Associated Brand",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Brands Available",
    });
    this.addProp({
      type: "number",
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 4,
      max: 6,
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d1?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d4?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d2?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d3?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d3?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d3?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d3?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551869f72de2002caaf0d1?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
      ],
    });
  }

  getName(): string {
    return "Logo Comp 3";
  }

  render() {
    const items = this.getPropValue("items");

    const itemCountInRow: number = this.getPropValue("itemCountInRow");
    const itemCount: number = items.length;

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    return (
      <div className={`${this.decorateCSS("container")}`}>
        <div className={`${this.decorateCSS("max-content")}`}>
          <div className={`${this.decorateCSS("wrapper")}`}>
            {(titleExist || subtitleExist) && (
              <div className={`${this.decorateCSS("titles")} `}>
                {titleExist && (
                  <h1 className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </h1>
                )}
                {titleExist && subtitleExist && (
                  <div className={this.decorateCSS("title-line")}></div>
                )}
                {subtitleExist && (
                  <h1 className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </h1>
                )}
              </div>
            )}
            {items?.length > 0 && (
              <section
                className={this.decorateCSS("items")}
                style={{
                  gridTemplateColumns: `repeat(${itemCountInRow}, 1fr)`,
                }}
              >
                {items.map((item: any, index: number) => {
                  if (item.value)
                    return (
                      <div
                        className={`
                        ${this.decorateCSS("item-container")}
                        ${this.decorateCSS(index % itemCountInRow !== itemCountInRow - 1 ? "insert-line-right" : "")}
                        ${this.decorateCSS(index < itemCount - itemCountInRow ? "insert-line-bottom" : "")}
                      `}
                        key={index}
                      >
                        <img
                          className={this.decorateCSS("image")}
                          src={item.value}
                          alt="logo"
                        />
                      </div>
                    );
                  return null;
                })}
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LogoComp3Page;
