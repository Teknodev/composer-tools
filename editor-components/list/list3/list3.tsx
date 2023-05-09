import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
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
              value: PlaceholderFiller.string(),
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
                      value: PlaceholderFiller.string(),
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
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("icon-main").map((title: any, index: number) => {
            return (
              <div
                className={this.decorateCSS("icon-list")}
                
                key={index}
              >
                <h3 className={this.decorateCSS("title")} >
                  {title.value[0].value}
                </h3>

                <hr />

                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((icon: any) => {
                    return (
                      <>
                        <li className={this.decorateCSS("li")}>
                          <img src={icon.value[1].value} alt="icon" width={40} />
                          <h4>{icon.value[0].value}</h4>
                        </li>
                      </>
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
