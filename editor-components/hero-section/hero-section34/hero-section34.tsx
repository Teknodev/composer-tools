import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section34.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Slider {
  logo?: TypeMediaInputValue;
  image: string;
  subtitle?: React.JSX.Element;
  title: React.JSX.Element;
  description?: React.JSX.Element;
  button: INPUTS.CastedButton;
}

class HeroSection34 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "prev_icon",
      displayer: "Prev Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: { type: "icon", name: "GrFormPrevious" },  
    });
    this.addProp({
      type: "media",
      key: "next_icon",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: { type: "icon", name: "GrFormNext" },  
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
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: { type: "image", url:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cba?alt=media&timestamp=1719483639151",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: { type: "image", url:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a443bd2970002c626cb9?alt=media&timestamp=1719483639151",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Jobs",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: { type: "image", url:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693bfee3875e15002c62e85e?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Clothes",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
    return "Hero Section 34";
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
                {slides[overlayActiveIndex].image && <Base.Media className={this.decorateCSS("image")} value={slides[overlayActiveIndex].image} />}
              </div>
            </div>

            <div className={this.decorateCSS("slider")}>
              {slides[activeIndex].image &&
                <Base.Media
                  value={slides[activeIndex].image}
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
                <Base.VerticalContent className={this.decorateCSS("text-content")}>
                  {slides[overlayActiveIndex].logo && (
                    <Base.Media value={slides[overlayActiveIndex].logo} className={this.decorateCSS("logo")} />
                  )}
                  {this.castToString(slides[overlayActiveIndex].subtitle) && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {slides[overlayActiveIndex].subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(slides[overlayActiveIndex].title) && (
                    <Base.H1 className={this.decorateCSS("content-title")}>
                      {slides[overlayActiveIndex].title}
                    </Base.H1>
                  )}
                  {this.castToString(slides[overlayActiveIndex].description) && (
                    <Base.P className={this.decorateCSS("description")}>
                      {slides[overlayActiveIndex].description}
                    </Base.P>
                  )}
                  {this.castToString(slides[overlayActiveIndex].button.text) && (
                    <div className={this.decorateCSS("button-container")}>
                      <ComposerLink path={slides[overlayActiveIndex].button.url}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={slides[overlayActiveIndex].button.type}>
                          <Base.P className={this.decorateCSS("button-text")}>{slides[overlayActiveIndex].button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>
              </Base.MaxContent>
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "prev"
            )}`}
            onClick={handlePrev}
          >
            <Base.Media value={this.getPropValue("prev_icon")} />
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "next"
            )}`}
            onClick={handleNext}
          >
            <Base.Media value={this.getPropValue("next_icon")} />
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

export default HeroSection34;

