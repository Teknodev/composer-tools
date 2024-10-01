import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./header12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type SliderItem = {
  text: JSX.Element;
  image: string;
}

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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625904?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stuff",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625905?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Breakfast",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fe?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "The Notebook",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625901?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Little Pumpkin",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625903?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Evening",
            },
          ]
        },
      ]
    })

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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625900?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Pumpkin Pie",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258ff?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Coffee Time",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fd?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stories",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625902?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Still Life",
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625906?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Boooo!",
            },
          ]
        },
      ]
    });

    this.addProp({
      type: "icon",
      key: "leftSliderIcon",
      displayer: "Left Slider Arrow Icon",
      value: "HiOutlineChevronDown"
    });

    this.addProp({
      type: "icon",
      key: "rightSliderIcon",
      displayer: "Right Slider Arrow Icon",
      value: "HiOutlineChevronUp"
    });

    this.leftSliderRef = React.createRef();
    this.rightSliderRef = React.createRef();

    /**
     * If screen size under 1000px, convert slider to horizontal.
     */
    this.screenWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    });
  }

  getName(): string {
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
      vertical: this.screenWidth >= 1000 ? true : false,
      verticalSwiping: true,
    };

    const decorateIcon = { className: this.decorateCSS("Icon") };
    const leftSliderSettings = {
      ...settings,
      prevArrow: <LeftSliderArrow
        givenClass={this.decorateCSS("left-slider-button")}
        customFunction={() => {
          this.rightSliderRef.slickNext();
        }}
        decorateIcon={decorateIcon}
        icon={this.getPropValue("leftSliderIcon")}
      />
    };

    const rightSliderSettings = {
      ...settings,
      nextArrow: <RightSliderArrow
        givenClass={this.decorateCSS("right-slider-button")}
        customFunction={() => {
          this.leftSliderRef.slickPrev();
        }}
        decorateIcon={decorateIcon}
        icon={this.getPropValue("rightSliderIcon")}
      />
    };

    const leftSliderItems = this.castToObject<SliderItem[]>("leftSliderItems");
    const rightSliderItems = this.castToObject<SliderItem[]>("rightSliderItems");

    console.log("leftSliderItems", leftSliderItems.length);
    const showOverlay = this.getPropValue("overlay");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-container")}>
            {leftSliderItems.length > 0 &&
              (<ComposerSlider
                className={`${this.decorateCSS("left-slider")}
              ${rightSliderItems.length < 1 && this.decorateCSS("no-slider-items")}`}
                ref={(slider: any) => this.leftSliderRef = slider}
                {...leftSliderSettings}
              >
                {leftSliderItems.map((item: SliderItem, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("slider-item")}
                  >
                    {item.image && (
                      <div className={this.decorateCSS("image-overlay-container")}>
                        <img
                          className={this.decorateCSS("slider-item-image")}
                          src={item.image}
                          alt={this.castToString(item.text)}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <div className={`${item.image ? this.decorateCSS("slider-item-text") : this.decorateCSS("no-image-text")}`}>{item.text}</div>

                  </div>
                ))}
              </ComposerSlider>)}

            {rightSliderItems.length > 0 &&
              (<ComposerSlider
                className={`${this.decorateCSS("right-slider")}
              ${leftSliderItems.length < 1 && this.decorateCSS("no-slider-items")}`}
                ref={(slider: any) => this.rightSliderRef = slider}
                {...rightSliderSettings}
              >
                {rightSliderItems.map((item: SliderItem, index: number) => (
                  <div key={index} className={this.decorateCSS("slider-item")}>
                    {item.image && (
                      <div className={this.decorateCSS("image-overlay-container")}>
                        <img
                          className={this.decorateCSS("slider-item-image")}
                          src={item.image}
                          alt={this.castToString(item.text)}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <div className={`${item.image ? this.decorateCSS("slider-item-text") : this.decorateCSS("no-image-text")}`}>{item.text}</div>
                  </div>

                ))}

              </ComposerSlider>)}
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
      <ComposerIcon
        propsIcon={props.decorateIcon}
        name={icon}
      />
    </div>
  )
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
      <ComposerIcon
        propsIcon={props.decorateIcon}
        name={icon}
      />
    </div>
  )
}

export default Header12;
