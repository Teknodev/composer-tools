import * as React from "react";
import styles from "./header20.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class Header20 extends BaseHeader {
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
              value: "MATTIS LAOREET SAPIEN",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Porta\nConsectetur\nImperdiet\nFrigilla",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/handmade/wp-content/uploads/sites/3/2018/10/banner-1-opt.jpg",
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
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
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
              value: "SEMPER",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Feugiat\nScelerisque\nImperdiet",
            },

            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-9-opt.jpg",
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
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
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
              value: "SEMPER",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Adipiscing\nSodales",
            },

            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-7-opt.jpg",
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
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

      this.addProp({
        type: "image",
        displayer: "Item Right Bottom Right",
        key: "item-right-bottom-right",
        value: "https://a6n4d3q9.rocketcdn.me/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-8-opt.jpg",
      });
  }

  getName(): string {
    return "Header-20";
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
                    <ComposerLink path={items[0].button[1].value}>
                    <button className={this.decorateCSS("button")}>
                      {items[0].button[0].value}
                    </button>
                    </ComposerLink>
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
                      <ComposerLink path={items[1].button[1].value}>
                      <button className={this.decorateCSS("button")}>
                        {items[1].button[0].value}
                      </button>
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
                    <div>
                        <ComposerLink path={items[2].button[1].value}>
                      <button className={this.decorateCSS("button")}>
                        {items[2].button[0].value}
                      </button>
                      </ComposerLink>
                    </div>
                  </div>
                </div>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={this.getPropValue('item-right-bottom-right')} alt=""/>
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

export default Header20;
