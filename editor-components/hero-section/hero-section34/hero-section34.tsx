import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section34.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Slider {
  logo: TypeMediaInputValue;
  media: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  overlay?: boolean;
}

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

const slide = (mediaUrl: string, title: string, buttonText: string): TypeUsableComponentProps => ({
  type: "object",
  key: "slide",
  displayer: "Slide",
  value: [
    {
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "" },
    },
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: { type: "image", url: mediaUrl },
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
      value: title,
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
      value: [INPUTS.BUTTON("button", "Button", buttonText, "", null, null, "White")],
    },
  ],
});

class HeroSection34 extends BaseHeroSection {
  transitionTimeouts: ReturnType<typeof setTimeout>[] = [];

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevIcon",
          displayer: "Previous Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: { type: "icon", name: "GrFormPrevious" },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: { type: "icon", name: "GrFormNext" },
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cba?alt=media&timestamp=1719483639151",
          "Premium Quality Design",
          "PURCHASE INTACT"
        ),
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cb9?alt=media&timestamp=1719483639151",
          "Premium Quality Jobs",
          "CONTACT US"
        ),
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693bfee3875e15002c62e85e?alt=media",
          "Premium Quality Clothes",
          "BUY"
        ),
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("active-index", 0);
    this.setComponentState("overlay-active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("slideStatus", "idle");
    this.setComponentState("slide-direction", "left");
    this.setComponentState("contentAnimationClass", "animate__fadeInUp");
  }

  static getName(): string {
    return "Hero Section 34";
  }

  componentWillUnmount() {
    this.transitionTimeouts.forEach((timeout) => clearTimeout(timeout));
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  later(callback: () => void, ms: number) {
    this.transitionTimeouts.push(setTimeout(callback, ms));
  }

  handleBeforeChange(current: number, next: number, slideCount: number, speed: number) {
    if (current === next) return;
    const animation = this.getPropValue("animation");
    this.transitionTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.transitionTimeouts = [];

    if (!animation) {
      this.setComponentState("overlay-active-index", next);
      this.setComponentState("active-index", next);
      this.setComponentState("slideStatus", "idle");
      return;
    }

    const isForward = next === (current + 1) % slideCount || (next > current && !(current === 0 && next === slideCount - 1));
    this.setComponentState("contentAnimationClass", "animate__fadeOut");
    this.setComponentState("overlay-active-index", next);
    this.setComponentState("slide-direction", isForward ? "right" : "left");
    this.later(() => {
      this.setComponentState("slideStatus", "sliding");
      this.setComponentState("contentAnimationClass", "animate__fadeInUp");
    }, 10);
    this.later(() => {
      this.setComponentState("active-index", next);
      this.setComponentState("slideStatus", "ended");
    }, speed);
    this.later(() => {
      this.setComponentState("slideStatus", "idle");
    }, speed + 1000);
  }

  render() {
    const slides = this.castToObject<Slider[]>("slider");
    const animation = this.getPropValue("animation");
    const activeIndex = this.getComponentState("active-index");
    const overlayActiveIndex = this.getComponentState("overlay-active-index");
    const activeSlide = slides[activeIndex];
    const overlaySlide = slides[overlayActiveIndex];
    const slideStatus = this.getComponentState("slideStatus");
    const slideDirection = this.getComponentState("slide-direction");
    const sliderRef = this.getComponentState("slider-ref");
    const arrows = this.castToObject<Arrows>("arrows");
    const hasPrevIcon = this.hasMedia(arrows?.prevIcon);
    const hasNextIcon = this.hasMedia(arrows?.nextIcon);
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const speed = sliderSettings.speed ?? 800;

    const settings = {
      ...sliderSettings,
      arrows: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: this.decorateCSS("dots"),
      customPaging: () => <div className={this.decorateCSS("dot")} />,
      beforeChange: (current: number, next: number) => this.handleBeforeChange(current, next, slides.length, speed),
    };

    const statusClass =
      slideStatus === "sliding"
        ? this.decorateCSS("active")
        : slideStatus === "ended"
        ? this.decorateCSS("close")
        : this.decorateCSS("idle");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!this.hasMedia(activeSlide?.media) ? this.decorateCSS("no-image") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-container")}>
            {animation && (
              <div className={`${this.decorateCSS("overlay")} ${this.decorateCSS(`overlay-${slideDirection}`)} ${statusClass}`}>
                <div className={this.decorateCSS("overlay-image")}>
                  {this.hasMedia(overlaySlide?.media) && <Base.Media className={this.decorateCSS("image")} value={overlaySlide.media} />}
                </div>
              </div>
            )}

            {slides.length > 0 && (
              <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider")}>
                {slides.map((item: Slider, idx: number) => (
                  <div key={idx} className={this.decorateCSS("slide")}>
                    {this.hasMedia(item.media) && <Base.Media value={item.media} className={this.decorateCSS("image")} />}
                    {this.hasMedia(item.media) && item.overlay && <div className={this.decorateCSS("media-overlay")} />}
                  </div>
                ))}
              </ComposerSlider>
            )}
          </div>

          <div className={`${this.decorateCSS("contentContainer")} ${animation ? `animate__animated ${this.getComponentState("contentAnimationClass")}` : ""}`}>
            {slides.map((item: Slider, idx: number) => {
              const hasItemMedia = this.hasMedia(item.media);
              const hasLogo = this.hasMedia(item.logo);
              const buttons = (item.buttons || []).filter((button) => this.castToString(button.text));
              const hasContent =
                hasLogo ||
                this.castToString(item.subtitle) ||
                this.castToString(item.title) ||
                this.castToString(item.description) ||
                buttons.length > 0;
              if (!hasContent) return null;
              return (
                <Base.MaxContent key={idx} className={this.decorateCSS("content")} style={{ display: overlayActiveIndex === idx ? "block" : "none" }}>
                  <Base.VerticalContent data-has-image={hasItemMedia ? "true" : "false"} className={this.decorateCSS("text-content")}>
                    {hasLogo && <Base.Media data-has-image={hasItemMedia ? "true" : "false"} value={item.logo} className={this.decorateCSS("logo")} />}
                    {this.castToString(item.subtitle) && (
                      <Base.SectionSubTitle data-has-image={hasItemMedia ? "true" : "false"} className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {this.castToString(item.title) && (
                      <Base.SectionTitle data-has-image={hasItemMedia ? "true" : "false"} className={this.decorateCSS("title")}>
                        {item.title}
                      </Base.SectionTitle>
                    )}
                    {this.castToString(item.description) && (
                      <Base.SectionDescription data-has-image={hasItemMedia ? "true" : "false"} className={this.decorateCSS("description")}>
                        {item.description}
                      </Base.SectionDescription>
                    )}
                    {buttons.length > 0 && (
                      <div className={this.decorateCSS("button-container")}>
                        {buttons.map((button: INPUTS.CastedButton, buttonIndex: number) => (
                          <ComposerLink key={buttonIndex} path={button.url}>
                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        ))}
                      </div>
                    )}
                  </Base.VerticalContent>
                </Base.MaxContent>
              );
            })}
          </div>

          {slides.length > 1 && hasPrevIcon && (
            <div className={`${this.decorateCSS("arrow")} ${this.decorateCSS("prev")}`} onClick={() => sliderRef.current?.slickPrev()}>
              <Base.Media className={this.decorateCSS("prev-icon")} value={arrows.prevIcon} />
            </div>
          )}
          {slides.length > 1 && hasNextIcon && (
            <div className={`${this.decorateCSS("arrow")} ${this.decorateCSS("next")}`} onClick={() => sliderRef.current?.slickNext()}>
              <Base.Media className={this.decorateCSS("next-icon")} value={arrows.nextIcon} />
            </div>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection34;
