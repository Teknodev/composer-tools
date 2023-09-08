import * as React from "react";
import styles from "./header25.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ISliderData = {
  title: string;
  description: string;
  image: string;
  flower_image: string;
  background_image: string;
  button: IButton[];
  button2: IButton[];
};
type IButton = {
  value: string;
};

class HeaderComponent25 extends BaseHeader {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adafb?alt=media&timestamp=1693310193039",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd4e057bdf002c2adb0d?alt=media&timestamp=1693310263566",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adafc?alt=media&timestamp=1693310193039",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
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
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "VIEW MORE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adaf7?alt=media&timestamp=1693310193039",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd4e057bdf002c2adb0d?alt=media&timestamp=1693310263566",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adaf8?alt=media&timestamp=1693310193039",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
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
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "VIEW MORE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adaf9?alt=media&timestamp=1693310193039",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd4e057bdf002c2adb0d?alt=media&timestamp=1693310263566",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64eddd06057bdf002c2adafa?alt=media&timestamp=1693310193039",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
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
              displayer: "Button",
              key: "button2",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "VIEW MORE",
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
  }
  getName(): string {
    return "Header-25";
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
                            path={item.button[1].value} className={this.decorateCSS("composer-link")}
                          >
                            <button className={this.decorateCSS("button")}>
                              {item.button[0].value}
                            </button>
                          </ComposerLink>
                          <ComposerLink
                            path={item.button2[1].value} className={this.decorateCSS("composer-link")}
                          >
                            <button className={this.decorateCSS("button")}>
                              {item.button2[0].value}
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

export default HeaderComponent25;
