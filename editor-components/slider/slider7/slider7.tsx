import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider7.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';

type Card = {
  image: string;
  
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}


// Next Arrow Component
const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "50%", transform: "translateY(-50%)"}}
      onClick={onClick}
    >
      <img
        src= {rightArrow}
        alt="Next"
        style={{ width: "60px", height: "60px", position: "absolute", right: "30px", zIndex: "10", opacity: "75%"}} 
        
        />
    </div>
  );
};

// Prev Arrow Component
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute", top: "50%", transform: "translateY(-50%)", zIndex: "10" }}
      onClick={onClick}
    >
      <img 
        src={leftArrow} 
        alt="Previous" 
        style={{ width: "60px", height: "60px", position: "absolute", left: "30px", opacity: "75%"}} 
      />
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

    
    this.setComponentState("centerSlide", 0);

  }
  getName(): string {
    return "Slider 7";
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      centerPadding: '150px',
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (current: number, next: number) => {
        
        this.setComponentState("centerSlide", next);
        
      },
    };

    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            className={this.decorateCSS("carousel")}
          > 
            {this.castToObject<Card[]>("slider").map(
              (item: Card, index: number) => (
                
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
              )
            )}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Slider7;
