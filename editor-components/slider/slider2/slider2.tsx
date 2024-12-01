import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider2.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
  text: JSX.Element;
  button: JSX.Element;
  url: string;
  number: JSX.Element;
};


class Slider2 extends BaseSlider {
  windowWidth: number;

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
          displayer: "Items 0",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "Shoes",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294dd?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Commodi necessitatibus perspiciatis quae labore!",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 1",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "biker",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294e0?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Praesentium cumque saepe dignissimos incidunt.",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 2",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "gold man",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294de?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Assumenda voluptatum eveniet possimus modi illo.",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 3",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "baseball",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294df?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Impedit ad animi quae nobis voluptate! Rerum, enim.",
            },
          ],
        },
      ],
    });

    this.setComponentState("active_image", this.castToObject<Card[]>("slider")[0].image)
    this.setComponentState("text", this.castToString(this.castToObject<Card[]>("slider")[0].text))
    this.setComponentState("text_visibility", true)
  }

  getName(): string {
    return "Slider 2";
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      variableWidth: true,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      centerMode: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          },
        },
      ],
    };

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-box")}>
            <div className={this.decorateCSS("overlay")}>
              {this.castToObject<Card[]>("slider").map((slide, index) => {
                const isActive = this.getComponentState("active_image") == slide.image;
                return <img key={index} src={slide.image} className={
                  `
                ${this.decorateCSS("image")} 
                ${isActive && this.decorateCSS("active")}
              `
                } />
              }
              )}
            </div>
          </div>
          <div className={this.decorateCSS("text-box")}>
            <Base.P className={`${this.decorateCSS("text")} ${this.getComponentState("text_visibility") && this.decorateCSS("visible")}`}>{this.getComponentState("text")}</Base.P>
          </div>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}>
            {this.castToObject<Card[]>("slider").map(
              (item: Card, indexSlider: number) => {
                const isActive = this.getComponentState("active_image") == item.image;

                return <div key={indexSlider} className={this.decorateCSS("card")}>
                  <button className={this.decorateCSS("button")} onMouseOver={() => {
                    const isImageValueSame = this.getComponentState("active_image") == item.image;
                    if (isImageValueSame) return;

                    this.setComponentState("active_image", item.image);
                    this.setComponentState("text_visibility", false);
                    setTimeout(() => {
                      this.setComponentState("text_visibility", true);
                      this.setComponentState("text", this.castToString(item.text));
                    }, 200)
                  }}>
                    {this.castToString(item.number) &&
                      <p className={this.decorateCSS("number")}>{item.number}</p>}
                    {this.castToString(item.button) &&
                      <span className={`${this.decorateCSS("text")} ${isActive && this.decorateCSS("active")}`}>{item.button}</span>}
                  </button>

                </div>
              }
            )}
          </ComposerSlider>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider2;
