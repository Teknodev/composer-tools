import * as React from "react";
import styles from "./header22.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Base } from "../../../composer-base-components/base/base";

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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664e?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              key: "left_image",
              displayer: "Left Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664d?alt=media&timestamp=1719483639150",
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
      displayer: "Line",
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
      fade: slider.length > 1,
      duration: 1000,
      dotsClass: this.decorateCSS("dots"),
      arrows: false,
      infinite: slider.length > 1,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };
    const elements = document.getElementsByClassName(this.decorateCSS("sliders"));
    const items = [];

    for (let index = 0; index < elements.length; index++) {
      items.push(elements.item(index));
    }

    const minHeight = items.sort((a, b) => {
      return b.clientHeight - a.clientHeight;
    })[0]?.clientHeight;

    if (!isSliderExist) return <></>;
    return (
      <>
        {isSliderExist && (
          <Base.Container className={this.decorateCSS("container")}>
            <div className={this.decorateCSS("max-content")}>
              <div className={this.decorateCSS("slider-parent")} style={{ minHeight: minHeight + "px" }}>
                <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                  {slider.map((item: SliderObject, index: number) => {
                    const isActive = this.getComponentState("activeSlide") === index;
                    const leftImageExist = item.left_image;
                    const rightImageExist = item.right_image;
                    const middleClass = leftImageExist ? "middle-content" : "middle-content2";
                    const middleClassWithPadding = (!leftImageExist && !rightImageExist) || (!leftImageExist && !this.getPropValue("dots")) ? "middle-content3" : middleClass;
                    return (
                      <div className={this.decorateCSS("sliders")} key={index}>
                        <div className={this.decorateCSS("slider")}>
                          {leftImageExist && (
                            <div className={this.decorateCSS("left-content")}>
                              <img className={`${this.decorateCSS("left-image")} ${animation && isActive ? this.decorateCSS("left-animation") : ""}  `} src={item.left_image} alt="" />
                            </div>
                          )}

                          <div
                            className={`${this.decorateCSS(middleClassWithPadding)}
                          } ${animation && isActive ? this.decorateCSS("mid-right-animation") : ""}  `}
                          >
                            <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                              {hasDivider && <div className={this.decorateCSS("divider")} />}
                              {this.castToString(item.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}

                              {item.button.map((buttonItem: any, indexButton: number) => {
                                const buttonText = this.castToString(buttonItem.buttonText);
                                if (buttonText) {
                                  return (
                                    <div className={this.decorateCSS("link-button-container")}>
                                      <ComposerLink className={this.decorateCSS("link-button")} key={`hdr-22-${indexButton}`} path={buttonItem.link}>
                                        <button className={this.decorateCSS("button")}>{buttonItem.buttonText}</button>
                                      </ComposerLink>
                                    </div>
                                  );
                                }
                              })}
                            </Base.VerticalContent>
                          </div>
                          {rightImageExist && (
                            <div className={`${this.decorateCSS("right-content")} ${animation && isActive ? this.decorateCSS("mid-right-animation") : ""}  `}>
                              <img className={this.decorateCSS("right-image")} src={item.right_image} alt="" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </ComposerSlider>
              </div>
              {slider.length > 1 && (
                <div className={this.decorateCSS("nav-controls")}>
                  <button
                    className={this.decorateCSS("nav-buttons")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickPrev();
                    }}
                  >
                    <ComposerIcon name={this.getPropValue("prev-button-icon")} propsIcon={{ className: `${this.decorateCSS("icon")}` }} />
                  </button>

                  <button
                    className={this.decorateCSS("nav-buttons")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickNext();
                    }}
                  >
                    <ComposerIcon name={this.getPropValue("next-button-icon")} propsIcon={{ className: `${this.decorateCSS("icon")}` }} />
                  </button>
                </div>
              )}
            </div>
          </Base.Container>
        )}
      </>
    );
  }
}

export default HeaderComponent22;
