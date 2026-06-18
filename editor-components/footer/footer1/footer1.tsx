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
};

type Column = {
  categoryTitle: React.JSX.Element;
  menuItems: MenuItem[];
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
      value: "Subscribe to our newsletter",
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
      type: "string",
      key: "subscriptionPlaceholder",
      displayer: "Placeholder",
      value: "Type your e-mail",
    });

    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Subscribe", null, null, null, "Primary"));

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "copyright",
      displayer: "Copyright",
      value: "Copyright © Blinkpage. All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "social",
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
      key: "columns",
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
              displayer: "Footer Title",
              value: "",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
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
              displayer: "Footer Title",
              value: "",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
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
              displayer: "Footer Title",
              value: "",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menu-item",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
              ],
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

    this.setComponentState("placeholderText", this.castToString(this.getPropValue("subscriptionPlaceholder")));
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

    const placeholderExist = this.castToString(this.getPropValue("subscriptionPlaceholder"));
    const submitText = this.castToString(this.getPropValue("submitText"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const upperExist = titleExist || descriptionExist || subtitleExist || (placeholderExist && this.castToString(button.text));

    const line = this.getPropValue("line");
    const alignmentValue = Base.getContentAlignment();

    const columns = this.castToObject<Column[]>("columns");
    const social = this.castToObject<IconsValues[]>("social");
    const copyright = this.getPropValue("copyright");
    const copyrightExist = this.castToString(copyright);

    const columnsExist = columns.some((column: Column) => {
      const menuItems: MenuItem[] = column.menuItems || [];
      const categoryTitleExist = this.castToString(column.categoryTitle);
      const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text));
      return !!(categoryTitleExist || hasItems);
    });
    const footerBottomExist = social.length > 0 || copyrightExist;
    const position = this.getPropValue("position");

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
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
                {placeholderExist && this.castToString(button.text) && (
                  <div className={this.decorateCSS("subscribe")}>
                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={this.validationSchema}
                      onSubmit={(data, { resetForm }) => {
                        this.setComponentState("placeholderText", submitText);

                        setTimeout(() => {
                          const defaultPlaceholder = this.castToString(this.getPropValue("subscriptionPlaceholder"));
                          this.setComponentState("placeholderText", defaultPlaceholder);
                        }, 2000);

                        this.insertForm("Footer 1 - NewsletterForm", data);
                        resetForm();
                      }}
                    >
                      {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form className={this.decorateCSS("form")} onSubmit={handleSubmit}>
                          {this.castToString(this.getPropValue("subscriptionPlaceholder")) && (
                            <div className={this.decorateCSS("input-element")}>
                              <input
                                className={this.decorateCSS("input")}
                                type="text"
                                placeholder={this.getComponentState("placeholderText") || this.castToString(this.getPropValue("subscriptionPlaceholder")) || ""}
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {errors.email && touched.email && <div className={this.decorateCSS("error")}>{errors.email}</div>}
                            </div>
                          )}
                          {this.castToString(button.text) && (
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            )}
            {line && <div className={this.decorateCSS("line")} />}
            {columnsExist && (
              <div className={this.decorateCSS("columns-section")}>
                {columns.map((column: Column, colIndex: number) => {
                  const menuItems: MenuItem[] = column.menuItems || [];
                  const categoryTitleExist = this.castToString(column.categoryTitle);
                  const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text));
                  if (!categoryTitleExist && !hasItems) return null;
                  return (
                    <div key={colIndex} className={this.decorateCSS("column")}>
                      {categoryTitleExist && (
                        <Base.P className={this.decorateCSS("column-title")}>{column.categoryTitle}</Base.P>
                      )}
                      {menuItems.length > 0 && (
                        <div className={this.decorateCSS("column-items")}>
                          {menuItems.map((item: MenuItem, itemIndex: number) => {
                            const textExist = this.castToString(item.text);
                            return textExist ? (
                              <ComposerLink key={itemIndex} path={item.pageLink}>
                                <Base.P
                                  className={this.decorateCSS("text")}
                                  data-animation={item.pageLink ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                >
                                  {item.text}
                                </Base.P>
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
            {footerBottomExist && (
              <div className={`${this.decorateCSS("footer-bottom")} ${alignmentValue === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                {copyrightExist && (
                  <div className={this.decorateCSS("copyright-container")}>
                    <Base.P className={this.decorateCSS("copyright-text")}>{this.getPropValue("copyright")}</Base.P>
                  </div>
                )}
                {social.length > 0 && (
                  <div className={this.decorateCSS("social")}>
                    {social.map(
                      (item: IconsValues, indexSocial: number) =>
                        item.socialIcon && (
                          <ComposerLink key={indexSocial} path={item.socialLink}>
                            <div
                              className={this.decorateCSS("icon-wrapper")}
                              data-animation={item.socialLink ? this.getPropValue("hoverAnimation").join(" ") : ""}
                            >
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
              </div>
            )}
          </Base.MaxContent>
        </Base.Container>
      </div>
    );
  }
}

export default Footer1Page;
