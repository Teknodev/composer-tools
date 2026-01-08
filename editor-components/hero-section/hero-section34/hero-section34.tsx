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
  overlay?: boolean;
}

class HeroSection34 extends BaseHeroSection {
    autoplayInterval?: ReturnType<typeof setInterval>;

    componentDidMount() {
      this.setComponentState("slideStatus", "idle");
      this.setupAutoplay();
    }

    componentDidUpdate() {
      this.setupAutoplay();
    }

    componentWillUnmount() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
    }

    setupAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
      if (this.getPropValue("autoplay")) {
        this.autoplayInterval = setInterval(() => {
          if (this.getComponentState("slideStatus") === "idle") {
            this.handleNextAutoplay();
          }
        }, 2000);
      }
    }

    async handleNextAutoplay() {
      const slides = this.castToObject<Slider[]>("slider");
      const activeIndex = this.getComponentState("active-index");
      const overlayActiveIndex = this.getComponentState("overlay-active-index");
      const slideStatus = this.getComponentState("slideStatus");
      if (slideStatus === "sliding") return;
      this.setComponentState("contentAnimationClass", "animate__fadeOut");
      await new Promise((r) => setTimeout(r, 500));
      this.setComponentState("overlay-active-index", (overlayActiveIndex + 1) % slides.length);
      this.setComponentState("slide-direction", "right");
      await new Promise((r) => setTimeout(r, 10));
      this.setComponentState("slideStatus", "sliding");
      this.setComponentState("contentAnimationClass", "animate__fadeInUp");
      await new Promise((r) => setTimeout(r, 800));
      this.setComponentState("active-index", (activeIndex + 1) % slides.length);
      this.setComponentState("slideStatus", "ended");
      await new Promise((r) => setTimeout(r, 1000));
      this.setComponentState("slideStatus", "idle");
    }
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
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
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
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
    const activeSlide = slides[activeIndex] || { image: "", overlay: false };
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
      <Base.Container className={`${this.decorateCSS("container")} ${!!activeSlide.image == false && this.decorateCSS("no-image")}`}>
        <div
          className={`${this.decorateCSS("max-content")} ${activeSlide.overlay ? this.decorateCSS("overlay-active") : ""}`}
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
              {activeSlide.image && (
                <Base.Media
                  value={activeSlide.image}
                  className={`${this.decorateCSS("image")} ${this.decorateCSS("active")}`}
                />
              )}
            </div>
          </div>
          <div
            className={`${this.decorateCSS("contentContainer")} animate__animated ${this.getComponentState("contentAnimationClass")}`}
          >
            {slides.map((slide, idx) => (
              <Base.MaxContent key={idx} className={this.decorateCSS("content")} style={{ display: overlayActiveIndex === idx ? "block" : "none" }}> 
                <Base.VerticalContent data-has-image={slide.image ? "true" : "false"} className={this.decorateCSS("text-content")}> 
                  {slide.logo && (
                    <Base.Media
                      data-has-image={slide.image ? "true" : "false"}
                      value={slide.logo}
                      className={this.decorateCSS("logo")}
                    />
                  )}
                  {this.castToString(slide.subtitle) && (
                    <Base.SectionSubTitle
                      data-has-image={slide.image ? "true" : "false"}
                      className={`${this.decorateCSS("subtitle")} ${slide.image && this.decorateCSS("subtitle-with-image")}`}> 
                      {slide.subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(slide.title) && (
                    <Base.SectionTitle
                      data-has-image={slide.image ? "true" : "false"}
                      className={`${this.decorateCSS("title")} ${slide.image && this.decorateCSS("title-with-image")}`}> 
                      {slide.title}
                    </Base.SectionTitle>
                  )}
                  {this.castToString(slide.description) && (
                    <Base.SectionDescription
                      data-has-image={slide.image ? "true" : "false"}
                      className={`${this.decorateCSS("description")} ${slide.image && this.decorateCSS("description-with-image")}`}> 
                      {slide.description}
                    </Base.SectionDescription>
                  )}
                  {this.castToString(slide.button.text) && (
                    <div className={this.decorateCSS("button-container")}> 
                      <ComposerLink path={slide.button.url}> 
                        <Base.Button className={this.decorateCSS("button")} buttonType={slide.button.type}> 
                          <Base.P className={this.decorateCSS("button-text")}>{slide.button.text}</Base.P> 
                        </Base.Button> 
                      </ComposerLink> 
                    </div> 
                  )}
                </Base.VerticalContent> 
              </Base.MaxContent>
            ))}
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "prev"
            )}`}
            onClick={handlePrev}
          >
            <Base.Media className={this.decorateCSS("prev-icon")} value={this.getPropValue("prev_icon")} />
          </div>

          <div
            className={`${this.decorateCSS("arrow")} ${this.decorateCSS(
              "next"
            )}`}
            onClick={handleNext}
          >
            <Base.Media className={this.decorateCSS("next-icon")} value={this.getPropValue("next_icon")} />
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
      </Base.Container>
    );
  }
}

export default HeroSection34;

