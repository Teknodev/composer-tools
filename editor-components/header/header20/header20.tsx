import * as React from "react";
import styles from "./header20.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type icons = {
  url: string;
  image: string;
};
class HeaderComponent20 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      displayer: "items",
      key: "items",
      value: [
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/01hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "SNEAKERS",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Branding",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 1,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/02hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "EVEREST",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Desing",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 2,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/03hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "RED ROOM",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Photography",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 3,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/04hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "ONLY DANCE",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Video",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 4,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/05hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "FOREST",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Photography",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 5,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/06hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "BLACK BOOK",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Branding",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 6,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/07hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "HANNAH",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Photography",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 7,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/08hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "CROSS BIKE",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Photography",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 8,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/09hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "ROBOT",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Design",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 9,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/10hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "COLOR DUST",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Design",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 10,
            },
            ,
          ],
        },
        {
          type: "object",
          displayer: "item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/11hero.jpg",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "KATYA",
            },
            ,
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Photography",
            },
            {
              type: "number",
              displayer: "Slide",
              key: "slideNumber",
              value: 11,
            },
            ,
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-20";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("items-container")}>
            <ComposerSlider {...settings}>
              {this.castToObject<[]>("items").map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("item-container")}
                  >
                    <div className={this.decorateCSS("img-container")}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={this.decorateCSS("outer")}>
                      <div className={this.decorateCSS("inner")}>
                        <h1 className={this.decorateCSS("title")}>
                          {item.title}
                        </h1>
                        <span className={this.decorateCSS("slide-number")}>
                          {item.slideNumber}
                        </span>
                      </div>
                    </div>
                    <div className={this.decorateCSS("subtitle-container")}>
                      <h2 className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </h2>
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

export default HeaderComponent20;
