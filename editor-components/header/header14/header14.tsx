import * as React from "react";
import styles from "./header14.module.scss";
import { BaseHeader } from "../../EditorComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Slide = {
  image: string;
  title: string;
  description: string;
  firstButton: {
    buttontext: string;
  };
  secondButton: {
    buttontext: string;
  };
};

class HeaderComponent14 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slides",
      key: "slides",
      value: [
        {
          type: "object",
          displayer: "First Slide",
          key: "first-slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Charge Your Phone Safely!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619109bd2970002c625a57?alt=media&timestamp=1719483639150",
            },

            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Second Slide",
          key: "second-slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "For Everything and Everyone",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619130bd2970002c625a77?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "First Slide",
          key: "third-slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Featured Accessories",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619109bd2970002c625a57?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttontext",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "buttonurl",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-14";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("wrapper")}>
            <Slider {...settings} className={this.decorateCSS("carousel")}>
              {this.castToObject<Slide[]>("slides").map(
                (item: Slide, index: number) => (
                  <div
                    className={this.decorateCSS("slider-inner-div")}
                    key={`sld-8-${index}`}
                  >
                    <div className={this.decorateCSS("item")}>
                      <div className={this.decorateCSS("background-image")}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={this.decorateCSS("content")}>
                        <h1 className={this.decorateCSS("title")}>
                          {item.title}
                        </h1>
                        <h3 className={this.decorateCSS("description")}>
                          {item.description}
                        </h3>
                        <div className={this.decorateCSS("buttons")}>
                          <button className={this.decorateCSS("firstButton")}>
                            {item.firstButton.buttontext}
                          </button>
                          <button className={this.decorateCSS("secondButton")}>
                            {item.secondButton.buttontext}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent14;
