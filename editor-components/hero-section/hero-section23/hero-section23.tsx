import * as React from "react";
import styles from "./hero-section23.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Backgrounds = {
  background1: TypeMediaInputValue;
  background2: TypeMediaInputValue;
  background3: TypeMediaInputValue;
  background4: TypeMediaInputValue;
};

type SliderItem = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  secondaryTitle: React.JSX.Element;
  description: React.JSX.Element;
  topMedia: TypeMediaInputValue;
  backgrounds: Backgrounds;
  baseColor: string;
};

type Navigation = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

const media = (key: string, displayer: string, url: string): TypeUsableComponentProps => ({
  type: "media",
  key,
  displayer,
  additionalParams: {
    availableTypes: ["image", "video"],
  },
  value: {
    type: "image",
    url,
  },
});

const slide = (
  title: string,
  secondaryTitle: string,
  topMedia: string,
  backgrounds: string[],
  baseColor: string
): TypeUsableComponentProps => ({
  type: "object",
  key: "item",
  displayer: "Item",
  value: [
    {
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
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
      key: "secondaryTitle",
      displayer: "Secondary Title",
      value: secondaryTitle,
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    },
    media("topMedia", "Top Media", topMedia),
    {
      type: "object",
      key: "backgrounds",
      displayer: "Backgrounds",
      value: backgrounds.map((url, index) => media(`background${index + 1}`, `Background ${index + 1}`, url)),
    },
    {
      type: "color",
      key: "baseColor",
      displayer: "Color",
      value: baseColor,
    },
  ],
});

