import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./hero-section8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";


type ISliderData = {
  title: string;
  image: string;
  description: string;
  topWriting: string;
};
interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
}

class HeroSection8 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "text_animation",
      displayer: "Text Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "slider_animation",
      displayer: "Slider Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line Enabled",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay Enabled",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Subtitle",
              value: "PRODUCT, VOICE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maybe Speaker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Vin TRIES TO REFLECT D  DIESEL'S VISION AND COMBINES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e9?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Subtitle",
              value: "PEN",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Yaren Collection",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "SYMBOLS THROUGH WHICH EXPRESS THEMSELVES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Subtitle",
              value: "INDUCTION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Huggl Power Pack",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "HUGGL IS AN INDUCTION CHARGING",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://eremia-react.vercel.app/img/project/project3/1.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Subtitle",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Principal Garden",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "WE ARE THRILLED TO SHARE OUR NEW REEL WITH YOU ALL",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://eremia-react.vercel.app/img/project/project4/1.jpg",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "GoArrowLeft"
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "GoArrowRight"
    });

    this.setComponentState("prevIndex", 1);
    this.setComponentState("currentIndex", 1);
    this.setComponentState("arrowDisabled", false);
    this.setComponentState("titleAnimationClass", "");
    this.setComponentState("descriptionAnimationClass", "");
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("centerSlide", 0);
  }

  static getName(): string {
    return "Hero Section 8";
  }
  handleAnimationEnd = ({
    animationState,
    startingAnimation,
  }: IAnimationProps) => {
    this.setComponentState(animationState, startingAnimation);

  };
  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("currentIndex", slideIndex);
  }

  handleArrowClick(slideIndex: number, direction: "next" | "prev") {
    if (!this.getComponentState("arrowDisabled")) {
      this.changeCurrentSlide(slideIndex);
      this.setComponentState("arrowDisabled", true);
      setTimeout(() => {
        this.setComponentState("arrowDisabled", false);
      }, 1500);
    }
  }

  render() {
    let slideCount = this.castToObject<ISliderData[]>("slider").length;
    let sliderEffect = this.getPropValue("slider_animation") ? true : false;
    const allSlidesWithoutImages = this.castToObject<ISliderData[]>("slider").every(
      (slide) => !slide.image
    );
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      fade: sliderEffect,
      swipe: true,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("titleAnimationClass", "animate__fadeIn");
        this.setComponentState("descriptionAnimationClass", "animate__fadeInLeft");
        this.setComponentState("centerSlide", newIndex);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const arrowsExist = (this.getPropValue("slider").length > 1 && (previousArrow || nextArrow))

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} ref={sliderRef} className={`${this.decorateCSS("carousel")} ${allSlidesWithoutImages && this.decorateCSS("no-image")}`}>
          {this.castToObject<ISliderData[]>("slider").map((item: ISliderData, index: number) => (
            <div className={`
              ${this.decorateCSS("slide")}
              ${!this.getPropValue("slider_animation") ? this.decorateCSS("disabled-animate") : ""}
              ${!item.image ? this.decorateCSS("slide-no-image") : ""}
              ${(this.getComponentState("centerSlide") === index + 1) && this.decorateCSS("active")}
            `}>
              <div className={`${this.decorateCSS("image-wrapper")} ${this.getPropValue("overlay") && this.decorateCSS("overlay")}`}>
                {item.image && (
                  <img src={item.image} alt={item.title} className={this.decorateCSS("image")} />
                )}
              </div>
            </div>
          ))}
        </ComposerSlider>
        <Base.Container className={`${this.decorateCSS("max-content")}`}>
          {this.getPropValue("slider").length > 0 && (
            <Base.MaxContent className={`${this.decorateCSS("info-box")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`}>
              {this.castToString(this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("topWriting")) &&
                <div
                  className={`${this.decorateCSS("tag")} ${this.getPropValue("text_animation")
                    ? `animate__animated ${this.getComponentState("titleAnimationClass")}`
                    : ""
                    }`}
                  onAnimationEnd={() => {
                    if (this.getPropValue("text_animation")) {
                      this.handleAnimationEnd({
                        animationState: "titleAnimationClass",
                        startingAnimation: "",
                      });
                    }
                  }}
                >
                  {this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("topWriting")}
                </div>
              }
              <div
                className={`${this.decorateCSS("title")} ${this.getPropValue("text_animation")
                  ? `animate__animated ${this.getComponentState("descriptionAnimationClass")}`
                  : ""
                  }`}
                onAnimationEnd={() => {
                  if (this.getPropValue("text_animation")) {
                    this.handleAnimationEnd({
                      animationState: "descriptionAnimationClass",
                      startingAnimation: "",
                    });
                  }
                }}
              >
                {this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("title")}
              </div>


              {this.getPropValue("line") ? <div className={this.decorateCSS("line")}></div> : <div></div>}
              {this.castToString(this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("description")) &&
                <div
                  className={`${this.decorateCSS("description")} ${this.getPropValue("text_animation")
                    ? `animate__animated ${this.getComponentState("descriptionAnimationClass")}`
                    : ""
                    }`}
                  onAnimationEnd={() => {
                    if (this.getPropValue("text_animation")) {
                      this.handleAnimationEnd({
                        animationState: "descriptionAnimationClass",
                        startingAnimation: "",
                      });
                    }
                  }}
                >
                  {this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("description")}
                </div>
              }
              <div className={this.decorateCSS("pagination")}>
                <div className={this.decorateCSS("current-page")}>{(this.getComponentState("centerSlide") + 1)}</div>
                <div className={this.decorateCSS("slash")}> / </div>
                <div className={this.decorateCSS("total-page")}>{slideCount}</div>
              </div>
              <div className={this.decorateCSS("arrow-wrapper")}>
                <div className={`${this.decorateCSS("arrow-prev-wrapper")} ${this.decorateCSS("prev")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`} onClick={() => {
                  sliderRef.current.slickPrev();
                }}>
                  <div className={this.decorateCSS("arrow-prev")}>
                    <Base.Icon
                      name={this.getPropValue("previousArrow")}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  </div>
                </div>
                <div className={`${this.decorateCSS("arrow-next-wrapper")} ${this.decorateCSS("next")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`} onClick={() => {
                  sliderRef.current.slickNext();
                }}>
                  <div className={this.decorateCSS("arrow-next")}>
                    <Base.Icon
                      name={this.getPropValue("nextArrow")}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  </div>
                </div>
              </div>
            </Base.MaxContent>
          )}
        </Base.Container>
      </Base.Container>
    );
  }
}

export default HeroSection8;

