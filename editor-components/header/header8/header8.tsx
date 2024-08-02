import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  topWriting: string;
};


let words;
function AnimatedText({ children, mode, animationStarted, randomizedFontSize }: any) {
    const [wordArray, setWordArray] = React.useState([]);
    const [fontSizeArray, setFontSizeArray] = React.useState([]);
    const [_animationStarted, set_animationStarted] = React.useState(false);
    React.useEffect(() => {
        words = children.split("");
        setWordArray(words)
        if (randomizedFontSize && randomizedFontSize.hasOwnProperty("max")) {
            let fontSizes = words.map(() => randomizedFontSize.min + (Math.random() * (randomizedFontSize.max - randomizedFontSize.min)));
            setFontSizeArray(fontSizes);
        }
    }, [])

    React.useEffect(() => {
      if(animationStarted){
        setTimeout(() => {
          set_animationStarted(true);
        }, 30);
      }
      else{
        set_animationStarted(false);
      }
    }, [animationStarted])

    return (
        <div className={styles['wrapper'] + " " + styles["wrapper--" + mode]}>
            {wordArray.map((letter, index) => <div key={"letter" + index} style={{ fontSize: `${fontSizeArray[index]}rem` }} className={styles['letter'] + " " + (_animationStarted && styles['wrapper--activated'])}>{letter}</div>)}
        </div>
    );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick, customOnClick } = props;
  return (
    <div
      className={className + " " + styles["arrow-next"]}
      style={{ ...style }}
      onClick={() => {
        onClick();
        customOnClick();
      }}
    ></div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick, customOnClick } = props;
  return (
    <div
      className={className + " " + styles["arrow-prev"]}
      style={{ ...style }}
      onClick={() => {
        onClick();
        customOnClick();
      }}
    ></div>
  );
}
//CLASS
class Header8 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PRODUCT, VOICE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maybe Speaker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e9?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PEN",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Yaren Collection",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "SYMBOLS THROUGH WHICH EXPRESS THEMSELVES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PRODUCT, VOICE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maybe Speaker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e9?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PRODUCT, VOICE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maybe Speaker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66618083bd2970002c6245e8?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    });

    this.setComponentState("prevIndex", 1)
    this.setComponentState("currentIndex", 1);
  }

  getName(): string {
    return "Header 8";
  }

  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("prevIndex", this.getComponentState("currentIndex"))
    this.setComponentState("currentIndex", slideIndex);
  }

  render() {
    let currentSlide = this.getComponentState("currentIndex");
    let slideCount = this.castToObject<ISliderData[]>("slider").length;

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: (
        <SamplePrevArrow
          customOnClick={() => {
            this.changeCurrentSlide(
              currentSlide - 1 < 1 ? slideCount : currentSlide - 1
            );
          }}
        />
      ),
      nextArrow: (
        <SampleNextArrow
          customOnClick={() => {
            this.changeCurrentSlide(
              currentSlide + 1 > slideCount ? 1 : currentSlide + 1
            );
          }}
        />
      ),
    };

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
          {this.castToObject<ISliderData[]>("slider").map(
            (item: ISliderData, index: number) => (
              <div
                className={
                  this.decorateCSS("slide") +
                  " " +
                  (currentSlide == index + 1 && this.decorateCSS("active"))
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={this.decorateCSS("image")}
                />
              </div>
            )
          )}
        </ComposerSlider>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("pagination")}>
            <div className={this.decorateCSS("current-page")}>
              {currentSlide}
            </div>
            <div className={this.decorateCSS("slash")}> / </div>
            <div className={this.decorateCSS("total-page")}>{slideCount}</div>
          </div>
          {this.castToObject<ISliderData[]>("slider").map(
            (item: ISliderData, index: number) => (
              <div className={this.decorateCSS("info-box") + " " + (currentSlide == index + 1 && this.decorateCSS("active"))}>
                <div className={this.decorateCSS("tag")}>{item.topWriting}</div>
                <div className={this.decorateCSS("title")}><AnimatedText mode={(this.getComponentState("prevIndex") <= this.getComponentState("currentIndex")) ? "to_right" : "to_left"} animationStarted={currentSlide == index + 1}>{this.castToString(item.title as any)}</AnimatedText></div>
                <div className={this.decorateCSS("description")}>
                  {item.description}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Header8;
