import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content23.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
};

class Content23 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Add Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "User Experience"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus asperiores distinctio explicabo officiis perspiciatis consequuntur corporis illo nostrum, pariatur nobis ipsa dolor, quae culpa! Minus quas mollitia sed exercitationem dicta?"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "User Experience"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus asperiores distinctio explicabo officiis perspiciatis consequuntur corporis illo nostrum, pariatur nobis ipsa dolor, quae culpa! Minus quas mollitia sed exercitationem dicta?"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "User Experience"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus asperiores distinctio explicabo officiis perspiciatis consequuntur corporis illo nostrum, pariatur nobis ipsa dolor, quae culpa! Minus quas mollitia sed exercitationem dicta?"
            }
          ]
        },
      ]
    });
    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count in a Row",
      value: 3,
      max: 3
    });
  }

  getName(): string {
    return "content 23";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
      <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("page")}> 
              <div className={this.decorateCSS("box")}>
                {this.getPropValue("cards").map(
                  (card: any, index: number) => (
                    <div className={this.decorateCSS("card-items")} key={index}
                    style={{ width: 90 / this.getPropValue("reverse") + "%" }}>
                      <div className={this.decorateCSS("text")}>
                        <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("icons") }}
                        name={card.getPropValue("icon")}
                        />
                        <h1 className={this.decorateCSS("title")}>{(card.getPropValue("title"))}</h1>
                        <h3 className={this.decorateCSS("description")}>{(card.getPropValue("description"))}</h3>
                      </div>
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

export default Content23;
