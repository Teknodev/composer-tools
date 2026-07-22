import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer1.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type IconsValues = {
  socialIcon: TypeMediaInputValue;
  socialLink: string;
};

type MenuItem = {
  text: React.JSX.Element;
  pageLink: string;
  media: TypeMediaInputValue;
};

type Column = {
  categoryTitle: React.JSX.Element;
  categoryTitleLink: string;
  categoryTitleMedia: TypeMediaInputValue;
  menuItems: MenuItem[];
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
};

class Footer1Page extends BaseFooter {
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Blinkpage Newsletter",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Get timely updates from your favorite products",
    });

    this.addProp({
      type: "object",
      key: "form",
      displayer: "Form",
      value: [
        {
          type: "string",
          key: "subscriptionPlaceholder",
          displayer: "Placeholder",
          value: "Type your e-mail",
        },
        {
          type: "string",
          key: "submitText",
          displayer: "Submit Text",
          value: "Form successfully submitted!",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Subscribe", "", null, null, "Link"),
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
      value: "Copyright © Blinkpage. All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiInstagramFill",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaTiktok",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaVine",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "About us",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "Blog",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "FAQs",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "Contact",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
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
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
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



    this.setComponentState("placeholderText", "Type your e-mail");
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  static getName(): string {
    return "Footer 1";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const formProps = this.castToObject<any>("form");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const submitText = this.castToString(formProps?.submitText);
    const placeholderExist = this.castToString(formProps?.subscriptionPlaceholder);

    const upperExist = titleExist || descriptionExist || subtitleExist || placeholderExist;

    const line = this.getPropValue("line");
    const alignmentValue = Base.getContentAlignment();

    const footerData = this.castToObject<Column[]>("footer");
    const socials = this.castToObject<IconsValues[]>("socials");
    const footerText = this.getPropValue("footerText");
    const footerTextExist = this.castToString(footerText);

    const columnsExist = footerData.some((column: Column) => {
      const menuItems: MenuItem[] = column.menuItems || [];
      const categoryTitleExist = this.castToString(column.categoryTitle);
      const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text) || hasMedia(item.media));
      return !!(categoryTitleExist || hasMedia(column.categoryTitleMedia) || hasItems);
    });
    const footerBottomExist = socials.length > 0 || footerTextExist || columnsExist;
    const position = this.getPropValue("position");

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${alignmentValue === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <Base.Container className={this.decorateCSS("footer-wrapper")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {upperExist && (
              <div className={this.decorateCSS("footer-upper")}>
                {(titleExist || descriptionExist || subtitleExist) && (
                  <Base.VerticalContent className={`${this.decorateCSS("header")} ${alignmentValue === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  </Base.VerticalContent>
                )}
                {placeholderExist && (
                  <div className={this.decorateCSS("subscribe")}>
                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={this.validationSchema}
                      onSubmit={(data, { resetForm }) => {
                        this.setComponentState("placeholderText", submitText);

                        setTimeout(() => {
                          const form = this.castToObject<any>("form");
                          const defaultPlaceholder = this.castToString(form?.subscriptionPlaceholder);
                          this.setComponentState("placeholderText", defaultPlaceholder);
                        }, 2000);

                        this.insertForm("Footer 1 - NewsletterForm", data);
                        resetForm();
                      }}
                    >
                      {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form className={this.decorateCSS("form")} onSubmit={handleSubmit}>
                          {placeholderExist && (
                            <div className={this.decorateCSS("input-element")}>
                              <input
                                className={this.decorateCSS("input")}
                                type="text"
                                placeholder={this.getComponentState("placeholderText") || placeholderExist || ""}
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {errors.email && touched.email && <div className={this.decorateCSS("error")}>{errors.email}</div>}
                            </div>
                          )}
                          {buttons.some((btn) => this.castToString(btn?.text)) && (
                            <div className={this.decorateCSS("buttons")}>
                              {buttons.map((btn: INPUTS.CastedButton, btnIndex: number) =>
                                this.castToString(btn?.text) ? (
                                  <ComposerLink key={btnIndex} path={btn.url}>
                                    <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                                      <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                ) : null
                              )}
                            </div>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            )}
            {line && <div className={this.decorateCSS("line")} />}
            {footerBottomExist && (
              <div className={`${this.decorateCSS("footer-bottom")} ${alignmentValue === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                {footerTextExist && (
                  <div className={this.decorateCSS("copyright-container")}>
                    <Base.P className={this.decorateCSS("copyright-text")}>{this.getPropValue("footerText")}</Base.P>
                  </div>
                )}
                {socials.length > 0 && (
                  <div className={this.decorateCSS("social")}>
                    {socials.map(
                      (item: IconsValues, indexSocial: number) =>
                        item.socialIcon && (
                          <ComposerLink key={indexSocial} path={item.socialLink}>
                            <div className={this.decorateCSS("icon-wrapper")}>
                              <Base.Media
                                value={item.socialIcon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          </ComposerLink>
                        )
                    )}
                  </div>
                )}
                {columnsExist && (
                  <div className={this.decorateCSS("columns-section")}>
                    {footerData.map((column: Column, colIndex: number) => {
                      const menuItems: MenuItem[] = column.menuItems || [];
                      const categoryTitleExist = this.castToString(column.categoryTitle);
                      const categoryMediaExist = hasMedia(column.categoryTitleMedia);
                      const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text) || hasMedia(item.media));
                      if (!categoryTitleExist && !categoryMediaExist && !hasItems) return null;
                      return (
                        <div key={colIndex} className={this.decorateCSS("column")}>
                          {(categoryTitleExist || categoryMediaExist) && (
                            <ComposerLink path={column.categoryTitleLink}>
                              <div className={this.decorateCSS("menu-media-wrapper")}>
                                {categoryMediaExist && (
                                  <Base.Media value={column.categoryTitleMedia} className={this.decorateCSS("menu-title-media")} />
                                )}
                                {categoryTitleExist && (
                                  <Base.H6 className={this.decorateCSS("column-title")}>{column.categoryTitle}</Base.H6>
                                )}
                              </div>
                            </ComposerLink>
                          )}
                          {hasItems && (
                            <div className={this.decorateCSS("column-items")}>
                              {menuItems.map((item: MenuItem, itemIndex: number) => {
                                const textExist = this.castToString(item.text);
                                const mediaExist = hasMedia(item.media);
                                return textExist || mediaExist ? (
                                  <ComposerLink key={itemIndex} path={item.pageLink}>
                                    <div className={this.decorateCSS("menu-media-wrapper")}>
                                      {mediaExist && (
                                        <Base.Media value={item.media} className={this.decorateCSS("menu-item-media")} />
                                      )}
                                      {textExist && (
                                        <Base.P className={this.decorateCSS("text")}>
                                          {item.text}
                                        </Base.P>
                                      )}
                                    </div>
                                  </ComposerLink>
                                ) : null;
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </Base.MaxContent>
        </Base.Container>
      </div>
    );
  }
}

export default Footer1Page;
