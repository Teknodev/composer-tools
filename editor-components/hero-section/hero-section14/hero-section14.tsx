import * as React from "react";
import styles from "./hero-section14.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Slides = {
  logo: TypeMediaInputValue;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  buttons: Array<Buttons>;
  overlay: boolean;
};

type Buttons = INPUTS.CastedButton;

class HeroSection14 extends BaseHeroSection {
  slideRefs: React.RefObject<HTMLDivElement>[] = [];
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slides",
      value: [
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Charge Your Phone Safely!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab4df803b007002cc71dac?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },

            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "White")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "For Everything and Everyone",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab4e4703b007002cc71de2?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "White")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Featured Accessories",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab4df803b007002cc71dac?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "White")],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Hero Section 14";
  }

  render() {
    const slides = this.castToObject<Slides[]>("slides");
    const activeSlideIndex = this.getComponentState("activeSlide");
    const activeSlide = slides[activeSlideIndex];
    const isImagePresent = activeSlide?.image ? true : false;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: this.getPropValue("autoplay"),
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")} ${!isImagePresent && this.decorateCSS("noDots-img")}`,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
          this.setComponentState("animation", false);
        }
      },
    };

    const isAnimation = this.getPropValue("animation");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
            {slides.map((item: Slides, index: number) => {
              const image = item.image;
              const title = this.castToString(item.title);
              const description = this.castToString(item.description);
              const logo = item.logo;
              const isActive = this.getComponentState("activeSlide") === index;
              const containerClass = this.decorateCSS("content");

              const noBgClass = !image && this.decorateCSS("no-bg");

              return (
                <div className={this.decorateCSS("slide")} key={`header14-${index}`}>
                  {image && (
                    <>
                      <Base.Media value={item.image} className={this.decorateCSS("bg-img")} autoPlay muted loop playsInline />
                      {item.overlay && <div className={this.decorateCSS("overlay")} />}
                    </>
                  )}
                  <div className={`${this.decorateCSS("content-wrapper")} ${isActive && isAnimation && this.decorateCSS("fade-in")}`}>
                    <Base.VerticalContent className={`${containerClass} ${noBgClass}`}>
                      {logo && (
                        <div className={this.decorateCSS("logo-wrapper")}>
                          <Base.Media value={item.logo} className={`${this.decorateCSS("logo")} ${image && this.decorateCSS("logo-with-image")}`} />
                        </div>
                      )}
                      {title && <Base.SectionTitle className={`${this.decorateCSS("title")} ${image && this.decorateCSS("title-with-image")}`}>{item.title}</Base.SectionTitle>}
                      {description && <Base.SectionDescription className={`${this.decorateCSS("description")} ${image && this.decorateCSS("description-with-image")}`}>{item.description}</Base.SectionDescription>}

                      {item.buttons.length > 0 && (
                        <div className={this.decorateCSS("buttons-container")}>
                          {item.buttons.map((buttonItem: any, indexButton: number) => {
                            const buttonText = this.castToString(buttonItem.text);
                            return (
                              buttonText && (
                                <ComposerLink path={buttonItem.url}>
                                  <Base.Button buttonType={buttonItem.type} key={indexButton} className={this.decorateCSS("button")}>
                                    <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                  </Base.Button>
                                </ComposerLink>
                              )
                            );
                          })}
                        </div>
                      )}
                    </Base.VerticalContent>
                  </div>
                </div>
              );
            })}
          </ComposerSlider>
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection14;

