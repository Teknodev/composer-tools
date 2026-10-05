import * as React from "react";
import styles from "./hero-section3.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ISliderData = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  image: TypeMediaInputValue;
  description: React.JSX.Element;
  type: string;
  button: INPUTS.CastedButton;
  logo: TypeMediaInputValue;
  overlay: boolean;
  backgroundMedia?: TypeMediaInputValue;
  backgroundOverlay?: boolean;
  backgroundAnimation?: boolean;
  line?: boolean;
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
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              value: { type: "image", url: "https://livewp.site/wp/md/wizestore/wp-content/uploads/sites/17/revslider/home-store-01/home_01_img1.png" },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "backgroundOverlay",
              displayer: "Background Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "backgroundAnimation",
              displayer: "Background Animation",
              value: true,
            },
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
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
              value: "Your Fashion Summer Collection is Here!",
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
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              value: { type: "image", url: "" },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "backgroundOverlay",
              displayer: "Background Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "backgroundAnimation",
              displayer: "Background Animation",
              value: true,
            },
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
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
              type: "media",
              key: "backgroundMedia",
              displayer: "Background Media",
              value: { type: "image", url: "" },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "backgroundOverlay",
              displayer: "Background Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "backgroundAnimation",
              displayer: "Background Animation",
              value: true,
            },
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
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

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Hero Section 3";
  }

  withVideoSettings(media?: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  handleSlideChange(index: number) {
    if (this.getComponentState("sliderRef")) {
      this.getComponentState("sliderRef").current.slickGoTo(index);
    }
  }

  render() {
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      fade: true,
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
              const hasLogo = !!((item.logo as any)?.url || (item.logo as any)?.name);
              const hasImage = !!(item.image as any)?.url;
              const showContent = hasLogo || subtitle || title || description || buttonText;
              
              const imageWithSettings = this.withVideoSettings(item.image);
              
              const typeClassMap: { [key: string]: string } = {
                "Left Image Layout": "2",
                "Right Image Layout": "1",
                "Overlay on Image": "3"
              };
              const typeClass = typeClassMap[item.type] || "1";

              const slideBg = item.backgroundMedia;
              const hasSlideBg = !!(slideBg as any)?.url;
              const slideBgAnim = item.backgroundAnimation ?? false;
              const showLine = item.line ?? true;

              return (
                <div
                  key={index}
                  className={`${this.decorateCSS("wrapper")} ${this.decorateCSS(
                    `type-${typeClass}`
                  )} ${index === activeSlide ? this.decorateCSS("active-slide") : ""}
                  ${!hasImage ? this.decorateCSS("full-text-container") : ""}
                  ${!showContent ? this.decorateCSS("full-image") : ""}
                  ${hasImage ? this.decorateCSS("has-image") : ""}
                  `}
                >
                  {hasSlideBg && (
                    <div className={this.decorateCSS("slide-bg")}>
                      <Base.Media value={this.withVideoSettings(slideBg)} className={`${this.decorateCSS("slide-bg-image")} ${slideBgAnim ? this.decorateCSS("slide-bg-image-animated") : ""}`} />
                      {item.backgroundOverlay && <div className={this.decorateCSS("slide-bg-overlay")} />}
                    </div>
                  )}

                  {!showContent && item.type === "Overlay on Image" ? null : (
                    <div className={this.decorateCSS("content-bg")} />
                  )}

                  <div className={this.decorateCSS("content")}>
                    {showContent && (
                      <Base.VerticalContent className={this.decorateCSS("text-container")}>
                        {hasLogo && (
                         <div className={this.decorateCSS("logo-container")}> 
                          <Base.Media 
                            value={item.logo} 
                            className={`${this.decorateCSS("logo")} ${item.logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`} 
                          />
                        </div> 
                        )}
                        {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>}
                        {title && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                        {description && (
                            <div className={this.decorateCSS("description-with-line")}>
                              {(showLine && (typeClass === "1" || typeClass === "3")) && <div className={this.decorateCSS("desc-line")} />}
                              <Base.SectionDescription className={this.decorateCSS("description")}>
                                {item.description}
                              </Base.SectionDescription>
                              {(showLine && typeClass === "2") && <div className={this.decorateCSS("desc-line")} />}
                          </div>
                        )}
                        {buttonText && (
                          <div className={`${this.decorateCSS("button-container")} ${showLine ? this.decorateCSS("with-line") : ""}`}>
                            <ComposerLink path={item.button.url}>
                              <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                    {hasImage && (
                      <div className={this.decorateCSS("image-container")}>
                        <div className={this.decorateCSS("image")}>
                          <Base.Media
                            className={this.decorateCSS("image-element")}
                            value={imageWithSettings}
                          />
                          {item.overlay && (
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
                key={index}
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

