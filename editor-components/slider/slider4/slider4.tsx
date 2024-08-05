
import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Slider4Props {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
class Slider4 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1c?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1d?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1d?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a1f?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b066057bdf002c2a2a20?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: 
          [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e8b2b5057bdf002c2a2af4?alt=media&timestamp=1719584962575",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Content",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis fugit ratione.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Button",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
      ],
    });
  }
  getName(): string {
    return "Slider 4";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("slider-parent")}
            
          >
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {this.castToObject<Slider4Props[]>("slider").map((item: Slider4Props, index: number) => (
                <div className={this.decorateCSS("card")}>
                  <img
                  alt=""
                  src={item.image}
                  className={this.decorateCSS("img")}
                  key={`slider4-${index}`}
                  />  
                  <h1 className={this.decorateCSS("item-title")}>{item.title}</h1>
                  <p className={this.decorateCSS("item-description")}>{item.description}</p>
                  <ComposerLink path={item.buttonLink}>
                    <span className={this.decorateCSS("item-button-text")}>{item.buttonText}</span>
                  </ComposerLink>
                </div>
              ))}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider4;
