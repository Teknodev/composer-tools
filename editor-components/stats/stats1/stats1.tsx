import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";

type ICard = {
  subtitle: string;
  title: string;
  description: string;
};

class Stats1Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "User Statistics on the Website",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Understanding user behavior on a website is important for improving user experience and engagement.",
    });
    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "registers",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "50,000",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "sign up daily",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "sales",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "2,500",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "daily total sales",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "registers",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "4,500",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "daily registers",
            },
          ],
        },
      ],
    });

  }

  getName(): string {
    return "Stats 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <div className={this.decorateCSS("bottom-child")}>
              {this.castToObject<ICard[]>("card-content").map(
                (cardData: any, indexCard: number) => (
                  <div key={indexCard} className={this.decorateCSS("card")}>
                    <h5>{cardData.subtitle}</h5>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.description}</p>
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

export default Stats1Page;
