import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider6.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  vertText: React.JSX.Element;
  image_subtitle: React.JSX.Element;
  image_title: React.JSX.Element;
  image_description: React.JSX.Element;
  image: string;
  button: INPUTS.CastedButton;
  link: string;
};

class Slider6 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Lasts post",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Latest And Greatest Post",
    });
    this.addProp({
      type: "array",
      key: "header",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a38f506a40002c2f7b2d?alt=media",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },
            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "TRAVEL",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "The Day I Lost My Child in Charles de Gaulle Airport",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3ab506a40002c2f7b36?alt=media",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },

            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "HEALTH",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Relationships Aren’t Easy, But They’re Worth It",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3c5506a40002c2f7b64?alt=media",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },
            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "image_subtitle",
              displayer: "Image Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "image_title",
              displayer: "Image Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "image_description",
              displayer: "Image Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3e8506a40002c2f7b7a?alt=media",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },

            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", null, null, "Primary"),
          ],
        },
      ],
    });

    this.setComponentState("prevSlide", this.castToObject<Card[]>("header").length - 1);
    this.setComponentState("activeSlide", 0);
    this.setComponentState("nextSlide", 1);
  }
  static getName(): string {
    return "Slider 6";
  }
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "300px",
      responsive: [
        {
          breakpoint: 960,
          settings: {
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 640,
          settings: {
            centerPadding: "0px",
          },
        },
      ],
      beforeChange: (_: number, next: number) => {
        this.setComponentState("prevSlide", next - 1 < 0 ? this.castToObject<Card[]>("header").length - 1 : next - 1);
        this.setComponentState("activeSlide", next);
        this.setComponentState("nextSlide", next + 1 > this.castToObject<Card[]>("header").length - 1 ? 0 : next + 1);
      },
    };

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const isMultipleItems = this.castToObject<Card[]>("header").length > 1;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <Base.Container className={this.decorateCSS("header-container")}>
            <Base.MaxContent className={this.decorateCSS("header-max-content")}>
              {(this.castToString(subtitle) || this.castToString(title)) && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {this.castToString(subtitle) && (
                    <Base.SectionSubTitle
                      className={`${this.decorateCSS("subtitle")} 
                    ${!this.castToString(title) && this.decorateCSS("no-title")}`}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                </Base.VerticalContent>
              )}
            </Base.MaxContent>
          </Base.Container>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider
              {...settings}
              className={`
                ${this.decorateCSS("carousel")}
                ${!this.castToString(subtitle) && !this.castToString(title) && this.decorateCSS("no-header")}
                ${!isMultipleItems && this.decorateCSS("single-item")}`}
            >
              {this.castToObject<Card[]>("header").map((item: Card, index: number) => {
                const imageElement = document.getElementById(`slider6Image${index}`);
                const imageHeight = imageElement?.clientHeight || "auto";

                return (
                  <div
                    className={`${this.decorateCSS("card")} 
                      ${isMultipleItems && this.getComponentState("prevSlide") == index ? this.decorateCSS("prevSlide") : ""} 
                      ${isMultipleItems && this.getComponentState("nextSlide") == index ? this.decorateCSS("nextSlide") : ""}`}
                    key={`sld-8-${index}`}
                  >
                    <Base.ContainerGrid className={this.decorateCSS("content-div")}>
                      {(this.castToString(item.vertText) || item.image) && (
                        <div className={`${this.decorateCSS("left-part")} ${!item.image && this.decorateCSS("no-img")} `}>
                          {this.castToString(item.vertText) && (
                            <span style={{ maxHeight: imageHeight }} className={this.decorateCSS("vert-text")}>
                              {item.vertText}
                            </span>
                          )}
                          {item.image && (
                            <div className={this.decorateCSS("image-wrapper")}>
                              <img alt="" src={item.image} className={this.decorateCSS("image")} />
                            </div>
                          )}
                        </div>
                      )}

                      {(this.castToString(item.image_subtitle) || this.castToString(item.image_title) || this.castToString(item.image_description) || this.castToString(item.button.text)) && (
                        <Base.VerticalContent className={this.decorateCSS("right-part")} id={"slider6Image" + index}>
                          {this.castToString(item.image_subtitle) && <Base.P className={this.decorateCSS("first-header")}>{item.image_subtitle}</Base.P>}
                          {this.castToString(item.image_title) && <Base.P className={this.decorateCSS("item-title")}>{item.image_title}</Base.P>}
                          {this.castToString(item.image_description) && <Base.P className={this.decorateCSS("item-description")}>{item.image_description}</Base.P>}
                          {this.castToString(item.button.text) && (
                            <ComposerLink key={index} path={item.button.url}>
                              <Base.Button buttonType={item.button.type} key={index} className={this.decorateCSS("button")}>
                                {item.button.text}
                              </Base.Button>
                            </ComposerLink>
                          )}
                        </Base.VerticalContent>
                      )}
                    </Base.ContainerGrid>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider6;
