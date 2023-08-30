import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header3.module.scss";

class Header3 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "string",
          key: "subtitle",
          value: "Explore the World's Best Travel",
          displayer: "Subtitle",
        },
        {
          type: "string",
          key: "title",
          value: "Explore the World's Best Travel Destinations with Our Guide ",
          displayer: "Title",
        },
        {
          type: "string",
          key: "buttonText",
          value: "Go There",
          displayer: "Button Text",
        },
        {
          type: "page",
          key: "link",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436b1cf68c3c2002cd2fab5?alt=media&timestamp=1693233963031",
          displayer: "Image",
        },
      ],
    });
  }

  getName(): string {
    return "Header 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("header-page")}>
              <h3>{this.getPropValue("header")[0].value}</h3>
              <h1>{this.getPropValue("header")[1].value}</h1>
              <ComposerLink path={this.getPropValue("header")[4].value}>
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("header")[2].value}
                </span>
              </ComposerLink>
            </div>
            <div className={this.decorateCSS("image-background")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("header")[4].value}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header3;
