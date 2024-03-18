import Slider from "react-slick";
import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider6.module.scss";

type Card = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image_subtitle: string;
  image_title: string;
  image_description: string;
  button: string;
  url: string;
};
class Slider6 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lasts post",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Latest And Greatest Post",
    });

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value:
                "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "LOAD MORE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images5.alphacoders.com/133/1338186.png",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Dsn Grid - March , 17th 2020",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "TRAVEL",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "The Day I Lost My Child in Charles de Gaulle Airport",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value:
                "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "LOAD MORE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a122?alt=media&timestamp=1685526270154",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Dsn Grid - March , 17th 2020",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "HEALTH",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Relationships Aren’t Easy, But They’re Worth It",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value:
                "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "LOAD MORE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a123?alt=media&timestamp=1685526270154",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Dsn Grid - March , 17th 2020",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value:
                "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "LOAD MORE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a121?alt=media&timestamp=1685526270154",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Dsn Grid - March , 17th 2020",
            },
          ],
        },
      ],
    });

    this.setComponentState(
      "prevSlide",
      this.castToObject<Card[]>("header").length - 1
    );
    this.setComponentState("activeSlide", 0);
    this.setComponentState("nextSlide", 1);
  }
  getName(): string {
    return "Slider 6";
  }
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState(
          "prevSlide",
          next - 1 < 0
            ? this.castToObject<Card[]>("header").length - 1
            : next - 1
        );
        this.setComponentState("activeSlide", next);
        this.setComponentState(
          "nextSlide",
          next + 1 > this.castToObject<Card[]>("header").length - 1
            ? 0
            : next + 1
        );
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <h2 className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </h2>
          <h4 className={this.decorateCSS("subtitle")}>
            {this.getPropValue("subtitle")}
          </h4>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => (
                    <div
                      className={
                        this.decorateCSS("slider-inner-div") +
                        " " +
                        (this.getComponentState("prevSlide") == index
                          ? this.decorateCSS("prevSlide")
                          : "") +
                        " " +
                        (this.getComponentState("nextSlide") == index
                          ? this.decorateCSS("nextSlide")
                          : "")
                      }
                      key={`sld-8-${index}`}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        <h5 className={this.decorateCSS("descriptions")}>
                          {item.description}
                        </h5>
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.image}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <h1 className={this.decorateCSS("first-header")}>
                            {item.image_subtitle}
                          </h1>
                          <h3 className={this.decorateCSS("item-title")}>
                            {item.image_title}
                          </h3>
                          <p className={this.decorateCSS("item-description")}>
                            {item.image_description}
                          </p>
                          <div>
                            <span className={this.decorateCSS("submit-button")}>
                              {item.button}
                            </span>
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
      </div>
    );
  }
}

export default Slider6;