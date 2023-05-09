import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard } from "../../EditorComponent";
import styles from "./card10.module.scss";

type CardMultiple = {
  title: string;
  description: string;
  image: string;
};
class Card10 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "component-position",
      displayer: "Component Position",
      value: [
        {
          type: "string",
          key: "position",
          value: "left",
          displayer: "Position",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "text",
      displayer: "Text",
      value: [
        {
          type: "string",
          key: "title",
          value: PlaceholderFiller.shortText(),
          displayer: "Title",
        },
        {
          type: "string",
          key: "description",
          value: PlaceholderFiller.mediumText(),
          displayer: "Description",
        },
        {
          type: "string",
          key: "buttonText",
          value: PlaceholderFiller.string(),
          displayer: "Button Text",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "multiple-card",
      displayer: "Multiple Card",
      value: [
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: PlaceholderFiller.string(),
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: PlaceholderFiller.shortText(),
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://static.thenounproject.com/png/105256-200.png",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: PlaceholderFiller.string(),
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: PlaceholderFiller.shortText(),
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://static.thenounproject.com/png/105256-200.png",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: PlaceholderFiller.string(),
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: PlaceholderFiller.shortText(),
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://static.thenounproject.com/png/105256-200.png",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: PlaceholderFiller.string(),
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: PlaceholderFiller.shortText(),
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://static.thenounproject.com/png/105256-200.png",
              displayer: "Image",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Card 10";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.getPropValue("component-position")[0].value == "left" && (
              <div
                className={this.decorateCSS("message")}
                
              >
                <h1>{this.getPropValue("text")[0].value}</h1>
                <p>{this.getPropValue("text")[1].value}</p>

                <ComposerLink path={this.getPropValue("text")[3].value}>
                  <a
                    className={this.decorateCSS("button")}
                    
                  >
                    {this.getPropValue("text")[2].value}
                  </a>
                </ComposerLink>
              </div>
            )}

            <div className={this.decorateCSS("cards")} >
              {this.castToObject<CardMultiple[]>("multiple-card").map(
                (multiple: any, index: number) => (
                  <div
                    className={this.decorateCSS("multiple")}
                    
                    key={index}
                  >
                    <img src={multiple.image}></img>
                    <h3
                      className={this.decorateCSS("title")}
                      
                    >
                      {multiple.title}
                    </h3>
                    <p
                      className={this.decorateCSS("long-text")}
                      
                    >
                      {multiple.description}
                    </p>
                  </div>
                )
              )}
            </div>

            {this.getPropValue("component-position")[0].value == "right" && (
              <div
                className={this.decorateCSS("message")}
                
              >
                <h1>{this.getPropValue("text")[0].value}</h1>
                <p>{this.getPropValue("text")[1].value}</p>

                <span
                  className={this.decorateCSS("button")}
                  
                >
                  {this.getPropValue("text")[2].value}
                </span>
              </div>
            )}
          </div>
        </div>

        {this.getPropValue("component-position")[0].value == "right" && (
          <div className={this.decorateCSS("content")}>
            <h1>{this.getPropValue("text")[0].value}</h1>
            <p>{this.getPropValue("text")[1].value}</p>

            <span className={this.decorateCSS("button")}>
              {this.getPropValue("text")[2].value}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Card10;
