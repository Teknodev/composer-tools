import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";

type Card = {
  image: string;
  category: string;
  title: string;
  description: string;
  number: number;
  text: string;
};

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a5360f72de2002caaa120?alt=media&timestamp=1682674276142",
            },
            {
              type: "string",
              key: "category",
              displayer: "Category",
              value: "Technology",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Elon Musk claims to be working on ‘TruthGPT’ — a ‘maximum truth-seeking AI’",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Elon Musk says he’s working on “TruthGPT,” a ChatGPT alternative that acts as a “maximum truth-seeking AI.” The billionaire laid out his vision for an AI rival during an interview with Fox News’s Tucker Carlson, saying an alternative approach to AI creation was needed to avoid the destruction of humanity.",
            },
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 18,
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "APR",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a5360f72de2002caaa121?alt=media&timestamp=1682674276142",
            },
            {
              type: "string",
              key: "category",
              displayer: "Category",
              value: "Football",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "What's expected of Lampard? | 'Chelsea board need time to plan'",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Paul Gilmour discusses the latest from Stamford Bridge with Chelsea set to appoint Blues legend Frank Lampard as interim boss until the end of the season.",
            },
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 16,
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "MAR",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a5360f72de2002caaa11f?alt=media&timestamp=1682674276142"
            },
            {
              type: "string",
              key: "category",
              displayer: "Category",
              value: "Football",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Hong Kong security regulator to issue crypto license guidelines in May",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "The Hong Kong Securities Futures Commission (SFC) is reportedly set to release cryptocurrency exchange licensing guidelines next month.The plans were reported by Bloomberg on April 27, which cited comments from the SFC’s CEO, Julia Leung.",
            },
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 27,
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "APR",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 7";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => (
              <div className={this.decorateCSS("card-item-count")} style={{
                width: 90 / this.getPropValue("itemCount") + "%",
              }}>
              <div key={indexCards} className={this.decorateCSS("listed")}>
                <img className={this.decorateCSS("image")} src={card.image} alt=""></img>
                <p className={this.decorateCSS("little-text")}>{card.category}</p>
                <p className={this.decorateCSS("title")}>{card.title}</p>
                <p className={this.decorateCSS("title-description")}>
                  {card.description}
                </p>
                <div className={this.decorateCSS("little-box")}>
                  <p className={this.decorateCSS("number")}>{card.number}</p>
                  <p className={this.decorateCSS("text")}>{card.text}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature7;
