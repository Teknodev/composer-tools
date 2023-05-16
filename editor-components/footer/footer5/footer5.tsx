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
                  value: "Products",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Create Website",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Secure Cloud Hosting",
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
                  value: "About",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Careers",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Support",
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
                  value: "Blog",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Ebooks",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Whitepapers",
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
                  value: "Help Center",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Contact Us",
                  displayer: "Item",
                },
                {
                  type: "string",
                  key: "item",
                  value: "Privacy Policy",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-list-page")}>
            <div className={this.decorateCSS("item-div")}>
              {this.getPropValue("footer-table-item").map(
                (table: any) => {
                  return table.value.map((tableItem: any, indexTableItem: number) => {
                    return (
                      <ul
                        key={indexTableItem}
                        className={this.decorateCSS("list-group")}
                      >
                        {tableItem.value.map((tableData: any, indexTableData: number) => {
                          return (
                            <li key={indexTableData} className={this.decorateCSS("list-item")}>
                              {tableData.value}
                            </li>
                          );
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
