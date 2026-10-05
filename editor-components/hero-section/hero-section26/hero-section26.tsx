import * as React from "react";
import styles from "./hero-section26.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Slide = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  logo: TypeMediaInputValue;
  url: string;
  image: TypeMediaInputValue;
  overlay: boolean;
};

type Arrows = {
  upIcon: TypeMediaInputValue;
  downIcon: TypeMediaInputValue;
};

const slide = (title: string, description: string, mediaUrl: string): TypeUsableComponentProps => ({
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
      value: title,
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value: description,
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
        url: mediaUrl,
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
});

class HeroSection26 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        slide("FOR THE ROAD", "3D Visualization", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f611?alt=media&timestamp=1719412135932"),
        slide("FALLING IN LOVE", "New illustrations", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f612?alt=media&timestamp=1719412135932"),
        slide("ROCK ON ROCK", "Design trends", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f613?alt=media&timestamp=1719412135932"),
        slide("JUST ONE MORE", "Photography", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f614?alt=media&timestamp=1719412135932"),
      ],
    });

    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "upIcon",
          displayer: "Up Icon",
          value: { type: "icon", name: "IoIosArrowUp" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "media",
          key: "downIcon",
          displayer: "Down Icon",
          value: { type: "icon", name: "IoIosArrowDown" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("next", null);
  }

  static getName(): string {
    return "Hero Section 26";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
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
      ...this.transformSliderValues(this.getPropValue("settings")),
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
    const enableLine = this.getPropValue("line");
    const enableSliderAnimation = this.getPropValue("animation");
    const arrows = this.castToObject<Arrows>("arrows");
    const hasUpIcon = this.hasMedia(arrows?.upIcon);
    const hasDownIcon = this.hasMedia(arrows?.downIcon);

    const slidesLength = slides.length;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides?.length > 0 && (
            <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider-wrapper")}>
              {slides.map((item: Slide, index: number) => {
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);
                const logoExist = this.hasMedia(item.logo);
                const imageExist = this.hasMedia(item.image);
                const descriptionExist = this.castToString(item.description);
                const stickToBottomCondition =
                  (imageExist && !(titleExist || descriptionExist)) ||
                    (!imageExist && (titleExist || descriptionExist))
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
                        <div className={`${this.decorateCSS("left-side")} ${!imageExist ? this.decorateCSS("no-image") : ""}`}>
                          <Base.VerticalContent
                            className={this.decorateCSS("left-side-content")}
                          >
                            {logoExist && (
                              <Base.Media
                                value={item.logo}
                                className={`${this.decorateCSS("logo")} ${item.logo.type === "image" ? this.decorateCSS("logo-image") : ""}`}
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
                              <div className={this.decorateCSS("line")} />
                            )}
                            {descriptionExist && (
                              <Base.SectionDescription className={this.decorateCSS("description")}>
                                {item.description}
                              </Base.SectionDescription>
                            )}
                          </Base.VerticalContent>
                        </div>
                      )}
                      {imageExist && (
                        <div className={this.decorateCSS("right-side")}>
                          <Base.Media
                            className={this.decorateCSS("image")}
                            value={this.withVideoSettings(item.image)}
                          />
                          {item.overlay && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </div>
                      )}
                      {
                        slidesLength > 1 && (hasUpIcon || hasDownIcon) && <div
                          className={`${this.decorateCSS("arrows")}
                        ${stickToBottomCondition}`}
                        >
                          {hasUpIcon && (
                            <div
                              className={this.decorateCSS("up-arrow")}
                              onClick={handlePrevClick}
                            >
                              <Base.Media value={arrows.upIcon} className={this.decorateCSS("icon")} />
                            </div>
                          )}
                          {hasDownIcon && (
                            <div
                              className={this.decorateCSS("down-arrow")}
                              onClick={handleNextClick}
                            >
                              <Base.Media value={arrows.downIcon} className={this.decorateCSS("icon")} />
                            </div>
                          )}
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

