import * as React from "react";
import style from "./header2.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  title2: string;
  time: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header2 extends BaseHeader {
  constructor(props?: any) {
    super(props, style);

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
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://2035themes.com/artmagdeneme/wp-content/uploads/2015/12/IMG_1185-1-1170x530.jpg",
            },
            {
              type: "string",
              key: "title",
              value: "We're getting married!",
              displayer: "Title",
            },
            {
              type: "string",
              key: "title2",
              value: "CULTURE",
              displayer: "Type",
            },
            {
              type: "string",
              key: "time",
              value: "06.02.2024",
              displayer: "Time",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
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
                  value: "Read More →",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
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
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://2035themes.com/artmagdeneme/wp-content/uploads/2015/12/IMG_3649-1-1170x530.jpg",
            },
            {
              type: "string",
              key: "title",
              value: "Your special day",
              displayer: "Title",
            },
            {
              type: "string",
              key: "title2",
              value: "CULTURE",
              displayer: "Type",
            },
            {
              type: "string",
              key: "time",
              value: "06.02.2024",
              displayer: "Time",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
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
                  value: "Read More →",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Background Image",
              value:
                "https://2035themes.com/artmagdeneme/wp-content/uploads/2015/12/DeathtoStock_Holiday2-1-1170x530.jpg",
            },
            {
              type: "string",
              key: "title",
              value: "Television’s Carlton Cuse on what ...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "title2",
              value: "CULTURE",
              displayer: "Title",
            },
            {
              type: "string",
              key: "time",
              value: "06.02.2024",
              displayer: "Time",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "button-text",
                  displayer: "Button Text",
                  value: "Read More →",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
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
    return "Header 2";
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
          <div className={this.decorateCSS("wrapper")}>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {this.castToObject<ISliderData[]>("slider").map(
                (item: ISliderData, index: number) => (
                  <div className={this.decorateCSS("item")} key={`key${index}`}>
                    <div className={this.decorateCSS("image")}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={this.decorateCSS("content")}>
                      <div className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("card-title")}>
                          <div className={this.decorateCSS("title2")}>
                            {item.title2}
                          </div>
                        </div>
                        <div className={this.decorateCSS("title")}>
                          {item.title}
                        </div>
                        <div className={this.decorateCSS("time")}>
                          {item.time}
                        </div>
                        <div className={this.decorateCSS("description")}>
                          {item.description}
                        </div>
                        <div>
                          <ComposerLink href={item.button[1].value}>
                            <button className={this.decorateCSS("button")}>
                              {item.button[0].value}
                            </button>
                          </ComposerLink>
                        </div>
                      </div>
                      <div></div>
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

export default Header2;
