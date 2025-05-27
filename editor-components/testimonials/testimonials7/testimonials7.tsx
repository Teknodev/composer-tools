import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";


type Item = {
  image: string;
  name: React.JSX.Element;
  nameId: React.JSX.Element;
  description: React.JSX.Element;
};
class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617330bd2970002c623799?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev Icon",
      value: "HiArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Icon",
      value: "HiArrowRight",
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
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623790?alt=media&timestamp=1719483639150",
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
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623791?alt=media&timestamp=1719483639150",
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
              value: "'“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”'",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623792?alt=media&timestamp=1719483639150",
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

  static getName(): string {
    return "Testimonials 7";
  }

  render() {
    const settings = {
      dots: false,
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
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
        className={`${this.decorateCSS("container")}  ${!this.getPropValue("cover-image") && this.decorateCSS("container-no-image")}`}
        isFull={this.getPropValue("cover-image") ? true : false}
      >
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!this.getPropValue("cover-image") && this.decorateCSS("max-content-no-image")}`}>
          {this.getPropValue("cover-image") && <img src={this.getPropValue("cover-image")} className={this.decorateCSS("background-image")} />}
          <div className={`${this.decorateCSS("testimonials7")} ${!this.getPropValue("cover-image") && this.decorateCSS("testimonials7-no-image")}`}>
            <div className={`${this.decorateCSS("slider-wrapper")} ${!this.getPropValue("cover-image") && this.decorateCSS("slider-wrapper-no-image")}`}>
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("slider-style")}>
                {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => (
                  <div
                    className={(() => {
                      const hasCoverImage = this.getPropValue("cover-image");
                      const hasPrevIcon = this.getPropValue("prevIcon");
                      const hasNextIcon = this.getPropValue("nextIcon");

                      if (!hasCoverImage) {
                        if (!hasPrevIcon && !hasNextIcon) {
                          return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-padding")}`;
                        } else if (!hasPrevIcon) {
                          return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-left")}`;
                        } else if (!hasNextIcon) {
                          return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-right")}`;
                        } else {
                          return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image")}`;
                        }
                      } else {
                        return this.decorateCSS("card");
                      }
                    })()}
                  >
                    {this.getPropValue("prevIcon") && (
                      <button
                        onClick={() => {
                          sliderRef.current.slickPrev();
                        }}
                        className={`${this.decorateCSS("button-left")} ${!this.getPropValue("cover-image") && this.decorateCSS("button-left-no-image")}`}
                      >
                        <Base.Icon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></Base.Icon>
                      </button>
                    )}
                    {(this.castToString(item.description) || item.image || this.castToString(item.name) || this.castToString(item.nameId)) && (
                      <Base.VerticalContent className={this.decorateCSS("item-content")}>
                        {this.castToString(item.description) && <Base.P className={`${this.decorateCSS("item-description")} ${!this.getPropValue("cover-image") && this.decorateCSS("item-description-no-image")}`}>{item.description}</Base.P>}
                        {(item.image || this.castToString(item.name) || this.castToString(item.nameId)) && (
                          <div className={this.decorateCSS("profile")}>
                            {item.image && <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />}
                            <Base.VerticalContent className={this.decorateCSS("profile-text")}>
                              {this.castToString(item.name) && <div className={`${this.decorateCSS("item-name")} ${!this.getPropValue("cover-image") && this.decorateCSS("item-name-no-image")}`}>{item.name}</div>}
                              {this.castToString(item.nameId) && <div className={`${this.decorateCSS("item-name-id")} ${!this.getPropValue("cover-image") && this.decorateCSS("item-name-id-no-image")}`}>{item.nameId}</div>}
                            </Base.VerticalContent>
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                    {this.getPropValue("nextIcon") && (
                      <button
                        onClick={() => {
                          sliderRef.current.slickNext();
                        }}
                        className={`${this.decorateCSS("button-right")} ${!this.getPropValue("cover-image") && this.decorateCSS("button-right-no-image")}`}
                      >
                        <Base.Icon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></Base.Icon>
                      </button>
                    )}
                  </div>
                ))}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials7Page;
