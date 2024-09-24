import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
class Header1 extends BaseHeader {
  sliderRef = React.createRef<any>();

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
              type: "boolean",
              key: "numberLine",
              displayer: "Number Line",
              value: true,
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
              type: "boolean",
              key: "numberLine",
              displayer: "Number Line",
              value: true,
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
              type: "boolean",
              key: "numberLine",
              displayer: "Number Line",
              value: true,
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
              type: "boolean",
              key: "numberLine",
              displayer: "Number Line",
              value: true,
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
              type: "boolean",
              key: "numberLine",
              displayer: "Number Line",
              value: true,
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
    this.setActiveTab(0);
  }

  getName(): string {
    return "Header 1";
  }
  setActiveTab(activeTabIndex: number) {
    console.log("activeTabIndex", activeTabIndex)
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }
  throttle = <T extends (...args: any[]) => void>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
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
    this.sliderRef.current.slickGoTo(newIndex);
  };

  handleDownClick = () => {
    const currentIndex = this.getComponentState("activeTab");
    const sliders = this.castToObject<[]>("sliders");
    const newIndex = currentIndex < sliders.length - 1 ? currentIndex + 1 : 0;

    this.setActiveTab(newIndex);
    this.sliderRef.current.slickGoTo(newIndex);
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
      dotsClass: this.decorateCSS("dots"),
      beforeChange: (current: number, next: number) => {
        this.setActiveTab(next);
      },
    };
    return (
      <div className={this.decorateCSS("container")} onWheel={this.handleWheel} style={{ backgroundImage: `url(${this.getPropValue("background-layout")})` }}>
        <img className={this.decorateCSS("image-container-2")} src={this.getPropValue("sun")} alt="" />
        <img className={this.decorateCSS("image-container-3")} src={this.getPropValue("sun")} alt="" />
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <ComposerSlider ref={this.sliderRef} {...settings}>
              {this.castToObject<[]>("sliders").map(
                (item: any, index: number) => {
                  const isActive = this.getComponentState("activeTab") === index;
                  return (
                    <div
                      className={this.decorateCSS("return-container")}
                      key={index}
                    >
                      <div className={this.decorateCSS("background-text") + " " +
                        (isActive && this.decorateCSS("active-text"))}>
                        {item.title}
                      </div>
                      <div className={this.decorateCSS("content-container")}>
                        <div className={this.decorateCSS("image-wrapper")}>
                          <h1 className={this.decorateCSS("subtitle")}>
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

                          <h1 className={this.decorateCSS("sliderNumber")}>
                            {item.numberLine && (
                              <span className={this.decorateCSS("overlay")}></span>
                            )
                            }
                            <span className={this.decorateCSS("slider-number")}>
                              {item.sliderNumber}
                            </span>
                          </h1>
                        </div>

                        <h1 className={this.decorateCSS("title")}>
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  );
                }
              )}
            </ComposerSlider>
          </div>
        </div >
      </div >
    );
  }
}

export default Header1;