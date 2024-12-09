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
      type: "number",
      key: "imageCountInitial",
      displayer: "Image Count Initial",
      value: 3
  })
  this.addProp({
      type: "number",
      key: "imageCount",
      displayer: "More Image Count",
      value: 1
  })

    this.addProp({
      type: "number",
      key: "itemCountRow",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });

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
      type: "string",
      key: "button",
      displayer: "Button Text",
      value: "View More Categories"
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
    this.addProp({
      type: "boolean",
      key: "stick",
      displayer: "Show Line",
      value: true
    });

    this.setComponentState("moreImages", 0);
  }

  getName(): string {
    return "List 2";
  }

  handleLoadMoreButton = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
  };

  render() {
    if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

    const cards = this.castToObject<any>("cards");

    return(
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent>
            <Base.SectionTitle>
              {this.getPropValue("title")}
            </Base.SectionTitle>
            <Base.SectionDescription>
              {this.getPropValue("description")}
              </Base.SectionDescription>
            </Base.VerticalContent>
          <Base.ListGrid className={this.decorateCSS("cards-box")} gridCount={{pc: this.getPropValue("itemCountRow")}}>
            {cards.slice(0, this.getComponentState("imageCount")).map((card: CardItem, index: number) => (
              <ComposerLink key={index} path={card.page}>
                <div className={this.decorateCSS("card")}>
                  {card.image && (
                    <img src={card.image} alt={this.castToString(card.card_text)} />
                  )}
                  <div className={this.decorateCSS("overlay")}></div>
                  <div className={this.decorateCSS("overlay2")}></div>
                  <div className={this.decorateCSS("card-content")}>
                    {this.getPropValue("stick") && (
                      <div className={this.decorateCSS("stick")}></div>
                    )}
                    <div className={this.decorateCSS("labels")}>
                      <span className={this.decorateCSS("first")}>{card.card_text}</span>
                      <span className={this.decorateCSS("second")}>{(card.count || 0) + " " + this.castToString(card.count_text)}</span>
                    </div>
                  </div>
                </div>
              </ComposerLink>)
            )}
          </Base.ListGrid>

          {this.getPropValue("button") && (
            <div className={this.decorateCSS("buttons-box")}>
              <Base.Button onClick={this.handleLoadMoreButton}>
                <div className={this.decorateCSS("button")}>
                  <span>{this.getPropValue("button")}</span>
                </div>
              </Base.Button>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
