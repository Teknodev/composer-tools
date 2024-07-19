import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";

type ICard = {
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
};

class Stats1Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "User Statistics on the Website",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Understanding user behavior on a website is important for improving user experience and engagement.",
    });
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
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "registers",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "50,000",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "sign up daily",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "sales",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "2,500",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "daily total sales",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "registers",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "4,500",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "daily registers",
            },
          ],
        },
      ],
    });

  }

  getName(): string {
    return "Stats 1";
  }

  render() {

    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescExist = this.castToString(this.getPropValue("description"));

    const cardList = this.castToObject<ICard[]>("card-content");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            {isTitleExist &&
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            }
            {isDescExist &&
              <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>
            }
            {cardList.length > 0 &&
              <div className={this.decorateCSS("bottom-child")}>
                {cardList.map(
                  (cardData: ICard, indexCard: number) => {

                    const isSubtitleExist = this.castToString(cardData.subtitle);
                    const isTitleExist = this.castToString(cardData.title);
                    const isDescExist = this.castToString(cardData.description);

                    if (isSubtitleExist || isTitleExist || isDescExist)
                      return (
                        <div key={indexCard} className={this.decorateCSS("card")}>
                          {isSubtitleExist &&
                            <h5 className={this.decorateCSS("card-data-subtitle")}>{cardData.subtitle}</h5>
                          }
                          {isTitleExist &&
                            <h4 className={this.decorateCSS("card-data-title")}>{cardData.title}</h4>
                          }
                          {isDescExist &&
                            <p className={this.decorateCSS("card-data-description")}>{cardData.description}</p>
                          }
                        </div>
                      );
                  }
                )}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Stats1Page;
