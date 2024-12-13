import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type ButtonType = {
  text?: string;
  url?: string;
};
type ButtonsArray = ButtonType[];

class HTTP_CODES1 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Oops!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "We couldn't find the page you were looking for",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c42470655f8002ca6f1cc?alt=media&timestamp=1734099546858",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Go home",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "HTTP Codes 1";
  }

  render() {
    const image = this.getPropValue("image");
    const buttons = this.castToObject<ButtonsArray>("buttons");
    const hasRightSide = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description")) || (buttons.length > 0);
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content-box")}>
            <div className={this.decorateCSS("content")}>
              {image && (
                <div className={hasRightSide ? this.decorateCSS("left-side") : this.decorateCSS("left-side-full-width")}>
                  <div className={hasRightSide ? this.decorateCSS("image-box") : this.decorateCSS("image-box-full-width")} >
                    <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="" />
                  </div>
                </div>
              )}
              {(hasRightSide) && (
                <div className={this.decorateCSS("right-side")}>
                  <div className={this.decorateCSS("right-content")}>
                    {this.castToString(this.getPropValue("title")) && (
                      <div className={image ? this.decorateCSS("title") : this.decorateCSS("title-no-image")}>{this.getPropValue("title")}</div>
                    )}
                    {this.castToString(this.getPropValue("description")) && (
                      <div className={image ? this.decorateCSS("description") : this.decorateCSS("description-no-image")}>{this.getPropValue("description")}</div>
                    )}
                    {(buttons.length > 0) && (
                      <div className={image ? this.decorateCSS("button-wrapper") : this.decorateCSS("button-wrapper-no-image")}>
                        {buttons.map((button: ButtonType, index: number) => {
                          return (
                            <ComposerLink path={button.url}>
                              <Base.Button className={this.decorateCSS("button")}>
                                {button.text}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HTTP_CODES1;
