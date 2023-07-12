import * as React from "react";
import styles from "./header21.module.scss";
import { BaseHeader } from "../../EditorComponent";

class HeaderComponent21 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Items",
      key: "items",
      value: [
        {
          type: "object",
          displayer: "Item Left",
          key: "item-left",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value:
                "I Create User-friendly Mobile Applications and Web Experiences ❤️",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Shop gret deals on MacBook, iPad, iPhone and more.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-shopping-event.jpg",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Pre-Order Now",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item Left Bottom",
          key: "item-left-bottom",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "The New Google Pixel 7",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Shop gret deals on MacBook, iPad, iPhone and more.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-shopping-event.jpg",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Pre-Order Now",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item Right",
          key: "item-right",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Aurora Headset",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Shop gret deals on MacBook, iPad, iPhone and more.",
            },

            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Pre-Order Now",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-21";
  }

  render() {
    let items: any = this.castToObject("items");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}></div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent21;
