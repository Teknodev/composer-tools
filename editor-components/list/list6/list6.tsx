import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type listItem = {
  itemIndex: React.JSX.Element;
  itemTitle: React.JSX.Element;
  itemIcon: string;
  itemText: React.JSX.Element;
};

class List6 extends BaseList {
  static getName(): string {
    return "List 6";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Process",
    });
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
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
      value: true,
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
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
              key: "itemIndex",
              displayer: "Item Index",
              value: "01",
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Design",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              value: {
                type: "icon",
                name: "LuPenTool",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
              key: "itemIndex",
              displayer: "Item Index",
              value: "02",
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Development",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              value: {
                type: "icon",
                name: "BiCodeBlock",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
              key: "itemIndex",
              displayer: "Item Index",
              value: "03",
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Marketing",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              value: {
                type: "icon",
                name: "GoGoal",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
              key: "itemIndex",
              displayer: "Item Index",
              value: "04",
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Content writing",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              value: {
                type: "icon",
                name: "BiBookContent",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(subtitle) || this.castToString(description)) && (
            <Base.VerticalContent className={this.decorateCSS("header-section")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionTitle
                  className={`${this.decorateCSS("sectionTitle")} ${this.getPropValue("descriptionAnimation") && this.decorateCSS("animation")}`}
                >
                  {description}
                </Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("list-item")}>
            {listItems.map((listItem: listItem, index: number) => (
              <div
                className={`${this.decorateCSS("item-container")} ${this.getPropValue("lineActive") && this.decorateCSS("line")}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                {this.castToString(listItem.itemIndex) && (
                  <Base.H3 className={this.decorateCSS("index")}>
                    {listItem.itemIndex}
                  </Base.H3>
                )}
                <div className={this.decorateCSS("cards")}>
                  {(listItem.itemIcon ||
                    this.castToString(listItem.itemTitle)) && (
                      <div className={this.decorateCSS("icon-title-container")}>
                        {listItem.itemIcon && (
                          <Base.Media
                            value={listItem.itemIcon}
                            propsIcon={{
                              className: this.decorateCSS("icon")
                            }}
                          />
                        )}
                        {this.castToString(listItem.itemTitle) && (
                          <Base.H4 className={this.decorateCSS("title")}>
                            {listItem.itemTitle}
                          </Base.H4>
                        )}
                      </div>
                    )}

                  {this.castToString(listItem.itemText) && (
                    <Base.P className={this.decorateCSS("description")}>
                      {listItem.itemText}
                    </Base.P>
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
