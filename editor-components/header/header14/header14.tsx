import * as React from "react";
import styles from "./header14.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Slides = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  image: string;
  buttons: Array<Buttons>;
};

type Buttons = INPUTS.CastedButton;

class Header14 extends BaseHeader {
  slideRefs: React.RefObject<HTMLDivElement>[] = [];
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "GrFormNext",
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation Enabled",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6827299b2bb4c4002cf7ac6d?alt=media",
            },

            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682729eb2bb4c4002cf7ad11?alt=media",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68272a8f2bb4c4002cf7ae2f?alt=media",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Header 14";
  }

  render() {
    const slides = this.castToObject<Slides[]>("slides");
    const activeSlideIndex = this.getComponentState("activeSlide");
    const isImagePresent = slides[activeSlideIndex]?.image ? true : false;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
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
              const isActive = this.getComponentState("activeSlide") === index;
              const containerClass =
                !this.getPropValue("prevIcon") && !this.getPropValue("nextIcon")
                  ? this.decorateCSS("content-full")
                  : !this.getPropValue("prevIcon")
                  ? this.decorateCSS("content-left")
                  : !this.getPropValue("nextIcon")
                  ? this.decorateCSS("content-right")
                  : this.decorateCSS("content");

              const noBgClass = !image && this.decorateCSS("no-bg");

              return (
                <div className={this.decorateCSS("slide")} key={`header14-${index}`}>
                  {image && <img src={item.image} alt={item.image} className={this.decorateCSS("bg-img")} />}
                  <div className={`${this.decorateCSS("content-wrapper")} ${isActive && isAnimation && this.decorateCSS("fade-in")}`}>
                    <div className={`${containerClass} ${noBgClass}`}>
                      {title && <Base.SectionTitle className={`${this.decorateCSS("title")} ${image && this.decorateCSS("title-with-image")}`}>{item.title}</Base.SectionTitle>}
                      {description && <div className={this.decorateCSS("description")}>{item.description}</div>}

                      {item.buttons.length > 0 && (
                        <div className={this.decorateCSS("buttons-container")}>
                          {item.buttons.map((buttonItem: any, indexButton: number) => {
                            const buttonText = this.castToString(buttonItem.text);
                            return (
                              buttonText && (
                                <ComposerLink path={buttonItem.url}>
                                  <Base.Button buttonType={buttonItem.type} key={indexButton} className={this.decorateCSS("button")}>
                                    <span className={this.decorateCSS("text")}>{buttonItem.text}</span>
                                  </Base.Button>
                                </ComposerLink>
                              )
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  {slides.length > 1 && (
                    <>
                      <Base.Icon
                        name={this.getPropValue("prevIcon")}
                        propsIcon={{
                          className: `${this.decorateCSS("arrow")} ${!image && this.decorateCSS("no-bg")} ${this.decorateCSS("prev-icon")}`,
                          onClick: () => {
                            this.getComponentState("slider-ref").current.slickPrev();
                          },
                        }}
                      />
                      <Base.Icon
                        name={this.getPropValue("nextIcon")}
                        propsIcon={{
                          className: `${this.decorateCSS("arrow")} ${!image && this.decorateCSS("no-bg")} ${this.decorateCSS("next-icon")}`,
                          onClick: () => {
                            this.getComponentState("slider-ref").current.slickNext();
                          },
                        }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </ComposerSlider>
        </div>
      </Base.Container>
    );
  }
}

export default Header14;
