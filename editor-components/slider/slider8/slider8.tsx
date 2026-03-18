import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  media: TypeMediaInputValue;
  backgroundMedia: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d222f8a5b002ce6803f?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multi-Family Housing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d4f2f8a5b002ce68065?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Lighthouse",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a26d782f8a5b002ce68093?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Arches",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a48139771c03002ccb1313?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a48139771c03002ccb1313?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Riverside Residence",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a4818b771c03002ccb1337?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a4818b771c03002ccb1337?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dream House",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a481b9771c03002ccb13b1?alt=media",
              },
            },
            {
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69a481b9771c03002ccb13b1?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "VIEW PROJECT", "", "MdArrowOutward", null, "White"),
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "leftNavButton",
      displayer: "Left Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeftLong",
      },
    });

    this.addProp({
      type: "media",
      key: "rightNavButton",
      displayer: "Right Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowRightLong",
      },
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
      displayer: "Animation",
      value: true,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    }));

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
    const cards = this.castToObject<Card[]>("cards");
    const activeSlide = this.getComponentState("activeSlide");
    const anyImagesExist = cards[activeSlide]?.media || cards[activeSlide]?.backgroundMedia;
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      arrows: false,
      fade: true,
      duration: 1500,
      infinite: cards.length > 1,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };

    const shouldDisplayOverlay = (index: number): boolean => {
      return !!cards[index].backgroundMedia && overlay;
    };

    const shouldDisplayForegroundOverlay = (index: number): boolean => {
      return !!cards[index].media && foregroundOverlay;
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${anyImagesExist && this.decorateCSS("has-background")}`}>
          <div className={this.decorateCSS("slider-parent")}>
            {cards?.length && cards?.length > 0 && (
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                {cards.map((item: Card, index: number) => {
                  return (this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description) || this.castToString(item.button?.text) || item.media) && (
                    <div className={`${this.decorateCSS("slider-inner-div")} ${anyImagesExist && this.decorateCSS("has-background")}`} key={`sld-8-${index}`}>
                      <div className={`${this.decorateCSS("content")} ${!anyImagesExist && this.decorateCSS("no-image")}`}>
                        {item.backgroundMedia && (<Base.Media value={item.backgroundMedia} className={this.decorateCSS("bg-image")} />)}
                        {shouldDisplayOverlay(index) === true && <div className={this.decorateCSS("overlay")}></div>}
                        <div className={`${this.decorateCSS("content-div")} ${this.getComponentState("activeSlide") === index ? this.decorateCSS("fix-location") : ""}`}>
                          {linesContainer && (
                            <div className={this.decorateCSS("lines-container")}>
                              <div className={this.decorateCSS("line-1")}></div>
                              <div className={this.decorateCSS("line-2")}></div>
                            </div>
                          )}
                          {this.castToString(item.subtitle) && (
                            <div className={this.decorateCSS("subtitle-wrapper")}>
                              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageSubtitleAnimation") : ""}`}>
                                {item.subtitle}
                              </Base.SectionSubTitle>
                            </div>
                          )}
                          {this.castToString(item.title) && (
                            <div className={this.decorateCSS("title-wrapper")}>
                              <Base.SectionTitle className={`${this.decorateCSS("title")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageTitleAnimation") : ""}`}>
                                {item.title}
                              </Base.SectionTitle>
                            </div>
                          )}
                          {this.castToString(item.description) && (
                            <div className={this.decorateCSS("description-wrapper")}>
                              <Base.SectionDescription className={`${this.decorateCSS("description")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("imageDescriptionAnimation") : ""}`}>
                                {item.description}
                              </Base.SectionDescription>
                            </div>
                          )}
                          {this.castToString(item.button?.text) && (
                            <div className={`${this.decorateCSS("buttons")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`}>
                              <ComposerLink path={item.button.url}>
                                <Base.Button buttonType={item.button.type} className={`${this.decorateCSS("button")} ${animation && this.getComponentState("activeSlide") === index ? this.decorateCSS("animateButtons") : ""}`} >
                                  <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                                  {item.button.icon && (item.button.icon)?.name && (<Base.Media value={item.button.icon} className={this.decorateCSS("button-icon")} />)}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          )}
                          {(leftNavButton || rightNavButton) && sliderSettings.arrows && (
                            <div className={this.decorateCSS("nav-buttons")}>
                              {leftNavButton && cards.length > 1 && (
                                <Base.Button type="Bare" className={this.decorateCSS("nav-button")} onClick={() => { this.getComponentState("slider-ref").current.slickPrev(); }}>
                                  <Base.Media value={leftNavButton} className={`${this.decorateCSS("nav-icon")} ${leftNavButton.type === "image" && this.decorateCSS("has-image")}`} />
                                </Base.Button>
                              )}
                              {rightNavButton && cards.length > 1 && (
                                <Base.Button type="Bare" className={this.decorateCSS("nav-button")} onClick={() => { this.getComponentState("slider-ref").current.slickNext(); }}>
                                  <Base.Media value={rightNavButton} className={`${this.decorateCSS("nav-icon")} ${rightNavButton.type === "image" && this.decorateCSS("has-image")}`} />
                                </Base.Button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={this.decorateCSS("image")}>
                        {item.media && (<Base.Media value={item.media} className={this.decorateCSS("bg-image")} />)}
                        {shouldDisplayForegroundOverlay(index) === true && <div className={this.decorateCSS("image-overlay")}></div>}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
          {cards.length > 1 && sliderSettings.dots && (
            <div className={this.decorateCSS("dots")}>
              {cards.map((_, index) => (
                <div key={`dot-${index}`} className={`${this.decorateCSS("dot-item")} ${this.getComponentState("activeSlide") === index && this.decorateCSS("slick-active")}`} onClick={() => this.getComponentState("slider-ref").current.slickGoTo(index)}>
                  <button className={this.decorateCSS("dot-button")} />
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider8;