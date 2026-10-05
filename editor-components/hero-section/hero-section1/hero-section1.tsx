import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItem = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  backgroundTitle: React.JSX.Element;
  number: React.JSX.Element;
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

const slide = (title: string, subtitle: string, number: string, mediaUrl: string): TypeUsableComponentProps => ({
  type: "object",
  key: "slider",
  displayer: "Slider",
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
      value: "",
    },
    {
      type: "string",
      key: "backgroundTitle",
      displayer: "Background Title",
      value: title,
    },
    {
      type: "string",
      key: "number",
      displayer: "Number",
      value: number,
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
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    },
  ],
});

class HeroSection1 extends BaseHeroSection {
  sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d7?alt=media&timestamp=1719483639150",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "animatedMedia",
      displayer: "Animated Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d6?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "numberLine",
      displayer: "Number Line",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        slide("FORWARD", "BRANDING AND IDENTITY", "01", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d8?alt=media&timestamp=1719483639150"),
        slide("PIXFLOW", "WEB AND APPLICATION", "02", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d9?alt=media&timestamp=1719483639150"),
        slide("HARDDOT", "GRAPHICS AND IDENTITY", "03", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243da?alt=media&timestamp=1719483639150"),
        slide("TRAVELIO", "PACKAGING AND WEB", "04", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243db?alt=media&timestamp=1719483639150"),
        slide("CROPOES", "DESIGN AND IDENTITY", "05", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243dc?alt=media&timestamp=1719483639150"),
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      })
    );

    this.sliderRef = React.createRef();
    this.setActiveTab(0);
    this.setComponentState("animation", true);
  }

  static getName(): string {
    return "Hero Section 1";
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
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
    const background = this.castToObject<Background>("background");
    const backgroundMedia = background?.media;
    const hasBackground = this.hasMedia(backgroundMedia);
    const animatedMedia = this.getPropValue("animatedMedia");
    const hasAnimatedMedia = this.hasMedia(animatedMedia);
    const isLineActive = this.getPropValue("numberLine");
    const animationEnabled = this.getPropValue("animation");
    const animation = this.getComponentState("animation");
    const activeTab = this.getComponentState("activeTab");
    const sliders = this.castToObject<SliderItem[]>("sliders");

    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      vertical: true,
      verticalSwiping: true,
      customPaging: (i: number) => (
        <div className={`${this.decorateCSS("dot")} ${activeTab === i ? this.decorateCSS("activeDot") : ""}`}></div>
      ),
      dotsClass: `${this.decorateCSS("dots")} ${!hasBackground ? this.decorateCSS("dark") : ""}`,
      beforeChange: (_current: number, next: number) => {
        this.setActiveTab(next);
        this.setComponentState("animation", false);
        setTimeout(() => {
          this.setComponentState("animation", true);
        }, 1000);
      },
    };

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!animationEnabled ? this.decorateCSS("no-animation") : ""}`}
      >
        {hasBackground && (
          <>
            <Base.Media value={this.withVideoSettings(backgroundMedia)} className={this.decorateCSS("background-media")} />
            {background.overlay && <div className={this.decorateCSS("background-overlay")} />}
          </>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnimatedMedia && (
            <>
              <Base.Media value={this.withVideoSettings(animatedMedia)} className={this.decorateCSS("animated-media-top")} />
              <Base.Media value={this.withVideoSettings(animatedMedia)} className={this.decorateCSS("animated-media-bottom")} />
            </>
          )}
          <div className={this.decorateCSS("wrapper")}>
            <ComposerSlider ref={this.sliderRef} {...settings} className={this.decorateCSS("slider")}>
              {sliders.map((item: SliderItem, index: number) => {
                const isActive = activeTab === index;
                const hasLogo = this.hasMedia(item.logo);
                const hasItemMedia = this.hasMedia(item.media);
                const isSubtitleExist = this.castToString(item.subtitle);
                const isTitleExist = this.castToString(item.title);
                const isDescriptionExist = this.castToString(item.description);
                const isBackgroundTitleExist = this.castToString(item.backgroundTitle);
                const isNumberExist = this.castToString(item.number);
                const textColorClass = !hasBackground && hasItemMedia ? this.decorateCSS("dark") : "";
                const textBlockColorClass = !hasBackground && !hasItemMedia ? this.decorateCSS("dark") : "";
                return (
                  <div
                    className={`${this.decorateCSS("return-container")} ${animation ? this.decorateCSS("animation") : ""}`}
                    key={index}
                  >
                    {isBackgroundTitleExist && (
                      <div className={this.decorateCSS("background-container")}>
                        <Base.P className={`${this.decorateCSS("background-text")} ${isActive ? this.decorateCSS("active-text") : ""}`}>
                          {item.backgroundTitle}
                        </Base.P>
                      </div>
                    )}

                    <div className={this.decorateCSS("content-container")}>
                      <div className={`${this.decorateCSS("media-wrapper")} ${!hasItemMedia ? this.decorateCSS("without-media") : ""}`}>
                        {(hasLogo || isSubtitleExist) && (
                          <div className={this.decorateCSS("side")}>
                            {hasLogo && (
                              <Base.Media value={item.logo} className={`${this.decorateCSS("logo")} ${!hasBackground ? this.decorateCSS("dark") : ""}`} />
                            )}
                            {isSubtitleExist && (
                              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${!hasBackground ? this.decorateCSS("dark") : ""}`}>
                                {item.subtitle}
                              </Base.SectionSubTitle>
                            )}
                          </div>
                        )}
                        <div className={this.decorateCSS("media-box")}>
                          {hasItemMedia && (
                            <Base.Media
                              value={this.withVideoSettings(item.media)}
                              className={`${this.decorateCSS("media")} ${isActive ? this.decorateCSS("active-media") : ""}`}
                            />
                          )}
                          {hasItemMedia && item.overlay && <div className={this.decorateCSS("media-overlay")} />}
                          {(isTitleExist || isDescriptionExist) && (
                            <Base.VerticalContent className={`${this.decorateCSS("text-block")} ${textColorClass} ${textBlockColorClass}`}>
                              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                              {isDescriptionExist && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                              )}
                            </Base.VerticalContent>
                          )}
                          {(isNumberExist || isLineActive) && (
                            <div className={`${this.decorateCSS("number-wrapper")} ${!hasBackground ? this.decorateCSS("dark") : ""}`}>
                              {isLineActive && <div className={this.decorateCSS("line")}></div>}
                              {isNumberExist && <Base.P className={this.decorateCSS("number")}>{item.number}</Base.P>}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection1;
