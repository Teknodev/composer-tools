import * as React from "react";
import styles from "./header23.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";



class Header23 extends BaseHeader {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cc?alt=media&timestamp=1719483639150",
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
              displayer: "Background 1",
              key: "background1",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266ce?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d0?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
              key: "background4",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cf?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c7?alt=media&timestamp=1719483639150",
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
              displayer: "Background 1",
              key: "background1",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266c8?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
              key: "background4",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266cb?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d3?alt=media&timestamp=1719483639150",
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
              displayer: "Background 1",
              key: "background1",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d4?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 2",
              key: "background2",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d2?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 3",
              key: "background3",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619e2fbd2970002c6266d1?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background 4",
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
    return "Header-23";
  }

  render() {

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
        <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("wrapper")}>
        
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.getPropValue("slider").map((item: any, index: number) => (
              
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
            ))}
          </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Header23;
