import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
      ],
    });
    this.addProp({
      type: "boolean",
      key: "descriptionAnimation",
      displayer: "Title Animation",
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
      displayer: "List Item",
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
              displayer: "Media",
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
              displayer: "Media",
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
              displayer: "Media",
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
              displayer: "Media",
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
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
      value: true,
    });
  }

  render() {
    const listItems = this.castToObject<listItem[]>("listItems");
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    const alignment = Base.getContentAlignment();
    const isCenterAlignment = alignment === "center";

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={`${this.decorateCSS("header-section")} ${isCenterAlignment && this.decorateCSS("align-center")}`}>
              {subtitleExist && (
                <Base.SectionSubTitle
                  className={`${this.decorateCSS("subtitle")} ${this.getPropValue("descriptionAnimation") && this.decorateCSS("animation")}`}
                >
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle
                  className={`${this.decorateCSS("sectionTitle")} ${this.getPropValue("descriptionAnimation") && this.decorateCSS("animation")}`}
                >
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription
                  className={`${this.decorateCSS("description")} ${this.getPropValue("descriptionAnimation") && this.decorateCSS("animation")}`}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {buttons?.length > 0 && (
                <div className={`${this.decorateCSS("button-container")} ${isCenterAlignment && this.decorateCSS("align-center")}`}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    if (!this.castToString(button.text)) return null;
                    return (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                          </Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
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
                      <div className={`${this.decorateCSS("item-header")} ${isCenterAlignment && this.decorateCSS("align-center")}`}>
                        {listItem.itemIcon && (
                          <div className={this.decorateCSS("icon-wrapper")}>
                            <Base.Media
                              value={listItem.itemIcon}
                              className={this.decorateCSS("icon")}
                            />
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List6;
