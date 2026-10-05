import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section32.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Slide = {
  media: TypeMediaInputValue;
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

const slide = (mediaUrl: string, title: string, description: string): TypeUsableComponentProps => ({
  type: "object",
  key: "slide",
  displayer: "Slide",
  value: [
    {
      type: "media",
      key: "media",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl,
      },
    },
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Details", "", null, null, "Link")],
    },
  ],
});

class HeroSection32 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383502f8a5b002ce6aa53?alt=media",
          "Transforming ideas into structures",
          "Architects can conduct site analysis and evaluation to determine the best location for a building or development project."
        ),
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383962f8a5b002ce6aa92?alt=media",
          "Building your vision, creating reality",
          "Architects can conduct site analysis and evaluation to determine the best location for a building or development project."
        ),
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383c62f8a5b002ce6aac7?alt=media",
          "Designing spaces, creating experiences",
          "Architects can conduct site analysis and evaluation to determine the best location for a building or development project."
        ),
        slide(
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383fd2f8a5b002ce6aae3?alt=media",
          "Architecture is our passion, design is our art",
          "Architects offer design and planning services for buildings, landscapes, and interiors."
        ),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "enableOverlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "enableBackgroundImageOverlay",
      displayer: "Background Media Overlay",
      value: true,
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
            name: "GrPrevious",
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
            name: "GrNext",
          },
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("activeSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 32";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  render() {
    const animation: boolean = this.getPropValue("animation");
    const slides = this.castToObject<Slide[]>("slider");
    const itemsCount = slides.length;
    const activeSlide = this.getComponentState("activeSlide");
    const activeSlideHasMedia = this.hasMedia(slides[activeSlide]?.media);
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      arrows: false,
      infinite: sliderSettings.infinite && itemsCount > 1,
      fade: animation,
      beforeChange: (_current: number, next: number) => {
        if (this.getComponentState("activeSlide") !== next && slides.length > 0) {
          this.setComponentState("activeSlide", next);
        }
      },
      dotsClass: this.decorateCSS("dots"),
      customPaging: (i: number): React.JSX.Element => (
        <div className={this.decorateCSS("dot-wrapper")}>
          <span className={`${this.decorateCSS("dot")} ${!activeSlideHasMedia ? this.decorateCSS("colored") : ""}`} />
          <Base.P className={`${this.decorateCSS("dotIndex")} ${!activeSlideHasMedia ? this.decorateCSS("colored") : ""}`}>
            {`0${i + 1}`}
          </Base.P>
        </div>
      ),
    };

    const arrows = this.castToObject<Arrows>("arrows");
    const hasPrevIcon = this.hasMedia(arrows?.prevIcon);
    const hasNextIcon = this.hasMedia(arrows?.nextIcon);
    const enableOverlay: boolean = this.getPropValue("enableOverlay");
    const enableBackgroundImageOverlay = this.getPropValue("enableBackgroundImageOverlay");
    const showNavButtons = itemsCount > 1 && (hasPrevIcon || hasNextIcon);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {slides.length > 0 && (
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                  {slides.map((item: Slide, index: number) => {
                    const isActive = animation && activeSlide === index;
                    const hasItemMedia = this.hasMedia(item.media);
                    const hasLogo = this.hasMedia(item.logo);
                    const isSubtitleExist = this.castToString(item.subtitle);
                    const isTitleExist = this.castToString(item.title);
                    const isDescriptionExist = this.castToString(item.description);
                    const buttons = (item.buttons || []).filter((button) => this.castToString(button.text));
                    const primaryColorClass = !hasItemMedia ? this.decorateCSS("primaryColor") : "";
                    return (
                      <div className={this.decorateCSS("slide-inner")} key={`hdr-32-${index}`}>
                        <div className={this.decorateCSS("content")}>
                          {hasItemMedia && (
                            <Base.Media
                              value={item.media}
                              className={`${this.decorateCSS("backgroundImage")} ${isActive ? this.decorateCSS("zoomInAnimation") : ""}`}
                            />
                          )}
                          {hasItemMedia && enableBackgroundImageOverlay && <div className={this.decorateCSS("background-overlay")} />}
                          <div className={this.decorateCSS("content-inner")}>
                            {enableOverlay && (
                              <div className={`${this.decorateCSS("slideShape")} ${isActive ? this.decorateCSS("shapeAnimate") : ""}`}></div>
                            )}

                            {(hasLogo || isSubtitleExist || isTitleExist) && (
                              <Base.VerticalContent
                                className={`${this.decorateCSS("heading")} ${isActive ? this.decorateCSS("imageTitleAnimation") : ""} ${primaryColorClass}`}
                              >
                                {hasLogo && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
                                {isSubtitleExist && (
                                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>
                                )}
                                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("imageTitle")}>{item.title}</Base.SectionTitle>}
                              </Base.VerticalContent>
                            )}

                            {(isDescriptionExist || buttons.length > 0) && (
                              <div className={`${this.decorateCSS("image-details")} ${primaryColorClass}`}>
                                {isDescriptionExist && (
                                  <Base.SectionDescription
                                    className={`${this.decorateCSS("description")} ${isActive ? this.decorateCSS("animate") : ""}`}
                                  >
                                    {item.description}
                                  </Base.SectionDescription>
                                )}

                                {this.getPropValue("line") && isDescriptionExist && buttons.length > 0 && (
                                  <div className={`${this.decorateCSS("stick")} ${isActive ? this.decorateCSS("animate") : ""}`}></div>
                                )}

                                {buttons.length > 0 && (
                                  <div
                                    className={`${this.decorateCSS("url-container")} ${!isDescriptionExist ? this.decorateCSS("withoutDescription") : ""} ${isActive ? this.decorateCSS("urlTitleAnimation") : ""}`}
                                  >
                                    {buttons.map((button: INPUTS.CastedButton, buttonIndex: number) => (
                                      <ComposerLink key={buttonIndex} path={button.url}>
                                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                        </Base.Button>
                                      </ComposerLink>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {showNavButtons && (
                              <div className={this.decorateCSS("nav-buttons")}>
                                {hasPrevIcon && (
                                  <div
                                    className={`${this.decorateCSS("nav-button")} ${animation ? this.decorateCSS("enable-before") : ""} ${primaryColorClass}`}
                                    onClick={() => this.getComponentState("slider-ref").current.slickPrev()}
                                  >
                                    <Base.Media value={arrows.prevIcon} className={this.decorateCSS("icon")} />
                                  </div>
                                )}
                                {hasNextIcon && (
                                  <div
                                    className={`${this.decorateCSS("nav-button")} ${animation ? this.decorateCSS("enable-before") : ""} ${primaryColorClass}`}
                                    onClick={() => this.getComponentState("slider-ref").current.slickNext()}
                                  >
                                    <Base.Media value={arrows.nextIcon} className={this.decorateCSS("icon")} />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ComposerSlider>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection32;
