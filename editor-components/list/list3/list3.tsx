import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";

class List3 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "icon-main",
      displayer: "Icon Main",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "icon-title",
              displayer: "Icon Title",
              value: "Top 10 Books to Read This Summer",
            },
            {
              type: "array",
              key: "icon-list",
              displayer: "Icon List",
              value: [
                {
                  type: "object",
                  key: "icon-list-item",
                  displayer: "Icon List Item",
                  value: [
                    {
                      type: "string",
                      key: "icon-item",
                      displayer: "Icon Item",
                      value: "Looking for some great summer reading? Check out our list of the top 10 books to read this season, featuring a mix of bestsellers, new releases, and classics.",
                    },
                    {
                      type: "string",
                      key: "icon-link",
                      displayer: "Icon Link",
                      value: "https://static.thenounproject.com/png/105256-200.png",
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
              key: "icon-title",
              displayer: "Icon Title",
              value: "5 Essential Tools for Remote Work Success",
            },
            {
              type: "array",
              key: "icon-list",
              displayer: "Icon List",
              value: [
                {
                  type: "object",
                  key: "icon-list-item",
                  displayer: "Icon List Item",
                  value: [
                    {
                      type: "string",
                      key: "icon-item",
                      displayer: "Icon Item",
                      value: "Whether you're working from home or on the go, these 5 tools are essential for staying productive and organized. ",
                    },
                    {
                      type: "string",
                      key: "icon-link",
                      displayer: "Icon Link",
                      value: "https://static.thenounproject.com/png/105256-200.png",
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
              key: "icon-title",
              displayer: "Icon Title",
              value: "7 Tips for a Healthier Lifestyle",
            },
            {
              type: "array",
              key: "icon-list",
              displayer: "Icon List",
              value: [
                {
                  type: "object",
                  key: "icon-list-item",
                  displayer: "Icon List Item",
                  value: [
                    {
                      type: "string",
                      key: "icon-item",
                      displayer: "Icon Item",
                      value: "Want to improve your health and well-being? Check out our list of 7 tips for a healthier lifestyle, including recommendations for exercise, nutrition, and self-care.",
                    },
                    {
                      type: "string",
                      key: "icon-link",
                      displayer: "Icon Link",
                      value: "https://static.thenounproject.com/png/105256-200.png",
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
    return "List 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("icon-main").map((title: any, indexIconMain: number) => {
            return (
              <div className={this.decorateCSS("icon-list")} key={indexIconMain}>
                <h3 className={this.decorateCSS("title")}>{title.value[0].value}</h3>
                <hr />
                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((icon: any, indexListGroup: number) => {
                    return (
                      <li key={indexListGroup} className={this.decorateCSS("list-item")}>
                        <img src={icon.value[1].value} alt="icon" width={40} />
                        <h4>{icon.value[0].value}</h4>
                      </li>
                    );
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

export default List3;
