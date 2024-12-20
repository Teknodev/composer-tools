import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer7.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class Footer7Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "FAQs",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "About Us",
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

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "Composer by Blinkpage. All rights reserved",
    });
  }

  getName(): string {
    return "Footer 7";
  }

  render() {
    const logo = this.getPropValue("logo");
    const links = this.castToObject<any[]>("links");

    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {logo && (
              <div className={this.decorateCSS("left")}>
                <img src={logo} className={this.decorateCSS("image")} alt="" />
              </div>
            )}

            <div className={this.decorateCSS("right")}>
              {links.length > 0 && (
                <div className={this.decorateCSS("upper")}>
                  {links.map((item: any, index: number) => {
                    const textExist = this.castToString(item.text);
                    return (
                      textExist && (
                        <div className={this.decorateCSS(item.url ? "link-element-has-path" : "link-element")}>
                          <ComposerLink key={index} path={item.url}>
                            <Base.P className={this.decorateCSS("link-text")}>{item.text}</Base.P>
                          </ComposerLink>
                        </div>
                      )
                    );
                  })}
                </div>
              )}
              {footerTextExist && (
                <div className={this.decorateCSS("bottom")}>
                  <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer7Page;
