import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";
import styles from "./list2.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class List2 extends BaseList {
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
    return "List 2";
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
                className={this.decorateCSS("feature-list")}
                
                key={index}
              >
                <h3 className={this.decorateCSS("title")} >
                  {title.value[0].value}
                </h3>

                <hr />

                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((table: any) => (
                    <ComposerLink path={table.value[1].value}><li className={this.decorateCSS("li")}>{table.value[0].value}</li></ComposerLink>
                  )
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List2;
