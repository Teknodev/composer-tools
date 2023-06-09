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
          type: "image",
          key: "image",
          value:
            "https://static01.nyt.com/images/2019/12/29/travel/29TRIPPEDUP-points/29TRIPPEDUP-points-superJumbo.jpg",
          displayer: "Image",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
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
                src={this.getPropValue("header")[3].value}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header3;
