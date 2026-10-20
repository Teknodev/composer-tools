import * as React from "react";
import styles from "./hero-section22.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderObject = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  right: { media: TypeMediaInputValue; overlay: boolean };
  left: { media: TypeMediaInputValue; overlay: boolean };
  buttons: INPUTS.CastedButton[];
};

type Navigation = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

class HeroSection22 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Item",
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
              value: "Multicoloured Tie-dye Sweater",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "object",
              key: "right",
              displayer: "Right Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664e?alt=media&timestamp=1719483639150",
                  },
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
              key: "left",
              displayer: "Left Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664d?alt=media&timestamp=1719483639150",
                  },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Item",
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
              value: "Black Crew Cut Dress in Cut Style",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "object",
              key: "right",
              displayer: "Right Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7d1cf1798002cc82f40?alt=media",
                  },
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
              key: "left",
              displayer: "Left Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6703c7a3cf1798002cc82f0f?alt=media",
                  },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Item",
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
              value: "The Shirt Is a Staple for Man`s",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "object",
              key: "right",
              displayer: "Right Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526d9cf1798002cc89a4b?alt=media",
                  },
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
              key: "left",
              displayer: "Left Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670526f8cf1798002cc89a6d?alt=media",
                  },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "SHOP NOW", "", null, null, "Link")],
            },
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
          displayer: "Previous Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "HiArrowLongLeft",
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
            name: "HiArrowLongRight",
          },
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
      type: "boolean",
      key: "divider",
      displayer: "Line",
      value: true,
    });
    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Hero Section 22";
  }

  hasMedia(media?: unknown) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const slider = this.castToObject<SliderObject[]>("slider");
    const animation = this.getPropValue("animation");
    const hasDivider = this.getPropValue("divider");
    const navigation = this.castToObject<Navigation>("arrows");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const dots = sliderSettings.dots;
    const showArrows = sliderSettings.arrows && slider.length > 1;
    const prevIconExist = this.hasMedia(navigation?.prevIcon);
    const nextIconExist = this.hasMedia(navigation?.nextIcon);
    const isSliderExist = slider.length > 0;
    const settings = {
      ...sliderSettings,
      fade: slider.length > 1,
      dotsClass: this.decorateCSS("dots"),
      arrows: false,
      infinite: sliderSettings.infinite && slider.length > 1,
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };
    const elements = typeof document !== "undefined" ? document.getElementsByClassName(this.decorateCSS("sliders")) : ([] as unknown as HTMLCollectionOf<Element>);
    const items = [];

    for (let index = 0; index < elements.length; index++) {
      items.push(elements.item(index));
    }

    const minHeight = items.sort((a, b) => {
      return b.clientHeight - a.clientHeight;
    })[0]?.clientHeight;

    if (!isSliderExist) return <Base.Container className={this.decorateCSS("container")} />;
    return (
      <Base.Container className={this.decorateCSS("container")}>
            <div className={this.decorateCSS("max-content")}>
              <div className={this.decorateCSS("slider-parent")} style={{ minHeight: minHeight + "px" }}>
                <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
                  {slider.map((item: SliderObject, index: number) => {
                    const isActive = this.getComponentState("activeSlide") === index;
                    const leftImageExist = this.hasMedia(item.left?.media);
                    const rightImageExist = this.hasMedia(item.right?.media);
                    const logoExist = this.hasMedia(item.logo);
                    const visibleButtons = (item.buttons || []).filter((buttonItem: INPUTS.CastedButton) => this.castToString(buttonItem.text));
                    return (
                      <div className={this.decorateCSS("sliders")} key={index}>
                        <div className={this.decorateCSS("slider")}>
                          {leftImageExist && (
                            <div className={this.decorateCSS("left-content")}>
                              <Base.Media value={this.withVideoSettings(item.left.media)} className={`${this.decorateCSS("left-image")} ${animation && isActive ? this.decorateCSS("left-animation") : ""}  `} />
                              {item.left.overlay && <div className={this.decorateCSS("overlay")} />}
                            </div>
                          )}

                          <div
                            className={`${this.decorateCSS("middle-content")} ${!leftImageExist ? this.decorateCSS("middle-content2") : ""} ${(!leftImageExist && !rightImageExist) || (!leftImageExist && !dots) ? this.decorateCSS("middle-content3") : ""}  ${
                              animation && isActive ? this.decorateCSS("mid-right-animation") : ""
                            }  `}
                          >
                            <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                                {hasDivider && <div className={this.decorateCSS("divider")} />}
                                {logoExist && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
                                {this.castToString(item.subtitle) && (
                                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {item.subtitle}
                                  </Base.SectionSubTitle>
                                )}
                                {this.castToString(item.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                                {this.castToString(item.description) && (
                                  <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                                )}

                              {visibleButtons.length > 0 && (
                                <div className={this.decorateCSS("button-row")}>
                                  {visibleButtons.map((buttonItem: INPUTS.CastedButton, indexButton: number) => (
                                    <ComposerLink key={`hdr-22-${indexButton}`} path={buttonItem.url}>
                                      <Base.Button buttonType={buttonItem.type} className={this.decorateCSS("button")}>
                                        <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                      </Base.Button>
                                    </ComposerLink>
                                  ))}
                                </div>
                              )}
                            </Base.VerticalContent>
                          </div>
                          {rightImageExist && (
                            <div className={`${this.decorateCSS("right-content")} ${animation && isActive ? this.decorateCSS("mid-right-animation") : ""}  `}>
                              <div className={this.decorateCSS("right-media")}>
                                <Base.Media value={this.withVideoSettings(item.right.media)} className={this.decorateCSS("right-image")} />
                                {item.right.overlay && <div className={this.decorateCSS("overlay")} />}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </ComposerSlider>
              </div>
              {showArrows && (prevIconExist || nextIconExist) && (
                <div className={this.decorateCSS("nav-controls")}>
                  {prevIconExist && (
                    <div
                      className={this.decorateCSS("nav-buttons")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      }}
                    >
                      <Base.Media value={navigation.prevIcon} className={this.decorateCSS("icon")} />
                    </div>
                  )}
                  {nextIconExist && (
                    <div
                      className={this.decorateCSS("nav-buttons")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickNext();
                      }}
                    >
                      <Base.Media value={navigation.nextIcon} className={this.decorateCSS("icon")} />
                    </div>
                  )}
                </div>
              )}
            </div>
      </Base.Container>
    );
  }
}

export default HeroSection22;

