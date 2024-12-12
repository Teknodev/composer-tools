import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header34.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
interface Slider {
  image: string;
  title: JSX.Element
}

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
    console.log(this.getPropValue("slider")[
      this.getComponentState("active-index")].getPropValue("image"))
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: false,
      speed: 3000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
    };
    const settingsText = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay: false,
      fade: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      dotsClass: this.decorateCSS("dots"),
      afterChange: (index: number) => {
        this.setComponentState("animation-active", true);
        this.setComponentState("display-none", true);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;

        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("display-none", false);
        setTimeout(() => {
          this.setComponentState("animation-active", false);
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
              <img src={item.getPropValue("image")} className={this.decorateCSS("image")} />
              <div className={this.decorateCSS("overlay")}></div>
            </div>
          ))}
        </ComposerSlider>
        <ComposerSlider
          {...settingsText}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("slider-text")}>
          {this.getPropValue("slider").map((item: any, indexSlider: number) => (
            <div className={this.decorateCSS("slider-content")}>
              <div
                className={`${this.decorateCSS("text-and-button")} ${this.getComponentState("animation-active") &&
                  this.decorateCSS("un-visible")
                  }`}
              >
                <div className={this.decorateCSS("text")}>{item.getPropValue("title")}</div>
                <ComposerLink path={item.getPropValue("button_link")}>
                  <Base.Button className={this.decorateCSS("button")}>{item.getPropValue("button_text")}</Base.Button>
                </ComposerLink>
              </div>
            </div>
          ))}
        </ComposerSlider>
        <div className={this.decorateCSS("arrow-content")}>
          <ComposerIcon
            name={this.getPropValue("next_icon")}
            propsIcon={{
              className: `${this.decorateCSS(
                "next-icon"
              )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
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
              )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
              this.decorateCSS("un-visible")
                }`,
              size: 40,
              onClick: () => {
                this.getComponentState("slider-ref").current.slickPrev();
              },
            }}
          />
        </div>
        <div
          className={`${this.decorateCSS("overlay-animation-box")} ${this.getComponentState("animation-active") &&
            this.decorateCSS("visible")
            } ${this.getComponentState("display-none") &&
            this.decorateCSS("display-none")
            } ${this.decorateCSS(this.getComponentState("from"))}`}
        >
          <div className={this.decorateCSS("overlay")}></div>
          <img
            className={this.decorateCSS("animation-image")}
            src={
              this.getPropValue("slider")[
                this.getComponentState("active-index")].getPropValue("image")
            }
          />
        </div>
      </div>
    );
  }
}

export default HeaderComponent34;
