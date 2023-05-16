import * as React from "react";
import { BaseCard } from "../../EditorComponent";
import styles from "./card2.module.scss";

type IBasicCard = {
  title: string;
  description: string;
};
class Card2 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "basic-card",
      displayer: "Basic Card",
      value: [
        {
          type: "object",
          key: "basic",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Discover the Best Restaurants in Town",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Our website features a curated selection of the top-rated restaurants in your area. Browse our cards to find the perfect dining spot for any occasion, whether it's a romantic date night or a family-friendly brunch.",
            },
          ],
        },
        {
          type: "object",
          key: "basic",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Benefits of Regular Exercise for a Healthy Lifestyle",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                " Discover the many advantages of incorporating regular exercise into your daily routine. From boosting your mood and energy levels to improving heart health and reducing the risk of chronic diseases, find out why exercise is crucial for a healthy lifestyle.",
            },
          ],
        },
        {
          type: "object",
          key: "basic",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "How to Build a Successful E-Commerce Business from Scratch",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Ready to start your own online store but not sure where to begin? Learn the essential steps to building a successful e-commerce business from scratch. From choosing the right products and platform to marketing strategies and customer service, we've got you covered.",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Card 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<IBasicCard[]>("basic-card").map(
              (basic: any, index: number) => (
                <div className={this.decorateCSS("basic")} key={index}>
                  <h3 className={this.decorateCSS("title")}>{basic.title}</h3>
                  <p className={this.decorateCSS("long-text")}>{basic.description}</p>
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
