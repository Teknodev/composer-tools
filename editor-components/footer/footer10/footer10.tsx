import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";


type icon = {
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

class Footer10Page extends BaseFooter {
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
      value: "",
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
              value: "Company",
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
              value: "Services",
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
              value: "Testimonials",
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
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
                name: "BiLogoFacebookCircle",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
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
              key: "page",
              displayer: "Navigate To",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "page",
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
    return "Footer 10";
  }
  render() {
    const logoObject = this.castToObject<any>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const footer = this.castToObject<FooterValues[]>("footer");
    const links = this.castToObject<any[]>("links");
    const line = this.getPropValue("line");

    const socials = this.castToObject<icon[]>("socials");

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasRenderableButton = buttons.some((btn) => this.castToString(btn.text));

    const logoExist = !!(logo?.url || logo?.name);
    const logoAreaExist = logoExist || subtitleExist || titleExist || descriptionExist || hasRenderableButton;
    const linksPropExist = links.some((item: any) => this.castToString(item.text));
    const footerColumnsExist = footer.some((item: FooterValues) => {
      const footerTitleExist = this.castToString(item.footerTitle);
      const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
      const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle) || hasMedia(v.navMedia));
      return footerTitleExist || footerTitleMediaExist || hasItems;
    });

    const upperExist = logoAreaExist || linksPropExist;
    const middleExist = footerColumnsExist;

    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    const socialsExist = socials.length > 0;
    const bottomExist = footerTextExist || socialsExist;

    const alignment = Base.getContentAlignment();

    const position = this.getPropValue("position");

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <div className={this.decorateCSS("footer-inner")}>
        {(upperExist || middleExist) && (
          <Base.Container className={this.decorateCSS("footer-wrapper")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              {upperExist && (
                <div className={`${this.decorateCSS("upper")} ${alignment === "center" && this.decorateCSS("center")}`}>
                  {logoAreaExist && (
                    <Base.VerticalContent className={this.decorateCSS("logo-area")}>
                      {logoExist && (
                        <ComposerLink path={logoUrl}>
                          <div className={this.decorateCSS("logo")}>
                            <Base.Media value={logo} className={`${this.decorateCSS("image")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                          </div>
                        </ComposerLink>
                      )}
                      {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                      {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                      {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
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
                  {linksPropExist && (
                    <div className={`${this.decorateCSS("links")} ${logoAreaExist && this.decorateCSS("full-width")}`}>
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
              )}

              {middleExist && (
                <div className={this.decorateCSS("footer-columns")}>
                  {footer.map((item: FooterValues, indexFooter: number) => {
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
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={`${this.decorateCSS("bottom")} ${alignment === "center" && this.decorateCSS("center")}`}>
                {footerTextExist && (
                  <div className={socialsExist ? this.decorateCSS("left") : this.decorateCSS("left-full")}>
                    <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>
                  </div>
                )}
                {socials.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {socials.length > 0 &&
                      socials.map((item: icon, index: number) => {
                        return (
                          item.icon && (
                            <div 
                              className={this.decorateCSS("icon-element")}
                              data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                            >
                              <ComposerLink path={item.page}>
                                <Base.Media value={item.icon} className={`${this.decorateCSS("icon")} ${item.icon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
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
      </div>
    );
  }
}

export default Footer10Page;
