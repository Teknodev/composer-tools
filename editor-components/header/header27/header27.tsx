import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header27.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type SliderItemType = {
  background: string;
  headerItemArray: {
    upTitle: string;
    downTitle: string;
    upImage: string;
    imageArray: {
      downImage: string;
    }[];
  }[];
  middleItemArray: {
    itemNo: JSX.Element;
    itemDesc: JSX.Element;
    customerNo: JSX.Element;
    customerDesc: JSX.Element;
    leftDescription: string;
    rightDescription: string;
    buttonObject: {
      buttonText: JSX.Element;
      buttonLink: JSX.Element;
      buttonIcon: string;
    };
  }[];
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b5c2693292c6002b237b7c?alt=media",
            },
            {
              type: "array",
              key: "headerItemArray",
              displayer: "Header Content Items",
              value: [
                {
                  type: "object",
                  displayer: "Header Content Items",
                  key: "headerContent",
                  value: [
                    {
                      type: "string",
                      displayer: "Title",
                      key: "upTitle",
                      value: "COFFEE",
                    },

                    {
                      type: "string",
                      displayer: "Title",
                      key: "downTitle",
                      value: "VERSE",
                    },
                    {
                      type: "image",
                      displayer: "Up Image",
                      key: "upImage",
                      value:
                        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    },
                    {
                      type: "array",
                      key: "imageArray",
                      displayer: "Down Images",
                      value: [
                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [
                            {
                              type: "image",
                              displayer: "Down Image 1",
                              key: "downImage",
                              value:
                                "https://media.istockphoto.com/id/1503772186/tr/foto%C4%9Fraf/cups-of-assorted-coffee-on-light-background.jpg?s=612x612&w=0&k=20&c=V9JNNlMkgAMZlAtNO6u4hGiydn8Y1oJUEiUWBXaNC_k=",
                            },
                          ],
                        },

                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [
                            {
                              type: "image",
                              displayer: "Down Image 2",
                              key: "downImage",
                              value:
                                "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [

                            {
                              type: "image",
                              displayer: "Down Image 3",
                              key: "downImage",
                              value:
                                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "array",
              key: "middleItemArray",
              displayer: "Middle Content Items",
              value: [
                {
                  type: "object",
                  displayer: "Middle Content Items",
                  key: "middleContent",
                  value: [
                    {
                      type: "object",
                      key: "buttonObject",
                      displayer: "Button Items",
                      value: [
                        {
                          type: "string",
                          key: "buttonText",
                          displayer: "Button Text",
                          value: "Explore",
                        },
                        {
                          type: "page",
                          key: "buttonLink",
                          displayer: "Link",
                          value: "",
                        },
                        {
                          type: "icon",
                          key: "buttonIcon",
                          displayer: "Icon",
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
                      value: "3k+",
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
              ]
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b5c2693292c6002b237b7c?alt=media",
            },
            {
              type: "array",
              key: "headerItemArray",
              displayer: "Header Content Items",
              value: [
                {
                  type: "object",
                  displayer: "Header Content Items",
                  key: "headerContent",
                  value: [
                    {
                      type: "string",
                      displayer: "Title",
                      key: "upTitle",
                      value: "SPECIAL",
                    },

                    {
                      type: "string",
                      displayer: "Title",
                      key: "downTitle",
                      value: "TASTE",
                    },
                    {
                      type: "image",
                      displayer: "Up Image",
                      key: "upImage",
                      value:
                        "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    },
                    {
                      type: "array",
                      key: "imageArray",
                      displayer: "Down Images",
                      value: [
                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [
                            {
                              type: "image",
                              displayer: "Down Image 1",
                              key: "downImage",
                              value:
                                "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [
                            {
                              type: "image",
                              displayer: "Down Image 2",
                              key: "downImage",
                              value:
                                "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "images",
                          displayer: "Images",
                          value: [
                            {
                              type: "image",
                              displayer: "Down Image 3",
                              key: "downImage",
                              value: 
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/670792d497fe08002c74f4a3?alt=media",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "array",
              key: "middleItemArray",
              displayer: "Middle Content Items",
              value: [
                {
                  type: "object",
                  displayer: "Middle Content Items",
                  key: "middleContent",
                  value: [
                    {
                      type: "object",
                      key: "buttonObject",
                      displayer: "Button Items",
                      value: [
                        {
                          type: "string",
                          key: "buttonText",
                          displayer: "Button Text",
                          value: "Read More",
                        },
                        {
                          type: "page",
                          key: "buttonLink",
                          displayer: "Button Link",
                          value: "",
                        },
                        {
                          type: "icon",
                          key: "buttonIcon",
                          displayer: "Icon",
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
              ]
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "buttonAnimation",
      displayer: "Button Animation",
      value: true,
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
    const slider = this.castToObject<SliderItemType[]>("slider");
    const sliderCount = slider.length;
    const buttonAnimationEnabled = this.getPropValue("buttonAnimation");

    const settings = {
      dots: true,
      arrows: false,
      infinite: sliderCount > 1,
      fade: sliderCount > 1,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: Math.min(sliderCount, 1),
      slidesToScroll: 1,
      vertical: sliderCount > 1,
      verticalSwap: sliderCount > 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        this.setComponentState("buttonAnimationClass", "animate__fadeOutDown");
        this.setComponentState("titleAnimationClass", "animate__fadeOutDown");
        this.setComponentState("descriptionAnimationClass", "animate__fadeOut");
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };


    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${slider[this.getComponentState("active-index")].background})`,
        }}
      >
        <div className={this.decorateCSS("content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {slider.map((item: SliderItemType, sliderIndex: number) => {
                return (
                  <div key={sliderIndex} className={this.decorateCSS("max-content")}>
                    {item.headerItemArray.map((headerItem, headerIndex: number) => {
                      return (
                        <React.Fragment key={headerIndex}>
                          <div className={this.decorateCSS("upperDiv")}>
                            <div className={this.decorateCSS("uppderDiv-content")}>
                              <div className={this.decorateCSS("upTitle-container")}>
                                <h3 className={this.decorateCSS('upTitle')}>{headerItem.upTitle}</h3>
                              </div>
                              <div className={this.decorateCSS("upImage-container")}>
                                <img className={this.decorateCSS("upImage")} src={headerItem.upImage} />
                              </div>
                            </div>
                          </div>

                          <div className={this.decorateCSS("middleDiv")}>
                            <div className={this.decorateCSS("middleDiv-content")}>
                              <div className={this.decorateCSS("middleImages-container")}>
                                {headerItem.imageArray.map((imageItems, imageIndex: number) => {
                                  return (
                                    imageItems.downImage && (
                                      <div
                                        className={this.decorateCSS("image-wrapper")}
                                        style={{
                                          width: `${100 / headerItem.imageArray.length}%`,
                                        }}
                                        key={imageIndex}
                                      >
                                        <img
                                          className={this.decorateCSS("middleImages")}
                                          src={imageItems.downImage}
                                        />
                                      </div>
                                    )
                                  );
                                })}

                              </div>
                              <div className={this.decorateCSS("middleTitle-container")}>
                                <h3 className={this.decorateCSS('middleTitle')}>{headerItem.downTitle}</h3>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                    {item.middleItemArray.map((middleItem, middleIndex: number) => {
                      return (
                        <div key={middleIndex} className={this.decorateCSS("LowerDiv")}>
                          <div className={this.decorateCSS("button-container")}>
                            <div className={this.decorateCSS("button-content")}>
                              <ComposerLink path={middleItem.buttonObject.buttonLink}>
                                <button
                                  className={`${this.decorateCSS("button")} ${buttonAnimationEnabled ?
                                    "animate__animated" : ""} ${this.getComponentState(
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
                                    {middleItem.buttonObject.buttonText}
                                  </span>
                                  <ComposerIcon
                                    name={middleItem.buttonObject.buttonIcon}
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                      size: 20,
                                    }}
                                  />
                                </button>
                              </ComposerLink>
                              <div className={this.decorateCSS("figure")}>
                                {slider.length > 1 &&
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
                                  </div>}
                              </div>
                            </div>
                          </div>

                          <div className={this.decorateCSS("desc-container")}>
                            <div className={this.decorateCSS('desc-content')}>
                              <div className={this.decorateCSS("leftDescription")}>
                                {middleItem.leftDescription}
                              </div>
                              <div className={this.decorateCSS("count")}>
                                <div className={this.decorateCSS("count-items")}>
                                  <div className={this.decorateCSS("itemsNo")}>
                                    {middleItem.itemNo}
                                  </div>
                                  <div className={this.decorateCSS("itemDesc")}>
                                    {middleItem.itemDesc}
                                  </div>
                                </div>
                                <div className={this.decorateCSS("line")}></div>
                                <div className={this.decorateCSS("customers")}>
                                  <div className={this.decorateCSS("customerNo")}>
                                    {middleItem.customerNo}
                                  </div>
                                  <div className={this.decorateCSS("customerDesc")}>
                                    {middleItem.customerDesc}
                                  </div>
                                </div>
                              </div>
                              <div className={this.decorateCSS("rightDescription")}>
                                {middleItem.rightDescription}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}
export default Header27;
