import * as React from "react";
import styles from "./header28.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HeaderComponent28 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Guarantor of Your Successs",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "Comprehensive legal support",
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
          value: "GET CONSULT",
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
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edded6057bdf002c2adb5e?alt=media&timestamp=1693310655431",
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edded6057bdf002c2adb5f?alt=media&timestamp=1693310655431",
    });
    this.addProp({
      type: "string",
      key: "left-bottom-top",
      displayer: "left-bottom-top",
      value: "1500",
    });
    this.addProp({
      type: "string",
      key: "left-bottom-bottom",
      displayer: "left-bottom-bottom",
      value: "Companies in service",
    });
    this.addProp({
      type: "string",
      key: "middle-bottom-top",
      displayer: "middle-bottom-top",
      value: "180",
    });
    this.addProp({
      type: "string",
      key: "middle-bottom-bottom",
      displayer: "middle-bottom-bottom",
      value: "Received licenses",
    });
    this.addProp({
      type: "string",
      key: "right-bottom-top",
      displayer: "right-bottom-top",
      value: "12",
    });
    this.addProp({
      type: "string",
      key: "right-bottom-bottom",
      displayer: "right-bottom-bottom",
      value: "Professional lawyers",
    });
    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: false,
    });
  }

  getName(): string {
    return "Header-28";
  }
  render() {
    const button = this.getPropValue("button");

    return (
      <div
        
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")} style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}
          >
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("content")}>
                <div className={this.decorateCSS("main-content")}>
                  <h3 className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </h3>
                  <h1 className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </h1>
                </div>

                <div className={this.decorateCSS("form")}>
                  <input
                    placeholder="Your Name"
                    type="text"
                    className={this.decorateCSS("name")}
                  />
                  <input
                    placeholder="Phone Number"
                    type="text"
                    className={this.decorateCSS("phone")}
                  />
                  <ComposerLink path={this.getPropValue("button")[1].value}>
                    <button className={this.decorateCSS("button")}>
                      {button[0].value}
                    </button>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("bottom-content")}>
                  <div className={this.decorateCSS("left-bottom")}>
                    <h1 className={this.decorateCSS("left-bottom-top")}>{this.getPropValue("left-bottom-top")}</h1>
                    <h3 className={this.decorateCSS("left-bottom-bottom")}>{this.getPropValue("left-bottom-bottom")}</h3>
                  </div>
                  <div className={this.decorateCSS("middle-bottom")}>
                    <h1 className={this.decorateCSS("middle-bottom-top")}>{this.getPropValue("middle-bottom-top")}</h1>
                    <h3 className={this.decorateCSS("middle-bottom-bottom")}>{this.getPropValue("middle-bottom-bottom")}</h3>
                  </div>
                  <div className={this.decorateCSS("right-bottom")}>
                    <h1 className={this.decorateCSS("right-bottom-top")}>{this.getPropValue("right-bottom-top")}</h1>
                    <h3 className={this.decorateCSS("right-bottom-bottom")}>{this.getPropValue("right-bottom-bottom")}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent28;
