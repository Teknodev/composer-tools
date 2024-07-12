import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./header32.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Settings } from "react-slick";
import { ReactNode } from "react";

type Card = {
  backgroundImage: string;
  imageTitle: string;
  imageDescription: string;
  urlTitle: string;
  url: string;
}

type Button = {
  leftIcon: string;
  rightIcon: string;
};

type AppendDotsFunction = NonNullable<Settings["appendDots"]>;

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
              value: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/joel-filipe-PkE6yQwE-6Y-unsplash.jpg",
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
              value: "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
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
            }
          ]
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
              value: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
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
              value: "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
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
            }
          ]
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
              value: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-D7nSqgT-_GE-unsplash.jpg",
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
              value: "Architects can conduct site analysis and evaluation to determine the best location for a building or development project.",
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
            }
          ]
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
              value: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/low-angle-red-geometrical-structure-blue-sky.jpg",
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
              value: "Architects offer design and planning services for buildings, landscapes, and interiors.",
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
            }
          ]
        },

      ],
    })

    this.addProp({
      type: "object",
      key: "leftButton",
      displayer: "Left Button",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Button Icon",
          value: "FaArrowLeftLong",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "rightButton",
      displayer: "Right Button",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Button Icon",
          value: "FaArrowRightLong",
        },
      ],
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
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 500,
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
                {this.castToObject<Card[]>("header").map((item: Card, index: number) => {
                  return (
                    <div
                      className={this.decorateCSS("slide-inner")}
                      key={`hdr-32-${index}`}
                    >
                      <div
                        className={this.decorateCSS("content")}
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                      >
                        <div className={this.decorateCSS("content-inner")}>
                          <div className={this.decorateCSS("slide-shape")}>
                          </div>

                          <h2 className={this.decorateCSS("image-title")}>
                            {item.imageTitle}
                          </h2>

                          <div className={this.decorateCSS("image-details")}>
                            <p className={this.decorateCSS("description")}>
                              {item.imageDescription}
                            </p>

                            <div className={this.decorateCSS("stick")}></div>

                            <div className={this.decorateCSS("url-container")}>
                              <ComposerLink
                                key={`hdr-32-${index}`}
                                path={item.url}
                              >
                                <p className={this.decorateCSS("url-title")}>
                                  {item.urlTitle}
                                </p>
                              </ComposerLink>
                            </div>

                          </div>

                          <div className={this.decorateCSS("nav-buttons")}>
                            <button
                              className={this.decorateCSS("nav-button")}
                              onClick={() => {
                                this.getComponentState("slider-ref").current.slickPrev();
                              }}
                            >
                              <ComposerIcon
                                name={this.getPropValue("leftButton")[0].value}
                                propsIcon={{
                                  className: `${this.decorateCSS("Icon")}`,
                                  size: 20,
                                }}
                              />
                            </button>
                            <button
                              className={this.decorateCSS("nav-button")}
                              onClick={() => {
                                this.getComponentState("slider-ref").current.slickNext();
                              }}
                            >
                              <ComposerIcon
                                name={this.getPropValue("rightButton")[0].value}
                                propsIcon={{
                                  className: `${this.decorateCSS("Icon")}`,
                                  size: 20,
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Header32;
