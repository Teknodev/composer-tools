import * as React from "react";
import styles from "./header15.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Slide = {
  image: string;
  title: string;
  description: string;
  firstButton: {
    value: string;
  }[];
  secondButton: {
    value: string;
  }[];
};
class HeaderComponent15 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      displayer: "Slides",
      key: "slides",
      value: [
        {
          type: "object",
          displayer: "First Slide",
          key: "firstSlide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Charge Your Phone Safely!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-slider.jpg",
            },

            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "TO SHOP",
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
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
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
        },
        {
          type: "object",
          displayer: "Second Slide",
          key: "secondSlide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "For Everything and Everyone",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/accessories-slide-2.jpg",
            },
            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "TO SHOP",
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
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
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
        },
        {
          type: "object",
          displayer: "Third Slide",
          key: "thirdSlide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Featured Accessories",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/04/accessories-slide-3.jpg",
            },
            {
              type: "object",
              displayer: "First Button",
              key: "firstButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "TO SHOP",
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
              displayer: "Second Button",
              key: "secondButton",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
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
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttonprop",
      displayer: "Button Prop",
      value: [
        {
          type: "object",
          displayer: "First Button",
          key: "firstButton",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "TO SHOP",
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
          displayer: "Second Button",
          key: "secondButton",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "READ MORE",
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
  }
  getName(): string {
    return "Header-15";
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.castToObject<Slide[]>("slides").map(
              (item: Slide, index: number) => (
                <div
                  className={this.decorateCSS("slider-inner-div")}
                  key={`sld-8-${index}`}
                >
                  <div className={this.decorateCSS("item")}>
                    <div className={this.decorateCSS("background-image")}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={this.decorateCSS("content")}>
                      <h1 className={this.decorateCSS("title")}>
                        {item.title}
                      </h1>
                      <h3 className={this.decorateCSS("description")}>
                        {item.description}
                      </h3>
                      <div className={this.decorateCSS("buttons")}>
                        <button className={this.decorateCSS("firstButton")}>
                          {item.firstButton[0].value}
                        </button>
                        <button className={this.decorateCSS("secondButton")}>
                          {item.secondButton[0].value}
                        </button>
                        {/* {this.getPropValue("buttonprop").map(
                            (button: any, index: number) => (
                              <ComposerLink
                                path={button.value[0].value}
                                key={index}
                              >
                                <button
                                  className={this.decorateCSS("firstButton")}
                                >
                                  {item.firstButton[0].value}
                                </button>
                                <button
                                  className={this.decorateCSS("secondButton")}
                                >
                                  {item.secondButton[0].value}
                                </button>
                              </ComposerLink>
                            )
                          )} */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}
export default HeaderComponent15;
