import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "right-image",
      displayer: "Right Image",
      value: "https://craftohtml.themezaa.com/images/demo-restaurant-home-08.jpg",
    });
    this.addProp({
      type: "color",
      key: "color",
      displayer: "Background Color of Component",
      value: "#faf6f3",
    });
    this.addProp({
      type: "image",
      key: "left-image",
      displayer: "Left Image",
      value: "https://craftohtml.themezaa.com/images/demo-restaurant-home-07.jpg",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jerrie Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://craftohtml.themezaa.com/images/avtar-33.jpg",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://craftohtml.themezaa.com/images/avtar-34.jpg",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://craftohtml.themezaa.com/images/avtar-35.jpg",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Testimonials 1";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex);
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    return (
      <div
        className={this.decorateCSS("container")}
        style={{ background: this.getPropValue("color") }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("left")}>
            <img
              className={this.decorateCSS("food-image")}
              src={this.getPropValue("left-image")}
              alt=""
            />
          </div>
          <div className={this.decorateCSS("testimonials1")}>
            <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
              {this.castToObject<any>("items").map((item: any, index: number) => (
                <div className={this.decorateCSS("items")}>
                  <ComposerIcon
                    name={item.icons}
                    propsIcon={{ className: this.decorateCSS("icons") }}
                  />
                  <h1 className={this.decorateCSS("longtext")}>{item.longtext}</h1>
                  <h3 className={this.decorateCSS("name")}>{item.name}</h3>
                </div>
              ))}
            </ComposerSlider>
            <div className={this.decorateCSS("images")}>
              {this.castToObject<any>("items").map((item: any, itemIndex: number) => {
                const isActive = this.getComponentState("active_index") === itemIndex;
                return (
                  <img
                    src={item.button["image-button"]}
                    className={`${this.decorateCSS("image")} ${
                      isActive && this.decorateCSS("active")
                    }`}
                    alt="avatar"
                    onClick={() => this.onImageClick(itemIndex)}
                  />
                );
              })}
            </div>
          </div>
          <div className={this.decorateCSS("right")}>
            <img
              className={this.decorateCSS("food-image")}
              src={this.getPropValue("right-image")}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials1Page;
