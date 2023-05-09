import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card4.module.scss";

type Card = {
  image: string;
  category: string;
  title: string;
  description: string;
  number: string;
  text: string;
};

class Card4 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps =
    {
      type: "object",
      key: "card",
      displayer: "card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "string",
          key: "category",
          displayer: "Category",
          value: PlaceholderFiller.string(),
        },
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
          type: "number",
          key: "number",
          displayer: "Number",
          value: PlaceholderFiller.number(),
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: PlaceholderFiller.string(),
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
    return "Card 4";
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
                <p
                  className={this.decorateCSS("little-text")}
                  
                >
                  {card.category}
                </p>
                <p className={this.decorateCSS("title")} >
                  {card.title}
                </p>
                <p
                  className={this.decorateCSS("title-description")}
                  
                >
                  {card.description}
                </p>
                <div
                  className={this.decorateCSS("little-box")}
                  
                >
                  <p
                    className={this.decorateCSS("number")}
                    
                  >
                    {card.number}
                  </p>
                  <p className={this.decorateCSS("text")} >
                    {card.text}
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

export default Card4;
