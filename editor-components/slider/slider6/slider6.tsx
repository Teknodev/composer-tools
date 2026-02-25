import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider6.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  Slidersubtitle: React.JSX.Element;
  Slidertitle: React.JSX.Element;
  Sliderdescription: React.JSX.Element;
  vertText: React.JSX.Element;
  media: TypeMediaInputValue;
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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              key: "Slidersubtitle",
              displayer: "Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "Slidertitle",
              displayer: "Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "Sliderdescription",
              displayer: "Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },
            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", "MdArrowOutward", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
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
              key: "Slidersubtitle",
              displayer: "Subtitle",
              value: "TRAVEL",
            },
            {
              type: "string",
              key: "Slidertitle",
              displayer: "Title",
              value: "The Day I Lost My Child in Charles de Gaulle Airport",
            },
            {
              type: "string",
              key: "Sliderdescription",
              displayer: "Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },

            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", "MdArrowOutward", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
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
              key: "Slidersubtitle",
              displayer: "Subtitle",
              value: "HEALTH",
            },
            {
              type: "string",
              key: "Slidertitle",
              displayer: "Title",
              value: "Relationships Aren’t Easy, But They’re Worth It",
            },
            {
              type: "string",
              key: "Sliderdescription",
              displayer: "Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },
            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", "MdArrowOutward", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
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
              key: "Slidersubtitle",
              displayer: "Subtitle",
              value: "LIFESTYLE",
            },
            {
              type: "string",
              key: "Slidertitle",
              displayer: "Title",
              value: "Extreme Athleticism Is the New Midlife Crisis",
            },
            {
              type: "string",
              key: "Sliderdescription",
              displayer: "Description",
              value: "Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...",
            },
            {
              type: "string",
              key: "vertText",
              displayer: "Vertical Text",
              value: "Dsn Grid - March , 17th 2020",
            },

            INPUTS.BUTTON("button", "Button", "LOAD MORE", "", "MdArrowOutward", null, "Link"),
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

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    }));

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

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const hasContent = subtitle || title || description || visibleButtons.length > 0;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")}  ${!hasContent && this.decorateCSS("no-header")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {visibleButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                    return this.castToString(item.text) && (
                      <ComposerLink key={`button-${index}`} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {sliderItems.length > 0 && (
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
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
                          <div className={`${this.decorateCSS("left-part")} ${!item.media && this.decorateCSS("no-image")} `}>
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
                        {(this.castToString(item.Slidersubtitle) || this.castToString(item.Slidertitle) || this.castToString(item.Sliderdescription) || this.castToString(item.button.text)) && (
                          <Base.VerticalContent className={this.decorateCSS("right-part")} id={"slider6Image" + index}>
                            {this.castToString(item.Slidersubtitle) && <Base.P className={this.decorateCSS("card-subtitle")}>{item.Slidersubtitle}</Base.P>}
                            {this.castToString(item.Slidertitle) && <Base.H5 className={this.decorateCSS("card-title")}>{item.Slidertitle}</Base.H5>}
                            {this.castToString(item.Sliderdescription) && <Base.P className={this.decorateCSS("card-description")}>{item.Sliderdescription}</Base.P>}
                            {this.castToString(item.button.text) && (
                              <ComposerLink key={index} path={item.button.url}>
                                <Base.Button buttonType={item.button.type} key={index} className={this.decorateCSS("card-button")}>
                                  <span className={this.decorateCSS("card-button-text")}>{item.button.text}</span>
                                  {item.button.icon && (item.button.icon)?.name && (<Base.Media value={item.button.icon} className={this.decorateCSS("card-icon")} />)}
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
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider6;