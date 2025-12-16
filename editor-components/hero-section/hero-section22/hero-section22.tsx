import * as React from "react";
import styles from "./hero-section22.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderObject = {
  title: React.JSX.Element;
  right_image: TypeMediaInputValue;
  left_image: TypeMediaInputValue;
  button: INPUTS.CastedButton[];
};



class HeroSection22 extends BaseHeroSection {
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
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multicoloured Tie-dye Sweater",
            },
            {
              type: "media",
              key: "right_image",
              displayer: "Right Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664e?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              key: "left_image",
              displayer: "Left Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664d?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Black Crew Cut Dress in Cut Style",
            },
            {
              type: "media",
              key: "right_image",
              displayer: "Right Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7d1cf1798002cc82f40?alt=media",
              },
            },
            {
              type: "media",
              key: "left_image",
              displayer: "Left Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7a3cf1798002cc82f0f?alt=media",
              },
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Shirt Is a Staple for Man`s",
            },
            {
              type: "media",
              key: "right_image",
              displayer: "Right Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526d9cf1798002cc89a4b?alt=media",
              },
            },
            {
              type: "media",
              key: "left_image",
              displayer: "Left Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526f8cf1798002cc89a6d?alt=media",
              },
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "prev-button-icon",
      displayer: "Previous Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "HiArrowLongLeft",
      },
    });
    this.addProp({
      type: "media",
      key: "next-button-icon",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "HiArrowLongRight",
      },
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
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

  static getName(): string {
    return "Hero Section 22";
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
      autoplay: this.getPropValue("autoplay"),
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
                    return (
                      <div className={this.decorateCSS("sliders")} key={index}>
                        <div className={this.decorateCSS("slider")}>
                          {leftImageExist && (
                            <div className={this.decorateCSS("left-content")}>
                              <Base.Media value={item.left_image} className={`${this.decorateCSS("left-image")} ${animation && isActive ? this.decorateCSS("left-animation") : ""}  `} />
                            </div>
                          )}

                          <div
                            className={`${this.decorateCSS("middle-content")} ${!leftImageExist && this.decorateCSS("middle-content2")} ${(!leftImageExist && !rightImageExist) || (!leftImageExist && !this.getPropValue("dots")) && this.decorateCSS("middle-content3")}  ${
                              animation && isActive ? this.decorateCSS("mid-right-animation") : ""
                            }  `}
                          >
                            <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                              {hasDivider && <div className={this.decorateCSS("divider")} />}
                              {this.castToString(item.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}

                              <div className={this.decorateCSS("button-row")}>
                                {item.button.map((buttonItem: any, indexButton: number) => {
                                  const buttonText = this.castToString(buttonItem.text);
                                  return (
                                    buttonText && (
                                      <ComposerLink key={`hdr-22-${indexButton}`} path={buttonItem.url}>
                                        <Base.Button buttonType={buttonItem.type} className={this.decorateCSS("button")}>
                                          <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                        </Base.Button>
                                      </ComposerLink>
                                    )
                                  );
                                })}
                              </div>
                            </Base.VerticalContent>
                          </div>
                          {rightImageExist && (
                            <div className={`${this.decorateCSS("right-content")} ${animation && isActive ? this.decorateCSS("mid-right-animation") : ""}  `}>
                              <Base.Media value={item.right_image} className={this.decorateCSS("right-image")} />
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
                    <Base.Media value={this.getPropValue("prev-button-icon") as TypeMediaInputValue} className={this.decorateCSS("icon")} />
                  </button>

                  <button
                    className={this.decorateCSS("nav-buttons")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickNext();
                    }}
                  >
                    <Base.Media value={this.getPropValue("next-button-icon") as TypeMediaInputValue} className={this.decorateCSS("icon")} />
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

export default HeroSection22;

