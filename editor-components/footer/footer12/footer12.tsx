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
      key: "logo",
      displayer: "Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "page",
      key: "logo-url",
      displayer: "Logo Url",
      value: ""
    });
    this.addProp({
      type: "string",
      key: "logo-text",
      displayer: "Logo Text",
      value: "Lorem",
    });
    this.addProp({
      type: "page",
      key: "logo-text-url",
      displayer: "Logo Text Url",
      value: ""
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
      displayer: "Text Url",
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
      displayer: "Text 1 Url",
      value: ""
    });

  }
  getName(): string {
    return "Footer 12";
  }
  render() {
    const logoImage = this.getPropValue("logo");
    const logoText = this.getPropValue("logo-text");
    const imageUrl = this.getPropValue("logo-url");
    const textUrl = this.getPropValue("logo-text-url")


    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {logoImage ?
              <ComposerLink path={imageUrl}>
                <img src={logoImage} className={this.decorateCSS("img")} alt="" />
              </ComposerLink> :
              <ComposerLink path={textUrl}>
                <span className={this.decorateCSS("logo-text")}>{logoText}</span>
              </ComposerLink>
            }
            <div className={this.decorateCSS("right-content")}>
              <div className={this.decorateCSS("up-text")}>
                <ComposerLink path={this.getPropValue("ref-text-page")}>
                  <span className={this.decorateCSS("ref-text")}>{this.getPropValue("ref-text")}</span>
                </ComposerLink>
                <ComposerLink path={this.getPropValue("ref-text1-page")}>
                  <span className={this.decorateCSS("ref-text1")}>{this.getPropValue("ref-text1")}</span>
                </ComposerLink>
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
