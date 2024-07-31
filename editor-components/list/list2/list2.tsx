import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface List2Items {
  listEmoji: string;
  listTitle: string;
  listDesc: string;
  link: string;
}
class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Most Popular Cities/Towns"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories."
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Action Button",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text of Button",
          value: "View More Categories"
        },
        {
          type: "page",
          displayer: "Navigate",
          value: "",
          key: "navigate"
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414e?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 18
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Nightlife"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414f?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 24
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Shops"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414d?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 19
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Restaurant"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414b?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 35
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Outdoor Activities"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617b82bd2970002c62410f?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 9
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Hotels"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: ""
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414c?alt=media&timestamp=1719483639150"
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 32
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "New York"
            }
          ]
        }
      ]
    })
  }

  getName(): string {
    return "List 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <h3 className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </h3>
          <span className={this.decorateCSS("description")}>
            {this.getPropValue("description")}
          </span>
          <div className={this.decorateCSS("cards-box")}>
            {this.getPropValue("cards").map((card: any, index: number) =>
              <ComposerLink key={index} path={card.getPropValue("page")}>
                <div className={this.decorateCSS("card")}>
                  <img src={card.getPropValue("image")} alt={card.getPropValue("card_text")} />
                  <div className={this.decorateCSS("overlay")}></div>
                  <div className={this.decorateCSS("overlay2")}></div>
                  <div className={this.decorateCSS("card-content")}>
                    <div className={this.decorateCSS("stick")}></div>
                    <div className={this.decorateCSS("labels")}>
                      <span className={this.decorateCSS("first")}>{card.getPropValue("card_text")}</span>
                      <p className={this.decorateCSS("second")}>{card.getPropValue("count") + " " + card.getPropValue("count_text")}</p>

                    </div>

                  </div>
                </div>
              </ComposerLink>
            )}
          </div>

          <ComposerLink path={this.getPropValue("button")[1].value}>
            <div className={this.decorateCSS("button")}>
              <span>{this.getPropValue("button")[0].value}</span>
            </div>
          </ComposerLink>
        </div>
      </div>
    );
  }
}

export default List2;
