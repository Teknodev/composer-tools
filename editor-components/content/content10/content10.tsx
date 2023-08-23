import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
      value:
        "Spend your money on creatives that convert, make the most of the strongest artificial intelligence on the ad creation market.",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e5ceb8057bdf002c29bb4a?alt=media&timestamp=1692782244914"
    })
    this.addProp({
      type: "object",
      key: "buttonprop",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "button",
          displayer: "Button",
          value: "Generate Ad Creatives",
        },
        {
          type: "page",
          key: "url",
          displayer: "URL",
          value: "",
        },
      ],
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
            <ComposerLink path={this.getPropValue("buttonprop")[1].value}>
              <button>{this.getPropValue("buttonprop")[0].value}</button>
            </ComposerLink>
          </div>

          <div className={this.decorateCSS("card-left")}>
            <div className={this.decorateCSS("card-child")}>
              {this.castToObject<Card[]>("content-card").map(
                (card: Card, index: number) => (
                  <div
                    key={`cnt-10-card-${index}`}
                    className={this.decorateCSS("card")}
                  >
                    <i>
                      <img src={card.image} />
                    </i>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                )
              )}
            </div>
            <div className={this.decorateCSS("image")}>
              <img src={
                this.getPropValue("image")
              } alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content10;
