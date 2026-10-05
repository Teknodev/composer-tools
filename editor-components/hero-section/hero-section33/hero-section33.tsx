import * as React from "react";
import styles from "./hero-section33.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";

type Slide = {
  centered: boolean;
  media: TypeMediaInputValue;
  logo: TypeMediaInputValue;
  overlay: boolean;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class HeroSection33 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "rotate",
      displayer: "Rotate Animation",
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
              type: "media",
              key: "media",
              displayer: "Background Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7a?alt=media&timestamp=1719502103059",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
              },
              additionalParams: { availableTypes: ["image", "icon"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
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
              value: `<p><span style="white-space: pre-wrap;">Cloria</span></p><p><span style="white-space: pre-wrap;">by Wood</span></p>`,
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Shop Now", "", null, null, "Link"),
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
              type: "media",
              key: "media",
              displayer: "Background Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7b?alt=media&timestamp=1719502103059",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
              },
              additionalParams: { availableTypes: ["image", "icon"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
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
              value: "Kento - Chair",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Shop Now", "", null, null, "Link"),
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
              type: "media",
              key: "media",
              displayer: "Background Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7c?alt=media&timestamp=1719502103058",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c89648e0b009002c3725f0?alt=media",
              },
              additionalParams: { availableTypes: ["image", "icon"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
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
              value: `<p><span style="white-space: pre-wrap;">Wooden </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Floor Lamp</span></p>`,
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Shop Now", "", null, null, "Link"),
              ],
            },
          ],
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("activeSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 33";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  render() {
    const slides = this.castToObject<Slide[]>("slider") || [];
    const activeSlide: number = this.getComponentState("activeSlide");
    const currentSlideHasMedia = this.hasMedia(slides[activeSlide]?.media);

    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      accessibility: false,
      beforeChange: (_current: number, next: number) => {
        if (slides.length > 0) {
          this.setComponentState("activeSlide", next);
        }
      },
      dotsClass: this.decorateCSS("dotContainer"),
      appendDots: (dots: any[]) => (
          <div className={this.decorateCSS("dotContainer")}>
            {dots.map((dot, index) => (
              <div
                key={index}
                className={`
                ${this.decorateCSS("dotBullet")} 
              ${activeSlide == index && this.decorateCSS("withCenterDot")}
              ${!currentSlideHasMedia ? this.decorateCSS("primaryBackground") : ""}
              `}
              >
                <div className={this.decorateCSS("dot")}>{dot}</div>
              </div>
            ))}
          </div>
      ),
    };

    const animation: boolean = this.getPropValue("animation");
    const rotateActive: boolean = this.getPropValue("rotate");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides.length > 0 && (
            <ComposerSlider
              {...settings}
              ref={this.getComponentState("slider-ref")}
              className={this.decorateCSS("carousel")}
            >
              {slides.map((item: Slide, index: number) => {
                const buttons = (item.buttons || []).filter((button) => this.castToString(button.text));
                const hasItemMedia = this.hasMedia(item.media);
                const hasLogo = this.hasMedia(item.logo);
                const isSubtitleExist = this.castToString(item.subtitle);
                const titleExist = this.castToString(item.title);
                const isDescriptionExist = this.castToString(item.description);
                const hasContent = hasLogo || isSubtitleExist || titleExist || isDescriptionExist || buttons.length > 0;
                const blackColorClass = hasItemMedia ? this.decorateCSS("blackColor") : "";

                if (!hasContent && !hasItemMedia) return null;
                return (
                  <div className={this.decorateCSS("content")} key={index}>
                    {hasItemMedia && (
                      <div className={this.decorateCSS("background-wrapper")}>
                        <Base.Media value={item.media} className={this.decorateCSS("background-image")} />
                        {item.overlay && <div className={this.decorateCSS("background-overlay")} />}
                      </div>
                    )}
                    {hasContent && (
                      <div className={this.decorateCSS("carousel-content-div")}>
                        <Base.VerticalContent
                          className={`${this.decorateCSS("carousel-content")} ${animation ? this.decorateCSS("with-transition") : ""} ${activeSlide === index ? this.decorateCSS("fix-location") : ""} ${item.centered ? this.decorateCSS("centered") : ""}`}
                        >
                          {hasLogo && (() => {
                            const isIcon = item.logo?.type === "icon";
                            return (
                              <div className={`${this.decorateCSS(isIcon ? "icon-wrapper" : "circle")} ${!isIcon && rotateActive ? this.decorateCSS("rotate") : ""}`}>
                                <Base.Media
                                  value={item.logo}
                                  className={`${this.decorateCSS(isIcon ? "icon-media" : "circle-image")} ${blackColorClass}`}
                                />
                              </div>
                            );
                          })()}
                          {isSubtitleExist && (
                            <Base.SectionSubTitle className={`${this.decorateCSS("content-subtitle")} ${blackColorClass} ${hasItemMedia ? this.decorateCSS("subtitle-has-bg") : ""}`}>
                              {item.subtitle}
                            </Base.SectionSubTitle>
                          )}
                          {titleExist && (
                            <Base.SectionTitle className={`${this.decorateCSS("content-title")} ${blackColorClass}`}>{item.title}</Base.SectionTitle>
                          )}
                          {isDescriptionExist && (
                            <Base.SectionDescription className={`${this.decorateCSS("content-description")} ${blackColorClass}`}>
                              {item.description}
                            </Base.SectionDescription>
                          )}
                          {buttons.length > 0 && (
                            <div className={this.decorateCSS("buttons-div")}>
                              {buttons.map((button: INPUTS.CastedButton, buttonIndex: number) => (
                                <ComposerLink key={buttonIndex} path={button.url}>
                                  <Base.Button buttonType={button.type} className={`${this.decorateCSS("button")} ${blackColorClass}`}>
                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                  </Base.Button>
                                </ComposerLink>
                              ))}
                            </div>
                          )}
                        </Base.VerticalContent>
                      </div>
                    )}
                  </div>
                );
              })}
            </ComposerSlider>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection33;

