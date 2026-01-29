import * as React from "react";
import { BaseBlog } from "../../EditorComponent";
import styles from "./blog1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardType = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  imageSubtitle: React.JSX.Element;
  imageTitle: React.JSX.Element;
  imageDescription: React.JSX.Element;
  image: { type: "image"; url: string };
  url: string;
};
type RightTextItem = {
  text: string;
  icon: { type: "icon"; name: string };
  image?: { type: "image"; url: string };
  url: string;
  type?: string;
};

class Blog1 extends BaseBlog {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Blog",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Latest News",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Our team is comprised of experienced architects, designers, and project managers who share a common goal of creating exceptional spaces.",
    });

    this.addProp({
      type: "array",
      key: "rightText",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Latest News", "", "LuArrowUpRight", "", "Link"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });



    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
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
              displayer: "Card Subtitle",
              value: "May 18, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Card Title",
              value: "Smart Cities of Tomorrow",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac465503b007002cc7448b?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              displayer: "Card Subtitle",
              value: "May 18, 2023  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Card Title",
              value: "Architectural Marvels",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac468003b007002cc74497?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              displayer: "Card Subtitle",
              value: "May 15, 2023  /  Insights",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Card Title",
              value: "Exploring the Evolution of Architecture",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac46a203b007002cc744a3?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              displayer: "Card Subtitle",
              value: "Dec 15, 2022  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Card Title",
              value: "Nature is Good",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac472103b007002cc744b0?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              displayer: "Card Subtitle",
              value: "Feb 14, 2021  /  News",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Card Title",
              value: "New Day New You",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac476903b007002cc744bc?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "slide-count",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "media",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeft",
      },
    });
    this.addProp({
      type: "media",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowRight",
      },
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });

    this.setComponentState("activeSlideIndex", 0);
    this.setComponentState(
      "prevSlide",
      this.castToObject<CardType[]>("items").length - 1
    );
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Blog 1";
  }
  renderDots() {
    const activeSlideIndex = this.getComponentState("activeSlideIndex");
    const items = this.castToObject<CardType[]>("items");

    return (
      <ul className={this.decorateCSS("custom-dots")}>
        {items.map((_item, index) => (
          <li
            key={index}
            className={`${this.decorateCSS("dot-item")} ${index === activeSlideIndex ? this.decorateCSS("slick-active") : ""
              }`}
          >
            <button className={this.decorateCSS("dot-button")}>
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
        item.image?.url || item.imageTitle || item.imageSubtitle || item.url
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
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const rightTextItems = this.castToObject<RightTextItem[]>("rightText");
    const sliderRef = this.getComponentState("slider-ref");
    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");
    const line = this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("header")} ${this.decorateCSS("header-left")}`}>
            {subtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
            )}
            {isTitleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title as any}
              </Base.SectionTitle>
            )}

          </Base.VerticalContent>
          <div className={this.decorateCSS("button-container")}>
            {rightTextItems.map((item: RightTextItem, index: number) => {
              const buttonTextExist = this.castToString(item.text as any);
              const iconExist = item.icon && item.icon.name;
              const imageExist = item.image && item.image.url;
              const buttonExist = buttonTextExist || iconExist || imageExist;

              return buttonExist && (
                <div key={`blog-1-btn-${index}`} className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink path={item.url}>
                    <Base.Button className={this.decorateCSS("button")} buttonType={(item.type as any) || "Link"}>
                      {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                      {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                    </Base.Button>
                  </ComposerLink>
                </div>
              );
            })}
          </div>

          <div className={this.decorateCSS("header-bottom")}>
            {line && <hr className={this.decorateCSS("line")} />}
            {isDescriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {description}
              </Base.SectionDescription>
            )}
          </div>
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
                <Base.Media
                  value={this.getPropValue("prev-button-icon")}
                  className={this.decorateCSS("icon")}
                />
              </button>
            )}
            {items.length > 0 && (
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider
                  ref={sliderRef}
                  {...settings}
                  className={this.decorateCSS("carousel")}
                >
                  {items.map((item: CardType, index: number) => (
                    <article
                      className={`${this.decorateCSS("slider-item")} ${this.getComponentState("prevSlide") === index
                        ? this.decorateCSS("prevSlide")
                        : ""
                        } ${this.getComponentState("nextSlide") === index
                          ? this.decorateCSS("nextSlide")
                          : ""
                        }`}
                      key={index}
                      data-animation={Array.isArray(this.getPropValue("hoverAnimation")) ? this.getPropValue("hoverAnimation").join(" ") : ""}
                    >
                      <div className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("gradient-overlay")} />
                        {item.image?.url && (
                          <div className={this.decorateCSS("media-wrapper")}>
                            <ComposerLink path={item.url}>
                              <Base.Media
                                value={item.image}
                                className={this.decorateCSS("media")}
                              />
                              {this.getPropValue("overlay") && (
                                <div className={this.decorateCSS("overlay")} />
                              )}
                            </ComposerLink>
                          </div>
                        )}
                        {(this.castToString(item.imageSubtitle) ||
                          this.castToString(item.imageTitle)) && (
                            <Base.VerticalContent
                              className={this.decorateCSS("content")}
                            >
                              {this.castToString(item.imageSubtitle) && (
                                <Base.P
                                  className={this.decorateCSS("card-subtitle")}
                                >
                                  {item.imageSubtitle}
                                </Base.P>
                              )}
                              {this.castToString(item.imageTitle) && (
                                <Base.H5
                                  className={this.decorateCSS("card-title")}
                                >
                                  {item.imageTitle}
                                  <div className={this.decorateCSS("title-underline")} />
                                </Base.H5>
                              )}
                            </Base.VerticalContent>
                          )}
                      </div>
                    </article>
                  ))}
                </ComposerSlider>
                {items.length > 3 && this.renderDots()}
              </div>
            )}
            {nextIcon && items.length > 3 && (
              <button
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
                className={this.decorateCSS("slider-button-right")}
              >
                <Base.Media
                  value={this.getPropValue("next-button-icon")}
                  className={this.decorateCSS("icon")}
                />
              </button>
            )}
          </main>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Blog1;