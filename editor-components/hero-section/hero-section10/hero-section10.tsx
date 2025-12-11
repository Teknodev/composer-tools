import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section10.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderObject = {
  logo: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
  imageTitle: React.JSX.Element;
  image: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  description1: React.JSX.Element;
  icons: { icon: string; url: string }[];
  button: INPUTS.CastedButton[];
};

class HeroSection10 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
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
            name: "FaTwitter",
          },
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
      ],
    };

    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
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
            name: "FaFacebookF",
          },
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
      ],
    };

    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
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
    };

    this.addProp({
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
    });
    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "MdArrowLeft",
      },
    });
    this.addProp({
      type: "media",
      key: "ampersandIcon",
      displayer: "Ampersand Icon",
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
      key: 'index',
      displayer: "Index Active",
      value: true
    })
    this.addProp({
      type: "boolean",
      key: 'lineActive',
      displayer: "Line Active",
      value: true
    })

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
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
              key: "title",
              displayer: "Title",
              value: "Magnificent ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "We make structures, dams, bridges, scyscrapers and much more. Resistance, design, flexibility and usability are the main factors that we keep in mind in every project.",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Structures ",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754582f8a5b002ce6cce6?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Stay Tuned",
            },
            {
              type: "string",
              key: "description1",
              displayer: "Description 1",
              value:
                "We are 24/7 available through our social media. Follow us to stay up to date",
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Get a quote", "", null, null, "Link")
              ],
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ],
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
              key: "title",
              displayer: "Title",
              value: "Magnificent ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "We make structures, dams, bridges, scyscrapers and much more. Resistance, design, flexibility and usability are the main factors that we keep in mind in every project.",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Structures ",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754bb2f8a5b002ce6cd14?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Stay Tuned",
            },
            {
              type: "string",
              key: "description1",
              displayer: "Description 1",
              value:
                "We are 24/7 available through our social media. Follow us to stay up to date",
            },
            {
              type: "array",
              key: "button",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Get a quote", "", null, null, "Link")
              ],
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 10";
  }

  render() {
    const autoplay = this.getPropValue("autoplay");
    const settings = {
      dots: false,
      infinite: true,
      speed: 2500,
      autoplay: autoplay,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const slider = this.castToObject<SliderObject[]>("slider");
    const nextIcon = this.getPropValue("nextIcon");
    const prevIcon = this.getPropValue("prevIcon");
    const ampersandIcon = this.getPropValue("ampersandIcon");
    const index = this.getPropValue("index");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            ref={this.getComponentState("slider-ref")}
            className={this.decorateCSS("carousel")}
          >
            {slider.map((item: SliderObject, indexSlider: number) => {
              const title = this.castToString(item.title);
              const description = this.castToString(item.description);
              const imageTitle = this.castToString(item.imageTitle);
              const image = item.image;
              const imageWithSettings = image?.type === "video" ? {
                ...image,
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                }
              } : image;
              const subtitle = this.castToString(item.subtitle);
              const description1 = this.castToString(item.description1);
              const leftPage =
                title ||
                description ||
                item.button.length ||
                nextIcon ||
                prevIcon;
              const rightPage = !!(
                subtitle ||
                description1 ||
                item.icons.length > 0 ||
                ampersandIcon
              );

              return (
                <div
                  className={
                    this.decorateCSS("content") +
                    " " +
                    (!image ? this.decorateCSS("column-content") : "")
                  }
                  key={indexSlider}
                >
                  {leftPage && (
                    <div className={this.decorateCSS("left")}>
                      <div className={this.decorateCSS("left-container")}>
                          {item.logo && (
                            <Base.Media
                              value={item.logo}
                              className={this.decorateCSS("logo")}
                            />
                          )}
                          {(title || imageTitle) && (
                        <div className={this.decorateCSS("title-wrapper")}>
                          {title && (
                            <h1 className={this.decorateCSS("title")}>
                              {item.title}
                            </h1>
                          )}
                          {imageTitle && (
                            <h1 className={this.decorateCSS("imagetitle")}>
                              {item.imageTitle}
                            </h1>
                          )}
                        </div>
                      )}
                      <div
                        className={
                          this.decorateCSS("left-page-content") +
                          " " +
                          (!image
                            ? this.decorateCSS("column-left-page-content")
                            : "")
                        }
                      >
                        {description && (
                          <p className={this.decorateCSS("description")}>
                            {item.description}
                          </p>
                        )}
                        {slider.length > 1 && (
                          <div className={this.decorateCSS("nav-buttons")}>
                            {index &&
                              (<div className={this.decorateCSS("slide_number")}>
                                {String(indexSlider + 1).padStart(2, "0")}
                              </div>)
                            }
                            {(this.getPropValue("prevIcon") || this.getPropValue("nextIcon")) && (
                              <div className={this.decorateCSS("iconsSection")}>
                                {this.getPropValue("prevIcon") && (
                                  <div 
                                    className={this.decorateCSS("prev_icon_wrapper")}
                                    onClick={() => {
                                      this.getComponentState(
                                        "slider-ref"
                                      ).current.slickPrev();
                                    }}
                                  >
                                    <Base.Media
                                      value={this.getPropValue("prevIcon")}
                                      className={`${this.decorateCSS("prev_icon")}`}
                                    />
                                  </div>
                                )}
                                {this.getPropValue("nextIcon") && (
                                  <div 
                                    className={this.decorateCSS("next_icon_wrapper")}
                                    onClick={() => {
                                      this.getComponentState(
                                        "slider-ref"
                                      ).current.slickNext();
                                    }}
                                  >
                                    <Base.Media
                                      value={this.getPropValue("nextIcon")}
                                      className={`${this.decorateCSS("next_icon")}`}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        {item.button.map(
                          (buttonItem: INPUTS.CastedButton) => {
                            const buttonText = this.castToString(
                              buttonItem.text
                            );
                            if (buttonText)
                              return (
                                <div
                                  className={this.decorateCSS(
                                    "button-section"
                                  )}
                                >
                                  {this.getPropValue("lineActive") && (
                                    <div
                                      className={this.decorateCSS("line")}
                                    />
                                  )}
                                  <ComposerLink path={buttonItem.url}>
                                    <Base.Button buttonType={buttonItem.type}
                                      className={this.decorateCSS("button")}
                                    >
                                      <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                </div>
                              );
                          }
                        )}
                      </div>
                    </div>
                        
                    </div>
                  )}
                  {image && (
                    <div className={this.decorateCSS("middle")}>
                      {image && (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <Base.Media
                            className={this.decorateCSS("image")}
                            value={imageWithSettings}
                          />
                          {this.getPropValue("overlay") && image && (image.type === "image" || image.type === "video") && image.url && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {rightPage && (
                    <div className={this.decorateCSS("right")}>
                      {
                        <div className={this.decorateCSS("icon")}>
                          <Base.Media
                            value={this.getPropValue("ampersandIcon")}
                            className={this.decorateCSS("ampersand-icon")}
                          />
                        </div>
                      }

                      {(subtitle || description1 || item.icons.length > 0) && (
                        <div
                          className={
                            this.decorateCSS("right-page-content") +
                            " " +
                            (!image
                              ? this.decorateCSS("column-right-page-content")
                              : "")
                          }
                        >
                          {subtitle && (
                            <h2 className={this.decorateCSS("subtitle")}>
                              {item.subtitle}
                            </h2>
                          )}
                          {description1 && (
                            <p className={this.decorateCSS("description1")}>
                              {item.description1}
                            </p>
                          )}
                          <div className={this.decorateCSS("icon-group")}>
                            {item.icons.map(
                              (item: any) => (
                                <ComposerLink key={item.getPropValue("url")} path={item.getPropValue("url")}>
                                  <Base.Media
                                    value={item.getPropValue("icon")}
                                    className={this.decorateCSS("icon")}
                                  />
                                </ComposerLink>
                              )
                            )}
                          </div>
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
