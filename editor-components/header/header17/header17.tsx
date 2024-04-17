import * as React from "react";
import styles from "./header17.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Header17 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Year",
              key: "year",
              value: "2023",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Scandinavian Style House",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc94d057bdf002c2ad72e?alt=media&timestamp=1693305142416",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
              value: "",
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
              displayer: "Year",
              key: "year",
              value: "2021",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Contemporary Style House",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc94d057bdf002c2ad72d?alt=media&timestamp=1693305142417",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
              value: "",
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
              displayer: "Year",
              key: "year",
              value: "2019",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Metal Facade Coatings",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc94d057bdf002c2ad72c?alt=media&timestamp=1693305142417",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
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
    });

    this.addProp({
      type: "boolean",
      displayer: "Column Direction",
      key: "true",
      value: false,
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-17";
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
      arrows: false,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map((item: any, index: number) => (
            <div className={this.decorateCSS("content")} key={`key${index}`}>
              <img src={item.getPropValue("image")} alt="" />

              <div
                className={`${this.decorateCSS("slider-item-container")} ${
                  this.getPropValue("true") && this.decorateCSS("content-reverse")
                }`}
              >
                <div className={this.decorateCSS("slider-item-content")}>
                  <div className={this.decorateCSS("title-box")}>
                    <span className={this.decorateCSS("year")}>
                      {item.getPropValue("year")}
                    </span>
                    <h1 className={this.decorateCSS("title")}>
                      {item.getPropValue("title")}
                    </h1>
                  </div>
                  <div className={this.decorateCSS("view-button")}>
                    <ComposerLink path={item.getPropValue("button-url")}>
                      <span className={this.decorateCSS("view-button-text")}>
                        {item.getPropValue("button-text")}
                      </span>
                    </ComposerLink>
                  </div>
                </div>
              </div>
              <ComposerIcon
                name={this.getPropValue("next_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("next-icon")} ${this.decorateCSS(
                    "arrow"
                  )} `,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
              <ComposerIcon
                name={this.getPropValue("prev_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("prev-icon")} ${this.decorateCSS(
                    "arrow"
                  )}`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
            </div>
          ))}
        </ComposerSlider>
      </div>
    );
  }
}

export default Header17;
