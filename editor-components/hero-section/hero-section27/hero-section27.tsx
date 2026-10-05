import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section27.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type MediaItem = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type StatItem = {
  value: React.JSX.Element;
  label: React.JSX.Element;
};

type SliderItemType = {
  background: MediaItem;
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  media: TypeMediaInputValue;
  overlay: boolean;
  secondTitle: React.JSX.Element;
  medias: MediaItem[];
  button: INPUTS.CastedButton;
  pageNumber: boolean;
  description: React.JSX.Element;
  stats: StatItem[];
  statsLine: boolean;
  secondDescription: React.JSX.Element;
};

const mediaItem = (url: string): TypeUsableComponentProps => ({
  type: "object",
  key: "item",
  displayer: "Media",
  value: [
    {
      type: "media",
      displayer: "Media",
      key: "media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: url,
      },
    },
    {
      type: "boolean",
      displayer: "Overlay",
      key: "overlay",
      value: false,
    },
  ],
});

const statItem = (value: string, label: string): TypeUsableComponentProps => ({
  type: "object",
  key: "stat",
  displayer: "Stat",
  value: [
    {
      type: "string",
      displayer: "Value",
      key: "value",
      value: value,
    },
    {
      type: "string",
      displayer: "Label",
      key: "label",
      value: label,
    },
  ],
});

type SlideContent = {
  title: string;
  mediaUrl: string;
  secondTitle: string;
  medias: string[];
  buttonText: string;
  description: string;
  stats: [string, string][];
  secondDescription: string;
};

const slide = (content: SlideContent): TypeUsableComponentProps => ({
  type: "object",
  displayer: "Slide",
  key: "item",
  value: [
    {
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b5c2693292c6002b237b7c?alt=media",
          },
        },
        {
          type: "boolean",
          displayer: "Overlay",
          key: "overlay",
          value: false,
        },
      ],
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
      displayer: "Subtitle",
      key: "subtitle",
      value: "",
    },
    {
      type: "string",
      displayer: "Title",
      key: "title",
      value: content.title,
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
        url: content.mediaUrl,
      },
    },
    {
      type: "boolean",
      displayer: "Overlay",
      key: "overlay",
      value: false,
    },
    {
      type: "string",
      displayer: "Second Title",
      key: "secondTitle",
      value: content.secondTitle,
    },
    {
      type: "array",
      key: "medias",
      displayer: "Medias",
      value: content.medias.map((url) => mediaItem(url)),
    },
    INPUTS.BUTTON("button", "Button", content.buttonText, "", "MdOutlineArrowOutward", null, "Black"),
    {
      type: "boolean",
      displayer: "Page Number",
      key: "pageNumber",
      value: true,
    },
    {
      type: "string",
      displayer: "Description",
      key: "description",
      value: content.description,
    },
    {
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: content.stats.map(([value, label]) => statItem(value, label)),
    },
    {
      type: "boolean",
      displayer: "Stats Line",
      key: "statsLine",
      value: true,
    },
    {
      type: "string",
      displayer: "Second Description",
      key: "secondDescription",
      value: content.secondDescription,
    },
  ],
});

