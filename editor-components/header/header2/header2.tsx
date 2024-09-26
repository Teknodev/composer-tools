import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./header2.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderItemType = {
  image: string;
  category: JSX.Element;
  title: JSX.Element;
  author: JSX.Element;
  date: JSX.Element;
  description: JSX.Element;
  linkText: JSX.Element;
  link: string;
};

class Header2 extends BaseHeader {
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
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3581e2f8a5b002ce69714?alt=media",
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
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Read More",
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
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a358332f8a5b002ce69722?alt=media",
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
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Read More",
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
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a35a5b2f8a5b002ce698a6?alt=media",
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
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Read More",
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
      type: "boolean",
      displayer: "Full Width",
      key: "hasPadding",
      value: true,
    });
  }

  getName(): string {
    return "Header 2";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const sliderItems = this.castToObject<SliderItemType[]>("slider");
    const hasPadding = this.getPropValue("hasPadding");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("slider")} ${
              hasPadding ? "0" : this.decorateCSS("full-width")
            }`}
          >
            {sliderItems.length > 0 && (
              <ComposerSlider {...settings}>
                {sliderItems.map((item: SliderItemType, idx: number) => {
                  const isCategoryExist = this.castToString(item.category);
                  const isTitleExist = this.castToString(item.title);
                  const isAuthorExist = this.castToString(item.author);
                  const isDateExist = this.castToString(item.date);
                  const isDescExist = this.castToString(item.description);
                  const isLinkTextExist = this.castToString(item.linkText);

                  return (
                    <div className={this.decorateCSS("slider-item")} key={idx}>
                      <div
                        className={this.decorateCSS(
                          "slider-item-inner-container"
                        )}
                        style={{
                          backgroundImage: `url("${item.image}")`,
                        }}
                      >
                        <div className={this.decorateCSS("content-max-width")}>
                          <div className={this.decorateCSS("card")}>
                            {isCategoryExist && (
                              <h3 className={this.decorateCSS("category")}>
                                {item.category}
                              </h3>
                            )}
                            {isTitleExist && (
                              <h1 className={this.decorateCSS("title")}>
                                {item.title}
                              </h1>
                            )}
                            {(isAuthorExist || isDateExist) && (
                              <div className={this.decorateCSS("date-author")}>
                                {isAuthorExist && (
                                  <span className={this.decorateCSS("author")}>
                                    {item.author}
                                  </span>
                                )}
                                {isAuthorExist && isDateExist && (
                                  <span
                                    className={this.decorateCSS("dot")}
                                  >•</span>
                                )}
                                {isDateExist && (
                                  <span className={this.decorateCSS("date")}>
                                    {item.date}
                                  </span>
                                )}
                              </div>
                            )}
                            {isDescExist && (
                              <p className={this.decorateCSS("description")}>
                                {item.description}
                              </p>
                            )}
                            {isLinkTextExist && (
                              <div
                                className={this.decorateCSS("link-container")}
                              >
                                <ComposerLink path={item.link}>
                                  <span
                                    className={this.decorateCSS("link-text")}
                                  >
                                    {item.linkText}
                                  </span>
                                </ComposerLink>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header2;

