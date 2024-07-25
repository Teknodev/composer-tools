import Slider from "react-slick";
import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./content16.module.scss";

type CardType = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  image_subtitle?: string;
  image_title?: string;
  image_description?: string;
  url?: string;
};

class Content16 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Latest News",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our team is comprised of experienced architects, designers, and project managers who share a common goal of creating exceptional spaces.",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 18, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Smart Cities of Tomorrow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66914f6c9e8fb8002c917c0c?alt=media",
            },
            {
              type: "string",
              key: "url",
              displayer: "URL",
              value: "https://example.com/smart-cities",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 18, 2023  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Architectural Marvels",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669149d39e8fb8002c917b22?alt=media",
            },
            {
              type: "string",
              key: "url",
              displayer: "URL",
              value: "https://example.com/architectural-marvels",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 15, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Exploring the Evolution of Architecture",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6691500b9e8fb8002c917c19?alt=media",
            },
            {
              type: "string",
              key: "url",
              displayer: "URL",
              value: "https://example.com/evolution-architecture",
            },
          ],
        },
      ],
    });

    this.setComponentState(
      "prevSlide",
      this.castToObject<CardType[]>("items").length - 1
    );
    this.setComponentState("activeSlide", 0);
    this.setComponentState("nextSlide", 1);
  }

  getName(): string {
    return "Content 16";
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 885,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (current: number, next: number) => {
        this.setComponentState(
          "prevSlide",
          next - 1 < 0
            ? this.castToObject<CardType[]>("items").length - 1
            : next - 1
        );
        this.setComponentState("activeSlide", next);
        this.setComponentState(
          "nextSlide",
          next + 1 > this.castToObject<CardType[]>("items").length - 1
            ? 0
            : next + 1
        );
      },
    };

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const items = this.castToObject<CardType[]>("items").filter(
      (item: CardType) => item.image || item.image_title || item.image_subtitle || item.url
    );

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(title || subtitle) && (
            <header>
              {title && (
                <h1 className={this.decorateCSS("title")}>
                  {title}
                </h1>
              )}
              {title && subtitle && (
                <hr className={this.decorateCSS("faint-line")} />
              )}
              {subtitle && (
                <h2 className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </h2>
              )}
            </header>
          )}
          <main className={this.decorateCSS("wrapper")}>
            {items.length > 0 && (
              <div className={this.decorateCSS("slider-parent")}>
                <Slider {...settings} className={this.decorateCSS("carousel")}>
                  {items.map((item: CardType, index: number) => (
                    <article
                      className={`${this.decorateCSS("slider-inner-div")} ${this.getComponentState("prevSlide") === index ? this.decorateCSS("prevSlide") : ""} ${this.getComponentState("nextSlide") === index ? this.decorateCSS("nextSlide") : ""}`}
                      key={`sld-16-${index}`}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        {item.image && (
                          <div className={this.decorateCSS("img-div")}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <img
                                alt={item.image_title || item.image_subtitle}
                                src={item.image}
                                className={this.decorateCSS("img")}
                              />
                            </a>
                          </div>
                        )}
                        {(item.image_subtitle || item.image_title) && (
                          <div className={this.decorateCSS("item-page")}>
                            {item.image_subtitle && (
                              <h3 className={this.decorateCSS("first-item")}>
                                {item.image_subtitle}
                              </h3>
                            )}
                            {item.image_title && (
                              <h2 className={this.decorateCSS("item-title")}>
                                {item.image_title}
                              </h2>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </Slider>
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default Content16;
