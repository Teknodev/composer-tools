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
      type: "boolean",
      key: "enableBackgroundImageOverlay",
      displayer: "Enable Background Image Overlay",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "leftButtonIcon",
      displayer: "Previous Button",
      value: "FaArrowLeftLong",
    });

    this.addProp({
      type: "icon",
      key: "rightButtonIcon",
      displayer: "Next Button",
      value: "FaArrowRightLong",
    });
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-32";
  }
  

  render() {

    const handleBeforeChange = () => {
      const descriptions = document.querySelectorAll(`.${styles.description}`);
      const slideShapes = document.querySelectorAll(`.${styles.slideShape}`);
      const stick = document.querySelectorAll(`.${styles.stick}`);
      const urlTitles = document.querySelectorAll(`.${styles.urlTitles}`);
      const imageTitles = document.querySelectorAll(`.${styles.imageTitle}`);
      
      descriptions.forEach((description) => description.classList.remove(styles.animate));
      slideShapes.forEach((slideShape) => slideShape.classList.remove(styles.shapeAnimate));
      stick.forEach((stick) => stick.classList.remove(styles.animate));
      urlTitles.forEach((urlTitles) => urlTitles.classList.remove(styles.urlTitleAnimation));
      imageTitles.forEach((imageTitle) => imageTitle.classList.remove(styles.imageTitleAnimation));
      
      setTimeout(() => {
        descriptions.forEach((description) => description.classList.add(styles.animate));
        slideShapes.forEach((slideShape) => slideShape.classList.add(styles.shapeAnimate));
        stick.forEach((stick) => stick.classList.add(styles.animate));
        urlTitles.forEach((urlTitles) => urlTitles.classList.add(styles.urlTitleAnimation));
        imageTitles.forEach((imageTitle) => imageTitle.classList.add(styles.imageTitleAnimation));
      }, 100); 
    };
    
    
    

    const settings = {
      arrows: false,
      dots: true,
      infinite: this.castToObject<Card[]>("header").length > 1,
      speed: 1500,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: handleBeforeChange,
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
    const enableOverlay: boolean = this.getPropValue("enableOverlay");
    const enableBackgroundImageOverlay = this.getPropValue("enableBackgroundImageOverlay");

    

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
                          style={{ background: `url(${item.backgroundImage})` }}
                        >

                          <div className={`
                            ${this.decorateCSS("content-inner")}
                            ${enableBackgroundImageOverlay
                              ? this.decorateCSS("background-overlay")
                              : ""
                            }
                            `}>
                            {enableOverlay && (
                              <div
                                className={this.decorateCSS("slideShape")}
                              ></div>
                            )}

                            {this.castToString(item.imageTitle) && (
                              <h2 className={this.decorateCSS("imageTitle")}>
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

                                  {this.castToString(item.imageDescription) &&
                                    this.castToString(item.urlTitle) &&
                                    <div
                                      className={this.decorateCSS("stick")}
                                    ></div>
                                  }

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
                                            "urlTitles"
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
