import * as React from "react";
import styles from "./hero-section31.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  logo?: TypeMediaInputValue;
  rightImage: TypeMediaInputValue;
  leftImage: TypeMediaInputValue;
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

class HeroSection31 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    
    this.addProp({
      type: "boolean",
      displayer: "Animation",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22dbc03b007002cc7d5c8?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22dd303b007002cc7d5e1?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e0c03b007002cc7d5f0?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e2003b007002cc7d60d?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e5603b007002cc7d623?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e5c03b007002cc7d632?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e9903b007002cc7d653?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e9f03b007002cc7d65a?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22ecb03b007002cc7d667?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22ed103b007002cc7d66e?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f0003b007002cc7d67a?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f0e03b007002cc7d681?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f4003b007002cc7d6a7?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f4503b007002cc7d6b2?alt=media" },
            },
            {
              type: "media",
              displayer: "Logo",
              key: "logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7403b007002cc7d6c5?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7b03b007002cc7d6cc?alt=media" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
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
              type: "media",
              displayer: "Right Media",
              key: "rightImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fcc03b007002cc7d709?alt=media" },
            },
            {
              type: "media",
              displayer: "Left Media",
              key: "leftImage",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fd303b007002cc7d714?alt=media" },
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
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "VIEW CASE", "", "GrFormNext", null, "White"),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "navigation_icons",
      displayer: "Icons",
      value: [
        {
          type: "media",
          key: "prev_icon",
          displayer: "Prev Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrFormPrevious" },
        },
        {
          type: "media",
          key: "next_icon",
          displayer: "Next Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrFormNext" },
        },
        {
          type: "media",
          key: "social_icon",
          displayer: "Social Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "IoMdShare" },
        },
      ],
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
              type: "media",
              key: "iconItem",
              displayer: "Icon Item",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaFacebookF" }
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "iconItem",
              displayer: "Icon Item",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaXTwitter" }
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "iconItem",
              displayer: "Icon Item",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaInstagram" }
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "iconItem",
              displayer: "Icon Item",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaLinkedinIn" }
            },
            {
              type: "page",
              key: "iconUrl",
              displayer: "Navigate To",
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
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 4000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: this.decorateCSS("dots"),

      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "");
        setTimeout(() => {
          this.setComponentState("titleAnimationClass", "letter-out");
        }, 20);
        this.setComponentState("subtitleAnimationClass", "animate__fadeOutDown");
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
              this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
            }, 900);
      },
    };

    const activeIndex = this.getComponentState("active-index");
    const activeSlideObj = slider[activeIndex] || {};
    const textAnimationEnabled = this.getPropValue("textAnimation");
    const overlay = this.getPropValue("overlay");

    const icons = this.castToObject<Icon[]>("icons");

    return (
      <Base.Container
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
                          <Base.Media
                            value={item.rightImage}
                            className={this.decorateCSS("background-right")}
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
                            onClick={() => {
                              this.getComponentState(
                                "slider-ref"
                              ).current.slickGoTo(index);
                              this.getComponentState(
                                "second-slider-ref"
                              ).current.slickGoTo(index);
                            }}
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
                            <Base.Media
                              value={item.leftImage}
                              className={`${this.decorateCSS(
                                  "background-left"
                                )} ${this.decorateCSS("slick-image")} ${activeIndex === index
                                  ? this.decorateCSS("active")
                                  : ""
                                  }`}
                            />
                          </div>
                        );
                    })}
                  </ComposerSlider>


                  <Base.VerticalContent className={this.decorateCSS("slider-inner")}>
                        {activeSlideObj.logo && (
                          <Base.Media
                            value={activeSlideObj.logo}
                            className={`${this.decorateCSS("logo")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState("subtitleAnimationClass")}` : ""}`}
                          />
                        )}
                        
                    {this.castToString(activeSlideObj.subtitle) && (
                      <div
                        className={`${this.decorateCSS("up-text")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState(
                          "subtitleAnimationClass"
                        )}` : ""}`}
                        onAnimationEnd={() => {
                          this.handleAnimationEnd({
                            animationState: "subtitleAnimationClass",
                            startingAnimation: "animate__fadeInRight",
                            endingAnimation: "animate__fadeOutDown",
                          });
                        }}
                      >
                        <Base.SectionSubTitle
                          className={`${this.decorateCSS("subtitle")} ${activeSlideObj.rightImage ? this.decorateCSS("subtitle-transparent") : ""}`}
                        >
                          {activeSlideObj.subtitle}
                        </Base.SectionSubTitle>
                      </div>
                    )}

                    {this.castToString(activeSlideObj.title) && (() => {
                      const titleStr = this.castToString(activeSlideObj.title) as string;
                      const titleState = this.getComponentState("titleAnimationClass");
                      const isTitleAnimatingIn = titleState === "animate__fadeInRight";
                      const isTitleAnimatingOut = titleState && (titleState === "letter-out" || titleState.indexOf("fadeOut") > -1);
                      return (
                        <Base.SectionTitle
                          className={`${this.decorateCSS("title")} ${textAnimationEnabled ? "animate__animated" : ""} ${textAnimationEnabled && titleState === "letter-out" ? this.decorateCSS("letter-animate-out") : ""} ${textAnimationEnabled && isTitleAnimatingOut && titleState !== "letter-out" ? titleState : ""} ${textAnimationEnabled && isTitleAnimatingIn ? this.decorateCSS("letter-animate") : ""}`}
                          onAnimationEnd={() => {
                            this.handleAnimationEnd({
                              animationState: "titleAnimationClass",
                              startingAnimation: "animate__fadeInRight",
                              endingAnimation: "animate__fadeOutDown",
                            });
                          }}
                        >
                          {Array.from(titleStr).map((ch, i) => (
                            <span
                              key={i}
                              className={this.decorateCSS("char")}
                              style={{ animationDelay: `${i * 60}ms` }}
                            >
                              {ch}
                            </span>
                          ))}
                        </Base.SectionTitle>
                      );
                    })()}
                    {this.castToString(activeSlideObj.description) && (
                        <Base.SectionDescription
                        className={`${this.decorateCSS("description")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState(
                            "descriptionAnimationClass"
                          )}` : ""} `}
                        onAnimationEnd={() => {
                          this.handleAnimationEnd({
                            animationState: "descriptionAnimationClass",
                            startingAnimation: "animate__fadeInUp",
                            endingAnimation: "animate__fadeOut",
                          });
                        }}
                      >
                        {activeSlideObj.description}
                      </Base.SectionDescription>
                    )}
                  
                  <div className={this.decorateCSS("button-box")}>
                    {activeSlideObj.actions.length > 0 &&
                      activeSlideObj.actions.map((buttonItem: INPUTS.CastedButton) => (
                          <ComposerLink path={buttonItem.url}>
                            <Base.Button buttonType={buttonItem.type}
                              className={`${this.decorateCSS("button")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState(
                                  "buttonAnimationClass"
                                )}` : ""}`}
                              onAnimationEnd={() => {
                                this.handleAnimationEnd({
                                  animationState: "buttonAnimationClass",
                                  startingAnimation: "animate__fadeInUp",
                                  endingAnimation: "animate__fadeOutDown",
                                });
                              }}
                            >
                              {buttonItem.icon && (
                                <Base.Media value={buttonItem.icon} className={this.decorateCSS("button-icon")} />
                              )}
                              <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                      ))
                    }
                  </div>

                  </Base.VerticalContent>
                </div>
                <div className={this.decorateCSS("main-social")}>
                  {this.castToObject<any>("navigation_icons")?.social_icon && (
                    <Base.Media
                      value={this.castToObject<any>("navigation_icons")?.social_icon}
                      className={this.decorateCSS("social-icon")}
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
                                <Base.Media
                                  value={icon.iconItem}
                                  className={this.decorateCSS("icon")}
                                />
                              </ComposerLink>
                            </div>
                          );
                      })}
                    </div>
                  )}
                </div>
                {(this.castToObject<any>("navigation_icons")?.prev_icon ||
                  this.castToObject<any>("navigation_icons")?.next_icon) && (
                    <div className={this.decorateCSS("control-nav")}>
                      {this.castToObject<any>("navigation_icons")?.prev_icon && (
                        <div
                          className={`${this.decorateCSS(
                            "prev-icon"
                          )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                          this.decorateCSS("un-visible")
                            }`}
                          onClick={() => {
                            this.getComponentState(
                              "slider-ref"
                            ).current.slickPrev();
                            this.getComponentState(
                              "second-slider-ref"
                            ).current.slickPrev();
                          }}
                        >
                          <Base.Media
                            value={this.castToObject<any>("navigation_icons")?.prev_icon}
                            className={this.decorateCSS("icon-image")}
                          />
                        </div>
                      )}
                      {this.castToObject<any>("navigation_icons")?.next_icon && (
                        <div
                          className={`${this.decorateCSS(
                            "next-icon"
                          )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                          this.decorateCSS("un-visible")
                            }`}
                          onClick={() => {
                            this.getComponentState(
                              "slider-ref"
                            ).current.slickNext();
                            this.getComponentState(
                              "second-slider-ref"
                            ).current.slickNext();
                          }}
                        >
                          <Base.Media
                            value={this.castToObject<any>("navigation_icons")?.next_icon}
                            className={this.decorateCSS("icon-image")}
                          />
                        </div>
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
      </Base.Container>
    );
  }
}

export default HeroSection31;

