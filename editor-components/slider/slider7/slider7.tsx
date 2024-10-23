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
  className : string;
  sliderRef: React.RefObject<any>;
}

// Next Arrow Component
const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { style, onClick, iconName, className, sliderRef } = props;

  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); 
    }
    if (onClick) {
      onClick(); 
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      <ComposerIcon name={iconName} />
    </div>
  );
};

// Prev Arrow Component
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { style, onClick, iconName, className, sliderRef } = props;

  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); 
    }
    if (onClick) {
      onClick(); 
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      <ComposerIcon name={iconName} />
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-D7nSqgT-_GE-unsplash.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/michael-demarco-oB0r-2a1QfE-unsplash-scaled.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/simone-hutsch-xlGKy9UokjQ-unsplash-1.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/messeplatz-cloudy-sky-basel-switzerland.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/metal-geometric-modern-building-scaled.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/vertical-shot-high-rise-exotic-skyscraper-blue-sky.jpg",
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
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/joel-filipe-PkE6yQwE-6Y-unsplash.jpg",
            },
          ],
        },
      ],
    }); 

    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "BsArrowLeft"
    });

    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "BsArrowRight"
    });
    
    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
    // window.addEventListener('keydown', this.handleKeyDown);

    
  }

  handleKeyDown = (event: KeyboardEvent) => {
    const sliderRef = this.getComponentState("slider-ref"); 
    if (sliderRef && sliderRef.current) { 
      if (event.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      } else if (event.key === "ArrowRight") {
        sliderRef.current.slickNext();
      }
    }
  };


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
    const cardNumber = String(3);
    const visibleItemCount = Math.min(items.length, 3);
    const sliderRef = this.getComponentState("slider-ref");

    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
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
            centerPadding: "60px",
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 1),
            slidesToScroll: 2,
            initialSlide: 2,
            centerPadding: "180px",
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: Math.min(visibleItemCount, 1),
            slidesToScroll: 1,
            infinite: true,
            centerPadding: "0px",
          }
        }
      ],
      centerPadding: "240px",
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      arrows: true,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("centerSlide", next);
      },
    };
    
    const carouselClass = cardNumber === "1" ? "carousel--singleCard" : "carousel--multipleCards";
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
        <SampleNextArrow iconName={this.getPropValue("nextArrow") as string} className = {this.decorateCSS('nextArrow')} sliderRef={sliderRef}/>
        <SamplePrevArrow iconName={this.getPropValue("previousArrow") as string} className={this.decorateCSS('prevArrow')} sliderRef={sliderRef} />
          {isCardExist ? (
            <ComposerSlider
              {...settings}
              className={`${this.decorateCSS("carousel")} ${this.decorateCSS(carouselClass)}`}
              ref={sliderRef}
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
