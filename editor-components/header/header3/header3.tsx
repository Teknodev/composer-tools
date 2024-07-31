import * as React from "react";
import styles from "./header3.module.scss";
import { BaseHeader } from "../../EditorComponent";


type ISliderData = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  button: {
    button_text: string;
  };
};

class Header3 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "New lookbok Ready for the summer",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Explore the modern glamour within all of Wize Styles.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624501?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button_text",
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "We are Fashion Revolution",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "SPRING-SUMMER COLLECTION",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624502?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button_text",
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Your Fashion Summer",
            },
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "HOT SUMMER COLLECTION 2017",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Enjoy the New Collection with Wize Fashion Store.Best women's fashion tips and style guide.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624503?alt=media&timestamp=1719483639150",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button_text",
                  value: "discover more",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("activeSlide", 0);
  }

  changeSlide(slideIndex: number): void {
    this.setComponentState("prepareSlide", slideIndex);
    this.setComponentState("activeSlide", null);
    setTimeout(() => {
      this.setComponentState("activeSlide", slideIndex);
      this.setComponentState("prepareSlide", null);
    }, 20);
  }
  getName(): string {
    return "Header 3";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("pagination")}>
          {this.castToObject<ISliderData[]>("slider").map(
            (slider: ISliderData, index) => (
              <div
                className={this.decorateCSS("page-number")}
                onClick={() => this.changeSlide(index)}
              >
                {index + 1}
              </div>
            )
          )}
        </div>
        <div className={this.decorateCSS("wrapper")}>
          {this.castToObject<ISliderData[]>("slider").map(
            (item: ISliderData, index: number) => (
              <div
                className={`${this.decorateCSS("item")} ${this.decorateCSS(
                  index === 0
                    ? "setup-primary"
                    : index === 1
                    ? "setup-secondary"
                    : "setup-third"
                )} ${
                  this.getComponentState("prepareSlide") == index
                    ? this.decorateCSS("prepare")
                    : ""
                } ${
                  this.getComponentState("activeSlide") == index
                    ? this.decorateCSS("active")
                    : ""
                }`}
                key={`key${index}`}
              >
                <div className={this.decorateCSS("max-content")}>
                  <div className={this.decorateCSS("content-background")}></div>
                  <div className={this.decorateCSS("background-image")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    {item.subtitle != "" && (
                      <div className={this.decorateCSS("subtitle")}>
                        {item.subtitle}
                      </div>
                    )}
                    <div className={this.decorateCSS("title")}>
                      {item.title}
                    </div>
                    {item.description != "" && (
                      <div className={this.decorateCSS("description")}>
                        {item.description}
                      </div>
                    )}
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {item.button.button_text}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Header3;
