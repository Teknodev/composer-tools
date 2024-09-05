import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type listItem = {
  itemTitle: JSX.Element;
  itemIcon: string;
  itemText: JSX.Element;
};

class List6 extends BaseList {
  getName(): string {
    return "List 6";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "It's so challenging to find a good team to do great things. But we can provide you the best one.",
    });
    this.addProp({
      type: "boolean",
      key: "descriptionAnimation",
      displayer: "Description Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Design",
            },
            {
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "LuPenTool",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Development",
            },
            {
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "BiCodeBlock",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Marketing",
            },
            {
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "GoGoal",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Content writing",
            },
            {
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "BiBookContent",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
      ],
    });
  }

  render() {
    const listItems = this.castToObject<listItem[]>("listItems");
    const description = this.castToString(this.getPropValue("description"));

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {description && (
            <div
              className={this.decorateCSS(
                this.getPropValue("descriptionAnimation")
                  ? "description1"
                  : "description2",
              )}
            >
              {this.getPropValue("description")}
            </div>
          )}
          <ul className={this.decorateCSS("list-item")}>
            {listItems.map((listItem: listItem, index: number) => (
              <li
                key={index}
                className={this.decorateCSS("item-container")}
                style={{
                  borderTop: !description ? "none" : "",
                }}
              >
                <h3 className={this.decorateCSS("index")}>
                  {index < 9 ? `0${index + 1}` : index + 1}
                </h3>
                <div className={this.decorateCSS("cards")}>
                  {(listItem.itemIcon ||
                    this.castToString(listItem.itemTitle)) && (
                    <div className={this.decorateCSS("icon-title-container")}>
                      {listItem.itemIcon && (
                        <ComposerIcon
                          name={listItem.itemIcon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                            size: 40,
                          }}
                        />
                      )}
                      {this.castToString(listItem.itemTitle) && (
                        <h1 className={this.decorateCSS("list-item-h1")}>
                          {listItem.itemTitle}
                        </h1>
                      )}
                    </div>
                  )}

                  {this.castToString(listItem.itemText) && (
                    <p className={this.decorateCSS("list-item-p")}>
                      {listItem.itemText}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List6;
