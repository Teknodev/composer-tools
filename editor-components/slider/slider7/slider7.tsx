import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
  title: string;
  button: string;
  url: string;
  price: string;
};

class Slider7 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30096?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Shoes",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30099?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Hat",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30098?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jeans",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd3009b?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jacket",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30097?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "T-Shirt",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd3009a?alt=media&timestamp=1719584962573",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sunglasses",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Slider 7";
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.castToObject<Card[]>("slider").map(
              (item: Card, indexSlider: number) => (
                <div key={indexSlider} className={this.decorateCSS("card")}>
                  <img
                    src={item.image}
                    className={this.decorateCSS("img")}
                    alt=""
                  />
                  <h1 className={this.decorateCSS("item-title")}>
                    {item.title}
                  </h1>
                  <div className={this.decorateCSS("button")}>
                    <div className={this.decorateCSS("button-text")}>
                      <ComposerLink path={item.url}>{item.button}</ComposerLink>
                    </div>
                    <h2 className={this.decorateCSS("item-price")}>
                      {item.price}
                    </h2>
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

export default Slider7;
