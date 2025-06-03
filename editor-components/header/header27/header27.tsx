import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header27.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SliderItemType = {
  background: string;
  upTitle: React.JSX.Element;
  downTitle: React.JSX.Element;
  upImage: string;
  imageArray: {
    downImage: string;
  }[];
  leftDescription: React.JSX.Element;
  itemNo: React.JSX.Element;
  itemDesc: React.JSX.Element;
  customerNo: React.JSX.Element;
  statsLine: Boolean;
  customerDesc: React.JSX.Element;
  rightDescription: React.JSX.Element;
  button: INPUTS.CastedButton;
  pageNumberPart: boolean;
};

class Header27 extends BaseHeader {
  static getName(): string {
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
          displayer: "",
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
              type: "string",
              displayer: "Up Title",
              key: "upTitle",
              value: "COFFEE",
            },
            {
              type: "image",
              displayer: "Up Image",
              key: "upImage",
              value:
                "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "string",
              displayer: "Down Title",
              key: "downTitle",
              value: "VERSE",
            },
            {
              type: "array",
              key: "imageArray",
              displayer: "Down Images",
              additionalParams: {
                maxElementCount: 3,
              },
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
            INPUTS.BUTTON("button", "Button", "Explore", "", "MdOutlineArrowOutward", null, "Black"),
            {
              type: "boolean",
              displayer: "Page Number Part",
              key: "pageNumberPart",
              value: true,
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
              type: "boolean",
              displayer: "Stats Line",
              key: "statsLine",
              value: true,
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
        {
          type: "object",
          displayer: "",
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
              type: "string",
              displayer: "Up Title",
              key: "upTitle",
              value: "SPECIAL",
            },
            {
              type: "image",
              displayer: "Up Image",
              key: "upImage",
              value:
                "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              type: "string",
              displayer: "Down Title",
              key: "downTitle",
              value: "TASTE",
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
            INPUTS.BUTTON("button", "Button", "Read More", "", "MdOutlineArrowOutward", null, "Black"),
            {
              type: "boolean",
              displayer: "Page Number Part",
              key: "pageNumberPart",
              value: true,
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
              type: "boolean",
              displayer: "Stats Line",
              key: "statsLine",
              value: true,
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

    this.setComponentState("active-index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  render() {
    const slider = this.castToObject<SliderItemType[]>("slider");
    const sliderCount = slider.length;

    const settings = {
      dots: true,
      arrows: false,
      infinite: sliderCount > 1,
      fade: sliderCount > 1,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: Math.min(sliderCount, 1),
      slidesToScroll: 1,
      vertical: sliderCount > 1,
      verticalSwap: sliderCount > 1,
      adaptiveHeight: true,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 100);
      },
    };

    const elements = document.getElementsByClassName(
      this.decorateCSS("carousel")
    );

    const items = [];

    for (let index = 0; index < elements.length; index++) {
      items.push(elements.item(index));
    }

    const minHeight = items.sort((a, b) => b.clientHeight - a.clientHeight)[0]
      ?.clientHeight;

    if (!slider.length) return <></>
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${slider[this.getComponentState("active-index")].background
            })`,
        }}
      >
        <div className={this.decorateCSS("content")}>
          <div
            className={this.decorateCSS("slider-parent")}
            style={{
              minHeight: minHeight + "px",
            }}
          >
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {slider.map((item: SliderItemType, sliderIndex: number) => {

                return (
                  <div
                    key={sliderIndex}
                    className={`${this.decorateCSS("max-content")} ${item.background && this.decorateCSS("withBackgroundImage")
                      }`}
                  >
                    <React.Fragment key={this.castToString(item.upTitle)}>
                      <div className={this.decorateCSS("upperDiv")}>
                        <div className={this.decorateCSS("uppderDiv-content")}>
                          {this.castToString(item.upTitle) && (
                            <div
                              className={this.decorateCSS("upTitle-container")}
                            >
                              <h3 className={this.decorateCSS("upTitle")}>
                                {item.upTitle}
                              </h3>
                            </div>
                          )}
                          {item.upImage && (
                            <div
                              className={this.decorateCSS("upImage-container")}
                            >
                              <img
                                className={this.decorateCSS("upImage")}
                                src={item.upImage}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={this.decorateCSS("middleDiv")}>
                        <div className={this.decorateCSS("middleDiv-content")}>
                          <div
                            className={this.decorateCSS("middleImages-container")}
                          >
                            {item.imageArray.map(
                              (imageItems, imageIndex: number) => {
                                return (
                                  imageItems.downImage && (
                                    <div className={this.decorateCSS("image-wrapper")}
                                      style={{
                                        width: `${100 / item.imageArray.length
                                          }%`,
                                      }}
                                      key={imageIndex}
                                    >
                                      <img className={this.decorateCSS("middleImages")}
                                        src={imageItems.downImage}
                                      />
                                    </div>
                                  )
                                );
                              }
                            )}
                          </div>
                          <div className={this.decorateCSS("middleTitle-container")}>
                            <h3 className={this.decorateCSS("middleTitle")}>
                              {item.downTitle}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                    <div
                      key={item.button.url}
                      className={this.decorateCSS("LowerDiv")}
                    >
                      {(this.castToString(item.button.text) ||
                        item.button.icon) && (
                          <div className={this.decorateCSS("button-container")}>
                            <div className={this.decorateCSS("button-content")}>
                              {(this.castToString(item.button.text) ||
                                item.button.icon) && (
                                  <ComposerLink path={item.button.url}>
                                    <Base.Button buttonType={item.button.type}
                                      className={`${this.decorateCSS("button")}`}
                                    >
                                      {item.button.text}
                                      {item.button.icon && (
                                        <Base.Icon
                                          name={item.button.icon}
                                          propsIcon={{
                                            className:
                                              this.decorateCSS("button-icon"),
                                            size: 20,
                                          }}
                                        />
                                      )}
                                    </Base.Button>
                                  </ComposerLink>
                                )}
                              {item.pageNumberPart && (
                                <div className={this.decorateCSS("figure")}>
                                  {slider.length > 1 && (
                                    <div
                                      className={this.decorateCSS("pagination")}
                                    >
                                      <span
                                        className={this.decorateCSS(
                                          "active-slide"
                                        )}
                                      >
                                        {(
                                          this.getComponentState("active-index") +
                                          1
                                        )
                                          .toString()
                                          .padStart(2, "0")}
                                      </span>
                                      <sup
                                        className={this.decorateCSS(
                                          "slide-count-power"
                                        )}
                                      >
                                        <span
                                          className={this.decorateCSS("divider")}
                                        >
                                          /{" "}
                                        </span>
                                        <span
                                          className={this.decorateCSS(
                                            "slide-count"
                                          )}
                                        >
                                          {sliderCount
                                            .toString()
                                            .padStart(2, "0")}
                                        </span>
                                      </sup>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                      {(this.castToString(item.leftDescription) ||
                        this.castToString(item.itemNo) ||
                        this.castToString(item.itemDesc) ||
                        this.castToString(item.customerNo) ||
                        this.castToString(item.customerDesc) ||
                        this.castToString(item.rightDescription)) && (
                          <div className={this.decorateCSS("desc-container")}>
                            <div className={this.decorateCSS("desc-content")}>
                              <div
                                className={this.decorateCSS("leftDescription")}
                              >
                                {item.leftDescription}
                              </div>
                              <div className={this.decorateCSS("count")}>
                                <div className={this.decorateCSS("count-items")}>
                                  <div className={this.decorateCSS("itemsNo")}>
                                    {item.itemNo}
                                  </div>
                                  <div className={this.decorateCSS("itemDesc")}>
                                    {item.itemDesc}
                                  </div>
                                </div>
                                {item.statsLine && (
                                  <div className={this.decorateCSS("line")}></div>
                                )}
                                <div className={this.decorateCSS("customers")}>
                                  <div className={this.decorateCSS("customerNo")}>
                                    {item.customerNo}
                                  </div>
                                  <div
                                    className={this.decorateCSS("customerDesc")}
                                  >
                                    {item.customerDesc}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={this.decorateCSS("rightDescription")}
                              >
                                {item.rightDescription}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </div>
      </Base.Container>
    );
  }
}
export default Header27;
