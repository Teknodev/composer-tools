import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card3.module.scss";

type IBasicBadge = {
  title: string;
  description: string;
  badge: string;
};
class Card3 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps ={
      type: "object",
      key: "basic-badge",
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
        {
          type: "string",
          key: "badge",
          displayer: "Badge",
          value: "NEW",
        },
      ],
    };
    this.addProp({
      type: "array",
      key: "basic-card-badge",
      displayer: "Basic Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 3";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<IBasicBadge[]>("basic-card-badge").map(
              (basic: any, index: number) => (
                <div
                  className={this.decorateCSS("basic-badge")}
                  
                  key={index}
                >
                  <h3
                    className={this.decorateCSS("title")}
                    
                  >
                    {basic.title}
                    <span className={this.decorateCSS("badge")}>{basic.badge}</span>
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

export default Card3;
