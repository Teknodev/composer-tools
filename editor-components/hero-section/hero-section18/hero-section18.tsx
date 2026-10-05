import * as React from "react";
import styles from "./hero-section18.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Slide = {
  logo: TypeMediaInputValue;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  description_title: React.JSX.Element;
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Social = {
  url: string;
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
};

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

class HeroSection18 extends BaseHeroSection {
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194c2bd2970002c625e7e?alt=media&timestamp=1719483639150",
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
              value: "Visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Painting",
            },
            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Painting is the application of pigments to a support surface that establishes an image, design or decoration.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef2?alt=media&timestamp=1719483639150",
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
          type: "object",
          displayer: "Item",
          key: "item",
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
              displayer: "Subtitle",
              key: "subtitle",
              value: "Visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Scultpure",
            },

            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ligula eu ligula congue vestibulum.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194c2bd2970002c625e7f?alt=media&timestamp=1719483639150",
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
          type: "object",
          displayer: "Item",
          key: "item",
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
              displayer: "Subtitle",
              key: "subtitle",
              value: "Visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Architecture",
            },

            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu justo sed libero consectetur consequat.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef1?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            }
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
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
              displayer: "Subtitle",
              key: "subtitle",
              value: "Visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Ceramics",
            },

            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida felis sed nisl consequat, nec ultricies velit commodo.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef3?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            }
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
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
              displayer: "Subtitle",
              key: "subtitle",
              value: "Visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Photography",
            },

            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor justo ac lorem tincidunt, at convallis tortor efficitur.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef4?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            }
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Medias",
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
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Facebook",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaFacebook" },
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Instagram",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaInstagram" },
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Dribbble",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaDribbble" },
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
            name: "BsArrowLeft",
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
            name: "BsArrowRight",
          },
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active-index", 0);
  }

  static getName(): string {
    return "Hero Section 18";
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
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      beforeChange: (oldIndex: number, index: number) => {
        if (oldIndex === index) return;
        setTimeout(() => {
          this.setComponentState("active-index", index);
        }, 1200);
      },
    };

    const slides = this.castToObject<Slide[]>("slider");
    const sliderCount = slides?.length;
    const progressPercentage = ((this.getComponentState("active-index") + 1) / sliderCount) * 100;

    const socials = this.castToObject<Social[]>("socials").filter(
      (item: Social) => this.castToString(item.text) || this.hasMedia(item.icon)
    );

    const arrows = this.castToObject<Arrows>("arrows");
    const prevIcon = arrows?.prevIcon;
    const nextIcon = arrows?.nextIcon;

    const prevIconExist = this.hasMedia(prevIcon);
    const nextIconExist = this.hasMedia(nextIcon);

    const renderBottomPage = socials?.length > 0 || prevIconExist || nextIconExist;

    const background = this.castToObject<Background>("background");
    const coverValue = background?.media;
    const cover = this.hasMedia(coverValue);
    const overlay = !!background?.overlay;

    const showPagination = !!sliderSettings.dots;
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {cover && <Base.Media value={this.withVideoSettings(coverValue)} className={this.decorateCSS("background-image")} />}
        {cover && overlay && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slides?.length > 0 && (
            <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider")}>
              {slides.map((item: Slide, index: number) => {
                const logoExist = this.hasMedia(item.logo);
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);

                const descTitleExist = this.castToString(item.description_title);
                const descExist = this.castToString(item.description);

                return (
                  <div className={this.decorateCSS("slide")} key={index}>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("text-content")}>
                          {(logoExist || titleExist || subtitleExist) && (
                            <Base.VerticalContent className={this.decorateCSS("heading")}>
                              {logoExist && <Base.Media value={item.logo} className={`${this.decorateCSS("logo")} ${!cover ? this.decorateCSS("logo-no-image") : ""}`} />}
                              {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${!cover ? this.decorateCSS("subtitle-no-image") : ""}`}>{item.subtitle}</Base.SectionSubTitle>}
                              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${!cover ? this.decorateCSS("title-no-image") : ""}`}>{item.title}</Base.SectionTitle>}
                            </Base.VerticalContent>
                          )}
                          {showPagination && slides.length > 1 && (
                            <div className={`${this.decorateCSS("pagination")} ${!cover && this.decorateCSS("pagination-no-image")}`}>
                              <Base.H5 className={this.decorateCSS("active-slide")}>{(this.getComponentState("active-index") + 1).toString().padStart(2, "0")}</Base.H5>
                              <div className={`${this.decorateCSS("progress-bar")} ${!cover && this.decorateCSS("progress-bar-no-image")}`}>
                                <div className={`${this.decorateCSS("active")} ${!cover && this.decorateCSS("active-no-image")}`} style={{ width: `${progressPercentage}%` }} />
                              </div>
                              <Base.H5 className={this.decorateCSS("slide-count")}>{sliderCount.toString().padStart(2, "0")}</Base.H5>
                            </div>
                          )}
                        </div>
                      </div>
                      {this.hasMedia(item.media) && (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("image")} />
                          {item.overlay && <div className={this.decorateCSS("slide-overlay")} />}
                        </div>
                      )}
                      {(descTitleExist || descExist) && (
                        <div className={`${this.decorateCSS("description-div")} ${!cover && this.decorateCSS("description-div-no-image")}`}>
                          {descTitleExist && <Base.H3 className={this.decorateCSS("description-title")}>{item.description_title}</Base.H3>}
                          {descExist && <Base.P className={this.decorateCSS("item-description")}>{item.description}</Base.P>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          )}
          {renderBottomPage && (
            <div className={this.decorateCSS("page-bottom")}>
              {socials?.length > 0 && (
                <div className={this.decorateCSS("socials")}> 
                  {socials.map((item: Social, index: number) => (
                    <ComposerLink path={item.url} key={index}>
                      <div className={this.decorateCSS("social-item")}>
                        {this.castToString(item.text) && (
                          <Base.H6 className={`${this.decorateCSS("name")} ${!cover ? this.decorateCSS("name-no-image") : ""}`}>{item.text}</Base.H6>
                        )}
                        {this.hasMedia(item.icon) && <Base.Media value={item.icon} className={this.decorateCSS("social-icon")} />}
                      </div>
                    </ComposerLink>
                  ))}
                </div>
              )}  
              {prevIconExist && slides.length > 1 && (
                <div
                  className={`${this.decorateCSS("prev-icon")} ${!cover && this.decorateCSS("prev-icon-no-image")}`}
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <Base.Media className={this.decorateCSS("icon")} value={prevIcon} />
                </div>
              )}
              {nextIconExist && slides.length > 1 && (
                <div
                  className={`${this.decorateCSS("next-icon")} ${!cover && this.decorateCSS("next-icon-no-image")}`}
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <Base.Media className={this.decorateCSS("icon")} value={nextIcon} />
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection18;

