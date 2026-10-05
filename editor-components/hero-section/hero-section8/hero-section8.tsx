import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ISliderData = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  url: string;
};

type IArrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
}

const slide = (subtitle: string, title: string, description: string, mediaUrl: string): TypeUsableComponentProps => ({
  type: "object",
  key: "slide",
  displayer: "Slide",
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
      key: "subtitle",
      displayer: "Subtitle",
      value: subtitle,
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
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl,
      },
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

class HeroSection8 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Text Animation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "sliderAnimation",
      displayer: "Animation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "pageNumber",
      displayer: "Page Number",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide(
          "PRODUCT, VOICE",
          "Maybe Speaker",
          "Vin TRIES TO REFLECT D  DIESEL'S VISION AND COMBINES",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e9?alt=media&timestamp=1719483639150"
        ),
        slide(
          "PEN",
          "Yaren Collection",
          "SYMBOLS THROUGH WHICH EXPRESS THEMSELVES",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150"
        ),
        slide(
          "INDUCTION",
          "Huggl Power Pack",
          "HUGGL IS AN INDUCTION CHARGING",
          "https://eremia-react.vercel.app/img/project/project3/1.jpg"
        ),
        slide(
          "ARCHITECTURE",
          "Principal Garden",
          "WE ARE THRILLED TO SHARE OUR NEW REEL WITH YOU ALL",
          "https://eremia-react.vercel.app/img/project/project4/1.jpg"
        ),
      ],
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevIcon",
          displayer: "Previous Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "GoArrowLeft",
          },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "GoArrowRight",
          },
        },
      ],
    });
    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("titleAnimationClass", "");
    this.setComponentState("descriptionAnimationClass", "");
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("centerSlide", 0);
  }

  static getName(): string {
    return "Hero Section 8";
  }

  handleAnimationEnd = ({ animationState, startingAnimation }: IAnimationProps) => {
    this.setComponentState(animationState, startingAnimation);
  };

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const slides = this.castToObject<ISliderData[]>("slider");
    const slideCount = slides.length;
    const sliderEffect = !!this.getPropValue("sliderAnimation");
    const textAnimation = this.getPropValue("textAnimation");
    const overlay = this.getPropValue("overlay");
    const arrows = this.castToObject<IArrows>("arrows");
    const allSlidesWithoutImages = slides.every((item: ISliderData) => !this.hasMedia(item.media));
    const centerSlide = Math.min(this.getComponentState("centerSlide") || 0, Math.max(slideCount - 1, 0));
    const current = slides[centerSlide];
    const currentNoImage = !this.hasMedia(current?.media);
    const noImageClass = currentNoImage ? this.decorateCSS("no-image") : "";

    const hasLogo = this.hasMedia(current?.logo);
    const isSubtitleExist = this.castToString(current?.subtitle);
    const isTitleExist = this.castToString(current?.title);
    const isDescriptionExist = this.castToString(current?.description);
    const hasInfo = hasLogo || isSubtitleExist || isTitleExist || isDescriptionExist;
    const hasPrev = this.hasMedia(arrows?.prevIcon);
    const hasNext = this.hasMedia(arrows?.nextIcon);
    const showPageNumber = this.getPropValue("pageNumber");

    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      fade: sliderEffect,
      swipe: true,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("titleAnimationClass", "animate__fadeIn");
        this.setComponentState("descriptionAnimationClass", "animate__fadeInLeft");
        this.setComponentState("centerSlide", newIndex);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");

    const animatedText = (stateKey: string) => ({
      className: textAnimation ? `animate__animated ${this.getComponentState(stateKey)}` : "",
      onAnimationEnd: () => {
        if (textAnimation) {
          this.handleAnimationEnd({ animationState: stateKey, startingAnimation: "" });
        }
      },
    });
    const subtitleAnimation = animatedText("titleAnimationClass");
    const titleAnimation = animatedText("descriptionAnimationClass");
    const descriptionAnimation = animatedText("descriptionAnimationClass");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("stage")}>
        <ComposerSlider
          {...settings}
          ref={sliderRef}
          className={`${this.decorateCSS("carousel")} ${allSlidesWithoutImages ? this.decorateCSS("no-image") : ""}`}
        >
          {slides.map((item: ISliderData, index: number) => {
            const hasItemMedia = this.hasMedia(item.media);
            return (
              <div
                key={index}
                className={`${this.decorateCSS("slide")} ${!sliderEffect ? this.decorateCSS("disabled-animate") : ""} ${
                  !hasItemMedia ? this.decorateCSS("slide-no-image") : ""
                } ${centerSlide === index + 1 ? this.decorateCSS("active") : ""}`}
              >
                <div className={this.decorateCSS("image-wrapper")}>
                  {hasItemMedia && <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("image")} />}
                  {hasItemMedia && overlay && <div className={this.decorateCSS("overlay")} />}
                </div>
              </div>
            );
          })}
        </ComposerSlider>
        <div className={this.decorateCSS("content-layer")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {slideCount > 0 && hasInfo && (
              <ComposerLink path={current?.url}>
                <Base.VerticalContent className={`${this.decorateCSS("info-box")} ${noImageClass}`}>
                  {hasLogo && <Base.Media value={current.logo} className={this.decorateCSS("logo")} />}
                  {isSubtitleExist && (
                    <Base.SectionSubTitle
                      className={`${this.decorateCSS("tag")} ${subtitleAnimation.className}`}
                      onAnimationEnd={subtitleAnimation.onAnimationEnd}
                    >
                      {current.subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {isTitleExist && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${titleAnimation.className}`}
                      onAnimationEnd={titleAnimation.onAnimationEnd}
                    >
                      {current.title}
                    </Base.SectionTitle>
                  )}
                  {this.getPropValue("line") && <div className={this.decorateCSS("line")}></div>}
                  {isDescriptionExist && (
                    <Base.SectionDescription
                      className={`${this.decorateCSS("description")} ${descriptionAnimation.className}`}
                      onAnimationEnd={descriptionAnimation.onAnimationEnd}
                    >
                      {current.description}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              </ComposerLink>
            )}
            {(hasPrev || hasNext || (showPageNumber && slideCount > 0)) && (
              <div className={this.decorateCSS("arrow-wrapper")}>
                {hasPrev && (
                  <div
                    className={`${this.decorateCSS("arrow-prev-wrapper")} ${this.decorateCSS("prev")} ${noImageClass}`}
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <div className={this.decorateCSS("arrow-prev")}>
                      <Base.Media value={arrows.prevIcon} className={`${this.decorateCSS("icon")} ${noImageClass}`} />
                    </div>
                  </div>
                )}
                {showPageNumber && slideCount > 0 && (
                  <div className={`${this.decorateCSS("pagination")} ${noImageClass}`}>
                    <Base.P className={this.decorateCSS("current-page")}>{centerSlide + 1}</Base.P>
                    <Base.P className={this.decorateCSS("slash")}>/</Base.P>
                    <Base.P className={this.decorateCSS("total-page")}>{slideCount}</Base.P>
                  </div>
                )}
                {hasNext && (
                  <div
                    className={`${this.decorateCSS("arrow-next-wrapper")} ${this.decorateCSS("next")} ${noImageClass}`}
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <div className={this.decorateCSS("arrow-next")}>
                      <Base.Media value={arrows.nextIcon} className={`${this.decorateCSS("icon")} ${noImageClass}`} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </Base.MaxContent>
        </div>
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection8;
