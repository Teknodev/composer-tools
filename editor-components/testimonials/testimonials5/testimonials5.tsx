import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials5.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials5Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Testimonials",
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
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
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
                        "Their communication skills were top-notch, and they made sure to keep us informed throughout the entire process.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "Derren Avalon",
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
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''LEARNING PLATFORM''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "An online learning platform can provide access to educational content from anywhere with an internet connection.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "Jaylyn Kaleigh",
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
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
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
                        "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "Candyce Jeannine",
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
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''E-COMMERCE''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "An e-commerce website can provide a platform for businesses to sell their products online.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "Kasey Kim",
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
    return "Testimonials 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials5")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            {this.castToObject<ISection[]>("card-items").map(
              (section: any, index: number) => (
                <div
                  key={`testimonials5-${index}`}
                  className={this.decorateCSS("card-child")}
                >
                  {section.items.map((item: any, indexCard: number) => (
                    <div
                      key={`testimonials5-card-${indexCard}`}
                      className={this.decorateCSS("card")}
                    >
                      <div className={styles["stars"]}>
                        {[...Array(Number(item.value[0].value))].map((item: any, index: number) => (
                          <img key={`star-testimonials5${index}`} 
                          alt=""
                          src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c7aa5fba070002b749808?alt=media&timestamp=1684830888295"/>
                        ))}
                      </div>
                      <span className={this.decorateCSS("item-value1")}>{item.value[1].value}</span>
                      <h5 className={this.decorateCSS("item-value2")}>{item.value[2].value}</h5>
                      <span className={this.decorateCSS("item-value3")}>{item.value[3].value}</span>
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

export default Testimonials5Page;
