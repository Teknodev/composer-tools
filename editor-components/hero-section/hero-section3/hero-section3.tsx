import * as React from "react";
import styles from "./hero-section3.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  image: TypeMediaInputValue;
  description: React.JSX.Element;
  type: string;
  button: INPUTS.CastedButton;
  logo: TypeMediaInputValue;
  overlay: boolean;
};

class HeroSection3 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "New lookbok Ready for the summer",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Explore the modern glamour within all of Wize Styles.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624501?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Right Image Layout",
              additionalParams: {
                selectItems: ["Right Image Layout", "Left Image Layout", "Overlay on Image"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", null, null, "Tertiary"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "We are Fashion Revolution",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624502?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Left Image Layout",
              additionalParams: {
                selectItems: ["Right Image Layout", "Left Image Layout", "Overlay on Image"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", null, null, "Tertiary"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Your Fashion Summer",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Enjoy the New Collection with Wize Fashion Store.Best women's fashion tips and style guide.",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624503?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Overlay on Image",
              additionalParams: {
                selectItems: ["Right Image Layout", "Left Image Layout", "Overlay on Image"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", null, null, "Tertiary"),
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Hero Section 3";
  }

  handleSlideChange(index: number) {
    if (this.getComponentState("sliderRef")) {
      this.getComponentState("sliderRef").current.slickGoTo(index);
    }
  }

  render() {
    const autoplay = this.getPropValue("autoplay");
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: autoplay,
      autoplaySpeed: 3000,
      beforeChange: (current: number, next: number) => {
        setTimeout(() => {
          this.setComponentState("activeSlide", next);
        }, 100);
      },
    };

    const activeSlide = this.getComponentState("activeSlide");
    const animation = this.getPropValue("animation");

    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <ComposerSlider
            ref={this.getComponentState("sliderRef")}
            {...settings}
            className={`${this.decorateCSS("slider")} ${animation && this.decorateCSS("with-animation")}`}
          >
            {this.castToObject<ISliderData[]>("slider").map((item: ISliderData, index: number) => {
              const title = this.castToString(item.title);
              const description = this.castToString(item.description);
              const subtitle = this.castToString(item.subtitle);
              const buttonText = this.castToString(item.button.text);
              const showContent = title || description || buttonText;
              
              const imageWithSettings = item.image?.type === "video" ? {
                ...item.image,
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                }
              } : item.image;
              
              const typeClassMap: { [key: string]: string } = {
                "Left Image Layout": "2",
                "Right Image Layout": "1",
                "Overlay on Image": "3"
              };
              const typeClass = typeClassMap[item.type] || "1";

              return (
                <div
                  className={`${this.decorateCSS("wrapper")} ${this.decorateCSS(
                    `type-${typeClass}`
                  )} ${index === activeSlide && this.decorateCSS("active-slide")}
                  ${!item.image && this.decorateCSS("full-text-container")}
                  ${!showContent && this.decorateCSS("full-image")}
                  ${item.image && this.decorateCSS("has-image")}
                  `}
                >
                  {!showContent && item.type === "Overlay on Image" ? null : (
                    <div className={this.decorateCSS("content-bg")} />
                  )}

                  <div className={this.decorateCSS("content")}>
                    {showContent && (
                      <Base.VerticalContent className={this.decorateCSS("text-container")}>
                        {item.logo && (
                         <div className={this.decorateCSS("logo-container")}> 
                          <Base.Media 
                            value={item.logo} 
                            className={`${this.decorateCSS("logo")} ${item.logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`} 
                          />
                        </div> 
                        )}
                        {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                        {title && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                        {description && (
                          <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                        )}
                        {buttonText && (
                          <div className={this.decorateCSS("button-container")}>
                            <ComposerLink path={item.button.url}>
                              <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                    {item.image && (
                      <div className={this.decorateCSS("image-container")}>
                        <div className={this.decorateCSS("image")}>
                          <Base.Media
                            className={this.decorateCSS("image-element")}
                            value={imageWithSettings}
                          />
                          {item.overlay && imageWithSettings && (imageWithSettings.type === "image" || imageWithSettings.type === "video") && imageWithSettings.url && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ComposerSlider>
          <div className={this.decorateCSS("pagination")}>
            {this.castToObject<ISliderData[]>("slider").map((slider: ISliderData, index) => (
              <Base.P
                className={`${this.decorateCSS("page-number")} ${activeSlide === index && this.decorateCSS("active")
                  }`}
                onClick={() => this.handleSlideChange(index)}
              >
                0{index + 1}
              </Base.P>
            ))}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection3;

