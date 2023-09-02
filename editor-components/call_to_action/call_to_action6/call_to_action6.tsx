import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get Started Today",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Try it now",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "comment",
      displayer: "Comment",
      value: "I've been using this product for months now and it's been a game changer for my productivity. I can't imagine going back to my old ways.",
    });
    this.addProp({
      type: "string",
      key: "commentAuthor",
      displayer: "Comment Author",
      value: "- John Doe",
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
    return "Call To Action 6";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action6-page")}>
            <div className={this.decorateCSS("left-image")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("leftImage")} alt=""/>
            </div>

            <div className={this.decorateCSS("call-to-action6-child")}>
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
              <img className={this.decorateCSS("image")} src={this.getPropValue("rightImage")} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction6Page;
