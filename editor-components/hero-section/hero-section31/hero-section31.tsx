import * as React from "react";
import styles from "./hero-section31.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ISliderData = {
  logo?: TypeMediaInputValue;
  media: TypeMediaInputValue;
  thumbnail: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  number: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};
interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}
interface Icon {
  icon: TypeMediaInputValue;
  url: string;
}

type NavigationIcons = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
  social_icon: TypeMediaInputValue;
};

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
      type: "array",
      key: "slider",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22dbc03b007002cc7d5c8?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e0c03b007002cc7d5f0?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e5603b007002cc7d623?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22e9903b007002cc7d653?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22ecb03b007002cc7d667?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "05",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f0003b007002cc7d67a?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "06",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f4003b007002cc7d6a7?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
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
              key: "number",
              displayer: "Number",
              value: "07",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7403b007002cc7d6c5?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22f7b03b007002cc7d6cc?alt=media" },
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
              key: "number",
              displayer: "Number",
              value: "08",
            },
            {
              type: "array",
              key: "buttons",
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
              displayer: "Background Media",
              key: "media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fcc03b007002cc7d709?alt=media" },
            },
            {
              type: "media",
              displayer: "Thumbnail",
              key: "thumbnail",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b22fd303b007002cc7d714?alt=media" },
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
              type: "string",
              key: "number",
              displayer: "Number",
              value: "09",
            },
            {
              type: "array",
              key: "buttons",
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
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevIcon",
          displayer: "Prev Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrFormPrevious" },
        },
        {
          type: "media",
          key: "nextIcon",
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
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaFacebookF" }
            },
            {
              type: "page",
              key: "url",
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaXTwitter" }
            },
            {
              type: "page",
              key: "url",
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaInstagram" }
            },
            {
              type: "page",
              key: "url",
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaLinkedinIn" }
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: ""
            },
          ]
        }
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("second-slider-ref", React.createRef());
    this.setComponentState("subtitleAnimationClass", "animate__fadeIn");
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
  }
  static getName(): string {
    return "Hero Section 31";
  }
  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
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
    const slider = this.castToObject<ISliderData[]>("slider");
    const conditionalInfinite = slider.length > 2;
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      infinite: sliderSettings.infinite && conditionalInfinite,
      accessibility: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,

      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "");
        setTimeout(() => {
          this.setComponentState("titleAnimationClass", "letter-out");
        }, 20);
        this.setComponentState("subtitleAnimationClass", "animate__fadeOut");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOutDown");

            setTimeout(() => {
              this.setComponentState("active-index", newIndex);

              this.getComponentState("slider-ref").current.slickGoTo(newIndex);
              this.getComponentState("second-slider-ref").current.slickGoTo(
                newIndex
              );

              this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
              this.setComponentState("titleAnimationClass", "animate__fadeInRight");
              this.setComponentState("subtitleAnimationClass", "animate__fadeIn");
              this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
            }, 900);
      },
    };

    const activeIndex = this.getComponentState("active-index");
    const activeSlideObj = (slider[activeIndex] || {}) as ISliderData;
    const activeHasMedia = this.hasMedia(activeSlideObj.media);
    const activeButtons = (activeSlideObj.buttons || []).filter(
      (button: INPUTS.CastedButton) => this.castToString(button.text) || this.hasMedia(button.icon as any)
    );
    const isNumberExist = this.castToString(activeSlideObj.number);
    const textAnimationEnabled = this.getPropValue("textAnimation");
    const overlay = this.getPropValue("overlay");

    const icons = this.castToObject<Icon[]>("icons").filter((icon: Icon) => this.hasMedia(icon.icon));
    const navigationIcons = this.castToObject<NavigationIcons>("arrows");
    const hasPrevIcon = this.hasMedia(navigationIcons?.prevIcon);
    const hasNextIcon = this.hasMedia(navigationIcons?.nextIcon);
    const hasSocialIcon = this.hasMedia(navigationIcons?.social_icon);

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!activeHasMedia ? this.decorateCSS("no-image") : ""}`}>
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
                        {this.hasMedia(item.media) && (
                          <Base.Media
                            value={item.media}
                            className={this.decorateCSS("background-right")}
                          />
                        )}
                        {overlay && this.hasMedia(item.media) && <div className={this.decorateCSS("overlay")}></div>}
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
                      if (this.hasMedia(item.thumbnail))
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
                            {activeIndex === index && isNumberExist && (
                              <div className={this.decorateCSS("content")}>
                                <Base.P className={this.decorateCSS("sliderNumber-left")}>
                                  {activeSlideObj.number}
                                </Base.P>
                              </div>
                            )}
                            <Base.Media
                              value={item.thumbnail}
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
                        {this.hasMedia(activeSlideObj.logo) && (
                          <Base.Media
                            value={activeSlideObj.logo}
                            className={`${this.decorateCSS("logo")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState("subtitleAnimationClass")}` : ""}`}
                          />
                        )}
                        
                    {this.castToString(activeSlideObj.subtitle) && (
                      <Base.SectionSubTitle
                        className={`${this.decorateCSS("subtitle")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState(
                          "subtitleAnimationClass"
                        )}` : ""} ${activeHasMedia ? this.decorateCSS("subtitle-transparent") : ""} ${activeHasMedia ? this.decorateCSS("subtitle-with-image") : ""}`}
                        onAnimationEnd={() => {
                          this.handleAnimationEnd({
                            animationState: "subtitleAnimationClass",
                            startingAnimation: "animate__fadeIn",
                            endingAnimation: "animate__fadeOut",
                          });
                        }}
                      >
                        {activeSlideObj.subtitle}
                      </Base.SectionSubTitle>
                    )}

                    {this.castToString(activeSlideObj.title) && (() => {
                      const titleState = this.getComponentState("titleAnimationClass");
                      const isTitleAnimatingIn = titleState === "animate__fadeInRight";
                      const isTitleAnimatingOut = titleState && (titleState === "letter-out" || titleState.indexOf("fadeOut") > -1);
                      return (
                        <Base.SectionTitle
                          className={`${this.decorateCSS("title")} ${textAnimationEnabled ? "animate__animated" : ""} ${textAnimationEnabled && titleState === "letter-out" ? this.decorateCSS("letter-animate-out") : ""} ${textAnimationEnabled && isTitleAnimatingOut && titleState !== "letter-out" ? titleState : ""} ${textAnimationEnabled && isTitleAnimatingIn ? this.decorateCSS("letter-animate") : ""} ${activeHasMedia ? this.decorateCSS("title-with-image") : ""}`}
                          onAnimationEnd={() => {
                            this.handleAnimationEnd({
                              animationState: "titleAnimationClass",
                              startingAnimation: "animate__fadeInRight",
                              endingAnimation: "animate__fadeOutDown",
                            });
                          }}
                        >
                          {activeSlideObj.title}
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
                  
                  {activeButtons.length > 0 && (
                    <div className={this.decorateCSS("button-box")}>
                      {activeButtons.map((buttonItem: INPUTS.CastedButton, buttonIndex: number) => (
                        <ComposerLink key={buttonIndex} path={buttonItem.url}>
                          <Base.Button
                            buttonType={buttonItem.type}
                            className={`${this.decorateCSS("button")} ${textAnimationEnabled ? `animate__animated ${this.getComponentState("buttonAnimationClass")}` : ""}`}
                            onAnimationEnd={() => {
                              this.handleAnimationEnd({
                                animationState: "buttonAnimationClass",
                                startingAnimation: "animate__fadeInUp",
                                endingAnimation: "animate__fadeOutDown",
                              });
                            }}
                          >
                            {this.hasMedia(buttonItem.icon as any) && (
                              <Base.Media value={buttonItem.icon as any} className={this.decorateCSS("button-icon")} />
                            )}
                            {this.castToString(buttonItem.text) && <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      ))}
                    </div>
                  )}

                  </Base.VerticalContent>
                </div>
                {(hasSocialIcon || icons.length > 0) && (
                  <div className={this.decorateCSS("main-social")}>
                    {hasSocialIcon && (
                      <Base.Media value={navigationIcons.social_icon} className={this.decorateCSS("social-icon")} />
                    )}
                    {hasSocialIcon && icons.length > 0 && <div className={this.decorateCSS("icon-stick")}></div>}
                    {icons.length > 0 && (
                      <div className={this.decorateCSS("icon-list-container")}>
                        {icons.map((icon: Icon, indexIcons: number) => (
                          <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                            <ComposerLink path={icon.url}>
                              <Base.Media value={icon.icon} className={this.decorateCSS("icon")} />
                            </ComposerLink>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {(hasPrevIcon || hasNextIcon) && (
                  <div className={this.decorateCSS("control-nav")}>
                    {hasPrevIcon && (
                      <div
                        className={`${this.decorateCSS("prev-icon")} ${this.decorateCSS("arrow")}`}
                        onClick={() => {
                          this.getComponentState("slider-ref").current.slickPrev();
                          this.getComponentState("second-slider-ref").current.slickPrev();
                        }}
                      >
                        <Base.Media value={navigationIcons.prevIcon} className={this.decorateCSS("icon-image")} />
                      </div>
                    )}
                    {hasNextIcon && (
                      <div
                        className={`${this.decorateCSS("next-icon")} ${this.decorateCSS("arrow")}`}
                        onClick={() => {
                          this.getComponentState("slider-ref").current.slickNext();
                          this.getComponentState("second-slider-ref").current.slickNext();
                        }}
                      >
                        <Base.Media value={navigationIcons.nextIcon} className={this.decorateCSS("icon-image")} />
                      </div>
                    )}
                  </div>
                )}
                {isNumberExist && (
                  <div className={this.decorateCSS("control-num")}>
                    <Base.P className={this.decorateCSS("sliderNumber")}>{activeSlideObj.number}</Base.P>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection31;

