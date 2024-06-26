import * as React from "react";
import styles from "./header22.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HeaderComponent22 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Multicoloured Tie-dye Sweater",
    });
    this.addProp({
      type: "image",
      key: "right-image",
      displayer: "Right Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664e?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "image",
      key: "left-image",
      displayer: "Left Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619d5dbd2970002c62664d?alt=media&timestamp=1719483639150",
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
          value: "SHOP NOW",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Link",
          value: "",
        },
      ],
    });
  }
  getName(): string {
    return "Header-22";
  }
  render() {
    const button = this.getPropValue("button");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("left-image")}
                alt=""
              />
            </div>
            <div className={this.decorateCSS("middle")}>
              <div className={this.decorateCSS("content")}>
                <div className={this.decorateCSS("divider")}></div>
                <h1 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h1>
                <div>
                  <ComposerLink path={this.getPropValue("button")[1].value}>
                    <button className={this.decorateCSS("button")}>
                      {button[0].value}
                    </button>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("divider-underline")}></div>
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("right-image")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent22;
