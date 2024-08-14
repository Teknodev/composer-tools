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
      value: "PiArrowLeftThin",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "PiArrowRightThin",
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

    this.setComponentState("prevIndex", 0);
    this.setComponentState("currentIndex", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-33";
  }

  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("prevIndex", this.getComponentState("currentIndex"));
    this.setComponentState("currentIndex", slideIndex);
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
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
          "animate__fadeInUp",
        );
      },
    };

    const slides = this.castToObject<Slide[]>("slider");

    const nextArrowIcon: string = this.getPropValue("next_icon");
    const prevArrowIcon: string = this.getPropValue("prev_icon");

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

                  return (
                    <div
                      className={`${this.decorateCSS("content")} ${this.decorateCSS(
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
                      <div className={this.decorateCSS("corousel-content-div")}>
                        <div className={this.decorateCSS("corousel-content")}>
                          {titleExist && (
                            <h1
                              className={this.getComponentState(
                                "titleAnimationClass",
                              )}
                            >
                              {item.title}
                            </h1>
                          )}

                          {buttons?.length && buttons?.length > 0 && (
                            <div className={this.decorateCSS("buttons-div")}>
                              {buttons.map((item: Button, index: number) => (
                                <ComposerLink
                                  key={index}
                                  path={item.button_link}
                                >
                                  <button
                                    className={`
                                    ${this.getComponentState("buttonAnimationClass")}
                                    ${this.decorateCSS("button")}
                                    `}
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
                        <div className={this.decorateCSS("circle")}>
                          <svg className={this.decorateCSS("circle-svg")}>
                            <defs>
                              <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                              />
                            </defs>
                            <circle cx="150" cy="150" r="75" fill="none" />
                            <g>
                              <use xlinkHref="#circlePath" fill="none" />
                              <text fill="#000">
                                <textPath xlinkHref="#circlePath">
                                  {rotateText}
                                </textPath>
                              </text>
                            </g>
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
              {(prevArrowIcon || nextArrowIcon) && (
                <div className={this.decorateCSS("page-bottom")}>
                  {prevArrowIcon && (
                    <ComposerIcon
                      name={prevArrowIcon}
                      propsIcon={{
                        className: `${this.decorateCSS("prev-icon")} ${styles["arrow-prev"]}`,
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
                        className: `${this.decorateCSS("next-icon")} ${styles["arrow-next"]}`,
                        onClick: () => {
                          this.getComponentState(
                            "slider-ref",
                          ).current.slickNext();
                        },
                      }}
                    />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Header33;
