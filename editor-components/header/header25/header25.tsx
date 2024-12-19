import * as React from "react";
import styles from "./header25.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

interface SliderItem {
  title: JSX.Element;
  description: JSX.Element;
  image: string;
  button: ButtonItem;
};

interface ButtonItem {
  buttonText: JSX.Element;
  link: JSX.Element;
  next_icon: string;
}

interface TopContentItem {
  background_text: JSX.Element;
  page_show: boolean;
}

class Header25 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "top_content",
      displayer: "Top Content",
      value: [
        {
          type: "string",
          key: "background_text",
          displayer: "Background Text",
          value: "Composer",
        },
        {
          type: "boolean",
          key: "page_show",
          displayer: "Show Page Index",
          value: true,
        },
      ]
    });
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
    this.addProp({
      type: "array",
      displayer: "Slider Items",
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
                {
                  type: "icon",
                  key: "next_icon",
                  displayer: "Next icon",
                  value: "FaArrowRightLong",
                }
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
                {
                  type: "icon",
                  key: "next_icon",
                  displayer: "Next icon",
                  value: "FaArrowRightLong",
                }
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
                {
                  type: "icon",
                  key: "next_icon",
                  displayer: "Next icon",
                  value: "FaArrowRightLong",
                }
              ],
            },
          ],
        },
      ]
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
      type: "array",
      key: "icons",
      displayer: "Social Media Items",
      additionalParams: {
        maxElementCount: 5,
      },
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
              value: "",
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
              value: "",
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
              value: "",
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
              value: "",
            },
            { type: "icon", key: "icon_name", displayer: "Icon", value: "FaFacebookF" },
          ],
        },
      ],
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
          this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
          this.setComponentState("titleAnimationClass", "animate__fadeInRight");
          this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
        }, 1000);
      },
    };
    const sliderItemObject = this.castToObject<SliderItem[]>("slider");
    const topContent = this.castToObject<TopContentItem>("top_content");
    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {sliderItemObject && (
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
            ref={this.getComponentState("slider-ref")}
          >
            {sliderItemObject.map((sliderItem: SliderItem, indexSlider: number) => (
              <div className={this.decorateCSS("slider-images")} key={indexSlider}>
                <img
                  className={this.decorateCSS("slider-image")}
                  src={sliderItem.image}
                  alt=""
                />
              </div>
            ))}
          </ComposerSlider>
        )}

        <div className={this.decorateCSS("item")}>
          <div className={this.decorateCSS("left-figure-container")}>
            {(topContent.page_show || !!this.castToString(topContent.background_text)) && (
              <div className={this.decorateCSS("top-figure")}>
                {topContent.page_show && (
                  <div className={this.decorateCSS("pagination")}>
                    <span className={this.decorateCSS("active-slide")}>
                      {(this.getComponentState("active-index") + 1).toString().padStart(2, "0")}
                    </span>
                    <sup className={this.decorateCSS("slide-count-power")}>
                      <span className={this.decorateCSS("divider")}>/ </span>
                      <span className={this.decorateCSS("slide-count")}>
                        {sliderItemObject.length.toString().padStart(2, "0")}
                      </span>
                    </sup>
                  </div>
                )}
                {!!this.castToString(topContent.background_text) && (
                  <div className={this.decorateCSS("low-op-text")}>
                    <Base.H1 className={this.decorateCSS("background-op-text")}>
                      {topContent.background_text}
                    </Base.H1>
                  </div>
                )}
              </div>
            )}
            {(!!this.getPropValue("side-text", { as_string: true })
              || !!this.getPropValue("lineIsActive")
              || this.getPropValue("icons")?.length > 0) && (
                <div className={this.decorateCSS("bottom-figure")}>
                  {!!this.getPropValue("side-text", { as_string: true }) && (
                    <div className={this.decorateCSS("side-text")}>
                      {this.getPropValue("side-text")}
                    </div>
                  )}
                  {(!!this.getPropValue("lineIsActive") && !!this.getPropValue("side-text", { as_string: true }) && this.getPropValue("icons")?.length > 0) && (
                    <div className={this.decorateCSS("line")}></div>
                  )}
                  {this.getPropValue("icons")?.length > 0 && (
                    <div className={this.decorateCSS("icons")}>
                      {this.getPropValue("icons").map((item: any, iconIndex: number) => {
                        if (!item.getPropValue("icon_name")) return null;

                        return (
                          <ComposerLink path={item.getPropValue("navigate_icon")} key={iconIndex}>
                            <ComposerIcon
                              name={item.getPropValue("icon_name")}
                              propsIcon={{
                                className: `${this.decorateCSS("icon")}`,
                                size: 20,
                              }}
                            />
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
          </div>

          {sliderItemObject.map((sliderItem: SliderItem, index: number) => {
            const isActive = this.getComponentState("active-index") === index;
            if (isActive && sliderItem) {
              return (
                <div
                  className={`
                    ${this.decorateCSS("content-container")}
                    ${!!sliderItem.image ? this.decorateCSS("with-image") : ""}
                  `}
                  key={index}
                >
                  {(sliderItemObject.length > 1) && (
                    <div className={this.decorateCSS("arrows")}>
                      {(!!this.getPropValue("prev_icon")
                        || !!this.getPropValue("prev-arrow-text", { as_string: true })) && (
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
                        )}

                      {(!!this.getPropValue("next_icon")
                        || !!this.getPropValue("next-arrow-text", { as_string: true })) && (
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
                        )}
                    </div>
                  )}
                  {(!!this.castToString(sliderItem.title)
                    || !!this.castToString(sliderItem.description)
                    || !!sliderItem.button.next_icon
                    || !!this.castToString(sliderItem.button.buttonText)) && (
                      <div className={this.decorateCSS("layout")}>
                        <div className={this.decorateCSS("content")}>
                          {!!this.castToString(sliderItem.title) && (
                            <div className={this.decorateCSS("title-container")}>
                              <Base.SectionTitle
                                className={`
                                  ${this.decorateCSS("title")} animate__animated 
                                  ${this.getComponentState("titleAnimationClass")}
                                  ${!sliderItem.image ? this.decorateCSS("no-image") : ""}
                                `}
                                onAnimationEnd={() => {
                                  this.handleAnimationEnd({
                                    animationState: "titleAnimationClass",
                                    startingAnimation: "animate__fadeInRight",
                                    endingAnimation: "animate__fadeOutDown",
                                  });
                                }}
                              >
                                {sliderItem.title}
                              </Base.SectionTitle>
                            </div>
                          )}
                          {!!this.castToString(sliderItem.description) && (
                            <Base.SectionDescription
                              className={`
                                ${this.decorateCSS("description")} animate__animated 
                                ${this.getComponentState("descriptionAnimationClass")}
                                ${!sliderItem.image ? this.decorateCSS("no-image") : ""}
                              `}
                              onAnimationEnd={() => {
                                this.handleAnimationEnd({
                                  animationState: "descriptionAnimationClass",
                                  startingAnimation: "animate__fadeInUp",
                                  endingAnimation: "animate__fadeOut",
                                });
                              }}
                            >
                              {sliderItem.description}
                            </Base.SectionDescription>
                          )}
                          {(!!sliderItem.button.next_icon || !!this.castToString(sliderItem.button.buttonText)) && (
                            <ComposerLink path={sliderItem.button.link}>
                              <Base.Button
                                className={`${this.decorateCSS("button")} animate__animated ${this.getComponentState(
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
                                {!!this.castToString(sliderItem.button.buttonText) && (
                                  <span className={this.decorateCSS("button-text")}>
                                    {sliderItem.button.buttonText}
                                  </span>
                                )}
                                {!!sliderItem.button.next_icon && (
                                  <ComposerIcon
                                    name={sliderItem.button.next_icon}
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                    }}
                                  />
                                )}
                              </Base.Button>
                            </ComposerLink>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </Base.Container >
    );
  }

}

export default Header25;