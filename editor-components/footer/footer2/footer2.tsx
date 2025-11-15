import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: React.JSX.Element;
  path: string;
};

class Footer2Page extends BaseFooter {
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
      type: "media",
      key: "image",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676295790655f8002ca84357?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
              value: "New York Office",
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
                      value: "555-1234",
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
                      value: "info@archy.com",
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
                      value: "123 Main Street, Suite 200 City: Anytown State: StateName",
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
              value: "Paris Office",
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
                      value: "+33 1 23 45 67 89",
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
                      value: "info@archyparis.com",
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
                      value: "123 Rue de la Paix, 75002 Paris, France",
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
              value: "Berlin Office",
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
                      value: "+49 30 12345678",
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
                      value: "info@archyberlin.com",
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
                      value: "Mauerstrasse 45, 10117 Berlin, Germany",
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
      type: "string",
      key: "footerDescription",
      displayer: "Footer Text",
      value: "©2023 Blinkpage Inc. - SF",
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
    return "Footer 2";
  }

  render() {
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");

    const footer = this.castToObject<any[]>("footer");
    const footerDescExist = this.castToString(this.getPropValue("footerDescription"));

    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")} style={{ backgroundImage: `url(${image?.url || ""})` }}>
            {(footer.length > 0 || image?.url) && (
              <Base.MaxContent
                className={`${this.decorateCSS("items")} ${!image?.url && this.decorateCSS("no-image")}`}>
                {this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => {
                  const titleExist = this.castToString(item.footerTitle);
                  return (
                    <div key={indexFooter} className={this.decorateCSS("list")}>
                      {titleExist && <Base.H3 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H3>}
                      {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                        const textExist = this.castToString(v.footerText);
                        return (
                          textExist && (
                            <ComposerLink key={indexFooterText} path={v.path}>
                              <Base.P 
                                className={this.decorateCSS("text")}
                                data-animation={v.path ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                data-has-link={Boolean(v.path)}
                              >
                                {v.footerText}
                              </Base.P>
                            </ComposerLink>
                          )
                        );
                      })}
                    </div>
                  );
                })}
              </Base.MaxContent>
            )}
            {overlay && image?.url && <div className={this.decorateCSS("overlay")}></div>}
          </div>
          <Base.MaxContent>
            {footerDescExist && (
              <div className={this.decorateCSS("footer-bottom")}>
                <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerDescription")}</Base.P>
              </div>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Footer2Page;
