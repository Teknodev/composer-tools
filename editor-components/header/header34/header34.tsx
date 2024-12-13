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
    this.addProp({
      type: "boolean",
      key: "overlayActive",
      displayer: "Overlay Active",
      value: true
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("display-none", true);
    this.setComponentState("animation-text", false);
    this.setComponentState("display", true);
    this.setComponentState("active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("slider-ref-text", React.createRef());
    this.setComponentState("isTransitioning", false);
  }
  getName(): string {
    return "Header 34";
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      afterChange: (index: number) => {
        this.setComponentState("animation-active", false);
        this.setComponentState("display-none", true);
        this.setComponentState("isTransitioning", false);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;

        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("display-none", false);
        this.setComponentState("isTransitioning", true);
        setTimeout(() => {
          this.setComponentState("animation-active", true);
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };
    const settingsText = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      dotsClass: this.decorateCSS("dots"),
      afterChange: (index: number) => {
        this.setComponentState("animation-text", false);
        this.setComponentState("display", true);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;

        this.setComponentState("display", false);
        setTimeout(() => {
          this.setComponentState("animation-text", true);
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            ref={this.getComponentState("slider-ref")}
            className={this.decorateCSS("carousel")}
          >

            {this.getPropValue("slider").map((item: any, indexSlider: number) => {
              return (
                <div className={this.decorateCSS("content")} key={indexSlider}>
                  {item.getPropValue("image") && (
                    <img src={item.getPropValue("image")} className={this.decorateCSS("image")} />
                  )}
                  {this.getPropValue("overlayActive") && (
                    <div className={this.decorateCSS("overlay")}></div>
                  )}
                </div>
              )

            })}
          </ComposerSlider>
          <ComposerSlider
            {...settingsText}
            ref={this.getComponentState("slider-ref-text")}
            className={`${this.decorateCSS("slider-text")} ${this.getComponentState("animation-text") &&
              this.decorateCSS("unvisible")
              } ${this.getComponentState("display") &&
              this.decorateCSS("display-none")
              }`}
          >
            {this.getPropValue("slider").map((item: any, indexSlider: number) => (
              <div className={this.decorateCSS("slider-content")}>
                {(this.castToString(item.getPropValue("title")) || this.castToString(item.getPropValue("button_text"))) && (
                  <div className={this.decorateCSS("text-and-button")}>
                    {this.castToString(item.getPropValue("title")) && (
                      <div className={this.decorateCSS("text")}>{item.getPropValue("title")}</div>
                    )}
                    {this.castToString(item.getPropValue("button_text")) && (
                      <ComposerLink path={item.getPropValue("button_link")}>
                        <Base.Button className={this.decorateCSS("button")}>{item.getPropValue("button_text")}</Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                )}
              </div>
            ))}
          </ComposerSlider>
          {(this.getPropValue("next_icon") || this.getPropValue("prev_icon")) && (
            <div className={this.decorateCSS("arrow-content")}>
              {this.getPropValue("next_icon") && (
                <ComposerIcon
                  name={this.getPropValue("next_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS(
                      "next-icon"
                    )} ${this.decorateCSS("arrow")} `,
                    onClick: () => {
                      if (this.getComponentState("isTransitioning")) return;

                      const sliderRef = this.getComponentState("slider-ref");
                      const sliderRefText = this.getComponentState("slider-ref-text");

                      if (sliderRef?.current) {
                        sliderRef.current.slickNext();
                      }
                      if (sliderRefText?.current) {
                        sliderRefText.current.slickNext();
                      }
                    },
                  }}
                />
              )}
              {this.getPropValue("prev_icon") && (
                <ComposerIcon
                  name={this.getPropValue("prev_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS(
                      "prev-icon"
                    )} ${this.decorateCSS("arrow")}`,
                    onClick: () => {
                      if (this.getComponentState("isTransitioning")) return;

                      const sliderRef = this.getComponentState("slider-ref");
                      const sliderRefText = this.getComponentState("slider-ref-text");

                      if (sliderRef?.current) {
                        sliderRef.current.slickPrev();
                      }
                      if (sliderRefText?.current) {
                        sliderRefText.current.slickPrev();
                      }
                    },
                  }}
                />
              )}
            </div>
          )}
          {(this.getPropValue("slider")[this.getComponentState("active-index")].getPropValue("image") || this.getPropValue("overlayActive")) && (
            <div
              className={`${this.decorateCSS("overlay-animation-box")} ${this.getComponentState("animation-active") &&
                this.decorateCSS("visible")
                } ${this.getComponentState("display-none") &&
                this.decorateCSS("display-none")
                } ${this.decorateCSS(this.getComponentState("from"))}`}
            >
              {this.getPropValue("overlayActive") && (
                <div className={this.decorateCSS("overlay")}></div>
              )}
              {this.getPropValue("slider")[this.getComponentState("active-index")].getPropValue("image") && (
                <img
                  className={this.decorateCSS("animation-image")}
                  src={
                    this.getPropValue("slider")[
                      this.getComponentState("active-index")].getPropValue("image")
                  }
                />
              )}
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default HeaderComponent34;
