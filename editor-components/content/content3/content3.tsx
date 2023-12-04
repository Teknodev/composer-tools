import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Content3 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae4968c3c2002cd2f9e5?alt=media&timestamp=1693230627411",
    });
    this.addProp({
      type: "array",
      key: "buttonprop",
      displayer: "Button Prop",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttontext",
              displayer: "Button Text",
              value: "Continue",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value:
        "The success of a small business can be attributed to various factors such as providing quality products or services, having a strong brand identity, building a loyal customer base, and implementing effective marketing strategies.",
    });
    this.addProp({
      type: "string",
      key: "secondTitle",
      displayer: "Second Title",
      value: "business.",
    });
    this.addProp({
      type: "string",
      key: "secondSubtitle",
      displayer: "Second Subtitle",
      value: "the success of a small",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "12/12/2023",
    });

    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: true,
    });
  }

  getName(): string {
    return "Image Content Page";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}
          >
            <div className={this.decorateCSS("image-background")}>
              <img
                alt=""
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
              ></img>
            </div>
            <div className={this.decorateCSS("header-page")}>
              <p className={this.decorateCSS("first-header")}>
                {this.getPropValue("subtitle")}
              </p>
              <h1 className={this.decorateCSS("second-header")}>
                {this.getPropValue("secondSubtitle")}
              </h1>
              <h3 className={`${this.decorateCSS("third-header")}`}>
                {this.getPropValue("secondTitle")}
              </h3>
              <p className={this.decorateCSS("content")}>{this.getPropValue("content")}</p>
              <div className={this.decorateCSS("button-wrapper")}>
                {this.getPropValue("buttonprop").map(
                  (button: any, index: number) => (
                    <ComposerLink path={button.value[1].value} key={index}>
                      <span className={this.decorateCSS("button")}>
                        {button.value[0].value}
                      </span>
                    </ComposerLink>
                  )
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
