import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team16.module.scss";

type Card = {
  image: string;
  title: string;
  subTitle: string;
  subTitle2: string;
};

class Team16 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "All on 4 Implants",
            },
            {
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "Start from (per jaw) $1.200",
            },
            {
                type: "string",
                key: "subTitle2",
                displayer: "Subtitle 2",
                value: "Timescale 7 Days",
              },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b773bd2970002c628549?alt=media&timestamp=1719558632841",
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
              key: "title",
              displayer: "Title",
              value: "Gum Contouring",
            },
            {
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "Start From $265",
            },
            {
                type: "string",
                key: "subTitle2",
                displayer: "Subtitle 2",
                value: "Timescale 1 Day",
              },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b773bd2970002c62854b?alt=media&timestamp=1719558632841",
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
              key: "title",
              displayer: "Title",
              value: "Laminate Veener",
            },
            {
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "Start From $250",
            },
            {
                type: "string",
                key: "subTitle2",
                displayer: "Subtitle 2",
                value: "Timescale 7 Day",
              },
              {
                type: "image",
                key: "icon",
                displayer: "Icon",
                value:
                  "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b773bd2970002c62854a?alt=media&timestamp=1719558632841",
              },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b773bd2970002c62854a?alt=media&timestamp=1719558632841",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 16";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => (
              <div key={indexCards} className={this.decorateCSS("listed")}>
                    <img className={this.decorateCSS("image")} src={card.image}></img>
                    <div className={this.decorateCSS("text-box")}>
                    <h1 className={this.decorateCSS("title")}>{card.title}</h1>
                    <h3 className={this.decorateCSS("sub-title")}>{card.subTitle}</h3>
                    <h3 className={this.decorateCSS("sub-title2")}>{card.subTitle2}</h3>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Team16;