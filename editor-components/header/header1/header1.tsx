import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
// import ComposerSlider from "../../../composer-base-components/slider/slider";
import Slider from "react-slick";
class Header1 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background-layout",
      displayer: "Background Layout",
      value:
        "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-bg-03.jpg",
    });
    this.addProp({
      type: "image",
      key: "sun",
      displayer: "Sun",
      value:
        "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-bg-01.png",
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
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-01.jpg",
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
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-02.jpg",
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
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-03.jpg",
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
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-04.jpg",
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
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-05.jpg",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 1";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      // autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
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
          <Slider {...settings}>
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
                        className={this.decorateCSS("image")}
                        src={item.image}
                        alt=""
                      />
                      <h1 className={this.decorateCSS("title")}>
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
          </Slider>
        </div>
      </div>
    );
  }
}

export default Header1;
