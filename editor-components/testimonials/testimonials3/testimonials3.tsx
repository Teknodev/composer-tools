import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials3Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "string",
                      key: "star",
                      value: "5",
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''good and responsive design''",
                      displayer: "Subtitle",
                      completion: "Testimonial about agency that mentions one of the following benefits: friendly approach, potential partnership"
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Matt Kenton",
                      displayer: "Title",
                      completion: "Full name 1"
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "string",
                      key: "star",
                      value: "5",
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''fast and good support team''",
                      displayer: "Subtitle",
                      completion: "Testimonial about agency that mentions one of the following benefits: high technical quality, crystal clear communication"
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Tamsen Fannie",
                      displayer: "Title",
                      completion: "Full name 2"
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "string",
                      key: "start",
                      value: "5",
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''Innovative designs and easy use''",
                      displayer: "Subtitle",
                      completion: "Testimonial about agency that mentions one of the following benefits: fast development, low cost"
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Brynn Samantha",
                      displayer: "Title",
                      completion: "Full name 3"
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Testimonials 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials3")}>
            {this.castToObject<ISection[]>("card-items").map(
              (section: any, index: number) => (
                <div key={index} className={this.decorateCSS("card-child")}>
                  {section.items.map((item: any, index: number) => (
                    <div
                      key={`testimonials3-${index}`}
                      className={this.decorateCSS("card")}
                    >
                      <div className={styles["stars"]}>
                        {[...Array(Number(item.value[0].value))].map((item: any, index: number) => (
                          <img key={`star-testimonials3${index}`} src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c7aa5fba070002b749808?alt=media&timestamp=1684830888295" />
                        ))}
                      </div>
                      <span>{item.value[1].value}</span>
                      <h5>{item.value[2].value}</h5>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials3Page;
