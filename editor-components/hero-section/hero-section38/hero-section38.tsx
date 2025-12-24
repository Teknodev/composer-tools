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
  subtitle?: string;
  description?: string;
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "name",
              displayer: "Title",
              value: "Curitiba Brasil",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
                availableTypes: ["image" , "video"],
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
              key: "name",
              displayer: "Title",
              value: "Ron Mccleny",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
                availableTypes: ["image" , "video"],
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
              key: "name",
              displayer: "Title",
              value: "National Aquarium Denmark",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
                availableTypes: ["image" , "video"],
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
              key: "name",
              displayer: "Title",
              value: "Seceda",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
      type: "media",
      key: "previousArrow",
      displayer: "Previous Arrow",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FiArrowLeft",
      },
    });

    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Arrow",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FiArrowRight",
      },
    });

    this.addProp({
      type: "media",
      key: "dotIcon",
      displayer: "Dots Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
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
    const media = image as { url?: string; value?: { url?: string } };
    return !!(media?.url ?? media?.value?.url);
  };

  private getValidSlides = () => {
    const slidesRaw = this.castToObject<SlideItem[]>("slides");
    return slidesRaw.filter((item: SlideItem) => {
      const imageExist = this.hasImage(item.image);
      const nameExist = this.castToString(item.name);
      return imageExist || nameExist;
    });
  };

  componentDidMount() {
    this.setScaledIndexWithDelay();
  }

  startScaleDelay = () => {
    this.setScaledIndexWithDelay(true);
  };

  private setScaledIndexWithDelay(reset?: boolean) {
    const animation = !!this.getPropValue("animation");
    const isWide = window.innerWidth > 640;
    if (!animation || !isWide) return;

    if (reset) {
      this.setComponentState("scaled-index", null);
    }

    setTimeout(() => {
      const slides = this.getValidSlides();
      const isSingleSlide = slides.length === 1;
      const activeIndex = isSingleSlide ? 0 : this.getComponentState("active-index");
      this.setComponentState("scaled-index", activeIndex);
    }, 1000);
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
    const slides = this.getValidSlides();
    const overlay = !!this.getPropValue("overlay");
    const animation = !!this.getPropValue("animation");
    const dotIconValue = this.getPropValue("dotIcon");
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

    const containerClassNames = !animation
      ? `${this.decorateCSS("container")} ${this.decorateCSS("no-animation")}`
      : this.decorateCSS("container");

    return (
      <Base.Container className={containerClassNames}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slides.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider ref={this.sliderRef} {...settings} className={`${this.decorateCSS("slider")} ${isSingleSlide ? this.decorateCSS("single-slide") : ""}`}>
                {slides.map((item: SlideItem, index: number) => {
                  const scaledIndex = this.getComponentState("scaled-index");
                  const isScaled = animation && scaledIndex === index;
                  const navigateTo = item.navigateTo;
                  const liveName = this.getPropValue(`slides.${index}.name`) ?? item.name;
                  const slideSubtitle = this.getPropValue(`slides.${index}.subtitle`) ?? item.subtitle;
                  const slideDescription = this.getPropValue(`slides.${index}.description`) ?? item.description;
                  const imageValue = (this.getPropValue(`slides.${index}.image`) as TypeMediaInputValue | undefined) ?? item.image;
                  const imageExists = this.hasImage(imageValue);
                  const isVideoMedia = imageValue?.type === "video";
                  const titleExists = !!liveName;
                  const hasSubtitle = this.castToString(slideSubtitle);
                  const hasDescription = this.castToString(slideDescription);

                  if (!imageExists && !titleExists) {
                    return null;
                  }

                  const slideClass = `${this.decorateCSS("slide-item")} ${!imageExists && titleExists ? this.decorateCSS("no-image") : ""} ${isScaled ? this.decorateCSS("active-slide") : ""}`.trim();
                  
                  const slideContent = (
                    <ComposerLink path={navigateTo}>
                      <div className={this.decorateCSS("image-wrapper")}>
                        {imageExists && (
                          <>
                            <Base.Media
                              className={`${this.decorateCSS("image")} ${isVideoMedia && this.decorateCSS("video-media")}`}
                              value={imageValue}
                            />
                            {overlay && <div className={this.decorateCSS("overlay")} />}
                          </>
                        )}
                        <div
                          className={`${this.decorateCSS("content-overlay")} ${imageExists && this.decorateCSS("has-image")}`}
                        >
                          {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{slideSubtitle}</Base.SectionSubTitle>}
                          <Base.SectionTitle className={this.decorateCSS("title")}>{liveName}</Base.SectionTitle>
                          {hasDescription && <Base.SectionDescription className={this.decorateCSS("description")}>{slideDescription}</Base.SectionDescription>}
                        </div>
                      </div>
                    </ComposerLink>
                  );

                  return (
                    <div key={index} className={slideClass}>
                      {slideContent}
                    </div>
                  );
                })}
              </ComposerSlider>
              {slides.length > 1 && (
                <div className={this.decorateCSS("navigation-wrapper")}>
                  {this.getPropValue("previousArrow") && (
                    <div
                      className={this.decorateCSS("arrow-button")}
                      onClick={this.handlePrevClick}
                    >
                      <Base.Media
                        value={this.getPropValue("previousArrow")}
                        className={`${this.decorateCSS("arrow-icon")} ${this.decorateCSS("arrow-icon-media")}`}
                      />
                    </div>
                  )}
                  {dotIconValue && (
                    <div className={this.decorateCSS("pagination")}>
                      {slides.map((_, index: number) => (
                        <Base.Button
                          key={`pagination-dot-${index}`}
                          className={`${this.decorateCSS("pagination-dot")} ${this.getComponentState("active-index") === index ? this.decorateCSS("active") : ""}`}
                          onClick={() => this.sliderRef.current?.slickGoTo(index)}
                        >
                          <Base.Media
                            value={dotIconValue}
                            className={`${this.decorateCSS("dot-icon")} ${this.decorateCSS("dot-icon-media")}`}
                          />
                        </Base.Button>
                      ))}
                    </div>
                  )}
                  {this.getPropValue("nextArrow") && (
                    <div
                      className={this.decorateCSS("arrow-button")}
                      onClick={this.handleNextClick}
                    >
                      <Base.Media
                        value={this.getPropValue("nextArrow")}
                        className={`${this.decorateCSS("arrow-icon")} ${this.decorateCSS("arrow-icon-media")}`}
                      />
                    </div>
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