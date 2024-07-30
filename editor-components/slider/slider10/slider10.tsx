import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderItem = {
  title: JSX.Element;
  image: string;
  index: number;
};

type FeaturedItem = {
  title: JSX.Element;
  subtitle: JSX.Element;
  image: string;
  link: string;
};

class Slider10 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "slider-items",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "First Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 5,
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Second Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 4,
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Third Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 3,
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Fourth Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb92dba6bbe002b6458a2?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 2,
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Fifth Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb939ba6bbe002b6458b4?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 1,
            },
          ],
        },
        {
          type: "object",
          key: "slider-item",
          displayer: "Slider Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sixth Slide",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb949ba6bbe002b6458c8?alt=media",
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 0,
            },
          ],
        },
      ],
    });

    const sliderItemsCopy = this.castToObject<SliderItem[]>("slider-items").map(
      (item: SliderItem) => {
        return {
          title: this.castToString(item.title),
          image: item.image,
          index: item.index,
        };
      }
    );
    this.setComponentState("slider-items-temp", sliderItemsCopy);
    this.setComponentState("slider-items", sliderItemsCopy);

    this.addProp({
      type: "object",
      key: "first-featured-item",
      displayer: "First Featured Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Multi-Family Housing",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "The Oaks",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "second-featured-item",
      displayer: "Second Featured Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The Arches",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Modern House",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "third-featured-item",
      displayer: "Third Featured Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Dream House",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Modern Farmhouse",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "FaArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "FaArrowRight",
    });
  }

  getName(): string {
    return "Slider 10";
  }

  sliderNext = () => {
    const sliderItems = this.getComponentState("slider-items");
    const updatedItems = sliderItems.map((item: SliderItem) => {
      const isLast = item.index === sliderItems.length - 1;
      return {
        ...item,
        index: isLast ? 0 : item.index + 1,
      };
    });
    this.setComponentState("slider-items", updatedItems);
  };

  sliderPrev = () => {
    const sliderItems = this.getComponentState("slider-items");
    const updatedItems = sliderItems.map((item: SliderItem) => {
      const isFirst = item.index === 0;
      return {
        ...item,
        index: isFirst ? sliderItems.length - 1 : item.index - 1,
      };
    });
    this.setComponentState("slider-items", updatedItems);
  };

  render() {
    const sliderItems = this.castToObject<SliderItem[]>("slider-items");

    const temp = this.getComponentState("slider-items-temp");
    const props = sliderItems.map((item: SliderItem) => {
      return {
        title: this.castToString(item.title),
        image: item.image,
        index: item.index,
      };
    });

    if (JSON.stringify(temp) !== JSON.stringify(props)) {
      const propsWithBlinkpageTitle = sliderItems.map((item: SliderItem) => {
        return {
          title: item.title,
          image: item.image,
          index: item.index,
        };
      });
      this.setComponentState("slider-items-temp", propsWithBlinkpageTitle);
      this.setComponentState("slider-items", propsWithBlinkpageTitle);
    }

    const firstFeaturedItem = this.castToObject<FeaturedItem>(
      "first-featured-item"
    );
    const secondFeaturedItem = this.castToObject<FeaturedItem>(
      "second-featured-item"
    );
    const thirdFeaturedItem = this.castToObject<FeaturedItem>(
      "third-featured-item"
    );

    const renderFirstFeaturedItem =
      this.castToString(firstFeaturedItem.title) ||
      this.castToString(firstFeaturedItem.subtitle) ||
      firstFeaturedItem.image;
    const renderSecondFeaturedItem =
      this.castToString(secondFeaturedItem.title) ||
      this.castToString(secondFeaturedItem.subtitle) ||
      secondFeaturedItem.image;
    const renderThirdFeaturedItem =
      this.castToString(thirdFeaturedItem.title) ||
      this.castToString(thirdFeaturedItem.subtitle) ||
      thirdFeaturedItem.image;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-wrapper")}>
            {this.getComponentState("slider-items").map(
              (item: SliderItem, index: number) => {
                const length = this.getComponentState("slider-items").length;
                const isItemTop = item.index === length - 1;
                const titleExist = this.castToString(item.title);

                return (
                  <div
                    key={index}
                    className={this.decorateCSS("slider-item")}
                    style={{
                      opacity: isItemTop ? 1 : 0,
                      zIndex: item.index,
                      backgroundImage: `url('${item.image}')`,
                    }}
                  >
                    {titleExist && (
                      <h1
                        style={{ marginTop: isItemTop ? 0 : "100px" }}
                        className={this.decorateCSS("slider-item-title")}
                      >
                        {item.title}
                      </h1>
                    )}
                    <div
                      className={this.decorateCSS("slider-item-overlay")}
                    ></div>
                  </div>
                );
              }
            )}
            {(renderFirstFeaturedItem ||
              renderSecondFeaturedItem ||
              renderThirdFeaturedItem) && (
              <footer className={this.decorateCSS("slider-footer")}>
                <div className={this.decorateCSS("slider-footer-items")}>
                  {renderFirstFeaturedItem && (
                    <div className={this.decorateCSS("slider-footer-item")}>
                      {firstFeaturedItem.image && (
                        <img
                          className={this.decorateCSS(
                            "slider-footer-item-image"
                          )}
                          src={firstFeaturedItem.image}
                          alt={this.castToString(firstFeaturedItem.title)}
                        />
                      )}
                      {this.castToString(firstFeaturedItem.title) ||
                        (this.castToString(firstFeaturedItem.subtitle) && (
                          <div
                            className={this.decorateCSS(
                              "slider-footer-item-body"
                            )}
                          >
                            {this.castToString(firstFeaturedItem.title) &&
                              (!firstFeaturedItem.link ? (
                                <h3
                                  className={this.decorateCSS(
                                    "slider-footer-item-title"
                                  )}
                                >
                                  {firstFeaturedItem.title}
                                </h3>
                              ) : (
                                <ComposerLink path={firstFeaturedItem.link}>
                                  <h3
                                    className={this.decorateCSS(
                                      "slider-footer-item-title"
                                    )}
                                  >
                                    {firstFeaturedItem.title}
                                  </h3>
                                </ComposerLink>
                              ))}
                            {this.castToString(firstFeaturedItem.subtitle) && (
                              <h5
                                className={this.decorateCSS(
                                  "slider-footer-item-subtitle"
                                )}
                              >
                                {firstFeaturedItem.subtitle}
                              </h5>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                  {renderSecondFeaturedItem && (
                    <div className={this.decorateCSS("slider-footer-item")}>
                      {secondFeaturedItem.image && (
                        <img
                          className={this.decorateCSS(
                            "slider-footer-item-image"
                          )}
                          src={secondFeaturedItem.image}
                          alt={this.castToString(secondFeaturedItem.title)}
                        />
                      )}
                      {this.castToString(secondFeaturedItem.title) ||
                        (this.castToString(secondFeaturedItem.subtitle) && (
                          <div
                            className={this.decorateCSS(
                              "slider-footer-item-body"
                            )}
                          >
                            {this.castToString(secondFeaturedItem.title) &&
                              (!secondFeaturedItem.link ? (
                                <h3
                                  className={this.decorateCSS(
                                    "slider-footer-item-title"
                                  )}
                                >
                                  {secondFeaturedItem.title}
                                </h3>
                              ) : (
                                <ComposerLink path={secondFeaturedItem.link}>
                                  <h3
                                    className={this.decorateCSS(
                                      "slider-footer-item-title"
                                    )}
                                  >
                                    {secondFeaturedItem.title}
                                  </h3>
                                </ComposerLink>
                              ))}
                            {this.castToString(secondFeaturedItem.subtitle) && (
                              <h5
                                className={this.decorateCSS(
                                  "slider-footer-item-subtitle"
                                )}
                              >
                                {secondFeaturedItem.subtitle}
                              </h5>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                  {renderThirdFeaturedItem && (
                    <div className={this.decorateCSS("slider-footer-item")}>
                      {thirdFeaturedItem.image && (
                        <img
                          className={this.decorateCSS(
                            "slider-footer-item-image"
                          )}
                          src={thirdFeaturedItem.image}
                          alt={this.castToString(thirdFeaturedItem.title)}
                        />
                      )}
                      {this.castToString(thirdFeaturedItem.title) ||
                        (this.castToString(thirdFeaturedItem.subtitle) && (
                          <div
                            className={this.decorateCSS(
                              "slider-footer-item-body"
                            )}
                          >
                            {this.castToString(thirdFeaturedItem.title) &&
                              (!thirdFeaturedItem.link ? (
                                <h3
                                  className={this.decorateCSS(
                                    "slider-footer-item-title"
                                  )}
                                >
                                  {thirdFeaturedItem.title}
                                </h3>
                              ) : (
                                <ComposerLink path={thirdFeaturedItem.link}>
                                  <h3
                                    className={this.decorateCSS(
                                      "slider-footer-item-title"
                                    )}
                                  >
                                    {thirdFeaturedItem.title}
                                  </h3>
                                </ComposerLink>
                              ))}
                            {this.castToString(thirdFeaturedItem.subtitle) && (
                              <h5
                                className={this.decorateCSS(
                                  "slider-footer-item-subtitle"
                                )}
                              >
                                {thirdFeaturedItem.subtitle}
                              </h5>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                {(this.getPropValue("prev-button-icon") ||
                  this.getPropValue("next-button-icon")) && (
                  <div className={this.decorateCSS("slider-buttons")}>
                    {this.getPropValue("prev-button-icon") && (
                      <button
                        onClick={this.sliderPrev}
                        className={this.decorateCSS("slider-button")}
                      >
                        <ComposerIcon
                          propsIcon={{ className: this.decorateCSS("Icon") }}
                          name={this.getPropValue("prev-button-icon")}
                        />
                      </button>
                    )}
                    {this.getPropValue("next-button-icon") && (
                      <button
                        onClick={this.sliderNext}
                        className={this.decorateCSS("slider-button")}
                      >
                        <ComposerIcon
                          propsIcon={{ className: this.decorateCSS("Icon") }}
                          name={this.getPropValue("next-button-icon")}
                        />
                      </button>
                    )}
                  </div>
                )}
              </footer>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider10;
