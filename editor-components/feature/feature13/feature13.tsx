import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import styles from "./feature13.module.scss";

type Tab = {
  title: string;
  content: string;
}

type Progress = {
  title: string;
  percentage: number;
}

type SliderImage = {
  imageSource: string;
  imageIndex: number;
}

class Feature13 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: '"Discover Our Story"'
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Designing the future, today - welcome to our architecture."
    });

    this.addProp({
      type: "array",
      key: "slider-images",
      displayer: "Slider Images",
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
              value: 0
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e87dba6bbe002b63ec07?alt=media"
            }
          ]
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
              value: 1
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8a5ba6bbe002b63ec1b?alt=media"
            }
          ]
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
              value: 2
            },
            {
              type: "image",
              key: "imageSource",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687e8c6ba6bbe002b63ec3c?alt=media"
            }
          ]
        },
      ]
    });


    this.setComponentState("slider-images-temp", this.castToObject<SliderImage[]>("slider-images"))
    this.setComponentState("slider-images", this.castToObject<SliderImage[]>("slider-images"))

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
              value: "History"
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value: "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability."
            }
          ]
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
              value: "Mission"
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value: "We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients' needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical."
            }
          ]
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
              value: "Vision"
            },
            {
              type: "string",
              key: "content",
              displayer: "Tab Content",
              value: "Ratings and reviews, A numerical rating system and written reviews from clients can be very persuasive in convincing potential clients to hire an architecture firm. These reviews can be posted directly on the architecture firm's website or on third-party review sites such as Yelp or Google Reviews. It's important to respond to all reviews, whether positive or negative, in a professional and respectful manner. This shows that the architecture firm values feedback and is committed to delivering exceptional service."
            }
          ]
        },
      ]
    })

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
              value: "Renovation"
            },
            {
              type: "number",
              key: "percentage",
              displayer: "Percentage",
              value: 75
            }
          ]
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
              value: "Architecture"
            },
            {
              type: "number",
              key: "percentage",
              displayer: "Percentage",
              value: 95
            }
          ]
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
              value: "Functional Spaces"
            },
            {
              type: "number",
              key: "percentage",
              displayer: "Percentage",
              value: 85
            }
          ]
        },
      ]
    })

    let x = setInterval(() => {
      this.sliderNext()
    }, 3000);
  }

  getName(): string {
    return "Feature 13";
  }

  activeTab: number = 0;

  switchTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }

  sliderNext = () => {
    const updatedImages = this.getComponentState("slider-images").map((image: SliderImage) => {
      if (image.imageIndex === this.getComponentState("slider-images").length - 1)
        return {
          ...image,
          imageIndex: 0
        }
      else
        return {
          ...image,
          imageIndex: image.imageIndex + 1
        }
    })
    this.setComponentState("slider-images", updatedImages)
  }

  sliderPrev = () => {
    const updatedImages = this.getComponentState("slider-images").map((image: SliderImage) => {
      if (image.imageIndex === 0)
        return {
          ...image,
          imageIndex: this.getComponentState("slider-images").length - 1
        }
      else
        return {
          ...image,
          imageIndex: image.imageIndex - 1
        }
    })
    this.setComponentState("slider-images", updatedImages)
  }

  render() {

    if (JSON.stringify(this.getComponentState("slider-images-temp")) !== JSON.stringify(this.castToObject<SliderImage[]>("slider-images"))) {
      this.setComponentState("slider-images-temp", this.castToObject<SliderImage[]>("slider-images"));
      this.setComponentState("slider-images", this.castToObject<SliderImage[]>("slider-images"));
    }


    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp-container")}>
            <header className={this.decorateCSS("comp-header")}>
              {this.getPropValue("title") &&
                <h1 className={this.decorateCSS("comp-header-title")}>{this.getPropValue("title")}</h1>
              }
              {this.getPropValue("description") &&
                <p className={this.decorateCSS("comp-header-description")}>{this.getPropValue("description")}</p>
              }
            </header>
            <main className={this.decorateCSS("comp-wrapper")}>
              {this.castToObject<SliderImage[]>("slider-images").length > 0 &&

                <div className={this.decorateCSS("comp-slider")}>
                  {this.getComponentState("slider-images").map((image: SliderImage, index: number) => (
                    <img
                      key={index}
                      style={{ marginLeft: `${image.imageIndex * 20}px`, marginTop: `${image.imageIndex * 20}px`, zIndex: image.imageIndex + 1 }}
                      className={this.decorateCSS("slider-item")}
                      src={image.imageSource}
                      alt="" />
                  ))}
                  <footer className={this.decorateCSS("slider-buttons")}>
                    <button onClick={this.sliderPrev} className={this.decorateCSS("slider-button")}>
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("Icon") }}
                        name={"FaArrowLeft"}
                      />
                    </button>
                    <button onClick={this.sliderNext} className={this.decorateCSS("slider-button")}>
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("Icon") }}
                        name={"FaArrowRight"}
                      />
                    </button>
                  </footer>
                </div>
              }

              {(this.castToObject<Tab[]>("tab-items").length > 0
                || this.castToObject<Progress[]>("progresses").length > 0) &&

                <div className={this.decorateCSS("comp-body-wrapper")}>
                  {this.castToObject<Tab[]>("tab-items").length > 0 &&
                    <>
                      <header className={this.decorateCSS("tabs")}>
                        <ul className={this.decorateCSS("tabs-list")}>
                          {this.getPropValue("tab-items").map((tabItem: any, index: number) => {
                            const title = tabItem.value[0].value

                            if (title != "")
                              return (
                                <li key={index} className={this.decorateCSS("tabs-list-item")}>
                                  <button
                                    onClick={() => { this.switchTab(index) }}
                                    className={`${this.decorateCSS("button")} ${this.activeTab === index ? this.decorateCSS("active") : ""}`}>
                                    {title}
                                  </button>
                                </li>
                              );
                          })}
                        </ul>
                      </header>
                      {(this.getPropValue("tab-items")[this.activeTab].value[0].value !== "" &&
                        this.getPropValue("tab-items")[this.activeTab].value[1].value !== "") &&
                        <p className={this.decorateCSS("comp-body-content")}>
                          {this.castToObject<Tab[]>("tab-items")[this.activeTab].content}
                        </p>
                      }
                    </>
                  }
                  {this.castToObject<Progress[]>("progresses").length > 0 &&
                    <footer className={this.decorateCSS("comp-progresses")}>
                      {this.getPropValue("progresses").map((progressItem: any, index: number) => {
                        const progressTitle = progressItem.value[0].value;
                        const progressPercentage = progressItem.value[1].value;

                        console.log("title", progressTitle)
                        console.log("percentage", progressPercentage)

                        if (progressTitle !== "")
                          return (
                            <div className={this.decorateCSS("progress-item")} key={index}>
                              <div className={this.decorateCSS("progress-header")}>
                                <h3 className={this.decorateCSS("progress-title")}>{progressTitle}</h3>
                                <span className={this.decorateCSS("progress-percent")}>
                                  {progressPercentage >= 100 ?
                                    "100" :
                                    (!progressPercentage || progressPercentage == 0) ?
                                    "0":
                                    progressPercentage} %
                                </span>
                              </div>
                              <div
                                className={this.decorateCSS("progress-line")}
                                style={{
                                  width: `${progressPercentage >= 100 ?
                                    '100%' :
                                    (!progressPercentage || progressPercentage == 0) ?
                                      '1%' :
                                      `${progressPercentage}%`}`
                                }}>
                              </div>
                            </div>
                          )
                      })}
                    </footer>
                  }
                </div>
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature13;
