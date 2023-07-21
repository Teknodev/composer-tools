
import * as React from "react";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider4.module.scss";

class Slider4 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:"https://yunti.files.wordpress.com/2016/09/manzara_08_tam35-blogspot-com.jpg",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://galeri13.uludagsozluk.com/663/manzara-fotograflari_2145330.jpg",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://www.camhotel.com.tr/uploads/images/blog/manzara-fotograflari/kapadokya.jpg",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://www.dostkelimeler.com/wp-content/uploads/2016/07/Doga-manzara-resmi.jpg",
        },
      ],
    });
  }
  getName(): string {
    return "Slider 4";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("slider-parent")}
            
          >
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {this.getPropValue("slider").map((item: any, index: number) => (
                <img
                  src={item.value}
                  className={this.decorateCSS("img")}
                  key={`slider4-${index}`}
                />
              ))}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider4;
