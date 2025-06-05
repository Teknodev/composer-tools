import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider5.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
};

class Slider5 extends BaseSlider {
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1800655f8002caf431d?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1f50655f8002caf4427?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1ca0655f8002caf43fb?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e0fb0655f8002caf4243?alt=media",
            },
          ],
        },
      ],
    });
  }
  static getName(): string {
    return "Slider 5";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("carousel")}>
            <ComposerSlider {...settings}>
              {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                <img src={item.image} key={index} alt="" />
              ))}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider5;
