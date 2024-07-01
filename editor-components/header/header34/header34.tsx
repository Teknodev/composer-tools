import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header34.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HeaderComponent34 extends BaseHeader {
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
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cb9?alt=media&timestamp=1719483639151",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Design",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "PURCHASE INTACT",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cbb?alt=media&timestamp=1719483639151",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Jobs",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "CONTACT US",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cba?alt=media&timestamp=1719483639151",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Clothes",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "BUY",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("display-none", true);
    this.setComponentState("slider-ref", React.createRef());
  }
  getName(): string {
    return "Header 34";
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: false,
      speed: 1700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: this.decorateCSS("dots"),
      afterChange: (index: number) => {
        this.setComponentState("animation-active", false);
        this.setComponentState("display-none", true);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;

        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("display-none", false);
        setTimeout(() => {
          this.setComponentState("animation-active", true);
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map((item: any, indexSlider: number) => (
            <div className={this.decorateCSS("content")} key={indexSlider}>
              <img src={item.getPropValue("image")} />
              <div className={this.decorateCSS("overlay")}></div>
              <div
                className={`${this.decorateCSS("text-and-button")} ${
                  this.getComponentState("animation-active") &&
                  this.decorateCSS("un-visible")
                }`}
              >
                <h1>{item.getPropValue("title")}</h1>
                <ComposerLink path={item.getPropValue("button_link")}>
                  <button>{item.getPropValue("button_text")}</button>
                </ComposerLink>
              </div>
              <ComposerIcon
                name={this.getPropValue("next_icon")}
                propsIcon={{
                  className: `${this.decorateCSS(
                    "next-icon"
                  )} ${this.decorateCSS("arrow")} ${
                    !this.getComponentState("display-none") &&
                    this.decorateCSS("un-visible")
                  }`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
              <ComposerIcon
                name={this.getPropValue("prev_icon")}
                propsIcon={{
                  className: `${this.decorateCSS(
                    "prev-icon"
                  )} ${this.decorateCSS("arrow")} ${
                    !this.getComponentState("display-none") &&
                    this.decorateCSS("un-visible")
                  }`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
            </div>
          ))}
        </ComposerSlider>
        <div
          className={`${this.decorateCSS("overlay-animation-box")} ${
            this.getComponentState("animation-active") &&
            this.decorateCSS("visible")
          } ${
            this.getComponentState("display-none") &&
            this.decorateCSS("display-none")
          } ${this.decorateCSS(this.getComponentState("from"))}`}
        >
          <img
            src={
              this.getPropValue("slider")[
                this.getComponentState("active-index")
              ].value
            }
          />
        </div>
      </div>
    );
  }
}

export default HeaderComponent34;
