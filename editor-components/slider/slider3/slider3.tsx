import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider3.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  media: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  path: string;
};

class Slider3 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "What's new at Store",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Effective tools are critical to the success of a small business.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Boost Your Productivity",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Enhance your workflow and maximize efficiency with our user-friendly tools. Take the first step toward success now.",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629525?alt=media&timestamp=1719584962578",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Effortless Collaboration",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Seamlessly connect with your team and achieve milestones faster with our innovative platform. Experience the change today!",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629526?alt=media&timestamp=1719584962578",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Quick problem-solving contact",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "With this tool, you will get much better results at work and develop new skills. Will you take the risk of trying the latest version of out application",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629527?alt=media&timestamp=1719584962578",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "BsArrowLeftCircle",
      },
    });

    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "BsArrowRightCircle",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "hoverAnimation",
      displayer: "Hover Animation",
      value: true,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));
    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Slider 3";
  }

  render() {
    const items = this.castToObject<SliderItem[]>("slider");
    const isCardExist = items.length > 0;
    const isOverlayActive = this.getPropValue("overlay");
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const visibleItemCount = Math.min(items.length, 1.2);
    const sliderRef = this.getComponentState("slider-ref");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      arrows: false,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: visibleItemCount,
      variableWidth: true,
      centerMode: true,
      centerPadding: "0px",
      slidesToScroll: 1,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: visibleItemCount,
            variableWidth: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerPadding: "0px",
          },
        },
      ],
    };

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasHeader = subtitle || title || description;
    const carouselClass = items.length === 1 ? "carousel--singleCard" : "carousel--multipleCards";
    const arrowsExist = items.length > 1 && (previousArrow || nextArrow) && sliderSettings.arrows;
    const showDots = sliderSettings.dots !== false;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!hasHeader && this.decorateCSS("no-header")}`} >
        {(hasHeader || previousArrow || nextArrow) && (
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={`${this.decorateCSS("header")} ${!hasHeader && this.decorateCSS("no-header-titles")}`} >
              {hasHeader && (
                <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${!arrowsExist && this.decorateCSS("no-arrows")}`} >
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                </Base.VerticalContent>
              )}
              {arrowsExist && (
                <div className={this.decorateCSS("arrows")}>
                  {previousArrow && (
                    <div className={this.decorateCSS("prevArrow")} onClick={() => { sliderRef.current.slickPrev(); }}>
                      <Base.Media value={this.getPropValue("previousArrow")} className={`${previousArrow.type === "image" && this.decorateCSS("has-image")}`} />
                    </div>
                  )}
                  {nextArrow && (
                    <div className={this.decorateCSS("nextArrow")} onClick={() => { sliderRef.current.slickNext(); }}>
                      <Base.Media value={this.getPropValue("nextArrow")} className={`${nextArrow.type === "image" && this.decorateCSS("has-image")}`} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </Base.MaxContent>
        )}
        <div className={this.decorateCSS("slider-parent")}>
          {isCardExist && (
            <ComposerSlider {...settings} className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`} ref={sliderRef}>
              {items.map((item: SliderItem, index: number) => (
                <ComposerLink key={index} path={item.path}>
                  <div
                    key={index}
                    className={`${this.decorateCSS("card")} 
                      ${this.getComponentState("centerSlide") === index && this.decorateCSS("centerSlide")}
                     ${!item.media && this.decorateCSS("no-media")}
                      ${showDots && this.decorateCSS("has-dots")}`}
                  >
                    <div className={this.decorateCSS("image-container")}>
                      {item.media && (<Base.Media value={item.media} className={`${this.decorateCSS("image")} ${this.getPropValue("hoverAnimation") && this.decorateCSS("hover-active")}`} />)}
                      {isOverlayActive && item.media && <div className={this.decorateCSS("overlay")}></div>}
                    </div>
                    {(this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description)) && (
                      <Base.VerticalContent className={`${this.decorateCSS("content-container")} 
                      ${this.getComponentState("centerSlide") === index && this.decorateCSS("active")}`}>
                        {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("slider-subtitle")}>{item.subtitle}</Base.H5>}
                        {this.castToString(item.title) && <Base.H4 className={this.decorateCSS("slider-title")}>{item.title}</Base.H4>}
                        {this.castToString(item.description) && <Base.P className={this.decorateCSS("slider-description")}>{item.description}</Base.P>}
                      </Base.VerticalContent>
                    )}
                  </div>
                </ComposerLink>
              ))}
            </ComposerSlider>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default Slider3;