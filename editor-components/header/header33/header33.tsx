import * as React from "react";
import styles from "./header33.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Slide = {
  backgroundImage: string;
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
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7a?alt=media&timestamp=1719502103059",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cloria by Wood",
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
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7b?alt=media&timestamp=1719502103059",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kento - Chair",
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
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7c?alt=media&timestamp=1719502103058",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wooden Floor Lamp",
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
    return "Header 33";
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
      beforeChange: (current: number, next: number) => {
        this.setComponentState("activeSlide", next);
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
                  const titleExist = this.castToString(item.title);
                  const render = buttons?.length > 0 || titleExist || item.image;

                  if (!render) return null;
                  return (
                    <div
                      className={`${this.decorateCSS(
                        "content",
                      )} ${this.decorateCSS(
                        index % 2 === 1 ? "secondary-slide" : "",
                      )}`}
                      key={index}
                    >
                      {item.backgroundImage && (
                        <img
                          src={item.backgroundImage}
                          alt={this.castToString(item.title)}
                          className={this.decorateCSS("background-image")}
                        />
                      )}
                      <div className={this.decorateCSS("carousel-content-div")}>
                        <div
                          className={`
                            ${this.decorateCSS("carousel-content")}
                            ${animation ? this.decorateCSS("with-transition") : ""}
                            ${this.getComponentState("activeSlide") ===
                              index
                              ? this.decorateCSS("fix-location")
                              : ""
                            }
                          `}
                        >
                          {item.image && (
                            <div
                              className={this.decorateCSS("circle")}
                            >
                              <img src={item.image} className={this.decorateCSS("circle-image")} alt="circular" />
                            </div>
                          )}
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
                              {buttons.map((item: Button, index: number) => {
                                if (!this.castToString(item.button_text)) return null;
                                return (
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
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
              <div className={this.decorateCSS("arrows")}>
                {prevArrowIcon && (
                  <ComposerIcon
                    name={prevArrowIcon}
                    propsIcon={{
                      className: `${this.decorateCSS("prev-icon")} ${this.decorateCSS("arrow-prev")
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
                      className: `${this.decorateCSS("next-icon")} ${this.decorateCSS("arrow-next")
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
