import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature5.module.scss";

type IBasicCard = {
  title: string;
  description: string;
  image: string;
};
class Feature5 extends BaseFeature {
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
            },
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg",
            },
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg",
            },
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
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<IBasicCard[]>("basic-card").map(
              (basic: any, index: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                <div className={this.decorateCSS("basic")} key={index}>
                  <img src={basic.image} alt="" />
                  <h3 className={this.decorateCSS("title")}>{basic.title}</h3>
                  <p className={this.decorateCSS("long-text")}>{basic.description}</p>
                </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature5;
