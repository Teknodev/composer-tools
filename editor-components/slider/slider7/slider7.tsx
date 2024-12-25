import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
};

class Slider7 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c39710655f8002ca6e526?alt=media&timestamp=1734097283246",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c39a80655f8002ca6e56f?alt=media&timestamp=1734097340969",
            },

          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c39e50655f8002ca6e5c5?alt=media&timestamp=1734097400229",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c3a120655f8002ca6e5ef?alt=media&timestamp=1734097445130",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c3a3a0655f8002ca6e60f?alt=media&timestamp=1734097485153",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c3a640655f8002ca6e656?alt=media&timestamp=1734097527024",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c3a8f0655f8002ca6e6a1?alt=media&timestamp=1734097570547",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c3aba0655f8002ca6e6d5?alt=media&timestamp=1734097613725",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "BsArrowLeft"
    });

    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "BsArrowRight"
    });

    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());

  }

  getName(): string {
    return "Slider 7";
  }

  render() {

    let items = this.castToObject<Card[]>("slider").filter(
      (item: Card) => item.image
    );
    const isCardExist = items.length > 0;
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const sliderRef = this.getComponentState("slider-ref");
    let slidesToShowNumber = 1;

    if (items.length === 2) {
      items = [...items, ...items];
      slidesToShowNumber = 3;
    }

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 3000,
      slidesToShow: slidesToShowNumber,
      slidesToScroll: 1,
      centerPadding: "0px",
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            dots: true,
            arrows: false,
            variableWidth: false,
            slidesToShow: 1,
          }
        }
      ],

      beforeChange: (current: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
    };


    return (
      <Base.Container isFull={true} className={`${this.decorateCSS("container")}
      ${items.length === 1 && this.decorateCSS("one-card")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          {previousArrow &&
            <div className={this.decorateCSS("prevArrow")}>
              <ComposerIcon
                name={this.getPropValue("previousArrow")}
                propsIcon={{
                  onClick: () => {
                    sliderRef.current.slickPrev();
                  },
                }}
              />
            </div>}

          {nextArrow &&
            <div className={this.decorateCSS("nextArrow")}>
              <ComposerIcon
                name={this.getPropValue("nextArrow")}
                propsIcon={{
                  onClick: () => {
                    sliderRef.current.slickNext();
                  },
                }}
              />
            </div>}

          {isCardExist && (
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
              ref={sliderRef}
            >
              {items.map((item: Card, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("card")} ${this.getComponentState("centerSlide") === index && this.decorateCSS("centerSlide")
                    }`}
                >
                  <div className={this.decorateCSS("imgContainer")}>
                    <img
                      src={item.image}
                      className={this.decorateCSS("img")}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </ComposerSlider>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider7;
