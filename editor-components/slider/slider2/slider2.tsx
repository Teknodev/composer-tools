import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider2.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
  text: string;
  button: string;
  url: string;
  number: string;
};

class Slider2 extends BaseSlider {
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
          displayer: "Items 0",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "Shoes",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/17941220/pexels-photo-17941220/free-photo-of-elbe-philharmonic-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Commodi necessitatibus perspiciatis quae labore!",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 1",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "biker",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "http://clapat.ro/themes/grenada-wordpress/wp-content/uploads/2018/10/07hero.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Praesentium cumque saepe dignissimos incidunt.",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 2",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "gold man",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/20317614/pexels-photo-20317614/free-photo-of-farol-cabo-da-roca.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Assumenda voluptatum eveniet possimus modi illo.",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 3",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "baseball",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "http://clapat.ro/themes/grenada-wordpress/wp-content/uploads/2018/10/04hero.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Impedit ad animi quae nobis voluptate! Rerum, enim.",
            },
          ],
        },
      ],
    });

    this.setComponentState("active_image", this.castToObject<Card[]>("slider")[0].image)
    this.setComponentState("text", this.castToObject<Card[]>("slider")[0].text)
    this.setComponentState("text_visibility", true)
  }

  getName(): string {
    return "Slider 2";
  }



  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: window.innerWidth < 400 ? 1.2 : 3,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-box")}>
            <div className={this.decorateCSS("overlay")}>
              {this.castToObject<Card[]>("slider").map((slide, index) => {
                const isActive = this.getComponentState("active_image") == slide.image;
                return <img key={index} src={slide.image} className={
                  `
                ${this.decorateCSS("image")} 
                ${isActive && this.decorateCSS("active")}
              `
                } />
              }
              )}
            </div>
          </div>
          <div className={this.decorateCSS("text-box")}>
            <span className={`${this.decorateCSS("text")} ${this.getComponentState("text_visibility") && this.decorateCSS("visible")}`}>{this.getComponentState("text")}</span>
          </div>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}>
            {this.castToObject<Card[]>("slider").map(
              (item: Card, indexSlider: number) => {
                const isActive = this.getComponentState("active_image") == item.image;

                return <div key={indexSlider} className={this.decorateCSS("card")}>
                  <button className={this.decorateCSS("button")} onMouseOver={() => {
                    const isImageValueSame = this.getComponentState("active_image") == item.image;
                    if (isImageValueSame) return;

                    this.setComponentState("active_image", item.image);
                    this.setComponentState("text_visibility", false);
                    setTimeout(() => {
                      this.setComponentState("text_visibility", true);
                      this.setComponentState("text", item.text);
                    }, 200)
                  }}>
                    <p className={this.decorateCSS("number")}>{item.number}</p>
                    <span className={`${this.decorateCSS("text")} ${isActive && this.decorateCSS("active")}`}>{item.button}</span>
                  </button>

                </div>
              }
            )}
          </ComposerSlider>

        </div>
      </div>
    );
  }
}

export default Slider2;
