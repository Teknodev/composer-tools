import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseContent } from "../../EditorComponent";
import styles from "./content3.module.scss";

class Content3 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: PlaceholderFiller.image(),
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "secondTitle",
      displayer: "Second Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "secondSubtitle",
      displayer: "Second Subtitle",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: true
    })
  }

  getName(): string {
    return "Image Content Page";
  }

  render() {
    return (

      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")}`}>
            <div className={this.decorateCSS("image")}>
              <img src={this.getPropValue("image")}></img>
            </div>
            <div
              className={this.decorateCSS("header-page")}
            >
              <h1
                className={this.decorateCSS("first-header")}
              >
                {this.getPropValue("subtitle")}
              </h1>
              <h1
                className={this.decorateCSS("second-header")}
              >
                {this.getPropValue("secondSubtitle")}
              </h1>
              <h3
                className={this.decorateCSS("third-header")}
              >
                {this.getPropValue("secondTitle")}
              </h3>
              <h3
                className={this.decorateCSS("fourht-header")}
              >
                {this.getPropValue("title")}
              </h3>
              <p>{this.getPropValue("content")}</p>
              <div
                className={this.decorateCSS("button-wrapper")}
              >
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("buttonText")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
