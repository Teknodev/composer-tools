import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

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

class Footer6Page extends BaseFooter {
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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let's work together",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "hello@gradastudio.net",
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              value: "Quick Links",
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
                      value: "About",
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
                      value: "News",
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
              value: "Our Address",
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
                      value: "Care+ Family Parham Bridges Canton Jackson, MS 39211",
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
                      value: "+1 601 978 2212",
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
                      value: "hello@ozark.com",
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
              value: "Get In Touch",
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
                      value: "Facebook",
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
                      value: "Twitter",
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
                      value: "Instagram",
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
      value: "2024 © Made with by Blinkpage.",
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate2"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Footer 6";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttonsExist = buttons.some((btn) => this.castToString(btn?.text));
    const headerExist = subtitleExist || titleExist || descriptionExist || buttonsExist;

    const footer = this.castToObject<any[]>("footer");

    const footerText = this.getPropValue("footerText");
    const footerTextExist = this.castToString(footerText);

    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>          <div className={this.decorateCSS("footer-page")}>
            {headerExist && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {buttonsExist && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((btn: INPUTS.CastedButton, btnIndex: number) =>
                      this.castToString(btn?.text) ? (
                        <ComposerLink key={btnIndex} path={btn.url} className={this.decorateCSS("button-link")}>
                          <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      ) : null
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
 
            <div className={this.decorateCSS("middle-container")}>
              {footer.length > 0 &&
                footer.map((item: FooterValues, indexFooter: number) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
                  const footerExist = footerTitleExist || footerTitleMediaExist || item.footerText.length > 0;
                  return (
                    footerExist && (
                      <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                        {(footerTitleExist || footerTitleMediaExist) && (
                          <ComposerLink path={item.footerTitleLink}>
                            <div className={this.decorateCSS("menu-media-wrapper")}>
                              {footerTitleMediaExist && (
                                <Base.Media value={item.footerTitleMedia} className={this.decorateCSS("menu-title-media")} />
                              )}
                              {footerTitleExist && <Base.H6 className={this.decorateCSS("list-title")}>{item.footerTitle}</Base.H6>}
                            </div>
                          </ComposerLink>
                        )}
                        {item.footerText.length > 0 && (
                          <Base.VerticalContent className={this.decorateCSS("text-container")}>
                            {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                              const footerTextExist = this.castToString(v.navTitle);
                              const navMediaExist = hasMedia(v.navMedia);
                              const titleStr = this.castToString(item.footerTitle).toLowerCase();
                              const isAddressColumn = titleStr.includes("address") || titleStr.includes("adres") || titleStr.includes("office") || titleStr.includes("ofis");
                              return (
                                (footerTextExist || navMediaExist) && (
                                  <ComposerLink key={indexFooterText} path={v.navNavigateTo} className={isAddressColumn && indexFooterText === 0 ? this.decorateCSS("address-link") : ""}>
                                    <div className={this.decorateCSS("menu-media-wrapper")}>
                                      {navMediaExist && (
                                        <Base.Media value={v.navMedia} className={this.decorateCSS("menu-item-media")} />
                                      )}
                                      {footerTextExist && (
                                        <Base.P
                                          className={this.decorateCSS("text")}
                                          data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
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
 
            {footerTextExist && (
              <Base.P className={this.decorateCSS("bottom-text")}>{footerText}</Base.P>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer6Page;
