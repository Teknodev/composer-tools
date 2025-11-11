import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section38.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type SlideItem = {
  image: any;
  name: React.JSX.Element;
};

class HeroSection38 extends BaseHeroSection {
  sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slides",
      displayer: "Slides",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2642f8a5b002ce6c032?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Ron Mcclenny",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2a22f8a5b002ce6c03e?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "John Doe",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2cc2f8a5b002ce6c04a?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jane Smith",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "autoplaySpeed",
      displayer: "Autoplay Speed (ms)",
      value: 3000,
    });

    this.sliderRef = React.createRef();
    this.setComponentState("active-index", 0);
  }

  static getName(): string {
    return "Hero Section 38";
  }

  handlePrevClick = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  };

  handleNextClick = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  };

  render() {
    const slides = this.castToObject<SlideItem[]>("slides");
    const overlay = !!this.getPropValue("overlay");
    const autoplaySpeed = this.getPropValue("autoplaySpeed") || 3000;

    const settings = {
      dots: true,
      infinite: slides.length > 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: autoplaySpeed,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      arrows: false,
      initialSlide: 1,
      dotsClass: this.decorateCSS("dots"),
      beforeChange: (_prev: number, next: number) => {
        this.setComponentState("active-index", next);
      },
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slides.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider ref={this.sliderRef} {...settings} className={this.decorateCSS("slider")}>
                {slides.map((item: SlideItem, index: number) => {
                  const nameExist = this.castToString(item.name);
                  const imageExist = !!item.image;

                  if (!imageExist && !nameExist) return null;

                  const slideKey = `slide-38-${index}-${this.castToString(item.name)}`;
                  return (
                    <div key={slideKey} className={this.decorateCSS("slide-item")}>
                      {imageExist && (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <Base.Media
                            className={this.decorateCSS("image")}
                            value={item.image}
                          />
                          {overlay && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                          {nameExist && (
                            <Base.H2 className={this.decorateCSS("name")}>
                              {item.name}
                            </Base.H2>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
              {slides.length > 1 && (
                <div className={this.decorateCSS("dots-wrapper")}>
                  <button
                    className={this.decorateCSS("arrow-button")}
                    onClick={this.handlePrevClick}
                    aria-label="Previous slide"
                  >
                    <Base.Icon
                      name="FaChevronLeft"
                      propsIcon={{
                        className: this.decorateCSS("arrow-icon"),
                      }}
                    />
                  </button>
                  <button
                    className={this.decorateCSS("arrow-button")}
                    onClick={this.handleNextClick}
                    aria-label="Next slide"
                  >
                    <Base.Icon
                      name="FaChevronRight"
                      propsIcon={{
                        className: this.decorateCSS("arrow-icon"),
                      }}
                    />
                  </button>
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection38;
