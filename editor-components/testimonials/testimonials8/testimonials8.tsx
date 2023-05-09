import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials8.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials8Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      displayer: "Subtitle",
    });
    this.addProp({
      type: "string",
      key: "title",
      value: "Lorem ipsum dolor sit",
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
                      key: "text",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Text",
                    },
                    {
                      type: "image",
                      key: "imageLogo",
                      value:
                        "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
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
                      key: "text",
                      value: PlaceholderFiller.shortText(),
                      displayer: "Text",
                    },
                    {
                      type: "image",
                      key: "imageLogo",
                      value:
                        "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
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
    return "Testimonials 8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials8")}>
            <section>
              <h3>{this.getPropValue("subtitle")}</h3>
              <h1>{this.getPropValue("title")}</h1>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index}>
                        <div className={this.decorateCSS("card")}>
                          <div className={this.decorateCSS("profile")}>
                            <img
                              width={50}
                              height={50}
                              src={item.value[0].value}
                            />
                            <div className={this.decorateCSS("profile-text")}>
                              <h2>{item.value[1].value}</h2>
                              <p>{item.value[2].value}</p>
                            </div>
                          </div>
                          <h5>{item.value[3].value}</h5>
                          <center>
                            <img
                              key={index}
                              width={180}
                              height={90}
                              src={item.value[4].value}
                            />
                          </center>
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

export default Testimonials8Page;
