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
              value: "footballer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 15";
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