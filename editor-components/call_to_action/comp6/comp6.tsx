import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp6.module.scss";

class Comp6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "comment",
      displayer: "Comment",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "commentAuthor",
      displayer: "Comment Author",
      value: "- " + PlaceholderFiller.string(),
    });
    this.addProp({
      type: "image",
      key: "leftImage",
      displayer: "Left Image",
      value: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80",
    });
    this.addProp({
      type: "image",
      key: "rightImage",
      displayer: "Right Image",
      value: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
    });
  }

  getName(): string {
    return "Comp6";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp6-page")}>
            <div className={this.decorateCSS("left-image")}>
              <img src={this.getPropValue("leftImage")} width={200} height={300} />
            </div>

            <div className={this.decorateCSS("comp6-child")}>
              <h1>{this.getPropValue("title")}</h1>
              <ComposerLink path={this.getPropValue("link")}>
                <span
                  className={this.decorateCSS("button")}
                  
                >
                  {this.getPropValue("buttonText")}
                </span>
              </ComposerLink>
              <div className={this.decorateCSS("comment")}>
                <h3>{this.getPropValue("comment")}</h3>
                <h5>{this.getPropValue("commentAuthor")}</h5>
              </div>
            </div>

            <div className={this.decorateCSS("right-image")}>
              <img src={this.getPropValue("rightImage")} width={150} height={200} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp6Page;
