import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type FooterValues = {
  footerTitle: JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: JSX.Element;
  path: string;
};

class Footer2Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Text",
      value: "©2023 Archy Inc. - SF",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676295790655f8002ca84357?alt=media",
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
                      value: "info@archy.com",
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
                      value: "123 Main Street, Suite 200 City: Anytown State: StateName",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
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
                      value: "info@archyparis.com",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
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
                      displayer: "Path",
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
                      value: "info@archyberlin.com",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
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
                      displayer: "Path",
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
  }

  getName(): string {
    return "Footer 2";
  }

  render() {
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");

    const footer = this.castToObject<any[]>("footer");
    const footerDescExist = this.castToString(this.getPropValue("footerDescription"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")} style={{ backgroundImage: `url(${image})` }}>
            {(footer.length > 0 || image) && (
              <Base.MaxContent className={image ? this.decorateCSS("items") : this.decorateCSS("items-no-image")}>
                {this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => {
                  const titleExist = this.castToString(item.footerTitle);
                  return (
                    <div key={indexFooter} className={this.decorateCSS("list")}>
                      {titleExist && <Base.H2 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H2>}
                      {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                        const textExist = this.castToString(v.footerText);
                        return (
                          textExist && (
                            <ComposerLink key={indexFooterText} path={v.path}>
                              <Base.P className={this.decorateCSS("text")}>{v.footerText}</Base.P>
                            </ComposerLink>
                          )
                        );
                      })}
                    </div>
                  );
                })}
              </Base.MaxContent>
            )}
            {overlay && image && <div className={this.decorateCSS("overlay")}></div>}
          </div>
          {footerDescExist && (
            <div className={this.decorateCSS("footer-bottom")}>
              <Base.P className={this.decorateCSS("footerDescription")}>{this.getPropValue("footerDescription")}</Base.P>
            </div>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default Footer2Page;
