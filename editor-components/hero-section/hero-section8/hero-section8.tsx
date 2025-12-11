import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type ISliderData = {
  logo: TypeMediaInputValue;
  title: string;
  image: TypeMediaInputValue;
  description: string;
  topWriting: string;
};
interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
}

class HeroSection8 extends BaseHeroSection {
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
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "pageNumber",
      displayer: "Page Number",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
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
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
              type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e9?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
              type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
              type: "image",
                url: "https://eremia-react.vercel.app/img/project/project3/1.jpg",
              },
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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
              type: "image",
                url: "https://eremia-react.vercel.app/img/project/project4/1.jpg",
              },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "previousArrow",
      displayer: "Previous Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
      type: "icon",
        name: "GoArrowLeft",
      },
    });
    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
      type: "icon",
        name: "GoArrowRight",
      },
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
    const autoplay = this.getPropValue("autoplay");
    const allSlidesWithoutImages = this.castToObject<ISliderData[]>("slider").every(
      (slide) => !slide.image
    );
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      fade: sliderEffect,
      swipe: true,
      autoplay: autoplay,
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

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} ref={sliderRef} className={`${this.decorateCSS("carousel")} ${allSlidesWithoutImages && this.decorateCSS("no-image")}`}>
          {this.castToObject<ISliderData[]>("slider").map((item: ISliderData, index: number) => {
            const imageWithSettings = item.image?.type === "video" ? {
              ...item.image,
              settings: {
                autoplay: true,
                loop: true,
                muted: true,
                controls: false
              }
            } : item.image;
            
            return (
            <div className={`
              ${this.decorateCSS("slide")}
              ${!this.getPropValue("slider_animation") ? this.decorateCSS("disabled-animate") : ""}
              ${!item.image ? this.decorateCSS("slide-no-image") : ""}
              ${(this.getComponentState("centerSlide") === index + 1) && this.decorateCSS("active")}
            `}>
                <div className={`${this.decorateCSS("image-wrapper")} ${item.image && this.getPropValue("overlay") && this.decorateCSS("overlay")}`}>
                {item.image && (
                    <Base.Media value={imageWithSettings} className={this.decorateCSS("image")} />
                )}
              </div>
            </div>
            );
          })}
        </ComposerSlider>
        <Base.Container className={`${this.decorateCSS("max-content")}`}>
          {this.getPropValue("slider").length > 0 && (
            <Base.MaxContent className={`${this.decorateCSS("info-box")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`}>
              {this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("logo") && (
                <Base.Media 
                  value={this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("logo")} 
                  className={this.decorateCSS("logo")} 
                />
              )}
              {this.castToString(this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("topWriting")) &&
                <Base.H5
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
                </Base.H5>
              }
              <Base.H1
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
              </Base.H1>


              {this.getPropValue("line") ? <div className={this.decorateCSS("line")}></div> : <div></div>}
              {this.castToString(this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("description")) &&
                <Base.H5
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
                </Base.H5>
              }
              <div className={this.decorateCSS("arrow-wrapper")}>
                <div className={`${this.decorateCSS("arrow-prev-wrapper")} ${this.decorateCSS("prev")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`} onClick={() => {
                  sliderRef.current.slickPrev();
                }}>
                  <div className={this.decorateCSS("arrow-prev")}>
                    <Base.Media
                      value={this.getPropValue("previousArrow")}
                      className={this.decorateCSS("icon")}
                    />
                  </div>
                </div>
                {this.getPropValue("pageNumber") && (
                  <div className={`${this.decorateCSS("pagination")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`}>
                    <div className={this.decorateCSS("current-page")}>{(this.getComponentState("centerSlide") + 1)}</div>
                    <div className={this.decorateCSS("slash")}> / </div>
                    <div className={this.decorateCSS("total-page")}>{slideCount}</div>
                  </div>
                )}
                <div className={`${this.decorateCSS("arrow-next-wrapper")} ${this.decorateCSS("next")} ${!this.getPropValue("slider")[(this.getComponentState("centerSlide"))].getPropValue("image") && this.decorateCSS("no-image")}`} onClick={() => {
                  sliderRef.current.slickNext();
                }}>
                  <div className={this.decorateCSS("arrow-next")}>
                    <Base.Media
                      value={this.getPropValue("nextArrow")}
                      className={this.decorateCSS("icon")}
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

