import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header34.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface Slider {
  image: string;
  title: React.JSX.Element;
  button: INPUTS.CastedButton;
}

class Header34 extends BaseHeader {
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
            INPUTS.BUTTON("button", "Button", "PURCHASE INTACT", "", null, null, "White"),
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
            INPUTS.BUTTON("button", "Button", "CONTACT US", "", null, null, "White"),
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
            INPUTS.BUTTON("button", "Button", "BUY", "", null, null, "White"),
          ],
        },
      ],
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
  static getName(): string {
    return "Header 34";
  }

  render() {
    const slides = this.castToObject<Slider[]>("slider");

    const activeIndex = this.getComponentState("active-index");
    const activeSlide = slides[activeIndex] || { image: "" };
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
      <div className={`${this.decorateCSS("container")} ${!!activeSlide.image == false && this.decorateCSS("no-image")}`}>
        <div
          className={this.decorateCSS("max-content")}
        >
          <div className={this.decorateCSS("slider-container")}>
            <div
              className={`${this.decorateCSS("overlay")} ${this.decorateCSS(`overlay-${slideDirection}`)} ${slideStatus === "sliding"
                ? this.decorateCSS("active")
                : slideStatus === "ended"
                  ? this.decorateCSS("close")
                  : slideStatus === "idle"
                    ? this.decorateCSS("idle")
                    : ""
                }`}
            >
              <div className={this.decorateCSS("overlay-image")}>
                {slides[overlayActiveIndex].image && <img src={slides[overlayActiveIndex].image} alt="" />}
              </div>
            </div>

            <div className={this.decorateCSS("slider")}>
              {slides[activeIndex].image &&
                <img
                  src={slides[activeIndex].image}
                  alt=""
                  className={this.decorateCSS("image")}
                />}
            </div>
          </div>
          <div
            className={`${this.decorateCSS(
              "contentContainer"
            )} animate__animated ${this.getComponentState(
              "contentAnimationClass"
            )}`}
          >
            <Base.MaxContent className={this.decorateCSS("content")}>
              {this.castToString(slides[overlayActiveIndex].title) && (
                <Base.H1 className={this.decorateCSS("content-title")}>
                  {slides[overlayActiveIndex].title}
                </Base.H1>
              )}
              {this.castToString(slides[overlayActiveIndex].button.text) && (
                <ComposerLink path={slides[overlayActiveIndex].button.url}>
                  <Base.Button className={this.decorateCSS("button")} buttonType={slides[overlayActiveIndex].button.type}>
                    {slides[overlayActiveIndex].button.text}
                  </Base.Button>
                </ComposerLink>
              )}
            </Base.MaxContent>
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "prev"
            )}`}
            onClick={handlePrev}
          >
            <Base.Icon name={this.getPropValue("prev_icon")} />
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "next"
            )}`}
            onClick={handleNext}
          >
            <Base.Icon name={this.getPropValue("next_icon")} />
          </div>

          <div className={this.decorateCSS("dots")}>
            {slides.map((_: any, index: number) => (
              <div
                key={index}
                className={`${this.decorateCSS("dot")} ${index === activeIndex ? this.decorateCSS("active") : ""
                  }`}
                onClick={async () => {
                  if (slideStatus === "sliding") return;

                  const direction = index > activeIndex ? "right" : "left";
                  this.setComponentState(
                    "contentAnimationClass",
                    "animate__fadeOut"
                  );
                  await delay(10);
                  this.setComponentState("overlay-active-index", index);
                  this.setComponentState("slide-direction", direction);
                  await delay(10);
                  this.setComponentState(
                    "contentAnimationClass",
                    "animate__fadeInUp"
                  );
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

export default Header34;
