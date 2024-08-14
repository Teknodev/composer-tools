import * as React from "react";
import styles from "./header26.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Slide = {
  title: JSX.Element;
  subtitle: JSX.Element;
  url: string;
  image: string;
};

class HeaderComponent26 extends BaseHeader {
  private sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);

    this.sliderRef = React.createRef();

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
              value: "3d Visualisation",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f611?alt=media&timestamp=1719412135932",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f612?alt=media&timestamp=1719412135932",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f613?alt=media&timestamp=1719412135932",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f614?alt=media&timestamp=1719412135932",
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

    this.setComponentState("next", null);
  }

  getName(): string {
    return "Header-26";
  }

  handlePrevClick = () => {
    const slider = this.sliderRef.current;
    if (slider) slider.slickPrev();
  };

  handleNextClick = () => {
    const slider = this.sliderRef.current;
    if (slider) slider.slickNext();
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      draggable: true,
      vertical: true,
      verticalSwiping: true,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("old", current);
        this.setComponentState("next", next);
      },
      afterChange: (current: number, next: number) => {
        this.setComponentState("old", null);
        this.setComponentState("next", null);
      },
    };

    const slides = this.castToObject<Slide[]>("sliders");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slides?.length && slides?.length > 0 && (
            <ComposerSlider {...settings} ref={this.sliderRef}>
              {slides.map((item: Slide, index: number) => {
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);

                return (
                  <div
                    className={`${this.decorateCSS("sliders")}
                      ${this.decorateCSS(
                        this.getComponentState("next") === index ||
                          this.getComponentState("old") === index
                          ? "shrink"
                          : "",
                      )}`}
                    key={index}
                  >
                    <div className={this.decorateCSS("slider")}>
                      <div className={this.decorateCSS("left-side")}>
                        <div className={this.decorateCSS("left-side-content")}>
                          {titleExist && (
                            <ComposerLink path={item.url}>
                              <h1 className={this.decorateCSS("title")}>
                                {item.title}
                              </h1>
                            </ComposerLink>
                          )}
                          {titleExist && subtitleExist && (
                            <span className={this.decorateCSS("line")} />
                          )}
                          {subtitleExist && (
                            <h1 className={this.decorateCSS("subtitle")}>
                              {item.subtitle}
                            </h1>
                          )}
                          <div className={this.decorateCSS("arrows")}>
                            <div
                              className={this.decorateCSS("up-arrow")}
                              onClick={this.handlePrevClick}
                            >
                              <ComposerIcon
                                name={this.getPropValue("up_icon")}
                              />
                            </div>
                            <div
                              className={this.decorateCSS("down-arrow")}
                              onClick={this.handleNextClick}
                            >
                              <ComposerIcon
                                name={this.getPropValue("down_icon")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {item.image && (
                        <div className={this.decorateCSS("right-side")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={item.image}
                            alt="Slide"
                          />
                        </div>
                      )}
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

export default HeaderComponent26;
