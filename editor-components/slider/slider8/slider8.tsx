import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  image: string;
  backgroundImage: string;
  imageTitle: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [INPUTS.BUTTON("buttons", "Button", "VIEW PROJECT", "", null, null, "White")],
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
              key: "imageTitle",
              displayer: "Image Title",
              value: "Multi-Family Housing",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [INPUTS.BUTTON("buttons", "Button", "VIEW PROJECT", "", null, null, "White")],
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
              key: "imageTitle",
              displayer: "Image Title",
              value: "The Lighthouse",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [INPUTS.BUTTON("buttons", "Button", "VIEW PROJECT", "", null, null, "White")],
            },
          ],
        },
      ],
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
      displayer: "Line",
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

  static getName(): string {
    return "Slider 8";
  }

  render() {
    const foregroundOverlay = this.getPropValue("foregroundOverlay");
    const overlay = this.getPropValue("overlay");
    const linesContainer = this.getPropValue("lines-container");
    const animation = this.getPropValue("animation");

    const leftNavButton = this.getPropValue("leftNavButton");
    const rightNavButton = this.getPropValue("rightNavButton");

    const cards = this.castToObject<Card[]>("slider");
    const activeSlide = this.getComponentState("activeSlide");
    const anyImagesExist = cards[activeSlide]?.image || cards[activeSlide]?.backgroundImage;

    const alignmentValue = Base.getContentAlignment();

    const settings = {
      fade: true,
      duration: 1500,
      arrows: false,
      dots: false,
      infinite: cards.length > 1,
      speed: 3000,
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
    const shouldDisplayOverlay = (index: number): boolean => {
      return !!cards[index].backgroundImage && overlay;
    };
    const shouldDisplayForegroundOverlay = (index: number): boolean => {
      return !!cards[index].image && foregroundOverlay;
    };

    return (
      <Base.Container isFull={anyImagesExist ? true : false} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            {cards?.length && cards?.length > 0 && (
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                {cards.map((item: any, index: number) => {
                  const buttons = item.buttons;

                  console.log(buttons, "buttons");
                  const titleExists = this.castToString(item.imageTitle);
                  const render = titleExists || buttons?.length > 0 || item.image;
                  if (!render) return null;
                  return (
                    <div className={this.decorateCSS("slider-inner-div")} key={`sld-8-${index}`}>
                      <div
                        className={`${this.decorateCSS("content")} ${anyImagesExist === "" ? this.decorateCSS("no-img") : ""}`}
                        style={{
                          backgroundImage: `url("${item.backgroundImage}")`,
                        }}
                      >
                        {shouldDisplayOverlay(index) === true && <div className={this.decorateCSS("overlay")}></div>}
                        <div
                          className={`
                          ${this.decorateCSS("content-div")}
                             ${this.getComponentState("activeSlide") === index ? this.decorateCSS("fix-location") : ""}
                          `}
                        >
                          {linesContainer && (
                            <div className={this.decorateCSS(anyImagesExist ? "lines-container" : "lines-container2")}>
                              <div className={this.decorateCSS("line-1")}></div>
                              <div className={this.decorateCSS("line-2")}></div>
                            </div>
                          )}

                          {titleExists && (
                            <div
                              className={`${this.decorateCSS("title-wrapper")}
                            ${alignmentValue === "center" && this.decorateCSS("center")}`}
                            >
                              <Base.SectionTitle
                                className={`${this.decorateCSS("title")} 
                                 ${this.decorateCSS(anyImagesExist && "imageTitle")} 
                                ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageTitleAnimation") : ""}`}
                              >
                                {item.imageTitle}
                              </Base.SectionTitle>
                            </div>
                          )}

                          {buttons?.length > 0 && (
                            <div className={`${this.decorateCSS(anyImagesExist ? "buttons" : "buttons2")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}>
                              {buttons.map((buttonItem: any, buttonIndex: number) => {
                                return (
                                  this.castToString(buttonItem.text) && (
                                    <ComposerLink key={`dw-7-btn-left ${buttonIndex}`} path={buttonItem.url}>
                                      <Base.Button
                                        buttonType={buttonItem.type}
                                        className={`${item.backgroundImage && item.image && this.decorateCSS("button")}
                                        ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}
                                      >
                                        {buttonItem.text}
                                      </Base.Button>
                                    </ComposerLink>
                                  )
                                );
                              })}
                            </div>
                          )}
                          {(leftNavButton || rightNavButton) && (
                            <div className={this.decorateCSS(anyImagesExist ? "nav-buttons" : "nav-buttons2")}>
                              {leftNavButton && cards.length > 1 && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickPrev();
                                  }}
                                >
                                  <Base.Icon
                                    name={leftNavButton}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                    }}
                                  />
                                </button>
                              )}
                              {rightNavButton && cards.length > 1 && (
                                <button
                                  className={this.decorateCSS("nav-button")}
                                  onClick={() => {
                                    this.getComponentState("slider-ref").current.slickNext();
                                  }}
                                >
                                  <Base.Icon
                                    name={rightNavButton}
                                    propsIcon={{
                                      className: `${this.decorateCSS("Icon")}`,
                                    }}
                                  />
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={this.decorateCSS("image")} style={{ backgroundImage: `url(${item.image})` }}>
                        {shouldDisplayForegroundOverlay(index) === true && <div className={this.decorateCSS("image-overlay")}></div>}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
          {cards.length > 1 && (
            <ul className={`${this.decorateCSS(anyImagesExist ? "dots" : "dots-2")}`}>
              {cards.map((_, index) => (
                <li key={`dot-${index}`} className={`${this.decorateCSS("slick")} ${this.getComponentState("activeSlide") === index && this.decorateCSS("slick-active")}`} onClick={() => this.getComponentState("slider-ref").current.slickGoTo(index)}>
                  <button />
                </li>
              ))}
            </ul>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider8;
