import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type listItem = {
  text: React.JSX.Element;
  title: React.JSX.Element;
}

class List7 extends BaseList {
  static getName(): string {
    return "List 7";
  }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Features",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Services",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });
    this.addProp({
      type: "boolean",
      key: "showIndex",
      displayer: "Show Index",
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
  }
  render() {
    const ListItems = this.castToObject<listItem[]>("list-items");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header-section")}>
            {this.castToString(subtitle) && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
            {this.castToString(title) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
          </Base.VerticalContent>
          {(ListItems.length > 0) && (
            <Base.ListGrid className={this.decorateCSS("items-wrapper")} gridCount={{ pc: this.getPropValue("itemCount") }} >
              {ListItems.map((item: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("list-item")}
                >
                  {(this.getPropValue("showIndex") || this.castToString(item.title) || this.castToString(item.text)) && (
                    <Base.VerticalContent
                      className={this.decorateCSS("item-content")}
                      data-animation={this.getPropValue("hoverAnimation")}
                    >
                      {this.getPropValue("showIndex") && (
                        <Base.H1 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</Base.H1>
                      )}
                      {this.castToString(item.title) && (
                        <Base.H3 className={this.decorateCSS("item-title")}>{item.title}</Base.H3>
                      )}
                      {this.castToString(item.text) && (
                        <Base.P className={this.decorateCSS("description")}>{item.text}</Base.P>
                      )}
                    </Base.VerticalContent>
                  )}
                </div>
              ))}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List7;
