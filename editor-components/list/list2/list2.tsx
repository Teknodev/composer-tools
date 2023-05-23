import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./list2.module.scss";

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
              value: "Top 10 Books to Read This Summer",
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
                      value: "Looking for some great summer reading? Check out our list of the top 10 books to read this season, featuring a mix of bestsellers, new releases, and classics.",
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
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "link-title",
              displayer: "Link Title",
              value: "5 Essential Tools for Remote Work Success",
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
                      value: "Whether you're working from home or on the go, these 5 tools are essential for staying productive and organized. ",
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
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "link-title",
              displayer: "Link Title",
              value: "7 Tips for a Healthier Lifestyle",
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
                      value: "Want to improve your health and well-being? Check out our list of 7 tips for a healthier lifestyle, including recommendations for exercise, nutrition, and self-care.",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("link-main").map((title: any, indexLinkMain: number) => {
            return (
              <div className={this.decorateCSS("feature-list")} key={indexLinkMain}>
                <h3 className={this.decorateCSS("title")}>{title.value[0].value}</h3>
                <hr />
                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((table: any, indexListGroup: number) => (
                    <ComposerLink key={indexListGroup} path={table.value[1].value}>
                      <li className={this.decorateCSS("list-item")}>
                        {table.value[0].value}
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

export default List2;
