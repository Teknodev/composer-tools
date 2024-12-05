import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type listItem = {
  text: string;
  title: string;
}

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
  }
  render(): ReactNode {
    const ListItems = this.castToObject<listItem[]>("list-items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{pc: this.getPropValue("itemCount")}}>
            {ListItems.map((item: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card")}
              >
                <Base.VerticalContent className={this.decorateCSS("item-content")}>
                  <div className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</div>
                  {this.castToString(item.title).trim() && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>
                  )}
                  {this.castToString(item.text).trim() && (
                    <Base.SectionDescription className={this.decorateCSS("list-item-p")}>{item.text}</Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              </div>
            ))}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List7;
