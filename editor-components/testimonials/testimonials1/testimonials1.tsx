import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value:
        "Read what our satisfied customers have to say about their experience with our products/services in these testimonials.",
      displayer: "Subtitle",
    });
    this.addProp({
      type: "string",
      key: "title",
      value: "Testimonials",
      displayer: "Title",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64492bfbf72de2002caa9740?alt=media&timestamp=1682516999905",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Clover Ruth",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@clover_ruth",
                      displayer: "Name Id",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
                      displayer: "Text",
                    },
                    {
                      type: "image",
                      key: "imageLogo",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64492c1af72de2002caa9769?alt=media&timestamp=1682517029199",
                      displayer: "Logo Image",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64492bfbf72de2002caa973f?alt=media&timestamp=1682516999905",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Candyce Jeannine",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Candyce_Jeannine",
                      displayer: "Name Id",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
                      displayer: "Text",
                    },
                    {
                      type: "image",
                      key: "imageLogo",
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64492bfbf72de2002caa9741?alt=media&timestamp=1682516999905" ,
                      displayer: "Logo Image",
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
    return "Testimonials 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials1")}>
            <section>
              <h3>{this.getPropValue("subtitle")}</h3>
              <h1>{this.getPropValue("title")}</h1>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, indexCard: number) => (
                  <div
                    key={`testimonials1-card-${indexCard}`}
                    className={this.decorateCSS("card-child")}
                  >
                    {section.items.map((item: any, indexItem: number) => (
                      <div
                        key={`testimonials1-item-${indexItem}`}
                        className={this.decorateCSS("card")}
                      >
                        <div className={this.decorateCSS("profile")}>
                          <img width={50} height={50} src={item.value[0].value} />
                          <div className={this.decorateCSS("profile-text")}>
                            <h2>{item.value[1].value}</h2>
                            <p>{item.value[2].value}</p>
                          </div>
                        </div>
                        <h5>{item.value[3].value}</h5>
                        <center>
                          <img width={180} height={90} src={item.value[4].value} />
                        </center>
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

export default Testimonials1Page;
