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
        "https://wgl-demo.net/zium/wp-content/uploads/2022/02/home1_image_3-1.jpg",
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
              value: "https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-1-200x200.jpg",
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
              value: "https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-2-200x200.jpg",
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
              value: "https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-3-200x200.jpg",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
          <div
            className={this.decorateCSS("cover-image")}
            style={{
              backgroundImage: `url(${this.getPropValue("cover-image")})`,
            }}
            >
            <ComposerSlider {...settings}
             className={this.decorateCSS("slider-style")}
             >
              {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => (
                <div key={`tsm-7-${index}`}>
                  <section>
                    <div className={this.decorateCSS("card")}>
                      <span className={this.decorateCSS("item-description")}>{item.description}</span>
                      <div className={this.decorateCSS("profile")}>

                        <div className={this.decorateCSS("profile-text")}>
                          <h2 className={this.decorateCSS("item-name")}>{item.name}</h2>

                          <p className={this.decorateCSS("item-name-id")}>{item.nameId}</p>
                        </div>


                        <img width={50} height={50} src={item.image} alt={item.name} />
                      </div>

                    </div>
                  </section>
                </div>

              ))}

            </ComposerSlider>

          </div>
        </div>
      </div>
    </div>
    )

  }
}

export default Testimonials7Page;
