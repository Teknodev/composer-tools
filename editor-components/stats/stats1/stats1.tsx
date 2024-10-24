import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("stats1-page")}>
            {isTitleExist &&
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            }
            {isDescExist &&
              <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
            }
            {cardList.length > 0 &&
              <Base.ContainerGrid className={this.decorateCSS("bottom-child")}>
                {cardList.map(
                  (cardData: ICard, indexCard: number) => {

                    const isSubtitleExist = this.castToString(cardData.subtitle);
                    const isTitleExist = this.castToString(cardData.title);
                    const isDescExist = this.castToString(cardData.description);

                    if (isSubtitleExist || isTitleExist || isDescExist)
                      return (
                        <Base.GridCell key={indexCard} className={this.decorateCSS("card")}>
                          {isSubtitleExist &&
                            <p className={this.decorateCSS("card-data-subtitle")}>{cardData.subtitle}</p>
                          }
                          {isTitleExist &&
                            <p className={this.decorateCSS("card-data-title")}>{cardData.title}</p>
                          }
                          {isDescExist &&
                            <p className={this.decorateCSS("card-data-description")}>{cardData.description}</p>
                          }
                        </Base.GridCell>
                      );
                  }
                )}
              </Base.ContainerGrid>
            }
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats1Page;