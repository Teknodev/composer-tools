import * as React from "react";
import styles from "./header26.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Slide = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  url: string;
  image: string;
};

class Header26 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

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
              value: "FOR THE ROAD",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "3D Visualization",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6825e16e2bb4c4002cf72e95?alt=media",
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
              value: "FALLING IN LOVE",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "New illustrations",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682495362bb4c4002cf5d857?alt=media",
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
              value: "ROCK ON ROCK",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "Design trends",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6824a9782bb4c4002cf5edfd?alt=media",
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
              value: "JUST ONE MORE",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "Photography",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6824a9a02bb4c4002cf5ee06?alt=media",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "up_icon",
      displayer: "Up icon",
      value: "IoIosArrowUp",
    });
    this.addProp({
      type: "icon",
      key: "down_icon",
      displayer: "Down icon",
      value: "IoIosArrowDown",
    });

    this.addProp({
      type: "boolean",
      key: "enable_line",
      displayer: "Enable Line",
      value: true
    })

    this.addProp({
      type: "boolean",
      key: "enable_slider_animation",
      displayer: "Enable Slider Animation",
      value: true
    })

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("next", null);
  }

  static getName(): string {
    return "Header 26";
  }

  render() {
    const sliderRef = this.getComponentState("sliderRef");

    const handlePrevClick = () => {
      const slider = sliderRef.current;
      if (slider) slider.slickPrev();
    };

    const handleNextClick = () => {
      const slider = sliderRef.current;
      if (slider) slider.slickNext();
    };

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      draggable: true,
      vertical: true,
      verticalSwiping: true,
      centerPadding: '0px',
      beforeChange: (current: number, next: number) => {
        this.setComponentState("old", current);
        this.setComponentState("next", next);
      },
      afterChange: (current: number) => {
        this.setComponentState("old", null);
        this.setComponentState("next", null);
      },
    };

    const slides = this.castToObject<Slide[]>("sliders");
    const enableLine = this.getPropValue("enable_line");
    const enableSliderAnimation = this.getPropValue("enable_slider_animation");

    const slidesLength = slides.length;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides?.length > 0 && (
            <ComposerSlider {...settings} ref={sliderRef}>
              {slides.map((item: Slide, index: number) => {
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);
                const stickToBottomCondition =
                  (item.image && !(titleExist || subtitleExist)) ||
                    (!item.image && (titleExist || subtitleExist))
                    ? this.decorateCSS("stick-to-bottom")
                    : "";

                return (
                  <div
                    className={`${this.decorateCSS("sliders")}
                      ${this.decorateCSS(
                      this.getComponentState("next") === index ||
                        this.getComponentState("old") === index
                        ? (enableSliderAnimation && "shrink")
                        : "",
                    )}`}
                    key={index}
                  >
                    <div className={this.decorateCSS("slider")}>
                      {(titleExist || subtitleExist) && (
                        <div className={`${this.decorateCSS("left-side")} ${!item.image && this.decorateCSS("no-image")}`}>
                          <div
                            className={this.decorateCSS("left-side-content")}
                          >
                            {titleExist && (
                              <ComposerLink path={item.url}>
                                <h1 className={this.decorateCSS("title")}>
                                  {item.title}
                                </h1>
                              </ComposerLink>
                            )}
                            {enableLine && (
                              <span className={this.decorateCSS("line")} />
                            )}
                            {subtitleExist && (
                              <h1 className={this.decorateCSS("subtitle")}>
                                {item.subtitle}
                              </h1>
                            )}
                          </div>
                        </div>
                      )}
                      {item.image && (
                        <div className={this.decorateCSS("right-side")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={item.image}
                            alt={item.image}
                          />
                        </div>
                      )}
                      {
                        slidesLength > 1 && <div
                          className={`${this.decorateCSS("arrows")}
                        ${stickToBottomCondition}`}
                        >
                          <div
                            className={this.decorateCSS("up-arrow")}
                            onClick={handlePrevClick}
                          >
                            <Base.Icon name={this.getPropValue("up_icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                          </div>
                          <div
                            className={this.decorateCSS("down-arrow")}
                            onClick={handleNextClick}
                          >
                            <Base.Icon name={this.getPropValue("down_icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          )}
        </div>
      </div>
    );
  }
}

export default Header26;
