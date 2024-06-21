import * as React from "react";
import { BaseList } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./list1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
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
                "https://html.webinane.com/assets/images/resources/recipe6.png",
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
                "https://html.webinane.com/assets/images/resources/today-recipe2.jpg",
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
                "https://html.webinane.com/assets/images/resources/today-recipe3.jpg",
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
                "https://html.webinane.com/assets/images/resources/today-recipe1.jpg",
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
                "https://html.webinane.com/assets/images/resources/recipe6.png",
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
                "https://html.webinane.com/assets/images/resources/today-recipe2.jpg",
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

    this.setComponentState("active-index", 1)
  }


  getName(): string {
    return "List 1";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? (window.innerWidth < 500 ? 1 : 2) : 3,
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      centerMode: true,
      dotsClass: this.decorateCSS("dots"),
      centerPadding: '0px',
      beforeChange: (previndex: number, currindex: number) => {
        this.setComponentState("active-index", currindex)
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-text")}>
            <h4 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h4>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
          </div>
          <div className={this.decorateCSS("carousel-div")}>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {this.castToObject<Card[]>("slider").map(
                (item: Card, indexSlider: number) => (
                  <div key={indexSlider} className={`${this.decorateCSS("card")} ${this.getComponentState("active-index") == indexSlider ? this.decorateCSS("active") : ""}`}>
                    <div className={this.decorateCSS("card-inner")}>
                      <img
                        src={item.image}
                        className={this.decorateCSS("img")}
                        alt=""
                      />
                      <span className={this.decorateCSS("title")}>
                        {item.title}
                      </span>
                      <span className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </span>
                      <ComposerLink path={item.url}>
                        <div className={this.decorateCSS("link")}>
                          <span className={this.decorateCSS("text")}>{item.text}</span>
                          <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                        </div>
                      </ComposerLink>
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
