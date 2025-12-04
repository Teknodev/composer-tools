import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer6.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: React.JSX.Element;
  path: string;
};

class Footer6Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let’s work together",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "hello@gradastudio.net",
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
              value: "Quick Links",
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
                      value: "About",
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
                      value: "News",
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
                      value: "Contact",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
              value: "Our Address",
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
                      value: "Care+ Family Parham Bridges Canton Jackson, MS 39211",
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
                      value: "+1 601 978 2212",
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
                      value: "hello@ozark.com",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
              value: "Get In Touch",
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
                      value: "Facebook",
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
                      value: "Twitter",
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
                      value: "Instagram",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
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
      key: "footerDescription",
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

    const footer = this.castToObject<any[]>("footer");

    const footerDescription = this.getPropValue("footerDescription");
    const footerDescriptionExist = this.castToString(footerDescription);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("footer-page")}>
            {(subtitleExist || titleExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && <Base.P className={this.decorateCSS("subtitle")}>{subtitle}</Base.P>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              </Base.VerticalContent>
            )}

            <div className={this.decorateCSS("middle-container")}>
              {footer.length > 0 &&
                footer.map((item: FooterValues, indexFooter: number) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const footerExist = footerTitleExist || item.footerText.length > 0;
                  return (
                    footerExist && (
                      <div key={indexFooter} className={this.decorateCSS("list-group")}>
                        {footerTitleExist && <Base.H2 className={this.decorateCSS("list-title")}>{item.footerTitle}</Base.H2>}
                        {item.footerText.length > 0 &&
                          item.footerText.map((item: FooterTextValues, indexFooterText: number) => {
                            const footerTextExist = this.castToString(item.footerText);
                            return (
                              footerTextExist && (
                                <ComposerLink key={indexFooterText} path={item.path}>
                                  <Base.P 
                                    className={this.decorateCSS("text")}
                                    data-animation={item.path ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                  >
                                    {item.footerText}
                                  </Base.P>
                                </ComposerLink>
                              )
                            );
                          })}
                      </div>
                    )
                  );
                })}
            </div>

            {footerDescriptionExist && (
              <div className={this.decorateCSS("bottom-container")}>
                <Base.P className={this.decorateCSS("bottom-text")}>{footerDescription}</Base.P>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer6Page;
