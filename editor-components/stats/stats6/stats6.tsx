import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
import { useState } from "react";
type CardData = {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
};
const [number, setNumber] = useState(0);

class Stats6Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

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
          displayer: "Pricing List",
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
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "8,000",
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

  render() {
    let num = 0;

    return (
      <>
        <div className={this.decorateCSS("banner")}>
          <h1>Our achievements</h1>
          <p>
            Far far away.behind the word mountains, far from the countries
            Vokalia and Consanantia, there live the blind texts. Seperated they
            live in
          </p>
        </div>
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("stats6-page")}>
              {this.castToObject<CardData[]>("card-list").map(
                (data: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    {/* <img src={data.CardImage} width={100} height={100} alt="" /> */}
                    <h4 className={this.decorateCSS("data-card-title")}>
                      {/* {data.CardTitle} */}
                      {window.addEventListener("DOMContentLoaded", () => {
                        setInterval(() => {
                          for (let i = 0; i < data.CardTitle; i++) {
                            num += 1;
                          }
                          setNumber(num);
                        }, 100);
                      })}
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
