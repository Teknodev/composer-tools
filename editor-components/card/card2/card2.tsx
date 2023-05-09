import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card2.module.scss";

type IBasicCard = {
  title: string;
  description: string;
};
class Card2 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps = {
      type: "object",
      key: "basic",
      displayer: "Basic",
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
          value: PlaceholderFiller.shortText(),
        },
      ],
    };
    this.addProp({
      type: "array",
      key: "basic-card",
      displayer: "Basic Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<IBasicCard[]>("basic-card").map(
              (basic: any, index: number) => (
                <div
                  className={this.decorateCSS("basic")}
                  
                  key={index}
                >
                  <h3
                    className={this.decorateCSS("title")}
                    
                  >
                    {basic.title}
                  </h3>
                  <p
                    className={this.decorateCSS("long-text")}
                    
                  >
                    {basic.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
