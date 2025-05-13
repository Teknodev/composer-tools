import * as React from "react";
import styles from "./header23.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type SliderItem = {
  topImage: string;
  upperText: React.JSX.Element;
  bottomText: React.JSX.Element;
  background1: string;
  background2: string;
  background3: string;
  background4: string;
};

class Header23 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "image",
              displayer: "Top Image",
              key: "topImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cc?alt=media&timestamp=1719483639150",
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
              type: "image",
              displayer: "Background 1",
              key: "background1",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266ce?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d0?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
              key: "background4",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cf?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "image",
              displayer: "Top Image",
              key: "topImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c7?alt=media&timestamp=1719483639150",
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
              type: "image",
              displayer: "Background 1",
              key: "background1",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
              key: "background4",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cb?alt=media&timestamp=1719483639150",
            },
            {
              type: "boolean",
              displayer: "Circle Activation",
              key: "circleActivation",
              value: true,
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "image",
              displayer: "Top Image",
              key: "topImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d3?alt=media&timestamp=1719483639150",
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
              type: "image",
              displayer: "Background 1",
              key: "background1",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d4?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d2?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d1?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
              key: "background4",
              value: "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-2-new-opt.png",
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
      type: "boolean",
      displayer: "Background Color",
      key: "bgColorActivation",
      value: false,
    });
    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "IoIosArrowBack",
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "IoIosArrowForward",
    });

    this.setComponentState("active", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();

    const xRatio = ((e.clientX - container.left) / container.width - 0.5) * 2;
    const yRatio = ((e.clientY - container.top) / container.height - 0.5) * 2;

    const applyTransform = (elements: HTMLElement[], transform: string) => {
      elements.forEach((element) => {
        element.style.transform = transform;
      });
    };

    const transformWrapperBg1Elements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-background1-wrapper")}`)) as HTMLElement[];
    const transformWrapperBg2Elements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-background2-wrapper")}`)) as HTMLElement[];
    const transformWrapperBg3Elements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-background3-wrapper")}`)) as HTMLElement[];
    const transformWrapperImgBgElements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-img-bg")}`)) as HTMLElement[];

    const transformWrapperUpperTextElements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-wrapper-upperText")}`)) as HTMLElement[];
    const transformWrapperLowerTextElements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-wrapper-lowerText")}`)) as HTMLElement[];
    const transformWrapperTopImgElements = Array.from(e.currentTarget.querySelectorAll(`.${this.decorateCSS("header23-wrapper-topImg")}`)) as HTMLElement[];

    const factorBg1 = 10;
    const factorBg2 = 15;
    const factorBg3 = 20;
    const factorImgBg = 10;
    const factorText = 20;
    const factorTopImg = 20;

    applyTransform(transformWrapperBg1Elements, `translate(${xRatio * factorBg1}px, ${yRatio * factorBg1}px)`);
    applyTransform(transformWrapperBg2Elements, `translate(-50%, -50%) translate(${xRatio * factorBg2}px, ${yRatio * factorBg2}px)`);
    applyTransform(transformWrapperBg3Elements, `translate(${xRatio * factorBg3}px, ${yRatio * factorBg3}px)`);
    applyTransform(transformWrapperImgBgElements, `translate(-50%, -50%) translate(${xRatio * factorImgBg}px, ${yRatio * factorImgBg}px)`);

    applyTransform(transformWrapperUpperTextElements, `translate(${xRatio * factorText}px, ${yRatio * factorText}px)`);
    applyTransform(transformWrapperLowerTextElements, `translate(${xRatio * factorText}px, ${yRatio * factorText}px)`);
    applyTransform(transformWrapperTopImgElements, `translate(-50%, -50%) translate(${-xRatio * factorTopImg}px, ${-yRatio * factorTopImg}px)`);
  };

  static getName(): string {
    return "Header 23";
  }

  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: true,
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

    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");

    const mouseMoveActive = this.getPropValue("mouseMoveActivation");
    const animateActive = this.getPropValue("animateActivation");
    const bgColorActivation = this.getPropValue("bgColorActivation");

    return (
      <div className={this.decorateCSS("container")} onMouseMove={mouseMoveActive ? this.handleMouseMove : undefined}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {slider.length > 1 && previousArrow && (
              <ComposerIcon
                name={this.getPropValue("previousArrow")}
                propsIcon={{
                  className: `${this.decorateCSS("prevArrow")} ${bgColorActivation && this.decorateCSS("bg-color-icon")}`,
                  onClick: () => {
                    sliderRef.current.slickPrev();
                  },
                }}
              />
            )}
            {slider.length > 1 && nextArrow && (
              <ComposerIcon
                name={this.getPropValue("nextArrow")}
                propsIcon={{
                  className: `${this.decorateCSS("nextArrow")} ${bgColorActivation && this.decorateCSS("bg-color-icon")}`,
                  onClick: () => {
                    sliderRef.current.slickNext();
                  },
                }}
              />
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

                return (
                  <div className={this.decorateCSS("items")} key={`key${index}`}>
                    <div className={`${this.decorateCSS("wrapper-slick")} ${bgColorActivation && this.decorateCSS("bg-color-activation")}`}>
                      {item.background1 && (
                        <div className={this.decorateCSS("header23-background1-wrapper")}>
                          <img className={`${this.decorateCSS("background1")} ${isActive && animateActive && this.decorateCSS("animate")}`} src={item.background1} alt="" />
                        </div>
                      )}

                      {item.background3 && (
                        <div className={this.decorateCSS("header23-background3-wrapper")}>
                          <img className={`${this.decorateCSS("background3")} ${isActive && animateActive && this.decorateCSS("animate")}`} src={item.background3} alt="" />
                        </div>
                      )}
                      {item.topImage && (
                        <div className={this.decorateCSS("header23-wrapper-topImg")}>
                          <img className={`${this.decorateCSS("top-img")} ${isActive && animateActive && this.decorateCSS("animate")}`} src={item.topImage} alt="" />
                        </div>
                      )}
                      {item.background2 && (
                        <div className={this.decorateCSS("header23-background2-wrapper")}>
                          <img className={`${this.decorateCSS("background2")} ${isActive && animateActive && this.decorateCSS("animate")}`} src={item.background2} alt="" />
                        </div>
                      )}
                      {item.background4 && (
                        <div className={this.decorateCSS("header23-img-bg")}>
                          <img className={`${this.decorateCSS("img-background")} ${isActive && animateActive && this.decorateCSS("animate")}`} src={item.background4} alt="" />
                        </div>
                      )}

                      {this.castToString(item.upperText) && (
                        <div className={this.decorateCSS("header23-wrapper-upperText")}>
                          <div
                            className={`${this.decorateCSS("upper-text")} 
                          ${isActive && animateActive && this.decorateCSS("animate")}
                          ${bgColorActivation && this.decorateCSS("bg-active-text")}`}
                          >
                            {item.upperText}
                          </div>
                        </div>
                      )}

                      {this.castToString(item.bottomText) && (
                        <div className={this.decorateCSS("header23-wrapper-lowerText")}>
                          <div
                            className={`${this.decorateCSS("lower-text")} 
                          ${isActive && animateActive && this.decorateCSS("animate")}
                          ${bgColorActivation && this.decorateCSS("bg-active-text")}`}
                          >
                            {item.bottomText}
                          </div>
                        </div>
                      )}
                      {this.getPropValue("circleActivation") && (
                        <div
                          className={`${this.decorateCSS("circle")} ${isActive && animateActive && this.decorateCSS("animate")}
                        ${bgColorActivation && this.decorateCSS("bg-active-c")}`}
                        >
                          <div className={`${this.decorateCSS("innerCircle")} ${bgColorActivation && this.decorateCSS("bg-active-ic")}`}></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Header23;
