import * as React from "react";
import styles from "./header17.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";

type ISliderData = {
  title: JSX.Element;
  image: string;
  description: JSX.Element;
  buttonText: JSX.Element;
  buttonUrl: string;
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d54?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "buttonText",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonUrl",
              value: "",
            },
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d53?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "buttonText",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonUrl",
              value: "",
            },
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d52?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "buttonText",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonUrl",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-17";
  }

  render() {
    const settings = {
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    const slider = this.castToObject<ISliderData[]>("slider");
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")} className={this.decorateCSS("carousel")}>
          {slider.map((item: ISliderData, index: number) => {
            const image = item.image;
            const buttonExist = this.castToString(item.buttonText);
            const cardExist = !!(this.castToString(item.title) || this.castToString(item.description));
            const sliderExist = !!(this.castToString(item.buttonText) || this.castToString(item.title) || this.castToString(item.description) || image);
            return (
              sliderExist && (
                <div className={this.decorateCSS("slider-content")} key={`key${index}`}>
                  {image && <img src={item.image} alt="" className={this.decorateCSS("bg-img")} />}
                  <Base.Container className={this.decorateCSS("sub-container")}>
                    <Base.MaxContent className={this.decorateCSS("sub-content")}>
                      {cardExist && (
                        <div className={`${this.decorateCSS("card")} ${!image && this.decorateCSS("card-without-image")}`}>
                          <Base.H5 className={`${this.decorateCSS("title")} ${!image && this.decorateCSS("title-without-image")}`}>{item.title}</Base.H5>
                          <Base.H5 className={`${this.decorateCSS("description")} ${!image && this.decorateCSS("description-without-image")}`}>{item.description}</Base.H5>
                        </div>
                      )}
                      {buttonExist && (
                        <ComposerLink path={item.buttonUrl}>
                          <Base.Button className={this.decorateCSS("button")}>{item.buttonText}</Base.Button>
                        </ComposerLink>
                      )}
                    </Base.MaxContent>
                  </Base.Container>
                  <ComposerIcon
                    name={this.getPropValue("next_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("next-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`,
                      size: 40,
                      onClick: () => {
                        this.getComponentState("slider-ref").current.slickNext();
                      },
                    }}
                  />
                  <ComposerIcon
                    name={this.getPropValue("prev_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("prev-icon")} ${!image && this.decorateCSS("slider-icon-without-image")}`,
                      size: 40,
                      onClick: () => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      },
                    }}
                  />
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
