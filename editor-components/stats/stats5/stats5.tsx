import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  stat: React.JSX.Element;
  title: React.JSX.Element;
};

class Stats5Page extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "stat",
              displayer: "Stat",
              value: 98,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Services",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "stat",
              displayer: "Stat",
              value: 65,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Technicians",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "stat",
              displayer: "Stat",
              value: 7,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Days a Week",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "stat",
              displayer: "Stat",
              value: 10,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
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
    const cards = this.castToObject<Card[]>("cards");
    const stats = cards.map((card: any) => (card.stat === "" ? null : card.stat));
    return stats;
  }

  getNumbers() {
    const cards = this.castToObject<Card[]>("cards");
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
      const cards = this.castToObject<Card[]>("cards");

      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
      }

      cards.forEach((item: Card, index: number) => {
        let currentNumber = this.getComponentState(`number-${index}`) ?? 0;

        if (typeof currentNumber === "string") {
          currentNumber = parseInt(currentNumber.replace(/\D+/g, ""), 10) || 0;
        }

        if (typeof item.stat === "number") {
          if (currentNumber !== item.stat) {
            let nextValue = Math.min(item.stat, currentNumber + Math.ceil(item.stat / Math.round(incrementValue / 30)));

            const formattedNextValue = this.formatNumberWithDots(nextValue);

            this.setComponentState(`number-${index}`, formattedNextValue);
            this.setComponentState(`numberForControl-${index}`, nextValue);
          }
        }
      });
    }, animationDuration);
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<Card[]>("cards").length;
    const isLastInRow = (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow && this.getPropValue("lines") ? this.decorateCSS("stick") : "";
  }

  render() {
    const itemCountInRow = this.getPropValue("itemCountInRow");
    const cards = this.castToObject<Card[]>("cards");

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCountInRow, tablet: 2, phone: 1 }} className={this.decorateCSS("bottom-child")}>
              {cards.map((item: Card, index: number) => {
                const titleExist = this.castToString(item.title);
                const statValue = item.stat === this.getComponentState(`number-${index}`) ? item.stat : this.getComponentState(`number-${index}`);

                if (titleExist || item.stat)
                  return (
                    <div
                      key={index}
                      className={`
                          ${this.decorateCSS("card")}
                          ${this.getCardClasses(index, itemCountInRow)}
                        `}
                    >
                      {item.stat && <Base.SectionTitle className={this.decorateCSS("card-data-title")}>{statValue}</Base.SectionTitle>}
                      {titleExist && <Base.SectionDescription className={this.decorateCSS("card-data-description")}>{item.title}</Base.SectionDescription>}
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
