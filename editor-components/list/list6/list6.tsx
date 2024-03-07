import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list6.module.scss";

class List6 extends BaseList {
  getName(): string {
    return "List 6";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "string",
        key: "description",
        displayer: "Description",
        value: "It's so challenging to find a good team to do great things. But we can provide you the best one.",
    })
    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item title",
              displayer: "Item Title",
              value: "Design",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild3232-3764-4965-a132-363264373039/7.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item title",
              displayer: "Item Title",
              value: "Development",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild3165-3332-4262-b162-623064306437/9.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item title",
              displayer: "Item Title",
              value: "Marketing",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild3762-3834-4938-a631-356666356539/1.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item title",
              displayer: "Item Title",
              value: "Content writing",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild6162-3163-4535-a266-396639663339/4.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
            },
          ],
        },
      ],
    });

    this.addProp({
        type: "number",
        key: "itemCount",
        displayer: "Item Count in a Row",
        value: 1,
        max: 1,
      });

  }

  render(): ReactNode {
    return (
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
            <ul className={this.decorateCSS("list-item")}>
              {this.getPropValue("list-items").map((listItem: any, index: number) => (
                <div
                key={index}
                className={this.decorateCSS("all-card")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
              >

                <li key={index} className={this.decorateCSS("item-container")}>
                <h3 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</h3>

                  <div className={this.decorateCSS("cards")}>
                    <img src={listItem.value[1].value} alt="itemPhoto" />
                    <h1 className={this.decorateCSS("list-item-h1")}>{listItem.value[0].value}</h1>
                    <p className={this.decorateCSS("list-item-p")}>{listItem.value[2].value}</p>
                  </div>
                </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
      
      
      
      
      
  }
}

export default List6;
