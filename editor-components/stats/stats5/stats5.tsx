import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  number: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats5Page extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "98",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Services",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "65",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Technicians",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "7",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Days a Week",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "10",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Offices",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "lines",
      displayer: "Toggle Lines",
      value: true,
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
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

    this.init();
    this.animate();
  }

  static getName(): string {
    return "Stats 5";
  }

  init() {
    this.castToObject<Card[]>("cards").map((_, index) => {
      this.setComponentState(`number-${index}`, 0);
      this.setComponentState(`numberForControl-${index}`, 0);
    });
  }

  isEqual(arr1: any[], arr2: any[]) {
    for (let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];

      if (val1 === null || val2 === null) continue;

      if (Number(val1) !== Number(val2)) {
        return false;
      }
    }
    return true;
  }

  getStats() {
    const cards = this.castToObject<Card[]>("stats");
    const stats = cards.map((card: any) => (card.number === "" ? null : card.number));
    return stats;
  }

  getNumbers() {
    const cards = this.castToObject<Card[]>("stats");
    const numbers = cards.map((_, index) => {
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
    return number.toLocaleString("en-US");
  }

  animate() {
    const animationDuration = this.getPropValue("animationDuration");
    const incrementValue = this.getPropValue("incrementValue");

    this.interval = setInterval(() => {
      const cards = this.castToObject<Card[]>("stats");

      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
      }

      cards.forEach((item: Card, index: number) => {
        let currentNumber = this.getComponentState(`number-${index}`) ?? 0;

        if (typeof currentNumber === "string") {
          currentNumber = parseInt(currentNumber.replace(/\D+/g, ""), 10) || 0;
        }

        const targetStat = parseInt(item.number?.toString().replace(/\D+/g, "") || "0", 10) || 0;
        if (currentNumber !== targetStat) {
          let nextValue = Math.min(targetStat, currentNumber + Math.ceil(targetStat / Math.round(incrementValue / 30)));

          const formattedNextValue = this.formatNumberWithDots(nextValue);

          this.setComponentState(`number-${index}`, formattedNextValue);
          this.setComponentState(`numberForControl-${index}`, nextValue);
        }
      });
    }, animationDuration);
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<Card[]>("stats").length;
    const isLastInRow = (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow && this.getPropValue("lines") ? this.decorateCSS("stick") : "";
  }

  render() {
    const itemCountInRow = this.getPropValue("itemCountInRow");
    const cards = this.castToObject<Card[]>("stats");

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubtitleExist || isTitleExist || isDescriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header-wrapper")}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCountInRow, tablet: 2, phone: 1 }} className={this.decorateCSS("bottom-child")}>
              {cards.map((item: Card, index: number) => {
                const titleExist = this.castToString(item.description);
                const statValue = item.number === this.getComponentState(`number-${index}`) ? item.number : this.getComponentState(`number-${index}`);

                if (titleExist || item.number)
                  return (
                    <div
                      key={index}
                      className={`
                          ${this.decorateCSS("card")}
                          ${this.getCardClasses(index, itemCountInRow)}
                        `}
                    >
                      {item.number && <Base.SectionTitle className={this.decorateCSS("card-data-title")}>{statValue}</Base.SectionTitle>}
                      {titleExist && <Base.SectionDescription className={this.decorateCSS("card-data-description")}>{item.description}</Base.SectionDescription>}
                    </div>
                  );
                return null;
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats5Page;
