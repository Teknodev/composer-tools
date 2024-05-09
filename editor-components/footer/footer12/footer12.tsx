import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Footer12Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "footerLogo",
      displayer: "Footer Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Copyright © 2023 Teknodev LTD.All rights reserved.",
    });
    this.addProp({
      type: "string",
      key: "ref-text",
      displayer: "Referral Text",
      value: "Privacy Policy"
    });
    this.addProp({
      type: "page",
      key: "ref-text-page",
      displayer: "Referral Text Url",
      value: ""
    });

    this.addProp({
      type: "string",
      key: "ref-text1",
      displayer: "Referral Text 1",
      value: "Terms of Service"
    });
    this.addProp({
      type: "page",
      key: "ref-text1-page",
      displayer: "Referral Text 1 Url",
      value: ""
    });

  }
  getName(): string {
    return "Footer 12";
  }
  render() {

    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <img
              alt=""
              src={this.getPropValue("footerLogo")}
              className={this.decorateCSS("img")}
            />
            <div className={this.decorateCSS("right-content")}>
              <div className={this.decorateCSS("up-text")}>
                <span className={this.decorateCSS("ref-text")}>{this.getPropValue("ref-text")}</span>
                <span className={this.decorateCSS("ref-text1")}>{this.getPropValue("ref-text1")}</span>
              </div>
              <div className={this.decorateCSS("down-text")}>
                <span className={this.decorateCSS("text")}>{this.getPropValue("text")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer12Page;
