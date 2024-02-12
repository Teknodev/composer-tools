import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";

class List7 extends BaseList {
  getName(): string {
    return "List 7";
  }
  constructor(props?: any) {
    super(props, styles);

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
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                type: "string",
                key: "item-title",
                displayer: "Item Title",
                value:
                  "Contagious Energy",
              },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                type: "string",
                key: "item-title",
                displayer: "Item Title",
                value:
                  "Contagious Energy",
              },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Item Title",
              value:
                "Contagious Energy",
            },
          ],
        },
      ],
    });
    // this.addProp({
    //   type: "number",
    //   key: "itemCount",
    //   displayer: "Item Count in a Row",
    //   value: 3,
    //   max: 4,
    // });
  }
  render(): ReactNode {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("list-items").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
              >
              <div className={this.decorateCSS("item-content")}>
                <h3 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</h3>
                <h4 className={this.decorateCSS("title")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p")}>{listItem.value[0].value}</p>
              </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default List7;
