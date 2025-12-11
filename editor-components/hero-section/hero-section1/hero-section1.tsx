import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
class HeroSection1 extends BaseHeroSection {
  sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "background-layout",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d7?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "backgroundOverlay",
      displayer: "Background Overlay",
      value: false,
    });
    this.addProp({
      type: "media",
      key: "sun",
      displayer: "Animated Visual Element",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d6?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "numberLine",
      displayer: "Number Line",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });
  
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FORWARD",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BRANDING AND IDENTITY",
            },
            {
              type: "string",
              key: "backgroundTitle",
              displayer: "Background Title",
              value: "FORWARD",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 1,
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d8?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PIXFLOW",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "WEB AND APPLICATION",
            },
            {
              type: "string",
              key: "backgroundTitle",
              displayer: "Background Title",
              value: "PIXFLOW",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 2,
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d9?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "HARDDOT",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "GRAPHICS AND IDENTITY",
            },
            {
              type: "string",
              key: "backgroundTitle",
              displayer: "Background Title",
              value: "HARDDOT",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 3,
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243da?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "TRAVELIO",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PACKAGING AND WEB",
            },
            {
              type: "string",
              key: "backgroundTitle",
              displayer: "Background Title",
              value: "TRAVELIO",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 4,
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243db?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CROPOES",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "DESIGN AND IDENTITY",
            },
            {
              type: "string",
              key: "backgroundTitle",
              displayer: "Background Title",
              value: "CROPOES",
            },
            {
              type: "number",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: 5,
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243dc?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
      ],
    });

    this.sliderRef = React.createRef();
    this.setActiveTab(0);
    this.setComponentState("animation", true);
    this.setComponentState("animationDuration", 20);
  }

  static getName(): string {
    return "Hero Section 1";
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }

  handleUpClick = () => {
    const currentIndex = this.getComponentState("activeTab");
    const sliders = this.castToObject<[]>("sliders");
    const newIndex = currentIndex > 0 ? currentIndex - 1 : sliders.length - 1;

    this.setActiveTab(newIndex);
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(newIndex);
    }
  };

  handleDownClick = () => {
    const currentIndex = this.getComponentState("activeTab");
    const sliders = this.castToObject<[]>("sliders");
    const newIndex = currentIndex < sliders.length - 1 ? currentIndex + 1 : 0;

    this.setActiveTab(newIndex);
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(newIndex);
    }
  };

  render() {
    const autoplay = this.getPropValue("autoplay");
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: autoplay,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      dotsClass: `${this.decorateCSS("dots")} ${!this.getPropValue("background-layout") && this.decorateCSS("dark")}`,
      beforeChange: (current: number, next: number) => {
        this.setActiveTab(next);
        this.setComponentState("animation", false);
        setTimeout(() => {
          this.setComponentState("animation", true);
        }, 1000);
      },
    };
    const isLineActive = this.getPropValue("numberLine");
    const backgroundLayout = this.getPropValue("background-layout");
    const backgroundOverlay = this.getPropValue("backgroundOverlay");
    const animationEnabled = this.getPropValue("animation");
    const animation = this.getComponentState("animation");

    const backgroundWithSettings = backgroundLayout?.type === "video" ? {
      ...backgroundLayout,
      settings: {
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
      }
    } : backgroundLayout;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {backgroundLayout && (backgroundLayout.type === "image" || backgroundLayout.type === "video") && backgroundLayout.url && (
          <>
            <Base.Media
              value={backgroundWithSettings}
              className={this.decorateCSS("background-layout")}
            />
            {backgroundOverlay && <div className={this.decorateCSS("background-overlay")} />}
          </>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.Media
            className={this.decorateCSS("image-container-2")}
            value={this.getPropValue("sun")}
          />
          <Base.Media
            value={this.getPropValue("sun")}
            className={this.decorateCSS("image-container-3")}
          />
          <div className={this.decorateCSS("wrapper")}>
            <ComposerSlider ref={this.sliderRef} {...settings}>
              {this.castToObject<[]>("sliders").map((item: any, index: number) => {
                const isActive = this.getComponentState("activeTab") === index;
                const titleText = this.castToString(item.title);
                const imageWithSettings = item.image?.type === "video" ? {
                  ...item.image,
                  settings: {
                    autoplay: true,
                    loop: true,
                    muted: true,
                    controls: false
                  }
                } : item.image;
                return (
                  <div
                    className={`${this.decorateCSS("return-container")} ${animation && this.decorateCSS("animation")
                      }`}
                    key={index}
                  >
                    <div className={this.decorateCSS("background-container")}>
                      <div
                        className={`${this.decorateCSS("background-text")} ${isActive && this.decorateCSS("active-text")
                          }`}
                      >
                        {item.backgroundTitle}
                      </div>
                    </div>

                    <div className={this.decorateCSS("content-container")}>
                      <div
                        className={`${this.decorateCSS("image-wrapper")} ${!item.image && this.decorateCSS("without-image")} ${item.overlay ? this.decorateCSS("with-overlay") : ""}`}
                      >
                        <h1
                          className={`${this.decorateCSS("subtitle")} ${!backgroundLayout && this.decorateCSS("dark")}`}
                        >
                          {item.subtitle}
                        </h1>
                        <Base.Media
                          value={imageWithSettings}
                          className={`${this.decorateCSS("image")} ${isActive && this.decorateCSS("active-image")}`}
                        />
                        {item.title && (
                          <h1
                            className={`${this.decorateCSS("title")}
                          ${(backgroundLayout && !item.image) && this.decorateCSS("without-image")}
                          ${(!backgroundLayout && item.image) && this.decorateCSS("dark")}
                          ${(!backgroundLayout && !item.image) && this.decorateCSS("dark-without-image")}`}
                          >
                            {animationEnabled && titleText ? titleText.split('').map((char: string, charIndex: number) => (
                              <span
                                key={charIndex}
                                className={this.decorateCSS("title-char")}
                                style={{animationDelay: `${charIndex * 0.05}s`}}
                              >
                                {char}
                              </span>
                            )) : item.title}
                          </h1>
                        )}

                        <h1 className={this.decorateCSS("sliderNumber")}>
                          {isLineActive && (
                            <span className={`${this.decorateCSS("overlay")} ${!backgroundLayout && this.decorateCSS("dark")}`}></span>
                          )}
                          <span className={`${this.decorateCSS("slider-number")} ${!backgroundLayout && this.decorateCSS("dark")}`}>
                            {item.sliderNumber}
                          </span>
                        </h1>
                      </div>
                    </div>
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

export default HeroSection1;
