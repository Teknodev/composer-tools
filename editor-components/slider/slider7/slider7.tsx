import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  
};

interface ArrowProps {
  style?: React.CSSProperties;
  onClick?: () => void;
  iconName: string;
}


// Next Arrow Component
const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const {style, onClick, iconName } = props;
  return (
    <div
      style={{ ...style, display: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "10", color: "var(--composer-font-color-primary)", fontSize: "42px", right: "0"}}
      onClick={onClick}
    >
      <ComposerIcon  name={iconName} /> 
    </div>
  );
};

// Prev Arrow Component
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const {style, onClick, iconName } = props;
  return (
    <div
      style={{ ...style, display: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "10", color: "var(--composer-font-color-primary)", fontSize: "42px", left: "0"}}
      onClick={onClick}
    >
      <ComposerIcon  name={iconName} /> 
    </div>
  );
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30096?alt=media&timestamp=1719584962573",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30099?alt=media&timestamp=1719584962573",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30098?alt=media&timestamp=1719584962573",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd3009b?alt=media&timestamp=1719584962573",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd30097?alt=media&timestamp=1719584962573",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436c37468c3c2002cd3009a?alt=media&timestamp=1719584962573",
            },
          ],
        },
      ],
    }); 

    this.addProp({
      type: "number",
      key: "cardNumber",
      displayer: "Card Number",
      value: 5,
    });

    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "FaChevronLeft"
    });

    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "FaChevronRight"
    });
    
    this.setComponentState("centerSlide", 0);
  }

  getName(): string {
    return "Slider 7";
  }
  
  render() {
    
    const items = this.castToObject<Card[]>("slider").filter(
      (item: Card) => item.image
    );
    const isCardExist = items.length > 0;
    const nextArrow = this.getPropValue("nextArrow");
    const isNextArrowExist = this.castToString(nextArrow);
    const previousArrow = this.getPropValue("previousArrow");
    const isPreviousArrowExist = this.castToString(previousArrow);

    const cardNumber = this.getPropValue("cardNumber") as number;
    const visibleItemCount = Math.min(items.length, cardNumber);
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 3000,
      slidesToShow: visibleItemCount,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 3),
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 2),
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 1),
            slidesToScroll: 1
          }
        }
      ],
      
      centerPadding: '0px',
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      arrows: true,
      nextArrow: (
        <SampleNextArrow iconName={this.getPropValue("nextArrow") as string} />
      ),
      prevArrow: (
        <SamplePrevArrow iconName={this.getPropValue("previousArrow") as string} />
      ),
      beforeChange: (current: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
    };
    const carouselClass = cardNumber === 1 ? "carousel--singleCard" : "carousel--multipleCards";
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {isCardExist ? (
            <ComposerSlider
              {...settings}
              className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`}
            > 
              {items.map((item: Card, index: number) => (
                <div 
                  key={index} 
                  className={`${this.decorateCSS("card")} ${
                    this.getComponentState("centerSlide") === index && this.decorateCSS("centerSlide")
                  }`}
                >
                  <div className={this.decorateCSS("imgContainer")}>
                    <img
                      src={item.image}
                      className={this.decorateCSS("img")}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </ComposerSlider>
          ) : undefined}
        </div>
      </div>
    );
    
  }
  
}

export default Slider7;
