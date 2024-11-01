import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface CardItem {
  description: JSX.Element,
  image: string,
  name: JSX.Element,
  position: JSX.Element
}

class Testimonials12Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TESTIMONIAL",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What people are saying!",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "ImQuotesLeft",
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
              key: "description",
              displayer: "Card Description",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Billu Gol",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
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
              key: "description",
              displayer: "Card Description",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Ani Jhon",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
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
              key: "description",
              displayer: "Card Description",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Billu Gol",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
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
              key: "description",
              displayer: "Card Description",
              value:
                "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Ani Jhon",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
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
    const cards = this.castToObject<CardItem[]>("cards");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const settings = {
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 4000,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials12")}>
            {(this.castToString(title) || this.castToString(subtitle)) && (
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                )}
                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
                )}
              </Base.VerticalContent>
            )}
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider-style")}
            >
              {cards.map((card: any, index: number) => {
                const shouldRenderCard =
                  this.castToString(card.description) ||
                  (card.image ||
                    this.castToString(card.name) ||
                    this.castToString(card.position));

                if (!shouldRenderCard) return null;

                return (
                  <div className={this.decorateCSS("card")}>
                    {this.getPropValue("icon") && (
                      <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("span-image") }} />
                    )}
                    {this.castToString(card.description) && (
                      <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>
                    )}
                    {(card.image || this.castToString(card.name) || this.castToString(card.position)) && (
                      <div className={this.decorateCSS("below-content")}>
                        {card.image && (
                          <img
                            src={card.image}
                            alt={card.image}
                            className={this.decorateCSS("card-image")}
                          />
                        )}
                        {(this.castToString(card.name) || this.castToString(card.position)) && (
                          <Base.VerticalContent className={this.decorateCSS("below-right-content")}>
                            {this.castToString(card.name) && (
                              <div className={this.decorateCSS("below-title")}>
                                {card.name}
                              </div>
                            )}
                            {this.castToString(card.position) && (
                              <span className={this.decorateCSS("below-subtitle")}>
                                {card.position}
                              </span>
                            )}
                          </Base.VerticalContent>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials12Page;
