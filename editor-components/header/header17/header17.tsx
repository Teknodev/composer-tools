import * as React from "react";
import styles from "./header17.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: React.JSX.Element;
  image: string;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Header17 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6823844d2bb4c4002cf57937?alt=media",
            },

            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "Primary"),
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6824a2832bb4c4002cf5e23e?alt=media",
            },

            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "Primary"),
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
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682384f22bb4c4002cf57950?alt=media",
            },

            INPUTS.BUTTON("button", "Button", "View Content", "", null, null, "Primary"),
          ],
        },
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Header 17";
  }

  render() {
    const slider = this.castToObject<ISliderData[]>("slider");

    const settings = {
      dots: slider.length > 1,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 1000,
      autoplay: true,
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
                  {image && <img src={item.image} alt="" className={this.decorateCSS("bg-img")} />}
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
                            {item.button.text}
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.MaxContent>
                  </Base.Container>
                  {slider.length > 1 && (
                    <Base.Icon
                      name={this.getPropValue("next_icon")}
                      propsIcon={{
                        className: `${this.decorateCSS("next-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`,
                        onClick: () => {
                          this.getComponentState("slider-ref").current.slickNext();
                        },
                      }}
                    />
                  )}
                  {slider.length > 1 && (
                    <Base.Icon
                      name={this.getPropValue("prev_icon")}
                      propsIcon={{
                        className: `${this.decorateCSS("prev-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`,
                        onClick: () => {
                          this.getComponentState("slider-ref").current.slickPrev();
                        },
                      }}
                    />
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

export default Header17;
