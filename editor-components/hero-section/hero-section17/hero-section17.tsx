import * as React from "react";
import styles from "./hero-section17.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: React.JSX.Element;
  image: TypeMediaInputValue;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  overlay: boolean;
};

class HeroSection17 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "prev_icon",
      displayer: "Prev Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "GrFormPrevious",
      },
    });
    this.addProp({
      type: "media",
      key: "next_icon",
      displayer: "Next Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "GrFormNext",
      },
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2023",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Scandinavian Style House",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d54?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2021",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Contemporary Style House",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d53?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2019",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Metal Facade Coatings",
            },
            {
              type: "media",
              displayer: "Image",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193ed63f1a2002c3c5b49?alt=media&timestamp=1719483666663",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "White"),
          ],
        },
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 17";
  }

  render() {
    const slider = this.castToObject<ISliderData[]>("slider");

    const settings = {
      dots: slider.length > 1,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 1000,
      autoplay: this.getPropValue("autoplay"),
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")} className={this.decorateCSS("carousel")}>
          {slider.map((item: ISliderData, index: number) => {
            const image = item.image;
            const buttonExist = this.castToString(item.button.text);
            const cardExist = !!(this.castToString(item.title) || this.castToString(item.description));
            const sliderExist = !!(this.castToString(item.button.text) || this.castToString(item.title) || this.castToString(item.description) || image);

            return (
              sliderExist && (
                <div className={this.decorateCSS("slider-content")} key={`key${index}`}>
                  {image && <Base.Media value={item.image} className={this.decorateCSS("bg-img")} autoPlay muted loop playsInline />}
                  {image && item.overlay && <div className={this.decorateCSS("overlay")} />}
                  <Base.Container className={this.decorateCSS("sub-container")}>
                    <Base.MaxContent className={this.decorateCSS("sub-content")}>
                      {cardExist && (
                        <div className={this.decorateCSS("card")}>
                          <Base.H5 className={this.decorateCSS("title")}>{item.title}</Base.H5>
                          <Base.H5 className={this.decorateCSS("description")}>{item.description}</Base.H5>
                        </div>
                      )}
                      {buttonExist && (
                        <ComposerLink path={item.button.url}>
                          <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.MaxContent>
                  </Base.Container>
                  {slider.length > 1 && (
                    <div
                      className={`${this.decorateCSS("next-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickNext();
                      }}
                    >
                      <Base.Media className={this.decorateCSS("icon")} value={this.getPropValue("next_icon") as TypeMediaInputValue} />
                    </div>
                  )}
                  {slider.length > 1 && (
                    <div
                      className={`${this.decorateCSS("prev-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      }}
                    >
                      <Base.Media className={this.decorateCSS("icon")} value={this.getPropValue("prev_icon") as TypeMediaInputValue} />
                    </div>
                  )}
                </div>
              )
            );
          })}
        </ComposerSlider>
      </div>
    );
  }
}

export default HeroSection17;

