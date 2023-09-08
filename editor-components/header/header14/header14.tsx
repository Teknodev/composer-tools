import * as React from "react";
import styles from "./header14.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header14 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(
      {
        type: "array",
        key: "buttonprop",
        displayer: "Button Prop",
        value: [
          {
            type: "array",
            key: "buttonLeft",
            displayer: "Button Left",
            value: [
              {
                type: "string",
                key: "button-text",
                displayer: "Button Text",
                value: "EXPERT ADVICE",
              },
              {
                type: "page",
                key: "button-url",
                displayer: "Button URL",
                value: "",
              },
            ],
          },
          {
            type: "array",
            displayer: "Button Right",
            key: "buttonRight",
            value: [
              {
                type: "string",
                displayer: "Button Text",
                key: "button-text",
                value: "VIEW MORE",
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
    )

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
              value: "Check Out Our Expert Advice",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "From the best designers",
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
                  value: "EXPERT ADVICE",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5f2d3057bdf002c2c2eba?alt=media&timestamp=1693840060696",
            },

          ],
        },
        {
          type: "object",
          displayer: "Item Right Top",
          key: "item-right-top",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Our Services",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Discover all the ways to get your product",
            },

            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5f2d3057bdf002c2c2eba?alt=media&timestamp=1693840060696",
            },

          ],
        },
        {
          type: "object",
          displayer: "Item Right Bottom",
          key: "item-right-bottom",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Free Shipping!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Free shipping on orders of $100 or more.",
            },

            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5f2d3057bdf002c2c2eba?alt=media&timestamp=1693840060696",
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
    return "Header-14";
  }

  render() {
    let items: any = this.castToObject("items");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                <div className={this.decorateCSS("bg-content")}>
                  <div className={this.decorateCSS("description")}>
                    {items[0].description}
                  </div>
                  <div className={this.decorateCSS("title")}>
                    {items[0].title}
                  </div >
                  <div  className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink path={this.getPropValue("buttonprop")[0].value[1].value}>
                          <span  className={this.decorateCSS("button")}>
                          {this.getPropValue("buttonprop")[0].value[0].value }
                          </span >
                        </ComposerLink>
                  </div>
                  
                </div>
                <div className={this.decorateCSS("background-image-content")}>
                  <img src={items[0].image} alt={items[0].title} />
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
                    <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={this.getPropValue("buttonprop")[1].value[1].value}>
                          <span className={this.decorateCSS("button")}>
                          {this.getPropValue("buttonprop")[1].value[0].value }
                          </span>
                        </ComposerLink>
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

export default Header14;