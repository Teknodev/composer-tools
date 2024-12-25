import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type FooterValues = {
  icon: string;
  footerTitle: JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerIcon: string;
  footerText: JSX.Element;
  path: string;
};

class Footer8Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Imperdiet parturient eleifend scelerisque natoque parturient rutrum mus eros dis ullamcorper a ullamcorper.",
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "About",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Contact",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Blog",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Our Story",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Careers",
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
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Company",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Press",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Brand Assets",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Changelog",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Help centre",
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
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Resources",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Documentation",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Tutorials",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "API Reference",
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
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Contact",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Support",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Feedback",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Live Chat",
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
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "bottomText",
      displayer: "Bottom Text",
      value: "Composer by Blinkpage. All rights reserved.",
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
              value: "Terms and Conditions",
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
      type: "array",
      key: "socials",
      displayer: "Social Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaFacebookF",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Facebook",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaInstagram",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Instagram",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaXTwitter",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Twitter",
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
    return "Footer 8";
  }

  render() {
    const links = this.castToObject<any[]>("links");
    const footer = this.castToObject<any[]>("footer");
    const socials = this.castToObject<any[]>("socials");

    const logo = this.getPropValue("logo");

    const buttonTextExist = this.castToString(this.getPropValue("bottomText"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {
              <div className={this.decorateCSS("items")}>
                {logo && (
                  <div className={this.decorateCSS("header")}>
                    <img src={logo} className={this.decorateCSS("image")} alt="" />
                  </div>
                )}

                {footer.length > 0 &&
                  footer.map((item: FooterValues, indexFooter: number) => {
                    const footerTitleExist = this.castToString(item.footerTitle);
                    const footerTextExist = item.footerText.length > 0;
                    const listExist = footerTitleExist || footerTextExist;
                    return (
                      listExist && (
                        <div key={indexFooter} className={this.decorateCSS("list-group")}>
                          {footerTitleExist && <Base.H2 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H2>}
                          {item.footerText.length > 0 && (
                            <Base.VerticalContent className={this.decorateCSS("text-container")}>
                              {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                                const footerTextExist = this.castToString(v.footerText);
                                const elementExist = footerTextExist;
                                return (
                                  elementExist && (
                                    <ComposerLink key={indexFooterText} path={v.path}>
                                      <div className={this.decorateCSS(v.path ? "element-has-path" : "element")}>{footerTextExist && <Base.P className={this.decorateCSS("text")}>{v.footerText}</Base.P>}</div>
                                    </ComposerLink>
                                  )
                                );
                              })}
                            </Base.VerticalContent>
                          )}
                        </div>
                      )
                    );
                  })}
              </div>
            }

            {(buttonTextExist || links.length > 0) && (
              <div className={this.decorateCSS("footer-bottom")}>
                {links.length > 0 && (
                  <div className={this.decorateCSS("links")}>
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
                {buttonTextExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("bottomText")}</Base.P>}

                {socials.length > 0 && (
                  <div className={this.decorateCSS("socials-container")}>
                    {socials.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        (item.icon || textExist) && (
                          <ComposerLink key={index} path={item.url}>
                            <div className={this.decorateCSS("socials-element")}>
                              <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={item.icon} />
                              <Base.P className={this.decorateCSS("text")}>{item.text}</Base.P>
                            </div>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer8Page;
