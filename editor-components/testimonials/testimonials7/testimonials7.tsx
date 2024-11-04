import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
  name: string;
  nameId: string;
  description: string;
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
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
        isFull={true}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
            <ComposerSlider
              ref={sliderRef}
              {...settings}
              className={this.decorateCSS("slider-style")}
            >
              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div className={this.decorateCSS("card")}>
                    {this.getPropValue("prevIcon") && (
                      <button onClick={() => {
                        sliderRef.current.slickPrev();
                      }} className={this.decorateCSS("button")}>
                        <ComposerIcon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("prev-arrow") }}></ComposerIcon>
                      </button>
                    )}
                    <div className={this.decorateCSS("item-content")}>
                      <span className={this.decorateCSS("item-description")}>
                        {item.description}
                      </span>
                      <div className={this.decorateCSS("profile")}>
                        <div className={this.decorateCSS("profile-text")}>
                          <h2 className={this.decorateCSS("item-name")}>
                            {item.name}
                          </h2>

                          <p className={this.decorateCSS("item-name-id")}>
                            {item.nameId}
                          </p>
                        </div>

                        <img
                          src={item.image}
                          alt={item.name}
                          className={this.decorateCSS("image")}
                        />
                      </div>
                    </div>
                    {this.getPropValue("nextIcon") && (
                      <button onClick={() => {
                        sliderRef.current.slickPrev();
                      }} className={this.decorateCSS("button")}>
                        <ComposerIcon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("prev-arrow") }}></ComposerIcon>
                      </button>
                    )}
                  </div>
                )
              )}
            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials7Page;
