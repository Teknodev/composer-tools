import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
interface Item {
  title: string | null;
}
class Header1 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background-layout",
      displayer: "Background Layout",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d7?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "image",
      key: "sun",
      displayer: "Sun",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d6?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 1",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FORWARD",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "BRANDING AND IDENTITY",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 1,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-1",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d8?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PIXFLOW",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "WEB AND APPLICATION",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 2,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-2",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d9?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 3",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "HARDDOT",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "GRAPHICS AND IDENTITY",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 3,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-3",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243da?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 4",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "TRAVELIO",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "PACKAGING AND WEB",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 4,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-4",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243db?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 5",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CROPOES",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "DESIGN AND IDENTITY",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 5,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-5",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243dc?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    });
    this.setActiveTab(0);

  }

  getName(): string {
    return "Header 1";
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }

  // renderTitleWithAnimation(title: string) {
  //   return (
  //     <span className={this.decorateCSS("animated-title")}>
  //       {title.split("").map((char, index) => (
  //         <span
  //           key={index}
  //           style={{ animationDelay: `${index * 0.1}s` }}
  //         >
  //           {char}
  //         </span>
  //       ))}
  //     </span>
  //   );
  // }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      dotsClass: this.decorateCSS("dots"),
      beforeChange: (current: number, next: number) => {
        this.setActiveTab(next);
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("image-container-1")}>
          <img
            className={this.decorateCSS("background-layout")}
            src={this.getPropValue("background-layout")}
            alt=""
          />
        </div>
        <div className={this.decorateCSS("image-container-2")}>
          <img src={this.getPropValue("sun")} alt="" />
        </div>
        <div className={this.decorateCSS("image-container-3")}>
          <img src={this.getPropValue("sun")} alt="" />
        </div>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider {...settings}>
            {this.castToObject<[]>("sliders").map(
              (item: any, index: number) => {
                return (
                  <div
                    className={this.decorateCSS("return-container")}
                    key={index}
                  >
                    <div className={this.decorateCSS("background-text")}>
                      {item.title}
                    </div>
                    <div className={this.decorateCSS("content-container")}>
                      <img
                        className={
                          this.decorateCSS("image") +
                          " " +
                          (this.getComponentState("activeTab") == index &&
                            this.decorateCSS("active-image"))
                        }
                        src={item.image}
                        alt=""
                      />

                      <h1
                        className={
                          this.decorateCSS("title") +
                          " " +
                          (this.getComponentState("activeTab") == index &&
                            this.decorateCSS("active-title"))
                        }>
                        {item.title}
                      </h1>


                      <h1 className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </h1>
                      <h1 className={this.decorateCSS("sliderNumber")}>
                        <span className={this.decorateCSS("overlay")}></span>
                        <span className={this.decorateCSS("slider-number")}>
                          {item.sliderNumber}
                        </span>
                      </h1>
                    </div>
                  </div>
                );
              }
            )}
          </ComposerSlider>
        </div >
      </div >
    );
  }
}

export default Header1;
