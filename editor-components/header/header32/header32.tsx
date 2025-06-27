import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header32.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "composer-tools/composer-base-components/base/base";

type Card = {
  backgroundImage: string;
  imageTitle: React.JSX.Element;
  imageDescription: React.JSX.Element;
  urlTitle: React.JSX.Element;
  url: string;
};
class Header32 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383502f8a5b002ce6aa53?alt=media",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Title",
              value: "Transforming ideas into structures",
            },
            {
              type: "string",
              key: "imageDescription",
              displayer: "Description",
              value:
                "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
            },
            {
              type: "string",
              key: "urlTitle",
              displayer: "URL Title",
              value: "Details",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383962f8a5b002ce6aa92?alt=media",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Title",
              value: "Building your vision, creating reality",
            },
            {
              type: "string",
              key: "imageDescription",
              displayer: "Description",
              value:
                "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
            },
            {
              type: "string",
              key: "urlTitle",
              displayer: "URL Title",
              value: "Details",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383c62f8a5b002ce6aac7?alt=media",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Title",
              value: "Designing spaces, creating experiences",
            },
            {
              type: "string",
              key: "imageDescription",
              displayer: "Description",
              value:
                "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
            },
            {
              type: "string",
              key: "urlTitle",
              displayer: "URL Title",
              value: "Details",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderContent",
          displayer: "Slider Content",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383fd2f8a5b002ce6aae3?alt=media",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Title",
              value: "Architecture is our passion, design is our art",
            },
            {
              type: "string",
              key: "imageDescription",
              displayer: "Description",
              value:
                "Architects offer design and planning services for buildings, landscapes, and interiors.",
            },
            {
              type: "string",
              key: "urlTitle",
              displayer: "URL Title",
              value: "Details",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Enable Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "enableOverlay",
      displayer: "Enable Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "enableBackgroundImageOverlay",
      displayer: "Enable Background Image Overlay",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "leftButtonIcon",
      displayer: "Previous Button",
      value: "GrPrevious",
    });

    this.addProp({
      type: "icon",
      key: "rightButtonIcon",
      displayer: "Next Button",
      value: "GrNext",
    });
    this.setComponentState("activeSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Header 32";
  }

  render() {
    const animation: boolean = this.getPropValue("animation");
    const headers = this.castToObject<Card[]>("header");
    const itemsCount = headers.length;
    const activeSlideHasImage = headers[this.getComponentState("activeSlide")]?.backgroundImage;

    const settings = {
      arrows: false,
      dots: true,
      infinite: itemsCount > 1,
      speed: 1000,
      autoplay: true,
      fade: animation,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        if (this.getComponentState("activeSlide") !== next && headers.length > 0) {
          this.setComponentState("activeSlide", next);
        }
      },
      dotsClass: this.decorateCSS("dots"),
      customPaging: (i: number): React.JSX.Element => {
        return (
          <div>
            {headers.length > 0 && (
              <>
                <span
                  className={`${this.decorateCSS("dot")} ${
                    !activeSlideHasImage && this.decorateCSS("colored")
                  }`}
                />
                <span
                  className={`${this.decorateCSS("dotIndex")} ${
                    !activeSlideHasImage && this.decorateCSS("colored")
                  }`}
                >
                  {`0${i + 1}`}
                </span>
              </>
            )}
          </div>
        );
      },
      
    };

    const hasleftButtonIcon = this.getPropValue("leftButtonIcon");
    const hasrightButtonIcon = this.getPropValue("rightButtonIcon");
    const enableOverlay: boolean = this.getPropValue("enableOverlay");
    const enableBackgroundImageOverlay = this.getPropValue(
      "enableBackgroundImageOverlay"
    );

    const showNavButtons = itemsCount > 1;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {headers.length > 0 &&
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider
                  {...settings}
                  className={this.decorateCSS("carousel")}
                  ref={this.getComponentState("slider-ref")}
                >
                  {headers.map(
                    (item: Card, index: number) => {
                      return (
                        <div
                          className={this.decorateCSS("slide-inner")}
                          key={`hdr-32-${index}`}
                        >
                          <div className={this.decorateCSS("content")}>
                            <img
                              src={item.backgroundImage}
                              className={`${this.decorateCSS(
                                "backgroundImage"
                              )} ${animation &&
                              this.getComponentState("activeSlide") === index &&
                              this.decorateCSS("zoomInAnimation")
                                }`}
                            />
                            <div
                              className={`
                            ${this.decorateCSS("content-inner")}
                            ${enableBackgroundImageOverlay
                                  ? this.decorateCSS("background-overlay")
                                  : ""
                                }
                          `}
                            >
                              {enableOverlay && (
                                <div
                                  className={`${this.decorateCSS("slideShape")} ${animation &&
                                    this.getComponentState("activeSlide") ===
                                    index
                                    ? this.decorateCSS("shapeAnimate")
                                    : ""
                                    }`}
                                ></div>
                              )}

                              {this.castToString(item.imageTitle) && (
                                <h2
                                  className={`${this.decorateCSS("imageTitle")} ${animation &&
                                    this.getComponentState("activeSlide") ===
                                    index
                                    ? this.decorateCSS("imageTitleAnimation")
                                    : ""
                                    } ${!enableBackgroundImageOverlay &&
                                    !item.backgroundImage &&
                                    this.decorateCSS("primaryColor")
                                    }`}
                                >
                                  {item.imageTitle}
                                </h2>
                              )}

                              {(this.castToString(item.imageDescription) ||
                                this.castToString(item.urlTitle)) && (
                                  <div
                                    className={this.decorateCSS("image-details")}
                                  >
                                    {this.castToString(item.imageDescription) && (
                                      <p
                                        className={`${this.decorateCSS(
                                          "description"
                                        )} ${animation &&
                                          this.getComponentState("activeSlide") ===
                                          index
                                          ? this.decorateCSS("animate")
                                          : ""
                                          }`}
                                      >
                                        {item.imageDescription}
                                      </p>
                                    )}

                                    {this.castToString(item.imageDescription) &&
                                      this.castToString(item.urlTitle) && (
                                        <div
                                          className={`${this.decorateCSS(
                                            "stick"
                                          )} ${animation &&
                                            this.getComponentState(
                                              "activeSlide"
                                            ) === index
                                            ? this.decorateCSS("animate")
                                            : ""
                                            }`}
                                        ></div>
                                      )}

                                    {this.castToString(item.urlTitle) && (
                                      <div
                                        className={`${this.decorateCSS(
                                          "url-container"
                                        )} ${!this.castToString(
                                          item.imageDescription
                                        ) &&
                                        this.decorateCSS("withoutDescription")
                                          }`}
                                      >
                                        <ComposerLink
                                          key={`hdr-32-${index}`}
                                          path={item.url}
                                        >
                                          <p
                                            className={`${this.decorateCSS(
                                              "urlTitles"
                                            )} ${animation &&
                                              this.getComponentState(
                                                "activeSlide"
                                              ) === index
                                              ? this.decorateCSS(
                                                "urlTitleAnimation"
                                              )
                                              : ""
                                              }`}
                                          >
                                            {item.urlTitle}
                                          </p>
                                        </ComposerLink>
                                      </div>
                                    )}
                                  </div>
                                )}

                              {showNavButtons && (
                                <div className={this.decorateCSS("nav-buttons")}>
                                  {hasleftButtonIcon && (
                                    <button
                                      className={`${this.decorateCSS(
                                        "nav-button"
                                      )} ${animation
                                        ? this.decorateCSS("enable-before")
                                        : ""
                                        } ${!enableBackgroundImageOverlay &&
                                        !item.backgroundImage &&
                                        this.decorateCSS("primaryColor")
                                        }`}
                                      onClick={() => {
                                        this.getComponentState(
                                          "slider-ref"
                                        ).current.slickPrev();
                                      }}
                                    >
                                      <Base.Icon
                                        name={this.getPropValue("leftButtonIcon")}
                                        propsIcon={{
                                          className: `${this.decorateCSS(
                                            "Icon"
                                          )}`,
                                          size: 20,
                                        }}
                                      />
                                    </button>
                                  )}
                                  {hasrightButtonIcon && (
                                    <button
                                      className={`${this.decorateCSS(
                                        "nav-button"
                                      )} ${animation
                                        ? this.decorateCSS("enable-before")
                                        : ""
                                        } ${!enableBackgroundImageOverlay &&
                                        !item.backgroundImage &&
                                        this.decorateCSS("primaryColor")
                                        }`}
                                      onClick={() => {
                                        this.getComponentState(
                                          "slider-ref"
                                        ).current.slickNext();
                                      }}
                                    >
                                      <Base.Icon
                                        name={this.getPropValue(
                                          "rightButtonIcon"
                                        )}
                                        propsIcon={{
                                          className: `${this.decorateCSS(
                                            "Icon"
                                          )}`,
                                          size: 20,
                                        }}
                                      />
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </ComposerSlider>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Header32;
