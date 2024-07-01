import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

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
    };
    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider-style")}
            >
              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div key={`tsm-7-${index}`}>
                    <div className={this.decorateCSS("card")}>
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
                  </div>
                )
              )}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials7Page;
