import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: React.JSX.Element;
  path: string;
};

class Footer12Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676e80240655f8002cadb8be?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logoUrl",
      displayer: "Logo Url",
      value:""
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.",
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer Card",
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
              value: "Company",
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
                      value: "Support",
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
                      value: "Products",
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
                      value: "Career",
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
              value: "Help",
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
                      value: "Customer Support",
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
                      value: "Track Delivery",
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
                      value: "Terms & Conditions",
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
                      value: "Privacy Policy",
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
              value: "Resources",
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
                      value: "Free Brochures",
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
                      value: "Development Tutorial",
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
                      value: "How to - Blog",
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
                      value: "Youtube Playlist",
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
      value: "Copyright © 2023 Blinkpage LTD.All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "images",
      displayer: "Images",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa9094cf1798002cc71d01?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa90c5cf1798002cc71d0e?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6765645a0655f8002caa07db?alt=media",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
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
    return "Footer 12";
  }

  render() {
    const footer = this.castToObject<any[]>("footer");
    const images = this.castToObject<any[]>("images");

    const logo = this.getPropValue("logo");
    const logoUrl = this.getPropValue("logoUrl");
    const line = this.getPropValue("line");
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const footerText = this.getPropValue("footerText");
    const footerTextExist = this.castToString(footerText);

    const image = this.decorateCSS("image");
    const imagesExist = images.length > 0;

    const bottomExist = footerTextExist || imagesExist;

    const headerExist = image || descriptionExist;

    const upperExist = headerExist || footer.length > 0;

    return (
      <div className={this.decorateCSS("container")}>
        {upperExist && (
          <Base.Container className={this.decorateCSS("first-container")}>
            <Base.MaxContent className={this.decorateCSS("first-max-content")}>
              {headerExist && (
                <Base.VerticalContent className={this.decorateCSS("left")}>
                  {image && (
                    <ComposerLink path={logoUrl}>
                      <div className={this.decorateCSS("logo")}>
                        <img src={logo} className={this.decorateCSS("image")} alt="" />
                      </div>
                    </ComposerLink>
                  )}
                  {descriptionExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
                </Base.VerticalContent>
              )}

              {footer.length > 0 &&
                footer.map((item: FooterValues, indexFooter: number) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const footerExist = footerTitleExist || item.footerText.length > 0;
                  return (
                    footerExist && (
                      <div key={indexFooter} className={this.decorateCSS("list-group")}>
                        {footerTitleExist && <Base.H2 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H2>}
                        {item.footerText.map((item: FooterTextValues, indexFooterText: number) => {
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
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={this.decorateCSS("footer-bottom")}>
                {footerTextExist &&
                  <Base.P
                    className={`${this.decorateCSS("footer-text")} ${!imagesExist && this.decorateCSS("no-image")}`}>
                    {this.getPropValue("footerText")}
                  </Base.P>}
                {imagesExist && (
                  <div className={`${this.decorateCSS("image-container")} ${!footerTextExist && this.decorateCSS("full-width")}`}>
                    {images.map((item: any, index: number) => {
                      return (
                        item.image && (
                          <div className={this.decorateCSS("image-element")}>
                            <ComposerLink key={index} path={item.url}>
                              <img className={this.decorateCSS("image")} src={item.image} />
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
    );
  }
}

export default Footer12Page;
