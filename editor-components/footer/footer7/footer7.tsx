import * as React from "react";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  navTitle: React.JSX.Element;
  navNavigateTo: string;
};

class Footer7Page extends BaseFooter {
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
              displayer: "Footer Title",
              value: "",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
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
              value: "FAQs",
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
              value: "About Us",
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
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "Composer by Blinkpage. All rights reserved",
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
    return "Footer 7";
  }

  render() {
    const logoObject = this.castToObject<any>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const footer = this.castToObject<any[]>("footer");
    const links = this.castToObject<any[]>("links");

    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasRenderableButton = buttons.some((btn: INPUTS.CastedButton) => this.castToString(btn.text));

    const logoExist = !!(logo?.url || logo?.name);
    const logoAreaExist = logoExist || subtitleExist || titleExist || descriptionExist || hasRenderableButton;

    const columnsExist = footer.some((item: FooterValues) => {
      const footerTitleExist = this.castToString(item.footerTitle);
      const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle));
      return footerTitleExist || hasItems;
    });
    const linksExist = links.some((item: any) => this.castToString(item.text));
    const rightExist = linksExist || footerTextExist;

    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {logoAreaExist && (
              <div className={this.decorateCSS("left")}>
                {logoExist && (
                  <ComposerLink path={logoUrl}>
                    <Base.Media value={logo} className={`${this.decorateCSS("image")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
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
              </div>
            )}

            {columnsExist && (
              <div className={this.decorateCSS("footer-columns")}>
                {footer.map((item: FooterValues, indexFooter: number) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle));
                  const listExist = footerTitleExist || hasItems;
                  return (
                    listExist && (
                      <div key={indexFooter} className={this.decorateCSS("list-group")}>
                        {footerTitleExist && <Base.P className={this.decorateCSS("column-title")}>{item.footerTitle}</Base.P>}
                        {hasItems && (
                          <Base.VerticalContent className={this.decorateCSS("text-container")}>
                            {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                              const textExist = this.castToString(v.navTitle);
                              return (
                                textExist && (
                                  <ComposerLink key={indexFooterText} path={v.navNavigateTo}>
                                    <Base.P
                                      className={this.decorateCSS("footer-text")}
                                      data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                      data-has-link={Boolean(v.navNavigateTo)}
                                    >
                                      {v.navTitle}
                                    </Base.P>
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
            )}

            {rightExist && (
              <div
                className={`${this.decorateCSS("right")} ${!logoAreaExist && this.decorateCSS("full-width")}`}>
                {linksExist && (
                  <div className={this.decorateCSS("upper")}>
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
                  </div>
                )}
                {footerTextExist && (
                  <div className={this.decorateCSS("bottom")}>
                    <Base.P className={`${this.decorateCSS("text")} ${!logoAreaExist && this.decorateCSS("left")}`}
                    >{this.getPropValue("footerText")}</Base.P>
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

export default Footer7Page;
