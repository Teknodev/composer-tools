import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header27.module.scss";
import Slider from "react-slick";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ISliderData = {
  background: string;
  title1: string;
  title2: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  itemNo: string;
  itemDesc: string;
  customerNo: string;
  customerDesc: string;
  leftDescription: string;
  rightDescription: string;
  button: any;
};

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

class Header27 extends BaseHeader {
  getName(): string {
    return "Header 27";
  }
  constructor(props?: any) {
    super(props, styles);


    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b33adc03b007002cc7ed8d?alt=media",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title1",
              value: "COFFEE",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title2",
              value: "VERSE",
            },
            {
              type: "image",
              displayer: "Image 1",
              key: "image2",
              value:
                "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "image",
              displayer: "Image 2",
              key: "image1",
              value:
                "https://media.istockphoto.com/id/1503772186/tr/foto%C4%9Fraf/cups-of-assorted-coffee-on-light-background.jpg?s=612x612&w=0&k=20&c=V9JNNlMkgAMZlAtNO6u4hGiydn8Y1oJUEiUWBXaNC_k=",
            },
            {
              type: "image",
              displayer: "Image 3",
              key: "image3",
              value:
                "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "image",
              displayer: "Image 4",
              key: "image4",
              value:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
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
                  value: "Explore",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
                {
                  type: "icon",
                  key: "exploreIcon",
                  displayer: "Explore Icon",
                  value: "MdOutlineArrowOutward",
                },
              ],
            },
            {
              type: "string",
              displayer: "Left Description",
              key: "leftDescription",
              value:
                "Refresh yourself with our Cold Brew Cool, a smooth and invigorating option brewed to perfection for a chilled coffee experience.",
            },
            {
              type: "string",
              displayer: "Rate No. 1",
              key: "itemNo",
              value: "30+",
            },
            {
              type: "string",
              displayer: "Rate Desc. 1",
              key: "itemDesc",
              value: "Items Of Coffee",
            },
            {
              type: "string",
              displayer: "Rate No. 2",
              key: "customerNo",
              value: "3K+",
            },
            {
              type: "string",
              displayer: "Rate Desc. 2",
              key: "customerDesc",
              value: "Happy Customer",
            },
            {
              type: "string",
              displayer: "Right Description",
              key: "rightDescription",
              value:
                "Experience the purity of our Organic Fair Trade coffee, ethically sourced and meticulously roasted to bring out the best in every bean.",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b33adc03b007002cc7ed8d?alt=media",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title1",
              value: "SPECIAL",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title2",
              value: "TASTE",
            },
            {
              type: "image",
              displayer: "Image 1",
              key: "image2",
              value:
                "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "image",
              displayer: "Image 2",
              key: "image1",
              value:
                "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "image",
              displayer: "Image 3",
              key: "image3",
              value:
                "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "image",
              displayer: "Image 4",
              key: "image4",
              value:
                "https://plus.unsplash.com/premium_photo-1669374537810-f88d8ad82818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
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
                  value: "Read More",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
                {
                  type: "icon",
                  key: "exploreIcon",
                  displayer: "Explore Icon",
                  value: "MdOutlineArrowOutward",
                },
              ],
            },
            {
              type: "string",
              displayer: "Left Description",
              key: "leftDescription",
              value:
                "Indulge in the bold, rich flavor of our Classic Espresso. Perfect for those who appreciate a traditional, robust coffee experience.",
            },
            {
              type: "string",
              displayer: "Rate No. 1",
              key: "itemNo",
              value: "100%",
            },
            {
              type: "string",
              displayer: "Rate Desc. 1",
              key: "itemDesc",
              value: "Fresh Coffee",
            },
            {
              type: "string",
              displayer: "Rate No. 2",
              key: "customerNo",
              value: "20+",
            },
            {
              type: "string",
              displayer: "Rate Desc. 2",
              key: "customerDesc",
              value: "Different Countries",
            },
            {
              type: "string",
              displayer: "Right Description",
              key: "rightDescription",
              value:
                "Enjoy the balanced taste of our Smooth Medium Roast, offering a harmonious blend of mellow flavors with a subtle hint of sweetness.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type:"boolean",
      key:"buttonAnimation",
      displayer:"Button Animation",
      value:true,
    })

    

    this.setComponentState("active-index", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("slider-ref", "--animate-duration");
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

    const buttonAnimationEnabled = this.getPropValue("buttonAnimation");

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      fade: true,
      speed: 700,
      autoplay: true,
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
        }, 100);
      },
    };

    const slider = this.castToObject<ISliderData[]>("slider");
    const sliderCount = slider.length;

    return (
      <div className={this.decorateCSS("container")}>
        <div
          className={this.decorateCSS("content")}
          style={{
            backgroundImage: `url(${slider[this.getComponentState("active-index")].background})`,
          }}
        >
          <div className={this.decorateCSS("slider-parent")}>
            <Slider {...settings} className={this.decorateCSS("carousel")}>
              {slider.map((item: ISliderData, index: number) => {
                return (
                  <div key={index} className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("max-content")}>
                      <div className={this.decorateCSS("UpperDiv")}>
                        <div className={this.decorateCSS("top-title")}>
                          <div className={this.decorateCSS("title1")}>{item.title1}</div>

                          {item.image2 && (
                            <div className={this.decorateCSS("viewImage")}>
                              <img className={this.decorateCSS("image1")} src={item.image2} />
                            </div>
                          )}
                        </div>

                        <div className={this.decorateCSS("bottom-title")}>
                          {item.image1 && (
                            <div className={this.decorateCSS("viewImage")}>
                              <img className={this.decorateCSS("image2")} src={item.image1} />
                            </div>
                          )}
                          {item.image3 && (
                            <div className={this.decorateCSS("viewImage")}>
                              <img className={this.decorateCSS("image3")} src={item.image3} />
                            </div>
                          )}
                          {item.image4 && (
                            <div className={this.decorateCSS("viewImage")}>
                              <img className={this.decorateCSS("image4")} src={item.image4} />
                            </div>
                          )}
                          <div className={this.decorateCSS("title2")}>{item.title2}</div>
                        </div>
                      </div>

                      <div className={this.decorateCSS("LowerDiv")}>
                        <div className={this.decorateCSS("button-contain")}>
                          {this.castToString(item.button.buttonText) && (
                            <ComposerLink path={item.button.link}>
                              <button
                                className={`${this.decorateCSS("button")} ${
                                  buttonAnimationEnabled ?
                                 "animate__animated" : "" } ${this.getComponentState(
                                  "buttonAnimationClass"
                                )}`}
                                onAnimationEnd={() => {
                                  this.handleAnimationEnd({
                                    animationState: "buttonAnimationClass",
                                    startingAnimation: "animate__fadeInUp",
                                    endingAnimation: "animate__fadeOutDown",
                                  });
                                }}
                              >
                                <span className={this.decorateCSS("button-text")}>
                                  {item.button.buttonText}
                                </span>
                                <ComposerIcon
                                  name={item.button.exploreIcon}
                                  propsIcon={{
                                    className: ``,
                                    size: 10,
                                  }}
                                />
                              </button>
                            </ComposerLink>
                          )}

                          <div className={this.decorateCSS("figure")}>
                            <div className={this.decorateCSS("pagination")}>
                              <span className={this.decorateCSS("active-slide")}>
                                {(this.getComponentState("active-index") + 1)
                                  .toString()
                                  .padStart(2, "0")}
                              </span>
                              <sup className={this.decorateCSS("slide-count-power")}>
                                <span className={this.decorateCSS("divider")}>/ </span>
                                <span className={this.decorateCSS("slide-count")}>
                                  {sliderCount.toString().padStart(2, "0")}
                                </span>
                              </sup>
                            </div>
                          </div>
                        </div>
                        <div className={this.decorateCSS("desc-contain")}>
                          <div className={this.decorateCSS("leftDescription")}>
                            {item.leftDescription}
                          </div>

                          <div className={this.decorateCSS("count")}>
                            <div className={this.decorateCSS("items")}>
                              <div className={this.decorateCSS("itemsNo")}>{item.itemNo}</div>
                              <div className={this.decorateCSS("itemDesc")}>{item.itemDesc}</div>
                            </div>
                            <div className={this.decorateCSS("line")}></div>

                            <div className={this.decorateCSS("customers")}>
                              <div className={this.decorateCSS("customerNo")}>
                                {item.customerNo}
                              </div>
                              <div className={this.decorateCSS("customerDesc")}>
                                {item.customerDesc}
                              </div>
                            </div>
                          </div>
                          <div className={this.decorateCSS("rightDescription")}>
                            {item.rightDescription}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Header27;
