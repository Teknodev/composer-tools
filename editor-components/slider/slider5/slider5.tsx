
import * as React from "react";
import { BaseSlider} from "../../EditorComponent";
import styles from "./slider5.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
};

class Slider5 extends BaseSlider {
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
              value: "https://mingitav.org.tr/upload/galeri/germany_nature_wide_1366x768.jpg",
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
              value: "https://www.dogandede.com/wp-content/uploads/2015/11/2MG_1727yk.jpg",
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
              value: "https://www.renklimoda.net/wp-content/uploads/2018/04/HD-Do%C4%9Fa-Manzara-Foto%C4%9Fraflar%C4%B1-2.jpg",
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
              value: "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
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
              value: "https://www.josephfiler.com/images/xl/Canada-Rockies-3652-Edit.jpg",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Slider 5";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("carousel")}>

          <ComposerSlider {...settings} >
            {this.castToObject<Card[]>("slider").map(
              (item: Card, index: number) => (
                <img src={item.image} key={index} alt=""/>
              )
            )}
          </ComposerSlider>
          </div>

        </div>
      </div>
    );
  }
}

export default Slider5;
