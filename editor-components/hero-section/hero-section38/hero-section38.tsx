import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section38.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";


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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691344f83596a1002b2472ab?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "Curitiba Brasil",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6913448f3596a1002b24721e?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "Ron Mccleny",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691344393596a1002b247169?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "National Aquarium Denmark",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691343ec3596a1002b24710d?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "Seceda",
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
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow",
      value: "FaChevronLeft",
    });

    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow",
      value: "FaChevronRight",
    });

    this.sliderRef = React.createRef();
    this.setComponentState("active-index", 1);
    this.setComponentState("scaled-index", null);
  }

  static getName(): string {
    return "Hero Section 38";
  }

  private getValidSlides = () => {
    const slidesRaw = this.castToObject("slides") as any[];
    return slidesRaw.filter((item: any) => {
      const imageExist = !!item.image;
      const nameExist = this.castToString(item.name);
      return imageExist || nameExist;
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const slides = this.getValidSlides();
      const isSingleSlide = slides.length === 1;
      const activeIndex = isSingleSlide ? 0 : this.getComponentState("active-index");
      this.setComponentState("scaled-index", activeIndex);
    }, 1000);
  }

  startScaleDelay = () => {
    this.setComponentState("scaled-index", null);
    const delay = window.innerWidth <= 640 ? 700 : 1000;
    setTimeout(() => {
      const activeIndex = this.getComponentState("active-index");
      this.setComponentState("scaled-index", activeIndex);
    }, delay);
  };

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
    const slides = this.getValidSlides();
    const overlay = !!this.getPropValue("overlay");
    const isSingleSlide = slides.length === 1;
    
    const settings = {
      dots: false,
      infinite: slides.length > 1,
      speed: 1000,
      autoplay: false,
      slidesToShow: isSingleSlide ? 1 : 1.2,
      slidesToScroll: 1,
      centerMode: !isSingleSlide,
      centerPadding: "0px",
      arrows: false,
      variableWidth: !isSingleSlide,
      initialSlide: isSingleSlide ? 0 : 1,
      beforeChange: (_prev: number, next: number) => {
        this.setComponentState("active-index", next);
        this.startScaleDelay();
      },
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1.2,
            variableWidth: true,
            centerMode: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: true,
            centerPadding: "0px",
            speed: 600,
          },
        },
      ],
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slides.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider ref={this.sliderRef} {...settings} className={`${this.decorateCSS("slider")} ${isSingleSlide ? this.decorateCSS("single-slide") : ""}`}>
                {slides.map((item: any, index: number) => {
                  const scaledIndex = this.getComponentState("scaled-index");
                  const isScaled = scaledIndex === index;
                  
                  return (
                    <div 
                      key={index}
                      className={`${this.decorateCSS("slide-item")} ${isScaled ? this.decorateCSS("active-slide") : ""}`}
                    >
                      <div className={this.decorateCSS("image-wrapper")}>
                        <Base.Media
                          className={this.decorateCSS("image")}
                          value={item.image}
                        />
                        {overlay && (
                          <div className={this.decorateCSS("overlay")} />
                        )}
                        <Base.H2 className={this.decorateCSS("title")}>
                          {item.name}
                        </Base.H2>
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
              {slides.length > 1 && (
                <div className={this.decorateCSS("navigation-wrapper")}>
                  {this.getPropValue("previousArrow") && (
                    <Base.Button
                      className={this.decorateCSS("arrow-button")}
                      onClick={this.handlePrevClick}
                      aria-label="Previous slide"
                    >
                      <Base.Media
                        value={{ type: "icon", name: this.getPropValue("previousArrow") }}
                        className={this.decorateCSS("arrow-icon")}
                      />
                    </Base.Button>
                  )}
                  <div className={this.decorateCSS("pagination")}>
                    {slides.map((_: any, index: number) => (
                      <Base.Button
                        key={`pagination-dot-${index}`}
                        className={`${this.decorateCSS("pagination-dot")} ${this.getComponentState("active-index") === index ? this.decorateCSS("active") : ""}`}
                        onClick={() => this.sliderRef.current?.slickGoTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  {this.getPropValue("nextArrow") && (
                    <Base.Button
                      className={this.decorateCSS("arrow-button")}
                      onClick={this.handleNextClick}
                      aria-label="Next slide"
                    >
                      <Base.Media
                        value={{ type: "icon", name: this.getPropValue("nextArrow") }}
                        className={this.decorateCSS("arrow-icon")}
                      />
                    </Base.Button>
                  )}
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
