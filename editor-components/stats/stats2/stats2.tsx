import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ICard = {
  title: string;
  description: string;
  image: string;
  increaseValue: string;
  isIncrease: boolean;
  buttonText: string;
  buttonLink: string;
};
class Stats2Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
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
              value: "https://static.thenounproject.com/png/1159670-200.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Clicks",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "71,897",
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Increase or Decrease Value",
              value: "5,2",
            },
            {
              type: "boolean",
              key: "isIncrease",
              displayer: "Increase or Decrease",
              value: true,
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW MORE →",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
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
              value: "https://cdn-icons-png.flaticon.com/512/25/25186.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Impressions",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "14,926",
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Increase or Decrease Value",
              value: "8,9",
            },
            {
              type: "boolean",
              key: "isIncrease",
              displayer: "Increase or Decrease",
              value: true,
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW MORE →",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
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
              value: "https://cdn-icons-png.flaticon.com/512/43/43580.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Avarage CTR",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "24.65%",
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Increase or Decrease Value",
              value: "3,9",
            },
            {
              type: "boolean",
              key: "isIncrease",
              displayer: "Increase or Decrease",
              value: false,
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW MORE →",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Stats 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("bottom-child")}>
            {this.castToObject<ICard[]>("card-content").map(
              (cardData: ICard, indexCard: number) => (
                <div key={indexCard} className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("toppom")}>
                    <div className={this.decorateCSS("img-container")}>
                      <img src={cardData.image} alt="" />
                    </div>
                    <div className={this.decorateCSS("stats-texts")}>
                      <h4>{cardData.title}</h4>
                      <div className={this.decorateCSS("counts")}>
                        <p className={this.decorateCSS("count")}>{cardData.description}</p>
                        <p className={`${cardData.isIncrease ? this.decorateCSS("increase") : this.decorateCSS("decrease")} ${this.decorateCSS("percent")}`}>{cardData.isIncrease ? "↑" : "↓"} {cardData.increaseValue}</p>
                      </div>
                    </div>
                  </div>
                  <div className={this.decorateCSS("bottoms")}>
                    <ComposerLink path={cardData.buttonLink}>
                      <p>{cardData.buttonText}</p>
                    </ComposerLink>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stats2Page;
