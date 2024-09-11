import Slider from "react-slick";
import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  backgroundImage: string;
  imagetitle: JSX.Element;
  url: string;
};

type Button = {
  buttonText: JSX.Element;
  url: string;
  buttonIcon: string;
};

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagetitle",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
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
              key: "imagetitle",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
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
              key: "imagetitle",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
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
      additionalParams: {
        maxElementCount: 2,
      },
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
    const animation: boolean = this.getPropValue("animation");

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      dotsClass: this.decorateCSS("dots"),
      beforeChange: (oldIndex: number, newIndex: number) => {
        this.setComponentState("activeSlide", newIndex);
      },
    };

    const shouldDisplayOverlay = (index: number): boolean => {
      const shouldDisplay =
        !!this.castToObject<Card[]>("header")[index].backgroundImage && overlay;
      return shouldDisplay;
    };
    
    const shouldDisplayForegroundOverlay = (index: number): boolean => {
      const shouldDisplay =
        !!this.castToObject<Card[]>("header")[index].image && foregroundOverlay;
      return shouldDisplay;
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <Slider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={this.getComponentState("slider-ref")}
              >
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => {
                    return (
                      <div
                        className={this.decorateCSS("slider-inner-div")}
                        key={`sld-8-${index}`}
                      >
                        <div
                          className={this.decorateCSS("content")}
                          style={{
                            backgroundImage: `url("${item.backgroundImage}")`,
                          }}
                        >
                          {shouldDisplayOverlay(index) === true && (
                            <div className={this.decorateCSS("overlay")}></div>
                          )}

                          <div
                            className={`
                          ${this.decorateCSS("content-div")}
                           ${
                             animation
                               ? this.decorateCSS("with-transition")
                               : ""
                           }
                             ${
                               this.getComponentState("activeSlide") === index
                                 ? this.decorateCSS("fix-location")
                                 : ""
                             }
                          `}
                          >
                            {linesContainer && (
                              <div
                                className={this.decorateCSS("lines-container")}
                              >
                                <div
                                  className={this.decorateCSS("line-1")}
                                ></div>
                                <div
                                  className={this.decorateCSS("line-2")}
                                ></div>
                              </div>
                            )}
                            <div
                              className={this.decorateCSS("image")}
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              {shouldDisplayForegroundOverlay(index) === true && (
                                <div
                                  className={this.decorateCSS("image-overlay")}
                                ></div>
                              )}
                            </div>
                            {this.castToString(item.imagetitle) && (
                              <h3
                                className={this.getComponentState(
                                  "titleAnimationClass"
                                )}
                              >
                                {item.imagetitle}
                              </h3>
                            )}
                            {this.castToObject<Button[]>("buttons").length >
                              0 && (
                              <div className={this.decorateCSS("buttons")}>
                                {this.castToObject<Button[]>("buttons").map(
                                  (button: Button, index: number) => {
                                    if (this.castToString(button.buttonText))
                                      return (
                                        <ComposerLink
                                          key={`dw-7-btn-left-${index}`}
                                          path={button.url}
                                        >
                                          <button
                                            className={this.decorateCSS(
                                              "button"
                                            )}
                                          >
                                            {button.buttonText}
                                            <ComposerIcon
                                              propsIcon={{
                                                className:
                                                  this.decorateCSS(
                                                    "button-icon"
                                                  ),
                                              }}
                                              name={button.buttonIcon}
                                            />
                                          </button>
                                        </ComposerLink>
                                      );
                                  }
                                )}
                              </div>
                            )}
                            <div className={this.decorateCSS("nav-buttons")}>
                              {this.getPropValue("leftNavButton") && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState(
                                      "slider-ref"
                                    ).current.slickPrev();
                                  }}
                                >
                                  <ComposerIcon
                                    name={this.getPropValue("leftNavButton")}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                      size: 20,
                                    }}
                                  />
                                </button>
                              )}
                              {this.getPropValue("rightNavButton") && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState(
                                      "slider-ref"
                                    ).current.slickNext();
                                  }}
                                >
                                  <ComposerIcon
                                    name={this.getPropValue("rightNavButton")}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                      size: 20,
                                    }}
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider8;
