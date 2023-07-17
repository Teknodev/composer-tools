import * as React from "react";
import styles from "./header28.module.scss";
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

class Header28 extends BaseHeader {
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
              displayer: "Upper Title",
              key: "upper-title",
              value: "New Era in Alcohol",
            },
            {
              type: "string",
              displayer: "Lower Title",
              key: "lower-title",
              value: "Introducing Ambleside Distillers",
            },
            {
              type: "string",
              displayer: "Text",
              key: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipm ad mreprehlore eu fugiat nulla pariatur.",
            },
            {
              type: "image",
              displayer: "Background",
              key: "background",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-bg-slider-1-opt.png",
            },
            {
              type: "image",
              displayer: "Item",
              key: "img-item",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-slider-1-opt.png",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
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
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "string",
              displayer: "Upper Title",
              key: "upper-title",
              value: "New Era in Alcohol",
            },
            {
              type: "string",
              displayer: "Lower Title",
              key: "lower-title",
              value: "Introducing Ambleside Distillers",
            },
            {
              type: "string",
              displayer: "Text",
              key: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipm ad mreprehlore eu fugiat nulla pariatur.",
            },
            {
              type: "image",
              displayer: "Background",
              key: "background",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-slider-bg-2-opt.png",
            },
            {
              type: "image",
              displayer: "Item",
              key: "img-item",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-slider-2-opt.png",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
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
        },
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "string",
              displayer: "Upper Title",
              key: "upper-title",
              value: "New Era in Alcohol",
            },
            {
              type: "string",
              displayer: "Lower Title",
              key: "lower-title",
              value: "Introducing Ambleside Distillers",
            },
            {
              type: "string",
              displayer: "Text",
              key: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipm ad mreprehlore eu fugiat nulla pariatur.",
            },
            {
              type: "image",
              displayer: "Background",
              key: "background",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-slider-bg-3-opt.png",
            },
            {
              type: "image",
              displayer: "Item",
              key: "img-item",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/drink-slider-3-opt.png",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
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
        },
      ],
    });
  }

  getName(): string {
    return "Header-28";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    console.log(this.getPropValue("slider")[0].value[5].value[0].value);

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
                  <img
                    className={this.decorateCSS("background")}
                    src={item.value[3].value}
                    alt=""
                  />
                  <div className={this.decorateCSS("item-box")}>
                    <div className={this.decorateCSS("text-content")}>
                      <div className={this.decorateCSS("upper-title")}>
                        {item.value[0].value}
                      </div>

                      <div className={this.decorateCSS("lower-title")}>
                        {item.value[1].value}
                      </div>

                      <div className={this.decorateCSS("text")}>
                        {item.value[2].value}
                      </div>

                      <ComposerLink path={item.value[5].value[1].value}>
                        <span className={this.decorateCSS("action-button")}>
                          {item.value[5].value[0].value}
                        </span>
                      </ComposerLink>
                    </div>

                    <img
                      className={this.decorateCSS("image")}
                      src={item.value[4].value}
                      alt=""
                    />
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

export default Header28;
