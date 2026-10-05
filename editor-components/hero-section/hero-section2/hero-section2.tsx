import * as React from "react";
import styles from "./hero-section2.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItemType = {
  image: TypeMediaInputValue;
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  category: React.JSX.Element;
  title: React.JSX.Element;
  author: React.JSX.Element;
  date: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  dot: boolean;
};

class HeroSection2 extends BaseHeroSection {
    componentDidMount() {
      // İlk açılışta activeDot'ın görünmesi için
      this.setComponentState("activeTab", 0);
    }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710cfaa97fe08002c76ce44?alt=media",
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
              value: "",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "Back at Harvard after four decades...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "By John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710d06f97fe08002c76cf1c?alt=media",
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
              value: "",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "A decade spent exploring India's d...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "By John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Background Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710d0b497fe08002c76cf66?alt=media",
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
              value: "",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "category",
              value: "Culture",
              displayer: "Category",
            },
            {
              type: "string",
              key: "title",
              value: "Television’s Carlton Cuse on what...",
              displayer: "Title",
            },
            {
              type: "string",
              key: "author",
              value: "By John Doe",
              displayer: "Author",
            },
            {
              type: "boolean",
              key: "dot",
              value: true,
              displayer: "Dot",
            },
            {
              type: "string",
              key: "date",
              value: "22 December",
              displayer: "Date",
            },
            {
              type: "string",
              key: "description",
              value:
                "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla...",
              displayer: "Description",
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "Link"),
          ],
        },
      ],
    });
    
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );
  }

  static getName(): string {
    return "Hero Section 2";
  }

  render() {
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      customPaging: (i: number) => {
        const isActive = this.getComponentState("activeTab") === i;
        return (
          <div
            className={`${this.decorateCSS("dot")}${isActive ? ' ' + this.decorateCSS("activeDot") : ''}`}
          ></div>
        );
      },
      dotsClass: `slick-dots ${this.decorateCSS("dots")}`,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("activeTab", next);
      },
    };

    const sliderItems = this.castToObject<SliderItemType[]>("slider");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider")}>
            {sliderItems.length > 0 && (
              <ComposerSlider {...settings}>
                {sliderItems.map((item: SliderItemType, idx: number) => {
                  const isSubtitleExist = this.castToString(item.subtitle);
                  const isCategoryExist = this.castToString(item.category);
                  const isTitleExist = this.castToString(item.title);
                  const isAuthorExist = this.castToString(item.author);
                  const isDateExist = this.castToString(item.date);
                  const isDescExist = this.castToString(item.description);
                  const isLinkTextExist = this.castToString(item.button.text);

                  const hasLogo = !!((item.logo as any)?.url || (item.logo as any)?.name);
                  const hasImage = !!(item.image as any)?.url;
                  const hasButtonIcon = !!(item.button.icon && (typeof item.button.icon === "string" ? item.button.icon : (item.button.icon as any)?.name || (item.button.icon as any)?.url));

                  const cardValues =
                    hasLogo ||
                    isSubtitleExist ||
                    isLinkTextExist ||
                    isDescExist ||
                    isDateExist ||
                    isAuthorExist ||
                    isTitleExist ||
                    isCategoryExist;

                  const imageWithSettings = item.image?.type === "video" ? {
                    ...item.image,
                    settings: {
                      autoplay: true,
                      loop: true,
                      muted: true,
                      controls: false
                    }
                  } : item.image;

                  return (
                    <div className={this.decorateCSS("slider-item")} key={idx}>
                      <div className={this.decorateCSS("slider-item-container")}>
                        {hasImage && (
                          <Base.Media 
                            value={imageWithSettings} 
                            className={this.decorateCSS("background-image")}
                          />
                        )}
                        {this.getPropValue("overlay") && hasImage && (
                          <div className={this.decorateCSS("overlay")} />
                        )}
                        <div className={this.decorateCSS("content-max-width")}>
                          {cardValues && (
                            <div className={this.decorateCSS("card")}>
                              {isCategoryExist && (
                                <Base.P className={this.decorateCSS("category")}>{item.category}</Base.P>
                              )}
                              <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                {hasLogo && (
                                  <Base.Media
                                    value={item.logo}
                                    className={this.decorateCSS("logo")}
                                  />
                                )}
                                {isSubtitleExist && (
                                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>
                                )}
                                {isTitleExist && (
                                  <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>
                                )}
                                {(isAuthorExist || isDateExist) && (
                                  <div className={this.decorateCSS("date-author")}>
                                    {isAuthorExist && (
                                      <Base.P className={this.decorateCSS("author")}>
                                        {item.author}
                                      </Base.P>
                                    )}
                                    {isAuthorExist && isDateExist && item.dot && (
                                      <div className={this.decorateCSS("dot-separator")}></div>
                                    )}
                                    {isDateExist && (
                                      <Base.P className={this.decorateCSS("date")}>{item.date}</Base.P>
                                    )}
                                  </div>
                                )}
                                {isDescExist && (
                                  <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {item.description}
                                  </Base.SectionDescription>
                                )}
                              </Base.VerticalContent>
                              {isLinkTextExist && (
                                <div className={this.decorateCSS("button-container")}>
                                  <ComposerLink path={item.button.url}>
                                    <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                                      <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                                      {hasButtonIcon && 
                                      <Base.Media
                                        value={typeof item.button.icon === "string" ? { type: "icon", name: item.button.icon } : item.button.icon}
                                        className={this.decorateCSS("button-icon")}
                                      />}
                                    </Base.Button>
                                  </ComposerLink>
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
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection2;

