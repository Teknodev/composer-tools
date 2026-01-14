import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type SliderItem = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  media: any;
};

type SocialItem = {
  media: any;
  path: string;
};

class Slider1 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);


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
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Explore",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Travelling",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67516278506a40002c316b2b?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "This is a wonderful life",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "I LOVE IT",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67516251506a40002c316acd?alt=media",
              },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "social",
          displayer: "Social",
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
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
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
                name: "BiLogoFacebook",
              },
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
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
                name: "FaSquareXTwitter",
              },
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Slider 1";
  }
  render() {
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      afterChange: (current: number) => {
        if (this.getComponentState("activeSlide") !== current) {
          this.setComponentState("activeSlide", current);
        }
      },
    };

    const isOverlayActive = this.getPropValue("overlay");
    const icons = this.castToObject<SocialItem[]>("socials");
    const sliderItems = this.castToObject<SliderItem[]>("slider");
    const ImagesExist = sliderItems[this.getComponentState("activeSlide")]?.media;

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
              {sliderItems.map((item: SliderItem, indexSlider: number) => (
                <div key={indexSlider} className={this.decorateCSS("slider-item")}>
                  <div className={this.decorateCSS("img-wrapper")}>
                    {item.media && <Base.Media value={item.media} className={this.decorateCSS("img")} />}
                    {isOverlayActive && item.media && <div className={this.decorateCSS("overlay")}></div>}
                  </div>

                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("box-parent")}>
                      {(this.castToString(item.subtitle) || this.castToString(item.title)) && (
                        <Base.VerticalContent
                          className={`
                        ${this.decorateCSS("box")} 
                      ${item.media && this.decorateCSS("with-img")}
                      ${alignmentValue === "center" && this.decorateCSS("center")}`}
                        >
                          {this.castToString(item.subtitle) && (
                            <Base.SectionSubTitle
                              className={`
                        ${this.decorateCSS("subtitle")} 
                        ${item.media && this.decorateCSS("with-img")}`}
                            >
                              {item.subtitle}
                            </Base.SectionSubTitle>
                          )}
                          {this.castToString(item.title) && <Base.SectionTitle className={`${this.decorateCSS("title")} ${item.media && this.decorateCSS("with-img")}`}>{item.title}</Base.SectionTitle>}
                        </Base.VerticalContent>
                      )}
                    </div>

                    {icons.length > 0 && (
                      <div className={this.decorateCSS("socials")} id="slider1IconsHeight">
                        {icons.map((social: SocialItem, index: number) => {
                          return (
                            social.media && (
                              <ComposerLink key={index} path={social.path}>
                                <Base.Media
                                  value={social.media}
                                  className={`${this.decorateCSS("icon")} ${!item.media && this.decorateCSS("no-img")}`}
                                />
                              </ComposerLink>
                            )
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ComposerSlider>
          </div>

          {sliderItems.length > 1 && !!settings.dots && (
            <div className={`${this.decorateCSS("dots")} ${!ImagesExist && this.decorateCSS("dots-no-image")}`}>
              {sliderItems.map((_, index) => (
                <div key={`dot-${index}`} className={`${this.decorateCSS("dot-item")} ${this.getComponentState("activeSlide") === index && this.decorateCSS("dot-active")}`} onClick={() => this.getComponentState("slider-ref").current.slickGoTo(index)}>
                  <Base.Button className={this.decorateCSS("dot-button")} />
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider1;
