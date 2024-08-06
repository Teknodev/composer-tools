import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider3.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

class Slider3 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Effective tools are critical to the success of a small business.",
    });
    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value:
        "These tools can range from simple software applications to complex systems that streamline operations and increase productivity.",
    });
    this.addProp({
      type: "object",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "array",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629525?alt=media&timestamp=1719584962578",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629526?alt=media&timestamp=1719584962578",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629527?alt=media&timestamp=1719584962578",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column",
      value: true,
    });
  }
  getName(): string {
    return "Slider 3";
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
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
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}
          >
            <div className={this.decorateCSS("header-page")}>
              <h1 className={this.decorateCSS("first-header")}>
                {this.getPropValue("title")}
              </h1>
              <p className={this.decorateCSS("content")}>{this.getPropValue("content")}</p>
            </div>
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {this.getPropValue("header")[0].value.map(
                  (item: any, index: number) => (
                    <img
                      alt=""
                      src={item.value}
                      className={this.decorateCSS("img")}
                      key={index}
                    />
                  )
                )}
              </ComposerSlider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider3;
