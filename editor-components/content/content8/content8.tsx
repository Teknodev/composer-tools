import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
class Content8 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Design in Modern Technology",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "UI refers to the graphical layout of an application, website, or any other digital platform that a user interacts with.",
    });
    this.addProp({
      type: "object",
      key: "buttonprop",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "button",
          displayer: "Button",
          value: "More Info",
        },
        {
          type: "page",
          key: "url",
          displayer: "URL",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000",
    });
  }

  getName(): string {
    return "Content 8";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("child")}>
            <div className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("left")}>
                <span className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </span>
                <span className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </span>
                <ComposerLink path={this.getPropValue("buttonprop")[1].value}>
                  <button className={this.decorateCSS("button")}>
                    {this.getPropValue("buttonprop")[0].value}
                  </button>
                </ComposerLink>
              </div>
              <div className={this.decorateCSS("right")}>
                <img src={this.getPropValue("image")} />
              </div>
            </div>
            <div className={this.decorateCSS("background-image")}>
              <img src={this.getPropValue("backgroundImage")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content8;
