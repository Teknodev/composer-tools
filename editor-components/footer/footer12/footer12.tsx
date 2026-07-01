import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";
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

class Footer12Page extends BaseFooter {
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
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.",
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
                      value: "Support",
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
                      value: "Products",
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
                      value: "Career",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "Customer Support",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
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
                      value: "Track Delivery",
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
                      value: "Terms & Conditions",
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
                      value: "Privacy Policy",
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
                      key: "navTitle",
                      displayer: "Text",
                      value: "Free Brochures",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
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
                      value: "Development Tutorial",
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
                      value: "How to - Blog",
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
                      value: "Youtube Playlist",
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
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "Copyright © 2023 Blinkpage LTD.All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa9094cf1798002cc71d01?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa90c5cf1798002cc71d0e?alt=media",
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
          key: "item",
          displayer: "Item Elements",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6765645a0655f8002caa07db?alt=media",
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
    const media = this.castToObject<any[]>("media");
    const logoObject = this.castToObject<any>("logo");

    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const line = this.getPropValue("line");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasRenderableButton = buttons.some((btn) => this.castToString(btn.text));

    const descriptionExist = this.castToString(this.getPropValue("description"));
    const footerText = this.getPropValue("footerText");
    const footerTextExist = this.castToString(footerText);
    const imagesExist = media.length > 0;
    const bottomExist = footerTextExist || imagesExist;
    const headerExist = (logo?.url || logo?.name) || subtitleExist || titleExist || descriptionExist || hasRenderableButton;
    const upperExist = headerExist || footer.length > 0;
    const position = this.getPropValue("position");

    const alignment = Base.getContentAlignment();

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <div className={this.decorateCSS("footer-inner")}>
        {upperExist && (
          <Base.Container className={this.decorateCSS("first-container")}>
            <Base.MaxContent className={this.decorateCSS("first-max-content")}>
              {headerExist && (
                <Base.VerticalContent className={this.decorateCSS("left")}>
                  {(logo?.url || logo?.name) && (
                    <ComposerLink path={logoUrl}>
                      <div className={this.decorateCSS("logo")}>
                        <Base.Media value={logo} className={`${this.decorateCSS("image")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
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
                </Base.VerticalContent>
              )}

              {footer.length > 0 &&
                footer.map((item: FooterValues, indexFooter: number) => {
                  const footerTitleExist = this.castToString(item.footerTitle);
                  const footerExist = footerTitleExist || item.footerText.length > 0;
                  return (
                    footerExist && (
                      <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                        {footerTitleExist && <Base.H6 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H6>}
                        {item.footerText.length > 0 && (
                          <Base.VerticalContent className={this.decorateCSS("text-container")}>
                            {item.footerText.map((item: FooterTextValues, indexFooterText: number) => {
                              const footerTextExist = this.castToString(item.navTitle);
                              return (
                                footerTextExist && (
                                  <ComposerLink key={indexFooterText} path={item.navNavigateTo}>
                                    <Base.P
                                      className={this.decorateCSS("text")}
                                      data-animation={item.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                    >
                                      {item.navTitle}
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
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <Base.Row className={this.decorateCSS("footer-bottom")}>
                {footerTextExist &&
                  <Base.P
                    className={`${this.decorateCSS("footer-text")} ${!imagesExist && this.decorateCSS("no-image")}`}>
                    {this.getPropValue("footerText")}
                  </Base.P>}
                {imagesExist && (
                  <div className={`${this.decorateCSS("image-container")} ${!footerTextExist && this.decorateCSS("full-width")}`}>
                    {media.map((item: any, index: number) => {
                      return (
                        item.media && (
                          <div className={this.decorateCSS("image-element")}>
                            <ComposerLink key={index} path={item.url}>
                              <Base.Media value={item.media} className={`${this.decorateCSS("image")} ${item.media?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                            </ComposerLink>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.Row>
            </Base.MaxContent>
          </Base.Container>
        )}
        </div>
      </div>
    );
  }
}

export default Footer12Page;
