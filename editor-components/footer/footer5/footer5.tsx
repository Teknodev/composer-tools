import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer5.module.scss";

class Footer5Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "string",
          key: "footer-text",
          value: "© 2023 All rights reserved.",
          displayer: "Footer Text",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "footer-table-item",
      displayer: "Footer Table Item",
      value: [
        {
          type: "object",
          key: "table-items",
          displayer: "Table Item",
          value: [
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Footer 5";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-list-page")}>
            <div className={this.decorateCSS("item-div")}>
              {this.getPropValue("footer-table-item").map(
                (table: any, index: number) => {
                  return table.value.map((tableItem: any) => {
                    return (
                      <ul key={index} className={this.decorateCSS("list-group")}>
                        {tableItem.value.map((tableData: any) => {
                          return <li className={this.decorateCSS("li")}>{tableData.value}</li>;
                        })}
                      </ul>
                    );
                  });
                }
              )}
            </div>
            <h2>{this.getPropValue("footer")[0].value}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer5Page;
