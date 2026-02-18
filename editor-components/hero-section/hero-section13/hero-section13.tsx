import styles from "./hero-section13.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type SliderItem = {
  image: TypeMediaInputValue;
};

type RightItem = {
  icon: TypeMediaInputValue;
  link: string;
};

type LeftItem = {
  label: string;
  link: string;
};

class HeroSection13 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b4?alt=media&timestamp=1719483639150",
              },
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
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b5?alt=media&timestamp=1719483639150",
              },
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
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b6?alt=media&timestamp=1719483639150",
              },
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
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b7?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Sections",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "ARCHITECTURE",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "WEDDING",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "COMMERIAL",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "FASHION",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "LIFESTYLE",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Social Links",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaPinterest",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "overlayActivation",
      displayer: "Overlay",
      value: true,
    });
     this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });
  }

  static getName(): string {
    return "Hero Section 13";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      rtl: false,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("currentSliderIndex", next);
      },
    };

    const rightItems = this.castToObject<RightItem[]>("right-items");
    const leftItems = this.castToObject<LeftItem[]>("left-items");
    const slider = this.castToObject<SliderItem[]>("slider");
    const reverseSlider = slider;
    const currentSliderIndex = this.getComponentState("currentSliderIndex") ?? 0;
    const currentSliderItem = reverseSlider[currentSliderIndex];
    const imageless = !currentSliderItem?.image;
    const overlay = this.getPropValue("overlayActivation");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slider.length > 0 && (
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {slider.map((item: SliderItem, indexSlider: number) => {
                  return (
                    <Base.Media
                      key={indexSlider}
                      value={item.image}
                      className={`${this.decorateCSS("image")} ${!item.image && this.decorateCSS("no-image")}`}
                      autoPlay
                      loop
                    />
                  );
                })}
              </ComposerSlider>
              {overlay && <div className={this.decorateCSS("overlay")}></div>}
            </div>
          )}
          {(leftItems.length > 0 || rightItems.length > 0) && (
            <Base.Container className={this.decorateCSS("content-container")}>
              <Base.MaxContent className={`${this.decorateCSS("box")} ${imageless && this.decorateCSS("imageless")}`}>
                {leftItems.length > 0 && (
                  <div className={this.decorateCSS("content-left")}>
                    {leftItems.map((item: LeftItem, index: number) => {
                      return (
                        <ComposerLink key={index} path={item.link}>
                          <Base.H5 className={this.decorateCSS("text")}>{item.label}</Base.H5>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
                {rightItems.length > 0 && (
                  <div className={this.decorateCSS("content-right")}>
                    {rightItems.map((item: RightItem, index: number) => {
                      return (
                        <ComposerLink key={index} path={item.link}>
                          <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.MaxContent>
            </Base.Container>
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection13;

