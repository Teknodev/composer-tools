import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section37.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type SliderItem = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  media: TypeMediaInputValue;
  description: React.JSX.Element;
  title: React.JSX.Element;
  url: string;
  number: React.JSX.Element;
};

type SocialItem = {
  media: TypeMediaInputValue;
  url: string;
};

type Footer = {
  showPageNumbers: boolean;
  pageNumbersSeparator: TypeMediaInputValue;
  text: React.JSX.Element;
};

class HeroSection37 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
              value: "Sonya",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },

            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Assumenda voluptatum eveniet possimus modi illo.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67518d0c506a40002c318e40?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
              value: "Baseball",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Commodi necessitatibus perspiciatis quae labore!",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67518d3f506a40002c318e73?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
              value: "Kitchen",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Commodi necessitatibus perspiciatis quae labore!",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675193c7506a40002c3192ef?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
              value: "Biker",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Praesentium cumque saepe dignissimos incidunt.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294e0?alt=media&timestamp=1719584962578",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },

        {
          type: "object",
          key: "item",
          displayer: "Item",
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
              value: "Born Wild",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "05",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Impedit ad animi quae nobis voluptate! Rerum, enim.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/677297550655f8002caea7ff?alt=media",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "boolean",
          key: "showPageNumbers",
          displayer: "Page Numbers",
          value: true,
        },
        {
          type: "media",
          key: "pageNumbersSeparator",
          displayer: "Line",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "FiMinus",
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Bottom Text",
          value: "Follow us",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "BiLogoFacebook",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaSquareXTwitter",
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("active_index", 0);
    this.setComponentState("text_index", 0);
    this.setComponentState("text_visibility", true);
  }

  static getName(): string {
    return "Hero Section 37";
  }

  render() {
    const slider = this.castToObject<SliderItem[]>("slider");
    const isOverlayActive = this.getPropValue("overlay");
    const footer = this.castToObject<Footer>("footer");
    const hasMedia = (media?: TypeMediaInputValue) => !!(media && ((media as any).url || (media as any).name));
    const icons = this.castToObject<SocialItem[]>("socials").filter((social: SocialItem) => hasMedia(social.media));
    const footerText = footer?.text;
    const isFooterTextExist = this.castToString(footerText);
    const showPageNumbers = footer?.showPageNumbers;
    const pageNumbersSeparator = footer?.pageNumbersSeparator;
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      infinite: !!sliderSettings.infinite && slider.length > 2,
      variableWidth: true,
      centerMode: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (_: number, nextSlide: number) => {
        this.setComponentState("active_index", nextSlide);
        this.setComponentState("text_visibility", false);
        setTimeout(() => {
          this.setComponentState("text_visibility", true);
          this.setComponentState("text_index", nextSlide);
        }, 200);
      },
    };

    const activeIndex = this.getComponentState("active_index");
    const totalSlides = slider.length;
    const textItem = slider[this.getComponentState("text_index")] || slider[0];
    const hasTextLogo = hasMedia(textItem?.logo);
    const isTextSubtitleExist = this.castToString(textItem?.subtitle);
    const isTextDescriptionExist = this.castToString(textItem?.description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slider.some((slide) => hasMedia(slide.media)) && (
            <div className={this.decorateCSS("image-box")}>
              {isOverlayActive && <div className={this.decorateCSS("image-overlay")}></div>}
              <div className={this.decorateCSS("overlay")}>
                {slider.map((slide, index) => {
                  const isActive = this.getComponentState("active_index") === index;
                  return hasMedia(slide.media) && (
                    <Base.Media key={index} value={slide.media} className={`${this.decorateCSS("image")} ${isActive && this.decorateCSS("active")}`} />
                  );
                })}
              </div>
            </div>
          )}
          {(hasTextLogo || isTextSubtitleExist || isTextDescriptionExist) && (
            <div className={this.decorateCSS("text-box")}>
              <div className={this.decorateCSS("decorator-line")}></div>
              <Base.VerticalContent className={`${this.decorateCSS("text")} ${this.getComponentState("text_visibility") ? this.decorateCSS("visible") : ""}`}>
                {hasTextLogo && <Base.Media value={textItem.logo} className={this.decorateCSS("logo")} />}
                {isTextSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{textItem.subtitle}</Base.SectionSubTitle>}
                {isTextDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{textItem.description}</Base.SectionDescription>}
              </Base.VerticalContent>
            </div>
          )}
          {slider.length > 0 && (
            <div className={this.decorateCSS("carousel-wrapper")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {slider.map((item: SliderItem, indexSlider: number) => {
                  const isActive = this.getComponentState("active_index") === indexSlider;
                  return (
                    <div key={indexSlider} className={this.decorateCSS("card")}>
                      <div
                        className={this.decorateCSS("button-wrapper")}
                        onMouseOver={() => {
                          const isIndexSame = this.getComponentState("active_index") === indexSlider;
                          if (isIndexSame) return;

                          this.setComponentState("active_index", indexSlider);
                          this.setComponentState("text_visibility", false);
                          setTimeout(() => {
                            this.setComponentState("text_visibility", true);
                            this.setComponentState("text_index", indexSlider);
                          }, 200);
                        }}
                      >
                        <ComposerLink key={indexSlider} path={item.url}>
                          <div className={this.decorateCSS("link-wrapper")}>
                            {this.castToString(item.number) && <Base.P className={this.decorateCSS("number")}>{item.number}</Base.P>}
                            {this.castToString(item.title) && <Base.SectionTitle className={`${this.decorateCSS("title-text")} ${isActive ? this.decorateCSS("active") : ""}`}>{item.title}</Base.SectionTitle>}
                          </div>
                        </ComposerLink>
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          )}
          {(showPageNumbers || isFooterTextExist || icons.length > 0) && (
            <div className={this.decorateCSS("footer")}>
              {showPageNumbers && (
                <div className={this.decorateCSS("page-numbers")}>
                  <Base.P className={this.decorateCSS("current")}>{(activeIndex + 1).toString().padStart(2, "0")}</Base.P>
                  {hasMedia(pageNumbersSeparator) && <Base.Media value={pageNumbersSeparator} className={this.decorateCSS("separator")} />}
                  <Base.P className={this.decorateCSS("total")}>{totalSlides.toString().padStart(2, "0")}</Base.P>
                </div>
              )}
              {(isFooterTextExist || icons.length > 0) && (
                <div className={this.decorateCSS("follow-us")}>
                  {isFooterTextExist && <Base.P className={this.decorateCSS("follow-text")}>{footerText}</Base.P>}
                  {icons.length > 0 && (
                    <div className={this.decorateCSS("social-icons")}>
                      {icons.map((social: SocialItem, index: number) => (
                        <ComposerLink key={index} path={social.url}>
                          <Base.Media value={social.media} className={this.decorateCSS("social-icon")} />
                        </ComposerLink>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection37;