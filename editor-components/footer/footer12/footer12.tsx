import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
interface FooterLink {
  pageTitle: string;
  pageUrl: string;
}
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
      value: "Privacy Policy",
    });
    this.addProp({
      type: "page",
      key: "ref-text-page",
      displayer: "Referral Text Url",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "ref-text1",
      displayer: "Referral Text 1",
      value: "Terms of Service",
    });
    this.addProp({
      type: "page",
      key: "ref-text1-page",
      displayer: "Referral Text 1 Url",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "footer-links",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Title",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "pageUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Title",
              value: "Terms of Service",
            },
            {
              type: "page",
              key: "pageUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Footer 12";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <img
              alt=""
              src={this.getPropValue("footerLogo")}
              className={this.decorateCSS("img")}
            />
            <div className={this.decorateCSS("footer-links")}>
              <div className={this.decorateCSS("links")}>
                {this.castToObject<FooterLink[]>("footer-links").map(
                  (link: FooterLink, index: number) => {
                    return (
                      <ComposerLink key={index} path={link.pageUrl}>
                        <span className={this.decorateCSS("link")}>{link.pageTitle}</span>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
              <div className={this.decorateCSS("down-text")}>
                <span className={this.decorateCSS("text")}>
                  {this.getPropValue("text")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer12Page;
