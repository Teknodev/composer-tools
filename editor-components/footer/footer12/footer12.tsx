import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";

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
      value: "",
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
      value: "",
    });
    this.addProp({
      type: "array",
      key: "link-list",
      displayer: "Link List",
      value: [
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Terms of Service",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Copyright © 2023 Teknodev LTD.All rights reserved.",
    });
  }
  getName(): string {
    return "Footer 12";
  }
  render() {
    const logoImage = this.getPropValue("logo");
    const logoText = this.getPropValue("logo-text");
    const imageUrl = this.getPropValue("logo-url");
    const textUrl = this.getPropValue("logo-text-url");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            {logoImage ? (
              <ComposerLink path={imageUrl}>
                <img src={logoImage} className={this.decorateCSS("img")} alt="" />
              </ComposerLink>
            ) : (
              <ComposerLink path={textUrl}>
                <span className={this.decorateCSS("logo-text")}>{logoText}</span>
              </ComposerLink>
            )}
            <div className={this.decorateCSS("right-content")}>
              <div className={this.decorateCSS("up-text")}>
                {this.castToObject<any[]>("link-list").map((item: any, index) => {
                  return (
                    <ComposerLink key={index} path={item.path}>
                      <span className={this.decorateCSS("ref-text")}>{item.refText}</span>
                    </ComposerLink>
                  )
                })}
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
