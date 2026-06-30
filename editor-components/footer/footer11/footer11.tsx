import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer11.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  icon: TypeMediaInputValue;
  page: string;
};

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  navTitle: React.JSX.Element;
  navNavigateTo: string;
};

class Footer11Page extends BaseFooter {
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
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
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
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
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
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    { type: "string", key: "navTitle", displayer: "Text", value: "" },
                    { type: "page", key: "navNavigateTo", displayer: "Navigate To", value: "" },
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
      value: "© 2024 Blinkpage. All rights reserved. Designed and developed by Blinkpage.",
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
                name: "FaPinterest",
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
    return "Footer 11";
  }
  render() {
    const socials = this.castToObject<Icons[]>("socials");
    const footer = this.castToObject<FooterValues[]>("footer");

    const footerText = this.getPropValue("footerText");

    const footerTextExist = this.castToString(footerText);

    const columnsExist = footer.some((item: FooterValues) => {
      const footerTitleExist = this.castToString(item.footerTitle);
      const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle));
      return footerTitleExist || hasItems;
    });

    const socialsExist = socials.length > 0 && socials.some((item: any) => item.icon);

    const position = this.getPropValue("position");
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${alignment === "left" ? this.decorateCSS("left-alignment") : this.decorateCSS("center-alignment")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {columnsExist && (
            <div className={this.decorateCSS("footer-columns")}>
              {footer.map((item: FooterValues, indexFooter: number) => {
                const footerTitleExist = this.castToString(item.footerTitle);
                const hasItems = item.footerText?.some((v: FooterTextValues) => this.castToString(v.navTitle));
                const listExist = footerTitleExist || hasItems;
                return (
                  listExist && (
                    <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                      {footerTitleExist && <Base.H6 className={this.decorateCSS("column-title")}>{item.footerTitle}</Base.H6>}
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
                    </Base.VerticalContent>
                  )
                );
              })}
            </div>
          )}

          {(socialsExist || footerTextExist) && (
            <div className={this.decorateCSS("footer-bottom")}>
              {socialsExist && (
                <div className={this.decorateCSS("socials-container")}>
                  {socials.map((item: any, index: number) => {
                    return (
                      item.icon && (
                        <ComposerLink key={index} path={item.url}>
                          <div 
                            className={this.decorateCSS("socials-element")}
                            data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                          >
                            <Base.Media value={item.icon} className={`${this.decorateCSS("icon")} ${item.icon?.type === "image" ? this.decorateCSS("is-image") : ""}`} />
                          </div>
                        </ComposerLink>
                      )
                    );
                  })}
                </div>
              )}
              {footerTextExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer11Page;
