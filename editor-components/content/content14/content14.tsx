import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content14.module.scss";

class Content14 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get your house in order with our smart cleaning service!",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "A better way to get your home, rental, or office clean.",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://static.tildacdn.com/tild3865-3930-4235-b731-616134626238/Mask_Group.png",
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Each member of our team has at least 5 years of experience in the industry.",
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
              key: "text",
              displayer: "Text",
              value:
                "More than 2 500 private and corporate facilities were cleaned this year.",
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
              key: "text",
              displayer: "Text",
              value:
                "We pay attention to your preferences and use eco-friendly and anti-allergenic cleaning agents.",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Content 14";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("background-image")}>
              <img
                src={this.getPropValue("image")}
                alt="blockPhoto"
                className={this.decorateCSS("img")}
              />
            </div>
            <div className={this.decorateCSS("header")}>
              <div className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </div>
              <div className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </div>
            </div>

            <div className={this.decorateCSS("item-block")}>
              {this.getPropValue("items").map(
                (listItem: any, index: number) => (
                  <div className={this.decorateCSS("texts")}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/1024px-Eo_circle_light-blue_checkmark.svg.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <div className={this.decorateCSS("texts-inside")}>{listItem.value[0].value}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content14;
