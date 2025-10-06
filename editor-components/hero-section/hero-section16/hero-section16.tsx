import * as React from "react";
import styles from "./hero-section16.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: React.JSX.Element;
  image: string;
  subtitle: React.JSX.Element;
  button: INPUTS.CastedButton;
};
class HeroSection16 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c49?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "subtitle",
              value: "THE BEST WEDDING DAY",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "title",
              value: "We're getting married!",
              displayer: "Title",
            },
            INPUTS.BUTTON("button", "Button", "Discuss The Wedding", "", null, null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c4a?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "subtitle",
              value: "TRUST US TO ORGANİZE",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "title",
              value: "Your special day",
              displayer: "Title",
            },
            INPUTS.BUTTON("button", "Button", "Online Request", "", null, null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c4b?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "subtitle",
              value: "FLOWER ARRANGEMENTS",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "title",
              value: "See you at the wedding",
              displayer: "Title",
            },

            INPUTS.BUTTON("button", "Button", "View Details", "", null, null, "White"),
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "IoIosArrowBack",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "IoIosArrowForward",
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Hero Section 16";
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    const activeSlideIndex = this.getComponentState("activeSlideIndex");

    const slider = this.castToObject<ISliderData[]>("slider");
    const sliderRef = this.getComponentState("slider-ref");
    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {prevIcon && slider.length > 1 && (
            <button
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
              className={`${this.decorateCSS("slider-button-left")} ${!slider[activeSlideIndex].image && this.decorateCSS("slider-button-no-image")}`}
            >
              <Base.Icon
                propsIcon={{
                  className: this.decorateCSS("icon"),
                }}
                name={prevIcon}
              />
            </button>
          )}

          <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("carousel")}>
            {slider.map((item, index) => {
              const subtitleExist = this.castToString(item.subtitle);
              const titleExist = this.castToString(item.title);
              const buttonTextExist = this.castToString(item.button.text);
              const imageExist = item.image;

              const contentExist = subtitleExist || titleExist || buttonTextExist;

              return (
                <div className={this.decorateCSS("item")} key={`key${index}`}>
                  {imageExist && (
                    <div className={this.decorateCSS("image-container")}>
                      <img className={this.decorateCSS("image")} src={item.image} alt="" />
                    </div>
                  )}
                  {contentExist && (
                    <Base.MaxContent
                      className={`${this.decorateCSS("content")} 
              ${!imageExist && this.decorateCSS("image-no-content")} 
              ${activeSlideIndex === index ? this.decorateCSS(imageExist ? "active" : "active-no-image") : ""}`}
                    >
                      {subtitleExist && <Base.P className={`${this.decorateCSS("subtitle")} ${!imageExist && this.decorateCSS("subtitle-no-image")}`}>{item.subtitle}</Base.P>}
                      {titleExist && <Base.P className={`${this.decorateCSS("title")} ${!imageExist && this.decorateCSS("title-no-image")}`}>{item.title}</Base.P>}
                      {buttonTextExist && (
                        <ComposerLink path={item.button.url}>
                          <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                            {item.button.text}
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.MaxContent>
                  )}
                </div>
              );
            })}
          </ComposerSlider>

          <div className={this.decorateCSS("numbers-container")}>
            {slider.map((_, index) => {
              const imageExist = !slider[activeSlideIndex].image;

              return (
                <div key={index} className={`${`${this.decorateCSS("number-item")} ${!imageExist && this.decorateCSS("number-item-no-image")}`} ${activeSlideIndex === index ? this.decorateCSS("active") : ""}`}>
                  <Base.H5 className={`${this.decorateCSS("number")} ${imageExist && this.decorateCSS("number-with-image")}`}>{index + 1}</Base.H5>
                </div>
              );
            })}
          </div>

          {nextIcon && slider.length > 1 && (
            <button
              onClick={() => {
                sliderRef.current.slickNext();
              }}
              className={`${this.decorateCSS("slider-button-right")} ${!slider[activeSlideIndex].image && this.decorateCSS("slider-button-no-image")}`}
            >
              <Base.Icon
                propsIcon={{
                  className: this.decorateCSS("icon"),
                }}
                name={nextIcon}
              />
            </button>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection16;

