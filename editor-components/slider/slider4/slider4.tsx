import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  media: TypeMediaInputValue;
  sliderSubtitle: React.JSX.Element;
  sliderTitle: React.JSX.Element;
  sliderDescription: React.JSX.Element;
  button?: INPUTS.CastedButton;
};

class Slider4 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our dedication to our customer",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "At every step of our process, we prioritize the user, ensuring that our products and services are thoughtfully designed to meet their needs and exceed their expectations.",
    });

    this.addProp({
      type: "object",
      key: "controls",
      displayer: "Controls",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Grow faster with pro's help",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Experience top-notch features with our services",
        },
        {
          type: "media",
          key: "previousArrow",
          displayer: "Previous Arrow Icon",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "RiArrowLeftSLine",
          },
        },
        {
          type: "media",
          key: "nextArrow",
          displayer: "Next Arrow Icon",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "RiArrowRightSLine",
          },
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "TfiWorld",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Customer Experience",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "We prioritize our customers' experience, ensuring that every interaction with our platform is not only seamless and intuitive but also consistently exceeds expectations.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "IoStatsChartSharp",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Sales and Marketing",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "Our sales and marketing team Works together to provide you with a comprehensive solution that is tailored to your needs.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "MdRateReview",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Rating and Reviews",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "Our focus on ratings and reviews onsures that you have Access to the most comprehensive and up-to-date information available.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "TfiThumbUp",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Productivity and Efficiency",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "We are committed to fostering innovation and driving growth, providing you with cutting-edge tools and solutions to stay ahead in your industry.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "TfiDropbox",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Team Collaboration",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "Your trust is our top priority. We ensure reliability in every aspect of our platform, delivering consistent performance and support so you can focus on what matters most.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "RiRocketFill",
              },
            },
            {
              type: "string",
              key: "sliderSubtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Title",
              value: "Customer Support",
            },
            {
              type: "string",
              key: "sliderDescription",
              displayer: "Description",
              value: "Our platform provides data-driven insights and tools to help you make confident decisions, optimize performance, and unlock your potential.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
      ],
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: false,
    }));

    this.addProp({
      type: "boolean",
      key: "hoverAnimation",
      displayer: "Hover Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "", null)],
    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Slider 4";
  }
  render() {
    const cards = this.castToObject<SliderItem[]>("slider");
    const cardNumber = cards.length;
    const carouselClass = cardNumber === 1 ? "carousel--singleCard" : "carousel--multipleCards";

    const sliderSettings = this.transformSliderValues(this.getPropValue("settings") || []);
    const showDots = sliderSettings.dots !== false;
    const showArrows = sliderSettings.arrows !== false;

    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("active_index", next);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const hasHeader = title || subtitle || description;
    const controls = this.castToObject<any>("controls");
    const controlTitle = controls["title"];
    const controlDescription = controls["description"];
    const nextArrow = controls["nextArrow"];
    const previousArrow = controls["previousArrow"];
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container className={`${this.decorateCSS("container")}  ${!hasHeader && this.decorateCSS("no-header")}`} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasHeader && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ContainerGrid className={this.decorateCSS("down-page")}>
            {(this.castToString(controlTitle) || this.castToString(controlDescription) || previousArrow || nextArrow) && (
              <Base.VerticalContent className={this.decorateCSS("control-part")}>
                {this.castToString(controlTitle) && <Base.H4 className={this.decorateCSS("control-title")}>{controlTitle}</Base.H4>}
                {this.castToString(controlDescription) && <Base.P className={this.decorateCSS("control-description")}>{controlDescription}</Base.P>}
                {showArrows && (previousArrow || nextArrow) && (
                  <div className={this.decorateCSS("arrows")}>
                    {previousArrow && (
                      <div className={this.decorateCSS("icon-wrapper")} onClick={() => sliderRef.current.slickPrev()}>
                        <Base.Media value={previousArrow} className={this.decorateCSS("prevArrow")} />
                      </div>
                    )}
                    {nextArrow && (
                      <div className={this.decorateCSS("icon-wrapper")} onClick={() => sliderRef.current.slickNext()}>
                        <Base.Media value={nextArrow} className={this.decorateCSS("nextArrow")} />
                      </div>
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            <div className={`${this.decorateCSS("slider-parent")}  ${!this.castToString(controlTitle) && !this.castToString(controlDescription) && !previousArrow && !nextArrow && this.decorateCSS("no-control-part")}`}>
              <ComposerSlider {...settings} className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`} ref={sliderRef}>
                {cards.map((item: SliderItem, index: number) => (
                  <div className={this.decorateCSS("slide-wrapper")} key={index}>
                    <Base.VerticalContent className={`${this.decorateCSS("card")} ${carouselClass === "carousel--singleCard" && this.decorateCSS("for-single-card")} ${this.getPropValue("hoverAnimation") && this.decorateCSS("hover-active")}`}>
                      <Base.Row className={this.decorateCSS("icon-row")}>
                        {item.media && (<Base.Media value={item.media} className={this.decorateCSS("play-icon")} />)}
                      </Base.Row>
                      {this.castToString(item.sliderSubtitle) && <Base.H4 className={this.decorateCSS("item-subtitle")}>{item.sliderSubtitle}</Base.H4>}
                      {this.castToString(item.sliderTitle) && <Base.H3 className={this.decorateCSS("item-header")}>{item.sliderTitle}</Base.H3>}
                      {this.castToString(item.sliderDescription) && <Base.P className={this.decorateCSS("item-content")}>{item.sliderDescription}</Base.P>}
                      {item.button && (this.castToString(item.button.text) || (item.button.icon && (item.button.icon)?.name)) && (
                        <div className={this.decorateCSS("card-button")}>
                          <Base.Button buttonType={item.button.type}>
                            {this.castToString(item.button.text) && (<Base.P className={this.decorateCSS("card-button-text")}>{item.button.text}</Base.P>)}
                            {item.button.icon && (item.button.icon)?.name && (<Base.Media value={item.button.icon} className={this.decorateCSS("card-button-icon")} />)}
                          </Base.Button>
                        </div>
                      )}
                    </Base.VerticalContent>
                  </div>
                ))}
              </ComposerSlider>
            </div>
          </Base.ContainerGrid>
          {cards.length > 1 && showDots && (
            <div className={this.decorateCSS("custom-dots")}>
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("dot-item")} ${this.getComponentState("active_index") === index ? this.decorateCSS("active") : ""}`}
                  onClick={() => sliderRef.current.slickGoTo(index)}
                >
                  <button className={this.decorateCSS("dot-button")} />
                </div>
              ))}
            </div>
          )}
          {buttons.filter((button: INPUTS.CastedButton) => this.castToString(button.text) || (button.icon && (button.icon)?.name)).length > 0 && (
            <Base.Row className={this.decorateCSS("button-wrapper")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) => (
                (this.castToString(button.text) || (button.icon && (button.icon)?.name)) && (
                  <Base.Button key={index} buttonType={button.type}>
                    {this.castToString(button.text) && (<Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>)}
                    {button.icon && (button.icon)?.name && (<Base.Media value={button.icon} className={this.decorateCSS("button-icon")} />)}
                  </Base.Button>
                )
              ))}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider4;