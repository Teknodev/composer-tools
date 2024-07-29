import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./header32.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  backgroundImage: string;
  imageTitle: JSX.Element;
  imageDescription: JSX.Element;
  urlTitle: JSX.Element;
  url: string;
};

type Button = {
  buttonIcon: string;
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
      key: "enableOverlay",
      displayer: "Enable Overlay",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "leftButtonIcon",
      displayer: "Left Button",
      value: "FaArrowLeftLong",
    });

    this.addProp({
      type: "icon",
      key: "rightButtonIcon",
      displayer: "Left Button",
      value: "FaArrowRightLong",
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-32";
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: this.decorateCSS("dots"),
      customPaging: function (i: number) {
        return (
          <div>
            <button></button>
            <span className={styles.dotIndex}>{`0${i + 1}`}</span>
          </div>
        );
      },
    };

    const hasleftButtonIcon = this.getPropValue("leftButtonIcon");
    const hasrightButtonIcon = this.getPropValue("rightButtonIcon");
    const enableOverlay = this.getPropValue("enableOverlay");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <Slider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={this.getComponentState("slider-ref")}
              >
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => {
                    return (
                      <div
                        className={this.decorateCSS("slide-inner")}
                        key={`hdr-32-${index}`}
                      >
                        <div
                          className={this.decorateCSS("content")}
                          style={{
                            backgroundImage: `url(${item.backgroundImage})`,
                          }}
                        >
                          <div className={this.decorateCSS("content-inner")}>
                            {enableOverlay && (
                              <div
                                className={this.decorateCSS("slide-shape")}
                              ></div>
                            )}

                            {this.castToString(item.imageTitle) && (
                              <h2 className={this.decorateCSS("image-title")}>
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
                                    className={this.decorateCSS("description")}
                                  >
                                    {item.imageDescription}
                                  </p>
                                )}

                                <div
                                  className={this.decorateCSS("stick")}
                                ></div>

                                {this.castToString(item.urlTitle) && (
                                  <div
                                    className={this.decorateCSS(
                                      "url-container"
                                    )}
                                  >
                                    <ComposerLink
                                      key={`hdr-32-${index}`}
                                      path={item.url}
                                    >
                                      <p
                                        className={this.decorateCSS(
                                          "url-title"
                                        )}
                                      >
                                        {item.urlTitle}
                                      </p>
                                    </ComposerLink>
                                  </div>
                                )}
                              </div>
                            )}

                            {(hasleftButtonIcon || hasrightButtonIcon) && (
                              <div className={this.decorateCSS("nav-buttons")}>
                                {hasleftButtonIcon && (
                                  <button
                                    className={this.decorateCSS("nav-button")}
                                    onClick={() => {
                                      this.getComponentState(
                                        "slider-ref"
                                      ).current.slickPrev();
                                    }}
                                  >
                                    <ComposerIcon
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
                                    className={this.decorateCSS("nav-button")}
                                    onClick={() => {
                                      this.getComponentState(
                                        "slider-ref"
                                      ).current.slickNext();
                                    }}
                                  >
                                    <ComposerIcon
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header32;
