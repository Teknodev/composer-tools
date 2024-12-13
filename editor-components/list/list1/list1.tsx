import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./list1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
  title: JSX.Element;
  subtitle: JSX.Element;
  text: JSX.Element;
  url: string;
  icon: string;
};

class List1 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Delicious Taste of",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TODAY RECIPES",
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c43130655f8002ca6f282?alt=media&timestamp=1734099751369",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c433e0655f8002ca6f2a7?alt=media&timestamp=1734099794404",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Chicken Reshmi Kabab",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY ADDISON",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c436d0655f8002ca6f31f?alt=media&timestamp=1734099839700",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c43a60655f8002ca6f34e?alt=media&timestamp=1734099897888",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Haak-Kashmiri Spinach",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY CHARLES",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c43d70655f8002ca6f39a?alt=media&timestamp=1734099946151",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c43f90655f8002ca6f3d7?alt=media&timestamp=1734099980587",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Chicken Reshmi Kabab",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY ADDISON",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "MAIN COURSE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Text Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdNavigateNext",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "backgroundColor",
      displayer: "Colored Area",
      value: true,
    });

    this.setComponentState("active-index", 1);
  }

  getName(): string {
    return "List 1";
  }

  render() {
    const sliderItems = this.castToObject<Card[]>("slider");
    const backgroundColor = this.getPropValue("backgroundColor");
    const title = this.getPropValue("title");
    const subTitle = this.getPropValue("subtitle");
    const settings = {
      dots: true,
      infinite: sliderItems.length > 1,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: Math.min(3, sliderItems.length),
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      centerMode: true,
      dotsClass: this.decorateCSS("dots"),
      centerPadding: "0px",
      beforeChange: (previndex: number, currindex: number) => {
        this.setComponentState("active-index", currindex);
      },
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(subTitle) || this.castToString(title)) && (
            <Base.VerticalContent className={this.decorateCSS("card-titles")}>
              {this.castToString(subTitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.castToString(subTitle)}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.castToString(title)}
                </Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}
          {(sliderItems.length > 0) && (
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {sliderItems.map((item: Card, indexSlider: number) => {
                return (
                  <div
                    key={indexSlider}
                    className={`${this.decorateCSS("card")}
                    ${backgroundColor &&
                        this.getComponentState("active-index") === indexSlider
                        ? this.decorateCSS("active")
                        : ""
                      }
                   `}
                  >
                    <div className={this.decorateCSS("card-inner")}>
                      {item.image && (
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            className={this.decorateCSS("img")}
                            src={item.image}
                            alt={item.image}
                          />
                        </div>
                      )}
                      {(this.castToString(item.title) || this.castToString(item.subtitle)) && (
                        <Base.VerticalContent className={this.decorateCSS("card-titles")}>
                          {this.castToString(item.title) && (
                            <div className={this.decorateCSS("title")}>
                              {item.title}
                            </div >
                          )}
                          {this.castToString(item.subtitle) && (
                            <span className={this.decorateCSS("subtitle")}>
                              {item.subtitle}
                            </span>
                          )}
                        </Base.VerticalContent>
                      )}

                      {(this.castToString(item.text) || item.icon) && (
                        <ComposerLink path={item.url}>
                          <div className={this.decorateCSS("link")}>
                            <div className={this.decorateCSS("text")}>
                              {item.text}
                            </div >
                            {item.icon && (
                              <ComposerIcon
                                name={item.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            )}
                          </div>
                        </ComposerLink>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List1;
