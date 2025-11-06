import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderItem = {
  text: React.JSX.Element;
  image: TypeMediaInputValue;
  page?: string;
};

class HeroSection12 extends BaseHeroSection {
  leftSliderRef: any;
  rightSliderRef: any;
  isPhone: boolean = false;
  containerRef: React.RefObject<HTMLDivElement | null>;
  resizeObserver: ResizeObserver | null = null;


  constructor(props?: any) {
    super(props, styles);
    this.containerRef = React.createRef();

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "leftSliderItems",
      displayer: "Left Slider",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625904?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stuff",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            }
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625905?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Breakfast",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fe?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "The Notebook",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625901?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Little Pumpkin",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625903?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Evening",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "rightSliderItems",
      displayer: "Right Slider",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625900?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Pumpkin Pie",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258ff?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Coffee Time",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c6258fd?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Autumn Stories",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625902?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Still Life",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618f99bd2970002c625906?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Boooo!",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "leftSliderIcon",
      displayer: "Left Slider Arrow Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "HiOutlineChevronDown",
      },
    });

    this.addProp({
      type: "media",
      key: "rightSliderIcon",
      displayer: "Right Slider Arrow Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "HiOutlineChevronUp",
      },
    });

    this.leftSliderRef = React.createRef();
    this.rightSliderRef = React.createRef();
    this.isPhone = false;

  }
  
  componentDidMount() {
    super.componentDidMount?.();
    
    if (this.containerRef.current) {
      this.resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const width = entries[0].contentRect.width;
          const isPhone = width <= 640;
          if (this.isPhone !== isPhone) {
            this.isPhone = isPhone;
            this.forceUpdate();
          }
        }
      });
      this.resizeObserver.observe(this.containerRef.current);
    }
  }
  
  componentWillUnmount() {
    super.componentWillUnmount?.();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  static getName(): string {
    return "Hero Section 12";
  }

  render() {
    const autoplay = this.getPropValue("autoplay");
    const isVertical = !this.isPhone;
    
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: autoplay,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: isVertical,
      verticalSwiping: isVertical,
      swipe: true,
      switeToSlide: true,
    };

    const decorateIcon = { className: this.decorateCSS("Icon") };
    const leftSliderItems = this.castToObject<SliderItem[]>("leftSliderItems");
    const rightSliderItems =
      this.castToObject<SliderItem[]>("rightSliderItems");

    const showOverlay = this.getPropValue("overlay");

    const leftSliderSettings = {
      ...settings,
      beforeChange: () => {
        if (rightSliderItems.length > 0) {
          this.rightSliderRef.slickPrev();
        }
      },
      prevArrow: (
        <LeftSliderArrow
          givenClass={this.decorateCSS("left-slider-button")}
          customFunction={() => {
            if (rightSliderItems.length > 0) {
              this.rightSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("leftSliderIcon")}
        />
      ),
      nextArrow: (
        <LeftSliderArrow
          givenClass={this.decorateCSS("left-slider-button")}
          customFunction={() => {
            if (rightSliderItems.length > 0) {
              this.rightSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("leftSliderIcon")}
        />
      ),
    };

    const rightSliderSettings = {
      ...settings,
      beforeChange: () => {
        if (leftSliderItems.length > 0) {
          this.leftSliderRef.slickPrev();
        }
      },
      prevArrow: (
        <RightSliderArrow
          givenClass={this.decorateCSS("right-slider-button")}
          customFunction={() => {
            if (leftSliderItems.length > 0) {
              this.leftSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("rightSliderIcon")}
        />
      ),
      nextArrow: (
        <RightSliderArrow
          givenClass={this.decorateCSS("right-slider-button")}
          customFunction={() => {
            if (leftSliderItems.length > 0) {
              this.leftSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={this.getPropValue("rightSliderIcon")}
        />
      ),
    };

    return (
      <div className={this.decorateCSS("container")} ref={this.containerRef}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-container")}>

            {leftSliderItems.length > 0 && (
              <ComposerSlider
                key={`left-slider-${isVertical ? 'vertical' : 'horizontal'}`}
                className={`${this.decorateCSS("left-slider")}
              ${
                rightSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.leftSliderRef = slider)}
                {...leftSliderSettings}
              >
                {leftSliderItems.map((item: SliderItem, index: number) => (
                  <div key={index} className={this.decorateCSS("slider-item")}>
                    {item.image && (
                      <div
                        className={this.decorateCSS("image-overlay-container")}
                      >
                        <Base.Media
                          className={this.decorateCSS("slider-item-image")}
                          value={item.image}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <Base.H2
                      className={`${this.decorateCSS("slider-item-text")} ${
                        !item.image && this.decorateCSS("no-image-text")
                      }`}
                    >
                      <ComposerLink path={item.page}>
                        {item.text}
                      </ComposerLink>
                    </Base.H2>
                  </div>
                ))}
              </ComposerSlider>
            )}

            {rightSliderItems.length > 0 && (
              <ComposerSlider
                key={`right-slider-${isVertical ? 'vertical' : 'horizontal'}`}
                className={`${this.decorateCSS("right-slider")}
              ${
                leftSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.rightSliderRef = slider)}
                {...rightSliderSettings}
              >
                {rightSliderItems.map((item: SliderItem, index: number) => (
                  <div key={index} className={this.decorateCSS("slider-item")}>
                    {item.image && (
                      <div
                        className={this.decorateCSS("image-overlay-container")}
                      >
                        <Base.Media
                          className={this.decorateCSS("slider-item-image")}
                          value={item.image}
                        />
                        {showOverlay && (
                          <div className={this.decorateCSS("image-overlay")} />
                        )}
                      </div>
                    )}
                    <Base.H2
                      className={`${this.decorateCSS("slider-item-text")} ${
                        !item.image && this.decorateCSS("no-image-text")
                      }`}
                    >
                      <ComposerLink path={item.page}>
                        {item.text}
                      </ComposerLink>
                    </Base.H2>
                  </div>
                ))}
              </ComposerSlider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function LeftSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Media value={icon} {...props.decorateIcon} />
    </div>
  );
}

function RightSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Media value={icon} {...props.decorateIcon} />
    </div>
  );
}

export default HeroSection12;

