import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {description && (
            <Base.SectionTitle
              className={this.decorateCSS(
                this.getPropValue("descriptionAnimation")
                  ? "sectionTitle"
                  : "sectionTitle-no-animation",
              )}
            >
              {this.getPropValue("description")}
            </Base.SectionTitle>
          )}
          <div className={this.decorateCSS("list-item")}>
            {listItems.map((listItem: listItem, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("item-container")}
                style={{
                  borderTop: !description ? "none" : "",
                }}
              >
                <div className={this.decorateCSS("index")}>
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                <div className={this.decorateCSS("cards")}>
                  {(listItem.itemIcon ||
                    this.castToString(listItem.itemTitle)) && (
                      <div className={this.decorateCSS("icon-title-container")}>
                        {listItem.itemIcon && (
                          <ComposerIcon
                            name={listItem.itemIcon}
                            propsIcon={{
                              className: this.decorateCSS("icon")
                            }}
                          />
                        )}
                        {this.castToString(listItem.itemTitle) && (
                          <div className={this.decorateCSS("title")}>
                            {listItem.itemTitle}
                          </div>
                        )}
                      </div>
                    )}

                  {this.castToString(listItem.itemText) && (
                    <div className={this.decorateCSS("description")}>
                      {listItem.itemText}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List6;
