import * as React from "react";
import { BaseHeader, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./header10.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderObject = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  imageTitle: React.JSX.Element;
  image: string;
  subtitle: React.JSX.Element;
  description1: React.JSX.Element;
  icons: { icon: string; url: string }[];
  button: INPUTS.CastedButton[];
};

class Header10 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaTwitter",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
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
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebookF",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
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
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaInstagram",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "MdArrowRight",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "MdArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "ampersandIcon",
      displayer: "Ampersand Icon",
      value: "LuAmpersand",
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
              type: "image",
              key: "image",
              displayer: " Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6825e16e2bb4c4002cf72e95?alt=media",
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
          displayer: "Slider Object",
          value: [
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
              type: "image",
              key: "image",
              displayer: " Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6825f8952bb4c4002cf746aa?alt=media",
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
    return "Header 10";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2500,
      autoplay: false,
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
                      <div
                        className={
                          this.decorateCSS("left-page-content") +
                          " " +
                          (!image
                            ? this.decorateCSS("column-left-page-content")
                            : "")
                        }
                      >
                        {(title && image) && (
                          <h1 className={this.decorateCSS("title")}>
                            {item.title}
                          </h1>
                        )}
                        {(!image && (title || imageTitle)) && (
                          <div className={this.decorateCSS("title-wrapper")}>
                            {title && (<div className={this.decorateCSS("title")}>{item.title}</div>)}
                            {imageTitle && (<div className={this.decorateCSS("image-title")}>{item.imageTitle}</div>)}
                          </div>
                        )}
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
                                  <div className={this.decorateCSS("prev_icon_wrapper")}>
                                    <ComposerIcon
                                      name={this.getPropValue("prevIcon")}
                                      propsIcon={{
                                        className: `${this.decorateCSS("prev_icon")}`,
                                        onClick: () => {
                                          this.getComponentState(
                                            "slider-ref"
                                          ).current.slickPrev();
                                        },
                                      }}
                                    />
                                  </div>
                                )}
                                {this.getPropValue("nextIcon") && (
                                  <div className={this.decorateCSS("next_icon_wrapper")}>
                                    <ComposerIcon
                                      name={this.getPropValue("nextIcon")}
                                      propsIcon={{
                                        className: `${this.decorateCSS("next_icon")}`,
                                        onClick: () => {
                                          this.getComponentState(
                                            "slider-ref"
                                          ).current.slickNext();
                                        },
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        {item.button.map(
                          (buttonItem: INPUTS.CastedButton, indexButton: number) => {
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
                                      {buttonItem.text}
                                    </Base.Button>
                                  </ComposerLink>
                                </div>
                              );
                          }
                        )}
                      </div>
                    </div>
                  )}
                  {image && (
                    <div className={this.decorateCSS("middle")}>
                      {imageTitle && (
                        <h1 className={this.decorateCSS("imagetitle")}>
                          {item.imageTitle}
                        </h1>
                      )}
                      {image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={item.image}
                          alt=""
                        />
                      )}
                    </div>
                  )}
                  {rightPage && (
                    <div className={this.decorateCSS("right")}>
                      {
                        <div className={this.decorateCSS("icon")}>
                          <ComposerIcon
                            name={this.getPropValue("ampersandIcon")}
                            propsIcon={{
                              className: `${this.decorateCSS(
                                "ampersand-icon"
                              )}`,
                            }}
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
                              (item: any, indexSlider: number) => (
                                <ComposerLink path={item.getPropValue("url")}>
                                  <ComposerIcon
                                    name={item.getPropValue("icon")}
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

export default Header10;