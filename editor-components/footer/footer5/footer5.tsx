import * as React from "react";
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
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Products",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Create Website",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Secure Cloud Hosting",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "About",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Careers",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Support",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Blog",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Ebooks",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Whitepapers",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "table-item",
              displayer: "Footer",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Help Center",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Contact Us",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "item-title",
                      value: "Privacy Policy",
                      displayer: "Item Title",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
    return "Footer 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-list-page")}>
            <div className={this.decorateCSS("item-div")}>
              {this.getPropValue("footer-table-item").map((table: any) => {
                return table.value.map(
                  (tableItem: any, indexTableItem: number) => {
                    return (
                      <ul
                        key={indexTableItem}
                        className={this.decorateCSS("list-group")}
                      >
                        {tableItem.value.map(
                          (tableData: any, indexTableData: number) => {
                            return (
                              <li
                                key={indexTableData}
                                className={this.decorateCSS("list-item")}
                              >
                                {tableData.value[0].value}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    );
                  }
                );
              })}
            </div>
            <h2>{this.getPropValue("footer")[0].value}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer5Page;
