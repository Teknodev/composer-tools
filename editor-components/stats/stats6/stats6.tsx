import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  cardValue: JSX.Element;
  cardDescription: JSX.Element;
};

class Stats6Page extends BaseStats {
  interval: any;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Title",
      value: "Our Achievements",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Far far away.behind the word mountains, far from the countries Vokalia and Consanantia, there live the blind texts. Seperated they live in",
    });

    this.addProp({
      type: "array",
      key: "card-list",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card-lists",
          displayer: "Card Content",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Card Value",
              value: "400",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Customers are satisfied with our professional support",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Card Content",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Card Value",
              value: "1000",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Amazing preset options to be mixed an combined",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Card Content",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Card Value",
              value: "8000",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Average response time on live chat support channel",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "animationDuration",
      displayer: "Stat Animation Duration (ms)",
      value: 30,
    });
    this.addProp({
      type: "number",
      key: "incrementValue",
      displayer: "Stat Animation Increment Value",
      value: 200,
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });

    this.castToObject<CardData[]>("card-list").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    // let x = setInterval(() => {
    //   this.castToObject<CardData[]>("card-list").map(
    //     (statsData: CardData, index: number) => {
    //       let statNumber = this.getComponentState(`number-${index}`);
    //       if (statNumber != statsData.CardTitle) {
    //         this.setComponentState(
    //           `number-${index}`,
    //           Math.min(
    //             statsData.CardTitle,
    //             statNumber +
    //               Math.ceil(
    //                 statsData.CardTitle /
    //                   Math.round(this.getPropValue("animation-duration") / 30)
    //               )
    //           ) || 0
    //         );
    //       }
    //     }
    //   );
    // }, 30);
  }

  getName(): string {
    return "Stats 6";
  }

  render() {
    const cardList = this.castToObject<CardData[]>("card-list");
    const header = this.getPropValue("header");
    const headerExist = this.castToString(header);
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const itemCount = this.getPropValue("itemCount");

    // if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
    //   this.animate();
    // }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(headerExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("banner")}>
              {headerExist && <Base.SectionTitle className={this.decorateCSS("title")}>{header}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          {cardList.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats6-page")}>
              {cardList.map((data: any, index: number) => {
                return (
                  (this.getComponentState(`number-${index}`) !== "0" || this.castToString(data.cardDescription)) && (
                    <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                      {this.getComponentState(`number-${index}`) !== "0" && <Base.P className={this.decorateCSS("data-card-title")}>{this.getComponentState(`number-${index}`)}</Base.P>}
                      {this.castToString(data.cardDescription) && <Base.P className={this.decorateCSS("data-card-description")}>{data.cardDescription}</Base.P>}
                    </Base.VerticalContent>
                  )
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats6Page;
