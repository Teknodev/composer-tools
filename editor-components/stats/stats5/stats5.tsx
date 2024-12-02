import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";

type Card = {
  stat: number;
  title: JSX.Element;
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
      type: "number",
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Stat Animation Duration (ms)",
      value: 30,
    });

    this.addProp({
      type: "number",
      key: "increment-value",
      displayer: "Stat Animation Increment Value",
      value: 20,
    });

    this.addProp({
      type: "boolean",
      key: "lines",
      displayer: "Toggle Lines",
      value: true,
    });

    this.init();
    this.animate();
  }

  getName(): string {
    return "Stats 5";
  }

  init() {
    this.castToObject<Card[]>("cards").map((card, index) =>
      this.setComponentState(`number-${index}`, 0),
    );
  }

  getStats() {
    const cards = this.castToObject<Card[]>("cards");
    const stats = cards.map((card: any) => (card.stat === "" ? 0 : card.stat));
    return stats;
  }

  getNumbers() {
    const cards = this.castToObject<Card[]>("cards");
    const numbers = cards.map((_, index) =>
      this.getComponentState(`number-${index}`),
    );
    return numbers;
  }

  isEqual(arr1: any[], arr2: any[]) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  animate() {
    const animationDuration = this.getPropValue("animation-duration");
    const incrementValue = this.getPropValue("increment-value");

    // this.interval = setInterval(() => {
    //   const cards = this.castToObject<Card[]>("cards");

    //   if (this.isEqual(this.getStats(), this.getNumbers())) {
    //     this.interval = clearInterval(this.interval);
    //     return; // return to stop animate()
    //   }
    //   cards.forEach((item: Card, index: number) => {
    //     const statNumber = this.getComponentState(`number-${index}`) ?? 0;

    //     this.setComponentState(
    //       `number-${index}`,
    //       Math.min(item.stat, statNumber + incrementValue),
    //     );
    //   });
    // }, animationDuration);
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<Card[]>("cards").length;
    const isLastInRow =
      (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow && this.getPropValue("lines")
      ? this.decorateCSS("stick")
      : "";
  }

  render() {
    const itemCountInRow = this.getPropValue("itemCountInRow");

    const cards = this.castToObject<Card[]>("cards");

    /**
     * Execute animate() only if:
     *    it is executed and it's interval is cleared before
     * AND,
     *    prop values of stats and state values are not equal.
     * (user may change it after animation. so we need to check that)
     */
    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {cards?.length > 0 && (
            <div
              className={this.decorateCSS("bottom-child")}
              style={{
                gridTemplateColumns: `repeat(${itemCountInRow}, 1fr)`,
              }}
            >
              {cards.map((item: Card, index: number) => {
                const titleExist = this.castToString(item.title);

                const statValue =
                  item.stat === this.getComponentState(`number-${index}`)
                    ? item.stat
                    : this.getComponentState(`number-${index}`);

                if (titleExist || item.stat)
                  return (
                    <div
                      key={index}
                      className={`
                          ${this.decorateCSS("card")}
                          ${this.getCardClasses(index, itemCountInRow)}
                        `}
                    >
                      {item.stat && (
                        <h4 className={this.decorateCSS("card-data-title")}>
                          {statValue}
                        </h4>
                      )}
                      {titleExist && (
                        <p
                          className={this.decorateCSS("card-data-description")}
                        >
                          {item.title}
                        </p>
                      )}
                    </div>
                  );
                return null;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Stats5Page;
