import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section38.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import Slider from "react-slick";

type SlideItem = {
  image: TypeMediaInputValue;
  name: React.JSX.Element;
  navigateTo: string;
};

class HeroSection38 extends BaseHeroSection {
  sliderRef: React.RefObject<Slider | null>;

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
                availableTypes: ["image","video"],
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "Curitiba Brasil",
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
              value: "",
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
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
              value: "",
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
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
              value: "",
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
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
              value: "",
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
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow",
      value: "FiArrowLeft",
    });

    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow",
      value: "FiArrowRight",
    });

    this.addProp({
      type: "media",
      key: "dotIcon",
      displayer: "Dots Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "LuDot",
      },
    });

    this.sliderRef = React.createRef();
    this.setComponentState("active-index", 1);
    this.setComponentState("scaled-index", null);
  }

  static getName(): string {
    return "Hero Section 38";
  }

  private hasImage = (image?: TypeMediaInputValue) => {
    if (!image) {
      return false;
    }

    const candidate =
      ("url" in image && image.url) ||
      (typeof image === "object" &&
        "value" in (image as any) &&
        (image as any).value?.url);

    return !!candidate;
  };

  private hasTitle = (title?: React.JSX.Element) => {
    if (!title) {
      return false;
    }
    const titleText = this.castToString(title);
    return !!titleText;
  };

  private getValidSlides = () => {
    const slidesRaw = this.castToObject<SlideItem[]>("slides");
    return slidesRaw.filter((item: SlideItem) => {
      const imageExist = this.hasImage(item.image);
      const nameExist = this.hasTitle(item.name);
      return imageExist || nameExist;
    });
  };

  componentDidMount() {
    const animation = !!this.getPropValue("animation");
    if (animation && window.innerWidth > 640) {
      setTimeout(() => {
        const slides = this.getValidSlides();
        const isSingleSlide = slides.length === 1;
        const activeIndex = isSingleSlide ? 0 : this.getComponentState("active-index");
        this.setComponentState("scaled-index", activeIndex);
      }, 1000);
    }
  }

  startScaleDelay = () => {
    const animation = !!this.getPropValue("animation");
    if (animation && window.innerWidth > 640) {
      this.setComponentState("scaled-index", null);
      setTimeout(() => {
        const activeIndex = this.getComponentState("active-index");
        this.setComponentState("scaled-index", activeIndex);
      }, 1000);
    }
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
    const animation = !!this.getPropValue("animation");
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
                {slides.map((item: SlideItem, index: number) => {
                  const scaledIndex = this.getComponentState("scaled-index");
                  const isScaled = animation && scaledIndex === index;
                  const navigateTo = item.navigateTo;
                  const imageExists = this.hasImage(item.image);
                  const titleExists = this.hasTitle(item.name);

                  if (!imageExists && !titleExists) {
                    return null;
                  }

                  const slideClass = [
                    this.decorateCSS("slide-item"),
                    !imageExists && titleExists ? this.decorateCSS("no-image") : "",
                    isScaled ? this.decorateCSS("active-slide") : "",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  
                  const slideContent = (
                    <div className={this.decorateCSS("image-wrapper")}>
                      {imageExists && (
                        <>
                          <Base.Media
                            className={this.decorateCSS("image")}
                            value={item.image}
                          />
                          {overlay && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </>
                      )}
                      <Base.H2 className={this.decorateCSS("title")}>
                        {item.name}
                      </Base.H2>
                    </div>
                  );

                  return (
                    <div key={index} className={slideClass}>
                      {navigateTo ? (
                        <ComposerLink path={navigateTo}>
                          {slideContent}
                        </ComposerLink>
                      ) : (
                        slideContent
                      )}
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
                    >
                      <Base.Media
                        value={{ type: "icon", name: this.getPropValue("previousArrow") }}
                        className={this.decorateCSS("arrow-icon")}
                      />
                    </Base.Button>
                  )}
                  <div className={this.decorateCSS("pagination")}>
                    {slides.map((_, index: number) => (
                      <Base.Button
                        key={`pagination-dot-${index}`}
                        className={`${this.decorateCSS("pagination-dot")} ${this.getComponentState("active-index") === index ? this.decorateCSS("active") : ""}`}
                        onClick={() => this.sliderRef.current?.slickGoTo(index)}
                      >
                        {this.getPropValue("dotIcon") && (
                          <Base.Media
                            value={this.getPropValue("dotIcon")}
                            className={this.decorateCSS("dot-icon")}
                          />
                        )}
                      </Base.Button>
                    ))}
                  </div>
                  {this.getPropValue("nextArrow") && (
                    <Base.Button
                      className={this.decorateCSS("arrow-button")}
                      onClick={this.handleNextClick}
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