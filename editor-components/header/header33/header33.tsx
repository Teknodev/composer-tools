import * as React from "react";
import styles from "./header33.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type ISliderData = {
  image: string;
  title: string;
  button_text: string;
  button_link: string;
  rotate_icon: string;
};


class Header33 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "PiArrowLeftThin",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "PiArrowRightThin",
    });
    
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7a?alt=media&timestamp=1719502103059",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cloria by Wood",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "Shop Now",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
            {
              type: "image",
              key: "rotate_icon",
              displayer: "Image",
              value:
                "https://cdn.shopify.com/s/files/1/0866/7660/3164/files/slide-icon.png?v=1713321347",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7b?alt=media&timestamp=1719502103059",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kento - Chair",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "Shop Now",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
            {
              type: "image",
              key: "rotate_icon",
              displayer: "Image",
              value:
                "https://cdn.shopify.com/s/files/1/0866/7660/3164/files/slide-icon.png?v=1713321347",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667d85040181a1002c334c7c?alt=media&timestamp=1719502103058",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wooden Floor Lamp",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "Shop Now",
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: "",
            },
            {
              type: "image",
              key: "rotate_icon",
              displayer: "Image",
              value:
                "https://cdn.shopify.com/s/files/1/0866/7660/3164/files/slide-icon.png?v=1713321347",
            },
          ],
        },
      ],
    });

    this.setComponentState("prevIndex", 0);
    this.setComponentState("currentIndex", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-33";
  }

  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("prevIndex", this.getComponentState("currentIndex"));
    this.setComponentState("currentIndex", slideIndex);
  }

  render() {

    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOut");
        setTimeout(() => {
          this.changeCurrentSlide(newIndex);
        }, 1200);
      },
      afterChange: () => {
        this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
        this.setComponentState("titleAnimationClass", "animate__fadeInRight");
        this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
      }
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            ref={this.getComponentState("slider-ref")}
            className={this.decorateCSS("carousel")}
            >
            {this.castToObject<ISliderData[]>("slider").map(
              (item: ISliderData, index: number) => (
                <div
                  className={`${this.decorateCSS("content")} ${this.decorateCSS(
                    index === 1 ? "secondary-slide" : ""
                  )}`}
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={this.decorateCSS("image")}
                  />
                 <div className={this.decorateCSS("corousel-content-div")}>
                  <div className={this.decorateCSS("corousel-content")}>
                      <img
                        src={item.rotate_icon}
                        className={this.decorateCSS("rotate")}
                        alt=""
                      />
                      <h1 className={this.getComponentState("titleAnimationClass")}>
                        {item.title}
                      </h1>
                      <ComposerLink path={item.button_link}>
                      <button className={`${this.getComponentState("buttonAnimationClass")} ${styles.button}`}>
                          {item.button_text}
                        </button>
                      </ComposerLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </ComposerSlider>
          <div className={this.decorateCSS("page-bottom")}>
            <ComposerIcon
              name={this.getPropValue("prev_icon")}
              propsIcon={{
                className: `${this.decorateCSS("prev-icon")} ${styles["arrow-prev"]}`,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickPrev();
                },
              }}
            />
            <ComposerIcon
              name={this.getPropValue("next_icon")}
              propsIcon={{
                className: `${this.decorateCSS("next-icon")} ${styles["arrow-next"]}`,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickNext();
                },
              }}
            />
          </div>
            
        </div>
      </div>
    );
  }
}

export default Header33;