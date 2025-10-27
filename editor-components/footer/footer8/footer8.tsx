import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer8.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type FooterValues = {
  icon: string;
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerIcon: string;
  nav_title: React.JSX.Element;
  nav_navigate_to: string;
};

class Footer8Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Default", "Absolute"],
      },
    });

    this.addProp({
      type: "object",
      key: "logo",
      displayer: "Logo",
      value: [
        {
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
        },
        {
          type: "page",
          key: "logoUrl",
          displayer: "Navigate To",
          value: ""
        },
      ],
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Contact",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Blog",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Our Story",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Careers",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Press",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Brand Assets",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Changelog",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Help centre",
                    },

                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Documentation",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Tutorials",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "API Reference",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Support",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Feedback",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
                      key: "nav_title",
                      displayer: "Text",
                      value: "Live Chat",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
                      displayer: "Navigate To",
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
              value: "Terms and Conditions",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaFacebookF",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaXTwitter",
              },
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
              displayer: "Navigate To",
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
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Footer 8";
  }

  render() {
    const links = this.castToObject<any[]>("links");
    const footer = this.castToObject<any[]>("footer");
    const socials = this.castToObject<any[]>("socials");

    const logoObject = this.castToObject<any>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));

    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {
              <div className={this.decorateCSS("items")}>
                {logo?.url && (
                  <ComposerLink path={logoUrl}>
                    <div className={this.decorateCSS("header")}>
                      <Base.Media value={logo} className={this.decorateCSS("image")} />
                    </div>
                  </ComposerLink>
                )}

                {footer.length > 0 &&
                  footer.map((item: FooterValues, indexFooter: number) => {
                    const footerTitleExist = this.castToString(item.footerTitle);
                    const footerTextExist = item.footerText.length > 0;
                    const listExist = footerTitleExist || footerTextExist;
                    return (
                      listExist && (
                        <div key={indexFooter} className={this.decorateCSS("list-group")}>
                          {footerTitleExist && <Base.H3 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H3>}
                          {item.footerText.length > 0 && (
                            <Base.VerticalContent className={this.decorateCSS("text-container")}>
                              {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                                const footerTextExist = this.castToString(v.nav_title);
                                const elementExist = footerTextExist;
                                return (
                                  elementExist && (
                                    <ComposerLink key={indexFooterText} path={v.nav_navigate_to}>
                                      <div 
                                        className={`${this.decorateCSS("element")} ${v.nav_navigate_to && this.decorateCSS("has-path")}`}
                                        data-animation={v.nav_navigate_to ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                      >
                                        {footerTextExist && <Base.P className={this.decorateCSS("text")}>{v.nav_title}</Base.P>}
                                      </div>
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

            {(bottomTextExist || links.length > 0 || socials.length > 0) && (
              <div className={this.decorateCSS("footer-bottom")}>
                {links.length > 0 && (
                  <div className={this.decorateCSS("links")}>
                    {links.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        textExist && (
                          <div 
                            className={`${this.decorateCSS("link-element")} ${item.url && this.decorateCSS("has-path")}`}
                            data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                          >
                            <ComposerLink key={index} path={item.url}>
                              <Base.P className={this.decorateCSS("link-text")}>{item.text}</Base.P>
                            </ComposerLink>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
                {bottomTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("bottomText")}</Base.P>}

                {socials.length > 0 && (
                  <div className={this.decorateCSS("socials-container")}>
                    {socials.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        (item.icon || textExist) && (
                          <ComposerLink key={index} path={item.url}>
                            <div 
                              className={`${this.decorateCSS("socials-element")} ${this.decorateCSS("socials-element")}`}
                              data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                            >
                              <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                              <Base.P className={this.decorateCSS("socials-text")}>{item.text}</Base.P>
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
      </Base.Container >
    );
  }
}

export default Footer8Page;
