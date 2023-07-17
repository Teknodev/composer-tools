import * as React from "react";
import styles from "./header24.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  button: IButton[];
};

type IButton = {
  value: string;
};

class Header24 extends BaseHeader {
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
              displayer: "Top Image",
              key: "top-image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-img.png",
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upper-text",
              value: "ALMOND",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottom-text",
              value: "MUFFINS",
            },
            {
              type: "image",
              displayer: "Background1",
              key: "background1",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-3-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background2",
              key: "background2",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-1-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background3",
              key: "background3",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-4-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background4",
              key: "background4",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-2-new-opt.png",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "image",
              displayer: "Top Image",
              key: "top-image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-img.png",
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upper-text",
              value: "ALMOND",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottom-text",
              value: "MUFFINS",
            },
            {
              type: "image",
              displayer: "Background1",
              key: "background1",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-3-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background2",
              key: "background2",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-1-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background3",
              key: "background3",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-4-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background4",
              key: "background4",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-2-new-opt.png",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "image",
              displayer: "Top Image",
              key: "top-image",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-img.png",
            },
            {
              type: "string",
              displayer: "Upper Text",
              key: "upper-text",
              value: "ALMOND",
            },
            {
              type: "string",
              displayer: "Bottom Text",
              key: "bottom-text",
              value: "MUFFINS",
            },
            {
              type: "image",
              displayer: "Background1",
              key: "background1",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-3-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background2",
              key: "background2",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-1-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background3",
              key: "background3",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-4-new-opt.png",
            },
            {
              type: "image",
              displayer: "Background4",
              key: "background4",
              value:
                "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2019/07/bakery-slider-2-l-2-new-opt.png",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-24";
  }

  render() {
    console.log(this.getPropValue("slider")[0].value[1].value);

    const settings = {
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("wrapper")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.getPropValue("slider").map((item: any, index: number) => (
              <div className={this.decorateCSS("max-content")}>
                <div className={this.decorateCSS("items")} key={`key${index}`}>
                  <div className={this.decorateCSS("wrapper-slick")}>
                    <img
                      className={this.decorateCSS("background1")}
                      src={item.value[3].value}
                      alt=""
                    />
                    <img
                      className={this.decorateCSS("background3")}
                      src={item.value[5].value}
                      alt=""
                    />
                    <img
                      className={this.decorateCSS("top-img")}
                      src={item.value[0].value}
                      alt=""
                    />
                    <img
                      className={this.decorateCSS("background2")}
                      src={item.value[4].value}
                      alt=""
                    />
                    <img
                      className={this.decorateCSS("img-background")}
                      src={item.value[6].value}
                      alt=""
                    />
                    <div className={this.decorateCSS("text-container")}>
                      <div className={this.decorateCSS("upper-text")}>
                        {item.value[1].value}
                      </div>
                      <div className={this.decorateCSS("lower-text")}>
                        {item.value[2].value}
                      </div>
                    </div>
                    <div className={this.decorateCSS("circle")}>
                      <div className={this.decorateCSS("innerCircle")}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Header24;
