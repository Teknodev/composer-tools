import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-D7nSqgT-_GE-unsplash.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/michael-demarco-oB0r-2a1QfE-unsplash-scaled.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-xlGKy9UokjQ-unsplash-1.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/messeplatz-cloudy-sky-basel-switzerland.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/metal-geometric-modern-building-scaled.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/vertical-shot-high-rise-exotic-skyscraper-blue-sky.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/joel-filipe-PkE6yQwE-6Y-unsplash.jpg",
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

  static getName(): string {
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

      beforeChange: (_: number, next: number) => {
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
