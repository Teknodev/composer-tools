import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

class Testimonials12Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TESTIMONIAL",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "What people are saying!",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card-text",
              displayer: "Card Text",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "card-photo",
              displayer: "Card Photo",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "card-title",
              displayer: "Below Title",
              value: "Billu Gol",
            },
            {
              type: "string",
              key: "card-subtitle",
              displayer: "Below Subtitle",
              value: "CEO, Agrok Inc",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card-text",
              displayer: "Card Text",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "card-photo",
              displayer: "Card Photo",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "card-title",
              displayer: "Below Title",
              value: "Ani Jhon",
            },
            {
              type: "string",
              key: "card-subtitle",
              displayer: "Below Subtitle",
              value: "CEO, Agrok Inc",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card-text",
              displayer: "Card Text",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "card-photo",
              displayer: "Card Photo",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "card-title",
              displayer: "Below Title",
              value: "Billu Gol",
            },
            {
              type: "string",
              key: "card-subtitle",
              displayer: "Below Subtitle",
              value: "CEO, Agrok Inc",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card-text",
              displayer: "Card Text",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "card-photo",
              displayer: "Card Photo",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "card-title",
              displayer: "Below Title",
              value: "Ani Jhon",
            },
            {
              type: "string",
              key: "card-subtitle",
              displayer: "Below Subtitle",
              value: "CEO, Agrok Inc",
            },
          ],
        },
      ],
    });


  }

  getName(): string {
    return "Testimonials 12";
  }

  render() {
    const settings = {
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: window.innerWidth < 800 ? 1 : 2,
      // slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials12")}>
            <div className={this.decorateCSS("top-content")}>
              <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
              <h2 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h2>
            </div>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider-style")}
            >
              {this.getPropValue("cards").map((card: any, index: number) => (
                <div className={this.decorateCSS("card")}>
                  <span className={this.decorateCSS("span-image")}>
                    <img
                      src="https://rstheme.com/products/html/swipy/assets/images/testimonial/style1/quote.png"
                      alt=""
                      className={this.decorateCSS("image")}
                    />
                  </span>
                  <p className={this.decorateCSS("card-value")}>{card.value[0].value}</p>
                  <div className={this.decorateCSS("below-content")}>
                    <img
                      src={card.value[1].value}
                      alt=""
                      className={this.decorateCSS("card-image")}
                    />
                    <div className={this.decorateCSS("below-right-content")}>
                      <div className={this.decorateCSS("below-title")}>
                        {card.value[2].value}
                      </div>
                      <span className={this.decorateCSS("below-subtitle")}>
                        {card.value[3].value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials12Page;
