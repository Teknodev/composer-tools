import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider2.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
  title: string;
  button: string;
  url: string;
  number: string;
};

class Slider2 extends BaseSlider {
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
          displayer: "Items 0",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "Shoes",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://i.ytimg.com/vi/pvD1l2BmfrE/maxresdefault.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "items1",
          displayer: "Items 1",
          value: [
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "biker",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "http://clapat.ro/themes/grenada-wordpress/wp-content/uploads/2018/10/07hero.jpg",
            },
          ],
        },
        {
            type: "object",
            key: "items1",
            displayer: "Items 2",
            value: [
              {
                type: "string",
                key: "button",
                displayer: "Button",
                value: "gold man",
              },
              {
                type: "string",
                key: "number",
                displayer: "Number",
                value: "03",
              },
              {
                type: "image",
                key: "image",
                displayer: "Image",
                value: ";http://clapat.ro/themes/grenada-wordpress/wp-content/uploads/2018/10/04hero.jpg",
              },
            ],
          },
          {
            type: "object",
            key: "items1",
            displayer: "Items 3",
            value: [
              {
                type: "string",
                key: "button",
                displayer: "Button",
                value: "baseball",
              },
              {
                type: "string",
                key: "number",
                displayer: "Number",
                value: "04",
              },
              {
                type: "image",
                key: "image",
                displayer: "Image",
                value: "http://clapat.ro/themes/grenada-wordpress/wp-content/uploads/2018/10/04hero.jpg",
              },
            ],
          },
      ],
    });
    this.setActiveTab(0);
    this.setComponentState("image", this.castToObject<Card[]>("slider")[0].image)
  }


  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    },20)
  }

  
  getName(): string {
    return "Slider 2";
  }

  

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
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
            className={this.decorateCSS("carousel")}>
            {this.castToObject<Card[]>("slider").map(
              (item: Card, indexSlider: number) => (
                <div key={indexSlider} className={this.decorateCSS("card")}>
                  <button className={this.decorateCSS("button")} onMouseOver={()=>{
                    this.setComponentState("image", item.image)}}>
                      <p className={this.decorateCSS("number")}>{item.number}</p>
                    {item.button}
                  </button>
                </div>
              )
            )}
          </ComposerSlider>
          <div className={this.decorateCSS("image-box")}>
            <img src={this.getComponentState("image")} alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default Slider2;
