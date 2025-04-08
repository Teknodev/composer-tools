import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import styles from "./feature13.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Tab = {
  title: React.JSX.Element;
  content: React.JSX.Element;
};

type Progress = {
  title: React.JSX.Element;
  percentage: number;
  utility: React.JSX.Element;
};

type SliderImage = {
  imageSource: string;
  imageIndex: number;
};

class Feature13 extends BaseFeature {
  intervalId: any;

  constructor(props?: any) {
    super(props, styles);

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
      displayer: "Slider Images",
      additionalParams: {
        maxElementCount: 4,
      },
      value: [
        {
          type: "object",
          key: "image",
          displayer: "Image Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 0,
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e87dba6bbe002b63ec07?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Image Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 1,
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8a5ba6bbe002b63ec1b?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Image Item",
          value: [
            {
              type: "number",
              key: "imageIndex",
              displayer: "Index",
              value: 2,
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8c6ba6bbe002b63ec3c?alt=media",
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
              displayer: "Tab Title",
              value: "History",
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value:
                "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability.",
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
              displayer: "Tab Title",
              value: "Mission",
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value:
                "We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients' needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical.",
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
              displayer: "Tab Title",
              value: "Vision",
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value:
                "Ratings and reviews, A numerical rating system and written reviews from clients can be very persuasive in convincing potential clients to hire an architecture firm. These reviews can be posted directly on the architecture firm's website or on third-party review sites such as Yelp or Google Reviews. It's important to respond to all reviews, whether positive or negative, in a professional and respectful manner. This shows that the architecture firm values feedback and is committed to delivering exceptional service.",
            },
          ],
        },
      ],
    });

    this.addProp({
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
    });

    this.intervalId = setInterval(() => {
      this.sliderNext();
    }, 3000);

    this.addProp({
      type: "icon",
      key: "sliderGoLeft",
      displayer: "Slider Left Button Icon",
      value: "FaArrowLeft",
    });

    this.addProp({
      type: "icon",
      key: "sliderGoRight",
      displayer: "Slider Right Button Icon",
      value: "FaArrowRight",
    });
  }

  static getName(): string {
    return "Feature 13";
  }

  activeTab: number = 0;

  switchTab(tabIndex: number) {
    this.activeTab = tabIndex;
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
    const descExist = this.getPropValue("description", { as_string: true });
    const tabList = this.castToObject<Tab[]>("tab-items");
    const progressList = this.castToObject<Progress[]>("progresses");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("header-title")}>
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
                        <img
                          key={index}
                          style={{
                            marginLeft: `calc(${image.imageIndex} * var(--composer-gap-md))`,
                            marginTop: `calc(${image.imageIndex} * var(--composer-gap-md))`,
                            zIndex: image.imageIndex + 1,
                          }}
                          className={this.decorateCSS("slider-item")}
                          src={image.imageSource}
                          alt={"Image"}
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
                        <ComposerIcon
                          propsIcon={{ className: this.decorateCSS("Icon") }}
                          name={this.getPropValue("sliderGoLeft")}
                        />
                      </button>
                    )}
                    {this.getPropValue("sliderGoRight") && (
                      <button
                        onClick={this.sliderNext}
                        className={this.decorateCSS("slider-button")}
                      >
                        <ComposerIcon
                          propsIcon={{ className: this.decorateCSS("Icon") }}
                          name={this.getPropValue("sliderGoRight")}
                        />
                      </button>
                    )}
                  </footer>
                </Base.GridCell>
              )}

              {(tabList.length > 0 || progressList.length > 0) && (
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
                                <button
                                  onClick={() => {
                                    this.switchTab(index);
                                  }}
                                  className={`${this.decorateCSS("button")} ${this.activeTab === index
                                    ? this.decorateCSS("active")
                                    : ""
                                    }`}
                                >
                                  {item.title}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {this.castToString(tabList[this.activeTab].title) &&
                        this.castToString(tabList[this.activeTab].content) && (
                          <Base.P className={this.decorateCSS("comp-body-content")}>
                            {tabList[this.activeTab].content}
                          </Base.P>
                        )}
                    </>
                  )}
                  {progressList.length > 0 && (
                    <footer className={this.decorateCSS("comp-progresses")}>
                      {progressList.map((item: Progress, index: number) => {
                        const titleExist = !!this.castToString(item.title);
                        const percentage: number = item.percentage;
                        const utility = item.utility;

                        if (!titleExist) return null;

                        return (
                          <div key={index} className={this.decorateCSS("progress-item")}>
                            <div className={this.decorateCSS("progress-header")}>
                              <Base.H3 className={this.decorateCSS("progress-title")}>
                                {item.title}
                              </Base.H3>
                              {utility && (<span
                                className={this.decorateCSS(
                                  "progress-percent"
                                )}
                              >{utility}</span>)}
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
