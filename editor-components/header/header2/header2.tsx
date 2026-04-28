import { BaseHeader, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./header2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  componentBackground: TypeMediaInputValue;
};

class Header2 extends BaseHeader {
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
              key: "componentBackground",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1800655f8002caf431d?alt=media",
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
              key: "componentBackground",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1f50655f8002caf4427?alt=media",
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
              key: "componentBackground",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e1ca0655f8002caf43fb?alt=media",
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
              key: "componentBackground",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773e0fb0655f8002caf4243?alt=media",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Settings"));
  }

  static getName(): string {
    return "Header 2";
  }

  render() {
    const sliderItems = this.castToObject<SliderItem[]>("slider").filter((item: SliderItem) => item.componentBackground);
    const isOverlayActive = this.getPropValue("overlay");
    const hasMedia = sliderItems.some((item: SliderItem) => item.componentBackground);
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      infinite: sliderItems.length > 1,
      speed: 500,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("carousel-wrapper")} ${hasMedia && this.decorateCSS("has-media")}`}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {sliderItems.map((item: SliderItem, index: number) => (
                <div key={index} className={this.decorateCSS("slider-item")}>
                  {item.componentBackground && (
                    <Base.Media value={item.componentBackground} className={this.decorateCSS("media")} />
                  )}
                  {isOverlayActive && item.componentBackground && <div className={this.decorateCSS("overlay")}></div>}
                </div>
              ))}
            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header2;