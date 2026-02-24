import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider5.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  media: TypeMediaInputValue;
};

class Slider5 extends BaseSlider {
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
              key: "media",
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
              key: "media",
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
              key: "media",
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
              key: "media",
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

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));
  }

  static getName(): string {
    return "Slider 5";
  }

  render() {
    const sliderItems = this.castToObject<SliderItem[]>("slider").filter((item: SliderItem) => item.media);
    const isOverlayActive = this.getPropValue("overlay");
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
          <div className={this.decorateCSS("carousel-wrapper")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {sliderItems.map((item: SliderItem, index: number) => (
                <div key={index} className={this.decorateCSS("slider-item")}>
                  {item.media && (
                    <Base.Media value={item.media} className={this.decorateCSS("media")} />
                  )}
                  {isOverlayActive && item.media && <div className={this.decorateCSS("overlay")}></div>}
                </div>
              ))}
            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider5;