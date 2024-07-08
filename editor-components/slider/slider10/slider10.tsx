import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderItem = {
  title: JSX.Element;
  image: string;
  index: number;
}

type FeaturedItem = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

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
              value: "First Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 5
            }
          ]
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
              value: "Second Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 4
            }
          ]
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
              value: "Third Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 3
            }
          ]
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
              value: "Fourth Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb92dba6bbe002b6458a2?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 2
            }
          ]
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
              value: "Fifth Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb939ba6bbe002b6458b4?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 1
            }
          ]
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
              value: "Sixth Slide"
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb949ba6bbe002b6458c8?alt=media"
            },
            {
              type: "number",
              key: "index",
              displayer: "Layer",
              value: 0
            }
          ]
        },
      ],
    });

    this.setComponentState("slider-items-temp", this.castToObject<SliderItem[]>("slider-items").map((e: SliderItem) => {
      return {
        title: this.castToString(e.title),
        image: e.image,
        index: e.index
      }
    }))
    this.setComponentState("slider-items", this.castToObject<SliderItem[]>("slider-items").map((e: SliderItem) => {
      return {
        title: this.castToString(e.title),
        image: e.image,
        index: e.index
      }
    }))

    this.addProp({
      type: "object",
      key: "first-featured-item",
      displayer: "First Featured Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Multi-Family Housing"
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "The Oaks"
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb8f6ba6bbe002b645872?alt=media"
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: ""
        }
      ]
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
          value: "The Arches"
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Modern House"
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb90fba6bbe002b64588b?alt=media"
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: ""
        }
      ]
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
          value: "Dream House"
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Modern Farmhouse"
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668bb921ba6bbe002b645896?alt=media"
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: ""
        }
      ]
    });

    this.addProp({
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "FaArrowLeft"
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "FaArrowRight"
    });
  }

  getName(): string {
    return "Slider 10";
  }

  sliderNext = () => {
    const updatedItems = this.getComponentState("slider-items").map((item: SliderItem) => {
      if (item.index === this.getComponentState("slider-items").length - 1)
        return {
          ...item,
          index: 0
        }
      else
        return {
          ...item,
          index: item.index + 1
        }
    })
    this.setComponentState("slider-items", updatedItems)
  }

  sliderPrev = () => {
    const updatedItems = this.getComponentState("slider-items").map((index: SliderItem) => {
      if (index.index === 0)
        return {
          ...index,
          index: this.getComponentState("slider-items").length - 1
        }
      else
        return {
          ...index,
          index: index.index - 1
        }
    })
    this.setComponentState("slider-items", updatedItems)
  }

  render() {
    const temp = this.getComponentState("slider-items-temp")

    const props = this.castToObject<SliderItem[]>("slider-items").map((e: SliderItem) => {
      return {
        title: this.castToString(e.title),
        image: e.image,
        index: e.index
      }
    })

    // console.log("temp", temp)
    // console.log("props", props)

    if (JSON.stringify(temp) !== JSON.stringify(props)) {
      this.setComponentState("slider-items-temp", props);
      this.setComponentState("slider-items", props);
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-wrapper")}>
            {this.getComponentState("slider-items").map((sliderItem: SliderItem, index: number) => {
              const length = this.getComponentState("slider-items").length
              const isItemTop = sliderItem.index === length - 1

              return (
                <div key={index} className={this.decorateCSS("slider-item")}
                  style={{ opacity: isItemTop ? 1 : 0, zIndex: sliderItem.index, backgroundImage: `url('${sliderItem.image}')` }}>
                  <h1
                    style={{ marginTop: isItemTop ? 0 : "100px" }}
                    className={this.decorateCSS("slider-item-title")}>
                    {sliderItem.title}
                  </h1>
                  <div className={this.decorateCSS("slider-item-overlay")}></div>
                </div>
              )
            })}
            <footer className={this.decorateCSS("slider-footer")}>
              <div className={this.decorateCSS("slider-footer-items")}>
                <div className={this.decorateCSS("slider-footer-item")}>
                  <img className={this.decorateCSS("slider-footer-item-image")}
                    src={this.castToObject<FeaturedItem>("first-featured-item").image}
                    alt={this.castToObject<FeaturedItem>("first-featured-item").title} />
                  <div className={this.decorateCSS("slider-footer-item-body")}>
                    {this.castToObject<FeaturedItem>("first-featured-item").link === "" ?
                      <h3 className={this.decorateCSS("slider-footer-item-title")}>
                        {this.castToObject<FeaturedItem>("first-featured-item").title}
                      </h3>
                      :
                      <ComposerLink
                        children={
                          <h3 className={this.decorateCSS("slider-footer-item-title")}>
                            {this.castToObject<FeaturedItem>("first-featured-item").title}
                          </h3>
                        }
                        path={this.castToObject<FeaturedItem>("first-featured-item").link}
                      />
                    }
                    <h5 className={this.decorateCSS("slider-footer-item-subtitle")}>{this.castToObject<FeaturedItem>("first-featured-item").subtitle}</h5>
                  </div>
                </div>
                <div className={this.decorateCSS("slider-footer-item")}>
                  <img className={this.decorateCSS("slider-footer-item-image")}
                    src={this.castToObject<FeaturedItem>("second-featured-item").image}
                    alt={this.castToObject<FeaturedItem>("second-featured-item").title} />
                  <div className={this.decorateCSS("slider-footer-item-body")}>
                    {this.castToObject<FeaturedItem>("second-featured-item").link === "" ?
                      <h3 className={this.decorateCSS("slider-footer-item-title")}>
                        {this.castToObject<FeaturedItem>("second-featured-item").title}
                      </h3>
                      :
                      <ComposerLink
                        children={
                          <h3 className={this.decorateCSS("slider-footer-item-title")}>
                            {this.castToObject<FeaturedItem>("second-featured-item").title}
                          </h3>
                        }
                        path={this.castToObject<FeaturedItem>("second-featured-item").link}
                      />
                    }
                    <h5 className={this.decorateCSS("slider-footer-item-subtitle")}>{this.castToObject<FeaturedItem>("second-featured-item").subtitle}</h5>
                  </div>
                </div>
                <div className={this.decorateCSS("slider-footer-item")}>
                  <img className={this.decorateCSS("slider-footer-item-image")}
                    src={this.castToObject<FeaturedItem>("third-featured-item").image}
                    alt={this.castToObject<FeaturedItem>("third-featured-item").title} />
                  <div className={this.decorateCSS("slider-footer-item-body")}>
                    {this.castToObject<FeaturedItem>("third-featured-item").link === "" ?
                      <h3 className={this.decorateCSS("slider-footer-item-title")}>
                        {this.castToObject<FeaturedItem>("third-featured-item").title}
                      </h3>
                      :
                      <ComposerLink
                        children={
                          <h3 className={this.decorateCSS("slider-footer-item-title")}>
                            {this.castToObject<FeaturedItem>("third-featured-item").title}
                          </h3>
                        }
                        path={this.castToObject<FeaturedItem>("third-featured-item").link}
                      />
                    }
                    <h5 className={this.decorateCSS("slider-footer-item-subtitle")}>{this.castToObject<FeaturedItem>("third-featured-item").subtitle}</h5>
                  </div>
                </div>
              </div>
              <div className={this.decorateCSS("slider-buttons")}>
                <button onClick={this.sliderPrev} className={this.decorateCSS("slider-button")}>
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("Icon") }}
                    name={this.getPropValue("prev-button-icon")}
                  />
                </button>
                <button onClick={this.sliderNext} className={this.decorateCSS("slider-button")}>
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("Icon") }}
                    name={this.getPropValue("next-button-icon")}
                  />
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider10;
