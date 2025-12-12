import * as React from "react";
import styles from "./hero-section25.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

interface SliderItem {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  overlay: boolean;
  button: INPUTS.CastedButton;
};

interface TopContentItem {
  background_text: React.JSX.Element;
  page_show: boolean;
}

interface IconItem {
  navigate_icon: string;
  icon_name: TypeMediaInputValue;
}

class HeroSection25 extends BaseHeroSection {
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
          displayer: "Index Display",
          value: true,
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
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Medias",
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
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "icon_name",
              displayer: "Icon",
              value: { type: "icon", name: "FaInstagram" },
              additionalParams: { availableTypes: ["icon", "image"] },
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
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon_name", displayer: "Icon", value: { type: "icon", name: "FaTwitter" }, additionalParams: { availableTypes: ["icon", "image"] } },
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
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon_name", displayer: "Icon", value: { type: "icon", name: "FaBehance" }, additionalParams: { availableTypes: ["icon", "image"] } },
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
              displayer: "Navigate To",
              value: "",
            },
            { type: "media", key: "icon_name", displayer: "Icon", value: { type: "icon", name: "FaFacebookF" }, additionalParams: { availableTypes: ["icon", "image"] } },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "navigation",
      displayer: "Navigation",
      value: [
        {
          type: "media",
          key: "prev_icon",
          displayer: "Prev Icon",
          value: { type: "icon", name: "FaArrowLeftLong" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "string",
          key: "prev_text",
          displayer: "Prev Text",
          value: "PREV",
        },
        {
          type: "media",
          key: "next_icon",
          displayer: "Next Icon",
          value: { type: "icon", name: "FaArrowRightLong" },
          additionalParams: { availableTypes: ["icon", "image"] },
        },
        {
          type: "string",
          key: "next_text",
          displayer: "Next Text",
          value: "NEXT",
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
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
              type: "media",
              displayer: "Item",
              key: "image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b0?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White"),
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
              type: "media",
              displayer: "Item",
              key: "image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b1?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White"),
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
              type: "media",
              displayer: "Item",
              key: "image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619ff6bd2970002c6268b2?alt=media&timestamp=1719483639150",
              },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "Read More", "", "FaArrowRightLong", null, "White"),
          ],
        },
      ]
    });

    this.setComponentState("active-index", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 25";
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
      speed: 1000,
      fade: true,
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOutDown");
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

    const activeIndex = this.getComponentState("active-index");
    const imageless = !sliderItemObject[activeIndex]?.image;

    const navigation = this.castToObject<{
      prev_icon: TypeMediaInputValue;
      prev_text: string;
      next_icon: TypeMediaInputValue;
      next_text: string;
    }>("navigation");

    const socialMediaIcons = this.castToObject<IconItem[]>("icons");

    const isIndexDisplayExist = topContent.page_show || this.castToString(topContent.background_text);

    const isMediaPanelExist = (this.castToString(this.getPropValue("side-text")) ||
      this.getPropValue("lineIsActive") ||
      socialMediaIcons.length > 0)

    return (
      <div className={this.decorateCSS("container")}>
        {sliderItemObject && (
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
            ref={this.getComponentState("slider-ref")}
          >
            {sliderItemObject.map((sliderItem: SliderItem, indexSlider: number) => {

              return (
                <div className={this.decorateCSS("slider-images")} key={indexSlider}>
                  {sliderItem.image &&
                    <Base.Media
                      autoPlay
                      loop
                      muted
                      controls={false}
                      value={sliderItem.image}
                      className={this.decorateCSS("slider-image")}
                    />
                  }
                  {sliderItem.overlay && sliderItem.image && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )
            })}
          </ComposerSlider>
        )}

        <div className={this.decorateCSS("item")}>
          <div className={`${this.decorateCSS("left-figure-container")} ${imageless && this.decorateCSS("imageless")}`}>
            {isIndexDisplayExist &&
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
                {this.castToString(topContent.background_text) &&
                  <div className={this.decorateCSS("low-op-text")}>
                    <span className={this.decorateCSS("background-op-text")}>
                      {topContent.background_text}
                    </span>
                  </div>}
              </div>}
            {(isIndexDisplayExist || isMediaPanelExist) &&
              <div className={`${this.decorateCSS("bottom-figure")} ${!isIndexDisplayExist && this.decorateCSS("no-index-display")}`}>
                {this.castToString(this.getPropValue("side-text")) &&
                  <div className={this.decorateCSS("side-text")}>
                    <span className={this.decorateCSS("side-text-content")}>
                      {this.getPropValue("side-text")}
                    </span>
                  </div>}
                {this.getPropValue("lineIsActive") && (
                  <div className={this.decorateCSS("line")}></div>
                )}
                {socialMediaIcons.length > 0 &&
                  <div className={this.decorateCSS("icons")}>
                    {socialMediaIcons.map((item: IconItem, iconIndex: number) => (
                      <ComposerLink path={item.navigate_icon} key={iconIndex}>
                        <Base.Media
                          value={item.icon_name}
                          className={this.decorateCSS("icon")}
                        />
                      </ComposerLink>
                    ))}
                  </div>}
              </div>}

            {(sliderItemObject.length > 1 &&
              (this.castToString(navigation.prev_text) ||
                navigation.prev_icon ||
                this.castToString(navigation.next_text) ||
                navigation.next_icon)) && (
                <div className={`${this.decorateCSS("arrows")} 
                      ${(!isIndexDisplayExist && !isMediaPanelExist) && this.decorateCSS("no-left-side")}
                      ${!isIndexDisplayExist && this.decorateCSS("icon-bottom")}
                      ${imageless && this.decorateCSS("black-theme")}`}>
                  {(this.castToString(navigation.prev_text) || navigation.prev_icon) &&
                    <div
                      className={this.decorateCSS("prev-arrow")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      }}
                    >
                      {navigation.prev_icon &&
                        <Base.Media
                          value={navigation.prev_icon}
                          className={this.decorateCSS("arrow")}
                        />}
                      {this.castToString(navigation.prev_text) &&
                        <Base.H6 className={this.decorateCSS("arrow-text")}>
                          {navigation.prev_text}
                        </Base.H6>}
                    </div>}

                  {(this.castToString(navigation.next_text) || navigation.next_icon) &&
                    <div
                      className={this.decorateCSS("next-arrow")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickNext();
                      }}
                    >
                      {this.castToString(navigation.next_text) &&
                        <Base.H6 className={this.decorateCSS("arrow-text")}>
                          {navigation.next_text}
                        </Base.H6>}
                      {navigation.next_icon &&
                        <Base.Media
                          value={navigation.next_icon}
                            className={this.decorateCSS("arrow")}
                        />}
                    </div>}
                </div>
              )}
          </div>

          {sliderItemObject.map((sliderItem: SliderItem, index: number) => {
            const isActive = this.getComponentState("active-index") === index;
            if (isActive && sliderItem) {
              return (
                <Base.Container className={this.decorateCSS("content-container")}>
                  <Base.MaxContent
                    className={`${this.decorateCSS("content-max-content")} ${!sliderItem.image && this.decorateCSS("black-theme")}`}
                    key={index}
                  >
                    {(this.castToString(sliderItem.button.text) ||
                      sliderItem.button.icon ||
                      this.castToString(sliderItem.title) ||
                      this.castToString(sliderItem.description)) &&
                      <div className={`${this.decorateCSS("layout")} 
                    ${(!isIndexDisplayExist && !isMediaPanelExist) && this.decorateCSS("full-width-right-item")}`}>
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                          {this.castToString(sliderItem.title) &&
                            <Base.SectionTitle
                              className={`
                              ${this.decorateCSS("title")} 
                              animate__animated 
                              ${this.getComponentState("titleAnimationClass")
                                }`}
                              onAnimationEnd={() => {
                                this.handleAnimationEnd({
                                  animationState: "titleAnimationClass",
                                  startingAnimation: "animate__fadeInRight",
                                  endingAnimation: "animate__fadeOutDown",
                                });
                              }}
                            >
                              {sliderItem.title}
                            </Base.SectionTitle>}
                          {this.castToString(sliderItem.description) &&
                            <Base.SectionDescription
                              className={`${this.decorateCSS("description")} 
                            animate__animated 
                            ${this.getComponentState("descriptionAnimationClass")}`}
                              onAnimationEnd={() => {
                                this.handleAnimationEnd({
                                  animationState: "descriptionAnimationClass",
                                  startingAnimation: "animate__fadeInUp",
                                  endingAnimation: "animate__fadeOutDown",
                                });
                              }}
                            >
                              {sliderItem.description}
                            </Base.SectionDescription>}
                          {(this.castToString(sliderItem.button.text) ||
                            sliderItem.button.icon) &&
                            <ComposerLink path={sliderItem.button.url}>
                              <Base.Button buttonType={sliderItem.button.type}
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
                                {this.castToString(sliderItem.button.text) && <Base.P className={this.decorateCSS("button-text")}>{sliderItem.button.text}</Base.P>}
                                {sliderItem.button.icon &&
                                  <Base.Media
                                    value={sliderItem.button.icon}
                                    className={this.decorateCSS("button-icon")}
                                  />}
                              </Base.Button>
                            </ComposerLink>}
                        </Base.VerticalContent>
                      </div>}
                  </Base.MaxContent>
                </Base.Container>
              );
            }
            return null;
          }
          )}
        </div>
      </div >
    );
  }

}

export default HeroSection25;
