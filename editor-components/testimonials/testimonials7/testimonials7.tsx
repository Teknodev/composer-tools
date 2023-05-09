import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: PlaceholderFiller.string(),
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value: PlaceholderFiller.shortText(),
      displayer: "Description",
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
                        "https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''" + PlaceholderFiller.string() + "''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value: PlaceholderFiller.shortText(),
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: PlaceholderFiller.string(),
                      displayer: "Author",
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
                        "https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''" + PlaceholderFiller.string() + "''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value: PlaceholderFiller.shortText(),
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: PlaceholderFiller.string(),
                      displayer: "Author",
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
    return "Testimonials 7";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index}>
                        <div className={this.decorateCSS("card")}>
                          <div>
                            <img
                              width={280}
                              height={180}
                              src={item.value[0].value}
                            />
                          </div>
                          <div>
                            <span>{item.value[1].value}</span>
                            <h5>{item.value[2].value}</h5>
                            <span>{item.value[3].value}</span>
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

export default Testimonials7Page;
