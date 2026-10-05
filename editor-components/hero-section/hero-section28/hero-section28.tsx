import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section28.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Slide = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  secondDescription: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  image: TypeMediaInputValue;
  overlay: boolean;
  video: TypeMediaInputValue;
};

type Icons = {
  play_icon: TypeMediaInputValue;
  close_icon: TypeMediaInputValue;
};

const VIDEO_URL = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151";

const slide = (subtitle: string, title: string, description: string, imageUrl: string): TypeUsableComponentProps => ({
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
      type: "string",
      key: "secondDescription",
      displayer: "Second Description",
      value: "NOW AVAILABLE ON STREAMING SERVICES",
    },
    {
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
      ],
    },
    {
      type: "media",
      key: "image",
      displayer: "Media",
      value: { type: "image", url: imageUrl },
      additionalParams: { availableTypes: ["image", "video"] },
    },
    {
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    },
    {
      type: "media",
      key: "video",
      displayer: "Video",
      value: { type: "video", url: VIDEO_URL },
      additionalParams: { availableTypes: ["video"] },
    },
  ],
});

class HeroSection28 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide("ACTION", "Dark Poison", "Official Season 1 Trailer", "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dark-poison-large-1400x700.jpg"),
        slide("ACTION", "Frontlines", "Official Season 1 Trailer", "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/front-lines-1400x700.jpg"),
        slide("TECHNOLOGY", "Deep Space", "Worldwide Premiere", "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dep-space-1400x700.jpg"),
      ],
    });

    this.addProp({
      type: "object",
      key: "icons",
      displayer: "Video Icons",
      value: [
        {
          type: "media",
          key: "play_icon",
          displayer: "Play Icon",
          value: { type: "icon", name: "IoPlay" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "media",
          key: "close_icon",
          displayer: "Close Icon",
          value: { type: "icon", name: "IoCloseOutline" },
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
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("play-video", false);
    this.setComponentState("sliderRef", React.createRef());
  }
  static getName(): string {
    return "Hero Section 28";
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
    const slides = this.castToObject<Slide[]>("slider");
    const icons = this.castToObject<Icons>("icons");
    const hasPlayIcon = this.hasMedia(icons?.play_icon);
    const hasCloseIcon = this.hasMedia(icons?.close_icon);
    const isLineActive = this.getPropValue("line");
    const activeIndex = this.getComponentState("active-index");
    const activeSlide = slides[activeIndex];
    const playVideo = this.getComponentState("play-video");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      autoplay: sliderSettings.autoplay && !playVideo,
      accessibility: true,
      draggable: false,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
      fade: true,
      customPaging: (i: any) => (
        <div
          className={`${this.decorateCSS("dot")} ${activeIndex == i ? this.decorateCSS("activeDot") : ""} ${this.hasMedia(activeSlide?.image) ? this.decorateCSS("withImageDot") : ""}`}
        />
      ),
      afterChange: () => {
        this.setComponentState("play-video", false);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        if (this.getPropValue("animation"))
          this.setComponentState("animation-active", true);
        setTimeout(() => {
          this.setComponentState("animation-active", false);
        }, 400)
        this.setComponentState("play-video", false);
        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("active-index", newIndex);
      },
    };

    return (
      <div className={`${this.decorateCSS("container")} ${playVideo ? this.decorateCSS("with-overlay") : ""}`}>
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("sliderRef")}
          className={this.decorateCSS("carousel")}
        >
          {slides.map((item: Slide, indexSlider: number) => {
            const hasImage = this.hasMedia(item.image);
            const hasVideo = this.hasMedia(item.video);
            const hasLogo = this.hasMedia(item.logo);
            const isSubtitleExist = this.castToString(item.subtitle);
            const isTitleExist = this.castToString(item.title);
            const isDescriptionExist = this.castToString(item.description);
            const isSecondDescriptionExist = this.castToString(item.secondDescription);
            const buttons = (item.buttons || []).filter(
              (button: INPUTS.CastedButton) => this.castToString(button.text) || this.hasMedia(button.icon as any)
            );
            const imageClass = hasImage ? this.decorateCSS("withImage") : this.decorateCSS("noImage");
            const openVideo = hasVideo ? () => this.setComponentState("play-video", true) : () => { };

            return (
              <div className={this.decorateCSS("content")} key={indexSlider}>
                {hasImage && (
                  <div className={this.decorateCSS("image-box")}>
                    <Base.Media
                      className={this.decorateCSS("bg-img")}
                      value={this.withVideoSettings(item.image)}
                    />
                    {item.overlay && (
                      <div className={this.decorateCSS("image-overlay")} />
                    )}
                  </div>
                )}

                {hasPlayIcon && hasVideo && (
                  <div
                    className={`${this.decorateCSS("play-button")} ${hasImage ? this.decorateCSS("withImage") : ""}`}
                    onClick={openVideo}
                  >
                    <Base.Media className={this.decorateCSS("play-button-icon")} value={icons.play_icon} />
                  </div>
                )}
                <div
                  className={`${this.decorateCSS("slide-content")} ${!this.getComponentState("animation-active") ? this.decorateCSS("visible") : ""}`}
                  onClick={openVideo}
                >
                  <Base.VerticalContent className={this.decorateCSS("text-content")}>
                    {hasLogo && (
                      <Base.Media
                        className={`${this.decorateCSS("logo")} ${!hasImage ? this.decorateCSS("noImage") : ""}`}
                        value={item.logo}
                      />
                    )}
                    {isSubtitleExist && (
                      <Base.SectionSubTitle
                        className={`${this.decorateCSS("tag")} ${imageClass} ${isLineActive ? this.decorateCSS("hasLine") : ""}`}
                      >
                        {item.subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {isTitleExist && (
                      <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageClass}`}>
                        {item.title}
                      </Base.SectionTitle>
                    )}
                    {isDescriptionExist && (
                      <Base.SectionDescription className={`${this.decorateCSS("sub_title")} ${imageClass}`}>
                        {item.description}
                      </Base.SectionDescription>
                    )}
                    {isSecondDescriptionExist && (
                      <Base.P className={`${this.decorateCSS("description")} ${imageClass}`}>
                        {item.secondDescription}
                      </Base.P>
                    )}
                    {buttons.length > 0 && (
                      <div className={this.decorateCSS("buttons-container")}>
                        {buttons.map((button: INPUTS.CastedButton, index: number) => {
                          const buttonTextExist = this.castToString(button.text);
                          const iconExist = this.hasMedia(button.icon as any);
                          return (
                            <div key={`hs-28-btn-${index}`} className={this.decorateCSS("button")}>
                              <ComposerLink path={button.url}>
                                <Base.Button buttonType={button.type} className={this.decorateCSS("button-element")}>
                                  {iconExist && (
                                    <Base.Media
                                      value={button.icon as any}
                                      className={this.decorateCSS("button-icon")}
                                    />
                                  )}
                                  {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                                </Base.Button>
                              </ComposerLink>
                            </div>
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
        {playVideo && this.hasMedia(activeSlide?.video) && (
          <Base.Overlay
            isVisible={playVideo}
            onClick={() => this.setComponentState("play-video", false)}
            className={this.decorateCSS("overlay")}
          >
            <div
              className={this.decorateCSS("video-container")}
              onClick={(e) => e.stopPropagation()}
            >
              <Base.Media
                className={this.decorateCSS("video-iframe")}
                value={{ ...activeSlide.video, settings: { autoplay: true, loop: false, muted: false, controls: true } } as any}
              />
            </div>
            {hasCloseIcon && (
              <div
                className={this.decorateCSS("close-button")}
                onClick={() => this.setComponentState("play-video", false)}
              >
                <Base.Media
                  className={this.decorateCSS("close-button-icon")}
                  value={icons.close_icon}
                />
              </div>
            )}
          </Base.Overlay>
        )}
      </div>
    );
  }
}

export default HeroSection28;
