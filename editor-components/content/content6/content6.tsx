import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./content6.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardType = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  imageSubtitle: React.JSX.Element;
  imageTitle: React.JSX.Element;
  imageDescription: React.JSX.Element;
  image: string;
  url: string;
};
type RightTextItem = {
  type: string;
  key: string;
  displayer: string;
  value: string;
};

class Content6 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Latest News",
    });
    this.addProp({
      type: "object",
      key: "rightText",
      displayer: "Right Text",
      value: [
        {
          type: "page",
          key: "textUrl",
          displayer: "URL",
          value: "",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "Latest News",
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "right-arrow",
      displayer: "Right Text Arrow",
      value: "LuArrowUpRight",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        '"Our team is comprised of experienced architects, designers, and project managers who share a common goal of creating exceptional spaces."',
    });
    this.addProp({
      type: "boolean",
      key: "faintLine",
      displayer: "Faint Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 18, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Smart Cities of Tomorrow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac465503b007002cc7448b?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 18, 2023  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Architectural Marvels",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac468003b007002cc74497?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "May 15, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Exploring the Evolution of Architecture",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac46a203b007002cc744a3?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "Dec 15, 2022  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Nature is Good",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac472103b007002cc744b0?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imageSubtitle",
              displayer: "Image Subtitle",
              value: "Feb 14, 2021  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "New Day New You",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac476903b007002cc744bc?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "disableAnimation",
      displayer: "Disable Animation",
      value: false,
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
    this.addProp({
      type: "number",
      key: "slide-count",
      displayer: "Item count in a row",
      value: 3,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });

    this.setComponentState(
      "prevSlide",
      this.castToObject<CardType[]>("items").length - 1
    );
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
    this.setComponentState(
      "disableAnimation",
      this.getPropValue("disableAnimation")
    );
  }

  static getName(): string {
    return "Content 6";
  }
  renderDots() {
    const activeSlideIndex = this.getComponentState("activeSlideIndex");
    const items = this.castToObject<CardType[]>("items");

    return (
      <ul className={this.decorateCSS("custom-dots")}>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              index === activeSlideIndex ? this.decorateCSS("slick-active") : ""
            }
          >
            <button>
              <span></span>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const items = this.castToObject<CardType[]>("items").filter(
      (item: CardType) =>
        item.image || item.imageTitle || item.imageSubtitle || item.url
    );
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow:
        Math.min(items.length, this.getPropValue("slide-count")) || 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 868,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const rightText = this.getPropValue("rightText") as RightTextItem[];
    const textUrl = rightText.find((item) => item.key === "textUrl")?.value;
    const text = rightText.find((item) => item.key === "text")?.value;
    const sliderRef = this.getComponentState("slider-ref");
    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");
    const rightTextArrow: string = this.getPropValue("right-arrow");
    const faintLine = this.getPropValue("faintLine");
    const disableAnimation = this.getPropValue("disableAnimation");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(rightTextArrow || text) && (
            <div className={this.decorateCSS("right-link")}>
              <ComposerLink path={textUrl}>
                <div className={this.decorateCSS("inner-right-link")}>
                  <div
                    className={
                      `${this.decorateCSS("inner-div")} ${disableAnimation ? this.decorateCSS("no-animation") : ""
                      }`
                    }>
                    {text}
                  </div>
                  <ComposerIcon
                    name={rightTextArrow}
                    propsIcon={{
                      className: `${this.decorateCSS("icon")} ${disableAnimation && this.decorateCSS("no-animation")}`
                    }}
                  ></ComposerIcon>
                </div>
              </ComposerLink>
            </div>
          )}
          <header>
            {isTitleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
            {faintLine && <hr className={this.decorateCSS("faint-line")} />}
            {isDescriptionExist && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {description}
              </Base.SectionDescription>
            )}
          </header>

          <main
            className={`${this.decorateCSS("wrapper")} ${items.length <= 3 ? this.decorateCSS("no-slider") : ""
              }`}
          >
            {prevIcon && items.length > 3 && (
              <button
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
                className={this.decorateCSS("slider-button-left")}
              >
                <ComposerIcon
                  propsIcon={{
                    className: this.decorateCSS("icon"),
                  }}
                  name={prevIcon}
                />
              </button>
            )}
            {items.length > 0 && (
              <div className={this.decorateCSS("slider-parent")}>
                {
                  <>
                    <ComposerSlider
                      ref={sliderRef}
                      {...settings}
                      className={this.decorateCSS("carousel")}
                    >
                      {items.map((item: CardType, index: number) => (
                        <article
                          className={`${this.decorateCSS("slider-inner-div")} ${
                            this.getComponentState("prevSlide") === index
                            ? this.decorateCSS("prevSlide")
                            : ""
                          } ${
                            this.getComponentState("nextSlide") === index
                            ? this.decorateCSS("nextSlide")
                            : ""
                          }`}
                          key={index}
                          data-animation={this.getPropValue("hoverAnimation").join(" ")}
                        >
                          <div className={this.decorateCSS("content-div")}>
                            {item.image && (
                              <div className={this.decorateCSS("img-div")}>
                                <ComposerLink path={item.url}>
                                  <img
                                    alt={
                                      this.castToString(item.imageTitle) ||
                                      this.castToString(item.imageSubtitle)
                                    }
                                    src={item.image}
                                    className={this.decorateCSS("img")}
                                  />
                                </ComposerLink>
                              </div>
                            )}
                            {(this.castToString(item.imageSubtitle) ||
                              this.castToString(item.imageTitle)) && (
                                <Base.VerticalContent
                                  className={this.decorateCSS("item-page")}
                                >
                                  {this.castToString(item.imageSubtitle) && (
                                    <Base.P
                                      className={this.decorateCSS("first-item")}
                                    >
                                      {item.imageSubtitle}
                                    </Base.P>
                                  )}
                                  {this.castToString(item.imageTitle) && (
                                    <Base.H2
                                      className={`${this.decorateCSS(
                                        "item-title"
                                      )} ${disableAnimation
                                        ? this.decorateCSS(
                                          "no-animation-item-title"
                                        )
                                        : ""
                                        }`}
                                    >
                                      {item.imageTitle}
                                    </Base.H2>
                                  )}
                                </Base.VerticalContent>
                              )}
                          </div>
                        </article>
                      ))}
                    </ComposerSlider>
                    {items.length > 3 && this.renderDots()}
                  </>
                }
              </div>
            )}
            {nextIcon && items.length > 3 && (
              <button
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
                className={this.decorateCSS("slider-button-right")}
              >
                <ComposerIcon
                  propsIcon={{
                    className: this.decorateCSS("icon"),
                  }}
                  name={nextIcon}
                />
              </button>
            )}
          </main>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Content6;
