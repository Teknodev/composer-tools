import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header7.module.scss";

class Header7 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "lorem ipsum",
    });

    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value: PlaceholderFiller.shortText(),
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: PlaceholderFiller.string(),
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Path",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "secondButton",
      displayer: "Second Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: PlaceholderFiller.string(),
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Path",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: PlaceholderFiller.image(),
    });
  }
  getName(): string {
    return "Header 7";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div
              className={this.decorateCSS("page")}
              
            >
              <div
                className={this.decorateCSS("header-page")}
                
              >
                <h1>{this.getPropValue("title")}</h1>
                <h3>{this.getPropValue("subtitle")}</h3>
                <p>{this.getPropValue("content")}</p>
                <div
                  className={this.decorateCSS("button-wrapper")}
                  
                >
                  <ComposerLink path={this.getPropValue("button")[1].value}>
                    <button
                      className={this.decorateCSS("button")}
                      
                    >
                      {this.getPropValue("button")[0].value}
                    </button>
                  </ComposerLink>
                  <ComposerLink path={this.getPropValue("secondButton")[1].value}>
                    <button
                      className={this.decorateCSS("button-reverse")}
                      
                    >
                      {this.getPropValue("secondButton")[0].value}
                    </button>
                  </ComposerLink>
                </div>
              </div>
              <div className={this.decorateCSS("image")}>
                <img src={this.getPropValue("image")}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header7;
