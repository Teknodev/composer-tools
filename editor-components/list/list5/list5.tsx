import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";
import styles from "./list5.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class List5 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "link-main",
      displayer: "Link Main",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "link-title",
              displayer: "Link Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "string",
              key: "link-badge",
              displayer: "Link Badge",
              value: "1",
            },
            {
              type: "array",
              key: "link-list",
              displayer: "Link List",
              value: [
                {
                  type: "object",
                  key: "link-list-item",
                  displayer: "Link List Item",
                  value: [
                    {
                      type: "string",
                      key: "list-item",
                      displayer: "List Item",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "badge",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "List 5";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("link-main").map((title: any, index: number) => {
            return (
              <div
                className={this.decorateCSS("badge-list")}
                
                key={index}
              >
                <h3 className={this.decorateCSS("title")} >
                  {title.value[0].value}
                  <span className={this.decorateCSS("badge")}>{title.value[1].value}</span>
                </h3>

                <ul className={this.decorateCSS("list-group")}>
                  {title.value[2].value.map((table: any) => (
                    <ComposerLink path={table.value[1].value}>
                      <li className={this.decorateCSS("li")}>
                        {table.value[0].value}
                        <span className={this.decorateCSS("badge")}>
                          {table.value[2].value}
                        </span>
                      </li>
                    </ComposerLink>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List5;
