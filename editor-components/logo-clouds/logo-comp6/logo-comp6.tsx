import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp6.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};

class LogoComp6Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Logo Clouds",
    });

    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce6bbd2970002c6298cf?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce6bbd2970002c6298d0?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce6bbd2970002c6298d1?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce6bbd2970002c6298d2?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
      max: 4,
    });
  }
  getName(): string {
    return "Logo Comp 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("logo-comp6-page")}>
            <div className={this.decorateCSS("title-content")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("items-layout")}>
              {this.getPropValue("list-items").map(
                (listItem: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("all-card")}
                    style={{
                      width: 90 / this.getPropValue("itemCount") + "%",
                    }}
                  >
                    <div className={this.decorateCSS("items-content")}>
                      <img src={listItem.value[0].value} alt="itemPhoto" />
                      <p className={this.decorateCSS("list-item-p")}>{listItem.value[1].value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoComp6Page;
