import * as React from "react";
import styles from "./hero-section2.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItemType = {
  image: TypeMediaInputValue;
  category: React.JSX.Element;
  title: React.JSX.Element;
  author: React.JSX.Element;
  date: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  dot: boolean;
};

class HeroSection2 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710cfaa97fe08002c76ce44?alt=media",
              },
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "Back at Harvard after four decades...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "by John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710d06f97fe08002c76cf1c?alt=media",
              },
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "A decade spent exploring India's d...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "by John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710d0b497fe08002c76cf66?alt=media",
              },
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "Television’s Carlton Cuse on what...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "by John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
      ],
    });
    
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });
  }

  static getName(): string {
    return "Hero Section 2";
  }

  render() {
    const autoplay = this.getPropValue("autoplay");
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: autoplay,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
    };

    const sliderItems = this.castToObject<SliderItemType[]>("slider");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider")}>
            {sliderItems.length > 0 && (
              <ComposerSlider {...settings}>
                {sliderItems.map((item: SliderItemType, idx: number) => {
                  const isCategoryExist = this.castToString(item.category);
                  const isTitleExist = this.castToString(item.title);
                  const isAuthorExist = this.castToString(item.author);
                  const isDateExist = this.castToString(item.date);
                  const isDescExist = this.castToString(item.description);
                  const isLinkTextExist = this.castToString(item.button.text);

                  const cardValues =
                    isLinkTextExist ||
                    isDescExist ||
                    isDateExist ||
                    isAuthorExist ||
                    isTitleExist ||
                    isCategoryExist;

                  return (
                    <div className={this.decorateCSS("slider-item")} key={idx}>
                      <div
                        className={this.decorateCSS("slider-item-container")}
                        style={{
                          backgroundImage: item.image && item.image.type === "image" && item.image.url ? `url("${item.image.url}")` : undefined,
                        }}
                      >
                        {this.getPropValue("overlay") && item.image && item.image.type === "image" && item.image.url && (
                          <div className={this.decorateCSS("overlay")} />
                        )}
                        <div className={this.decorateCSS("content-max-width")}>
                          {cardValues && (
                            <div className={this.decorateCSS("card")}>
                              {isCategoryExist && (
                                <Base.H5 className={this.decorateCSS("category")}>{item.category}</Base.H5>
                              )}
                              {isTitleExist && (
                                <Base.H4 className={this.decorateCSS("title")}>{item.title}</Base.H4>
                              )}
                              {(isAuthorExist || isDateExist) && (
                                <div className={this.decorateCSS("date-author")}>
                                  {isAuthorExist && (
                                    <Base.P className={this.decorateCSS("author")}>
                                      {item.author}
                                    </Base.P>
                                  )}
                                  {isAuthorExist && isDateExist && item.dot && (
                                    <span className={this.decorateCSS("dot")}>{item.dot}</span>
                                  )}
                                  {isDateExist && (
                                    <Base.P className={this.decorateCSS("date")}>{item.date}</Base.P>
                                  )}
                                </div>
                              )}
                              {isDescExist && (
                                <Base.P className={this.decorateCSS("description")}>
                                  {item.description}
                                </Base.P>
                              )}
                              {isLinkTextExist && (
                                <div className={this.decorateCSS("button-container")}>
                                  <ComposerLink path={item.button.url}>
                                    <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                                      <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                                      {item.button.icon && 
                                      <Base.Media
                                        value={item.button.icon}
                                        className={this.decorateCSS("button-icon")}
                                      />}
                                    </Base.Button>
                                  </ComposerLink>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection2;

