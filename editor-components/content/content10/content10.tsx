import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content10.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
};
class Content10 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "For Startups",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Spend your money on creatives that convert, make the most of the strongest artificial intelligence on the ad creation market.",
    });
    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button",
      value: "Generate Ad Creatives",
    });



    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646b76dbfba070002b74850c?alt=media&timestamp=1684764380744",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Convert Better",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Higher Conversion Rates Up to 14x better conversion rates than ad creatives designed with no data-driven approach.",
            },
          ],
        },

        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646b7b84fba070002b748643?alt=media&timestamp=1684765573382",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Save Time & Money",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Cut up to 90% of design tasks and costs. Spend your time and money on your startup.",
            },
          ],
        },

        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646b7b77fba070002b74863f?alt=media&timestamp=1684765560789",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Impress Clients",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Generate hundreds of converting ad creative variations while staying on-brand.",
            },
          ],
        },
      ],
    });



  }







  getName(): string {
    return "Content 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <h2>{this.getPropValue("title")}</h2>
            <p>{this.getPropValue("description")}</p>
            <button>{this.getPropValue("button")}</button>
          </div>

          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              (card: Card, index: number) => (
                <div key={`cnt-10-card-${index}`} className={this.decorateCSS("card")}>
                  <i>
                    <img src={card.image} />
                  </i>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content10;
