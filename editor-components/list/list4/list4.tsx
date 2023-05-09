import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
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
              value: PlaceholderFiller.string(),
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
                      value: PlaceholderFiller.string(),
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
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("features-main").map((title: any, index: number) => {
            return (
              <div
                key={index}
                className={this.decorateCSS("feature-list")}
                
              >
                <div>
                  <h3
                    className={this.decorateCSS("title")}
                    
                  >
                    {title.value[0].value}
                  </h3>
                  <hr />
                </div>
                <ul className={this.decorateCSS("list-group")}>
                  {title.value[1].value.map((table: any) => {
                    return table.value.map((tableData: any, index: number) => (
                      <li key={index}>{tableData.value}</li>
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
