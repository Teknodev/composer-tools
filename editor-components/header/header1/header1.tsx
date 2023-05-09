import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

class Header1 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string()
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string()
    });
    this.addProp({
      type: "array",
      key: "button",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "buttonObject",
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
              key: "link",
              displayer: "URL",
              value: PlaceholderFiller.string()
            },
          ]
        }
      ]
    })
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: PlaceholderFiller.image()
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "URL",
      value: PlaceholderFiller.string()
    })
  }

  getName(): string {
    return "Header 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("header-page")}
            
          >
            <h3
              className={this.decorateCSS("title")}
              
            >
              {this.getPropValue("subtitle")}
            </h3>
            <p
              className={this.decorateCSS("long-text")}
              
            >
              {this.getPropValue("title")}
            </p>
            <div className={this.decorateCSS("button-group")}>
              {this.castToObject<[]>("button").map((item: any) => {
                return (
                  <ComposerLink path={item.link}>
                    <button className={this.decorateCSS("button")} >
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                )
              })}
            </div>
            <img src={this.getPropValue("image")}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Header1;
