import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header30.module.scss";
import Slider from "react-slick";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ISliderData = {
  title: string;
  image: string;
  backgroundLeft: string;
  backgroundRight: string;
  description: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header30 extends BaseHeader {
  getName(): string {
    return "Header 30";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "buttonprop",
      displayer: "Button Prop",
      value: [
        {
          type: "array",
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
      ],
    });

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Background Left",
              key: "backgroundLeft",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9ddc7057bdf002c2cf3de?alt=media&timestamp=1694096853354",
            },
            {
              type: "image",
              displayer: "Background Right",
              key: "backgroundRight",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9d768057bdf002c2cf274?alt=media&timestamp=1694095225921",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9e70b057bdf002c2cf7b8?alt=media&timestamp=1694099227455",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Wines From The Best Vineyards",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "More than 30 varieties of wine.",
            },
          ],
        },
        {
          type: "array",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Background Left",
              key: "backgroundLeft",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9df93057bdf002c2cf4e6?alt=media&timestamp=1694097314421",
            },
            {
              type: "image",
              displayer: "Background Right",
              key: "backgroundRight",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9dba3057bdf002c2cf357?alt=media&timestamp=1694096305994",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9e759057bdf002c2cf7c3?alt=media&timestamp=1694099304634",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Matias Riccitelli Malbac 2012.",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "More than 30 varieties of wine.",
            },
          ],
        },
        {
          type: "array",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              displayer: "Background Left",
              key: "backgroundLeft",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9e128057bdf002c2cf5dc?alt=media&timestamp=1694097719504",
            },
            {
              type: "image",
              displayer: "Background Right",
              key: "backgroundRight",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9dc05057bdf002c2cf37e?alt=media&timestamp=1694096403425",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9e77a057bdf002c2cf7cb?alt=media&timestamp=1694099336857",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Villadoria Barolo Riserva 2013.",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "More than 30 varieties of wine.",
            },
          ],
        },
      ],
    });
  }
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      fade: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    //let items: any = this.castToObject("item");
    this.getPropValue("slider").map((item: ISliderData, index: number) =>
      console.log({ item })
    );

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("slider-parent")}>
          <Slider {...settings} className={this.decorateCSS("carousel")}>
            {this.castToObject<ISliderData[]>("slider").map(
              (item: ISliderData, index: number) => (
                <div key={index} className={this.decorateCSS("wrapper")}>
                  <img
                    className={this.decorateCSS("background-left")}
                    src={item.backgroundLeft}
                    alt={item.title}
                  />

                  <img
                    className={this.decorateCSS("background-right")}
                    src={item.backgroundRight}
                    alt={item.title}
                  />

                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("max-content")}>
                      <div className={this.decorateCSS("left")}>
                        <div className={this.decorateCSS("title")}>
                          {item.title}
                        </div>
                        <div className={this.decorateCSS("description")}>
                          {item.description}
                        </div>
                        <div className={this.decorateCSS("buttonWrapper")}>
                          <ComposerLink
                            path={
                              this.getPropValue("buttonprop")[0].value[1].value
                            }
                          >
                            <span className={this.decorateCSS("button")}>
                              {
                                this.getPropValue("buttonprop")[0].value[0]
                                  .value
                              }
                            </span>
                          </ComposerLink>
                        </div>
                      </div>
                      <div className={this.decorateCSS("right")}>
                        <img src={item.image} alt={item.image} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    );
  }
}
export default Header30;
