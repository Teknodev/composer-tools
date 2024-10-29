import * as React from "react";
import styles from "./header14.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Slides = {
  title: JSX.Element;
  subtitle: JSX.Element;
  description: JSX.Element;
  image: string;
  buttons: Array<Buttons>;
};

type Buttons = {
  buttonText: string;
  buttonUrl: string;
  primary: boolean;
};

class HeaderComponent14 extends BaseHeader {
  slideRefs: React.RefObject<HTMLDivElement>[] = [];
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "GrFormNext",
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation Enabled",
      value: true,
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slides",
      value: [
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Charge Your Phone Safely!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab4df803b007002cc71dac?alt=media",
            },

            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "buttonText",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "buttonUrl",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "For Everything and Everyone",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab4e4703b007002cc71de2?alt=media",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "buttonText",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "buttonUrl",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "buttonText",
                      value: "READ MORE",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "buttonUrl",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Featured Accessories",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://mobiles77.com/wp-content/uploads/2022/09/accessories-slide-3.jpg",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "buttonText",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "buttonUrl",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "buttonText",
                      value: "READ MORE",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "buttonUrl",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  getName(): string {
    return "Header-14";
  }

  render() {
    const slides = this.castToObject<Slides[]>("slides");
    const activeSlideIndex = this.getComponentState("activeSlide");
    const isImagePresent = slides[activeSlideIndex]?.image ? true : false;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")} ${!isImagePresent ? this.decorateCSS("noDots-img") : ""}`,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
          this.setComponentState("animation", false);
        }
      },
    };

    const isAnimation = this.getPropValue("animation");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
            ref={this.getComponentState("slider-ref")}
          >
            {slides.map((item: Slides, index: number) => {
              const image = item.image;
              const title = this.castToString(item.title);
              const description = this.castToString(item.description);
              const isActive = this.getComponentState("activeSlide") === index;

              return (
                <div
                  className={this.decorateCSS("slide")}
                  key={`sld-8-${index}`}
                >
                  {image && (
                    <img
                      src={item.image}
                      alt={""}
                      className={this.decorateCSS("bg-img")}
                    />
                  )}
                  <div
                    className={`${this.decorateCSS("content")} ${
                      !image ? this.decorateCSS("no-bg") : ""
                    } ${
                      isActive && isAnimation ? this.decorateCSS("fade-in") : ""
                    }`}
                  >
                    {title && (
                      <h1 className={this.decorateCSS("title")}>
                        {item.title}
                      </h1>
                    )}
                    {description && (
                      <h3 className={this.decorateCSS("description")}>
                        {item.description}
                      </h3>
                    )}
                    
                    {item.buttons.length > 0 && (
                      <div className={this.decorateCSS("buttons-container")}>
                        {item.buttons.map(
                          (buttonItem: any, indexButton: number) => {
                            const buttonText = this.castToString(
                              buttonItem.buttonText
                            );
                            return (
                              buttonText && (
                                <div
                                  key={indexButton}
                                  className={`${this.decorateCSS("button")} ${
                                    buttonItem.primary
                                      ? this.decorateCSS("primary-button")
                                      : ""
                                  }`}
                                >
                                  <ComposerLink path={buttonItem.buttonUrl}>
                                    <span className={this.decorateCSS("text")}>
                                      {buttonItem.buttonText}
                                    </span>
                                  </ComposerLink>
                                </div>
                              )
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                  {slides.length > 1 && (
                    <>
                      {" "}
                      <ComposerIcon
                        name={this.getPropValue("prevIcon")}
                        propsIcon={{
                          className: `${this.decorateCSS(
                            "arrow"
                          )} ${
                            !image ? this.decorateCSS("no-bg") : ""
                          } ${this.decorateCSS("prev-icon")}`,
                          onClick: () => {
                            this.getComponentState(
                              "slider-ref"
                            ).current.slickPrev();
                          },
                        }}
                      />
                      <ComposerIcon
                        name={this.getPropValue("nextIcon")}
                        propsIcon={{
                          className: `${this.decorateCSS(
                            "arrow"
                          )} ${!image ? this.decorateCSS(
                            "no-bg"
                          ):""} ${this.decorateCSS("next-icon")}`,
                          onClick: () => {
                            this.getComponentState(
                              "slider-ref"
                            ).current.slickNext();
                          },
                        }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default HeaderComponent14;
