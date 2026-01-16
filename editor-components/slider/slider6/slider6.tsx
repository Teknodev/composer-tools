import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider6.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  vertText: React.JSX.Element;
  image_subtitle: React.JSX.Element;
  image_title: React.JSX.Element;
  image_description: React.JSX.Element;
  media: any;
  button: INPUTS.CastedButton;
  path: string;
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a38f506a40002c2f7b2d?alt=media",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3ab506a40002c2f7b36?alt=media",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3c5506a40002c2f7b64?alt=media",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a3e8506a40002c2f7b7a?alt=media",
              },
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

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));

    this.setComponentState("prevSlide", this.castToObject<SliderItem[]>("header").length - 1);
    this.setComponentState("activeSlide", 0);
    this.setComponentState("nextSlide", 1);
  }
  static getName(): string {
    return "Slider 6";
  }
  render() {
    const sliderItems = this.castToObject<SliderItem[]>("header");
    const isMultipleItems = sliderItems.length > 1;
    const isOverlayActive = this.getPropValue("overlay");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const settings = {
      ...sliderSettings,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "200px",
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            centerPadding: "180px",
            dots: sliderSettings.dots,
            arrows: sliderSettings.arrows,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            centerPadding: "160px",
            dots: sliderSettings.dots,
            arrows: sliderSettings.arrows,
          },
        },
        {
          breakpoint: 960,
          settings: {
            centerPadding: "150px",
            dots: sliderSettings.dots,
            arrows: sliderSettings.arrows,
          },
        },
        {
          breakpoint: 640,
          settings: {
            centerPadding: "0px",
            dots: sliderSettings.dots,
          },
        },
      ],
      beforeChange: (_: number, next: number) => {
        this.setComponentState("prevSlide", next - 1 < 0 ? sliderItems.length - 1 : next - 1);
        this.setComponentState("activeSlide", next);
        this.setComponentState("nextSlide", next + 1 > sliderItems.length - 1 ? 0 : next + 1);
      },
    };

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider
              {...settings}
              className={`
                ${this.decorateCSS("carousel")}
                ${!this.castToString(subtitle) && !this.castToString(title) && this.decorateCSS("no-header")}
                ${!isMultipleItems && this.decorateCSS("single-item")}`}
            >
              {sliderItems.map((item: SliderItem, index: number) => {
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
                      {(this.castToString(item.vertText) || item.media) && (
                        <div className={`${this.decorateCSS("left-part")} ${!item.media && this.decorateCSS("no-img")} `}>
                          {this.castToString(item.vertText) && (
                            <span style={{ maxHeight: imageHeight }} className={this.decorateCSS("vert-text")}>
                              {item.vertText}
                            </span>
                          )}
                          {item.media && (
                            <div className={this.decorateCSS("image-wrapper")}>
                              <Base.Media value={item.media} className={this.decorateCSS("image")} />
                              {isOverlayActive && item.media && <div className={this.decorateCSS("overlay")}></div>}
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider6;
