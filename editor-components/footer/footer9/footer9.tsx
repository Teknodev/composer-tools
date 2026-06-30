import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer9.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "../../../custom-hooks/input-templates";

type link = {
  title: string;
  page: string;
  tag: boolean;
};

type icon = {
  title: string;
  page: string;
  icon: TypeMediaInputValue;
};

type page = {
  title: string;
  page: string;
};

class Footer9Page extends BaseFooter {
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
      value: "Subscribe to our newsletter",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Join our newsletter to stay up to date on features and realases",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "During this phase to design is developed to meet the reuired technical standards",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Subscribe", "", null, null, "Primary"),
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
              value: "About",
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
                      value: "Contact",
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
                      value: "Blog",
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
                      value: "Our Story",
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
                      value: "Help centre",
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
                      value: "Careers",
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
                      value: "Changelong",
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
                      value: "Community",
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
                      value: "Guidelines",
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
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Twitter",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
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
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Instagram",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
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
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Linkedin",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
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
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "©2024 Blinkpage",
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Terms of Use",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Privacy Policy",
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
    return "Footer 9";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const logoObject = this.castToObject<any>("logo");
    const logo = logoObject?.logo;
    const logoUrl = logoObject?.logoUrl;
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttonTextExist = buttons.some((b) => this.castToString(b.text));
    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    const footer = this.castToObject<any[]>("footer");
    const socials = this.castToObject<icon[]>("socials");
    const links = this.castToObject<page[]>("links");

    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <Base.VerticalContent className={this.decorateCSS("content")}>
              {(logo?.url || logo?.name) && (
                <ComposerLink path={logoUrl}>
                  <Base.Media value={logo} className={`${this.decorateCSS("logo")} ${logo?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                </ComposerLink>
              )}
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {buttonTextExist && (
                <Base.Row className={this.decorateCSS("buttons")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => (
                    this.castToString(button.text) && (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    )
                  ))}
                </Base.Row>
              )}
            </Base.VerticalContent>
          </div>

          {footer.length > 0 && (
            <div className={this.decorateCSS("footer-columns")}>
              {footer.map((item: any, indexFooter: number) => {
                const footerTitleExist = this.castToString(item.footerTitle);
                const footerTextExist = item.footerText?.length > 0;
                const listExist = footerTitleExist || footerTextExist;
                return (
                  listExist && (
                    <div key={indexFooter} className={this.decorateCSS("list-group")}>
                      {footerTitleExist && <Base.H6 className={this.decorateCSS("column-title")}>{item.footerTitle}</Base.H6>}
                      {footerTextExist && (
                        <div className={this.decorateCSS("text-container")}>
                          {item.footerText.map((v: any, indexFooterText: number) => {
                            const textExist = this.castToString(v.navTitle);
                            return (
                              textExist && (
                                <ComposerLink key={indexFooterText} path={v.navNavigateTo}>
                                  <Base.P
                                    className={this.decorateCSS("text")}
                                    data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                  >
                                    {v.navTitle}
                                  </Base.P>
                                </ComposerLink>
                              )
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )
                );
              })}
            </div>
          )}

          {socials.length > 0 && (
            <div className={this.decorateCSS("icon-container")}>
              {socials.map((item: icon) => {
                return (
                  <ComposerLink path={item.page}>
                    <div 
                      className={this.decorateCSS("icon-element")}
                      data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                    >
                      <Base.Media
                        value={item.icon}
                        className={`${this.decorateCSS("icon")} ${item.icon?.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                      />
                      <Base.P className={this.decorateCSS("icon-text")}>{item.title}</Base.P>
                    </div>
                  </ComposerLink>
                );
              })}
            </div>
          )}
          <div className={this.decorateCSS("bottom")}>
            {footerTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("footerText")}</Base.P>}
            {links.length > 0 && (
              <Base.Row className={this.decorateCSS("list")}>
                {links.map((item: page,) => {
                  return (
                    <ComposerLink path={item.page}>
                      <Base.P 
                        className={this.decorateCSS("item")}
                        data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                      >
                        {item.title}
                      </Base.P>
                    </ComposerLink>
                  );
                })}
              </Base.Row>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer9Page;
