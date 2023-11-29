import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";

class Testimonials9Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Testimonials",
    });
    this.addProp({
      type: "array",
      key: "item-list",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild3730-6561-4138-b835-303836373364/09w.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Sarah Lewin",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Project manager in Pixels",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "It was just a gradual development over the years. Last year was All You Need Is Love. This year it's Give Peace a Chance. Remember love. If you want to get peace, you can get it as soon as you like if we all pull together.",
              displayer: "Description",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild6231-6233-4733-b632-343533636664/10m.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Samuel Willson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Creative director in DD agency",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
              displayer: "Description",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Testimonials 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials9")}>
            <h1 className={this.decorateCSS("headered")}>{this.getPropValue("title")}</h1>
            {this.getPropValue("item-list").map((item: any, index: number) => (
              <div
                key={index}
                className={`${this.decorateCSS("item-content")} ${
                  index % 2 === 1
                    ? this.decorateCSS("item-content-reverse")
                    : ""
                }`}
              >
                <div className={this.decorateCSS("left-content")}>
                  <img
                    src={item.value[0].value}
                    alt=""
                    className={this.decorateCSS("image")}
                  />
                </div>
                <div className={this.decorateCSS("right-content")}>
                  <div className={this.decorateCSS("header")}>
                    {item.value[1].value}
                  </div>
                  <div className={this.decorateCSS("subtitle")}>
                    {item.value[2].value}
                  </div>
                  <div className={this.decorateCSS("description")}>
                    {item.value[3].value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials9Page;
