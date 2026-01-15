import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItem = {
  media: any;
  text: React.JSX.Element;
  button: React.JSX.Element;
  path: string;
  number: React.JSX.Element;
};

class Slider2 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "items1",
          displayer: "Items 2",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Title",
              value: "Sonya",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67518d0c506a40002c318e40?alt=media",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Assumenda voluptatum eveniet possimus modi illo.",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 0",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Title",
              value: "Baseball",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67518d3f506a40002c318e73?alt=media",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Commodi necessitatibus perspiciatis quae labore!",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 0",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Title",
              value: "Kitchen",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675193c7506a40002c3192ef?alt=media",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Commodi necessitatibus perspiciatis quae labore!",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 1",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Title",
              value: "biker",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ca8fbd2970002c6294e0?alt=media&timestamp=1719584962578",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Praesentium cumque saepe dignissimos incidunt.",
            },
          ],
        },

        {
          type: "object",
          key: "items1",
          displayer: "Items 3",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Title",
              value: "Born Wild",
            },
            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "05",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/677297550655f8002caea7ff?alt=media",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Impedit ad animi quae nobis voluptate! Rerum, enim.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));

    this.setComponentState("active_index", 0);
    this.setComponentState("text", this.castToObject<SliderItem[]>("slider")[0].text);
    this.setComponentState("text_visibility", true);
  }

  static getName(): string {
    return "Slider 2";
  }

  render() {
    const slider = this.castToObject<SliderItem[]>("slider");
    const isOverlayActive = this.getPropValue("overlay");
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      infinite: slider.length > 2,
      speed: 1000,
      variableWidth: true,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      centerMode: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (_: number, nextSlide: number) => {
        const sliderData = this.castToObject<SliderItem[]>("slider");
        const nextSlideData = sliderData[nextSlide];

        this.setComponentState("active_index", nextSlide);
        this.setComponentState("text_visibility", false);
        setTimeout(() => {
          this.setComponentState("text_visibility", true);
          this.setComponentState("text", nextSlideData?.text);
        }, 200);
      },
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-box")}>
            {isOverlayActive && <div className={this.decorateCSS("image-overlay")}></div>}
            <div className={this.decorateCSS("overlay")}>
              {this.castToObject<SliderItem[]>("slider").map((slide, index) => {
                const isActive = this.getComponentState("active_index") === index;
                return (
                  slide.media && (
                    <Base.Media
                      key={index}
                      value={slide.media}
                      className={`
                      ${this.decorateCSS("image")} 
                      ${isActive && this.decorateCSS("active")}`}
                    />
                  )
                );
              })}
            </div>
          </div>
          {this.getComponentState("text") && (
            <div className={this.decorateCSS("text-box")}>
              <div className={this.decorateCSS("decorator-line")}></div>
              <Base.P
                className={`${this.decorateCSS("text")} 
              ${this.getComponentState("text_visibility") && this.decorateCSS("visible")}`}
              >
                {this.getComponentState("text")}
              </Base.P>
            </div>
          )}
          <div className={this.decorateCSS("carousel-wrapper")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
            {this.castToObject<SliderItem[]>("slider").map((item: SliderItem, indexSlider: number) => {
              const isActive = this.getComponentState("active_index") === indexSlider;

              return (
                <div key={indexSlider} className={this.decorateCSS("card")}>
                  <div
                    className={this.decorateCSS("button-wrapper")}
                    onMouseOver={() => {
                      const isIndexSame = this.getComponentState("active_index") === indexSlider;
                      if (isIndexSame) return;

                      this.setComponentState("active_index", indexSlider);
                      this.setComponentState("text_visibility", false);
                      setTimeout(() => {
                        this.setComponentState("text_visibility", true);
                        this.setComponentState("text", item.text);
                      }, 200);
                    }}
                  >
                    <ComposerLink key={indexSlider} path={item.path}>
                      <div className={this.decorateCSS("link-wrapper")}>
                        {this.castToString(item.number) && <Base.P className={this.decorateCSS("number")}>{item.number}</Base.P>}
                        {this.castToString(item.button) && <div className={`${this.decorateCSS("title-text")} ${isActive && this.decorateCSS("active")}`}>{item.button}</div>}
                      </div>
                    </ComposerLink>
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

export default Slider2;