class HeroSection27 extends BaseHeroSection {
  static getName(): string {
    return "Hero Section 27";
  }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        slide({
          title: "COFFEE",
          mediaUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
          secondTitle: "VERSE",
          medias: [
            "https://media.istockphoto.com/id/1503772186/tr/foto%C4%9Fraf/cups-of-assorted-coffee-on-light-background.jpg?s=612x612&w=0&k=20&c=V9JNNlMkgAMZlAtNO6u4hGiydn8Y1oJUEiUWBXaNC_k=",
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          ],
          buttonText: "Explore",
          description:
            "Refresh yourself with our Cold Brew Cool, a smooth and invigorating option brewed to perfection for a chilled coffee experience.",
          stats: [
            ["30+", "Items Of Coffee"],
            ["3k+", "Happy Customer"],
          ],
          secondDescription:
            "Experience the purity of our Organic Fair Trade coffee, ethically sourced and meticulously roasted to bring out the best in every bean.",
        }),
        slide({
          title: "SPECIAL",
          mediaUrl: "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
          secondTitle: "TASTE",
          medias: [
            "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670792d497fe08002c74f4a3?alt=media",
          ],
          buttonText: "Read More",
          description:
            "Indulge in the bold, rich flavor of our Classic Espresso. Perfect for those who appreciate a traditional, robust coffee experience.",
          stats: [
            ["100%", "Fresh Coffee"],
            ["20+", "Different Countries"],
          ],
          secondDescription:
            "Enjoy the balanced taste of our Smooth Medium Roast, offering a harmonious blend of mellow flavors with a subtle hint of sweetness.",
        }),
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      })
    );

    this.setComponentState("active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
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
    const slider = this.castToObject<SliderItemType[]>("slider");
    const sliderCount = slider.length;
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      infinite: sliderCount > 1 && sliderSettings.infinite,
      fade: sliderCount > 1,
      slidesToShow: Math.min(sliderCount, 1),
      vertical: sliderCount > 1,
      verticalSwiping: sliderCount > 1,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
      customPaging: (i: any) => (
        <div
          className={`${this.decorateCSS("dot")} ${this.getComponentState("active-index") == i ? this.decorateCSS("activeDot") : ""}`}></div>
      ),
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };

    const elements = typeof document !== "undefined" ? document.getElementsByClassName(this.decorateCSS("carousel")) : ([] as unknown as HTMLCollectionOf<Element>);

    const items = [];

    for (let index = 0; index < elements.length; index++) {
      items.push(elements.item(index));
    }

    const minHeight = items.sort((a, b) => b.clientHeight - a.clientHeight)[0]
      ?.clientHeight;

    if (!slider.length) return <></>

    const activeSlide = slider[this.getComponentState("active-index")];
    const activeBackground = activeSlide?.background?.media;
    const hasActiveBackground = this.hasMedia(activeBackground);

    return (
      <Base.Container
        className={this.decorateCSS("container")}
      >
        {hasActiveBackground && (
          <Base.Media
            value={this.withVideoSettings(activeBackground)}
            className={this.decorateCSS("background-media")}
          />
        )}
        {hasActiveBackground && activeSlide?.background?.overlay && (
          <div className={this.decorateCSS("background-overlay")} />
        )}
        <div className={this.decorateCSS("content")}>
          <div
            className={this.decorateCSS("slider-parent")}
            style={{
              minHeight: minHeight + "px",
            }}
          >
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {slider.map((item: SliderItemType, sliderIndex: number) => {
                const hasLogo = this.hasMedia(item.logo);
                const isSubtitleExist = this.castToString(item.subtitle);
                const isTitleExist = this.castToString(item.title);
                const hasMedia = this.hasMedia(item.media);
                const isSecondTitleExist = this.castToString(item.secondTitle);
                const medias = (item.medias || []).filter((mediaItem: MediaItem) => this.hasMedia(mediaItem.media));
                const isButtonTextExist = this.castToString(item.button.text);
                const hasButtonIcon = this.hasMedia(item.button.icon as any);
                const hasButton = isButtonTextExist || hasButtonIcon;
                const showPageNumber = item.pageNumber && slider.length > 1;
                const isDescriptionExist = this.castToString(item.description);
                const stats = (item.stats || []).filter(
                  (stat: StatItem) => this.castToString(stat.value) || this.castToString(stat.label)
                );
                const isSecondDescriptionExist = this.castToString(item.secondDescription);
                const hasBackground = this.hasMedia(item.background?.media);

                return (
                  <div
                    key={sliderIndex}
                    className={`${this.decorateCSS("max-content")} ${hasBackground ? this.decorateCSS("withBackgroundImage") : ""}`}
                  >
                    {(hasLogo || isSubtitleExist) && (
                      <div className={this.decorateCSS("header")}>
                        {hasLogo && (
                          <Base.Media value={item.logo} className={this.decorateCSS("logo")} />
                        )}
                        {isSubtitleExist && (
                          <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                            {item.subtitle}
                          </Base.SectionSubTitle>
                        )}
                      </div>
                    )}
                    {(isTitleExist || hasMedia) && (
                      <div className={this.decorateCSS("upperDiv")}>
                        <div className={this.decorateCSS("uppderDiv-content")}>
                          {isTitleExist && (
                            <div className={this.decorateCSS("upTitle-container")}>
                              <Base.SectionTitle className={this.decorateCSS("upTitle")}>
                                {item.title}
                              </Base.SectionTitle>
                            </div>
                          )}
                          {hasMedia && (
                            <div className={this.decorateCSS("upImage-container")}>
                              <Base.Media
                                className={this.decorateCSS("upImage")}
                                value={this.withVideoSettings(item.media)}
                              />
                              {item.overlay && (
                                <div className={this.decorateCSS("image-overlay")} />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {(medias.length > 0 || isSecondTitleExist) && (
                      <div className={this.decorateCSS("middleDiv")}>
                        <div className={this.decorateCSS("middleDiv-content")}>
                          {medias.length > 0 && (
                            <div className={this.decorateCSS("middleImages-container")}>
                              {medias.map((mediaItem: MediaItem, imageIndex: number) => (
                                <div
                                  className={this.decorateCSS("image-wrapper")}
                                  style={{
                                    width: `${100 / medias.length}%`,
                                  }}
                                  key={imageIndex}
                                >
                                  <Base.Media
                                    className={this.decorateCSS("middleImages")}
                                    value={this.withVideoSettings(mediaItem.media)}
                                  />
                                  {mediaItem.overlay && (
                                    <div className={this.decorateCSS("image-overlay")} />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {isSecondTitleExist && (
                            <div className={this.decorateCSS("middleTitle-container")}>
                              <Base.H1 className={this.decorateCSS("middleTitle")}>
                                {item.secondTitle}
                              </Base.H1>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <div className={this.decorateCSS("LowerDiv")}>
                      {(hasButton || showPageNumber) && (
                        <div className={this.decorateCSS("button-container")}>
                          <div className={this.decorateCSS("button-content")}>
                            {hasButton && (
                              <ComposerLink path={item.button.url}>
                                <Base.Button buttonType={item.button.type}
                                  className={this.decorateCSS("button")}
                                >
                                  {isButtonTextExist && (
                                    <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                                  )}
                                  {hasButtonIcon && (
                                    <Base.Media
                                      value={item.button.icon as any}
                                      className={this.decorateCSS("button-icon")}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            )}
                            {showPageNumber && (
                              <div className={this.decorateCSS("figure")}>
                                <div className={this.decorateCSS("pagination")}>
                                  <Base.P className={this.decorateCSS("active-slide")}>
                                    {(this.getComponentState("active-index") + 1).toString().padStart(2, "0")}
                                  </Base.P>
                                  <div className={this.decorateCSS("slide-count-power")}>
                                    <Base.P className={this.decorateCSS("divider")}>/</Base.P>
                                    <Base.P className={this.decorateCSS("slide-count")}>
                                      {sliderCount.toString().padStart(2, "0")}
                                    </Base.P>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {(isDescriptionExist || stats.length > 0 || isSecondDescriptionExist) && (
                        <div className={this.decorateCSS("desc-container")}>
                          <div className={this.decorateCSS("desc-content")}>
                            {isDescriptionExist && (
                              <Base.SectionDescription className={this.decorateCSS("leftDescription")}>
                                {item.description}
                              </Base.SectionDescription>
                            )}
                            {stats.length > 0 && (
                              <div className={this.decorateCSS("count")}>
                                {stats.map((stat: StatItem, statIndex: number) => (
                                  <React.Fragment key={statIndex}>
                                    {statIndex > 0 && item.statsLine && (
                                      <div className={this.decorateCSS("line")}></div>
                                    )}
                                    <div className={this.decorateCSS("count-items")}>
                                      {this.castToString(stat.value) && (
                                        <Base.P className={this.decorateCSS("itemsNo")}>{stat.value}</Base.P>
                                      )}
                                      {this.castToString(stat.label) && (
                                        <Base.P className={this.decorateCSS("itemDesc")}>{stat.label}</Base.P>
                                      )}
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            )}
                            {isSecondDescriptionExist && (
                              <Base.P className={this.decorateCSS("rightDescription")}>
                                {item.secondDescription}
                              </Base.P>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
      </Base.Container>
    );
  }
}
export default HeroSection27;
