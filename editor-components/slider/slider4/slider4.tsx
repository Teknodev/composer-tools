import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  icon: string;
  header: JSX.Element;
  content: JSX.Element;
};
class Slider4 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

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
      type: "string",
      key: "control-title",
      displayer: "Control Title",
      value: "Grow faster with pro's help",
    });
    this.addProp({
      type: "string",
      key: "control-description",
      displayer: "Control Description",
      value: "Experience top-notch features with our services",
    });
    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "RiArrowLeftSLine",
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "RiArrowRightSLine",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TfiWorld",
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
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoStatsChartSharp",
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
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdRateReview",
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
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TfiThumbUp",
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
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TfiDropbox",
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
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiRocketFill",
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
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Slider 4";
  }
  render() {
    const cards = this.castToObject<Card[]>("slider");
    const cardNumber = cards.length;
    const visibleItemCount = Math.min(cards.length, 3);
    const carouselClass = cardNumber === 1 ? "carousel--singleCard" : "carousel--multipleCards";

    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: visibleItemCount,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 2),
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 1),
          },
        },
      ],
    };

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const controlTitle = this.getPropValue("control-title");
    const controlDescription = this.getPropValue("control-description");

    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} 
      ${!this.castToString(title) && !this.castToString(description) && this.decorateCSS("no-header")}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) || this.castToString(description)) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ContainerGrid className={this.decorateCSS("down-page")}>
            {(this.castToString(controlTitle) || this.castToString(controlDescription) || previousArrow || nextArrow) && (
              <Base.VerticalContent className={this.decorateCSS("control-part")}>
                {this.castToString(controlTitle) && <span className={this.decorateCSS("control-title")}>{controlTitle}</span>}
                {this.castToString(controlDescription) && <Base.P className={this.decorateCSS("control-description")}>{controlDescription}</Base.P>}
                {(previousArrow || nextArrow) && (
                  <div className={this.decorateCSS("arrows")}>
                    {previousArrow && (
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <ComposerIcon
                          name={this.getPropValue("previousArrow")}
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
                        <ComposerIcon
                          name={this.getPropValue("nextArrow")}
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
                {cards.map((item: Card, index: number) => (
                  <Base.VerticalContent
                    className={`${this.decorateCSS("card")} 
                    ${carouselClass === "carousel--singleCard" && this.decorateCSS("for-single-card")}`}
                    key={index}
                  >
                    <Base.Row>
                      <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("play-icon") }} />
                    </Base.Row>
                    <Base.H5 className={this.decorateCSS("item-header")}>{item.header}</Base.H5>
                    <Base.P className={this.decorateCSS("item-content")}>{item.content}</Base.P>
                  </Base.VerticalContent>
                ))}
              </ComposerSlider>
            </div>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider4;
