import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  media: any;
};

class Slider7 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "", "", "", null));

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-D7nSqgT-_GE-unsplash.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/michael-demarco-oB0r-2a1QfE-unsplash-scaled.jpg",
              },
            },

          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-xlGKy9UokjQ-unsplash-1.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/messeplatz-cloudy-sky-basel-switzerland.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/metal-geometric-modern-building-scaled.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/vertical-shot-high-rise-exotic-skyscraper-blue-sky.jpg",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
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
                url: "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/joel-filipe-PkE6yQwE-6Y-unsplash.jpg",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "BsArrowLeft",
      },
    });

    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "BsArrowRight",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "hoverAnimation",
      displayer: "Hover Animation",
      value: true,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config", {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    }));

    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());

  }

  static getName(): string {
    return "Slider 7";
  }

  render() {
    let items = this.castToObject<SliderItem[]>("slider").filter(
      (item: SliderItem) => item.media
    );
    const isCardExist = items.length > 0;
    const isOverlayActive = this.getPropValue("overlay");
    const isHoverActive = this.getPropValue("hoverAnimation");
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const sliderRef = this.getComponentState("slider-ref");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    let slidesToShowNumber = 1;

    if (items.length === 2) {
      items = [...items, ...items];
      slidesToShowNumber = 3;
    }

    const settings = {
      ...sliderSettings,
      infinite: true,
      speed: 500,
      centerMode: true,
      autoplaySpeed: 3000,
      slidesToShow: slidesToShowNumber,
      slidesToScroll: 1,
      centerPadding: "0px",
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots: sliderSettings.dots,
            arrows: sliderSettings.arrows,
          }
        },
        {
          breakpoint: 640,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
            dots: sliderSettings.dots,
            arrows: sliderSettings.arrows,
          }
        }
      ],

      beforeChange: (_: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
    };


    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const button = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container isFull={true} className={`${this.decorateCSS("container")}
      ${items.length === 1 && this.decorateCSS("one-card")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description) || (button && this.castToString(button.text))) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("section-description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {button && this.castToString(button.text) && (
                <ComposerLink path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("section-button")}>
                    {button.text && <span className={this.decorateCSS("button-text")}>{button.text}</span>}
                    {button.icon && (
                      <Base.Media
                        value={button.icon as any}
                        className={this.decorateCSS("icon")}
                      />
                    )}
                  </Base.Button>
                </ComposerLink>
              )}
            </Base.VerticalContent>
          )}

          {previousArrow && sliderSettings.arrows && (
            <div className={this.decorateCSS("prevArrow")} onClick={() => sliderRef.current.slickPrev()}>
              <Base.Media value={previousArrow} className={this.decorateCSS("arrow-icon")} />
            </div>
          )}

          {nextArrow && sliderSettings.arrows && (
            <div className={this.decorateCSS("nextArrow")} onClick={() => sliderRef.current.slickNext()}>
              <Base.Media value={nextArrow} className={this.decorateCSS("arrow-icon")} />
            </div>
          )}

          {isCardExist && (
            <div className={this.decorateCSS("carousel-wrapper")}>
              <ComposerSlider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={sliderRef}
              >
                {items.map((item: SliderItem, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("card")} ${this.getComponentState("centerSlide") === index && this.decorateCSS("centerSlide")} ${isHoverActive && this.decorateCSS("hover-active")
                      }`}
                  >
                    <div className={this.decorateCSS("imgContainer")}>
                      {item.media && (
                        <Base.Media
                          value={item.media}
                          className={this.decorateCSS("img")}
                        />
                      )}
                      {isOverlayActive && item.media && <div className={this.decorateCSS("overlay")}></div>}
                    </div>
                  </div>
                ))}
              </ComposerSlider>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider7;
