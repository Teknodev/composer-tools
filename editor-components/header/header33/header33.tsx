import * as React from "react";
import styles from "./header33.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Slide = {
  image: string;
  title: JSX.Element;
  rotate_icon: string;
  rotate_text: JSX.Element;
  buttons: Button[];
};

type Button = {
  button_text: JSX.Element;
  button_link: string;
};

class Header33 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "FaLongArrowAltLeft",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "FaLongArrowAltRight",
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Content Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7a?alt=media&timestamp=1719502103059",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cloria by Wood",
            },
            {
              type: "string",
              key: "rotate_text",
              displayer: "Rotate Text",
              value: "Teknodev Composer",
            },
            {
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
                      key: "button_text",
                      displayer: "Button Text",
                      value: "Shop Now",
                    },
                    {
                      type: "page",
                      key: "button_link",
                      displayer: "Button Navigate",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7b?alt=media&timestamp=1719502103059",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kento - Chair",
            },
            {
              type: "string",
              key: "rotate_text",
              displayer: "Rotate Text",
              value: "Teknodev Composer",
            },
            {
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
                      key: "button_text",
                      displayer: "Button Text",
                      value: "Shop Now",
                    },
                    {
                      type: "page",
                      key: "button_link",
                      displayer: "Button Navigate",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7c?alt=media&timestamp=1719502103058",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wooden Floor Lamp",
            },
            {
              type: "string",
              key: "rotate_text",
              displayer: "Rotate Text",
              value: "Teknodev Composer",
            },
            {
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
                      key: "button_text",
                      displayer: "Button Text",
                      value: "Shop Now",
                    },
                    {
                      type: "page",
                      key: "button_link",
                      displayer: "Button Navigate",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.setComponentState("activeSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-33";
  }

  calculateManipulations(rotateText: string) {
    let parentCircleToInnerCircleScaleRatio = 2.72;
    let circleRadius = 52;
    let circleContainerW =
      Math.round(2 * circleRadius * Math.cos(45)) *
      parentCircleToInnerCircleScaleRatio;
    const circleContainerMaxW = 300;
    let circlePerimeter = 2 * 3.14 * circleRadius;
    let circleScale = parseFloat((circleContainerW / 300).toFixed(2));

    const textLength = rotateText.length;
    let fontSize = 40;

    let letterSpacing = parseFloat(
      (circlePerimeter / (textLength * circleScale * fontSize)).toFixed(2),
    );

    if (letterSpacing < 1) {
      letterSpacing = 0;
      fontSize = parseFloat(
        (circlePerimeter / ((textLength - 1) * circleScale)).toFixed(2),
      );
      if (fontSize <= 24) {
        circleRadius = textLength * 2.2;
        circlePerimeter = 2 * 3.14 * circleRadius;
        circleContainerW = Math.min(
          circleContainerMaxW,
          Math.round(2 * circleRadius * Math.cos(45)) *
          parentCircleToInnerCircleScaleRatio,
        );
        circleScale = parseFloat((circleContainerW / 300).toFixed(2));
        fontSize = parseFloat(
          (circlePerimeter / ((textLength - 1) * circleScale)).toFixed(2),
        );
      }
    }

    return {
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      width: circleContainerW,
      scale: parseFloat((circleContainerW / 300).toFixed(2)),
    };
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("activeSlide", next);
        console.log(this.getComponentState("activeSlide"));
      },
    };

    const slides = this.castToObject<Slide[]>("slider");

    const nextArrowIcon: string = this.getPropValue("next_icon");
    const prevArrowIcon: string = this.getPropValue("prev_icon");

    const animation: boolean = this.getPropValue("animation");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides?.length && slides?.length > 0 && (
            <>
              <ComposerSlider
                {...settings}
                ref={this.getComponentState("slider-ref")}
                className={this.decorateCSS("carousel")}
              >
                {slides.map((item: Slide, index: number) => {
                  const buttons = item.buttons;
                  const rotateText = this.castToString(item.rotate_text);
                  const titleExist = this.castToString(item.title);
                  const styleManipulations =
                    this.calculateManipulations(rotateText);

                  return (
                    <div
                      className={`${this.decorateCSS(
                        "content",
                      )} ${this.decorateCSS(
                        index % 2 === 1 ? "secondary-slide" : "",
                      )}`}
                      key={index}
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={this.castToString(item.title)}
                          className={this.decorateCSS("image")}
                        />
                      )}
                      <div className={this.decorateCSS("carousel-content-div")}>
                        <div
                          className={`
                            ${this.decorateCSS("carousel-content")}
                            ${this.getComponentState("activeSlide") ===
                              index || animation
                              ? this.decorateCSS("fix-location")
                              : ""
                            }
                          `}
                        >
                          {titleExist && (
                            <h1
                              className={this.getComponentState(
                                "content-title",
                              )}
                            >
                              {item.title}
                            </h1>
                          )}

                          {buttons?.length > 0 && (
                            <div className={this.decorateCSS("buttons-div")}>
                              {buttons.map((item: Button, index: number) => (
                                <ComposerLink
                                  key={index}
                                  path={item.button_link}
                                >
                                  <button
                                    className={this.decorateCSS("button")}
                                  >
                                    {item.button_text}
                                  </button>
                                </ComposerLink>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {rotateText && (
                        <svg
                          className={this.decorateCSS("circle")}
                          style={{
                            width: styleManipulations.width + "px",
                            height: styleManipulations.width + "px",
                          }}
                        >
                          <defs>
                            <path
                              id="circlePath"
                              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                            />
                          </defs>
                          <circle cx="150" cy="150" r="75" fill="none" />
                          <g
                            style={{
                              transform: `scale(${styleManipulations.scale})`,
                            }}
                          >
                            <use xlinkHref="#circlePath" fill="none" />
                            <text fill="#000">
                              <textPath
                                xlinkHref="#circlePath"
                                style={{
                                  fontSize: `${styleManipulations.fontSize}px`,
                                  letterSpacing: `${styleManipulations.letterSpacing}px`,
                                }}
                              >
                                {rotateText}
                              </textPath>
                            </text>
                          </g>
                        </svg>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
              <div className={this.decorateCSS("arrows")}>
                {prevArrowIcon && (
                  <ComposerIcon
                    name={prevArrowIcon}
                    propsIcon={{
                      className: `${this.decorateCSS("prev-icon")} ${styles["arrow-prev"]
                        }`,
                      onClick: () => {
                        this.getComponentState(
                          "slider-ref",
                        ).current.slickPrev();
                      },
                    }}
                  />
                )}
                {nextArrowIcon && (
                  <ComposerIcon
                    name={nextArrowIcon}
                    propsIcon={{
                      className: `${this.decorateCSS("next-icon")} ${styles["arrow-next"]
                        }`,
                      onClick: () => {
                        this.getComponentState(
                          "slider-ref",
                        ).current.slickNext();
                      },
                    }}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Header33;
