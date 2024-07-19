import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ICard = {
  title: JSX.Element;
  description: JSX.Element;
  image: string;
  increaseValue: JSX.Element;
  isIncrease: boolean;
  buttonText: JSX.Element;
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
              type: "boolean",
              key: "isIncrease",
              displayer: "Adjust the Stats Percent",
              value: true,
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Percent Value",
              value: "5,2",
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
              type: "boolean",
              key: "isIncrease",
              displayer: "Adjust the Stats Percent",
              value: true,
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Percent Value",
              value: "8,9",
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
              value: "Average CTR",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "24.65%",
            },
            {
              type: "boolean",
              key: "isIncrease",
              displayer: "Adjust the Stats Percent",
              value: false,
            },
            {
              type: "string",
              key: "increaseValue",
              displayer: "Percent Value",
              value: "3,9",
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

    const cardList = this.castToObject<ICard[]>("card-content");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("bottom-child")}>
            {cardList.map(
              (item: ICard, indexCard: number) => {

                const isTitleExist = this.castToString(item.title);
                const isDescExist = this.castToString(item.description);
                const isIncreaseValueExist = this.castToString(item.increaseValue);
                const isButtonTextExist = this.castToString(item.buttonText);

                if (isTitleExist || isDescExist || isIncreaseValueExist || isButtonTextExist)
                  return (
                    <div key={indexCard} className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("toppom")}>
                        {item.image &&
                          <div className={this.decorateCSS("img-container")}>
                            <img src={item.image} alt="" />
                          </div>
                        }
                        {(isTitleExist || isDescExist || isIncreaseValueExist) &&
                          <div className={this.decorateCSS("stats-texts")}>
                            {isTitleExist &&
                              <h4 className={this.decorateCSS("card-data-title")}>{item.title}</h4>
                            }
                            {(isIncreaseValueExist || isDescExist) &&
                              <div className={this.decorateCSS("counts")}>
                                {isDescExist &&
                                  <p className={this.decorateCSS("count")}>{item.description}</p>
                                }
                                {isIncreaseValueExist &&
                                  <p className={`${item.isIncrease ? this.decorateCSS("increase") : this.decorateCSS("decrease")} ${this.decorateCSS("percent")}`}>{item.isIncrease ? "↑" : "↓"} {item.increaseValue}</p>
                                }
                              </div>
                            }
                          </div>
                        }
                      </div>
                      {isButtonTextExist &&
                        <div className={this.decorateCSS("bottoms")}>
                          <ComposerLink path={item.buttonLink}>
                            <p className={this.decorateCSS("card-button-text")}>{item.buttonText}</p>
                          </ComposerLink>
                        </div>
                      }
                    </div>
                  );
              }
            )}
          </div>
        </div>
      </div >
    );
  }
}

export default Stats2Page;
