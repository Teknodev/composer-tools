import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer3.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type FooterValues = {
  icon: string;
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerIcon: TypeMediaInputValue;
  footerText: React.JSX.Element;
  path: string;
};

class Footer3Page extends BaseFooter {
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
      key: "socials",
      displayer: "Social Media Items",
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
                      value: "49 Featherstone Street London, UK",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLocationDot",
                      },
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
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
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaPhoneAlt",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "E-Mail: contact@website.com",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "IoMdMail",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Web: keydesign-themes.com",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "TiWorld",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
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
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "News",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Contact us",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
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
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Technology upgraded - January 25, 2016",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Deliver fresh news - February 15, 2015",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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
                      key: "footerText",
                      displayer: "Text",
                      value: "Development solutions - January 25, 2015",
                    },
                    {
                      type: "media",
                      key: "footerIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                    {
                      type: "page",
                      key: "path",
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

    const logoObject = this.castToObject<any>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const line = this.getPropValue("line");

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const headerExist = logo || descriptionExist || socials.length > 0;

    const alignment = Base.getContentAlignment();

    const position = this.getPropValue("position");

    const firstContainerExist = headerExist || footer.length > 0;
    const secondContainerExist = links.length > 0 || bottomTextExist;

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
           {firstContainerExist && <Base.Container className={this.decorateCSS("first-container")}>
              <Base.MaxContent className={this.decorateCSS("first-max-content")}>
                {
                  <div className={`${this.decorateCSS("items")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`} data-alignment={alignment}>
                    {headerExist && (
                      <Base.VerticalContent className={this.decorateCSS("header")}>
                        {logo?.url && (
                          <ComposerLink path={logoUrl}>
                            <div className={this.decorateCSS("logo")}>
                              <Base.Media value={logo} className={this.decorateCSS("image")} />
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
                                      <Base.Media 
                                        value={item.icon}
                                        className={this.decorateCSS("icon")} 
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
                            <div key={indexFooter} className={`${this.decorateCSS("list-group")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                              {footerTitleExist && <Base.H3 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H3>}
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
                                          {v.footerIcon?.name && (
                                            <Base.Media 
                                              value={v.footerIcon}
                                              className={this.decorateCSS("element-icon")}
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
            </Base.Container>}

            {line && <div className={this.decorateCSS("line")}></div>}

            {secondContainerExist && <Base.Container className={this.decorateCSS("second-container")}>
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
            </Base.Container>}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer3Page;
