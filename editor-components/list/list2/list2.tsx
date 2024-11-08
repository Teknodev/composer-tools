import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardItem = {
  page: string,
  image: string,
  count: number,
  count_text: JSX.Element,
  card_text: JSX.Element,
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
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
        },
        {
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
    const cards = this.castToObject<any>("cards");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent>
            <Base.H2 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.H2>
            <Base.H5 className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
              </Base.H5>
            </Base.VerticalContent>
          <div className={this.decorateCSS("cards-box")}>
            {cards.map((card: CardItem, index: number) => (
              <ComposerLink key={index} path={card.page}>
                <div className={this.decorateCSS("card")}>
                  <img src={card.image} alt={this.castToString(card.card_text)} />
                  <div className={this.decorateCSS("overlay")}></div>
                  <div className={this.decorateCSS("overlay2")}></div>
                  <div className={this.decorateCSS("card-content")}>
                    <div className={this.decorateCSS("stick")}></div>
                    <div className={this.decorateCSS("labels")}>
                      <Base.H2 className={this.decorateCSS("first")}>{card.card_text}</Base.H2>
                      <Base.P className={this.decorateCSS("second")}>{String(card.count) + " " + this.castToString(card.count_text)}</Base.P>
                    </div>
                  </div>
                </div>
              </ComposerLink>)
            )}
          </div>

          <div className={this.decorateCSS("buttons-box")}>
            {this.getPropValue("buttons").map((button: any) =>
              <ComposerLink path={button.getPropValue("navigate")}>
                <div className={this.decorateCSS("button")}>
                  <Base.H5>{button.getPropValue("text")}</Base.H5>
                </div>
              </ComposerLink>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
