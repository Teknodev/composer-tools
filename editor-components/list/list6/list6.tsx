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
              value: "Quality",
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
                "We are a leading firm in providing quality and value to our customers.",
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
              value: "Experience",
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
                "Each member of our team has at least 5 years of legal experience.",
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
              value: "Support",
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
                "Our managers are always ready to answer your questions. You can call us during the weekends and at night.",
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
              value: "Presents",
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
                "We like to make people happy. We ask our clients about their birthday and prepare cool presents.",
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
              value: "Flexibility",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild3666-3036-4630-a563-336337303461/11.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "This method allows us to achieve success in problems of all levels.",
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
              value: "Efficiency",
            },
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://static.tildacdn.com/tild3030-6664-4366-a335-373265363863/5.svg",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We care about our clients’ time. Just give us a call — and we will help you with all the questions.",
            },
          ],
        },
      ],
    });

    this.addProp({
        type: "number",
        key: "itemCount",
        displayer: "Item Count in a Row",
        value: 3,
        max: 3
      });

  }

  render(): ReactNode {
    return (
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}>
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
                  <img src={listItem.value[1].value} alt="itemPhoto" />
                  <div>
                    <h1>{listItem.value[0].value}</h1>
                    <p>{listItem.value[2].value}</p>
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
