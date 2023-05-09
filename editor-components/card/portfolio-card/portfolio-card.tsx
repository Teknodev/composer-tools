import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./portfolio-card.module.scss";

type Portfolio = {
  image: string,
  title: string,
  description: string,
}

class PortfolioCard extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card:TypeUsableComponentProps =         {
      type: "object",
      key: "portfolio",
      displayer: "Portfolio Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.string()
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.string()
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
      ],
    };
    this.addProp({
      type: "array",
      key: "portfolio",
      displayer: "Portfolio Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Portfolio Card";
  }
  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Portfolio[]>("portfolio").map((portfolio: Portfolio) => (
            <div className={this.decorateCSS("portfolio")} >
              <img src={portfolio.image}></img>
              <div className={this.decorateCSS("little-container")} >
                <h3 className={this.decorateCSS("title")} >
                  {portfolio.title}
                </h3>
                <p
                  className={this.decorateCSS("description")}
                  
                >
                  {portfolio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
