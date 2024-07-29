import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp3.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
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
      key: "itemCount",
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
      ],
    });
  }

  getName(): string {
    return "Logo Comp 3";
  }

  render() {
    const itemCount = this.getPropValue("itemCount") || 4;
    const columnCount = Math.min(itemCount, 6);
    return (
      <div className={`${this.decorateCSS("container")}`}>
        <div className={`${this.decorateCSS("max-content")}`}>
          <div className={`${this.decorateCSS("logo-comp3-page")}`}>
            <div className={`${this.decorateCSS("titles")} `}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <div className={this.decorateCSS("title-line")}></div>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
            </div>
            <section>
              <center>
                <div
                  className={this.decorateCSS("image-child")}
                  style={{
                    gridTemplateColumns: `repeat(${columnCount}, minmax(200px, 1fr))`,
                  }}
                >
                  {this.getPropValue("items").map(
                    (item: any, index: number) => (
                      <div
                        className={this.decorateCSS(
                          `img-container-${itemCount}`
                        )}
                        key={index}
                      >
                        <img
                          className={this.decorateCSS("image")}
                          src={item.value}
                          alt=""
                        />
                      </div>
                    )
                  )}
                </div>
              </center>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoComp3Page;
