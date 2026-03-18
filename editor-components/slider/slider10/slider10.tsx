import * as React from "react";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import styles from "./slider10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";

type SliderItem = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  index: number;
};

type FeaturedItem = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  media: TypeMediaInputValue;
  link: string;
};

class Slider10 extends BaseSlider {
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
              },
            },
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
              },
            },
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
              },
            },
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb92dba6bbe002b6458a2?alt=media",
              },
            },
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb939ba6bbe002b6458b4?alt=media",
              },
            },
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
              value: "",
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
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb949ba6bbe002b6458c8?alt=media",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "featured-items",
      displayer: "Featured Items",
      additionalParams: {
        maxElementCount: 3,
      },
      value: [
        {
          type: "object",
          key: "featured-item",
          displayer: "Featured Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multi-Family Housing",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "The Oaks",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "featured-item",
          displayer: "Featured Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Arches",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Modern House",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "featured-item",
          displayer: "Featured Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dream House",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Modern Farmhouse",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "previousButtonIcon",
      displayer: "Previous Slide Button Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowBack",
      },
    });
    this.addProp({
      type: "media",
      key: "nextButtonIcon",
      displayer: "Next Slide Button Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowForward",
      },
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
      dots: false,
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
    this.setComponentState("active", 0);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "hoverAnimation",
      displayer: "Featured Items Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Text Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Slider 10";
  }

  render() {
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const settings = {
      ...sliderSettings,
      arrows: false,
      beforeChange: (_: number, next: number) => {
        this.setComponentState("active", next);
      },
    };

    const slides = this.castToObject<SliderItem[]>("cards");
    const featuredItems = this.castToObject<FeaturedItem[]>("featured-items");
    const sliderRef = this.getComponentState("slider-ref");
    const overlay = this.getPropValue("overlay");
    const hoverAnimation = this.getPropValue("hoverAnimation");
    const textAnimation = this.getPropValue("textAnimation");
    const prevIcon = this.getPropValue("previousButtonIcon");
    const nextIcon = this.getPropValue("nextButtonIcon");
    const activeIndex = this.getComponentState("active");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-wrapper")}>
            {slides?.length > 0 && (
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                {slides.map((item, index) => {
                  const mediaValue = item.media?.type === "video" ? {
                    ...item.media,
                    settings: {
                      autoplay: true,
                      loop: true,
                      muted: true,
                      controls: false
                    }
                  } : item.media;

                  return (
                    <div className={this.decorateCSS("card")} key={index}>
                      <div className={this.decorateCSS("slider-item")}>
                        {item.media && (<Base.Media value={mediaValue} className={this.decorateCSS("slider-item-media")} />)}
                        <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${!!item.media && this.decorateCSS("has-media")}`}>
                          {this.castToString(item.subtitle) && (
                            <div className={this.decorateCSS("subtitle-wrapper")}>
                              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${textAnimation && activeIndex === index ? this.decorateCSS("imageSubtitleAnimation") : ""}`}>
                                {item.subtitle}
                              </Base.SectionSubTitle>
                            </div>
                          )}
                          {this.castToString(item.title) && (
                            <div className={this.decorateCSS("title-wrapper")}>
                              <Base.SectionTitle className={`${this.decorateCSS("title")} ${textAnimation && activeIndex === index ? this.decorateCSS("imageTitleAnimation") : ""}`}>
                                {item.title}
                              </Base.SectionTitle>
                            </div>
                          )}
                          {this.castToString(item.description) && (
                            <div className={this.decorateCSS("description-wrapper")}>
                              <Base.SectionDescription className={`${this.decorateCSS("description")} ${textAnimation && activeIndex === index ? this.decorateCSS("imageDescriptionAnimation") : ""}`}>
                                {item.description}
                              </Base.SectionDescription>
                            </div>
                          )}
                        </Base.VerticalContent>
                        {overlay && <div className={this.decorateCSS("slider-item-overlay")} />}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
            {(featuredItems?.length > 0 || nextIcon || prevIcon) && (
              <div className={this.decorateCSS("footer-max-content")}>
                <div className={this.decorateCSS("slider-footer")}>
                  {featuredItems.length > 0 && (
                    <div className={this.decorateCSS("slider-footer-items")}>
                      {featuredItems.map((item, index) => {
                        return (
                          <div key={index} className={`${this.decorateCSS("slider-footer-item")} ${(!item.media || (!item.title && !item.subtitle)) && this.decorateCSS("half-width")}`}>
                            {item.media && (
                              <Base.Media className={` ${this.decorateCSS("slider-footer-item-media")} ${hoverAnimation && this.decorateCSS("hover-animation")}`} value={item.media} />
                            )}
                            {(item.title || item.subtitle) && (
                              <div className={this.decorateCSS("slider-footer-item-body")}>
                                {item.title &&
                                  (!item.link ? (
                                    <Base.P className={this.decorateCSS("slider-footer-item-title")}>{item.title}</Base.P>
                                  ) : (
                                    <ComposerLink path={item.link}>
                                      <Base.P className={this.decorateCSS("slider-footer-item-title")}>{item.title}</Base.P>
                                    </ComposerLink>
                                  ))}
                                {item.subtitle && <Base.P className={this.decorateCSS("slider-footer-item-subtitle")}>{item.subtitle}</Base.P>}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {(prevIcon || nextIcon) && sliderSettings.arrows && (
                    <div className={this.decorateCSS("slider-buttons")}>
                      {prevIcon && (
                        <div className={this.decorateCSS("slider-button")} onClick={() => { sliderRef.current.slickPrev(); }}>
                          <Base.Media value={prevIcon} className={this.decorateCSS("slider-button-media")} />
                        </div>
                      )}
                      {nextIcon && (
                        <div className={this.decorateCSS("slider-button")} onClick={() => { sliderRef.current.slickNext(); }}>
                          <Base.Media value={nextIcon} className={this.decorateCSS("slider-button-media")} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider10;