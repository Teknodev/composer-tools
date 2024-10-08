import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import Slider from "react-slick";

type Card = {
  image: string;
  backgroundImage: string;
  imageTitle: JSX.Element;
  url: string;
  buttons: Button[];
};

type Button = {
  buttonText: JSX.Element;
  buttonUrl: string;
  buttonIcon: string;
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
              key: "imageTitle",
              displayer: "Image Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [
                {
                  type: "object",
                  key: "buttons",
                  displayer: "Buttons",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW PROJECT",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "Button Icon",
                      value: "FaArrowRight",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Multi-Family Housing",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [
                {
                  type: "object",
                  key: "buttons",
                  displayer: "Buttons",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW PROJECT",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "Button Icon",
                      value: "FaArrowRight",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "The Lighthouse",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [
                {
                  type: "object",
                  key: "buttons",
                  displayer: "Buttons",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW PROJECT",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "Button Icon",
                      value: "FaArrowRight",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "leftNavButton",
      displayer: "Left Button",
      value: "FaArrowLeftLong",
    });

    this.addProp({
      type: "icon",
      key: "rightNavButton",
      displayer: "Right Button",
      value: "FaArrowRightLong",
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
      displayer: "Lines Container",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Content Animation",
      value: true,
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  getName(): string {
    return "Slider 8";
  }

  render() {
    const foregroundOverlay = this.getPropValue("foregroundOverlay");
    const overlay = this.getPropValue("overlay");
    const linesContainer = this.getPropValue("lines-container");
    const animation = this.getPropValue("animation");
    const cards = this.castToObject<Card[]>("slider");
    const item = cards[this.getComponentState("activeSlide")];
    const noImages = item.image || item.backgroundImage;

    const settings = {
      fade: true,
      duration: 1500,
      arrows: false,
      dots: true,
      infinite: cards.length > 1,
      speed: 3000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: this.decorateCSS(noImages ? "dots" : "dots-2"),
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };
    const shouldDisplayOverlay = (index: number): boolean => {
      const shouldDisplay = !!this.castToObject<Card[]>("slider")[index].backgroundImage && overlay;
      return shouldDisplay;
    };
    const shouldDisplayForegroundOverlay = (index: number): boolean => {
      const shouldDisplay = !!this.castToObject<Card[]>("slider")[index].image && foregroundOverlay;
      return shouldDisplay;
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              {cards?.length && cards?.length > 0 && (
                <Slider
                  {...settings}
                  className={this.decorateCSS("carousel")}
                  ref={this.getComponentState("slider-ref")}>
                  {cards.map((item: Card, index: number) => {
                    const buttons = item.buttons;
                    const titleExists = this.castToString(item.imageTitle);
                    const render = titleExists || buttons?.length > 0 || item.image;
                    if (!render) return null;
                    return (
                      <div
                        className={this.decorateCSS("slider-inner-div")}
                        key={`sld-8-${index}`}>
                        <div
                          className={this.decorateCSS("content")}
                          style={{
                            backgroundImage: `url("${item.backgroundImage}")`,
                          }}>
                          {shouldDisplayOverlay(index) === true && <div className={this.decorateCSS("overlay")}></div>}
                          <div
                            className={`
                          ${this.decorateCSS("content-div")}
                             ${this.getComponentState("activeSlide") === index ? this.decorateCSS("fix-location") : ""}
                          `}>
                            {linesContainer && (
                              <div className={this.decorateCSS(noImages ? "lines-container" : "lines-container2")}>
                                <div className={this.decorateCSS("line-1")}></div>
                                <div className={this.decorateCSS("line-2")}></div>
                              </div>
                            )}

                            <div
                              className={this.decorateCSS("image")}
                              style={{ backgroundImage: `url(${item.image})` }}>
                              {shouldDisplayForegroundOverlay(index) === true && <div className={this.decorateCSS("image-overlay")}></div>}
                            </div>

                            {titleExists && (
                              <h3
                                className={`${this.decorateCSS(noImages ? "imageTitle" : "imageTitle2")} ${
                                  animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageTitleAnimation") : ""
                                }`}>
                                {item.imageTitle}
                              </h3>
                            )}

                            {buttons?.length > 0 && (
                              <div
                                className={`${this.decorateCSS(noImages ? "buttons" : "buttons2")} ${
                                  animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""
                                }`}>
                                {buttons.map((item: Button, buttonIndex: number) => {
                                  if (!this.castToString(item.buttonText)) return null;
                                  return (
                                    <ComposerLink
                                      key={`dw-7-btn-left ${buttonIndex}`}
                                      path={item.buttonUrl}>
                                      <button
                                        className={`${this.decorateCSS("button")}
                                        ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}>
                                        {item.buttonText}
                                        <ComposerIcon
                                          propsIcon={{
                                            className: this.decorateCSS("button-icon"),
                                          }}
                                          name={item.buttonIcon}
                                        />
                                      </button>
                                    </ComposerLink>
                                  );
                                })}
                              </div>
                            )}
                            <div className={this.decorateCSS(noImages ? "nav-buttons" : "nav-buttons2")}>
                              {this.getPropValue("leftNavButton") && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickPrev();
                                  }}>
                                  <ComposerIcon
                                    name={this.getPropValue("leftNavButton")}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                    }}
                                  />
                                </button>
                              )}
                              {this.getPropValue("rightNavButton") && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickNext();
                                  }}>
                                  <ComposerIcon
                                    name={this.getPropValue("rightNavButton")}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                    }}
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider8;
