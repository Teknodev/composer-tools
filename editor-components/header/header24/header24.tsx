import * as React from "react";
import styles from "./header24.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ISliderData = {
  title: string;
  description: string;
  image: string;
  flower_image: string;
  background_image: string;
  button: IButton;
  button2: IButton;
};
type IButton = {
  buttonText: string;
  buttonUrl: string;
};

class HeaderComponent24 extends BaseHeader {
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
              displayer: "Title",
              key: "title",
              value: "Best Roses In Amazing Colour",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "When you order a bouqet of flowers ,your goal is to impress that someone special needed.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c2?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c3?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "VIEW MORE",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
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
              displayer: "Title",
              key: "title",
              value: "Fresh Tulips The Perfect Choice.",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A symbol of simple love,charity,paradise on earth, heavenly and reminder of the passion life.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267be?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bf?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "VIEW MORE",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
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
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Lovely Flowers for Your Holiday",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Make your life lovely.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c0?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c1?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "TO SHOP",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "buttonText",
                  value: "VIEW MORE",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "buttonUrl",
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
    return "Header-24";
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
                  <div className={this.decorateCSS("background-image")}>
                    <img src={item.background_image} alt={item.title} />
                  </div>
                  <div className={this.decorateCSS("max-contentt")}>
                    <div className={this.decorateCSS("left")}>
                      <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("flower")}>
                          <img src={item.flower_image} alt={item.title} />
                        </div>
                        <div className={this.decorateCSS("title")}>
                          {item.title}
                        </div>
                        <div className={this.decorateCSS("description")}>
                          {item.description}
                        </div>
                        <div className={this.decorateCSS("buttons")}>
                          <ComposerLink
                            path={item.button.buttonUrl} className={this.decorateCSS("composer-link")}
                          >
                            <button className={this.decorateCSS("button")}>
                              {item.button.buttonText}
                            </button>
                          </ComposerLink>
                          <ComposerLink
                            path={item.button2.buttonUrl} className={this.decorateCSS("composer-link")}
                          >
                            <button className={this.decorateCSS("button")}>
                              {item.button2.buttonText}
                            </button>
                          </ComposerLink>
                        </div>
                      </div>
                    </div>
                    <div className={this.decorateCSS("right")}>
                      <div className={this.decorateCSS("image")}>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
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

export default HeaderComponent24;
