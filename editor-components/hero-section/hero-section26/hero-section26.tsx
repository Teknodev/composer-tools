import * as React from "react";
import styles from "./hero-section26.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";

type Slide = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  logo: TypeMediaInputValue;
  url: string;
  image: TypeMediaInputValue;
  overlay: boolean;
};

class HeroSection26 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              value: "FOR THE ROAD",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "3D Visualization",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f611?alt=media&timestamp=1719412135932",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              value: "FALLING IN LOVE",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "New illustrations",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f612?alt=media&timestamp=1719412135932",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              value: "ROCK ON ROCK",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Design trends",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f613?alt=media&timestamp=1719412135932",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              value: "JUST ONE MORE",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Photography",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f614?alt=media&timestamp=1719412135932",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "up_icon",
      displayer: "Up Icon",
      value: { type: "icon", name: "IoIosArrowUp" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });
    this.addProp({
      type: "media",
      key: "down_icon",
      displayer: "Down Icon",
      value: { type: "icon", name: "IoIosArrowDown" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });

    this.addProp({
      type: "boolean",
      key: "enable_line",
      displayer: "Line",
      value: true
    })

    this.addProp({
      type: "boolean",
      key: "enable_slider_animation",
      displayer: "Animation",
    value: true
    })

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("next", null);
  }

  static getName(): string {
    return "Hero Section 26";
  }

  render() {
    const sliderRef = this.getComponentState("sliderRef");

    const handlePrevClick = () => {
      const slider = sliderRef.current;
      if (slider) slider.slickPrev();
    };

    const handleNextClick = () => {
      const slider = sliderRef.current;
      if (slider) slider.slickNext();
    };

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      draggable: true,
      vertical: true,
      verticalSwiping: true,
      centerPadding: '0px',
      beforeChange: (current: number, next: number) => {
        this.setComponentState("old", current);
        this.setComponentState("next", next);
      },
      afterChange: (current: number) => {
        this.setComponentState("old", null);
        this.setComponentState("next", null);
      },
    };

    const slides = this.castToObject<Slide[]>("sliders");
    const enableLine = this.getPropValue("enable_line");
    const enableSliderAnimation = this.getPropValue("enable_slider_animation");

    const slidesLength = slides.length;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides?.length > 0 && (
            <ComposerSlider {...settings} ref={sliderRef}>
              {slides.map((item: Slide, index: number) => {
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);
                const logoExist = item.logo;
                const descriptionExist = this.castToString(item.description);
                const stickToBottomCondition =
                  (item.image && !(titleExist || descriptionExist)) ||
                    (!item.image && (titleExist || descriptionExist))
                    ? this.decorateCSS("stick-to-bottom")
                    : "";

                return (
                  <div
                    className={`${this.decorateCSS("sliders")}
                      ${this.decorateCSS(
                      this.getComponentState("next") === index ||
                        this.getComponentState("old") === index
                        ? (enableSliderAnimation && "shrink")
                        : "",
                    )}`}
                    key={index}
                  >
                    <div className={this.decorateCSS("slider")}>
                      {(logoExist|| subtitleExist || titleExist || descriptionExist) && (
                        <div className={`${this.decorateCSS("left-side")} ${!item.image && this.decorateCSS("no-image")}`}>
                          <Base.VerticalContent
                            className={this.decorateCSS("left-side-content")}
                          >
                            {logoExist && (
                              <Base.Media
                                value={item.logo}
                                className={this.decorateCSS("logo")}
                              />
                            )}
                             {subtitleExist && (
                              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {item.subtitle}
                              </Base.SectionSubTitle>
                            )}
                            {titleExist && (
                              <ComposerLink path={item.url}>
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                  {item.title}
                                </Base.SectionTitle>
                              </ComposerLink>
                            )}
                            {enableLine && (
                              <span className={this.decorateCSS("line")} />
                            )}
                            {descriptionExist && (
                              <Base.SectionDescription className={this.decorateCSS("description")}>
                                {item.description}
                              </Base.SectionDescription>
                            )}
                          </Base.VerticalContent>
                        </div>
                      )}
                      {item.image && (
                        <div className={this.decorateCSS("right-side")}>
                          <Base.Media
                            autoPlay
                            loop
                            muted
                            className={this.decorateCSS("image")}
                            value={item.image}
                            />
                          {item.overlay && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </div>
                      )}
                      {
                        slidesLength > 1 && <div
                          className={`${this.decorateCSS("arrows")}
                        ${stickToBottomCondition}`}
                        >
                          <div
                            className={this.decorateCSS("up-arrow")}
                            onClick={handlePrevClick}
                          >
                            <Base.Media value={this.getPropValue("up_icon")} className={this.decorateCSS("icon")} />
                          </div>
                          <div
                            className={this.decorateCSS("down-arrow")}
                            onClick={handleNextClick}
                          >
                            <Base.Media value={this.getPropValue("down_icon")} className={this.decorateCSS("icon")} />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection26;

