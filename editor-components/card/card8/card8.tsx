import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card8.module.scss";

type IMessages = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
};
class Card8 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps =  {
      type: "object",
      key: "message",
      displayer: "Message",
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
          value: PlaceholderFiller.mediumText(),
        },
      ],
    }
    this.addProp({
      type: "array",
      key: "message-bar-card",
      displayer: "Message Bar Card",
      value: [
       JSON.parse(JSON.stringify(card)),
       JSON.parse(JSON.stringify(card)),
       JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<IMessages[]>("message-bar-card").map(
              (message: any, index: number) => (
                <div
                  className={this.decorateCSS("message")}
                  
                  key={index}
                >
                  <div
                    className={this.decorateCSS("title")}
                    
                  >
                    <h3>{message.title}</h3>
                  </div>
                  <p
                    className={this.decorateCSS("long-text")}
                    
                  >
                    {message.description}
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

export default Card8;
