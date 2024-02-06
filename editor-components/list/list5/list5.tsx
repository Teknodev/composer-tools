import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class List5 extends BaseList {
  getName(): string {
    return "List 5";
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
              key: "item-title",
              displayer: "Item Title",
              value: "Production",
            },
            {
              type: "icon",
              key: "item-icon",
              displayer: "Item Icon",
              value: "GrFormNext",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "its are produced and crafted by hand with love. Any product is unique on its own. We care about the quality of every piece.",
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
              key: "item-title",
              displayer: "Item Title",
              value: "Shipment",
            },
            {
              type: "icon",
              key: "item-icon",
              displayer: "Item Icon",
              value: "GrFormNext",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We deliver our items all over the world. The delivery is free in Vancouver, $10 within Canada, and international shipping is calculated individually.",
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
              key: "item-title",
              displayer: "Item Title",
              value: "Marketing",
            },
            {
              type: "icon",
              key: "item-icon",
              displayer: "Item Icon",
              value: "GrFormNext",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We sell our products on printing markets such as SANAR, in Vans stores and showrooms, and you can also read our featured stories in the online magazine.",
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
              key: "item-title",
              displayer: "Item Title",
              value: "Marketing",
            },
            {
              type: "icon",
              key: "item-icon",
              displayer: "Item Icon",
              value: "GrFormNext",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We sell our products on printing markets such as SANAR, in Vans stores and showrooms, and you can also read our featured stories in the online magazine.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });
  }
  render(): ReactNode {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("list-item")}>
            {this.getPropValue("list-items").map(
              (listItem: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={this.decorateCSS("item-container")}
                    style={{
                      flex: `0 0 ${100 / this.getPropValue("itemCount") - 2}%`,
                    }}
                  >
                    <div className={this.decorateCSS("header-line")}>
                      <div className={this.decorateCSS("icon")}>
                        <ComposerIcon
                          name={listItem.value[1].value}
                          propsIcon={{
                            className: `${styles["_icon"]}`,
                            size: 60,
                            onClick: () => {
                              console.log("test");
                            },
                          }}
                        />
                      </div>
                      <div className={this.decorateCSS("item-index")}>
                        {(index + 1).toLocaleString("en-US", {
                          minimumIntegerDigits: 2,
                          useGrouping: false,
                        })}
                      </div>
                    </div>
                    <h1 className={this.decorateCSS("list-item-value-h1")}>
                      {listItem.value[0].value}
                    </h1>
                    <p className={this.decorateCSS("list-item-value-p")}>
                      {listItem.value[2].value}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default List5;
