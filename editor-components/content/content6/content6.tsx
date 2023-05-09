import Slider from "react-slick";
import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./content6.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class Content6 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "object",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "array",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column",
      value: true
    });
  }
  getName(): string {
    return "Two Layout Slider Page";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")}`}
            
          >
            <div
              className={this.decorateCSS("header-page")}
              
            >
              <h1
                className={this.decorateCSS("first-header")}
                
              >
                {this.getPropValue("title")}
              </h1>
              <p>{this.getPropValue("content")}</p>
            </div>
            <div
              className={this.decorateCSS("slider-parent")}
              
            >
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.getPropValue("header")[0].value.map(
                  (item: any, index: number) => (
                    <img
                      src={item.value}
                      className={this.decorateCSS("img")}
                      
                      key={index}
                    />
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

export default Content6;
