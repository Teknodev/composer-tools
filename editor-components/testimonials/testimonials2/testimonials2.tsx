import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";

type Item = {
  image: string;
  name: string;
  nameId: string;
  description: string;
  time: string;
};

class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Testimonials",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644930bdf72de2002caa9944?alt=media&timestamp=1682518219540",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Erle Philomena",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "@Erle_Philomena",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
              displayer: "Description",
            },
            {
              type: "string",
              key: "time",
              value: "15 days ago",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449315ff72de2002caa998e?alt=media&timestamp=1682518379680",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Shonda Kadence",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "@Shonda_Kadence",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "Grunge design is all about creating a rough, raw, and edgy look. It can be a great way to add personality and attitude to a design.",
              displayer: "Description",
            },
            {
              type: "string",
              key: "time",
              value: "5 month ago",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449315ff72de2002caa998f?alt=media&timestamp=1682518379680",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Laurie Darwin",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "@Laurie_Darwin",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "Responsive design is a must for modern websites and interfaces. It ensures that content is displayed optimally on different screen sizes and devices.",
              displayer: "Description",
            },
            {
              type: "string",
              key: "time",
              value: "2 years ago",
              displayer: "time",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
          <div className={this.decorateCSS("testimonials2")}>
              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div style={{
                          width: 100 / this.getPropValue("itemCount") + "%",
                          display: "flex",
                          justifyContent:"center",
                          flexWrap: "wrap",
                          minWidth: "250px",
                        }}>
                  <div key={index} className={this.decorateCSS("card")} >
                    <div className={this.decorateCSS("profile")}>
                      <img width={50} height={50} src={item.image} alt=""/>
                      <div className={this.decorateCSS("profile-text")}>
                        <h2 className={this.decorateCSS("item-name")}>{item.name}</h2>
                        <p className={this.decorateCSS("item-name-id")}>{item.nameId}</p>
                      </div>
                    </div>
                    <span className={this.decorateCSS("item-description")}>{item.description}</span>
                    <h5 className={this.decorateCSS("item-time")}>{item.time}</h5>
                  </div>
            </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials2Page;
