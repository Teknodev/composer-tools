import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type listItem = {
  itemIndex: React.JSX.Element;
  itemTitle: React.JSX.Element;
  itemIcon: TypeMediaInputValue;
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
      key: "title",
      displayer: "Title",
      value:
        "It's so challenging to find a good team to do great things. But we can provide you the best one.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "boolean",
      key: "descriptionAnimation",
      displayer: "Title Animation",
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
    this.addProp(INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Items",
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
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Items",
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
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Items",
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
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Items",
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
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Text",
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
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const alignment = Base.getContentAlignment();
    const isCenterAlignment = alignment === "center";
    const button = this.castToObject<any>("button");
    const buttonText = this.castToString(button?.text);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
            <Base.VerticalContent className={`${this.decorateCSS("header-section")} ${isCenterAlignment ? this.decorateCSS("align-center") : this.decorateCSS("align-left")}`}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle
                  className={`${this.decorateCSS("sectionTitle")} ${this.getPropValue("descriptionAnimation") && this.decorateCSS("animation")}`}
                >
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("items-wrapper")}>
            {listItems.map((listItem: listItem, index: number) => (
              <div
                key={index}
                className={`${this.decorateCSS("list-item")} ${this.getPropValue("lineActive") && this.decorateCSS("line")}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                {this.castToString(listItem.itemIndex) && (
                  <Base.H3 className={this.decorateCSS("index")}>
                    {listItem.itemIndex}
                  </Base.H3>
                )}
                <div className={this.decorateCSS("item-content")}>
                  {(listItem.itemIcon ||
                    this.castToString(listItem.itemTitle)) && (
                      <div className={this.decorateCSS("item-header")}>
                        {listItem.itemIcon && (
                          <div className={this.decorateCSS("icon-wrapper")}>
                            <div className={this.decorateCSS("icon-container")}>
                              <Base.Media
                                value={listItem.itemIcon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          </div>
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
          {buttonText && (
            <div className={this.decorateCSS("button-wrapper")}>
              <ComposerLink path={button?.url}>
                <Base.Button buttonType={button?.type} className={this.decorateCSS("button")}>
                  <Base.P className={this.decorateCSS("button-text")}>{button?.text}</Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List6;
