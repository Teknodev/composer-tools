import * as React from "react";
import styles from "./header17.module.scss";
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

class Header17 extends BaseHeader {
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
              type: "image",
              key: "image",
              displayer: "Background Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edcbf5057bdf002c2ad7db?alt=media&timestamp=1693305822758",
            },
            {
              type: "string",
              key: "title",
              value: "We're getting married!",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "THE BEST WEDDING DAY",
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
                  value: "Discuss The Wedding",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
                  value: ""
                },
              ]
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edcbf5057bdf002c2ad7dc?alt=media&timestamp=1693305822758",
            },
            {
              type: "string",
              key: "title",
              value: "Your special day",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "TRUST US TO ORGANİZE",
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
                  value: "Online Request",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
                  value: ""
                },
              ]
            },
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edcbf5057bdf002c2ad7dd?alt=media&timestamp=1693305822758",
            },
            {
              type: "string",
              key: "title",
              value: "See you at the wedding",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "FLOWER ARRANGEMENTS",
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
                  value: "View Details",
                },
                {
                  type: "page",
                  key: "buttonClick",
                  displayer: "Button Click",
                  value: ""
                },
              ]
            },
          ]
        },
      ],
    }) 
  }

  getName(): string {
    return "Header-17";
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
                      <div className={this.decorateCSS("description")}>
                        {item.description}
                      </div>
                      <div className={this.decorateCSS("title")}>
                        {item.title}
                      </div>
                      <div>
                        <ComposerLink href={item.button[1].value}>
                        <button className={this.decorateCSS("button") }>
                          {item.button[0].value}
                        </button>
                        </ComposerLink>
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

export default Header17;
