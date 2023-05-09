import Slider from "react-slick";
import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class Slider4 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
      ],
    });
  }
  getName(): string {
    return "Slider 3";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("slider-parent")}
            
          >
            <Slider {...settings} className={this.decorateCSS("carousel")}>
              {this.getPropValue("slider").map((item: any, index: number) => (
                <img
                  src={item.value}
                  className={this.decorateCSS("img")}
                  
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider4;
