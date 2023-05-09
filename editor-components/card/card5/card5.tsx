import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card5.module.scss";

type Features = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class Card5 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps = {
      type: "object",
      key: "features",
      displayer: "Features",
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
    };
    this.addProp({
      type: "string",
      key: "card-title",
      value: PlaceholderFiller.string(),
      displayer: "Card Title",
    });
    this.addProp({
      type: "string",
      key: "card-button",
      value: PlaceholderFiller.string(),
      displayer: "Card Button Text",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "features-card",
      displayer: "Features Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 5";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            <div className={this.decorateCSS("title")} >
              <h1>{this.getPropValue("card-title")}</h1>
            </div>

            <div className={this.decorateCSS("card")}>
              {this.castToObject<Features[]>("features-card").map(
                (features: any, index: number) => (
                  <div
                    className={this.decorateCSS("features")}
                    
                    key={index}
                  >
                    <img
                      className={this.decorateCSS("image")}
                      
                      src={features.image}
                    ></img>
                    <h3
                      className={this.decorateCSS("title")}
                      
                    >
                      {features.title}
                    </h3>
                    <p
                      className={this.decorateCSS("long-text")}
                      
                    >
                      {features.description}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className={this.decorateCSS("button")} >
              <ComposerLink path={this.getPropValue("link")}>
                {this.getPropValue("card-button")}
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card5;
