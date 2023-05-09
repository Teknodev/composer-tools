import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header2.module.scss";

class Header2 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "wide-text",
      displayer: "Wide Text",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Lorem ipsum dolor sit",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.shortText(),
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: PlaceholderFiller.string(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://static.thenounproject.com/png/105256-200.png",
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
    return "Header 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("wide-text-container")}>
            <div className={this.decorateCSS("image")}>
              <img src={this.getPropValue("wide-text")[4].value}></img>
            </div>
            <div className={this.decorateCSS("wide-text")}>
              <h3>{this.getPropValue("wide-text")[0].value}</h3>
              <h1>{this.getPropValue("wide-text")[1].value}</h1>
              <p>{this.getPropValue("wide-text")[2].value}</p>
              <ComposerLink path={this.getPropValue("wide-text")[5].value}>
                <a
                  className={this.decorateCSS("button")}
                  
                >
                  {this.getPropValue("wide-text")[3].value}
                </a>
              </ComposerLink>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header2;
