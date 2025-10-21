import * as React from "react";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer7.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class Footer7Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676e80240655f8002cadb8be?alt=media",
      },
    });

    this.addProp({
      type: "page",
      key: "logoUrl",
      displayer: "Navigate To",
      value:""
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
              displayer: "Navigate To",
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
              displayer: "Navigate To",
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
              displayer: "Navigate To",
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

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Footer 7";
  }

  render() {
    const logo = this.getPropValue("logo");
    const logoUrl = this.getPropValue("logoUrl");
    const links = this.castToObject<any[]>("links");

    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {logo?.url && (
             <ComposerLink path={logoUrl}>
               <div className={this.decorateCSS("left")}>
                <Base.Media value={logo} className={this.decorateCSS("image")} />
              </div>
             </ComposerLink>
            )}

            <div
              className={`${this.decorateCSS("right")} ${!logo?.url && this.decorateCSS("full-width")}`}>
              {links.length > 0 && (
                <div className={this.decorateCSS("upper")}>
                  {links.map((item: any, index: number) => {
                    const textExist = this.castToString(item.text);
                    return (
                      textExist && (
                        <div
                          className={`${this.decorateCSS("link-element")} ${item.url && this.decorateCSS("has-path")}`}
                          data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}>
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
                  <Base.P className={`${this.decorateCSS("text")} ${!logo?.url && this.decorateCSS("left")}`}
                  >{this.getPropValue("footerText")}</Base.P>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Footer7Page;
