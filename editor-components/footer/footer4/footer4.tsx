import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type FooterValues = {
  footerTitle: JSX.Element;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: JSX.Element;
  path: string;
};

class Footer4Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
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
                      value: "Sale Terms & Conditions",
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
                      value: "Returns & Refunds",
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
                      value: "Privacy Notice",
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
                      value: "Shopping FAQs",
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
                      value: "Chairs (2)",
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
                      value: "Decoration (0)",
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
                      value: "Kitchen (2)",
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
                      value: "Lightning (0)",
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
                      value: "Livestyle (0)",
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
                      value: "Stools (3)",
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
                      value: "Uncategorized (0)",
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
      type: "string",
      key: "subscriptionPlaceholder",
      displayer: "Subscription Placeholder",
      value: "Type your e-mail",
    });

    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp({
      type: "string",
      key: "subscriptionButtonText",
      displayer: "Subscription Button Text",
      value: "Subscribe",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "", "", "Primary"));

    this.addProp({
      type: "string",
      key: "rightTitle",
      displayer: "Form Title",
      value: "Let’s stay in touch",
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
              displayer: "Url",
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
              displayer: "Url",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("placeholderText", this.castToString(this.getPropValue("subscriptionPlaceholder")));
  }

  validationSchema = Yup.object().shape({
    message: Yup.string().required("Required"),
  });
  getName(): string {
    return "Footer 4";
  }

  render() {
    const images = this.castToObject<any[]>("images");

    const textExist = this.castToString(this.getPropValue("text"));

    const submitText = this.castToString(this.getPropValue("submitText"));

    const leftExist = textExist || images.length > 0;

    const rightTitleExist = this.castToString(this.getPropValue("rightTitle"));
    const rightDescExist = this.castToString(this.getPropValue("rightDescription"));
    const buttonTextExist = this.castToString(this.getPropValue("subscriptionButtonText"));
    const placeHolderExist = this.castToString(this.getPropValue("subscriptionPlaceholder"));

    const rightExist = rightTitleExist || rightDescExist || buttonTextExist || placeHolderExist;

    const line = this.getPropValue("line");

    const links = this.castToObject<any[]>("links");

    const footerDescription = this.getPropValue("footerDescription");
    const footerDescriptionExist = this.castToString(footerDescription);

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <Base.Container>
            <Base.MaxContent>
              <div className={this.decorateCSS("footer-page")}>
                <div className={this.decorateCSS("items")}>
                  {leftExist && (
                    <div className={this.decorateCSS("left")}>
                      {textExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("text")}</Base.P>}
                      <div className={this.decorateCSS("images")}>
                        {images.length > 0 && (
                          <div className={this.decorateCSS("image-container")}>
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
                    </div>
                  )}

                  {this.castToObject<any[]>("footer").length > 0 &&
                    this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => {
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
                                    <Base.P className={this.decorateCSS("text")}>{item.footerText}</Base.P>
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
                        initialValues={{ message: "" }}
                        validationSchema={this.validationSchema}
                        onSubmit={(data, { resetForm }) => {
                          this.setComponentState("placeholderText", submitText);

                          setTimeout(() => {
                            const defaultPlaceholder = this.castToString(this.getPropValue("subscriptionPlaceholder"));
                            this.setComponentState("placeholderText", defaultPlaceholder);
                          }, 2000);

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
                                  placeholder={this.getComponentState("placeholderText") || this.castToString(this.getPropValue("subscriptionPlaceholder"))}
                                  name="message"
                                  value={values.message}
                                  onChange={handleChange}
                                />
                                {errors.message && touched.message && <div className={this.decorateCSS("error")}>{errors.message}</div>}
                              </div>
                            )}

                            {buttonTextExist && (
                              <Base.Button buttonType={button.type}
                                className={this.decorateCSS("button")} type="submit">
                                {this.getPropValue("subscriptionButtonText")}
                              </Base.Button>
                            )}
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

          <Base.Container>
            <Base.MaxContent>
              <div className={this.decorateCSS("bottom")}>
                {footerDescriptionExist && <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerDescription")}</Base.P>}

                {links.length > 0 && (
                  <div className={this.decorateCSS("links")}>
                    {links.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        textExist && (
                          <div className={this.decorateCSS(item.url ? "link-element-has-path" : "link-element")}>
                            <ComposerLink key={index} path={item.url}>
                              <Base.P className={this.decorateCSS("link-text")}>{item.text}</Base.P>
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
        </div>
      </div>
    );
  }
}

export default Footer4Page;
