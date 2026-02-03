import * as React from "react";
import styles from "./hero-section16.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  button: INPUTS.CastedButton;
  overlay: boolean;
  logo: TypeMediaInputValue;
};
class HeroSection16 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c49?alt=media&timestamp=1719483639150",
              },
            },
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
            {
              type: "string",
              key: "description",
              value: "",
              displayer: "Description",
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c4a?alt=media&timestamp=1719483639150",
              },
            },
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
            {
              type: "string",
              key: "description",
              value: "",
              displayer: "Description",
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666192c4bd2970002c625c4b?alt=media&timestamp=1719483639150",
              },
            },
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
            {
              type: "string",
              key: "description",
              value: "",
              displayer: "Description",
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },

            INPUTS.BUTTON("button", "Button", "View Details", "", null, null, "White"),
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    })

    this.addProp({
      type: "media",
      key: "prev-button-icon",
      displayer: "Previous Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowBack",
      },
    });
    this.addProp({
      type: "media",
      key: "next-button-icon",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowForward",
      },
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    })

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
      autoplay: this.getPropValue("autoplay"),
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
    const prevIcon = this.getPropValue("prev-button-icon") as TypeMediaInputValue | undefined;
    const nextIcon = this.getPropValue("next-button-icon") as TypeMediaInputValue | undefined;
    const animation = this.getPropValue("animation");

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
              <Base.Media value={prevIcon} className={this.decorateCSS("icon")} />
            </button>
          )}

          <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("carousel")}>
            {slider.map((item, index) => {
              const subtitleExist = this.castToString(item.subtitle);
              const titleExist = this.castToString(item.title);
              const descriptonExist = this.castToString(item.description);
              const buttonTextExist = this.castToString(item.button.text);
              const imageExist = item.image;
              const logoExist = item.logo;

              const contentExist = subtitleExist || titleExist || buttonTextExist;

              return (
                <div className={this.decorateCSS("item")} key={`slide-${index}-${activeSlideIndex}`}>
                  {imageExist && (
                    <div className={this.decorateCSS("image-container")} key={`image-${activeSlideIndex}-${index}`}>
                      <Base.Media 
                        value={item.image} 
                        className={`${this.decorateCSS("image")} ${animation && this.decorateCSS("image-with-animation")}`} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                      />
                      {item.overlay && <div className={this.decorateCSS("overlay")} />}
                    </div>
                  )}
                  {contentExist && (
                    <Base.VerticalContent
                      className={`${this.decorateCSS("content")} 
              ${!imageExist && this.decorateCSS("image-no-content")} 
              ${animation && this.decorateCSS("content-with-animation")} 
              ${activeSlideIndex === index ? this.decorateCSS(imageExist ? "active" : "active-no-image") : ""}`}
                    >
                      {logoExist && (
                        <div className={this.decorateCSS("logo-wrapper")}>
                          <Base.Media value={item.logo} className={this.decorateCSS("logo")} />
                        </div>
                      )}
                      {subtitleExist && <Base.P className={`${this.decorateCSS("subtitle")} ${!imageExist && this.decorateCSS("subtitle-no-image")}`}>{item.subtitle}</Base.P>}
                      {titleExist && <Base.P className={`${this.decorateCSS("title")} ${!imageExist && this.decorateCSS("title-no-image")}`}>{item.title}</Base.P>}
                      {descriptonExist && <Base.P className={`${this.decorateCSS("description")} ${!imageExist && this.decorateCSS("description-no-image")}`}>{item.description}</Base.P>}
                      {buttonTextExist && (
                        <ComposerLink path={item.button.url}>
                          <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.VerticalContent>
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
              <Base.Media value={nextIcon} className={this.decorateCSS("icon")} />
            </button>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection16;

