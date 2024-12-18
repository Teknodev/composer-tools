import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

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

function SampleNextArrow(props: any) {
  const { className, style, onClick, customOnClick, disabled } = props;
  return (
    <div
      className={`${className} ${styles["arrow-next"]}`}
      onClick={() => {
        if (!disabled) {
          onClick();
          customOnClick();
        }
      }}
    ></div>
  );
}
function SampleNextArrowNoImage(props: any) {
  const { className, style, onClick, customOnClick, disabled } = props;
  return (
    <div
      className={`${className} ${styles["arrow-next-no-image"]}`}
      onClick={() => {
        if (!disabled) {
          onClick();
          customOnClick();
        }
      }}
    ></div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick, customOnClick, disabled } = props;
  return (
    <div
      className={`${className} ${styles["arrow-prev"]}`}
      onClick={() => {
        if (!disabled) {
          onClick();
          customOnClick();
        }
      }}
    ></div>
  );
}
function SamplePrevArrowNoImage(props: any) {
  const { className, style, onClick, customOnClick, disabled } = props;
  return (
    <div
      className={`${className} ${styles["arrow-prev-no-image"]}`}
      onClick={() => {
        if (!disabled) {
          onClick();
          customOnClick();
        }
      }}
    ></div>
  );
}
class Header8 extends BaseHeader {
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
              displayer: "Top Writing",
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
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
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
              displayer: "Top Writing",
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
              displayer: "Top Writing",
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
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
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
              displayer: "Top Writing",
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
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    });

    this.setComponentState("prevIndex", 1);
    this.setComponentState("currentIndex", 1);
    this.setComponentState("arrowDisabled", false);
    this.setComponentState("titleAnimationClass", "");
    this.setComponentState("descriptionAnimationClass", "");

  }

  getName(): string {
    return "Header 8";
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
    let currentSlide = this.getComponentState("currentIndex");
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
      },

      prevArrow: this.getPropValue("slider")[currentSlide - 1].getPropValue("image") ? (
        <SamplePrevArrow
          disabled={this.getComponentState("arrowDisabled")}
          customOnClick={() => {
            const newIndex = currentSlide === 1 ? slideCount : currentSlide - 1;
            this.handleArrowClick(newIndex, "prev");
          }}
        />
      ) : (
        <SamplePrevArrowNoImage
          disabled={this.getComponentState("arrowDisabled")}
          customOnClick={() => {
            const newIndex = currentSlide === 1 ? slideCount : currentSlide - 1;
            this.handleArrowClick(newIndex, "prev");
          }}
        />
      ),
      nextArrow: this.getPropValue("slider")[currentSlide - 1].getPropValue("image") ? (
        <SampleNextArrow
          disabled={this.getComponentState("arrowDisabled")}
          customOnClick={() => {
            const newIndex = currentSlide === slideCount ? 1 : currentSlide + 1;
            this.handleArrowClick(newIndex, "next");
            console.log("newIndex", newIndex);
          }}
        />
      ) : (
        <SampleNextArrowNoImage
          disabled={this.getComponentState("arrowDisabled")}
          customOnClick={() => {
            const newIndex = currentSlide === slideCount ? 1 : currentSlide + 1;
            this.handleArrowClick(newIndex, "next");
            console.log("newIndex", newIndex);
          }}
        />
      ),
    };
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} className={allSlidesWithoutImages ? this.decorateCSS("carousel-no-image") : this.decorateCSS("carousel")}>
          {this.castToObject<ISliderData[]>("slider").map((item: ISliderData, index: number) => (
            <div
              className={item.image ? (
                this.getPropValue("disabled")
                  ? this.decorateCSS("slide-disabled-animate") : this.decorateCSS("slide") +
                  " " +
                  (currentSlide == index + 1 && this.decorateCSS("disabled")
                    ? this.decorateCSS("active-disabled")
                    : this.decorateCSS("active"))
              ) : (
                this.getPropValue("disabled")
                  ? this.decorateCSS("slide-disabled-animate") : this.decorateCSS("slide-no-image") +
                  " " +
                  (currentSlide == index + 1 && this.decorateCSS("disabled")
                    ? this.decorateCSS("active-disabled")
                    : this.decorateCSS("active"))
              )}
            >
              <div className={this.getPropValue("overlay") ? this.decorateCSS("image-wrapper-overlay") : this.decorateCSS("image-wrapper")}>
                {item.image && (
                  <img src={item.image} alt={item.title} className={this.decorateCSS("image")} />
                )}
              </div>
            </div>
          ))}
        </ComposerSlider>
        <div className={allSlidesWithoutImages ? this.decorateCSS("max-content-no-image") : this.decorateCSS("max-content")}>
          <div className={this.getPropValue("slider")[currentSlide - 1].getPropValue("image") ? this.decorateCSS("info-box") : this.decorateCSS("info-box-no-image")}>
            {this.castToString(this.getPropValue("slider")[(currentSlide - 1)].getPropValue("topWriting")) &&
              <div
                className={`${this.decorateCSS("tag")} ${this.getPropValue("text_animation")
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
                {this.getPropValue("slider")[(currentSlide - 1)].getPropValue("topWriting")}
              </div>
            }
            <div
              className={`${this.decorateCSS("title")} ${this.getPropValue("text_animation")
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
              {this.getPropValue("slider")[(currentSlide - 1)].getPropValue("title")}
            </div>


            {this.getPropValue("line") ? <div className={this.decorateCSS("line")}></div> : <div></div>}
            {this.castToString(this.getPropValue("slider")[(currentSlide - 1)].getPropValue("description")) &&
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
                {this.getPropValue("slider")[(currentSlide - 1)].getPropValue("description")}
              </div>
            }
            <div className={this.decorateCSS("pagination")}>
              <div className={this.decorateCSS("current-page")}>{currentSlide}</div>
              <div className={this.decorateCSS("slash")}> / </div>
              <div className={this.decorateCSS("total-page")}>{slideCount}</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header8;