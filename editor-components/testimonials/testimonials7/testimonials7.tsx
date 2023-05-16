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
      value: "Testimonials",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value:
        "Read what our satisfied customers have to say about their experience with our products/services in these testimonials.",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644b8f5bf72de2002caaab58?alt=media&timestamp=1682673510171",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''DESIGN''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "Joe Karsyn",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644b9105f72de2002caaab76?alt=media&timestamp=1682673935647",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''FINANCE WEBSITE''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "As a software developer, my main responsibility is to design, code, and test software programs that meet the specific needs of clients or organizations.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div
                    key={`testimonials7-${index}`}
                    className={this.decorateCSS("card-child")}
                  >
                    {section.items.map((item: any, indexCard: number) => (
                      <div
                        key={`testimonials7-card-${indexCard}`}
                        className={this.decorateCSS("card")}
                      >
                        <img width={280} height={180} src={item.value[0].value} />
                        <div className={this.decorateCSS("content")}>
                          <span>{item.value[1].value}</span>
                          <h5>{item.value[2].value}</h5>
                          <span>{item.value[3].value}</span>
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
