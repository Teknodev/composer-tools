import * as React from "react";
import styles from "./content12.module.scss";
import { BaseContent } from "../../EditorComponent";

type Card = {
  image: string;
  cardRowTitles: cardRowItems[];
}
type cardRowItems = {
  titleRow: string;
  titleValue: string;
}
class Content12 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Scale Fast",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title2",
      value: "Generate ad copies that sell.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Generate sales focused ad texts, combine them with the creatives you generated and get results.",
    });

    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Card Titles",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f68c7fba070002b74fd39?alt=media&timestamp=1685086634609",
            },
            {
              type: "array",
              key: "cardRowTitles",
              displayer: "Card Row",
              value: [
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
              ],
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f67eafba070002b74fcb6?alt=media&timestamp=1685086634609",
            },
            {
              type: "array",
              key: "cardRowTitles",
              displayer: "Card Row",
              value: [
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
              ],
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f67eafba070002b74fcb5?alt=media&timestamp=1685086634609",
            },
            {
              type: "array",
              key: "cardRowTitles",
              displayer: "Card Row",
              value: [
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
                {
                type: "object",
                key: "cardRowItems",
                displayer: "Card Row İtems",
                value: [
                  {
                    type: "string",
                    key: "titleRow",
                    displayer: "Card Row Title",
                    value: "Impressions",
                  },
                  {
                    type: "string",
                    key: "titleValue",
                    displayer: "Card Row Value",
                    value: "13K",
                  },
                ]
              },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content-12";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("title-card")}>
              <h2>{this.getPropValue("title")}</h2>
              <h1>{this.getPropValue("title2")}</h1>
              <h3>{this.getPropValue("description")}</h3>
            </div>
            <div className={this.decorateCSS("all-cards")}>
              {this.castToObject<Card[]>("team-members").map(
                (item: Card, indexTeamMembers: number) => {
                  return (
                    <div className={this.decorateCSS("card-item-count")} style={{
                      width: 90 / this.getPropValue("reverse") + "%",
                      display: "flex",
                      justifyContent: "space-around",
                    }}>
                    <div
                      key={indexTeamMembers}
                      className={this.decorateCSS("basic-card")}
                      >
                      <div className={this.decorateCSS("card")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={item.image}
                          alt="person"
                          />

                        {item.cardRowTitles.map(
                          (itemData: cardRowItems, indexItemData: number) => {
                            return (
                              <div
                                key={indexItemData}
                                className={this.decorateCSS("text-group")}
                              >
                                <div
                                  className={this.decorateCSS("itemData-box")}
                                  >
                                  <div
                                    className={this.decorateCSS(
                                      "itemData-title"
                                    )}
                                    >
                                    <p className={this.decorateCSS("p-title")}>
                                      {itemData.titleRow}
                                    </p>
                                  </div>
                                  <div
                                    className={this.decorateCSS(
                                      "itemData-value"
                                    )}
                                  >
                                    <p className={this.decorateCSS("p-value")}>
                                      {itemData.titleValue}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content12;
