import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider3.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  image: string;
  header: JSX.Element;
  description: JSX.Element;
  link: string;
}

class Slider3 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value:
        "What's new at Store",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Effective tools are critical to the success of a small business.",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629525?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "header",
              displayer: "Header",
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
              key: "link",
              displayer: "Card Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629526?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "header",
              displayer: "Header",
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
              key: "link",
              displayer: "Card Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661caecbd2970002c629527?alt=media&timestamp=1719584962578",
            },
            {
              type: "string",
              key: "header",
              displayer: "Header",
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
              key: "link",
              displayer: "Card Link",
              value: "",
            }
          ]
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "BsArrowLeftCircle"
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "BsArrowRightCircle"
    });

    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Slider 3";
  }
  render() {

    const items = this.castToObject<Card[]>("slider").filter(
      (item: Card) => item.image
    );

    const isCardExist = items.length > 0;
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const cardNumber = String(3);
    const visibleItemCount = Math.min(items.length, 1.2);
    const sliderRef = this.getComponentState("slider-ref");

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: visibleItemCount,
      variableWidth: true,
      centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
      responsive: [
        {
          breakpoint: 960,
          settings: {
            dots: false,
            slidesToShow: visibleItemCount,
            variableWidth: true,
          }
        },
        {
          breakpoint: 640,
          settings: {
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            centerPadding: "0px",
          }
        },
      ]
    };

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const carouselClass = cardNumber === "1" ? "carousel--singleCard" : "carousel--multipleCards";
    const arrowsExist = (items.length > 1 && (previousArrow || nextArrow))
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) || this.castToString(subtitle) || previousArrow || nextArrow) &&
            <div className={`${this.decorateCSS("header")}
            ${(!this.castToString(title) && !this.castToString(subtitle)) && this.decorateCSS("no-header-titles")}
            `}>
              {(this.castToString(subtitle) || this.castToString(title)) &&
                <Base.VerticalContent className={`${this.decorateCSS("header-content")} 
                ${!arrowsExist && this.decorateCSS("no-arrows")}`}>
                  {this.castToString(subtitle) &&
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {subtitle}
                    </Base.SectionSubTitle>
                  }
                  {this.castToString(title) &&
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>}
                </Base.VerticalContent>}

              {arrowsExist &&
                <div className={this.decorateCSS("arrows")}>
                  {previousArrow &&
                    <ComposerIcon
                      name={this.getPropValue("previousArrow")}
                      propsIcon={{
                        className: this.decorateCSS("prevArrow"),
                        onClick: () => {
                          sliderRef.current.slickPrev();
                        },
                      }}
                    />}
                  {nextArrow &&
                    <ComposerIcon
                      name={this.getPropValue("nextArrow")}
                      propsIcon={{
                        className: this.decorateCSS("nextArrow"),
                        onClick: () => {
                          sliderRef.current.slickNext();
                        },
                      }}
                    />}
                </div>}
            </div>}

          <div className={this.decorateCSS("slider-parent")}>
            {isCardExist && (
              <ComposerSlider
                {...settings}
                className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`}
                ref={sliderRef}
              >
                {items.map((item: Card, index: number) => (
                  <ComposerLink key={index} path={item.link}>
                    <div
                      key={index}
                      className={`${this.decorateCSS("card")} ${this.getComponentState("centerSlide") === index && this.decorateCSS("centerSlide")
                        }`}
                    >
                      <div className={this.decorateCSS("img-container")}>
                        <img
                          src={item.image}
                          className={this.decorateCSS("img")}
                          alt=""
                        />
                      </div>
                      {(this.castToString(item.header) || this.castToString(item.description)) &&
                        <Base.VerticalContent className={`${this.decorateCSS("content-container")} 
                      ${this.getComponentState("centerSlide") === index && this.decorateCSS("active")}`}>
                          {this.castToString(item.header) && <Base.H2 className={this.decorateCSS("content-title")}>{item.header}</Base.H2>}
                          {this.castToString(item.description) && <Base.P className={this.decorateCSS("content-description")}>{item.description}</Base.P>}
                        </Base.VerticalContent>}
                    </div>
                  </ComposerLink>
                ))}
              </ComposerSlider>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Slider3;
