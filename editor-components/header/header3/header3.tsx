import * as React from "react";
import styles from "./header3.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type ISliderData = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header3 extends BaseHeader {
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
              value: "New lookbok Ready for the summer",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Explore the modern glamour within all of Wize Styles.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://livewp.site/wp/md/wizestore/wp-content/uploads/sites/17/revslider/home-store-01/home_01_img2.jpg",
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
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
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
              value: "SPRING-SUMMER COLLECTION",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "We are Fashion Revolution",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://livewp.site/wp/md/wizestore/wp-content/uploads/sites/17/revslider/home-store-01/home_01_img3.jpg",
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
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
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
              value: "HOT SUMMER COLLECTION 2017",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "Your Fashion Summer",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Enjoy the New Collection with Wize Fashion Store.Best women's fashion tips and style guide.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://livewp.site/wp/md/wizestore/wp-content/uploads/sites/17/revslider/home-store-01/home_01_img4.jpg",
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
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
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
    return "Header 3";
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
    console.log();
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
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={this.decorateCSS("content")}>
                      <div className={this.decorateCSS("title")}>
                        {item.title}
                      </div>
                      <div className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </div>
                      <div className={this.decorateCSS("description")}>
                        {item.description}
                      </div>
                      <div>
                        <button className={this.decorateCSS("button")}>
                          {item.button[0].value}
                        </button>
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

export default Header3;
