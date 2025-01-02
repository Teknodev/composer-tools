import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonType = INPUTS.CastedButton;
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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6707c9da97fe08002c750ad5?alt=media&timestamp=1728563719607",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Go home", "", null, null, "Primary")],
    });
  }

  getName(): string {
    return "HTTP Codes 1";
  }

  render() {
    const image = this.getPropValue("image");
    const buttons = this.castToObject<ButtonsArray>("buttons");
    const hasRightSide = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description")) || buttons.length > 0;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content-box")}>
            <div className={this.decorateCSS("content")}>
              {image && (
                <div className={`${this.decorateCSS("left-side")} ${!hasRightSide && this.decorateCSS("left-side-full-width")}`}>
                  <div className={`${this.decorateCSS("image-box")} ${!hasRightSide && this.decorateCSS("image-box-full-width")}`}>
                    <img className={`${this.decorateCSS("image")} ${!hasRightSide && this.decorateCSS("image-full")}`} src={this.getPropValue("image")} alt="" />
                  </div>
                </div>
              )}
              {hasRightSide && (
                <div className={this.decorateCSS("right-side")}>
                  <Base.VerticalContent className={this.decorateCSS("right-content")}>
                    {this.castToString(this.getPropValue("title")) && <div className={`${this.decorateCSS("title")} ${!image && this.decorateCSS("title-no-image")}`}>{this.getPropValue("title")}</div>}
                    {this.castToString(this.getPropValue("description")) && <div className={`${this.decorateCSS("description")} ${!image && this.decorateCSS("description-no-image")}`}>{this.getPropValue("description")}</div>}
                    {buttons.length > 0 && (
                      <div className={`${this.decorateCSS("button-wrapper")} ${!image && this.decorateCSS("button-wrapper-no-image")}`}>
                        {buttons.map((button: ButtonType, index: number) => {
                          return (
                            <ComposerLink path={button.url}>
                              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                {button.text}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </Base.VerticalContent>
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
