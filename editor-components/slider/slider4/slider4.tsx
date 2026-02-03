import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type SliderItem = {
  media: any;
  header: React.JSX.Element;
  content: React.JSX.Element;
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
          type: "icon",
          key: "previousArrow",
          displayer: "Previous Arrow Icon",
          value: "RiArrowLeftSLine",
        },
        {
          type: "icon",
          key: "nextArrow",
          displayer: "Next Arrow Icon",
          value: "RiArrowRightSLine",
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
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Customer Experience",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "We prioritize our customers' experience, ensuring that every interaction with our platform is not only seamless and intuitive but also consistently exceeds expectations.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "We prioritize our customers' experience, ensuring that every interaction with our platform is not only seamless and intuitive but also consistently exceeds expectations.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Sales and Marketing",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "Our sales and marketing team Works together to provide you with a comprehensive solution that is tailored to your needs.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Rating and Reviews",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "Our focus on ratings and reviews onsures that you have Access to the most comprehensive and up-to-date information available.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "Our focus on ratings and reviews onsures that you have Access to the most comprehensive and up-to-date information available.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Productivity and Efficiency",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "We are committed to fostering innovation and driving growth, providing you with cutting-edge tools and solutions to stay ahead in your industry.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Team Collaboration",
            },
            {
              type: "string",
              key: "content",
              displayer: "Description",
              value: "Your trust is our top priority. We ensure reliability in every aspect of our platform, delivering consistent performance and support so you can focus on what matters most.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", null),
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
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
              key: "header",
              displayer: "Title",
              value: "Customer Support",
            },
            {
              type: "string",
              key: "content",
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
      arrows: false,
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
    this.addProp(INPUTS.BUTTON("button", "Button", "", "", "", null));

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Slider 4";
  }
  render() {
    const cards = this.castToObject<SliderItem[]>("slider");
    const cardNumber = cards.length;
    const carouselClass = cardNumber === 1 ? "carousel--singleCard" : "carousel--multipleCards";

    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings") || []),
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

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");

    const controls = this.castToObject<any>("controls");
    const controlTitle = controls["title"];
    const controlDescription = controls["description"];
    const nextArrow = controls["nextArrow"];
    const previousArrow = controls["previousArrow"];

    const button = this.castToObject<INPUTS.CastedButton>("button");
    const contentAlignment = Base.getContentAlignment();

    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} 
      ${!this.castToString(title) && !this.castToString(subtitle) && !this.castToString(description) && this.decorateCSS("no-header")}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) || this.castToString(subtitle) || this.castToString(description)) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(subtitle) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ContainerGrid className={this.decorateCSS("down-page")}>
            {(this.castToString(controlTitle) || this.castToString(controlDescription) || previousArrow || nextArrow) && (
              <Base.VerticalContent className={this.decorateCSS("control-part")}>
                {this.castToString(controlTitle) && <Base.H3 className={this.decorateCSS("control-title")}>{controlTitle}</Base.H3>}
                {this.castToString(controlDescription) && <Base.P className={this.decorateCSS("control-description")}>{controlDescription}</Base.P>}
                {(previousArrow || nextArrow) && (
                  <div className={this.decorateCSS("arrows")}>
                    {previousArrow && (
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <Base.Icon
                          name={previousArrow}
                          propsIcon={{
                            className: this.decorateCSS("prevArrow"),
                            onClick: () => {
                              sliderRef.current.slickPrev();
                            },
                          }}
                        />
                      </div>
                    )}

                    {nextArrow && (
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <Base.Icon
                          name={nextArrow}
                          propsIcon={{
                            className: this.decorateCSS("nextArrow"),
                            onClick: () => {
                              sliderRef.current.slickNext();
                            },
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            <div
              className={`${this.decorateCSS("slider-parent")} 
            ${!this.castToString(controlTitle) && !this.castToString(controlDescription) && !previousArrow && !nextArrow && this.decorateCSS("no-control-part")}`}
            >
              <ComposerSlider {...settings} className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`} ref={sliderRef}>
                {cards.map((item: SliderItem, index: number) => (
                  <div className={this.decorateCSS("slide-wrapper")} key={index}>
                    <Base.VerticalContent
                      className={`${this.decorateCSS("card")} 
                    ${carouselClass === "carousel--singleCard" && this.decorateCSS("for-single-card")}
                    ${this.getPropValue("hoverAnimation") && this.decorateCSS("hover-active")}`}
                    >
                      <Base.Row className={this.decorateCSS("icon-row")}>
                        {item.media && (
                          <Base.Media value={item.media} className={this.decorateCSS("play-icon")} />
                        )}
                      </Base.Row>
                      <Base.H5 className={this.decorateCSS("item-header")}>{item.header}</Base.H5>
                      <Base.P className={this.decorateCSS("item-content")}>{item.content}</Base.P>
                      {item.button && this.castToString(item.button.text) && (
                        <div className={this.decorateCSS("button")}>
                          <Base.Button buttonType={item.button.type}>
                            {item.button.text && <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>}
                            {item.button.icon && (
                              <Base.Media value={item.button.icon as any} className={this.decorateCSS("button-icon")} />
                            )}
                          </Base.Button>
                        </div>
                      )}
                    </Base.VerticalContent>
                  </div>
                ))}
              </ComposerSlider>

            </div>
          </Base.ContainerGrid>
          {button && this.castToString(button.text) && (
            <div className={`${this.decorateCSS("global-button")} ${contentAlignment === "center" && this.decorateCSS("center")}`}>
              <Base.Button buttonType={button.type}>
                {button.text && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                {button.icon && (
                  <Base.Media value={button.icon as any} className={this.decorateCSS("button-icon")} />
                )}
              </Base.Button>
            </div>
          )}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider4;
