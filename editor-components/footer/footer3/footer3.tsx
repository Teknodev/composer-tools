import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer3.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type FooterValues = {
  icon: string;
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerIcon: string;
  footerText: React.JSX.Element;
  path: string;
};

class Footer3Page extends BaseFooter {
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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Imperdiet parturient eleifend scelerisque natoque parturient rutrum mus eros dis ullamcorper a ullamcorper.",
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media Items",
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
              value: "CONTACT INFO",
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
                      value: "49 Featherstone Street London, United Kingdom",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "FaLocationDot",
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
                      value: "Phone: [+44] 450 88 800",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "FaPhoneAlt",
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
                      value: "E-Mail: contact@website.com",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "IoMdMail",
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
                      value: "Web: keydesign-themes.com",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "TiWorld",
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
              value: "ADDITIONAL LINK",
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
                      value: "About us",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Terms and conditions",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Privacy Policy",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "News",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Contact us",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
              value: "LATEST NEWS",
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
                      value: "Future design concept - February 3, 2016",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Stand out venues - January 25, 2016",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Technology upgraded - January 25, 2016",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Deliver fresh news - February 15, 2015",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
                      value: "Development solutions - January 25, 2015",
                    },
                    {
                      type: "icon",
                      key: "footerIcon",
                      displayer: "Icon",
                      value: "",
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
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
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
    return "Footer 3";
  }

  render() {
    const socials = this.castToObject<any[]>("socials");
    const links = this.castToObject<any[]>("links");
    const footer = this.castToObject<any[]>("footer");

    const logo = this.getPropValue("logo");
    const logoUrl = this.getPropValue("logoUrl");
    const line = this.getPropValue("line");

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const headerExist = logo || descriptionExist || socials.length > 0;

    const alignment = Base.getContentAlignment();

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            <Base.Container className={this.decorateCSS("first-container")}>
              <Base.MaxContent className={this.decorateCSS("first-max-content")}>
                {
                  <div className={this.decorateCSS("items")}>
                    {headerExist && (
                      <Base.VerticalContent className={this.decorateCSS("header")}>
                        {logo && (
                          <ComposerLink path={logoUrl}>
                            <div className={this.decorateCSS("logo")}>
                              <img src={logo} className={this.decorateCSS("image")} alt="" />
                            </div>
                          </ComposerLink>
                        )}
                        {descriptionExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
                        {socials.length > 0 && (
                          <div className={this.decorateCSS("socials-container")}>
                            {socials.map((item: any, index: number) => {
                              return (
                                item.icon && (
                                  <ComposerLink key={index} path={item.url}>
                                    <div 
                                      className={this.decorateCSS("socials-element")}
                                      data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                      data-has-link={Boolean(item.url)}
                                    >
                                      <Base.Icon 
                                        propsIcon={{ className: this.decorateCSS("icon") }} 
                                        name={item.icon} 
                                      />
                                    </div>
                                  </ComposerLink>
                                )
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
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
                                    const elementExist = footerTextExist || v.footerIcon;
                                    return (
                                      elementExist && (
                                        <div 
                                          className={`${this.decorateCSS("element")} ${v.path && this.decorateCSS("has-path")}`}
                                          data-animation={v.path ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                        >
                                          {v.footerIcon && (
                                            <Base.Icon 
                                              propsIcon={{ 
                                                className: this.decorateCSS("element-icon")
                                              }} 
                                              name={v.footerIcon} 
                                            />
                                          )}
                                          {footerTextExist && (
                                            <Base.P className={this.decorateCSS("text")}>
                                              {v.footerText}
                                            </Base.P>
                                          )}
                                        </div>
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
              </Base.MaxContent>
            </Base.Container>

            {line && <div className={this.decorateCSS("line")}></div>}

            <Base.Container className={this.decorateCSS("second-container")}>
              <Base.MaxContent className={this.decorateCSS("second-max-content")}>
                {(bottomTextExist || links.length > 0) && (
                  <div className={`${this.decorateCSS("footer-bottom")} 
                  ${alignment === "center" && this.decorateCSS("center")}`}>
                    {bottomTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("bottomText")}</Base.P>}
                    {links.length > 0 && (
                      <Base.Row className={this.decorateCSS("links")}>
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
                      </Base.Row>
                    )}
                  </div>
                )}
              </Base.MaxContent>
            </Base.Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer3Page;
