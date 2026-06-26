import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer5.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  navTitle: React.JSX.Element;
  navNavigateTo: string;
};

class Footer5Page extends BaseFooter {
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
      value: "Don't be weird",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Would you like more information or do you have a question?",
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
        INPUTS.BUTTON("button", "Button", "CONTACT US", "", null, null, "Primary"),
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
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
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
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "2024 © Made with by Blinkpage.",
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
    return "Footer 5";
  }

  render() {
    const footer = this.castToObject<any[]>("footer");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const footerText = this.getPropValue("footerText");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const footerTextExist = this.castToString(footerText);

    const buttonsExist = buttons.some((b) => this.castToString(b.text));
    const headerExist = subtitleExist || titleExist || descriptionExist || buttonsExist;

    const links = this.castToObject<any[]>("links");

    const line = this.getPropValue("line");

    const alignmentValue = Base.getContentAlignment();

    const textsExist = subtitleExist || titleExist || descriptionExist;


    const bottomExist = links.length > 0 || footerTextExist;


    const alignment = Base.getContentAlignment();

    const position = this.getPropValue("position");

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        {(headerExist || footer.length > 0) && (
          <Base.Container className={this.decorateCSS("footer-wrapper")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              {headerExist && (
                <div className={`${this.decorateCSS("header")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                  {textsExist && (
                    <Base.VerticalContent
                      className={`${this.decorateCSS("left")} ${!buttonsExist && this.decorateCSS("left-full")}`}>
                      {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                      {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                      {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                    </Base.VerticalContent>
                  )}
                  {buttonsExist && (
                    <div className={this.decorateCSS("right")}>
                      {buttons.map((button: INPUTS.CastedButton, index: number) => (
                        this.castToString(button.text) && (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}

              {(() => {
                const columnsExist = footer.some((item: FooterValues) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const footerTextExist = item.footerText.some((v: FooterTextValues) => this.castToString(v.navTitle));
                  return !!(footerTitleExist || footerTextExist);
                });
                return columnsExist && (
                  <div className={this.decorateCSS("footer-columns")}>
                    {footer.map((item: FooterValues, indexFooter: number) => {
                      const footerTitleExist = this.castToString(item.footerTitle);
                      const footerTextExist = item.footerText.some((v: FooterTextValues) => this.castToString(v.navTitle));
                      const listExist = footerTitleExist || footerTextExist;
                      return (
                        listExist && (
                          <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                            {footerTitleExist && <Base.H6 className={this.decorateCSS("column-title")}>{item.footerTitle}</Base.H6>}
                            {footerTextExist && (
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
                          </Base.VerticalContent>
                        )
                      );
                    })}
                  </div>
                );
              })()}
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={this.decorateCSS("bottom")}>
                {links.length > 0 && (
                  <div className={`${this.decorateCSS("links")}  
                  ${alignment === "center" && this.decorateCSS("center")}`}>
                    {links.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        textExist && (
                          <div
                            className={`${this.decorateCSS("link-element")} ${item.url && this.decorateCSS("has-path")}`}>
                            <ComposerLink key={index} path={item.url}>
                              <Base.P 
                                className={this.decorateCSS("link-text")}
                                data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                              >
                                {item.text}
                              </Base.P>
                            </ComposerLink>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}

                {footerTextExist && <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerText")}</Base.P>}
              </div>
            </Base.MaxContent>
          </Base.Container>
        )}
      </div>
    );
  }
}

export default Footer5Page;
