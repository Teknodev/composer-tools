import * as React from "react";
import styles from "./header22.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import Slider from "react-slick";

type SliderObject = {
  title: JSX.Element;
  right_image: string;
  left_image: string;
  button: ButtonObject[];
};

type ButtonObject = {
  buttonText: JSX.Element;
  link: string;
};

class HeaderComponent22 extends BaseHeader {
  private sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multicoloured Tie-dye Sweater",
            },
            {
              type: "image",
              key: "right_image",
              displayer: "Right Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664e?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              key: "left_image",
              displayer: "Left Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664d?alt=media&timestamp=1719483639150",
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonObject",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "SHOP NOW",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
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
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Black Crew Cut Dress in Cut Style",
            },
            {
              type: "image",
              key: "right_image",
              displayer: "Right Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7d1cf1798002cc82f40?alt=media",
            },
            {
              type: "image",
              key: "left_image",
              displayer: "Left Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7a3cf1798002cc82f0f?alt=media",
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonObject",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "SHOP NOW",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
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
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Shirt Is a Staple for Man`s",
            },
            {
              type: "image",
              key: "right_image",
              displayer: "Right Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526d9cf1798002cc89a4b?alt=media",
            },
            {
              type: "image",
              key: "left_image",
              displayer: "Left Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526f8cf1798002cc89a6d?alt=media",
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonObject",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "SHOP NOW",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
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
    this.addProp({
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "HiArrowLongLeft",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "HiArrowLongRight",
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Content Animation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "dots",
      displayer: "Show Dots",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  getName(): string {
    return "Header-22";
  }

  handlePrevClick = () => {
    const slider = this.sliderRef.current;
    if (slider) {
      this.setComponentState("old", this.getComponentState("next"));
      slider.slickPrev();
    }
  };

  handleNextClick = () => {
    const slider = this.sliderRef.current;
    if (slider) {
      this.setComponentState("old", this.getComponentState("next"));
      slider.slickNext();
    }
  };

  render() {
    const slider = this.castToObject<SliderObject[]>("slider");
    const animation = this.getPropValue("animation");
    const hasDivider = this.getPropValue("divider");
    const dots = this.getPropValue("dots");
    const isSliderExist = this.castToObject<SliderObject[]>("slider").length > 0;
    const settings = {
      dots: dots,
      fade: true,
      duration: 1000,
      dotsClass: this.decorateCSS("dots"),
      arrows: false,
      infinite: slider.length > 1,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };

    return (
      <>
        {isSliderExist && (
          <div className={this.decorateCSS("container")}>
            <div className={this.decorateCSS("max-content")}>
              <Slider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={this.getComponentState("slider-ref")}>
                {slider.map((item: SliderObject, index: number) => {
                  const isActive = this.getComponentState("activeSlide") === index;
                  const leftImageExist = item.left_image;
                  const rightImageExist = item.right_image;
                  const middleClass = leftImageExist ? "middle-content" : "middle-content2";
                  const middleClassWithPadding = !leftImageExist && !dots ? "middle-content3" : middleClass;
                  return (
                    <div
                      className={this.decorateCSS("sliders")}
                      key={index}>
                      <div className={this.decorateCSS("slider")}>
                        {/* //! LEFT IMAGE */}
                        {leftImageExist && (
                          <div className={this.decorateCSS("left-content")}>
                            <img
                              className={`${this.decorateCSS("left-image")} ${animation && isActive ? this.decorateCSS("left-animation") : ""}  `}
                              src={item.left_image}
                              alt=""
                            />
                          </div>
                        )}

                        {/* //! MIDDLE CONTENT */}

                        <div
                          className={`${this.decorateCSS(middleClassWithPadding)}
                          } ${animation && isActive ? this.decorateCSS("mid-right-animation") : ""}  `}>
                          {hasDivider && <div className={this.decorateCSS("divider")} />}
                          {this.castToString(item.title) && <h1 className={this.decorateCSS("title")}>{item.title}</h1>}

                          {item.button.map((buttonItem: any, indexButton: number) => {
                            const buttonText = this.castToString(buttonItem.buttonText);
                            if (buttonText) {
                              return (
                                <div className={this.decorateCSS("link-button-container")}>
                                  <ComposerLink
                                    className={this.decorateCSS("link-button")}
                                    key={`hdr-22-${indexButton}`}
                                    path={buttonItem.link}>
                                    <button className={this.decorateCSS("button")}>{buttonText}</button>
                                  </ComposerLink>
                                </div>
                              );
                            }
                          })}
                        </div>

                        {/* //! RIGHT IMAGE */}
                        {rightImageExist && (
                          <div
                            className={`${this.decorateCSS("right-content")} ${
                              animation && isActive ? this.decorateCSS("mid-right-animation") : ""
                            }  `}>
                            <img
                              className={this.decorateCSS("right-image")}
                              src={item.right_image}
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Slider>

              {/* //! NAV CONTROLS */}
              {slider.length > 1 && (
                <div className={this.decorateCSS("nav-controls")}>
                  <button
                    className={this.decorateCSS("nav-buttons")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickPrev();
                    }}>
                    <ComposerIcon
                      name={this.getPropValue("prev-button-icon")}
                      propsIcon={{ className: `${this.decorateCSS("Icon")}` }}
                    />
                  </button>

                  <button
                    className={this.decorateCSS("nav-buttons")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickNext();
                    }}>
                    <ComposerIcon
                      name={this.getPropValue("next-button-icon")}
                      propsIcon={{ className: `${this.decorateCSS("Icon")}` }}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default HeaderComponent22;
