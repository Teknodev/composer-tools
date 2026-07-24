import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";


type FooterValues = {
  icon: string;
  footerTitle: React.JSX.Element;
  footerTitleLink: string;
  footerTitleMedia: TypeMediaInputValue;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerIcon: string;
  navTitle: React.JSX.Element;
  navNavigateTo: string;
  navMedia: TypeMediaInputValue;
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
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
      value: "Build websites faster with an Blinkpage",
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
              value: "About",
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Contact",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Blog",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Our Story",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Careers",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
              value: "Company",
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Press",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Brand Assets",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Changelog",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Help centre",
                    },

                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
              value: "Resources",
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Documentation",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Tutorials",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "API Reference",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
              value: "Contact",
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Support",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "asdasd",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "Feedback",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Live Chat",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
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
                availableTypes: ["icon", "image"],
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
                availableTypes: ["icon", "image"],
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

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasRenderableButton = buttons.some((btn) => this.castToString(btn.text));

    const footerTextExist = this.castToString(this.getPropValue("footerText"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const headerExist = (logo?.url || logo?.name) || subtitleExist || titleExist || descriptionExist || hasRenderableButton;

    const position = this.getPropValue("position");
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("footer-page")} ${alignment === "left" ? this.decorateCSS("left-alignment") : ""} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
            {
              <div className={this.decorateCSS("items")}>
                {headerExist && (
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {(logo?.url || logo?.name) && (
                      <div className={this.decorateCSS("logo-container")}>
                        <ComposerLink path={logoUrl}>
                          <Base.Media value={logo} className={`${this.decorateCSS("image")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                        </ComposerLink>
                      </div>
                    )}
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                    {socials.length > 0 && (
                      <div className={this.decorateCSS("header-socials")}>
                        {socials.map((item: any, index: number) =>
                          hasMedia(item.icon) ? (
                            <ComposerLink key={index} path={item.url}>
                              <div
                                className={this.decorateCSS("header-social-element")}
                                data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                              >
                                <Base.Media value={item.icon} className={`${this.decorateCSS("header-social-icon")} ${item.icon?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                              </div>
                            </ComposerLink>
                          ) : null
                        )}
                      </div>
                    )}
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
                  </Base.VerticalContent>
                )}

                {footer.length > 0 &&
                  footer.map((item: FooterValues, indexFooter: number) => {
                    const footerTitleExist = this.castToString(item.footerTitle);
                    const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
                    const footerTextExist = item.footerText.length > 0;
                    const listExist = footerTitleExist || footerTitleMediaExist || footerTextExist;
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
                          {item.footerText.length > 0 && (
                            <Base.VerticalContent className={this.decorateCSS("text-container")}>
                              {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                                const footerTextExist = this.castToString(v.navTitle);
                                const navMediaExist = hasMedia(v.navMedia);
                                const elementExist = footerTextExist || navMediaExist;
                                return (
                                  elementExist && (
                                    <ComposerLink key={indexFooterText} path={v.navNavigateTo}>
                                      <div
                                        className={`${this.decorateCSS("element")} ${v.navNavigateTo && this.decorateCSS("has-path")}`}
                                        data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                      >
                                        {navMediaExist && (
                                          <Base.Media value={v.navMedia} className={this.decorateCSS("menu-item-media")} />
                                        )}
                                        {footerTextExist && <Base.P className={this.decorateCSS("text")}>{v.navTitle}</Base.P>}
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
            }

            {(footerTextExist || links.length > 0) && (
              <div className={this.decorateCSS("footer-bottom")}>
                {footerTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("footerText")}</Base.P>}

                <div className={this.decorateCSS("right-wrapper")}>
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
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Footer8Page;
