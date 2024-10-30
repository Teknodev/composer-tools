import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  CardValue: number;
  CardDescription: string;
};

class Stats6Page extends BaseStats {
  interval: any;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header Content",
      value: "Our Achievements",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Header Description",
      value:
        "Far far away.behind the word mountains, far from the countries Vokalia and Consanantia, there live the blind texts. Seperated they live in",
    });

    this.addProp({
      type: "array",
      key: "card-list",
      displayer: "Price List",
      value: [
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "number",
              key: "CardValue",
              displayer: "Card Value",
              value: 400,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "Customers are satisfied with our professional support",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "number",
              key: "CardValue",
              displayer: "Card Value",
              value: 1000,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "Amazing preset options to be mixed an combined",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "number",
              key: "CardValue",
              displayer: "Card Value",
              value: 8000,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "Average response time on live chat support channel",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });

    this.init();
    this.animate();
  }

  init() {
    this.castToObject<CardData[]>("card-list").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );
  }

  getStats() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const stats = statItems.map((statsData: any) =>
      statsData.CardValue === "" ? 0 : statsData.CardValue,
    );
    return stats;
  }

  getNumbers() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const numbers = statItems.map((_, index) =>
      this.getComponentState(`number-${index}`),
    );
    return numbers;
  }

  animate() {
    this.interval = setInterval(() => {
      const statItems = this.castToObject<CardData[]>("card-list");

      if (this.isEqual(this.getStats(), this.getNumbers())) {
        this.interval = clearInterval(this.interval);
        return;
      }

      statItems.map(
        (statsData: CardData, index: number) => {

          let statNumber = this.getComponentState(`number-${index}`);
          if (statNumber != statsData.CardValue) {
            this.setComponentState(
              `number-${index}`,
              Math.min(
                statsData.CardValue,
                statNumber +
                Math.ceil(
                  statsData.CardValue /
                  Math.round(this.getPropValue("animation-duration") / 30)
                )
              ) || 0
            );
          }
        }
      );
    }, 30);
  }

  getName(): string {
    return "Stats 6";
  }

  isEqual(arr1: any[], arr2: any[]) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }


  render() {
    const cardList = this.castToObject<CardData[]>("card-list");
    const header = this.getPropValue("header");
    const headerExist = this.castToString(header);
    const description = this.getPropValue("description")
    const descriptionExist = this.castToString(description);
    const itemCount = this.getPropValue("itemCount");

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(headerExist || descriptionExist) && <Base.VerticalContent className={this.decorateCSS("banner")}>
            {headerExist && <Base.SectionTitle className={this.decorateCSS("title")}>
              {header}
            </Base.SectionTitle>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>
              {description}
            </Base.SectionDescription>}
          </Base.VerticalContent>}
          {cardList.length > 0 &&
            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats6-page")}>
              {cardList.map(
                (data: any, index: number) => {
                  return (
                    <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                      {this.getComponentState(`number-${index}`) !== 0 &&
                        <Base.P className={this.decorateCSS("data-card-title")}>
                          {this.getComponentState(`number-${index}`)}
                        </Base.P>}
                      {this.castToString(data.CardDescription) &&
                        <Base.P className={this.decorateCSS("data-card-description")}>
                          {data.CardDescription}
                        </Base.P>}
                    </Base.VerticalContent>
                  )
                }
              )}
            </Base.ListGrid>}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats6Page;
