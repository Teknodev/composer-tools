import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
  name: JSX.Element;
  nameId: JSX.Element;
  description: JSX.Element;
};
class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617330bd2970002c623799?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev Icon",
      value:
        "FaArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Icon",
      value:
        "FaArrowRight",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value:
                " 'Our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with'.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623790?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Tomas Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value:
                " 'Our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with'.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623791?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Monica Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value:
                " 'Our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with'.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623792?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Linda Anderson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  getName(): string {
    return "Testimonials 7";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
      responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: true,
          },
        },
      ],
    };
    const sliderRef = this.getComponentState("slider-ref");
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.getPropValue("cover-image") && (
            <img src={this.getPropValue("cover-image")} className={this.decorateCSS("background-image")} />
          )}
          <div className={this.decorateCSS("testimonials7")}>
            {this.getPropValue("prevIcon") && (
              <button onClick={() => {
                sliderRef.current.slickPrev();
              }} className={this.decorateCSS("button-left")}>
                <ComposerIcon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></ComposerIcon>
              </button>
            )}
            <ComposerSlider
              ref={sliderRef}
              {...settings}
              className={this.decorateCSS("slider-style")}
            >

              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div className={this.decorateCSS("card")}>
                    <Base.VerticalContent className={this.decorateCSS("item-content")}>
                      {this.castToString(item.description) && (
                        <div className={this.decorateCSS("item-description")}>
                          {item.description}
                        </div>
                      )}
                      <div className={this.decorateCSS("profile")}>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.image}
                            className={this.decorateCSS("image")}
                          />
                        )}
                        <Base.VerticalContent className={this.decorateCSS("profile-text")}>
                          {this.castToString(item.name) && (
                            <div className={this.decorateCSS("item-name")}>
                              {item.name}
                            </div>
                          )}
                          {this.castToString(item.nameId) && (
                            <div className={this.decorateCSS("item-name-id")}>
                              {item.nameId}
                            </div>
                          )}
                        </Base.VerticalContent>

                      </div>
                    </Base.VerticalContent>
                  </div>
                )
              )}

            </ComposerSlider>
            {this.getPropValue("nextIcon") && (
              <button onClick={() => {
                sliderRef.current.slickPrev();
              }} className={this.decorateCSS("button-right")}>
                <ComposerIcon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></ComposerIcon>
              </button>
            )}
          </div>
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Testimonials7Page;
