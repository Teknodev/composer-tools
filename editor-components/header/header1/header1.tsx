import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
interface Slider {
  title: string;
  subtitle: string;
  backgroundTitle: JSX.Element;
  sliderNumber: number;
  image: string;
}
class Header1 extends BaseHeader {
  sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background-layout",
      displayer: "Background Layout",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d7?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "image",
      key: "sun",
      displayer: "Sun",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d6?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "boolean",
      key: "numberLine",
      displayer: "Number Line",
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
          displayer: "Slider - 1",
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
              displayer: "SubTitle",
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
              type: "image",
              key: "image",
              displayer: "Image-1",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d8?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 2",
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
              displayer: "SubTitle",
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
              type: "image",
              key: "image",
              displayer: "Image-2",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243d9?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 3",
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
              displayer: "SubTitle",
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
              type: "image",
              key: "image",
              displayer: "Image-3",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243da?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 4",
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
              displayer: "SubTitle",
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
              type: "image",
              key: "image",
              displayer: "Image-4",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243db?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 5",
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
              displayer: "SubTitle",
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
              type: "image",
              key: "image",
              displayer: "Image-5",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617d8fbd2970002c6243dc?alt=media&timestamp=1719483639150",
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

  getName(): string {
    return "Header 1";
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }
  throttle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };
  handleWheel = this.throttle((event: React.WheelEvent) => {
    // ref isn't work;
    return;
    if (event.deltaY < 0) {
      this.handleUpClick();
    } else if (event.deltaY > 0) {
      this.handleDownClick();
    }
  }, 2000);

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
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      dotsClass: this.getPropValue("background-layout")
        ? this.decorateCSS("dots")
        : this.decorateCSS("dark-dots"),
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
    const animation = this.getComponentState("animation");

    return (
      <Base.Container className={this.decorateCSS("container")} isFull={true}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <img
            className={this.decorateCSS("image-container-2")}
            src={this.getPropValue("sun")}
            alt=""
          />
          <img
            className={this.decorateCSS("image-container-3")}
            src={this.getPropValue("sun")}
            alt=""
          />
          <div className={this.decorateCSS("wrapper")}>
            <ComposerSlider ref={this.sliderRef} {...settings}>
              {this.castToObject<[]>("sliders").map((item: any, index: number) => {
                const isActive = this.getComponentState("activeTab") === index;
                return (
                  <div
                    className={`${this.decorateCSS("return-container")} ${
                      animation && this.decorateCSS("animation")
                    }`}
                    key={index}
                  >
                    <div className={this.decorateCSS("background-container")}>
                      <div
                        className={`${this.decorateCSS("background-text")} ${
                          isActive && this.decorateCSS("active-text")
                        }`}
                      >
                        {item.backgroundTitle}
                      </div>
                    </div>

                    <div className={this.decorateCSS("content-container")}>
                      <div
                        className={
                          item.image
                            ? this.decorateCSS("image-wrapper")
                            : this.decorateCSS("without-image-wrapper")
                        }
                      >
                        <h1
                          className={
                            backgroundLayout
                              ? this.decorateCSS("subtitle")
                              : this.decorateCSS("subtitle-dark")
                          }
                        >
                          {item.subtitle}
                        </h1>
                        <img
                          className={
                            this.decorateCSS("image") +
                            " " +
                            (isActive && this.decorateCSS("active-image"))
                          }
                          src={item.image}
                          alt=""
                        />
                        {item.title && (
                          <h1
                            className={
                              backgroundLayout
                                ? item.image
                                  ? this.decorateCSS("title")
                                  : this.decorateCSS("without-image-title")
                                : item.image
                                ? this.decorateCSS("dark-title")
                                : this.decorateCSS("dark-without-image-title")
                            }
                          >
                            {item.title}
                          </h1>
                        )}

                        <h1 className={this.decorateCSS("sliderNumber")}>
                          {isLineActive && (
                            <span
                              className={
                                backgroundLayout
                                  ? this.decorateCSS("overlay")
                                  : this.decorateCSS("dark-overlay")
                              }
                            ></span>
                          )}
                          <span
                            className={
                              backgroundLayout
                                ? this.decorateCSS("slider-number")
                                : this.decorateCSS("dark-slider-number")
                            }
                          >
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

export default Header1;
