import * as React from "react";
import styles from "./header31.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";

type ISliderData = {
  title: JSX.Element;
  subtitle: JSX.Element;
  sliderNumber: number;
  image: string;
  rightImage: string;
  leftImage: string;
  description: JSX.Element;
  circleIcon: string;
  text: JSX.Element;
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bddad0655f8002cac341e?alt=media&timestamp=1735122375672",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bddd80655f8002cac34f8?alt=media&timestamp=1735122410373",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bddfc0655f8002cac350c?alt=media&timestamp=1735122446267",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bde2d0655f8002cac3593?alt=media&timestamp=1735122496129",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bde560655f8002cac359b?alt=media&timestamp=1735122535844",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bde740655f8002cac35b6?alt=media&timestamp=1735122566315",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdec00655f8002cac35d1?alt=media&timestamp=1735122642898",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdef50655f8002cac3610?alt=media&timestamp=1735122695350",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdf150655f8002cac3636?alt=media&timestamp=1735122729089",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdf380655f8002cac365b?alt=media&timestamp=1735122765444",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdf5c0655f8002cac36a0?alt=media&timestamp=1735122800264",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdf820655f8002cac36cf?alt=media&timestamp=1735122836589",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdfa60655f8002cac3700?alt=media&timestamp=1735122872651",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdfce0655f8002cac3753?alt=media&timestamp=1735122918229",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdff30655f8002cac37cb?alt=media&timestamp=1735122949792",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676be0150655f8002cac37d2?alt=media&timestamp=1735122984712",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676be0350655f8002cac37ec?alt=media&timestamp=1735123020124",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676be05e0655f8002cac38b8?alt=media&timestamp=1735123056957",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "VIEW CASE",
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
  getName(): string {
    return "Header-31";
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
      arrows: false,
      dots: false,
      infinite: true,
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
    const slider = this.castToObject<any>("slider");
    const activeSlideObj = slider[activeIndex];
    const textAnimationEnabled = this.getPropValue("textAnimation");
    const overlay = this.getPropValue("overlay");

    const icons = this.castToObject<Icon[]>("icons");

    return (
      <div className={slider[this.getComponentState("active-index")].rightImage ? this.decorateCSS("container") : this.decorateCSS("container-no-image")}>
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
                        {item.rightImage && (
                          <img
                            className={this.decorateCSS("background-right")}
                            src={item.rightImage}
                            alt={item.rightImage}
                          />
                        )}
                        <div
                          className={`${overlay ? this.decorateCSS("overlay") : ""
                            }`}
                        ></div>
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
                    {activeSlideObj.actions.map((item: any) => (
                      <ComposerLink path={item.link}>
                        <div className={this.decorateCSS("button-box")}>
                          <Base.Button
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
                            {item.buttonText}
                          </Base.Button>
                        </div>
                      </ComposerLink>
                    ))}
                  </div>
                </div>
                <div className={this.decorateCSS("main-social")}>
                  {this.getPropValue("social-icon") && (
                    <ComposerIcon
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
                                <ComposerIcon
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
                        <ComposerIcon
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
                        <ComposerIcon
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
