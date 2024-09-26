import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./list1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
      value: "Delicious Taste of"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TODAY RECIPES"
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d23a03b007002cc7aa52?alt=media",
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
              value: "MdNavigateNext"

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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media",
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
              value: "MdNavigateNext"
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d2b303b007002cc7aa9f?alt=media",
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
              value: "MdNavigateNext"
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d1ef03b007002cc7aa41?alt=media",
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
              value: "MdNavigateNext"
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d30603b007002cc7aacf?alt=media",
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
              value: "MdNavigateNext"

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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d32d03b007002cc7aae7?alt=media",
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
              value: "MdNavigateNext"
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "backgroundColor",
      displayer: "Colored Area",
      value: true
    });

    this.setComponentState("active-index", 1)
  }


  getName(): string {
    return "List 1";
  }

  render() {
    const sliderItems = this.castToObject<Card[]>("slider");
    const backgroundColor = this.getPropValue("backgroundColor");
    const title: JSX.Element = this.getPropValue("title");
    const subTitle: JSX.Element = this.getPropValue("subtitle");
    const settings = {
      dots: true,
      infinite: sliderItems.length > 1,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 475 ? 1 : window.innerWidth < 775 ? 2 : Math.min(3, sliderItems.length),  // En fazla 3 öğe göster
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      centerMode: true,
      dotsClass: this.decorateCSS("dots"),
      centerPadding: '0px',
      beforeChange: (previndex: number, currindex: number) => {
        this.setComponentState("active-index", currindex);
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-text")}>
            {this.castToString(subTitle) && <h4 className={this.decorateCSS("subtitle")}>
              {this.castToString(subTitle)}
            </h4>}
            {this.castToString(title) && (
              <h1 className={this.decorateCSS("title")}>
                {this.castToString(title)}
              </h1>
            )}
          </div>
          <div className={this.decorateCSS("carousel-div")}>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {sliderItems.map(
                (item: Card, indexSlider: number) => (
                  <div key={indexSlider}
                    className={`${this.decorateCSS("card")}
                   ${backgroundColor && this.getComponentState("active-index") == indexSlider ? this.decorateCSS("active") : ""}
                   ${indexSlider % 2 == 0 ? this.decorateCSS("left-card-padding") : this.decorateCSS("right-card-padding")}
                   `}
                  >
                    <div className={this.decorateCSS("card-inner")}>

                      {item.image && <div className={this.decorateCSS("img-div")}>
                        <img
                          className={this.decorateCSS("img")}
                          src={item.image}
                          alt=""
                        /></div>}

                      {this.castToString(item.title) && <span className={this.decorateCSS("title")}>
                        {item.title}
                      </span>}

                      {this.castToString(item.subtitle) && <span className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </span>}

                      {this.castToString(item.text) && <>
                        <ComposerLink path={item.url}>
                          <div className={this.decorateCSS("link")}>
                            <span className={this.decorateCSS("text")}>{item.text}</span>
                            <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                          </div>
                        </ComposerLink>
                      </>}
                    </div>
                  </div>
                )
              )}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default List1;
