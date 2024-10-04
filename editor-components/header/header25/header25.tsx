import * as React from "react";
import styles from "./header25.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IButton = {
  value: string;
};

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

class Header25 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "FaArrowLeftLong",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "FaArrowRightLong",
    });
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
              type: "string",
              displayer: "Title",
              key: "title",
              value: "CONCERT HALL IN NEWYORK",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Modern Hotel is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b0?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "LOOK MORE",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "EXHIBITION CENTER IN BOSTON",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Modern Hotel is the architecture of a new generation, a building  that exists not only in the dimension of space, but also in the dimension of time and communication.",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "Read More",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "MODERN HOTEL IN LONDON",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Exhibition Center is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication.  ",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b2?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "Read More",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://www.instagram.com/",
            },
            {
              type: "icon",
              key: "icon_name",
              displayer: "Icon",
              value: "FaInstagram",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://twitter.com/",
            },
            { type: "icon", key: "icon_name", displayer: "Icon", value: "FaTwitter" },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://www.behance.net/",
            },
            { type: "icon", key: "icon_name", displayer: "Icon", value: "FaBehance" },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://www.facebook.com/",
            },
            { type: "icon", key: "icon_name", displayer: "Icon", value: "FaFacebookF" },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "background-text",
      displayer: "Background Text",
      value: "Composer",
    });
    this.addProp({
      type: "string",
      key: "side-text",
      displayer: "Side Text",
      value: "ARCHITECTURE BURO",
    });
    this.addProp({
      type: "boolean",
      key: "lineIsActive",
      displayer: "Line Active",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "next-arrow-text",
      displayer: "Next Arrow Text",
      value: "NEXT",
    });

    this.addProp({
      type: "string",
      key: "prev-arrow-text",
      displayer: "Prev Arrow Text",
      value: "PREV",
    });

    this.setComponentState("active-index", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-25";
  }

  handleAnimationEnd = ({
    animationState,
    startingAnimation,
    endingAnimation,
  }: IAnimationProps) => {
    if (this.getComponentState(animationState) === endingAnimation) {
      this.setComponentState(animationState, startingAnimation);
    }
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2000,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOut");
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 1200);
      },
    };

    const sliderCount = this.castToObject<[]>("slider").length;
    const image = this.getPropValue("slider");
    const isLineActive = this.getPropValue("lineIsActive")

    return (
      <div className={this.decorateCSS("container")}>
        {image && (
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
            ref={this.getComponentState("slider-ref")}
          >
            {this.getPropValue("slider").map((item: any, indexSlider: number) => (
              <div className={this.decorateCSS("slider-images")} key={indexSlider}>
                {item.getPropValue("image") && (
                  <img
                    className={this.decorateCSS("slider-image")}
                    src={item.getPropValue("image")}
                    alt=""
                  />
                )}
              </div>
            ))}
          </ComposerSlider>
        )}

        <div className={this.decorateCSS("item")}>
          <div className={this.decorateCSS("left-figure-container")}>
            <div className={this.decorateCSS("top-figure")}>
              <div className={this.decorateCSS("pagination")}>
                <span className={this.decorateCSS("active-slide")}>
                  {(this.getComponentState("active-index") + 1)
                    .toString()
                    .padStart(2, "0")}
                </span>
                <sup className={this.decorateCSS("slide-count-power")}>
                  <span className={this.decorateCSS("divider")}>/ </span>
                  <span className={this.decorateCSS("slide-count")}>
                    {sliderCount.toString().padStart(2, "0")}
                  </span>
                </sup>
              </div>
            </div>
            <div className={this.decorateCSS("bottom-figure")}>
              <div className={this.decorateCSS("side-text")}>
                <span className={this.decorateCSS("side-text-content")}>
                  {this.getPropValue("side-text")}
                </span>
              </div>
              {isLineActive && (
                <div className={this.decorateCSS("line")}></div>
              )}
              <div className={this.decorateCSS("icons")}>
                {this.getPropValue("icons").map((item: any) => (
                  <ComposerLink path={item.getPropValue("navigate_icon")}>
                    <ComposerIcon
                      name={item.getPropValue("icon_name")}
                      propsIcon={{
                        className: `${this.decorateCSS("icon")}`,
                        size: 20,
                      }}
                    />
                  </ComposerLink>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${this.decorateCSS("content-container")} ${!this.getPropValue("slider")[
              this.getComponentState("active-index")
            ].getPropValue("image")
              ? this.decorateCSS("black-theme")
              : ""
              }`}
          >
            <div className={this.decorateCSS("layout")}>
              <div className={this.decorateCSS("arrows")}>
                <div
                  className={this.decorateCSS("prev-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  }}
                >
                  <ComposerIcon
                    name={this.getPropValue("prev_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("prev-arrow-text")}
                  </span>
                </div>

                <div
                  className={this.decorateCSS("next-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickNext();
                  }}
                >
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("next-arrow-text")}
                  </span>
                  <ComposerIcon
                    name={this.getPropValue("next_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                </div>
              </div>
              <div className={this.decorateCSS("content")}>
                <div className={this.decorateCSS("title-container")}>
                  <h1
                    className={`${this.decorateCSS(
                      "title"
                    )}  animate__animated ${this.getComponentState(
                      "titleAnimationClass"
                    )}`}
                    onAnimationEnd={() => {
                      this.handleAnimationEnd({
                        animationState: "titleAnimationClass",
                        startingAnimation: "animate__fadeInRight",
                        endingAnimation: "animate__fadeOutDown",
                      });
                    }}
                  >
                    {this.getPropValue("slider")[
                      this.getComponentState("active-index")
                    ].getPropValue("title")}
                  </h1>
                </div>

                <p
                  className={`${this.decorateCSS(
                    "description"
                  )} animate__animated ${this.getComponentState(
                    "descriptionAnimationClass"
                  )} `}
                  onAnimationEnd={() => {
                    this.handleAnimationEnd({
                      animationState: "descriptionAnimationClass",
                      startingAnimation: "animate__fadeInUp",
                      endingAnimation: "animate__fadeOut",
                    });
                  }}
                >
                  {this.getPropValue("slider")[
                    this.getComponentState("active-index")
                  ].getPropValue("description")}
                </p>

                {this.getPropValue("slider")[
                  this.getComponentState("active-index")
                ].getPropValue("button")[0].value && (
                    <ComposerLink
                      path={
                        this.getPropValue("slider")[
                          this.getComponentState("active-index")
                        ].getPropValue("button")[1].value
                      }
                    >
                      <button
                        className={`${this.decorateCSS(
                          "button"
                        )} animate__animated ${this.getComponentState(
                          "buttonAnimationClass"
                        )}`}
                        onAnimationEnd={() => {
                          this.handleAnimationEnd({
                            animationState: "buttonAnimationClass",
                            startingAnimation: "animate__fadeInUp",
                            endingAnimation: "animate__fadeOutDown",
                          });
                        }}
                      >
                        <span className={this.decorateCSS("button-text")}>
                          {
                            this.getPropValue("slider")[
                              this.getComponentState("active-index")
                            ].getPropValue("button")[0].value
                          }
                        </span>
                        <ComposerIcon
                          name={this.getPropValue("next_icon")}
                          propsIcon={{
                            className: ``,
                            size: 10,
                          }}
                        />
                      </button>
                    </ComposerLink>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className={this.decorateCSS("low-op-text")}>
          <h1 className={this.decorateCSS("background-op-text")}>
            {this.getPropValue("background-text")}
          </h1>
        </div>
      </div>
    );
  }
}

export default Header25;
