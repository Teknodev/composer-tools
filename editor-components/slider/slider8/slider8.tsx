import Slider from "react-slick";
import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  url: string;
  button: string;
  imagesubtitle: string;
  imagetitle: string;
  imagedescription: string;
};

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
} 

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "FaArrowLeftLong",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "FaArrowRightLong",
    });

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "The Petronas Twin Towers",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/facade-modern-building-concept-with-glass-panels-with-straight-lines-by-day-copy-1.jpg",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW PROJECT →",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Multi-Family Housing",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architecture-3d-rendering-illustration-modern-minimal-house-with-natural-landscape-6.jpg",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW PROJECT →",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
            
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "The Lighthouse",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW PROJECT →",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "The Arches",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW PROJECT → ",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architectural-3d-rendering-illustration-modern-minimal-house-with-natural-landscape.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Riverside Residence",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/low-angle-red-geometrical-structure-blue-sky.jpg",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW PROJECT →",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Dream House",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/joel-filipe-PkE6yQwE-6Y-unsplash.jpg",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW PROJECT →",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.setComponentState(
      "prevSlide",
      this.castToObject<Card[]>("header").length - 1
    );
    this.setComponentState("active-index", 0);/* */
    this.setComponentState("titleAnimationClass", "animate__fadeInUp");
    //this.setComponentState("activeSlide", 0);
    //this.setComponentState("nextSlide", 1);
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");
    this.setComponentState("slider-ref", React.createRef());/* */

  }
  getName(): string {
    return "Slider 8";
  }

  handleAnimationEnd = ({
    animationState,
    startingAnimation,
    endingAnimation,
  }: IAnimationProps) => {
    if (this.getComponentState(animationState) === endingAnimation) {
      this.setComponentState(animationState, startingAnimation);
    }
  };
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOut");
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 1200);
      }
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("wrapper")}
          >
            <div className={this.decorateCSS("slider-parent")}>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={`sld-8-${index}`}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.image}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <h1 className={this.decorateCSS("first-header")}>
                            {item.imagesubtitle}
                          </h1>
                        
                        </div>
                        <div className={this.decorateCSS("")}>
                        <div className={this.decorateCSS("arrows")}>
                <div
                  className={this.decorateCSS("prev-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  }}
                >
                  <ComposerIcon
                    name={this.getPropValue("prev_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("prev-arrow-text")}
                  </span>
                </div>

                <div
                  className={this.decorateCSS("next-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickNext();
                  }}
                >
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("next-arrow-text")}
                  </span>
                  <ComposerIcon
                    name={this.getPropValue("next_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                </div>
              </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider8;
