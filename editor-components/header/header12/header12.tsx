import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./header12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";



type SliderItem = {
  text: React.JSX.Element;
  image: string;
};

class Header12 extends BaseHeader {
  leftSliderRef: any;
  rightSliderRef: any;
  screenWidth: number;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "leftSliderItems",
      displayer: "Left Slider",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625904?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stuff",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625905?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Breakfast",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fe?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "The Notebook",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625901?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Little Pumpkin",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625903?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Evening",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "rightSliderItems",
      displayer: "Right Slider",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625900?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Pumpkin Pie",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258ff?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Coffee Time",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fd?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stories",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625902?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Still Life",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625906?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Boooo!",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "leftSliderIcon",
      displayer: "Left Slider Arrow Icon",
      value: "HiOutlineChevronDown",
    });

    this.addProp({
      type: "icon",
      key: "rightSliderIcon",
      displayer: "Right Slider Arrow Icon",
      value: "HiOutlineChevronUp",
    });

    this.leftSliderRef = React.createRef();
    this.rightSliderRef = React.createRef();

  }

  static getName(): string {
    return "Header 12";
  }

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
      swipe: true,
      switeToSlide: true,
    };

    const decorateIcon = { className: this.decorateCSS("Icon") };
    const leftSliderItems = this.castToObject<SliderItem[]>("leftSliderItems");
    const rightSliderItems =
      this.castToObject<SliderItem[]>("rightSliderItems");

    const showOverlay = this.getPropValue("overlay");

    const leftSliderSettings = {
      ...settings,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (rightSliderItems.length > 0) {
          this.rightSliderRef.slickPrev();
        }
      },
      prevArrow: (
        <LeftSliderArrow
          givenClass={this.decorateCSS("left-slider-button")}
          customFunction={() => {
            if (rightSliderItems.length > 0) {
              this.rightSliderRef.slickNext();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("leftSliderIcon")}
        />
      ),
    };

    const rightSliderSettings = {
      ...settings,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (leftSliderItems.length > 0) {
          this.leftSliderRef.slickPrev();
        }
      },
      nextArrow: (
        <RightSliderArrow
          givenClass={this.decorateCSS("right-slider-button")}
          customFunction={() => {
            if (leftSliderItems.length > 0) {
              this.leftSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("rightSliderIcon")}
        />
      ),
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-container")}>

            {leftSliderItems.length > 0 && (
              <ComposerSlider
                className={`${this.decorateCSS("left-slider")}
              ${
                rightSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.leftSliderRef = slider)}
                {...leftSliderSettings}
              >
                {leftSliderItems.map((item: SliderItem, index: number) => (
                  <div key={index} className={this.decorateCSS("slider-item")}>
                    {item.image && (
                      <div
                        className={this.decorateCSS("image-overlay-container")}
                      >
                        <img
                          className={this.decorateCSS("slider-item-image")}
                          src={item.image}
                          alt={this.getPropValue("leftSliderIcon")}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <div
                      className={`${this.decorateCSS("slider-item-text")} ${
                        !item.image && this.decorateCSS("no-image-text")
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </ComposerSlider>
            )}

            {rightSliderItems.length > 0 && (
              <ComposerSlider
                className={`${this.decorateCSS("right-slider")}
              ${
                leftSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.rightSliderRef = slider)}
                {...rightSliderSettings}
              >
                {rightSliderItems.map((item: SliderItem, index: number) => (
                  <div key={index} className={this.decorateCSS("slider-item")}>
                    {item.image && (
                      <div
                        className={this.decorateCSS("image-overlay-container")}
                      >
                        <img
                          className={this.decorateCSS("slider-item-image")}
                          src={item.image}
                          alt={this.getPropValue("rightSliderIcon")}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <div
                      className={`${this.decorateCSS("slider-item-text")} ${
                        !item.image && this.decorateCSS("no-image-text")
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </ComposerSlider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function LeftSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Icon propsIcon={props.decorateIcon} name={icon} />
    </div>
  );
}

function RightSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Icon propsIcon={props.decorateIcon} name={icon} />
    </div>
  );
}

export default Header12;
