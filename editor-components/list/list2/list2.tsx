import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardItem = {
  page: JSX.Element;
  image: string;
  count: JSX.Element;
  count_text: JSX.Element;
  card_text: string;
};

class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Most Popular Cities/Towns",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414e?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 18,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Nightlife",
            },
          ],
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414f?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 24,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Shops",
            },
          ],
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414d?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 19,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Restaurant",
            },
          ],
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414b?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 35,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Outdoor Activities",
            },
          ],
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617b82bd2970002c62410f?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 9,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Hotels",
            },
          ],
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
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414c?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 32,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "New York",
            },
          ],
        },
      ],
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
          value: "View More Categories",
        },
        {
          type: "page",
          key: "navigate",
          displayer: "Navigate",
          value: "",
        },
      ],
    });
  }

  getName(): string {
    return "List 2";
  }

  render() {
    const cards = this.castToObject<CardItem[]>("cards");
    const button = this.getPropValue("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
            <Base.SectionDescription
              className={this.decorateCSS("description")}
            >
              {this.getPropValue("description")}
            </Base.SectionDescription>
          </Base.VerticalContent>
          <Base.ListGrid
            className={this.decorateCSS("cards-box")}
            gridCount={{
              pc: this.getPropValue("itemCount"),
              tablet: 2,
              phone: 1,
            }}
          >
            {cards.map((item: CardItem, index: number) => (
              <ComposerLink key={index} path={item.page}>
                <div className={this.decorateCSS("card")}>
                  <img src={item.image} />
                  <div className={this.decorateCSS("overlay")}></div>
                  <div className={this.decorateCSS("overlay2")}></div>
                  <div className={this.decorateCSS("card-content")}>
                    <div className={this.decorateCSS("stick")}></div>
                    <div className={this.decorateCSS("labels")}>
                      <Base.H2 className={this.decorateCSS("first")}>
                        {item.card_text}
                      </Base.H2>
                      <Base.P className={this.decorateCSS("second")}>
                        {item.count} {item.count_text}
                      </Base.P>
                    </div>
                  </div>
                </div>
              </ComposerLink>
            ))}
          </Base.ListGrid>
          {button[0].value &&(
          <ComposerLink path={button[1].value}>
          <div className={this.decorateCSS("button")}>
            <span>{button[0].value}</span>
          </div>
        </ComposerLink>
          )} 
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
