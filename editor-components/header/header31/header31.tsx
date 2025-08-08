import * as React from "react";
import styles from "./header31.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  rightImage: string;
  leftImage: string;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  sliderNumber: number;
  actions: INPUTS.CastedButton[];
};
interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}
interface Icon {
  iconItem: string;
  iconUrl: string;
}

class Header31 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      displayer: "Text Animation",
      key: "textAnimation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      displayer: "Overlay",
      key: "overlay",
      value: true,
    });
    this.addProp({
      type: "boolean",
      displayer: "Line Enable",
      key: "lineEnable",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider Carousel",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22dbc03b007002cc7d5c8?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22dd303b007002cc7d5e1?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BRANDS",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Time Tag Watch",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "01",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e0c03b007002cc7d5f0?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e2003b007002cc7d60d?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BRANDS",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Under Armour",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "02",
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: true,
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e5603b007002cc7d623?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e5c03b007002cc7d632?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Re Styling",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "03",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e9903b007002cc7d653?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e9f03b007002cc7d65a?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Toast 2019 Reel",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "We are thrilled to share our new reel with you all! Special thanks to all of our talented friends.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "04",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22ecb03b007002cc7d667?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22ed103b007002cc7d66e?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Nile - Kabutha",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Striking and powerful Aston Martin Vantage captivates you at the first sight.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "05",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f0003b007002cc7d67a?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f0e03b007002cc7d681?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sleep Walker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "06",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f4003b007002cc7d6a7?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f4503b007002cc7d6b2?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "SPORTS",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Magista",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "The Brief team has been sincerely committed to designing great communication around our projects.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "07",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7403b007002cc7d6c5?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7b03b007002cc7d6cc?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Bastian Bux",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.",
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "08",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fcc03b007002cc7d709?alt=media",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fd303b007002cc7d714?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Novara Conic",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Cal was first. The first public university in the great state of California. They are the pioneers.",
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: true,
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "09",
            },
            {
              type: "array",
              key: "actions",
              displayer: "Action",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", null, null, "White"),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
    });
    this.addProp({
      type: "icon",
      key: "social-icon",
      displayer: "Social Icon",
      value: "IoMdShare",
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Media Platforms",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon Item",
              value: "FaFacebookF"
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Icon Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon Item",
              value: "FaXTwitter"
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Icon Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon Item",
              value: "FaInstagram"
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Icon Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon Item",
              value: "FaLinkedinIn"
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Icon Url",
              value: ""
            },
          ]
        }
      ],
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("display-none", true);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("second-slider-ref", React.createRef());
    this.setComponentState("subtitleAnimationClass", "animate__fadeRight");
    this.setComponentState("stickAnimationClass", "animate__fadeRight");
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
  }
  static getName(): string {
    return "Hero Section 31";
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
    const slider = this.castToObject<any>("slider");
    const conditionalInfinite = slider.length > 2;

    const settings = {
      arrows: false,
      dots: false,
      infinite: conditionalInfinite,
      accessibility: false,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: this.decorateCSS("dots"),

      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOut");
        this.setComponentState("subtitleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("stickAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOutDown");

        setTimeout(() => {
          this.setComponentState("active-index", newIndex);

          this.getComponentState("slider-ref").current.slickGoTo(newIndex);
          this.getComponentState("second-slider-ref").current.slickGoTo(
            newIndex
          );

          this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
          this.setComponentState("titleAnimationClass", "animate__fadeInRight");
          this.setComponentState("subtitleAnimationClass", "animate__fadeInRight");
          this.setComponentState("stickAnimationClass", "animate__fadeInRight");
          this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
        }, 1000);
      },
    };

    const activeIndex = this.getComponentState("active-index");
    const activeSlideObj = slider[activeIndex] || {};
    const textAnimationEnabled = this.getPropValue("textAnimation");
    const overlay = this.getPropValue("overlay");

    const icons = this.castToObject<Icon[]>("icons");

    return (
      <div
        className={`${this.decorateCSS("container")} ${!activeSlideObj.rightImage && this.decorateCSS("no-image")
          }`}>
        <div className={this.decorateCSS("max-content")}>
          {slider?.length > 0 && (
            <>
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider
                  ref={this.getComponentState("slider-ref")}
                  {...settings}
                  className={this.decorateCSS("slider")}
                >
                  {slider?.map((item: ISliderData, index: number) => (
                    <div key={index} className={this.decorateCSS("wrapper")}>
                      <div className={this.decorateCSS("right-slider")}>
                        {item?.rightImage && (
                          <img
                            className={this.decorateCSS("background-right")}
                            src={item.rightImage}
                            alt={item.rightImage}
                          />
                        )}
                        {overlay && <div className={this.decorateCSS("overlay")}></div>}
                      </div>
                    </div>
                  ))}
                </ComposerSlider>
              </div>
              <div className={this.decorateCSS("slider-content")}>
                <div className={this.decorateCSS("slider-container")}>

                  <ComposerSlider
                    ref={this.getComponentState("second-slider-ref")}
                    {...settings}
                    draggable={true}
                    slidesToShow={3}
                    vertical={true}
                    verticalSwiping={true}
                    centerMode={true}
                    centerPadding={"0px"}
                    className={this.decorateCSS("carousel")}
                  >
                    {slider.map((item: ISliderData, index: number) => {
                      if (item.leftImage)
                        return (
                          <div
                            key={index}
                            className={this.decorateCSS("swiper-wrapper")}
                          >
                            {activeIndex === index && (
                              <div className={this.decorateCSS("content")}>
                                <span
                                  className={this.decorateCSS(
                                    "sliderNumber-left"
                                  )}
                                >
                                  {activeSlideObj.sliderNumber}
                                </span>
                              </div>
                            )}
                            <img
                              className={`${this.decorateCSS(
                                "background-left"
                              )} ${activeIndex === index
                                ? this.decorateCSS("active")
                                : ""
                                }`}
                              src={item.leftImage}
                              alt={item.leftImage}
                              onClick={() => {
                                this.getComponentState(
                                  "slider-ref"
                                ).current.slickGoTo(index);
                                this.getComponentState(
                                  "second-slider-ref"
                                ).current.slickGoTo(index);
                              }}
                            />
                          </div>
                        );
                    })}
                  </ComposerSlider>


                  <div className={this.decorateCSS("slider-inner")}>
                    {this.castToString(activeSlideObj.subtitle) && (
                      <div className={this.decorateCSS("up-text")}>
                        {this.getPropValue("lineEnable") && (
                          <div
                            className={`${this.decorateCSS("stick")} ${textAnimationEnabled ? "animate__animated" : ""
                              }  ${this.getComponentState("stickAnimationClass")}`}
                            onAnimationEnd={() => {
                              this.handleAnimationEnd({
                                animationState: "stickAnimationClass",
                                startingAnimation: "animate__fadeInRight",
                                endingAnimation: "animate__fadeOutDown",
                              });
                            }}
                          ></div>
                        )}
                        <span
                          className={`${this.decorateCSS("subtitle")} ${textAnimationEnabled ? "animate__animated" : ""
                            } ${this.getComponentState(
                              "subtitleAnimationClass"
                            )}`}
                          onAnimationEnd={() => {
                            this.handleAnimationEnd({
                              animationState: "subtitleAnimationClass",
                              startingAnimation: "animate__fadeInRight",
                              endingAnimation: "animate__fadeOutDown",
                            });
                          }}
                        >
                          {activeSlideObj.subtitle}
                        </span>
                      </div>
                    )}

                    {this.castToString(activeSlideObj.title) && (
                      <span
                        className={`${this.decorateCSS("title")} ${textAnimationEnabled ? "animate__animated" : ""
                          } ${this.getComponentState("titleAnimationClass")}`}
                        onAnimationEnd={() => {
                          this.handleAnimationEnd({
                            animationState: "titleAnimationClass",
                            startingAnimation: "animate__fadeInRight",
                            endingAnimation: "animate__fadeOutDown",
                          });
                        }}
                      >
                        {activeSlideObj.title}
                      </span>
                    )}
                    {this.castToString(activeSlideObj.description) && (
                      <p
                        className={`${this.decorateCSS("description")} ${textAnimationEnabled ? "animate__animated" : ""
                          } ${this.getComponentState(
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
                        {activeSlideObj.description}
                      </p>
                    )}

                    {activeSlideObj.actions.length > 0 &&
                      activeSlideObj.actions.map((buttonItem: INPUTS.CastedButton) => (
                        <ComposerLink path={buttonItem.url}>
                          <div className={this.decorateCSS("button-box")}>
                            <Base.Button buttonType={buttonItem.type}
                              className={`${this.decorateCSS("button")} ${textAnimationEnabled ? "animate__animated" : ""
                                } ${this.getComponentState(
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
                              {buttonItem.text}
                            </Base.Button>
                          </div>
                        </ComposerLink>
                      ))
                    }
                  </div>
                </div>
                <div className={this.decorateCSS("main-social")}>
                  {this.getPropValue("social-icon") && (
                    <Base.Icon
                      name={this.getPropValue("social-icon")}
                      propsIcon={{
                        className: this.decorateCSS("social-icon"),
                      }}
                    />
                  )}
                  <div className={this.decorateCSS("icon-stick")}></div>
                  {(icons?.length > 0) && (
                    <div className={this.decorateCSS("icon-list-container")}>
                      {icons.map((icon: Icon, indexIcons: number) => {
                        if (icon.iconItem)
                          return (
                            <div
                              key={indexIcons}
                              className={this.decorateCSS("icon-item")}
                            >
                              <ComposerLink path={icon.iconUrl}>
                                <Base.Icon
                                  name={icon.iconItem}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              </ComposerLink>
                            </div>
                          );
                      })}
                    </div>
                  )}
                </div>
                {(this.getPropValue("prev_icon") ||
                  this.getPropValue("next_icon")) && (
                    <div className={this.decorateCSS("control-nav")}>
                      {this.getPropValue("prev_icon") && (
                        <Base.Icon
                          name={this.getPropValue("prev_icon")}
                          propsIcon={{
                            className: `${this.decorateCSS(
                              "prev-icon"
                            )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                            this.decorateCSS("un-visible")
                              }`,
                            onClick: () => {
                              this.getComponentState(
                                "slider-ref"
                              ).current.slickPrev();
                              this.getComponentState(
                                "second-slider-ref"
                              ).current.slickPrev();
                            },
                          }}
                        />
                      )}
                      {this.getPropValue("next_icon") && (
                        <Base.Icon
                          name={this.getPropValue("next_icon")}
                          propsIcon={{
                            className: `${this.decorateCSS(
                              "next-icon"
                            )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                            this.decorateCSS("un-visible")
                              }`,
                            onClick: () => {
                              this.getComponentState(
                                "slider-ref"
                              ).current.slickNext();
                              this.getComponentState(
                                "second-slider-ref"
                              ).current.slickNext();
                            },
                          }}
                        />
                      )}
                    </div>
                  )}
                <div className={this.decorateCSS("control-num")}>
                  <span className={this.decorateCSS("sliderNumber")}>
                    {activeSlideObj.sliderNumber}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Header31;
