import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section10.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Social = {
  icon: TypeMediaInputValue;
  url: string;
};

type Cta = {
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type SliderObject = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  highlightedTitle: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  buttons: INPUTS.CastedButton[];
  cta: Cta;
  socials: Social[];
};

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

const social = (icon: string): TypeUsableComponentProps => ({
  type: "object",
  key: "social",
  displayer: "Platform",
  value: [
    {
      type: "media",
      key: "icon",
      displayer: "Platform Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: icon,
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

const slide = (mediaUrl: string): TypeUsableComponentProps => ({
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
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Magnificent",
    },
    {
      type: "string",
      key: "highlightedTitle",
      displayer: "Highlighted Title",
      value: "Structures",
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "We make structures, dams, bridges, scyscrapers and much more. Resistance, design, flexibility and usability are the main factors that we keep in mind in every project.",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Get a quote", "", null, null, "Link")],
    },
    {
      type: "object",
      key: "cta",
      displayer: "CTA",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Stay Tuned",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "We are 24/7 available through our social media. Follow us to stay up to date",
        },
      ],
    },
    {
      type: "array",
      key: "socials",
      displayer: "Social Media Platforms",
      value: [social("FaTwitter"), social("FaFacebookF"), social("FaInstagram")],
    },
  ],
});

class HeroSection10 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

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
            name: "MdArrowLeft",
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
            name: "MdArrowRight",
          },
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "backgroundIcon",
      displayer: "Background Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "LuAmpersand",
      },
    });

    this.addProp({
      type: "boolean",
      key: "slideNumber",
      displayer: "Slide Number",
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
      value: false,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754582f8a5b002ce6cce6?alt=media"),
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754bb2f8a5b002ce6cd14?alt=media"),
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 10";
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
    const settings = this.transformSliderValues(this.getPropValue("settings"));

    const slider = this.castToObject<SliderObject[]>("slider");
    const arrows = this.castToObject<Arrows>("arrows");
    const hasPrev = this.hasMedia(arrows?.prevIcon);
    const hasNext = this.hasMedia(arrows?.nextIcon);
    const backgroundIcon = this.getPropValue("backgroundIcon");
    const hasBackgroundIcon = this.hasMedia(backgroundIcon);
    const showSlideNumber = this.getPropValue("slideNumber");
    const showNav = slider.length > 1 && (showSlideNumber || hasPrev || hasNext);
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("carousel")}>
            {slider.map((item: SliderObject, indexSlider: number) => {
              const hasLogo = this.hasMedia(item.logo);
              const isSubtitleExist = this.castToString(item.subtitle);
              const isTitleExist = this.castToString(item.title);
              const isHighlightedTitleExist = this.castToString(item.highlightedTitle);
              const isDescriptionExist = this.castToString(item.description);
              const hasImage = this.hasMedia(item.media);
              const isCtaTitleExist = this.castToString(item.cta?.title);
              const isCtaDescriptionExist = this.castToString(item.cta?.description);
              const buttons = (item.buttons || []).filter((buttonItem: INPUTS.CastedButton) => this.castToString(buttonItem.text));
              const socials = (item.socials || []).filter((socialItem: Social) => this.hasMedia(socialItem.icon));
              const hasLeftContent = isDescriptionExist || showNav || buttons.length > 0;
              const leftPage = hasLogo || isSubtitleExist || isTitleExist || isHighlightedTitleExist || hasLeftContent;
              const hasRightContent = isCtaTitleExist || isCtaDescriptionExist || socials.length > 0;
              const rightPage = hasRightContent || hasBackgroundIcon;

              return (
                <div
                  className={`${this.decorateCSS("content")} ${!hasImage ? this.decorateCSS("column-content") : ""}`}
                  key={indexSlider}
                >
                  {leftPage && (
                    <div className={this.decorateCSS("left")}>
                      <Base.VerticalContent className={this.decorateCSS("left-container")}>
                          {hasLogo && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
                          {isSubtitleExist && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitleTop")}>{item.subtitle}</Base.SectionSubTitle>
                          )}
                          {(isTitleExist || isHighlightedTitleExist) && (
                            <div className={this.decorateCSS("title-wrapper")}>
                              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                              {isHighlightedTitleExist && (
                                <Base.H1
                                  className={`${this.decorateCSS("imagetitle")} ${hasImage ? this.decorateCSS("imagetitleWhite") : ""}`}
                                >
                                  {item.highlightedTitle}
                                </Base.H1>
                              )}
                            </div>
                          )}
                      {hasLeftContent && (
                        <div
                          className={`${this.decorateCSS("left-page-content")} ${
                            !hasImage ? this.decorateCSS("column-left-page-content") : ""
                          }`}
                        >
                          {isDescriptionExist && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                          )}
                          {showNav && (
                            <div className={this.decorateCSS("nav-buttons")}>
                              {showSlideNumber && (
                                <Base.P className={this.decorateCSS("slide_number")}>{String(indexSlider + 1).padStart(2, "0")}</Base.P>
                              )}
                              {(hasPrev || hasNext) && (
                                <div className={this.decorateCSS("iconsSection")}>
                                  {hasPrev && (
                                    <div className={this.decorateCSS("prev_icon_wrapper")} onClick={() => sliderRef.current?.slickPrev()}>
                                      <Base.Media value={arrows.prevIcon} className={this.decorateCSS("prev_icon")} />
                                    </div>
                                  )}
                                  {hasNext && (
                                    <div className={this.decorateCSS("next_icon_wrapper")} onClick={() => sliderRef.current?.slickNext()}>
                                      <Base.Media value={arrows.nextIcon} className={this.decorateCSS("next_icon")} />
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                          {buttons.map((buttonItem: INPUTS.CastedButton, buttonIndex: number) => (
                            <div key={buttonIndex} className={this.decorateCSS("button-section")}>
                              {this.getPropValue("line") && <div className={this.decorateCSS("line")} />}
                              <ComposerLink path={buttonItem.url}>
                                <Base.Button buttonType={buttonItem.type} className={this.decorateCSS("button")}>
                                  <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          ))}
                        </div>
                      )}
                      </Base.VerticalContent>
                    </div>
                  )}
                  {hasImage && (
                    <div className={this.decorateCSS("middle")}>
                      <div className={this.decorateCSS("image-wrapper")}>
                        <Base.Media className={this.decorateCSS("image")} value={this.withVideoSettings(item.media)} />
                        {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                      </div>
                    </div>
                  )}
                  {rightPage && (
                    <div className={this.decorateCSS("right")}>
                      {hasBackgroundIcon && (
                        <div className={this.decorateCSS("background-icon-wrapper")}>
                          <Base.Media value={backgroundIcon} className={this.decorateCSS("ampersand-icon")} />
                        </div>
                      )}

                      {hasRightContent && (
                        <div
                          className={`${this.decorateCSS("right-page-content")} ${
                            !hasImage ? this.decorateCSS("column-right-page-content") : ""
                          }`}
                        >
                          {isCtaTitleExist && <Base.H3 className={this.decorateCSS("rightSubtitle")}>{item.cta.title}</Base.H3>}
                          {isCtaDescriptionExist && <Base.P className={this.decorateCSS("description1")}>{item.cta.description}</Base.P>}
                          {socials.length > 0 && (
                            <div className={this.decorateCSS("icon-group")}>
                              {socials.map((socialItem: Social, socialIndex: number) => (
                                <ComposerLink key={socialIndex} path={socialItem.url}>
                                  <Base.Media value={socialItem.icon} className={this.decorateCSS("social-icon")} />
                                </ComposerLink>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </ComposerSlider>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection10;
