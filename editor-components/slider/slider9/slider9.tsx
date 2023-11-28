import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider9.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";

class Slider9 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Studio Headphones",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "When we first checked out our new headphones, we noticed the box said “improved bass”. We had to wonder if this was marketing jargon or the real thing? But it only took a moment to realize that bass was not kidding.",
    });
    this.addProp({
      type: "string",
      key: "under-title-text",
      displayer: "Under Title Text",
      value: "SKU: 700.954.29",
    });
    this.addProp({
      type: "string",
      key: "pricing",
      displayer: "Text",
      value: "$100",
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://static.tildacdn.com/tild6137-3163-4732-a330-373834646165/HDTwo_AngleUp_OnGray.jpeg",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://static.tildacdn.com/tild3066-6430-4566-a331-643739626436/HDTwo_Rotated_OnGray.jpeg",
        },
      ],
    });
  }
  getName(): string {
    return "Slider 9";
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {this.getPropValue("slider").map(
                (item: any, indexSlider: number) => (
                  <img
                    src={item.value}
                    alt=""
                    className={this.decorateCSS("img")}
                    key={indexSlider}
                  />
                )
              )}
            </ComposerSlider>
            <div className={this.decorateCSS("right-content")}>
              <h3 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h3>
              <p className={this.decorateCSS("undertitle")}>
                {this.getPropValue("under-title-text")}
              </p>
              <h5 className={this.decorateCSS("pricetag")}>
                {this.getPropValue("pricing")}
              </h5>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider9;
