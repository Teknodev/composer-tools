import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider10.module.scss";

type SliderItem = {
  title: JSX.Element;
  image: string;
  index: number;
};

type FeaturedItem = {
  title: JSX.Element;
  subtitle: JSX.Element;
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb92dba6bbe002b6458a2?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb939ba6bbe002b6458b4?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb949ba6bbe002b6458c8?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
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
      value: "FaArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "FaArrowRight",
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
  }

  getName(): string {
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
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
      },
    };

    const slides = this.castToObject<SliderItem[]>("slider-items");

    const featuredItems = this.castToObject<FeaturedItem[]>("featured-items");
    const featuredItemsNonEmptyLength = featuredItems.filter(
      (item) =>
        item.image ||
        this.castToString(item.title) ||
        this.castToString(item.subtitle),
    ).length;

    const adjustFooterWidth = {
      width: `${
        featuredItemsNonEmptyLength === 1
          ? "25%"
          : featuredItemsNonEmptyLength * 20 + "%"
      }`,
    };

    const getButtonClass = () => {
      if (featuredItemsNonEmptyLength === 0) {
        return this.decorateCSS("full-width");
      }
      if (featuredItemsNonEmptyLength <= 2) {
        return this.decorateCSS("width-20-percent");
      }
      return "";
    };

    const sliderRef = this.getComponentState("slider-ref");
    const overlay: boolean = this.getPropValue("overlay");
    const hoverAnimation: boolean = this.getPropValue("hoverAnimation");

    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("slider-wrapper")}>
          <div className={this.decorateCSS("slider")}>
            {slides?.length > 0 && (
              <ComposerSlider ref={sliderRef} {...settings}>
                {slides.map((item: SliderItem, index: number) => {
                  const titleExist = this.castToString(item.title);

                  if (item.image || titleExist)
                    return (
                      <div key={index}>
                        <div
                          className={this.decorateCSS("slider-item")}
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        >
                          <div className={this.decorateCSS("max-content")}>
                            {titleExist && (
                              <h1
                                className={`
                                ${this.decorateCSS("slider-item-title")}
                                ${
                                  this.getComponentState("active") === index
                                    ? this.decorateCSS("anim")
                                    : ""
                                }
                              `}
                              >
                                {item.title}
                              </h1>
                            )}
                          </div>
                          {overlay && (
                            <div
                              className={this.decorateCSS(
                                "slider-item-overlay",
                              )}
                            />
                          )}
                        </div>
                      </div>
                    );
                  return null;
                })}
              </ComposerSlider>
            )}
          </div>
          {(featuredItems?.length > 0 || prevIcon || nextIcon) && (
            <div className={this.decorateCSS("footer-max-content")}>
              <footer
                className={`
                  ${this.decorateCSS("slider-footer")}
                  ${this.decorateCSS(featuredItemsNonEmptyLength === 0 ? "footer-disappear" : "")}
                `}
                style={adjustFooterWidth}
              >
                {featuredItems?.length > 0 && (
                  <div
                    className={this.decorateCSS("slider-footer-items")}
                    style={{
                      gridTemplateColumns: `repeat(${featuredItemsNonEmptyLength}, 1fr)`,
                    }}
                  >
                    {featuredItems.map((item: FeaturedItem, index: number) => {
                      const titleExist = this.castToString(item.title);
                      const subtitleExist = this.castToString(item.subtitle);

                      if (titleExist || subtitleExist || item.image)
                        return (
                          <div
                            key={index}
                            className={this.decorateCSS("slider-footer-item")}
                          >
                            {item.image && (
                              <img
                                className={`
                                  ${this.decorateCSS(
                                    "slider-footer-item-image",
                                  )}
                                  ${
                                    hoverAnimation
                                      ? this.decorateCSS("hover-animation")
                                      : ""
                                  }
                                `}
                                src={item.image}
                                alt={this.castToString(item.title)}
                              />
                            )}
                            {(titleExist || subtitleExist) && (
                              <div
                                className={this.decorateCSS(
                                  "slider-footer-item-body",
                                )}
                              >
                                {titleExist &&
                                  (!item.link ? (
                                    <h3
                                      className={this.decorateCSS(
                                        "slider-footer-item-title",
                                      )}
                                    >
                                      {item.title}
                                    </h3>
                                  ) : (
                                    <ComposerLink path={item.link}>
                                      <h3
                                        className={this.decorateCSS(
                                          "slider-footer-item-title",
                                        )}
                                      >
                                        {item.title}
                                      </h3>
                                    </ComposerLink>
                                  ))}
                                {subtitleExist && (
                                  <h5
                                    className={this.decorateCSS(
                                      "slider-footer-item-subtitle",
                                    )}
                                  >
                                    {item.subtitle}
                                  </h5>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      return null;
                    })}
                  </div>
                )}
                {(prevIcon || nextIcon) && (
                  <div
                    className={`
                      ${this.decorateCSS("slider-buttons")}
                      ${getButtonClass()}
                    `}
                    style={
                      featuredItemsNonEmptyLength === 0
                        ? { width: "100%" }
                        : featuredItemsNonEmptyLength <= 2
                          ? { width: "20%" }
                          : {}
                    }
                  >
                    {prevIcon && (
                      <button
                        onClick={() => {
                          sliderRef.current.slickPrev();
                        }}
                        className={this.decorateCSS("slider-button")}
                      >
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("slider-arrow-icon"),
                            size: "20px",
                          }}
                          name={prevIcon}
                        />
                      </button>
                    )}
                    {nextIcon && (
                      <button
                        onClick={() => {
                          sliderRef.current.slickNext();
                        }}
                        className={this.decorateCSS("slider-button")}
                      >
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("slider-arrow-icon"),
                            size: "20px",
                          }}
                          name={nextIcon}
                        />
                      </button>
                    )}
                  </div>
                )}
              </footer>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Slider10;
