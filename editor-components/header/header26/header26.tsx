import * as React from "react";
import styles from "./header26.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HeaderComponent26 extends BaseHeader {
  
  private sliderRef: React.RefObject<any>;

  constructor(props?: any) {
    super(props, styles);

    this.sliderRef = React.createRef();
    
    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FOR THE ROAD",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "3d Visualisation",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f611?alt=media&timestamp=1719412135932",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FALLING IN LOVE",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "New illustrations",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f612?alt=media&timestamp=1719412135932",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ROCK ON ROCK",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "Design trends",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f613?alt=media&timestamp=1719412135932",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "JUST ONE MORE",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "Photography",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f614?alt=media&timestamp=1719412135932",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "up_icon",
      displayer: "Up icon",
      value: "IoIosArrowUp",
    });
    this.addProp({
      type: "icon",
      key: "down_icon",
      displayer: "Down icon",
      value: "IoIosArrowDown",
    }); 
  }

  getName(): string {
    return "Header-26";
  }

  handleBeforeChange = () => {
    const sliderClass = this.decorateCSS("sliders");
    if (this.sliderRef.current) {
      const slides = this.sliderRef.current.innerSlider.list.querySelectorAll(`.${sliderClass}`);
      slides.forEach((slide: HTMLElement) => {
        slide.classList.add(this.decorateCSS("shrink")); 
      });
    }
  };
  
  handleAfterChange = () => {
    const sliderClass = this.decorateCSS("sliders");
    if (this.sliderRef.current) {
      const slides = this.sliderRef.current.innerSlider.list.querySelectorAll(`.${sliderClass}`);
      slides.forEach((slide: HTMLElement) => {
        slide.classList.remove(this.decorateCSS("shrink")); 
      });
    }
  };
  

  handlePrevNextChange = () => {
    this.handleBeforeChange();
    setTimeout(() => {
      this.handleAfterChange();
    }, 1500); 
  };

  handlePrevClick = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
      this.handlePrevNextChange();
    }
  };

  handleNextClick = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
      this.handlePrevNextChange();
    }
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      draggable: true,
      vertical: true,
      verticalSwiping: true,
      beforeChange: this.handleBeforeChange,
      afterChange: this.handleAfterChange,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider {...settings} ref={this.sliderRef}>
            {this.castToObject<[]>("sliders").map((item: any, index: number) => (
              <div className={this.decorateCSS("sliders")} key={index}>
                <div className={this.decorateCSS("slider")}>
                  <div className={this.decorateCSS("left-side")}>
                    <h1 className={this.decorateCSS("title")}>{item.title}</h1>
                    <span className={this.decorateCSS("line")}></span>
                    <h1 className={this.decorateCSS("subtitle")}>{item.subtitle}</h1>
                    <div className={this.decorateCSS("arrows")}>
                    <div
                      className={this.decorateCSS("up-arrow")}
                      onClick={this.handlePrevClick}
                    >
                      <ComposerIcon name={this.getPropValue("up_icon")} />
                    </div>
                    <div
                      className={this.decorateCSS("down-arrow")}
                      onClick={this.handleNextClick}
                    >
                      <ComposerIcon name={this.getPropValue("down_icon")} />
                    </div>
                    </div>
                  </div>
                  <div className={this.decorateCSS("right-side")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={item.image}
                      alt="Slider Image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default HeaderComponent26;