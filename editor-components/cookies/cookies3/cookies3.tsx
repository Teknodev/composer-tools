import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./cookies3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

class Cookies3 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/677bde046e203c002b732abb?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Cookies!",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "We use cookies to make your experience better",
    });

    this.addProp({
      type: "string",
      key: "leftButton",
      displayer: "Left Button",
      value: "Privacy Policy",
    });

    this.addProp({
      type: "page",
      key: "link",
      displayer: "Left Button Link",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "rightButton",
      displayer: "Right Button",
      value: "Ok",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });
  }

  getName(): string {
    return "Cookies 3";
  }

  handleAccept = () => {
    console.log("Accept button clicked");
  };

  render() {
    const exitIcon = this.getPropValue("exitIcon");
    const titleExist = this.castToString(this.getPropValue("title"));
    const textExist = this.castToString(this.getPropValue("text"));
    const image = this.getPropValue("image");
    const link = this.getPropValue("link");

    const leftButtonExist = this.castToString(this.getPropValue("leftButton"));
    const rightButtonExist = this.castToString(this.getPropValue("rightButton"));

    const line = this.getPropValue("line");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {exitIcon && (
              <div className={this.decorateCSS("exit-icon-container")}>
                <ComposerModalClose>
                  <ComposerIcon propsIcon={{ className: `${this.decorateCSS("icon")} ${!image && this.decorateCSS("icon-no-image")}` }} name={this.getPropValue("exitIcon")} />
                </ComposerModalClose>
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img src={image} className={this.decorateCSS("image")} alt="" />
              </div>
            )}

            {(titleExist || textExist) && (
              <Base.VerticalContent className={`${this.decorateCSS("header")} ${!image && this.decorateCSS("header-no-image")}`}>
                {titleExist && <Base.H5 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H5>}
                {textExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("text")}</Base.P>}
              </Base.VerticalContent>
            )}
            {(leftButtonExist || rightButtonExist) && (
              <div className={this.decorateCSS("button-wrapper")}>
                {leftButtonExist && (
                  <div className={this.decorateCSS("first-button-container")}>
                    <ComposerLink path={link}>{<button className={this.decorateCSS("first-button")}>{this.getPropValue("leftButton")}</button>}</ComposerLink>
                  </div>
                )}
                {line && <div className={this.decorateCSS("line")} />}
                {rightButtonExist && (
                  <div className={this.decorateCSS("second-button-container")}>
                    <button onClick={this.handleAccept} className={this.decorateCSS("second-button")}>
                      {this.getPropValue("rightButton")}
                    </button>
                  </div>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Cookies3;
