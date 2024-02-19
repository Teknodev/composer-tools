import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";

type CardData = {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
};

class Stats6Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "card-header",
      displayer: "Card Header",
      value: "Our achievements",
    });
    this.addProp({
      type: "string",
      key: "header-text",
      displayer: "Header text",
      value:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Seperated they live in.",
    });
    this.addProp({
      type: "array",
      key: "card-list",
      displayer: "List",
      value: [
        {
          type: "object",
          key: "card-lists",
          displayer: "Single List",
          value: [
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "400",
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
          displayer: "Single List",
          value: [
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "1000",
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "Amazing preset options to be mixed and combined",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Single List",
          value: [
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "8000",
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
  }

  getName(): string {
    return "Stats 6";
  }
  activeIndex: number = -1;
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("sections-container")}>
            <div className={this.decorateCSS("stats6-up")}>
              <h2 className={this.decorateCSS("header")}>
                {this.getPropValue("card-header")}
              </h2>
              <p className={this.decorateCSS("header-description")}>
                {this.getPropValue("header-text")}
              </p>
            </div>
            <div className={this.decorateCSS("stats6-page")}>
              {this.castToObject<CardData[]>("card-list").map(
                (data: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("single-card")}>
                      <h2 className={this.decorateCSS("card-title")}>
                        {data.CardTitle}
                      </h2>
                      <p className={this.decorateCSS("card-description")}>
                        {data.CardDescription}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats6Page;
