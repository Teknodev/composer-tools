import * as React from "react";
import styles from "./hero-section23.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "composer-tools/composer-base-components/base/base";


type SliderItem = {
  topImage: TypeMediaInputValue;
  upperText: React.JSX.Element;
  bottomText: React.JSX.Element;
  background1: TypeMediaInputValue;
  background2: TypeMediaInputValue;
  background3: TypeMediaInputValue;
  background4: TypeMediaInputValue;
  baseColor: string;
};

class HeroSection23 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Top Image",
              key: "topImage",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cc?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upperText",
              value: "ALMOND",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottomText",
              value: "MUFFINS",
            },
            {
              type: "media",
              displayer: "Background 1",
              key: "background1",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cd?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 2",
              key: "background2",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266ce?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 3",
              key: "background3",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d0?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 4",
              key: "background4",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cf?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "color",
              key: "baseColor",
              displayer: "Color",
              value: "rgba(186, 226, 255, 0.8)",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Top Image",
              key: "topImage",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c7?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upperText",
              value: "SWEET",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottomText",
              value: "DONUTS",
            },
            {
              type: "media",
              displayer: "Background 1",
              key: "background1",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 2",
              key: "background2",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 3",
              key: "background3",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 4",
              key: "background4",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cb?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Circle Activation",
              key: "circleActivation",
              value: true,
            },
            {
              type: "color",
              key: "baseColor",
              displayer: "Color",
              value: "rgba(255, 162, 173, 0.8)",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Top Image",
              key: "topImage",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d3?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upperText",
              value: "BELGIAN",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottomText",
              value: "WAFFLES",
            },
            {
              type: "media",
              displayer: "Background 1",
              key: "background1",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d4?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 2",
              key: "background2",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d2?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 3",
              key: "background3",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d1?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background 4",
              key: "background4",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69381480875e15002c5f6d55?alt=media",
              },
            },
            {
              type: "color",
              key: "baseColor",
              displayer: "Color",
              value: "rgba(255, 190, 162, 0.8)",
            },
          ],
        },
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
      type: "media",
      key: "previousArrow",
      displayer: "Previous Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowBack",
      },
    });
    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowForward",
      },
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      displayer: "Wave",
      key: "wave",
      value: true,
    })

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

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        if (this.getComponentState("active") !== next) {
          this.setComponentState("active", next);
        }
      },
    };

    const slider = this.castToObject<SliderItem[]>("slider");
    const activeSlide = this.getComponentState("active");
    const sliderRef = this.getComponentState("slider-ref");

    const nextArrow = this.getPropValue("nextArrow") as TypeMediaInputValue | undefined;
    const previousArrow = this.getPropValue("previousArrow") as TypeMediaInputValue | undefined;

    const mouseMoveActive = this.getPropValue("mouseMoveActivation");
    const animateActive = this.getPropValue("animateActivation");

    return (
      <div className={this.decorateCSS("container")} onMouseMove={mouseMoveActive ? this.handleMouseMove : undefined}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {slider.length > 1 && previousArrow && (
              <div
                className={this.decorateCSS("prevArrow")}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <Base.Media value={previousArrow} />
              </div>
            )}
            {slider.length > 1 && nextArrow && (
              <div
                className={this.decorateCSS("nextArrow")}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <Base.Media value={nextArrow} />
              </div>
            )}
            {slider.length > 1 && (
              <ul className={this.decorateCSS("dots")}>
                {slider.map((_, index) => (
                  <li key={`dot-${index}`} className={activeSlide === index && this.decorateCSS("slick-active")} onClick={() => sliderRef.current.slickGoTo(index)}>
                    <button />
                  </li>
                ))}
              </ul>
            )}

            <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={sliderRef}>
              {slider.map((item: SliderItem, index: number) => {
                const isActive = activeSlide === index;
                const baseColor = this.castToString(item.baseColor) || "rgba(186, 226, 255, 0.8)";
                const colors = this.getColorVariations(baseColor);

                return (
                  <div className={this.decorateCSS("items")} key={`key${index}`}>
                    <div 
                      className={this.decorateCSS("wrapper-slick")}
                      style={{ backgroundColor: colors.section }}
                    >
                      {item.background1 && (
                        <div className={this.decorateCSS("header23-background1-wrapper")}>
                          <Base.Media value={item.background1} className={`${this.decorateCSS("background1")} ${isActive && animateActive && this.decorateCSS("animate")}`} />
                        </div>
                      )}

                      {item.background3 && (
                        <div className={this.decorateCSS("header23-background3-wrapper")}>
                          <Base.Media value={item.background3} className={`${this.decorateCSS("background3")} ${isActive && animateActive && this.decorateCSS("animate")}`} />
                        </div>
                      )}
                      {item.topImage && (
                        <div className={this.decorateCSS("header23-wrapper-topImg")}>
                          <Base.Media value={item.topImage} className={`${this.decorateCSS("top-img")} ${isActive && animateActive && this.decorateCSS("animate")}`} />
                        </div>
                      )}
                      {item.background2 && (
                        <div className={this.decorateCSS("header23-background2-wrapper")}>
                          <Base.Media value={item.background2} className={`${this.decorateCSS("background2")} ${isActive && animateActive && this.decorateCSS("animate")}`} />
                        </div>
                      )}
                      {item.background4 && (
                        <div className={this.decorateCSS("header23-img-bg")}>
                          <Base.Media value={item.background4} className={`${this.decorateCSS("img-background")} ${isActive && animateActive && this.decorateCSS("animate")}`} />
                        </div>
                      )}

                      {this.castToString(item.upperText) && (
                        <div className={this.decorateCSS("header23-wrapper-upperText")}>
                          <div
                            className={`${this.decorateCSS("upper-text")} 
                          ${isActive && animateActive && this.decorateCSS("animate")}`}
                          >
                            {item.upperText}
                          </div>
                        </div>
                      )}

                      {this.castToString(item.bottomText) && (
                        <div className={this.decorateCSS("header23-wrapper-lowerText")}>
                          <div
                            className={`${this.decorateCSS("lower-text")} 
                          ${isActive && animateActive && this.decorateCSS("animate")}`}
                          >
                            {item.bottomText}
                          </div>
                        </div>
                      )}
                      {this.getPropValue("circleActivation") && (
                        <div
                          className={`${this.decorateCSS("circle")} ${isActive && animateActive && this.decorateCSS("animate")}`}
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
        {this.getPropValue("wave") && <svg className={this.decorateCSS("wave")} viewBox="0 0 1920 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M 0 20 C 0 20 169.5 0 510 0 C 850.5 0 1069.5 60 1410 60 C 1750.5 60 1920 20 1920 20 V 80 H 0 V 20 Z" />
        </svg>}
      </div>
    );
  }
}

export default HeroSection23;

