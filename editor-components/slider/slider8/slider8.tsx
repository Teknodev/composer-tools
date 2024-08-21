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

type ButtonNav = {
  prevIcon: string;
  nextIcon: string;
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
              value: "The Light House",
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
      type: "boolean",
      key: "textAnim",
      displayer: "Text Animation",
      value: true,
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

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("prevIndex", 0);
    this.setComponentState("currentIndex", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
  }

  getName(): string {
    return "Slider 8";
  }

  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("prevIndex", this.getComponentState("currentIndex"));
    this.setComponentState("currentIndex", slideIndex);
  }

  render() {
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
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOut");
        setTimeout(() => {
          this.changeCurrentSlide(newIndex);
        }, 1200);
      },
      afterChange: () => {
        this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
        this.setComponentState("titleAnimationClass", "animate__fadeInRight");
        this.setComponentState(
          "descriptionAnimationClass",
          "animate__fadeInUp"
        );
      },
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
                          <div className={this.decorateCSS("overlay")}></div>
                          <div className={this.decorateCSS("content-div")}>
                            <div
                              className={this.decorateCSS("image")}
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                                }}
                              ></div>
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
                                    console.log(
                                      this.castToString(button.buttonText)
                                    );

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
