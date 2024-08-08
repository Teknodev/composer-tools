
import * as React from "react";
import { BaseSlider} from "../../EditorComponent";
import styles from "./slider5.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c2d568c3c2002cd30043?alt=media&timestamp=1719584962573",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c2d568c3c2002cd30042?alt=media&timestamp=1719584962573",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c2d568c3c2002cd30041?alt=media&timestamp=1719584962573",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c2d568c3c2002cd30040?alt=media&timestamp=1719584962572",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c2d568c3c2002cd3003f?alt=media&timestamp=1719584962572",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
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

          <ComposerSlider {...settings} >
            {this.castToObject<Card[]>("slider").map(
              (item: Card, index: number) => (
                <img src={item.image} key={index} alt=""/>
              )
            )}
          </ComposerSlider>
          </div>

        </div>
      </div>
    );
  }
}

export default Slider5;
