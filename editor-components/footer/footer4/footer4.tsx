import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: React.JSX.Element;
  path: string;
};

class Footer4Page extends BaseFooter {
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
      key: "text",
      displayer: "Title",
      value: "We accept:",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
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
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
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
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Get Help",
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
                      value: "Delivery Information",
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
                      value: "Sale Terms & Conditions",
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
                      value: "Returns & Refunds",
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
                      value: "Privacy Notice",
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
                      value: "Shopping FAQs",
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
              value: "Popular Categories",
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
                      value: "Accessories (0)",
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
                      value: "Chairs (2)",
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
                      value: "Decoration (0)",
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
                      value: "Kitchen (2)",
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
                      value: "Lightning (0)",
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
                      value: "Livestyle (0)",
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
                      value: "Stools (3)",
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
                      value: "Uncategorized (0)",
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
      type: "string",
      key: "rightTitle",
      displayer: "Form Title",
      value: "Let's stay in touch",
    });

    this.addProp({
      type: "string",
      key: "rightDescription",
      displayer: "Form Description",
      value: "Keep up to date with our latest news and special offers.",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Text",
      value: "2024 © Made with by Blinkpage.",
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
              value: "Privacy Notice",
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
          displayer: "",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Sale Terms & Conditions ",
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
          displayer: "",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Returns & Refunds",
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
        selectItems: ["animate1", "animate2", "animate3"]
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
    return "Footer 4";
  }

  render() {
    const images = this.castToObject<any[]>("images");

    const textExist = this.castToString(this.getPropValue("text"));

    const submitText = this.castToString(this.getPropValue("submitText"));

    const leftExist = textExist || images.length > 0;

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const rightTitleExist = this.castToString(this.getPropValue("rightTitle"));
    const rightDescExist = this.castToString(this.getPropValue("rightDescription"));
    const buttonTextExist = this.castToString(button.text);
    const placeHolderExist = this.castToString(this.getPropValue("subscriptionPlaceholder"));

    const rightExist = rightTitleExist || rightDescExist || (placeHolderExist && buttonTextExist);

    const line = this.getPropValue("line");

    const links = this.castToObject<any[]>("links");

    const footerDescription = this.getPropValue("footerDescription");
    const footerDescriptionExist = this.castToString(footerDescription);


    const alignment = Base.getContentAlignment();

    const position = this.getPropValue("position");

    return (
      <div className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <Base.Container className={this.decorateCSS("first-container")}>
            <Base.MaxContent className={this.decorateCSS("first-max-content")}>
              <div className={this.decorateCSS("footer-page")}>
                <div className={`${this.decorateCSS("items")} ${alignment === "center" ? this.decorateCSS("center") : ""}`}>
                  {leftExist && (
                    <Base.VerticalContent className={this.decorateCSS("left")}>
                      {textExist && <Base.P className={this.decorateCSS("left-title")}>{this.getPropValue("text")}</Base.P>}
                      <div className={this.decorateCSS("images")}>
                        {images.length > 0 && (
                          <Base.Row className={this.decorateCSS("image-container")}>
                            {images.map((item: any, index: number) => {
                              return (
                                item.image && (
                                  <div className={this.decorateCSS("image-element")}>
                                    <ComposerLink key={index} path={item.url}>
                                      <Base.Media value={item.image} className={this.decorateCSS("image")} />
                                    </ComposerLink>
                                  </div>
                                )
                              );
                            })}
                          </Base.Row>
                        )}
                      </div>
                    </Base.VerticalContent>
                  )}

                  {this.castToObject<any[]>("footer").length > 0 &&
                    this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => {
                      const footerTitleExist = this.castToString(item.footerTitle);
                      const footerExist = footerTitleExist || item.footerText.length > 0;
                      return (
                        footerExist && (
                          <div key={indexFooter} className={this.decorateCSS("list-group")}>
                            {footerTitleExist && <Base.H3 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H3>}
                            {item.footerText.map((item: FooterTextValues, indexFooterText: number) => {
                              const footerTextExist = this.castToString(item.footerText);
                              return (
                                footerTextExist && (
                                  <ComposerLink key={indexFooterText} path={item.path}>
                                    <Base.P 
                                      className={this.decorateCSS("text")}
                                      data-animation={item.path ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                      data-has-link={Boolean(item.path)}
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

                  {rightExist && (
                    <div className={this.decorateCSS("right")}>
                      {rightTitleExist && <Base.H3 className={this.decorateCSS("title")}>{this.getPropValue("rightTitle")}</Base.H3>}
                      <Formik
                        initialValues={{ email: "" }}
                        validationSchema={this.validationSchema}
                        onSubmit={(data, { resetForm }) => {
                          this.setComponentState("placeholderText", submitText);

                          setTimeout(() => {
                            const defaultPlaceholder = this.castToString(this.getPropValue("subscriptionPlaceholder"));
                            this.setComponentState("placeholderText", defaultPlaceholder);
                          }, 2000);

                          this.insertForm("Subscribe", data);
                          resetForm();
                        }}
                      >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                          <Form className={this.decorateCSS("form")} onSubmit={handleSubmit}>
                            <div className={this.decorateCSS("form-row")}>
                              {this.castToString(this.getPropValue("subscriptionPlaceholder")) && (
                                <div className={this.decorateCSS("input-element")}>
                                  <input
                                    className={this.decorateCSS("input")}
                                    type="text"
                                    placeholder={this.getComponentState("placeholderText") || String(this.castToString(this.getPropValue("subscriptionPlaceholder")))}
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                  />
                                </div>
                              )}

                              {placeHolderExist && buttonTextExist && (
                                <Base.Button buttonType={button.type}
                                  className={this.decorateCSS("button")}>
                                  <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                </Base.Button>
                              )}
                            </div>
                            
                            {errors.email && touched.email && <span className={this.decorateCSS("error")}>{errors.email}</span>}
                          </Form>
                        )}
                      </Formik>
                      {rightDescExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("rightDescription")}</Base.P>}
                    </div>
                  )}
                </div>
              </div>
            </Base.MaxContent>
          </Base.Container>

          {line && <div className={this.decorateCSS("line")}></div>}

          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <Base.VerticalContent className={this.decorateCSS("bottom")}>
                {footerDescriptionExist && <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerDescription")}</Base.P>}

                {links.length > 0 && (
                  <Base.Row className={`${this.decorateCSS("links")}
                  ${alignment === "center" && this.decorateCSS("center")}`}>
                    {links.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        textExist && (
                          <div className={this.decorateCSS("link-element")}>
                            <ComposerLink key={index} path={item.url}>
                              <Base.P 
                                className={this.decorateCSS("link-text")}
                                data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                data-has-link={Boolean(item.url)}
                              >
                                {item.text}
                              </Base.P>
                            </ComposerLink>
                          </div>
                        )
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        </div>
      </div>
    );
  }
}

export default Footer4Page;
