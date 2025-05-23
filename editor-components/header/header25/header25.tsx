import * as React from "react";
import styles from "./header25.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
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
  image: string;
  button: INPUTS.CastedButton;
};

interface TopContentItem {
  background_text: React.JSX.Element;
  page_show: boolean;
}

interface IconItem {
  navigate_icon: string;
  icon_name: string;
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
      displayer: "Line Active",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6823844d2bb4c4002cf57937?alt=media",
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
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6824a2832bb4c4002cf5e23e?alt=media",
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
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682384f22bb4c4002cf57950?alt=media",
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
    return "Header 25";
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
      autoplay: true,
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

    const prevIcon = this.getPropValue("prev_icon")
    const prevArrowText = this.getPropValue("prev-arrow-text")
    const nextIcon = this.getPropValue("next_icon")
    const nextArrowText = this.getPropValue("next-arrow-text")

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
                    <img
                      className={this.decorateCSS("slider-image")}
                      src={sliderItem.image}
                      alt=""
                    />
                  }
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
                        <ComposerIcon
                          name={item.icon_name}
                          propsIcon={{
                            className: `${this.decorateCSS("icon")}`,
                          }}
                        />
                      </ComposerLink>
                    ))}
                  </div>}
              </div>}

            {(sliderItemObject.length > 1 &&
              (this.castToString(prevArrowText) ||
                prevIcon ||
                this.castToString(nextArrowText) ||
                nextIcon)) && (
                <div className={`${this.decorateCSS("arrows")} 
                      ${(!isIndexDisplayExist && !isMediaPanelExist) && this.decorateCSS("no-left-side")}
                      ${!isIndexDisplayExist && this.decorateCSS("icon-bottom")}
                      ${imageless && this.decorateCSS("black-theme")}`}>
                  {(this.castToString(prevArrowText) || prevIcon) &&
                    <div
                      className={this.decorateCSS("prev-arrow")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      }}
                    >
                      {prevIcon &&
                        <ComposerIcon
                          name={prevIcon}
                          propsIcon={{
                            className: `${this.decorateCSS("arrow")}`,
                            size: 20,
                          }}
                        />}
                      {this.castToString(prevArrowText) &&
                        <span className={this.decorateCSS("arrow-text")}>
                          {prevArrowText}
                        </span>}
                    </div>}

                  {(this.castToString(nextArrowText) || nextIcon) &&
                    <div
                      className={this.decorateCSS("next-arrow")}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickNext();
                      }}
                    >
                      {this.castToString(nextArrowText) &&
                        <span className={this.decorateCSS("arrow-text")}>
                          {nextArrowText}
                        </span>}
                      {nextIcon &&
                        <ComposerIcon
                          name={nextIcon}
                          propsIcon={{
                            className: `${this.decorateCSS("arrow")}`,
                            size: 20,
                          }}
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
                                {sliderItem.button.text}
                                {sliderItem.button.icon &&
                                  <ComposerIcon
                                    name={sliderItem.button.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                    }}
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

export default Header25;