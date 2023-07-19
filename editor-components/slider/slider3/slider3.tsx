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
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg",
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
              <p>{this.getPropValue("content")}</p>
            </div>
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {this.getPropValue("header")[0].value.map(
                  (item: any, index: number) => (
                    <img
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
