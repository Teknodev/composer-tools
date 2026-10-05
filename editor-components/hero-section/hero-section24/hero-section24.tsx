import * as React from "react";
import styles from "./hero-section24.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ISliderData = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  backgroundMedia: TypeMediaInputValue;
  overlay: boolean;
  buttons: IButton[];
};

type Navigation = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};
type IButton = INPUTS.CastedButton;

class HeroSection24 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
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
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
              },
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
              value: "Best Roses In Amazing Colour",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "When you order a bouqet of flowers ,your goal is to impress that someone special needed.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c2?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background Media",
              key: "backgroundMedia",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c3?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
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
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
              },
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
              value: "Fresh Tulips The Perfect Choice.",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "A symbol of simple love,charity,paradise on earth, heavenly and reminder of the passion life.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267be?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background Media",
              key: "backgroundMedia",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bf?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
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
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
              },
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
              value: "Lovely Flowers for Your Holiday",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Make your life lovely.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c0?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "media",
              displayer: "Background Media",
              key: "backgroundMedia",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c1?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
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
          displayer: "Prev Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosArrowBack",
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
            name: "IoIosArrowForward",
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

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      })
    );

    this.setComponentState("previousIndex", -1);
    this.setComponentState("currentIndex", 0);
    this.setComponentState("arrowDisabled", false);
    this.setComponentState("slider-ref", React.createRef());
  }
  static getName(): string {
    return "Hero Section 24";
  }
  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("currentIndex", slideIndex);
  }
  handleArrowClick(slideIndex: number, direction: "next" | "prev") {
    if (!this.getComponentState("arrowDisabled")) {
      this.changeCurrentSlide(slideIndex);
      this.setComponentState("arrowDisabled", true);
      setTimeout(() => {
        this.setComponentState("arrowDisabled", false);
      }, 1000);
    }
  }
  handleClickDot = (index: number) => {
    const sliderRef = this.getComponentState("slider-ref");
    sliderRef.current.slickGoTo(index)
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
    const slider = this.castToObject<ISliderData[]>("slider");
    const navigation = this.castToObject<Navigation>("arrows");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      beforeChange: (previous: number, current: number) => {
        this.setComponentState("previousChange", previous);
        this.setComponentState("currentChange", current);
        this.setComponentState("currentIndex", current);
      },
      afterChange: (current: number) => {
        setTimeout(() => {
          this.setComponentState("previousChange", -1);
          this.setComponentState("currentChange", -1);
        }, 500);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    const currentIndex = this.getComponentState("currentIndex");
    const currentItem = slider[currentIndex];
    const currentBackgroundImage = this.hasMedia(currentItem?.backgroundMedia) ? currentItem.backgroundMedia : null;
    const showDots = sliderSettings.dots && slider.length > 1;
    const showArrows = sliderSettings.arrows && slider.length > 1;
    const prevIconExist = this.hasMedia(navigation?.prevIcon);
    const nextIconExist = this.hasMedia(navigation?.nextIcon);

    const animationActive = this.getPropValue("animation");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!currentBackgroundImage ? this.decorateCSS("no-image") : ""} ${animationActive ? this.decorateCSS("has-animation") : ""} ${currentBackgroundImage && currentItem.overlay ? this.decorateCSS("with-overlay") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {slider.length > 0 && (
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                {slider.map((item: ISliderData, index: number) => {
                  const isActive = currentIndex == index;
                  const logoExist = this.hasMedia(item.logo);
                  const mediaExist = this.hasMedia(item.media);
                  const backgroundExist = this.hasMedia(item.backgroundMedia);
                  const subtitleExist = this.castToString(item.subtitle);
                  const titleExist = this.castToString(item.title);
                  const descriptionExist = this.castToString(item.description);
                  const visibleButtons = (item.buttons || []).filter((button: IButton) => this.castToString(button.text));
                  const leftExist = logoExist || subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0;
                  return (
                    <div className={this.decorateCSS("item")} key={`key${index}`}>
                      <div className={`${this.decorateCSS("main-content")} ${!mediaExist ? this.decorateCSS("no-image-content") : ""}`}>
                        {leftExist && (
                          <div className={this.decorateCSS("left")}>
                            <Base.VerticalContent className={this.decorateCSS("content")}>
                              {logoExist && (
                                <div className={`${this.decorateCSS("flower")} ${isActive ? this.decorateCSS("active") : ""}`}>
                                  <Base.Media className={`${this.decorateCSS("logo")} ${!mediaExist ? this.decorateCSS("no-image") : ""}`} value={item.logo} />
                                </div>
                              )}
                              {subtitleExist && (
                                <Base.SectionSubTitle
                                  className={`${this.decorateCSS("subtitle")} ${!backgroundExist ? this.decorateCSS("subtitle-no-image") : this.decorateCSS("subtitle-has-bg")} ${isActive ? this.decorateCSS("active") : ""} ${!backgroundExist ? this.decorateCSS("no-image") : ""}`}
                                >
                                  {item.subtitle}
                                </Base.SectionSubTitle>
                              )}
                              {titleExist && (
                                <Base.SectionTitle
                                  className={`${this.decorateCSS("title")} ${!backgroundExist ? this.decorateCSS("title-no-image") : ""} ${isActive ? this.decorateCSS("active") : ""} ${!backgroundExist ? this.decorateCSS("no-image") : ""}`}
                                >
                                  {item.title}
                                </Base.SectionTitle>
                              )}
                              {descriptionExist && (
                                <Base.SectionDescription
                                  className={`${this.decorateCSS("description")} ${!backgroundExist ? this.decorateCSS("description-no-image") : ""} ${isActive ? this.decorateCSS("active") : ""} ${!backgroundExist ? this.decorateCSS("no-image") : ""}`}
                                >
                                  {item.description}
                                </Base.SectionDescription>
                              )}
                              {visibleButtons.length > 0 && (
                                <div className={`${this.decorateCSS("buttons")} ${isActive ? this.decorateCSS("active") : ""}`}>
                                  {visibleButtons.map((button: IButton, buttonIndex: number) => (
                                    <ComposerLink key={buttonIndex} path={button.url}>
                                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                      </Base.Button>
                                    </ComposerLink>
                                  ))}
                                </div>
                              )}
                            </Base.VerticalContent>
                          </div>
                        )}
                        {mediaExist && (
                          <div className={this.decorateCSS("right")}>
                            <div className={this.decorateCSS("image-wrapper")}>
                              <Base.Media
                                value={this.withVideoSettings(item.media)}
                                className={`${this.decorateCSS("image")} ${isActive ? this.decorateCSS("active") : ""}`}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}
          </div>
          {showDots && (
            <div className={this.decorateCSS("dots-container")}>
              {slider.map((_item: ISliderData, index: number) => (
                <div key={index} className={this.decorateCSS("dots")} onClick={() => this.handleClickDot(index)}>
                  <Base.P className={`${this.decorateCSS("number")} ${!currentBackgroundImage ? this.decorateCSS("no-image") : ""}`}>{index + 1}</Base.P>
                  <div className={`${this.decorateCSS("line")} ${currentIndex == index ? this.decorateCSS("active") : ""} ${!currentBackgroundImage ? this.decorateCSS("no-image") : ""}`}></div>
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
        {currentBackgroundImage && (
          <div className={this.decorateCSS("background-wrapper")}>
            <Base.Media value={this.withVideoSettings(currentBackgroundImage)} className={this.decorateCSS("background-image")} />
            {currentItem.overlay && <div className={this.decorateCSS("background-overlay")} />}
          </div>
        )}
        {showArrows && (prevIconExist || nextIconExist) && (
          <div className={this.decorateCSS("arrow-wrapper")}>
            {prevIconExist && (
              <div
                className={currentBackgroundImage ? this.decorateCSS("arrow-prev-wrapper") : this.decorateCSS("arrow-prev-wrapper-no-image")}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <div className={this.decorateCSS("arrow-prev")}>
                  <Base.Media value={navigation.prevIcon} className={this.decorateCSS("icon")} />
                </div>
              </div>
            )}
            {nextIconExist && (
              <div
                className={currentBackgroundImage ? this.decorateCSS("arrow-next-wrapper") : this.decorateCSS("arrow-next-wrapper-no-image")}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <div className={this.decorateCSS("arrow-next")}>
                  <Base.Media value={navigation.nextIcon} className={this.decorateCSS("icon")} />
                </div>
              </div>
            )}
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection24;
