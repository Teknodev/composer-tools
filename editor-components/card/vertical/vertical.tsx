import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard } from "../../EditorComponent";
import styles from "./vertical.module.scss";

type Verticals = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class VerticalCard extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "vertical-card",
      displayer: "Vertical Card",
      value: [
        {
          type: "object",
          key: "vertical",
          displayer: "Vertical",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://static.thenounproject.com/png/105256-200.png",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Vertical Card";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        {this.castToObject<Verticals[]>("vertical-card").map(
          (vertical: any, index: number) => (
            <div
              className={this.decorateCSS("vertical")}
              
              key={index}
            >
              <img
                className={this.decorateCSS("image")}
                
                src={vertical.image}
              ></img>
              <h3 className={this.decorateCSS("title")} >
                {vertical.title}
              </h3>
              <p
                className={this.decorateCSS("long-text")}
                
              >
                {vertical.description}
              </p>

              <ComposerLink path={vertical.link}>
                <span
                  className={this.decorateCSS("button")}
                  
                >
                  {vertical.buttonText}
                </span>
              </ComposerLink>
            </div>
          )
        )}
      </div>
    );
  }
}

export default VerticalCard;
