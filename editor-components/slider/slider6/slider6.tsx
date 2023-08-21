
import * as React from "react";
import { BaseSlider} from "../../EditorComponent";
import styles from "./slider6.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
};

class Slider6 extends BaseSlider {
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
              value: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
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
              value: "https://cloudfront.slrlounge.com/wp-content/uploads/2020/06/best-landscape-photographers-to-follow-in-2020-1200x675.jpg",
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
              value: "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png",
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
              value: "https://media.istockphoto.com/id/1161769559/photo/panoramic-bird-view-of-antalya-and-mediterranean-seacoast-and-beach-with-a-paraglider-antalya.jpg?s=612x612&w=0&k=20&c=BtpqGt8GwIu66v49mKIkh17yTd3FPyAOmPORB-L6zt0=",
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
              value: "https://media.macphun.com/img/uploads/customer/blog/504/15360610955b8e6ea7f25e68.76685947.jpg?q=85&w=1680",
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
              value: "https://img2.goodfon.com/wallpaper/nbig/5/60/nature-landscape-gory-vesna-2540.jpg",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Slider 6";
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
            {this.castToObject<Card[]>("slider").map(
              (item: Card, index: number) => (
                <img
                  src={item.image}
                  className={this.decorateCSS("img")}
                  key={index}
                />
              )
            )}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Slider6;
