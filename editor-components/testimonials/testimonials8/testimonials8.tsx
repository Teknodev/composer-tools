import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Item = {
  image: string;
  name: string;
  nameId: string;
  description: string;
  time: string;
};

class Testimonials8Page extends Testimonials {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388a?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388b?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661740cbd2970002c623895?alt=media&timestamp=1719483639150",
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
    return "Testimonials 8";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (

      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials2")}>
            <div>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <ComposerSlider {...settings}>
              {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => (
                <div key={`tsm-8-${index}`}>
                  <section>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("profile")}>
                        <img width={50} height={50} src={item.image} alt={item.name} />
                        <div className={this.decorateCSS("profile-text")}>
                          <h2 className={this.decorateCSS("item-name")}>{item.name}</h2>
                          <p className={this.decorateCSS("item-name-id")}>{item.nameId}</p>
                        </div>
                      </div>
                      <span className={this.decorateCSS("item-description")}>{item.description}</span>
                      <h5 className={this.decorateCSS("item-time")}>{item.time}</h5>
                    </div>
                  </section>
                </div>
              ))}
            </ComposerSlider>
          </div>
        </div>


      </div>

    );
  }
}

export default Testimonials8Page;
