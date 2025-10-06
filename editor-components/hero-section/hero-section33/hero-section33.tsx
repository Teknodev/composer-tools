import * as React from "react";
import styles from "./hero-section33.module.scss";
import { BaseHeroSection } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Slide = {
  centered: boolean;
  backgroundImage: string;
  image: string;
  title: React.JSX.Element;
  rotate_icon: string;
  rotate_text: React.JSX.Element;
  buttons: Button[];
};

type Button = {
  button_text: React.JSX.Element;
  button_link: string;
};

class HeroSection33 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

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
              type: "boolean",
              key: "centered",
              displayer: "Center",
              value: false,
            },
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: `<p><span style="white-space: pre-wrap;">Cloria</span></p><p><span style="white-space: pre-wrap;">by Wood</span></p>`,
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
              type: "boolean",
              key: "centered",
              displayer: "Center",
              value: true,
            },
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
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
              type: "boolean",
              key: "centered",
              displayer: "Center",
              value: false,
            },
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: `<p><span style="white-space: pre-wrap;">Wooden </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Floor Lamp</span></p>`,
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

  static getName(): string {
    return "Hero Section 33";
  }

  render() {

    const slides = this.castToObject<Slide[]>("slider") || [];
    const activeSlide: number = this.getComponentState("activeSlide");
    const currentSlide: Slide = slides[activeSlide] || {
      centered: false,
      backgroundImage: "",
      image: "",
      title: <></>,
      rotate_icon: "",
      rotate_text: <></>,
      buttons: []
    };

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      accessibility: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current9: number, next: number) => {
        if (slides.length > 0) {
          this.setComponentState("activeSlide", next);
        }
      },
      dotsClass: this.decorateCSS("dotContainer"),
      appendDots: (dots: any[]) => (
        slides.length > 0 && (
          <div className={this.decorateCSS("dotContainer")}>
            {dots.map((dot, index) => (
              <div
                key={index}
                className={`
                ${this.decorateCSS("dotBullet")} 
              ${activeSlide == index && this.decorateCSS("withCenterDot")}
              ${!currentSlide.backgroundImage && this.decorateCSS("primaryBackground")}
              `}
              >
                <div>{dot}</div>
              </div>
            ))}
          </div>)
      ),
    };

    const animation: boolean = this.getPropValue("animation");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides.length > 0 && (
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
                  <div className={this.decorateCSS("content")} key={index}>
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
                            ${animation
                            ? this.decorateCSS("with-transition")
                            : ""
                          }
                            ${activeSlide === index
                            ? this.decorateCSS("fix-location")
                            : ""
                          }
                            ${item.centered && this.decorateCSS("centered")}
                          `}
                      >
                        {item.image && (
                          <div className={this.decorateCSS("circle")}>
                            <img
                              src={item.image}
                              className={this.decorateCSS("circle-image")}
                              alt="circular"
                            />
                          </div>
                        )}
                        {titleExist && (
                          <h1
                            className={`${this.decorateCSS("content-title")} ${item.backgroundImage &&
                              this.decorateCSS("blackColor")
                              }`}
                          >
                            {item.title}
                          </h1>
                        )}
                        {buttons?.length > 0 && (
                          <div className={this.decorateCSS("buttons-div")}>
                            {buttons.map((button: Button, index: number) => {
                              if (!this.castToString(button.button_text))
                                return null;
                              return (
                                <ComposerLink
                                  key={index}
                                  path={button.button_link}
                                >
                                  <button
                                    className={`${this.decorateCSS("button")} ${item.backgroundImage &&
                                      this.decorateCSS("blackColor")
                                      }`}
                                  >
                                    {button.button_text}
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
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection33;