class HeroSection23 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Sliders",
      key: "slider",
      value: [
        slide("ALMOND", "MUFFINS", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cc?alt=media&timestamp=1719483639150", [
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cd?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266ce?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d0?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cf?alt=media&timestamp=1719483639150",
        ], "rgba(186, 226, 255, 0.8)"),
        slide("SWEET", "DONUTS", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c7?alt=media&timestamp=1719483639150", [
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cb?alt=media&timestamp=1719483639150",
        ], "rgba(255, 162, 173, 0.8)"),
        slide("BELGIAN", "WAFFLES", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d3?alt=media&timestamp=1719483639150", [
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d4?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d2?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d1?alt=media&timestamp=1719483639150",
          "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69381480875e15002c5f6d55?alt=media",
        ], "rgba(255, 190, 162, 0.8)"),
      ],
    });
    this.addProp({
      type: "boolean",
      displayer: "Circle Activation",
      key: "circleActivation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      displayer: "Mouse Move Activation",
      key: "mouseMoveActivation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      displayer: "Animate Activation",
      key: "animateActivation",
      value: true,
    });
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
          value: {
            type: "icon",
            name: "IoIosArrowBack",
          },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosArrowForward",
          },
        },
      ],
    });
    this.addProp({
      type: "boolean",
      displayer: "Wave",
      key: "wave",
      value: true,
    });
    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 440,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("active", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const xRatio = ((e.clientX - container.left) / container.width - 0.5) * 2;
    const yRatio = ((e.clientY - container.top) / container.height - 0.5) * 2;

    const applyTransform = (elements: NodeListOf<Element>, transform: string) => {
      elements.forEach((element) => {
        (element as HTMLElement).style.transform = transform;
      });
    };

    const PARALLAX_FACTORS = {
      bg1: 10,
      bg2: 15,
      bg3: 20,
      imgBg: 10,
      text: 20,
      topImg: 20,
    };

    const bg1Elements = e.currentTarget.querySelectorAll(`[class*="header23-background1-wrapper"]`);
    const bg2Elements = e.currentTarget.querySelectorAll(`[class*="header23-background2-wrapper"]`);
    const bg3Elements = e.currentTarget.querySelectorAll(`[class*="header23-background3-wrapper"]`);
    const imgBgElements = e.currentTarget.querySelectorAll(`[class*="header23-img-bg"]`);
    const upperTextElements = e.currentTarget.querySelectorAll(`[class*="header23-wrapper-upperText"]`);
    const lowerTextElements = e.currentTarget.querySelectorAll(`[class*="header23-wrapper-lowerText"]`);
    const topImgElements = e.currentTarget.querySelectorAll(`[class*="header23-wrapper-topImg"]`);

    applyTransform(bg1Elements, `translate(${xRatio * PARALLAX_FACTORS.bg1}px, ${yRatio * PARALLAX_FACTORS.bg1}px)`);
    applyTransform(bg2Elements, `translate(-50%, -50%) translate(${xRatio * PARALLAX_FACTORS.bg2}px, ${yRatio * PARALLAX_FACTORS.bg2}px)`);
    applyTransform(bg3Elements, `translate(${xRatio * PARALLAX_FACTORS.bg3}px, ${yRatio * PARALLAX_FACTORS.bg3}px)`);
    applyTransform(imgBgElements, `translate(-50%, -50%) translate(${xRatio * PARALLAX_FACTORS.imgBg}px, ${yRatio * PARALLAX_FACTORS.imgBg}px)`);
    applyTransform(upperTextElements, `translate(${xRatio * PARALLAX_FACTORS.text}px, ${yRatio * PARALLAX_FACTORS.text}px)`);
    applyTransform(lowerTextElements, `translate(${xRatio * PARALLAX_FACTORS.text}px, ${yRatio * PARALLAX_FACTORS.text}px)`);
    applyTransform(topImgElements, `translate(-50%, -50%) translate(${-xRatio * PARALLAX_FACTORS.topImg}px, ${-yRatio * PARALLAX_FACTORS.topImg}px)`);
  };

  getColorVariations(baseColor: string) {
    const parseColor = (color: string) => {
      const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      
      if (rgbMatch) {
        return { r: rgbMatch[1], g: rgbMatch[2], b: rgbMatch[3], a: 1 };
      } else if (rgbaMatch) {
        return { r: rgbaMatch[1], g: rgbaMatch[2], b: rgbaMatch[3], a: parseFloat(rgbaMatch[4]) };
      }
      return { r: 186, g: 226, b: 255, a: 0.8 };
    };
    
    const { r, g, b, a } = parseColor(baseColor);
    
    return {
      innerCircle: baseColor,
      circle: `rgba(${r}, ${g}, ${b}, ${a * 0.4})`, 
      section: `rgba(${r}, ${g}, ${b}, ${a * 0.3125})`, 
    };
  }

  static getName(): string {
    return "Hero Section 23";
  }

  hasMedia(media?: unknown) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      beforeChange: (_current: number, next: number) => {
        if (this.getComponentState("active") !== next) {
          this.setComponentState("active", next);
        }
      },
    };

    const slider = this.castToObject<SliderItem[]>("slider");
    const activeSlide = this.getComponentState("active");
    const sliderRef = this.getComponentState("slider-ref");

    const navigation = this.castToObject<Navigation>("arrows");
    const showArrows = sliderSettings.arrows && slider.length > 1;
    const showDots = sliderSettings.dots && slider.length > 1;

    const mouseMoveActive = this.getPropValue("mouseMoveActivation");
    const animateActive = this.getPropValue("animateActivation");
    const waveActive = this.getPropValue("wave");
    const animateClass = (isActive: boolean) => (isActive && animateActive ? this.decorateCSS("animate") : "");

    return (
      <div
        className={`${this.decorateCSS("container")} ${waveActive ? this.decorateCSS("has-wave") : ""}`}
        onMouseMove={mouseMoveActive ? this.handleMouseMove : undefined}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {showArrows && this.hasMedia(navigation?.prevIcon) && (
              <div
                className={this.decorateCSS("prevArrow")}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <Base.Media className={this.decorateCSS("icon")} value={navigation.prevIcon} />
              </div>
            )}
            {showArrows && this.hasMedia(navigation?.nextIcon) && (
              <div
                className={this.decorateCSS("nextArrow")}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <Base.Media className={this.decorateCSS("icon")} value={navigation.nextIcon} />
              </div>
            )}
            {showDots && (
              <ul className={this.decorateCSS("dots")}>
                {slider.map((_, index) => (
                  <li
                    key={`dot-${index}`}
                    className={`${this.decorateCSS("dot-item")} ${activeSlide === index ? this.decorateCSS("slick-active") : ""}`}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    <div className={this.decorateCSS("dot")} />
                  </li>
                ))}
              </ul>
            )}

            <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={sliderRef}>
              {slider.map((item: SliderItem, index: number) => {
                const isActive = activeSlide === index;
                const baseColor =
                  typeof item.baseColor === "string" && item.baseColor.trim()
                    ? item.baseColor
                    : "rgba(186, 226, 255, 0.8)";
                const colors = this.getColorVariations(baseColor);
                const backgrounds = item.backgrounds || ({} as Backgrounds);
                const logoExist = this.hasMedia(item.logo);
                const subtitleExist = this.castToString(item.subtitle);
                const titleExist = this.castToString(item.title);
                const secondaryTitleExist = this.castToString(item.secondaryTitle);
                const descriptionExist = this.castToString(item.description);

                return (
                  <div className={this.decorateCSS("items")} key={`key${index}`}>
                    <div
                      className={this.decorateCSS("wrapper-slick")}
                      style={{ backgroundColor: colors.section }}
                    >
                      {this.hasMedia(backgrounds.background1) && (
                        <div className={this.decorateCSS("header23-background1-wrapper")}>
                          <Base.Media
                            value={this.withVideoSettings(backgrounds.background1)}
                            className={`${this.decorateCSS("background1")} ${animateClass(isActive)}`}
                          />
                        </div>
                      )}

                      {this.hasMedia(backgrounds.background3) && (
                        <div className={this.decorateCSS("header23-background3-wrapper")}>
                          <Base.Media
                            value={this.withVideoSettings(backgrounds.background3)}
                            className={`${this.decorateCSS("background3")} ${animateClass(isActive)}`}
                          />
                        </div>
                      )}
                      {this.hasMedia(item.topMedia) && (
                        <div className={this.decorateCSS("header23-wrapper-topImg")}>
                          <Base.Media
                            value={this.withVideoSettings(item.topMedia)}
                            className={`${this.decorateCSS("top-img")} ${animateClass(isActive)}`}
                          />
                        </div>
                      )}
                      {this.hasMedia(backgrounds.background2) && (
                        <div className={this.decorateCSS("header23-background2-wrapper")}>
                          <Base.Media
                            value={this.withVideoSettings(backgrounds.background2)}
                            className={`${this.decorateCSS("background2")} ${animateClass(isActive)}`}
                          />
                        </div>
                      )}
                      {this.hasMedia(backgrounds.background4) && (
                        <div className={this.decorateCSS("header23-img-bg")}>
                          <Base.Media
                            value={this.withVideoSettings(backgrounds.background4)}
                            className={`${this.decorateCSS("img-background")} ${animateClass(isActive)}`}
                          />
                        </div>
                      )}

                      {(logoExist || subtitleExist || titleExist) && (
                        <div className={this.decorateCSS("header23-wrapper-upperText")}>
                          <Base.VerticalContent className={`${this.decorateCSS("upper-content")} ${animateClass(isActive)}`}>
                            {logoExist && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
                            {subtitleExist && (
                              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>
                            )}
                            {titleExist && <Base.SectionTitle className={this.decorateCSS("upper-text")}>{item.title}</Base.SectionTitle>}
                          </Base.VerticalContent>
                        </div>
                      )}

                      {(secondaryTitleExist || descriptionExist) && (
                        <div className={this.decorateCSS("header23-wrapper-lowerText")}>
                          <Base.VerticalContent className={`${this.decorateCSS("lower-content")} ${animateClass(isActive)}`}>
                            {secondaryTitleExist && <Base.H1 className={this.decorateCSS("lower-text")}>{item.secondaryTitle}</Base.H1>}
                            {descriptionExist && (
                              <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                            )}
                          </Base.VerticalContent>
                        </div>
                      )}
                      {this.getPropValue("circleActivation") && (
                        <div
                          className={`${this.decorateCSS("circle")} ${animateClass(isActive)}`}
                          style={{ backgroundColor: colors.circle }}
                        >
                          <div
                            className={this.decorateCSS("innerCircle")}
                            style={{ backgroundColor: colors.innerCircle }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
        {waveActive && (
          <svg className={this.decorateCSS("wave")} viewBox="0 0 1920 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M 0 20 C 0 20 169.5 0 510 0 C 850.5 0 1069.5 60 1410 60 C 1750.5 60 1920 20 1920 20 V 80 H 0 V 20 Z" />
          </svg>
        )}
      </div>
    );
  }
}

export default HeroSection23;
