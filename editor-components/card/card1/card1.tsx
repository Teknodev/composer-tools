import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card1.module.scss";

type Card = {
  image: string;
  title: string;
  description: string;
};

class Card1 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps =
    {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.string(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
      ],
    }
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<Card[]>("cards").map((card: Card) => (
              <div className={this.decorateCSS("listed")}>
                <img src={card.image}></img>
                <div
                  className={this.decorateCSS("little-container")}
                  
                >
                  <p
                    className={this.decorateCSS("title")}
                    
                  >
                    {card.title}
                  </p>
                  <p
                    className={this.decorateCSS("title-description")}
                    
                  >
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

export default Card1;
