import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

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
                      type: "image",
                      key: "image",
                      value:
                        "https://www.clipartmax.com/png/full/336-3368343_image-result-for-5-5-stars-clipart-blue-five-star-rating-blue.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''Lorem ipsum dolor sit amet''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: PlaceholderFiller.string(),
                      displayer: "Title",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.clipartmax.com/png/full/336-3368343_image-result-for-5-5-stars-clipart-blue-five-star-rating-blue.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''Lorem ipsum dolor sit amet''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: PlaceholderFiller.string(),
                      displayer: "Title",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.clipartmax.com/png/full/336-3368343_image-result-for-5-5-stars-clipart-blue-five-star-rating-blue.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''Lorem ipsum dolor sit amet''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: PlaceholderFiller.string(),
                      displayer: "Title",
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
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials3")}>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index}>
                        <img width={150} height={25} src={item.value[0].value} />
                        <div className={this.decorateCSS("card")}>
                          <span>{item.value[1].value}</span>
                          <h5>{item.value[2].value}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials3Page;
