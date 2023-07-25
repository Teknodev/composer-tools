import * as React from "react";
import styles from "./header18.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header18 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "string",
              displayer: "Year",
              key: "year",
              value: "2023",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Scandinavian Style House",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/05/w-architecture-slider-2-opt-1.jpg",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "string",
              displayer: "Year",
              key: "year",
              value: "2021",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Contemporary Style House",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/05/w-architecture-slider-1-opt-1.jpg",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "string",
              displayer: "Year",
              key: "year",
              value: "2019",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Metal Facade Coatings",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2023/03/w-architecture-slider-3-opt.jpg",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      displayer: "Column Direction",
      key: "true",
      value: false,
    });
  }

  getName(): string {
    return "Header-18";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("wrapper")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.getPropValue("slider").map((item: any, index: number) => (
              <div className={this.decorateCSS("max-content")}>
                <div className={this.decorateCSS("items")} key={`key${index}`}>
                  <div className={this.decorateCSS("background-img")}>
                    <img src={item.value[2].value} alt={item.value[2].value} />
                  </div>

                  <div
                    className={`${this.decorateCSS("content")} ${
                      this.getPropValue("true") &&
                      this.decorateCSS("content-reverse")
                    }`}
                  >
                    <div className={this.decorateCSS("left")}>
                      <div className={this.decorateCSS("item")}>
                        <div className={this.decorateCSS("year")}>
                          {item.value[0].value}
                        </div>

                        <div className={this.decorateCSS("title")}>
                          {item.value[1].value}
                        </div>
                      </div>
                    </div>

                    <div className={this.decorateCSS("right")}>
                      <div>
                        <ComposerLink path={item.value[4].value}>
                          <span className={this.decorateCSS("action-button")}>
                            {item.value[3].value}
                          </span>
                        </ComposerLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Header18;
