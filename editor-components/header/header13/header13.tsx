import * as React from "react";
import styles from "./header13.module.scss";
import { BaseHeader } from "../../EditorComponent";

class HeaderComponent13 extends BaseHeader {
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
        {
          type: "object",
          displayer: "Item Right Bottom Left",
          key: "item-right-bottom-left",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "New Dual Sense",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "For playstation 5",
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
        {
          type: "object",
          displayer: "Item Right Bottom Right",
          key: "item-right-bottom-right",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Instant Cameras",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Get photo paper as a gift",
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
    return "Header-13";
  }

  render() {
    let items: any = this.castToObject("items");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                <div className={this.decorateCSS("background-image")}>
                  <img src={items[0].image} alt={items[0].title} />
                </div>
                <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("title")}>
                    {items[0].title}
                  </div>
                  <div className={this.decorateCSS("description")}>
                    {items[0].description}
                  </div>
                  <div>
                    <button className={this.decorateCSS("button")}>
                      {items[0].button[0].value}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={items[1].image} alt={items[1].title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {items[1].title}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {items[1].description}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {items[1].button[0].value}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.decorateCSS("bottom")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={items[2].image} alt={items[2].title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {items[2].title}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {items[2].description}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {items[2].button[0].value}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={items[3].image} alt={items[3].title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {items[3].title}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {items[3].description}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {items[3].button[0].value}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent13;
