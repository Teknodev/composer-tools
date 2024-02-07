import * as React from "react";
import { BaseContent, Team } from "../../EditorComponent";
import styles from "./content3.module.scss";
import { Content } from "../../../../components/section-card/section-card";

type Card = {
  image: string;
  title: string;
  description: string;
};

class Content3 extends BaseContent {
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CREATE AMAZING DESING WITH MINT THEME",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value: "CREATE AMAZING DESING WITH MINT THEME",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value: "CREATE AMAZING DESING WITH MINT THEME",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value: "CREATE AMAZING DESING WITH MINT THEME",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
      ],
    });
     
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Content 3";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Card[]>("cards").map(
            (card: Card, indexCard: number) => (
              <div className={this.decorateCSS("card-item-count")} style={{
                width: 100 / this.getPropValue("itemCount") + "%",
              }}>

              <div key={indexCard} className={this.decorateCSS("card")}>
                <img className={this.decorateCSS("image")} src={card.image} alt=""></img>
                <div className={this.decorateCSS("little-container")}>
                  <h3 className={this.decorateCSS("title")}>{card.title}</h3>
                  <p className={this.decorateCSS("description")}>
                    {card.description}
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

export default Content3;
