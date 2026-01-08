import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";

import styles from "./feature13.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Tab = {
  title: React.JSX.Element;
  content: React.JSX.Element;
  progresses: Progress[];
};

type Progress = {
  title: React.JSX.Element;
  percentage: number;
  utility: React.JSX.Element;
};

type SliderImage = {
  imageSource: TypeMediaInputValue;
  imageIndex: number;
};

class Feature13 extends BaseFeature {
  intervalId: any;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Discover Our Story",
    });
    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Designing the future, today - welcome to our architecture.",
    });

    this.addProp({
      type: "array",
      key: "slider-images",
      displayer: "Slider Media",
      additionalParams: {
        maxElementCount: 4,
      },
      value: [
        {
          type: "object",
          key: "image",
          displayer: "Media Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 0,
            },
            {
              type: "media",
              key: "imageSource",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e87dba6bbe002b63ec07?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Media Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 1,
            },
            {
              type: "media",
              key: "imageSource",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8a5ba6bbe002b63ec1b?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Media Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 2,
            },
            {
              type: "media",
              key: "imageSource",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8c6ba6bbe002b63ec3c?alt=media",
              },
            },
          ],
        },
      ],
    });

    this.setComponentState(
      "slider-images-temp",
      this.castToObject<SliderImage[]>("slider-images")
    );
    this.setComponentState(
      "slider-images",
      this.castToObject<SliderImage[]>("slider-images")
    );

    this.addProp({
      type: "array",
      key: "tab-items",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tab-item",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "History",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability.",
            },
            {
              type: "array",
              key: "progresses",
              displayer: "Progresses",
              value: [
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Renovation",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "75%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 75,
                    },
                  ],
                },
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Architecture",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "95%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 95,
                    },
                  ],
                },
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Functional Spaces",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "85%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 85,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "tab-item",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Mission",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients' needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical.",
            },
            {
              type: "array",
              key: "progresses",
              displayer: "Progresses",
              value: [
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Design Excellence",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "90%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 90,
                    },
                  ],
                },
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Sustainability",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "88%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 88,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "tab-item",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Vision",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "Ratings and reviews, A numerical rating system and written reviews from clients can be very persuasive in convincing potential clients to hire an architecture firm. These reviews can be posted directly on the architecture firm's website or on third-party review sites such as Yelp or Google Reviews. It's important to respond to all reviews, whether positive or negative, in a professional and respectful manner. This shows that the architecture firm values feedback and is committed to delivering exceptional service.",
            },
            {
              type: "array",
              key: "progresses",
              displayer: "Progresses",
              value: [
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Client Satisfaction",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "92%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 92,
                    },
                  ],
                },
                {
                  type: "object",
                  key: "progress",
                  displayer: "Progress Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Innovation",
                    },
                    {
                      type: "string",
                      key: "utility",
                      displayer: "Utility",
                      value: "87%",
                    },
                    {
                      type: "number",
                      key: "percentage",
                      displayer: "Percentage",
                      value: 87,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.intervalId = setInterval(() => {
      this.sliderNext();
    }, 3000);

    this.addProp({
      type: "media",
      key: "sliderGoLeft",
      displayer: "Slider Left Button Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeft",
      },
    });

    this.addProp({
      type: "media",
      key: "sliderGoRight",
      displayer: "Slider Right Button Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowRight",
      },
    });
    
    this.setComponentState("activeTab", 0);
  }

  static getName(): string {
    return "Feature 13";
  }


  switchTab(tabIndex: number) {
    this.setComponentState("activeTab", tabIndex);
  }

  resetSliderInterval = () => {
    clearInterval(this.intervalId);
  }

  sliderNext = () => {
    this.resetSliderInterval();
    const updatedImages = this.getComponentState("slider-images").map(
      (image: SliderImage) => {
        const isLast =
          image.imageIndex ===
          this.getComponentState("slider-images").length - 1;

        return {
          ...image,
          imageIndex: isLast ? 0 : image.imageIndex + 1,
        };
      }
    );
    this.setComponentState("slider-images", updatedImages);
  };

  sliderPrev = () => {
    this.resetSliderInterval();
    const updatedImages = this.getComponentState("slider-images").map(
      (image: SliderImage) => {
        const isFirst = image.imageIndex === 0;
        return {
          ...image,
          imageIndex: isFirst
            ? this.getComponentState("slider-images").length - 1
            : image.imageIndex - 1,
        };
      }
    );
    this.setComponentState("slider-images", updatedImages);
  };

  render() {
    const sliderImagesChanged = JSON.stringify(this.getComponentState("slider-images-temp")) !==
      JSON.stringify(this.castToObject<SliderImage[]>("slider-images"));

    if (sliderImagesChanged) {
      this.setComponentState(
        "slider-images-temp",
        this.castToObject<SliderImage[]>("slider-images")
      );
      this.setComponentState(
        "slider-images",
        this.castToObject<SliderImage[]>("slider-images")
      );
    }

    const sliderImages = this.castToObject<SliderImage[]>("slider-images");
    const titleExist = this.getPropValue("title", { as_string: true });
    const dividerExist = this.getPropValue("divider");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const descExist = this.getPropValue("description", { as_string: true });
    const tabList = this.castToObject<Tab[]>("tab-items");
    const activeTab = this.getComponentState("activeTab");
    
    const currentProgresses = tabList[activeTab]?.progresses;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {dividerExist &&
                <hr className={this.decorateCSS("divider")} />
              }
              {descExist && (
                <Base.SectionDescription className={this.decorateCSS("header-description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
            <Base.ContainerGrid className={this.decorateCSS("comp-wrapper")}>
              {sliderImages.length > 0 && (
                <Base.GridCell className={this.decorateCSS("comp-slider")}>
                  {this.getComponentState("slider-images").map(
                    (image: SliderImage, index: number) => {
                      if (!image.imageSource) return null;
                      return (
                        <Base.Media
                          key={index}
                          value={image.imageSource}
                          style={{
                            marginLeft: `calc(${image.imageIndex} * var(--composer-gap-md))`,
                            marginTop: `calc(${image.imageIndex} * var(--composer-gap-md))`,
                            zIndex: image.imageIndex + 1,
                          }}
                          className={this.decorateCSS("slider-item")}
                        />
                      );
                    }
                  )}
                  <footer className={this.decorateCSS("slider-buttons")}>
                    {this.getPropValue("sliderGoLeft") && (
                      <button
                        onClick={this.sliderPrev}
                        className={this.decorateCSS("slider-button")}
                      >
                        <Base.Media
                          value={this.getPropValue("sliderGoLeft")}
                          className={this.decorateCSS("Icon")}
                        />
                      </button>
                    )}
                    {this.getPropValue("sliderGoRight") && (
                      <button
                        onClick={this.sliderNext}
                        className={this.decorateCSS("slider-button")}
                      >
                        <Base.Media
                          value={this.getPropValue("sliderGoRight")}
                          className={this.decorateCSS("Icon")}
                        />
                      </button>
                    )}
                  </footer>
                </Base.GridCell>
              )}

              {(tabList.length > 0 || currentProgresses.length > 0) && (
                <Base.GridCell className={this.decorateCSS("comp-body-wrapper")}>
                  {tabList.length > 0 && (
                    <>
                      <div className={this.decorateCSS("tabs")}>
                        <div className={this.decorateCSS("tabs-list")}>
                          {tabList.map((item: Tab, index: number) => {
                            const titleExist = !!this.castToString(item.title);

                            if (!titleExist) return null;

                            return (
                              <div
                                key={index}
                                className={this.decorateCSS("tabs-list-item")}
                              >
                                <Base.H3
                                  onClick={() => {
                                    this.switchTab(index);
                                  }}
                                  className={`${this.decorateCSS("button")} ${activeTab === index
                                    ? this.decorateCSS("active")
                                    : ""
                                    }`}
                                >
                                  {item.title}
                                </Base.H3>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {this.castToString(tabList[activeTab].title) &&
                        this.castToString(tabList[activeTab].content) && (
                          <Base.P className={this.decorateCSS("comp-body-content")}>
                            {tabList[activeTab].content}
                          </Base.P>
                        )}
                    </>
                  )}
                  {currentProgresses && currentProgresses.length > 0 && (
                    <footer className={this.decorateCSS("comp-progresses")}>
                      {currentProgresses.map((item: Progress, index: number) => {
                        const titleExist = !!this.castToString(item.title);
                        const percentage: number = item.percentage;
                        const utility = item.utility;

                        if (!titleExist) return null;

                        return (
                          <div key={index} className={this.decorateCSS("progress-item")}>
                            <div className={this.decorateCSS("progress-header")}>
                              <Base.H4 className={this.decorateCSS("progress-title")}>
                                {item.title}
                              </Base.H4>
                              {utility && (<Base.P
                                className={this.decorateCSS(
                                  "progress-percent"
                                )}
                              >{utility}</Base.P>)}
                            </div>
                            {percentage && (
                              <div
                                className={this.decorateCSS("progress-line")}
                                style={{
                                  width: `${percentage >= 100
                                    ? "100%"
                                    : !percentage || percentage == 0
                                      ? "1%"
                                      : `${percentage}%`
                                    }`,
                                }}
                              />)}
                          </div>
                        );
                      })}
                    </footer>
                  )}
                </Base.GridCell>
              )}
            </Base.ContainerGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );

  }
}

export default Feature13;
