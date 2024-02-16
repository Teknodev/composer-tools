import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
  title: string;
  button: string;
  url: string;
  price: string;
};

class Slider7 extends BaseSlider {
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
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Shoes",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://media.kasperskydaily.com/wp-content/uploads/sites/91/2020/07/29175415/black-hat-2020-preview-featured.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Hat",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://www.coats.com/-/media/Coats/End-Use/Apparel/Denim-jeans/Apparel---Denim-Leatherwear-Jeans.jpg?rev=-1&width=600&height=460&op=crop",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jeans",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff8%2F4e%2Ff84e2723ed2403d919da56c3b122cc5912775f7e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jacket",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71hEk2CbglL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "T-Shirt",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://cdna.artstation.com/p/marketplace/presentation_assets/000/453/366/large/file.jpg?1595068728",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sunglasses",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button Text",
              value: "Buy Now",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Slider 7";
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          >
            {this.castToObject<Card[]>("slider").map(
              (item: Card, indexSlider: number) => (
                <div key={indexSlider} className={this.decorateCSS("card")}>
                  <img
                    src={item.image}
                    className={this.decorateCSS("img")}
                    alt=""
                  />
                  <h1 className={this.decorateCSS("item-title")}>
                    {item.title}
                  </h1>
                  <div className={this.decorateCSS("button")}>
                    <div className={this.decorateCSS("button-text")}>
                      <ComposerLink path={item.url}>{item.button}</ComposerLink>
                    </div>
                    <h2 className={this.decorateCSS("item-price")}>
                      {item.price}
                    </h2>
                  </div>
                </div>
              )
            )}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Slider7;
