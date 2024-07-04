import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";

interface Slider4Props {
  image: string;
  buttonText: string;
  buttonLink: string;
}

class Slider4 extends BaseSlider {
  sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);
    this.sliderRef = React.createRef();

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1c?alt=media&timestamp=1719584962575",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1d?alt=media&timestamp=1719584962575",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1d?alt=media&timestamp=1719584962575",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1f?alt=media&timestamp=1719584962575",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a20?alt=media&timestamp=1719584962575",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b2b5057bdf002c2a2af4?alt=media&timestamp=1719584962575",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Slider 4";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider
              {...settings}
              ref={this.sliderRef}
              className={this.decorateCSS("carousel")}
            >
              {this.castToObject<Slider4Props[]>("slider").map(
                (item: Slider4Props, index: number) => (
                  <div className={this.decorateCSS("card")} key={`slider4-${index}`}>
                    <img
                      alt=""
                      src={item.image}
                      className={this.decorateCSS("img")}
                    />
                  </div>
                )
              )}
            </ComposerSlider>
            <button
              className={this.decorateCSS("prev-button")}
              onClick={() => this.sliderRef.current.slickPrev()}
            >Prev</button>
            <button
              className={this.decorateCSS("next-button")}
              onClick={() => this.sliderRef.current.slickNext()}
            >Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider4;
