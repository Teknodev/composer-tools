import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Slider = {
  subtitle: JSX.Element;
  title: JSX.Element;
  image: string;
};

type Social = {
  icon: string;
  url: string;
};

class Slider1 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "EXPLORE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Travelling",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67516278506a40002c316b2b?alt=media",
            }
          ]
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67516251506a40002c316acd?alt=media",
            },
          ]
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
              type: "icon",
              key: "icon",
              value: "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ]
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "BiLogoFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ]
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "FaSquareXTwitter",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ]
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  getName(): string {
    return "Slider 1";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      afterChange: (current: number, next: number) => {
        if (this.getComponentState("activeSlide") !== current) {
          this.setComponentState("activeSlide", current);
        }
      },
    };

    const isOverlayActive = this.getPropValue("overlay");
    const icons = this.castToObject<Social[]>("socials");
    const sliderItems = this.castToObject<Slider[]>("slider");
    const noImage = sliderItems[this.getComponentState("activeSlide")]?.image;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
              {sliderItems.map((item: Slider, indexSlider: number) => (
                <div key={indexSlider} className={this.decorateCSS("slider-item")}>

                  <div className={this.decorateCSS("img-wrapper")}>
                    {item.image &&
                      <img
                        alt=""
                        src={item.image}
                        className={this.decorateCSS("img")}
                      />}
                    {isOverlayActive && <div className={this.decorateCSS("overlay")}></div>}
                  </div>

                  <div className={`${this.decorateCSS("content")} ${icons.length < 1 && this.decorateCSS("no-icon")}`}>
                    <Base.VerticalContent className={`${this.decorateCSS("box")} ${item.image && this.decorateCSS("with-img")}`}>
                      {this.castToString(item.subtitle) && < Base.SectionSubTitle
                        className={`
                        ${this.decorateCSS("subtitle")} 
                        ${item.image && this.decorateCSS("with-img")}
                        `}>
                        {item.subtitle}
                      </Base.SectionSubTitle>}
                      {this.castToString(item.title) && <Base.SectionTitle className={`${this.decorateCSS("title")} ${item.image && this.decorateCSS("with-img")}`}>
                        {item.title}
                      </Base.SectionTitle>}
                    </Base.VerticalContent>
                    {icons.length > 0 &&
                      <div className={this.decorateCSS("socials")}>
                        {icons.map((social: Social, index: number) => {
                          return (
                            <ComposerLink key={index} path={social.url}>
                              <ComposerIcon
                                name={social.icon}
                                propsIcon={{
                                  className: `${this.decorateCSS("icon")} ${!item.image && this.decorateCSS("no-img")}`,
                                }}
                              />
                            </ComposerLink>
                          );
                        })}
                      </div>}
                  </div>

                </div>
              ))}

            </ComposerSlider>
          </div>
          {sliderItems.length > 1 && <ul className={`${this.decorateCSS(noImage ? "dots" : "dots-2")}`}>
            {sliderItems.map((_, index) => (
              <li
                key={`dot-${index}`}
                className={this.getComponentState("activeSlide") === index && this.decorateCSS("slick-active")}
                onClick={() => this.getComponentState("slider-ref").current.slickGoTo(index)}>
                <button />
              </li>
            ))}
          </ul>}
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Slider1;
