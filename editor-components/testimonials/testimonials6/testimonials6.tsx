import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials6.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials6Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: PlaceholderFiller.string(),
      displayer: "title",
    });
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
                    },
                  ],
                },
              ],
            }
          ],
        },
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
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
                      value: PlaceholderFiller.shortText(),
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: PlaceholderFiller.string(),
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@" + PlaceholderFiller.string(),
                      displayer: "Name Id",
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Testimonials 6";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials6")}>
            <h1>{this.getPropValue("title")}</h1>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index}>
                        <div className={this.decorateCSS("card")}>
                          <img
                            width={120}
                            height={20}
                            src={item.value[0].value}
                          />
                          <span>{item.value[1].value}</span>
                          <div className={this.decorateCSS("profile")}>
                            <img
                              width={50}
                              height={50}
                              src={item.value[2].value}
                            />
                            <div className={this.decorateCSS("profile-text")}>
                              <h2>{item.value[3].value}</h2>
                              <p>{item.value[4].value}</p>
                            </div>
                          </div>
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

export default Testimonials6Page;
