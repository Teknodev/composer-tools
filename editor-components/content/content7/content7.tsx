import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content7.module.scss";

class Content7 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1683297760717",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Art of Web Design",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Web design is a crucial aspect of building a successful online presence. Your website is often the first point of contact between you and your audience, and its design can significantly impact how your brand is perceived.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "More Info",
    });
    this.addProp({
      type: "image",
      key: "wideImage",
      displayer: "Wide Image",
      value: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    });
  }

  getName(): string {
    return "Content 7";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("child")}>
            <img
              className={this.decorateCSS("logo")}
              src={this.getPropValue("image")}
            />
            <span className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </span>
            <span className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
            </span>
            <img className={this.decorateCSS("wide-image")} src={this.getPropValue("wideImage")} />
            <span className={this.decorateCSS("button")}>
              {this.getPropValue("buttonText")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Content7;
