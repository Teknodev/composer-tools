import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit",
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
                    },
                  ],
                },
              ],
            },
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
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
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      displayer: "Image",
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
                    {
                      type: "string",
                      key: "description",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Description",
                    },
                    {
                      type: "string",
                      key: "time",
                      value: "3 days ago",
                      displayer: "time",
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
    return "Testimonials 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials2")}>
            <h1>{this.getPropValue("title")}</h1>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index} className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("profile")}>
                          <img width={50} height={50} src={item.value[0].value} />
                          <div className={this.decorateCSS("profile-text")}>
                            <h2>{item.value[1].value}</h2>
                            <p>{item.value[2].value}</p>
                          </div>
                        </div>
                        <span>{item.value[3].value}</span>
                        <h5>{item.value[4].value}</h5>
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

export default Testimonials2Page;
