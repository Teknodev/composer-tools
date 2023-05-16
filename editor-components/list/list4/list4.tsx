import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";

class List4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "features-main",
      displayer: "Features Main",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "list-title",
              displayer: "List Title",
              value: "Top 10 Books to Read This Summer",
            },
            {
              type: "array",
              key: "features-list",
              displayer: "Features List",
              value: [
                {
                  type: "object",
                  key: "feature-list-item",
                  displayer: "Feature List Item",
                  value: [
                    {
                      type: "string",
                      key: "list-item",
                      displayer: "List Item",
                      value: "Looking for some great summer reading? Check out our list of the top 10 books to read this season, featuring a mix of bestsellers, new releases, and classics.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "list-title",
              displayer: "List Title",
              value: " 5 Essential Tools for Remote Work Success",
            },
            {
              type: "array",
              key: "features-list",
              displayer: "Features List",
              value: [
                {
                  type: "object",
                  key: "feature-list-item",
                  displayer: "Feature List Item",
                  value: [
                    {
                      type: "string",
                      key: "list-item",
                      displayer: "List Item",
                      value: "Whether you're working from home or on the go, these 5 tools are essential for staying productive and organized.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "list-title",
              displayer: "List Title",
              value: "7 Tips for a Healthier Lifestyle",
            },
            {
              type: "array",
              key: "features-list",
              displayer: "Features List",
              value: [
                {
                  type: "object",
                  key: "feature-list-item",
                  displayer: "Feature List Item",
                  value: [
                    {
                      type: "string",
                      key: "list-item",
                      displayer: "List Item",
                      value: "Want to improve your health and well-being? Check out our list of 7 tips for a healthier lifestyle, including recommendations for exercise, nutrition, and self-care.",
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
    return "List 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("features-main").map((title: any, index: number) => {
            return (
              <div key={index} className={this.decorateCSS("feature-list")}>
                <div>
                  <h3 className={this.decorateCSS("title")}>{title.value[0].value}</h3>
                  <hr />
                </div>
                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((table: any) => {
                    return table.value.map((tableData: any, index: number) => (
                      <li className={this.decorateCSS("list-item")} key={index}>
                        {tableData.value}
                      </li>
                    ));
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List4;
