import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header34.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
interface Slider {
  image: string;
  title: JSX.Element;
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
      value: true,
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("display-none", true);
    this.setComponentState("animation-text", false);
    this.setComponentState("display", true);
    this.setComponentState("active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("slider-ref-text", React.createRef());
    this.setComponentState("isTransitioning", false);
    this.setComponentState("slideStatus", "");
    this.setComponentState("slide-direction", "left");
    this.setComponentState("overlay-active-index", 0);

    this.setComponentState("contentAnimationClass", "animate__fadeInUp");
  }
  getName(): string {
    return "Header 34";
  }

  render() {
    const allImagesAbsent = this.getPropValue("slider").every(
      (item: any) => !item.getPropValue("image")
    );

    const slides = this.getPropValue("slider").map((item: any) => ({
      image: item.getPropValue("image"),
      title: item.getPropValue("title"),
      buttonText: item.getPropValue("button_text"),
      link: item.getPropValue("button_link"),
    }));

    const activeIndex = this.getComponentState("active-index");
    const slideStatus = this.getComponentState("slideStatus");
    const slideDirection = this.getComponentState("slide-direction");
    const overlayActiveIndex = this.getComponentState("overlay-active-index");

    const handleNext = async (): Promise<void> => {
      if (slideStatus === "sliding") return;
      this.setComponentState("contentAnimationClass", "animate__fadeOut");
      await delay(500);
      this.setComponentState(
        "overlay-active-index",
        (overlayActiveIndex + 1) % slides.length
      );
      this.setComponentState("slide-direction", "right");
      await delay(10);
      this.setComponentState("slideStatus", "sliding");
      this.setComponentState("contentAnimationClass", "animate__fadeInUp");
      await delay(800);
      this.setComponentState("active-index", (activeIndex + 1) % slides.length);
      this.setComponentState("slideStatus", "ended");
      await delay(1000);
      this.setComponentState("slideStatus", "idle");
    };

    const handlePrev = async (): Promise<void> => {
      if (slideStatus === "sliding") return;
      this.setComponentState("contentAnimationClass", "animate__fadeOut");
      await delay(500);
      this.setComponentState(
        "overlay-active-index",
        (overlayActiveIndex - 1 + slides.length) % slides.length
      );
      this.setComponentState("slide-direction", "left");
      await delay(10);
      this.setComponentState("slideStatus", "sliding");
      await delay(10);
      this.setComponentState("contentAnimationClass", "animate__fadeInUp");
      await delay(800);
      this.setComponentState(
        "active-index",
        (activeIndex - 1 + slides.length) % slides.length
      );
      this.setComponentState("slideStatus", "ended");
      await delay(1000);
      this.setComponentState("slideStatus", "idle");
    };

    const delay = (ms: number): Promise<void> => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div
          className={
            !allImagesAbsent
              ? this.decorateCSS("max-content")
              : this.decorateCSS("max-content-no-image")
          }
        >
          <div className={this.decorateCSS("slider-container")}>
            <div
              className={`${this.decorateCSS(`overlay-${slideDirection}`)} ${
                slideStatus === "sliding"
                  ? this.decorateCSS("active")
                  : slideStatus === "ended"
                  ? this.decorateCSS("close")
                  : slideStatus === "idle"
                  ? this.decorateCSS("idle")
                  : ""
              }`}
            >
              <div className={this.decorateCSS("overlay-image")}>
                <img src={slides[overlayActiveIndex].image} alt="" />
              </div>
            </div>

            <div className={this.decorateCSS("slider")}>
              <img
                src={slides[activeIndex].image}
                alt=""
                className={this.decorateCSS("image")}
              />
            </div>
          </div>
          <div
            className={`${this.decorateCSS(
              "content"
            )} animate__animated ${this.getComponentState(
              "contentAnimationClass"
            )}`}
          >
            {slides[overlayActiveIndex].title && (
              <Base.H1 className={this.decorateCSS("content-title")}>
                {slides[overlayActiveIndex].title}
              </Base.H1>
            )}
            {slides[overlayActiveIndex].buttonText && (
              <ComposerLink path={slides[overlayActiveIndex].link}>
                <Base.Button>{slides[overlayActiveIndex].buttonText}</Base.Button>
              </ComposerLink>
            )}
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "prev"
            )}`}
            onClick={handlePrev}
          >
            <ComposerIcon name={this.getPropValue("prev_icon")} />
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "next"
            )}`}
            onClick={handleNext}
          >
            <ComposerIcon name={this.getPropValue("next_icon")} />
          </div>

          <div className={this.decorateCSS("dots")}>
            {slides.map((_: any, index: number) => (
              <div
                key={index}
                className={`${this.decorateCSS("dot")} ${
                  index === activeIndex ? this.decorateCSS("active") : ""
                }`}
                onClick={async () => {
                  if (slideStatus === "sliding") return;
                  
                  const direction = index > activeIndex ? "right" : "left";
                  this.setComponentState("contentAnimationClass", "animate__fadeOut");
                  await delay(10);
                  this.setComponentState("overlay-active-index", index);
                  this.setComponentState("slide-direction", direction);
                  await delay(10);
                  this.setComponentState("contentAnimationClass", "animate__fadeInUp");
                  this.setComponentState("slideStatus", "sliding");
                  await delay(800);
                  this.setComponentState("active-index", index);
                  this.setComponentState("slideStatus", "ended");
                  await delay(1000);
                  this.setComponentState("slideStatus", "idle");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent34;
