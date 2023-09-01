import Slider from "react-slick";
import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider8.module.scss";

type Card = {
  image: string;
  imagesubtitle: string;
  imagetitle: string;
  imagedescription: string;
};
class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Kevin E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "string",
              key: "imagedescription",
              displayer: "Image Description",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a124?alt=media&timestamp=1685526270154",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Alice R.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Marketing Specialist",
            },
            {
              type: "string",
              key: "imagedescription",
              displayer: "Image Description",
              value:
                "Working with this company has been an absolute pleasure. Their professionalism and attention to detail are unmatched. I highly recommend their services.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a122?alt=media&timestamp=1685526270154",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "John D.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Software Engineer",
            },
            {
              type: "string",
              key: "imagedescription",
              displayer: "Image Description",
              value:
                "I have been consistently impressed with the results achieved by this team. Their strategic approach and innovative ideas have greatly contributed to our marketing success.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a123?alt=media&timestamp=1685526270154",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Emily W.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Graphic Designer",
            },
            {
              type: "string",
              key: "imagedescription",
              displayer: "Image Description",
              value:
                "The product I purchased exceeded my expectations. It is well-designed, user-friendly, and has greatly improved my daily routine. I cannot recommend it enough.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a121?alt=media&timestamp=1685526270154",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column",
      value: true,
    });
  }
  getName(): string {
    return "Slider 8";
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}
          >
            <div className={this.decorateCSS("slider-parent")}>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={`sld-8-${index}`}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.image}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <h1 className={this.decorateCSS("first-header")}>
                            {item.imagesubtitle}
                          </h1>
                          <h3>{item.imagetitle}</h3>
                          <p>{item.imagedescription}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider8;
