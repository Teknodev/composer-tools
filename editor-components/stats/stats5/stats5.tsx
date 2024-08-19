import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";

type Card = {
  stat: number;
  title: JSX.Element;
};

class Stats5Page extends BaseStats {
  stats: number[];
  numbers: number[];

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
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
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

    const cards = this.castToObject<Card[]>("cards");

    this.stats = cards.map((e) => e.stat);
    this.numbers = cards
      .map((e, index) => this.getComponentState(`number-${index}`))
      .filter((e) => e !== undefined && e !== "");
  }

  getName(): string {
    return "Stats 5";
  }

  x: NodeJS.Timeout;

  init() {
    this.castToObject<Card[]>("cards").map((card, index) =>
      this.setComponentState(`number-${index}`, 0),
    );
  }

  animate() {
    this.x = setInterval(() => {
      const cards = this.castToObject<Card[]>("cards");
      cards.map((card: Card, index: number) => {
        let statNumber = this.getComponentState(`number-${index}`);
        if (statNumber !== card.stat) {
          this.setComponentState(
            `number-${index}`,
            Math.min(
              card.stat,
              statNumber +
                Math.ceil(
                  card.stat /
                    Math.round(this.getPropValue("animation-duration") / 30),
                ),
            ) || 0,
          );
        }
      });

      const stats = cards.map((card: any) =>
        card.stat === "" ? 0 : card.stat,
      );
      const numbers = cards.map((_, index) =>
        this.getComponentState(`number-${index}`),
      );

      if (JSON.stringify(stats) === JSON.stringify(numbers)) {
        clearInterval(this.x);
      }
    }, 30);
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<Card[]>("cards").length;
    const isLastInRow =
      (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow ? this.decorateCSS("stick") : "";
  }

  render() {
    const itemCountInRow = this.getPropValue("itemCountInRow");

    const cards = this.castToObject<Card[]>("cards");

    if (JSON.stringify(this.stats) !== JSON.stringify(this.numbers)) {
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
              {cards.map((data: Card, index: number) => {
                const titleExist = this.castToString(data.title);

                if (titleExist || data.stat)
                  return (
                    <div
                      key={index}
                      className={`
                          ${this.decorateCSS("card")}
                          ${this.getCardClasses(index, itemCountInRow)}
                        `}
                    >
                      {data.stat && (
                        <h4 className={this.decorateCSS("card-data-title")}>
                          {this.getComponentState(`number-${index}`)
                            ? this.getComponentState(`number-${index}`)
                            : data.stat}
                        </h4>
                      )}
                      {titleExist && (
                        <p
                          className={this.decorateCSS("card-data-description")}
                        >
                          {data.title}
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
