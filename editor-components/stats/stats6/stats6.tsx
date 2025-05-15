import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  cardValue: React.JSX.Element;
  cardDescription: React.JSX.Element;
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

    this.init();
    this.animate();
  }

  init() {
    this.castToObject<CardData[]>("card-list").map((_, index) => {
      this.setComponentState(`number-${index}`, "");
      this.setComponentState(`numberForControl-${index}`, "");
    });
  }

  isEqual(arr1: any[], arr2: any[]) {
    return arr1.every((value, index) => {
      const otherValue = arr2[index];
      return value === otherValue || (value === "" && otherValue === 0) || (value === 0 && otherValue === "");
    });
  }

  getStats() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const stats = statItems.map((statsData: any) => (statsData.cardValue === "" ? "" : this.castToString(statsData.cardValue)));
    return stats;
  }

  getNumbers() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const numbers = statItems.map((_, index) => {
      const number = this.getComponentState(`numberForControl-${index}`);
      return number !== undefined ? number : "";
    });
    return numbers;
  }

  formatNumberWithDots(value: any) {
    const number = Number(value);
    if (isNaN(number)) {
      return "";
    }
    return number.toLocaleString("tr-TR");
  }

  animate() {
    const animationDuration = this.getPropValue("animationDuration");
    const incrementValue = this.getPropValue("incrementValue");

    this.interval = setInterval(() => {
      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
      }

      this.castToObject<CardData[]>("card-list").map((statData: CardData, index: number) => {
        let currentNumberState = this.getComponentState(`number-${index}`);
        const currentString = typeof currentNumberState === "string" ? currentNumberState : "";
        const currentNonNumericPrefix = currentString.match(/^\D+/)?.[0] || "";
        const currentNonNumericSuffix = currentString.match(/\D+$/)?.[0] || "";
        const currentNumber = parseInt(currentString.replace(/\D+/g, ""), 10) || 0;

        const counterString = this.castToString(statData.cardValue);
        const newNonNumericPrefix = counterString.match(/^\D+/)?.[0] || "";
        const newNonNumericSuffix = counterString.match(/\D+$/)?.[0] || "";
        const numericPart = parseInt(counterString.replace(/[^\d]/g, ""), 10) || 0;

        if (currentNumber !== numericPart || currentNonNumericPrefix !== newNonNumericPrefix || currentNonNumericSuffix !== newNonNumericSuffix) {
          let nextValue = Math.min(numericPart, currentNumber + Math.ceil(numericPart / Math.round(incrementValue / 30)));

          let formattedNextValue = nextValue ? nextValue.toString() : "";

          const formattedNextValueWithDots = this.formatNumberWithDots(formattedNextValue) === "0" ? "" : this.formatNumberWithDots(formattedNextValue);

          const updatedValue = currentNumber > 0 ? newNonNumericPrefix + formattedNextValueWithDots + newNonNumericSuffix : newNonNumericPrefix + formattedNextValueWithDots;

          const updatedValueForControl = currentNumber > 0 ? newNonNumericPrefix + formattedNextValue + newNonNumericSuffix : newNonNumericPrefix + formattedNextValue;

          this.setComponentState(`number-${index}`, updatedValue);

          this.setComponentState(`numberForControl-${index}`, updatedValueForControl);
        }
      });
    }, animationDuration);
  }

  static getName(): string {
    return "Stats 6";
  }

  render() {
    const cardList = this.castToObject<CardData[]>("card-list");
    const header = this.getPropValue("header");
    const headerExist = this.castToString(header);
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const itemCount = this.getPropValue("itemCount");

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

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
