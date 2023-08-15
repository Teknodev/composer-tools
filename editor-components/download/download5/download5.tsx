import * as React from "react";
import styles from "./download5.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
  buttonImage: string;
};
class Download5 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    let googlePlayIcon = require("./google-play.png");
    let appStoreIcon = require("./appleicons.png");
    let phoneImg = require("./phonescreen.png");

    this.addProp({
      type: "string",
      key: "title1",
      value: "Get our mobile app to make the process faster.",
      displayer: "Title-1",
    });

    this.addProp({
      type: "string",
      key: "text1",
      value:
        "By downloading the app, users can access features and functions in a more convenient and efficient manner, which can save time and reduce the potential for errors or delays.",
      displayer: "Description-1",
    });

    this.addProp({
      type: "image",
      key: "image",
      value: phoneImg,
      displayer: "Image",
    });

    this.addProp({
      type: "boolean",
      key: "reverse",
      displayer: "Reverse",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download for Android",
            },
            {
              type: "page",
              key: "Button Link",
              displayer: "URL",
              value:"",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text",
              value: "Google Play",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "In Button Icon",
              value: googlePlayIcon,
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download for Ios",
            },
            {
              type: "page",
              key: "Button Link",
              displayer: "URL",
              value: "",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text",
              value: "App Store",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "In Button Icon",
              value: appStoreIcon,
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("basic-page")} ${this.getPropValue("reverse") &&
              this.decorateCSS("basic-page-reverse")
              }`}
          >
            <div
              className={`${this.decorateCSS("page-1")} ${this.getPropValue("reverse") &&
                this.decorateCSS("page-1-border")
                }`}
            >
              <div className={this.decorateCSS("box")}>
                <h1>{this.getPropValue("title1")}</h1>
              </div>
              <div className={this.decorateCSS("box")}>
                <p>{this.getPropValue("text1")}</p>
              </div>
              <div className={this.decorateCSS("box")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, index: number) => {
                    return (
                      <ComposerLink key={`dw-5-btn-${index}`} path={item.url}>
                        <div className={this.decorateCSS("button-group")}>
                          <button
                            className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                              }`}
                          >
                            <img
                              src={item.buttonImage}
                              alt="icon"
                              className={this.decorateCSS("button-logo")}
                            />
                            {item.buttonText}
                          </button>
                        </div>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
            <div className={this.decorateCSS("page-2")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download5;
