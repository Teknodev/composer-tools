import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";

type CardData = {
  CardTitle: number;
  CardDescription: string;
};

class Stats5Page extends BaseStats {
  private intervalId: NodeJS.Timeout | null = null;
  private prevCardCount: number = 0;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cardContent",
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "CardTitle",
              displayer: "Title",
              value: 98,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "CardDescription",
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
              key: "CardTitle",
              displayer: "Title",
              value: 65,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "CardDescription",
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
              key: "CardTitle",
              displayer: "Title",
              value: 7,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "CardDescription",
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
              key: "CardTitle",
              displayer: "Title",
              value: 10,
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "CardDescription",
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

    this.castToObject<CardData[]>("cardContent").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    this.initializeCardStates();

    this.startAnimation();
  }

  initializeCardStates() {
    this.prevCardCount = this.castToObject<CardData[]>("cardContent").length;
    this.castToObject<CardData[]>("cardContent").forEach((statsData, index) => {
      this.setComponentState(`number-${index}`, 0);
    });
  }

  componentDidUpdate(prevProps: any) {
    const currentCardCount =
      this.castToObject<CardData[]>("cardContent").length;
    if (currentCardCount !== this.prevCardCount) {
      this.initializeCardStates();
      this.restartAnimation();
    }
  }

  restartAnimation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAnimation();
  }

  startAnimation() {
    this.intervalId = setInterval(() => {
      let allCompleted = true;
      this.castToObject<CardData[]>("cardContent").forEach(
        (statsData: CardData, index: number) => {
          let statNumber = this.getComponentState(`number-${index}`);
          if (statNumber !== statsData.CardTitle) {
            allCompleted = false;
            this.setComponentState(
              `number-${index}`,
              Math.min(
                statsData.CardTitle,
                statNumber +
                  Math.ceil(
                    statsData.CardTitle /
                      Math.round(this.getPropValue("animation-duration") / 30)
                  )
              ) || 0
            );
          }
        }
      );

      if (allCompleted && this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }, 30);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getName(): string {
    return "Stats 5";
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<CardData[]>("cardContent").length;
    const isLastInRow =
      (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow ? this.decorateCSS("stick") : "";
  }

  render() {
    const itemCountInRow = this.getPropValue("itemCountInRow");
    const hasCard = this.castToObject<CardData[]>("cardContent").length > 0;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {hasCard && (
            <div className={this.decorateCSS("bottom-child")}>
              {this.castToObject<CardData[]>("cardContent").map(
                (data: CardData, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS(
                      "card"
                    )} ${this.getCardClasses(index, itemCountInRow)}`}
                    style={{
                      width: 90 / itemCountInRow + "%",
                    }}
                  >
                    <h4 className={this.decorateCSS("card-data-title")}>
                      {this.getComponentState(`number-${index}`)}
                    </h4>
                    <p className={this.decorateCSS("card-data-description")}>
                      {data.CardDescription}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Stats5Page;
