import * as React from "react";
import styles from "./header19.module.scss";
import { BaseHeader } from "../../EditorComponent";
import { object } from "yup";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header19 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "left-side",
      displayer: "Left Side",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title-top",
              displayer: "Title Top",
              value: "Hot &",
            },
            {
              type: "string",
              key: "title-mid",
              displayer: "Title Middle",
              value: "Stylish",
            },
            {
              type: "string",
              key: "title-bottom",
              displayer: "Title Bottom",
              value: "Tshirt",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "Some Italian writings",
            },
            {
              type: "string",
              key: "side-text",
              displayer: "Side Text",
              value: "SUMMER COLLECTION 2022",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "View More",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "image",
              key: "left-image",
              displayer: "Background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edcae1057bdf002c2ad7a3?alt=media&timestamp=1693305546889",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "right-side",
      displayer: "Right Side",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "side-text",
              displayer: "Side Text",
              value: "NEW MAN SUMMER LOOK",
            },
            {
              type: "image",
              key: "left-image",
              displayer: "Background",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edcae1057bdf002c2ad7a4?alt=media&timestamp=1693305546889",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-19";
  }

  render() {
    let leftImg = this.getPropValue("left-side")[0].value[6].value;
    let topTxt = this.getPropValue("left-side")[0].value[0].value;
    let midTxt = this.getPropValue("left-side")[0].value[1].value;
    let bottomTxt = this.getPropValue("left-side")[0].value[2].value;
    let leftSideText = this.getPropValue("left-side")[0].value[4].value;
    let text = this.getPropValue("left-side")[0].value[3].value;
    let buttonText = this.getPropValue("left-side")[0].value[5].value[0].value;
    let buttonPath = this.getPropValue("left-side")[0].value[5].value[1].value;

    let rightImg = this.getPropValue("right-side")[0].value[1].value;
    let rightSideText = this.getPropValue("right-side")[0].value[0].value;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <img src={leftImg} alt="" />
              <div className={this.decorateCSS("text-content")}>
                <div className={this.decorateCSS("tittle-wrapper")}>
                  <div className={this.decorateCSS("top")}>
                    <div>{topTxt}</div>
                  </div>

                  <div className={this.decorateCSS("middle")}>
                    <div>{midTxt}</div>
                  </div>

                  <div className={this.decorateCSS("bottom")}>
                    <div>{bottomTxt}</div>
                  </div>
                </div>

                <div className={this.decorateCSS("text")}>{text}</div>

                <ComposerLink path={buttonPath}>
                  <span className={this.decorateCSS("action-button")}>
                    {buttonText}
                  </span>
                </ComposerLink>
              </div>
              <div className={this.decorateCSS("side-text")}>
                {leftSideText}
              </div>
            </div>

            <div className={this.decorateCSS("right")}>
              <img src={rightImg} alt="" />

              <div className={this.decorateCSS("side-text")}>
                {rightSideText}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header19;
