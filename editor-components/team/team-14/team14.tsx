import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team14.module.scss";

type Portfolio = {
  image: string;
  title: string;
  description: string;
};

class Team14 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "portfolio",
      displayer: "Portfolio Card",
      value: [
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "John Doe",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Web Designer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628416?alt=media&timestamp=1719558632841",
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Matilda Jarod",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Ceo",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628418?alt=media&timestamp=1719558632841",
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Reagan Colby",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Web Developer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628417?alt=media&timestamp=1719558632841",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Team 14";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Portfolio[]>("portfolio").map(
            (portfolio: Portfolio, indexPortfolio: number) => (
              <div className={this.decorateCSS("card-item-count")} style={{
                width: 90 / this.getPropValue("itemCount") + "%",
              }}>

              <div key={indexPortfolio} className={this.decorateCSS("portfolio")}>
                <img className={this.decorateCSS("image")} src={portfolio.image} alt=""></img>
                <div className={this.decorateCSS("little-container")}>
                  <h3 className={this.decorateCSS("title")}>{portfolio.title}</h3>
                  <p className={this.decorateCSS("description")}>
                    {portfolio.description}
                  </p>
                </div>
              </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Team14;
