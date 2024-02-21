import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
type CardData = {
  CardTitle: number;
  CardDescription: string;
};

class Stats6Page extends BaseStats {
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
              key: "CardTitle",
              displayer: "Card Title",
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
              key: "CardTitle",
              displayer: "Card Title",
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
              key: "CardTitle",
              displayer: "Card Title",
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

    this.castToObject<CardData[]>("card-list").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    let x = setInterval(() => {
      this.castToObject<CardData[]>("card-list").map(
        (statsData: CardData, index: number) => {
          let statNumber = this.getComponentState(`number-${index}`);
          if (statNumber < statsData.CardTitle) {
            this.setComponentState(
              `number-${index}`,
              statNumber +
                Math.round(
                  statsData.CardTitle /
                    Math.round(this.getPropValue("animation-duration") / 30)
                )
            );
          } else {
            this.setComponentState(`number-${index}`, statsData.CardTitle);
            clearInterval(x);
          }
        }
      );
    }, 30);
  }

  getName(): string {
    return "Stats 6";
  }

  render() {
    return (
      <>
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("banner")}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("header")}
              </h1>
              <p>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("stats6-page")}>
              {this.castToObject<CardData[]>("card-list").map(
                (data: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    <h4 className={this.decorateCSS("data-card-title")}>
                      {this.getComponentState(`number-${index}`)}
                    </h4>
                    <p className={this.decorateCSS("data-card-description")}>
                      {data.CardDescription}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stats6Page;
