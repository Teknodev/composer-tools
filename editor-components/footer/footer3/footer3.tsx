import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SocialItem = {
  icon: TypeMediaInputValue;
  url: string;
};

type LinkItem = {
  text: React.JSX.Element;
  url: string;
};

type MenuItem = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
  pageLink: string;
};

type Column = {
  categoryTitle: React.JSX.Element;
  categoryTitleLink: string;
  categoryTitleMedia: TypeMediaInputValue;
  menuItems: MenuItem[];
};

type LogoObject = {
  logo: TypeMediaInputValue;
  logoUrl: string;
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
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
            availableTypes: ["image", "icon"],
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Imperdiet parturient eleifend scelerisque natoque parturient rutrum mus eros dis ullamcorper a ullamcorper.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "socialItem",
          displayer: "Social Item",
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
          key: "socialItem",
          displayer: "Social Item",
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
        {
          type: "object",
          key: "socialItem",
          displayer: "Social Item",
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
      ],
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footerColumn",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "CONTACT INFO",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "49 Featherstone Street London, UK",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLocationDot",
                      },
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "pageLink",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Phone: [+44] 450 88 800",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaPhoneAlt",
                      },
                    },
                    {
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "E-Mail: contact@website.com",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "IoMdMail",
                      },
                    },
                    {
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Web: keydesign-themes.com",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "TiWorld",
                      },
                    },
                    {
                      type: "page",
                      key: "pageLink",
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
          key: "footerColumn",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "ADDITIONAL LINK",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "About us",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      displayer: "Navigate To",
                      key: "pageLink",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Terms and conditions",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "News",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Contact us",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
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
          key: "footerColumn",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "LATEST NEWS",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Future design concept - February 3, 2016",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      displayer: "Navigate To",
                      key: "pageLink",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Stand out venues - January 25, 2016",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Technology upgraded - January 25, 2016",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Deliver fresh news - February 15, 2015",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Development solutions - January 25, 2015",
                    },
                    {
                      type: "media",
                      key: "icon",
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
                      type: "page",
                      key: "pageLink",
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
      key: "footerText",
      displayer: "Footer Text",
      value: "Composer by Blinkpage. All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "linkItem",
          displayer: "Link Item",
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
          key: "linkItem",
          displayer: "Link Item",
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
    const socials = this.castToObject<SocialItem[]>("socials");
    const links = this.castToObject<LinkItem[]>("links");
    const footerData = this.castToObject<Column[]>("footer");

    const logoObject = this.castToObject<LogoObject>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const line = this.getPropValue("line");

    const footerTextExist = this.castToString(this.getPropValue("footerText"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasRenderableButton = buttons.some((btn) => this.castToString(btn.text));

    const headerExist = subtitleExist || titleExist || logo || descriptionExist || hasRenderableButton || socials.length > 0;

    const alignment = Base.getContentAlignment();

    const position = this.getPropValue("position");

    const firstContainerExist = headerExist || footerData.length > 0;
    const secondContainerExist = links.length > 0 || footerTextExist;

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
           {firstContainerExist && <Base.Container className={this.decorateCSS("first-container")}>
              <Base.MaxContent className={this.decorateCSS("first-max-content")}>
                {
                  <div className={`${this.decorateCSS("items")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`} data-alignment={alignment}>
                    {headerExist && (
                      <Base.VerticalContent className={this.decorateCSS("header")}>
                        {(logo?.url || logo?.name) && (
                          <ComposerLink path={logoUrl}>
                            <div className={this.decorateCSS("logo")}>
                              <Base.Media
                                value={logo}
                                className={`${this.decorateCSS("image")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                              />
                            </div>
                          </ComposerLink>
                        )}
                        {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                        {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                        {descriptionExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
                        {hasRenderableButton && (
                          <div className={this.decorateCSS("button-container")}>
                            {buttons.map(
                              (item: INPUTS.CastedButton, index: number) =>
                                this.castToString(item.text) && (
                                  <ComposerLink key={index} path={item.url}>
                                    <Base.Button
                                      buttonType={item.type}
                                      className={this.decorateCSS("button")}
                                    >
                                      <Base.P className={this.decorateCSS("button-text")}>
                                        {item.text}
                                      </Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                )
                            )}
                          </div>
                        )}
                        {socials.length > 0 && (
                          <div className={this.decorateCSS("socials-container")}>
                            {socials.map((item: SocialItem, index: number) => {
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

                    {footerData.length > 0 &&
                      footerData.map((item: Column, indexColumn: number) => {
                        const categoryTitleExist = this.castToString(item.categoryTitle);
                        const categoryMediaExist = hasMedia(item.categoryTitleMedia);
                        const menuItems: MenuItem[] = item.menuItems || [];
                        const hasItems = menuItems.some((v: MenuItem) => this.castToString(v.text) || hasMedia(v.icon));
                        const listExist = categoryTitleExist || categoryMediaExist || hasItems;
                        return (
                          listExist && (
                            <div key={indexColumn} className={`${this.decorateCSS("list-group")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                              {(categoryTitleExist || categoryMediaExist) && (
                                <ComposerLink path={item.categoryTitleLink}>
                                  <div className={this.decorateCSS("menu-media-wrapper")}>
                                    {categoryMediaExist && (
                                      <Base.Media value={item.categoryTitleMedia} className={this.decorateCSS("menu-title-media")} />
                                    )}
                                    {categoryTitleExist && <Base.H6 className={this.decorateCSS("title")}>{item.categoryTitle}</Base.H6>}
                                  </div>
                                </ComposerLink>
                              )}
                              {menuItems.length > 0 && (
                                <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                  {menuItems.map((v: MenuItem, indexMenuItem: number) => {
                                    const textExist = this.castToString(v.text);
                                    const mediaExist = hasMedia(v.icon);
                                    const elementExist = textExist || mediaExist;
                                    return (
                                      elementExist && (
                                        <ComposerLink key={indexMenuItem} path={v.pageLink}>
                                          <div
                                            className={`${this.decorateCSS("element")} ${v.pageLink && this.decorateCSS("has-path")}`}
                                            data-animation={v.pageLink ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                          >
                                            {mediaExist && (
                                              <Base.Media
                                                value={v.icon}
                                                className={this.decorateCSS("element-icon")}
                                              />
                                            )}
                                            {textExist && (
                                              <Base.P className={this.decorateCSS("text")}>
                                                {v.text}
                                              </Base.P>
                                            )}
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
              </Base.MaxContent>
            </Base.Container>}

            {line && <div className={this.decorateCSS("line")}></div>}

            {secondContainerExist && <Base.Container className={this.decorateCSS("second-container")}>
              <Base.MaxContent className={this.decorateCSS("second-max-content")}>
                {(footerTextExist || links.length > 0) && (
                  <div className={`${this.decorateCSS("footer-bottom")}
                  ${alignment === "center" && this.decorateCSS("center")}`}>
                    {footerTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("footerText")}</Base.P>}
                    {links.length > 0 && (
                      <Base.Row className={this.decorateCSS("links")}>
                        {links.map((item: LinkItem, index: number) => {
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
