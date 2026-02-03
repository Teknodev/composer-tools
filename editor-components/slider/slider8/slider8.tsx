import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  media: TypeMediaInputValue;
  backgroundMedia: TypeMediaInputValue;
  title: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multi-Family Housing",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "Tertiary"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Lighthouse",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "Tertiary"),
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "leftNavButton",
      displayer: "Left Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeftLong",
      },
    });

    this.addProp({
      type: "media",
      key: "rightNavButton",
      displayer: "Right Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowRightLong",
      },
    });

    this.addProp({
      type: "boolean",
      key: "foregroundOverlay",
      displayer: "Foreground Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: " Background Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "lines-container",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Content Animation",
      value: true,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    }));

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Slider 8";
  }

  render() {
    const foregroundOverlay = this.getPropValue("foregroundOverlay");
    const overlay = this.getPropValue("overlay");
    const linesContainer = this.getPropValue("lines-container");
    const animation = this.getPropValue("animation");

    const leftNavButton = this.getPropValue("leftNavButton") as any;
    const rightNavButton = this.getPropValue("rightNavButton") as any;

    const cards = this.castToObject<Card[]>("slider");
    const activeSlide = this.getComponentState("activeSlide");
    const anyImagesExist = cards[activeSlide]?.media || cards[activeSlide]?.backgroundMedia;
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const alignmentValue = Base.getContentAlignment();

    const settings = {
      ...sliderSettings,
      fade: true,
      duration: 1500,
      infinite: cards.length > 1,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };
    const shouldDisplayOverlay = (index: number): boolean => {
      return !!cards[index].backgroundMedia && overlay;
    };
    const shouldDisplayForegroundOverlay = (index: number): boolean => {
      return !!cards[index].media && foregroundOverlay;
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            {cards?.length && cards?.length > 0 && (
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                {cards.map((item: any, index: number) => {
                  const titleExists = item.title;
                  const render = titleExists || item.button?.text || item.media;
                  if (!render) return null;
                  return (
                    <div className={this.decorateCSS("slider-inner-div")} key={`sld-8-${index}`}>
                      <div
                        className={`${this.decorateCSS("content")} ${!anyImagesExist ? this.decorateCSS("no-img") : ""}`}
                      >
                        {item.backgroundMedia && (
                          <Base.Media
                            value={item.backgroundMedia}
                            className={this.decorateCSS("bg-image")}
                          />
                        )}
                        {shouldDisplayOverlay(index) === true && <div className={this.decorateCSS("overlay")}></div>}
                        <div
                          className={`
                          ${this.decorateCSS("content-div")}
                             ${this.getComponentState("activeSlide") === index ? this.decorateCSS("fix-location") : ""}
                          `}
                        >
                          {linesContainer && (
                            <div className={this.decorateCSS(anyImagesExist ? "lines-container" : "lines-container2")}>
                              <div className={this.decorateCSS("line-1")}></div>
                              <div className={this.decorateCSS("line-2")}></div>
                            </div>
                          )}

                          {titleExists && (
                            <div
                              className={`${this.decorateCSS("title-wrapper")}
                            ${alignmentValue === "center" && this.decorateCSS("center")}`}
                            >
                              <Base.SectionTitle
                                className={`${this.decorateCSS("title")} 
                                 ${this.decorateCSS(anyImagesExist && "imageTitle")} 
                                ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageTitleAnimation") : ""}`}
                              >
                                {item.title}
                              </Base.SectionTitle>
                            </div>
                          )}

                          {item.button?.text && (
                            <div className={`${this.decorateCSS(anyImagesExist ? "buttons" : "buttons2")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}>
                              <ComposerLink path={item.button.url}>
                                <Base.Button
                                  buttonType={item.button.type}
                                  className={`${this.decorateCSS("button")}
                                  ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}
                                >
                                  <span className={this.decorateCSS("button-text")}>{item.button.text}</span>
                                  {item.button.icon && (item.button.icon as any).name && (
                                    <Base.Media
                                      value={item.button.icon as any}
                                      className={this.decorateCSS("button-icon")}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          )}
                          {(leftNavButton || rightNavButton) && sliderSettings.arrows && (
                            <div className={this.decorateCSS(anyImagesExist ? "nav-buttons" : "nav-buttons2")}>
                              {leftNavButton && cards.length > 1 && (
                                <Base.Button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickPrev();
                                  }}
                                >
                                  <Base.Media
                                    value={leftNavButton}
                                    className={`${this.decorateCSS("nav-icon")} ${this.decorateCSS("nav-icon-media")}`}
                                  />
                                </Base.Button>
                              )}
                              {rightNavButton && cards.length > 1 && (
                                <Base.Button
                                  type="Bare"
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickNext();
                                  }}
                                >
                                  <Base.Media
                                    value={rightNavButton}
                                    className={`${this.decorateCSS("nav-icon")} ${this.decorateCSS("nav-icon-media")}`}
                                  />
                                </Base.Button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={this.decorateCSS("image")}>
                        {item.media && (
                          <Base.Media value={item.media} className={this.decorateCSS("bg-image")} />
                        )}
                        {shouldDisplayForegroundOverlay(index) === true && <div className={this.decorateCSS("image-overlay")}></div>}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
          {cards.length > 1 && sliderSettings.dots && (
            <div className={`${this.decorateCSS(anyImagesExist ? "dots" : "dots-2")}`}>
              {cards.map((_, index) => (
                <div key={`dot-${index}`} className={`${this.decorateCSS("dot-item")} ${this.getComponentState("activeSlide") === index && this.decorateCSS("slick-active")}`} onClick={() => this.getComponentState("slider-ref").current.slickGoTo(index)}>
                  <button className={this.decorateCSS("dot-button")} />
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider8;

