import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team15.module.scss";

type Card = {
  image: string;
  title: string;
  description: string;
};

class Team15 extends Team {
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
              value: "Lionel Messi",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Futboller",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
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
              value: "Andrew Tate",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Entrepreneur",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a26f2f72de2002caa9eb1?alt=media&timestamp=1682581243942",
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
              value: "Adele",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Singer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a27d5f72de2002caa9eb5?alt=media&timestamp=1682581471591",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team-15";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => (
              <div key={indexCards} className={this.decorateCSS("listed")}>
                <img className={this.decorateCSS("image")} src={card.image}></img>
                <div className={this.decorateCSS("little-container")}>
                  <p className={this.decorateCSS("title")}>{card.title}</p>
                  <p className={this.decorateCSS("title-description")}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Team15;
