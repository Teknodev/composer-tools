import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header22.module.scss";
import Slider from "react-slick";

type ISliderData = {
  title: string;
  image: string;
  backgroundDescription: string;
  background: string;
  foreground: string;
  des: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header22 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
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
              type: "string",
              displayer: "Description",
              key: "des",
              value: "FASTER, STRONGER FIGHT TO THE END",
            },
            {
              type: "string",
              displayer: "Background Description",
              key: "backgroundDescription",
              value: "BE STRONG NEVER GIVE UP",
            },
            {
              type: "image",
              displayer: "Background Effect",
              key: "background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9ba0a057bdf002c2ce997?alt=media&timestamp=1694088048798",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9a6e3057bdf002c2ce55b?alt=media&timestamp=1694082801038",
            },
            {
              type: "image",
              displayer: "Foreground Effect",
              key: "foreground",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9c09e057bdf002c2ceba3?alt=media&timestamp=1694089389435",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Description",
              key: "des",
              value: "CREATE YOUR OUR NEW BODY",
            },
            {
              type: "string",
              displayer: "Background Description",
              key: "backgroundDescription",
              value: "BE STRONG NEVER GIVE UP",
            },
            {
              type: "image",
              displayer: "Background Effect",
              key: "background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9ba0a057bdf002c2ce997?alt=media&timestamp=1694089201049",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9a78c057bdf002c2ce56d?alt=media&timestamp=1694082969788",
            },
            {
              type: "image",
              displayer: "Foreground Effect",
              key: "foreground",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9c09e057bdf002c2ceba3?alt=media&timestamp=1694089389435g",
            },
          ],
        },

        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Description",
              key: "des",
              value: "ALL POWER INSIDE YOU",
            },
            {
              type: "string",
              displayer: "Background Description",
              key: "backgroundDescription",
              value: "BE STRONG NEVER GIVE UP",
            },
            {
              type: "image",
              displayer: "Background Effect",
              key: "background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9ba0a057bdf002c2ce997?alt=media&timestamp=1694089201049",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9a7f5057bdf002c2ce589?alt=media&timestamp=1694083075008",
            },
            {
              type: "image",
              displayer: "Foreground Effect",
              key: "foreground",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f9c09e057bdf002c2ceba3?alt=media&timestamp=1694089389435",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Header 22";
  }
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    // let items: any = this.castToObject("items");
    this.getPropValue("slider").map((item: ISliderData, index: number) =>
      console.log(item.background)
    );
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<ISliderData[]>("slider").map(
                  (item: ISliderData, index: number) => (
                    <div key={index} className={this.decorateCSS("content")}>
                      <div className={this.decorateCSS("description")}>
                        {item.des}
                      </div>
                      <div className={this.decorateCSS("background-image")}>
                        <div
                          className={this.decorateCSS("background-description")}
                        >
                          <h1>{item.backgroundDescription}</h1>
                        </div>
                        <div className={this.decorateCSS("img1")}>
                          <img src={item.background} alt={item.title} />
                        </div>
                        <div className={this.decorateCSS("img2")}>
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className={this.decorateCSS("img3")}>
                          <img src={item.foreground} alt={item.title} />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header22;
