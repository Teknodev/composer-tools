import * as React from "react";
import styles from "./hero-section25.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

interface SliderItem {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  overlay: boolean;
  buttons: INPUTS.CastedButton[];
};

interface TopContentItem {
  backgroundText: React.JSX.Element;
  showIndex: boolean;
}

interface IconItem {
  url: string;
  icon: TypeMediaInputValue;
}

interface SidePanel {
  sideText: React.JSX.Element;
  line: boolean;
}

interface Navigation {
  prevIcon: TypeMediaInputValue;
  prevText: React.JSX.Element;
  nextIcon: TypeMediaInputValue;
  nextText: React.JSX.Element;
}

class HeroSection25 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "topContent",
      displayer: "Top Content",
      value: [
        {
          type: "string",
          key: "backgroundText",
          displayer: "Background Text",
          value: "Composer",
        },
        {
          type: "boolean",
          key: "showIndex",
          displayer: "Index Display",
          value: true,
        },
      ]
    });
    this.addProp({
      type: "object",
      key: "sidePanel",
      displayer: "Side Panel",
      value: [
        {
          type: "string",
          key: "sideText",
          displayer: "Side Text",
          value: "ARCHITECTURE BURO",
        },
        {
          type: "boolean",
          key: "line",
          displayer: "Line",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Medias",
      additionalParams: {
        maxElementCount: 5,
      },
      value: [
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: { type: "icon", name: "FaInstagram" },
              additionalParams: { availableTypes: ["icon", "image"] },
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaTwitter" }, additionalParams: { availableTypes: ["icon", "image"] } },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaBehance" }, additionalParams: { availableTypes: ["icon", "image"] } },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaFacebookF" }, additionalParams: { availableTypes: ["icon", "image"] } },
          ],
        },
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
          displayer: "Prev Icon",
          value: { type: "icon", name: "FaArrowLeftLong" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "string",
          key: "prevText",
          displayer: "Prev Text",
          value: "PREV",
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          value: { type: "icon", name: "FaArrowRightLong" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "string",
          key: "nextText",
          displayer: "Next Text",
          value: "NEXT",
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
           {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "CONCERT HALL IN NEWYORK",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Modern Hotel is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b0?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "EXHIBITION CENTER IN BOSTON",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Modern Hotel is the architecture of a new generation, a building  that exists not only in the dimension of space, but also in the dimension of time and communication.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White")],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "MODERN HOTEL IN LONDON",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Exhibition Center is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication.  ",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b2?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White")],
            },
          ],
        },
      ]
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("active-index", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 25";
  }

  handleAnimationEnd = ({
    animationState,
    startingAnimation,
    endingAnimation,
  }: IAnimationProps) => {
    if (this.getComponentState(animationState) === endingAnimation) {
      this.setComponentState(animationState, startingAnimation);
    }
  };

  hasMedia(media?: unknown) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const animation: boolean = this.getPropValue("animation");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      fade: animation,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        if (animation) {
          this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
          this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
          this.setComponentState("descriptionAnimationClass", "animate__fadeOutDown");
          setTimeout(() => {
            this.setComponentState("active-index", newIndex);
            this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
            this.setComponentState("titleAnimationClass", "animate__fadeInRight");
            this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
          }, 1000);
        } else {
          this.setComponentState("active-index", newIndex);
        }
      },
    };

    const sliderItemObject = this.castToObject<SliderItem[]>("slider");
    const topContent = this.castToObject<TopContentItem>("topContent");
    const sidePanel = this.castToObject<SidePanel>("sidePanel");
    const navigation = this.castToObject<Navigation>("arrows");

    const activeIndex = this.getComponentState("active-index");
    const imageless = !this.hasMedia(sliderItemObject[activeIndex]?.media);

    const socialMediaIcons = this.castToObject<IconItem[]>("socials").filter((item: IconItem) => this.hasMedia(item.icon));
    const sideTextExist = this.castToString(sidePanel?.sideText);
    const backgroundTextExist = this.castToString(topContent.backgroundText);

    const isIndexDisplayExist = topContent.showIndex || backgroundTextExist;
    const isMediaPanelExist = sideTextExist || sidePanel?.line || socialMediaIcons.length > 0;

    const prevTextExist = this.castToString(navigation.prevText);
    const nextTextExist = this.castToString(navigation.nextText);
    const prevIconExist = this.hasMedia(navigation.prevIcon);
    const nextIconExist = this.hasMedia(navigation.nextIcon);
    const showArrows = sliderSettings.arrows && sliderItemObject.length > 1 && (prevTextExist || prevIconExist || nextTextExist || nextIconExist);

    const animationClass = (state: string) => (animation ? `animate__animated ${this.getComponentState(state)}` : "");

    return (
      <div className={this.decorateCSS("container")}>
        {sliderItemObject && (
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
            ref={this.getComponentState("slider-ref")}
          >
            {sliderItemObject.map((sliderItem: SliderItem, indexSlider: number) => {
              const mediaExist = this.hasMedia(sliderItem.media);
              return (
                <div className={this.decorateCSS("slider-images")} key={indexSlider}>
                  {mediaExist && (
                    <Base.Media
                      value={this.withVideoSettings(sliderItem.media)}
                      className={this.decorateCSS("slider-image")}
                    />
                  )}
                  {sliderItem.overlay && mediaExist && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              );
            })}
          </ComposerSlider>
        )}

        <div className={this.decorateCSS("item")}>
          <div className={`${this.decorateCSS("left-figure-container")} ${imageless ? this.decorateCSS("imageless") : ""}`}>
            {isIndexDisplayExist && (
              <div className={this.decorateCSS("top-figure")}>
                {topContent.showIndex && (
                  <div className={this.decorateCSS("pagination")}>
                    <Base.P className={this.decorateCSS("active-slide")}>
                      {(activeIndex + 1).toString().padStart(2, "0")}
                    </Base.P>
                    <div className={this.decorateCSS("slide-count-power")}>
                      <Base.P className={this.decorateCSS("divider")}>/</Base.P>
                      <Base.P className={this.decorateCSS("slide-count")}>
                        {sliderItemObject.length.toString().padStart(2, "0")}
                      </Base.P>
                    </div>
                  </div>
                )}
                {backgroundTextExist && (
                  <div className={this.decorateCSS("low-op-text")}>
                    <Base.P className={this.decorateCSS("background-op-text")}>
                      {topContent.backgroundText}
                    </Base.P>
                  </div>
                )}
              </div>
            )}
            {(isIndexDisplayExist || isMediaPanelExist) && (
              <div className={`${this.decorateCSS("bottom-figure")} ${!isIndexDisplayExist ? this.decorateCSS("no-index-display") : ""}`}>
                {sideTextExist && (
                  <div className={this.decorateCSS("side-text")}>
                    <Base.P className={this.decorateCSS("side-text-content")}>
                      {sidePanel.sideText}
                    </Base.P>
                  </div>
                )}
                {sidePanel?.line && (
                  <div className={this.decorateCSS("line")}></div>
                )}
                {socialMediaIcons.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {socialMediaIcons.map((item: IconItem, iconIndex: number) => (
                      <ComposerLink path={item.url} key={iconIndex}>
                        <Base.Media
                          value={item.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>
            )}

            {showArrows && (
              <div className={`${this.decorateCSS("arrows")}
                      ${(!isIndexDisplayExist && !isMediaPanelExist) ? this.decorateCSS("no-left-side") : ""}
                      ${!isIndexDisplayExist ? this.decorateCSS("icon-bottom") : ""}
                      ${imageless ? this.decorateCSS("black-theme") : ""}`}>
                {(prevTextExist || prevIconExist) && (
                  <div
                    className={this.decorateCSS("prev-arrow")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickPrev();
                    }}
                  >
                    {prevIconExist && (
                      <Base.Media
                        value={navigation.prevIcon}
                        className={this.decorateCSS("arrow")}
                      />
                    )}
                    {prevTextExist && (
                      <Base.H6 className={this.decorateCSS("arrow-text")}>
                        {navigation.prevText}
                      </Base.H6>
                    )}
                  </div>
                )}

                {(nextTextExist || nextIconExist) && (
                  <div
                    className={this.decorateCSS("next-arrow")}
                    onClick={() => {
                      this.getComponentState("slider-ref").current.slickNext();
                    }}
                  >
                    {nextTextExist && (
                      <Base.H6 className={this.decorateCSS("arrow-text")}>
                        {navigation.nextText}
                      </Base.H6>
                    )}
                    {nextIconExist && (
                      <Base.Media
                        value={navigation.nextIcon}
                        className={this.decorateCSS("arrow")}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {sliderItemObject.map((sliderItem: SliderItem, index: number) => {
            const isActive = activeIndex === index;
            const mediaExist = this.hasMedia(sliderItem.media);
            const logoExist = this.hasMedia(sliderItem.logo);
            const subtitleExist = this.castToString(sliderItem.subtitle);
            const titleExist = this.castToString(sliderItem.title);
            const descriptionExist = this.castToString(sliderItem.description);
            const visibleButtons = (sliderItem.buttons || []).filter(
              (button: INPUTS.CastedButton) => this.castToString(button.text) || this.hasMedia(button.icon)
            );
            const contentExist = logoExist || subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0;
            return (
              <Base.Container
                className={this.decorateCSS("content-container")}
                key={index}
                style={{ display: !isActive && "none" }}
              >
                <Base.MaxContent
                  className={`${this.decorateCSS("content-max-content")} ${!mediaExist ? this.decorateCSS("black-theme") : ""}`}
                >
                  {contentExist && (
                    <div className={`${this.decorateCSS("layout")}
                      ${(!isIndexDisplayExist && !isMediaPanelExist) ? this.decorateCSS("full-width-right-item") : ""}`}>
                      <Base.VerticalContent className={this.decorateCSS("content")}>
                        {logoExist && (
                          <Base.Media
                            value={sliderItem.logo}
                            className={`${this.decorateCSS("logo")} ${animationClass("titleAnimationClass")}`}
                          />
                        )}
                        {subtitleExist && (
                          <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${mediaExist ? `${this.decorateCSS("with-image")} ${this.decorateCSS("subtitle-has-image")}` : ""} ${animationClass("titleAnimationClass")}`}>
                            {sliderItem.subtitle}
                          </Base.SectionSubTitle>
                        )}
                        {titleExist && (
                          <Base.SectionTitle
                            className={`${this.decorateCSS("title")} ${mediaExist ? this.decorateCSS("with-image") : ""} ${animationClass("titleAnimationClass")}`}
                            onAnimationEnd={() => {
                              this.handleAnimationEnd({
                                animationState: "titleAnimationClass",
                                startingAnimation: "animate__fadeInRight",
                                endingAnimation: "animate__fadeOutDown",
                              });
                            }}
                          >
                            {sliderItem.title}
                          </Base.SectionTitle>
                        )}
                        {descriptionExist && (
                          <Base.SectionDescription
                            className={`${this.decorateCSS("description")} ${mediaExist ? this.decorateCSS("with-image") : ""} ${animationClass("descriptionAnimationClass")}`}
                            onAnimationEnd={() => {
                              this.handleAnimationEnd({
                                animationState: "descriptionAnimationClass",
                                startingAnimation: "animate__fadeInUp",
                                endingAnimation: "animate__fadeOutDown",
                              });
                            }}
                          >
                            {sliderItem.description}
                          </Base.SectionDescription>
                        )}
                        {visibleButtons.length > 0 && (
                          <div className={this.decorateCSS("buttons")}>
                            {visibleButtons.map((button: INPUTS.CastedButton, buttonIndex: number) => (
                              <ComposerLink key={buttonIndex} path={button.url}>
                                <Base.Button
                                  buttonType={button.type}
                                  className={`${this.decorateCSS("button")} ${animationClass("buttonAnimationClass")}`}
                                  onAnimationEnd={() => {
                                    this.handleAnimationEnd({
                                      animationState: "buttonAnimationClass",
                                      startingAnimation: "animate__fadeInUp",
                                      endingAnimation: "animate__fadeOutDown",
                                    });
                                  }}
                                >
                                  {this.castToString(button.text) && (
                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                  )}
                                  {this.hasMedia(button.icon) && (
                                    <Base.Media
                                      value={button.icon as TypeMediaInputValue}
                                      className={this.decorateCSS("button-icon")}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            ))}
                          </div>
                        )}
                      </Base.VerticalContent>
                    </div>
                  )}
                </Base.MaxContent>
              </Base.Container>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HeroSection25;
