import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type icon = {
  icon: string;
  page: string;
};

class Footer10Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676e80240655f8002cadb8be?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logoUrl",
      displayer: "Logo Url",
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
              value: "About",
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
              value: "Company",
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
              value: "Services",
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
              value: "Testimonials",
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
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "All rights reserved by Blinkpage",
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "BiLogoFacebookCircle",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "icon",
              value: "FaTwitter",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "icon",
              value: "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "icon",
              value: "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }
  static getName(): string {
    return "Footer 10";
  }
  render() {
    const logo = this.getPropValue("logo");
    const logoUrl = this.getPropValue("logoUrl");
    const links = this.castToObject<any[]>("links");
    const line = this.getPropValue("line");

    const icons = this.castToObject<icon[]>("icons");

    const upperExist = logo || links.length > 0;

    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    const iconsExist = icons.length > 0;
    const bottomExist = footerTextExist || iconsExist;

    const alignment = Base.getContentAlignment();

    return (
      <div className={this.decorateCSS("container")}>
        {upperExist && (
          <Base.Container className={this.decorateCSS("first-container")}>
            <Base.MaxContent className={this.decorateCSS("first-max-content")}>
              {upperExist && (
                <div className={`${this.decorateCSS("upper")} ${alignment === "center" && this.decorateCSS("center")}`}>
                  {logo && (
                    <ComposerLink path={logoUrl}>
                      <div className={this.decorateCSS("logo")}>
                        <img src={logo} className={this.decorateCSS("image")} alt="" />
                      </div>
                    </ComposerLink>
                  )}
                  {links.length > 0 && (
                    <div className={`${this.decorateCSS("links")} ${logo && this.decorateCSS("full-width")}`}>
                      {links.map((item: any, index: number) => {
                        const textExist = this.castToString(item.text);
                        return (
                          textExist && (
                            <div 
                              className={`${this.decorateCSS("link-element")} ${item.url && this.decorateCSS("has-path")}`}
                              data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                            >
                              <ComposerLink key={index} path={item.url}>
                                <Base.H3 className={this.decorateCSS("link-text")}>{item.text}</Base.H3>
                              </ComposerLink>
                            </div>
                          )
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={`${this.decorateCSS("bottom")} ${alignment === "center" && this.decorateCSS("center")}`}>
                {footerTextExist && (
                  <div className={iconsExist ? this.decorateCSS("left") : this.decorateCSS("left-full")}>
                    <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>
                  </div>
                )}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {icons.length > 0 &&
                      icons.map((item: icon, index: number) => {
                        return (
                          item.icon && (
                            <div 
                              className={this.decorateCSS("icon-element")}
                              data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                            >
                              <ComposerLink path={item.page}>
                                <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              </ComposerLink>
                            </div>
                          )
                        );
                      })}
                  </div>
                )}
              </div>
            </Base.MaxContent>
          </Base.Container>
        )}
      </div>
    );
  }
}

export default Footer10Page;
