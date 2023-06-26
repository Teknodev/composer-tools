import * as React from "react";
import styles from "./content12.module.scss";
import { BaseContent } from "../../EditorComponent";

interface Card {
  image: string;
  cardRowTitle: CardRow[];
}
interface CardRow {
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
      displayer: "Reverse Item Count",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
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
              type: "object",
              key: "cardRowTitle",
              displayer: "Card Row",
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
              type: "object",
              key: "cardRowTitle",
              displayer: "Card Row",
              value: [
                {
                  type: "string",
                  key: "titleRow",
                  displayer: "Card Row Title",
                  value: "Clicks",
                },
                {
                  type: "string",
                  key: "titleValue",
                  displayer: "Card Row Value",
                  value: "456",
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
              type: "object",
              key: "cardRowTitle",
              displayer: "Card Row",
              value: [
                {
                  type: "string",
                  key: "titleRow",
                  displayer: "Card Row Title",
                  value: "CTR",
                },
                {
                  type: "string",
                  key: "titleValue",
                  displayer: "Card Row Value",
                  value: "4,5%",
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
                    <div
                      key={indexTeamMembers}
                      style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                      className={this.decorateCSS("basic-card")}
                    >
                      <div className={this.decorateCSS("card")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={item.image}
                          alt="person"
                        />

                        {this.getPropValue("team-members").map(
                          (itemData: any, indexItemData: number) => {
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
                                      {itemData.value[1].value[0].value}
                                    </p>
                                  </div>
                                  <div
                                    className={this.decorateCSS(
                                      "itemData-value"
                                    )}
                                  >
                                    <p className={this.decorateCSS("p-value")}>
                                      {itemData.value[1].value[1].value}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
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
