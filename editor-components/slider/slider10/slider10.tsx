import * as React from "react";
import { BaseSlider } from "../../EditorComponent";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import styles from "./slider10.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type SliderItem = {
  title: React.JSX.Element;
  image: string;
  index: number;
};

type FeaturedItem = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  image: string;
  link: string;
};

class Slider10 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "hoverAnimation",
      displayer: "Featured Items Hover Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Text Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider-items",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Multi-Family Housing",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Lighthouse",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Arches",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb92dba6bbe002b6458a2?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Riverside Residence",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb939ba6bbe002b6458b4?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dream House",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb949ba6bbe002b6458c8?alt=media",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
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
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "IoIosArrowBack",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "IoIosArrowForward",
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
  }

  static getName(): string {
    return "Slider 10";
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      beforeChange: (_: number, next: number) => {
        this.setComponentState("active", next);
      },
    };

    const slides = this.castToObject<SliderItem[]>("slider-items");
    const featuredItems = this.castToObject<FeaturedItem[]>("featured-items");

    const sliderRef = this.getComponentState("slider-ref");
    const overlay: boolean = this.getPropValue("overlay");
    const hoverAnimation: boolean = this.getPropValue("hoverAnimation");
    const textAnimation: boolean = this.getPropValue("textAnimation");

    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");

    const activeIndex = this.getComponentState("active");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("slider-wrapper")}>
          <div className={this.decorateCSS("slider")}>
            {slides?.length > 0 && (
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                {slides.map((item: SliderItem, index: number) => {
                  const titleExist = this.castToString(item.title);

                  if (item.image || titleExist)
                    return (
                      <div className={this.decorateCSS("card")} key={index}>
                        <div
                          className={this.decorateCSS("slider-item")}
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        >
                          <div className={this.decorateCSS("max-content")}>
                            {titleExist && (
                              <Base.SectionTitle
                                className={`
                                ${this.decorateCSS("slider-item-title")}
                                ${item.image && this.decorateCSS("slider-item-title-with-img")}
                                ${(activeIndex === index || textAnimation) && this.decorateCSS("show")}
                              `}
                              >
                                {item.title}
                              </Base.SectionTitle>
                            )}
                          </div>
                          {overlay && <div className={this.decorateCSS("slider-item-overlay")} />}
                        </div>
                      </div>
                    );
                  return null;
                })}
              </ComposerSlider>
            )}
          </div>
          {(featuredItems?.length > 0 || nextIcon || prevIcon) && (
            <div className={this.decorateCSS("footer-max-content")}>
              <div className={this.decorateCSS("slider-footer")}>
                {featuredItems.length > 0 && (
                  <div className={this.decorateCSS("slider-footer-items")}>
                    {featuredItems.map((item: FeaturedItem, index: number) => {
                      const titleExist = this.castToString(item.title);
                      const subtitleExist = this.castToString(item.subtitle);

                      if (titleExist || subtitleExist || item.image)
                        return (
                          <div key={index} className={`${this.decorateCSS("slider-footer-item")} ${(!item.image || (!titleExist && !subtitleExist)) && this.decorateCSS("half-width")}`}>
                            {item.image && (
                              <img
                                className={`
                                  ${this.decorateCSS("slider-footer-item-image")}
                                  ${hoverAnimation && this.decorateCSS("hover-animation")}`}
                                src={item.image}
                                alt={this.castToString(item.title)}
                              />
                            )}
                            {(titleExist || subtitleExist) && (
                              <div className={this.decorateCSS("slider-footer-item-body")}>
                                {titleExist &&
                                  (!item.link ? (
                                    <Base.P className={this.decorateCSS("slider-footer-item-title")}>{item.title}</Base.P>
                                  ) : (
                                    <ComposerLink path={item.link}>
                                      <Base.P className={this.decorateCSS("slider-footer-item-title")}>{item.title}</Base.P>
                                    </ComposerLink>
                                  ))}
                                {subtitleExist && <Base.P className={this.decorateCSS("slider-footer-item-subtitle")}>{item.subtitle}</Base.P>}
                              </div>
                            )}
                          </div>
                        );
                      return null;
                    })}
                  </div>
                )}
                {(prevIcon || nextIcon) && (
                  <div className={this.decorateCSS("slider-buttons")}>
                    {prevIcon && (
                      <button
                        onClick={() => {
                          sliderRef.current.slickPrev();
                        }}
                        className={this.decorateCSS("slider-button")}
                      >
                        <Base.Icon
                          propsIcon={{
                            className: this.decorateCSS("slider-arrow-icon"),
                          }}
                          name={prevIcon}
                        />
                      </button>
                    )}
                    {nextIcon && (
                      <button
                        className={this.decorateCSS("slider-button")}
                        onClick={() => {
                          sliderRef.current.slickNext();
                        }}
                      >
                        <Base.Icon
                          name={nextIcon}
                          propsIcon={{
                            className: this.decorateCSS("slider-arrow-icon"),
                          }}
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default Slider10;
