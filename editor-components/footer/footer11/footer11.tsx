import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer11.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  icon: TypeMediaInputValue;
  page: string;
};

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerTitleLink: string;
  footerTitleMedia: TypeMediaInputValue;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  navTitle: React.JSX.Element;
  navNavigateTo: string;
  navMedia: TypeMediaInputValue;
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
};

class Footer11Page extends BaseFooter {
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
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Menu Item",
              value: "",
            },
            {
              type: "page",
              key: "footerTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "footerTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
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
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Menu Item",
              value: "",
            },
            {
              type: "page",
              key: "footerTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "footerTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
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
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Menu Item",
              value: "",
            },
            {
              type: "page",
              key: "footerTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "footerTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "navMedia",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
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
      key: "footerText",
      displayer: "Footer Text",
      value: "© 2024 Blinkpage. All rights reserved. Designed and developed by Blinkpage.",
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
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaPinterest",
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
                availableTypes: ["icon", "image"],
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
                availableTypes: ["icon", "image"],
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
                availableTypes: ["icon", "image"],
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
    return "Footer 11";
  }
  render() {
    const socials = this.castToObject<Icons[]>("socials");
    const footer = this.castToObject<FooterValues[]>("footer");

    const footerText = this.getPropValue("footerText");

    const footerTextExist = this.castToString(footerText);

    const columnsExist = footer.some((item: FooterValues) => {
      const footerTitleExist = this.castToString(item.footerTitle);
      const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
      const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle) || hasMedia(v.navMedia));
      return footerTitleExist || footerTitleMediaExist || hasItems;
    });

    const socialsExist = socials.length > 0 && socials.some((item: any) => item.icon);

    const position = this.getPropValue("position");
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${alignment === "left" ? this.decorateCSS("left-alignment") : this.decorateCSS("center-alignment")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {columnsExist && (
            <div className={this.decorateCSS("footer-columns")}>
              {footer.map((item: FooterValues, indexFooter: number) => {
                const footerTitleExist = this.castToString(item.footerTitle);
                const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
                const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle) || hasMedia(v.navMedia));
                const listExist = footerTitleExist || footerTitleMediaExist || hasItems;
                return (
                  listExist && (
                    <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                      {(footerTitleExist || footerTitleMediaExist) && (
                        <ComposerLink path={item.footerTitleLink}>
                          <div className={this.decorateCSS("menu-media-wrapper")}>
                            {footerTitleMediaExist && (
                              <Base.Media value={item.footerTitleMedia} className={this.decorateCSS("menu-title-media")} />
                            )}
                            {footerTitleExist && <Base.H6 className={this.decorateCSS("column-title")}>{item.footerTitle}</Base.H6>}
                          </div>
                        </ComposerLink>
                      )}
                      {hasItems && (
                        <Base.VerticalContent className={this.decorateCSS("text-container")}>
                          {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                            const textExist = this.castToString(v.navTitle);
                            const navMediaExist = hasMedia(v.navMedia);
                            return (
                              (textExist || navMediaExist) && (
                                <ComposerLink key={indexFooterText} path={v.navNavigateTo}>
                                  <div className={this.decorateCSS("menu-media-wrapper")}>
                                    {navMediaExist && (
                                      <Base.Media value={v.navMedia} className={this.decorateCSS("menu-item-media")} />
                                    )}
                                    {textExist && (
                                      <Base.P
                                        className={this.decorateCSS("footer-text")}
                                        data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                        data-has-link={Boolean(v.navNavigateTo)}
                                      >
                                        {v.navTitle}
                                      </Base.P>
                                    )}
                                  </div>
                                </ComposerLink>
                              )
                            );
                          })}
                        </Base.VerticalContent>
                      )}
                    </Base.VerticalContent>
                  )
                );
              })}
            </div>
          )}

          {(socialsExist || footerTextExist) && (
            <div className={this.decorateCSS("footer-bottom")}>
              {socialsExist && (
                <div className={this.decorateCSS("socials-container")}>
                  {socials.map((item: any, index: number) => {
                    return (
                      item.icon && (
                        <ComposerLink key={index} path={item.url}>
                          <div 
                            className={this.decorateCSS("socials-element")}
                            data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                          >
                            <Base.Media value={item.icon} className={`${this.decorateCSS("icon")} ${item.icon?.type === "image" ? this.decorateCSS("is-image") : ""}`} />
                          </div>
                        </ComposerLink>
                      )
                    );
                  })}
                </div>
              )}
              {footerTextExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer11Page;
