import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FooterValues = {
  footerTitle: React.JSX.Element;
  footerTitleLink: string;
  footerTitleMedia: TypeMediaInputValue;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  navTitle: React.JSX.Element;
  navNavigateTo: string;
  navMedia: TypeMediaInputValue;
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
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
      value: "We accept:",
    });

    this.addProp({
      type: "array",
      key: "brandButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
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
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Menu Item",
              value: "Get Help",
            },
            {
              type: "page",
              key: "footerTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "footerTitleMedia",
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
              key: "footerText",
              displayer: "Menu Subitem",
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
                      value: "Delivery Information",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Sale Terms & Conditions",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Returns & Refunds",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Privacy Notice",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Shopping FAQs",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
          key: "footer-title",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Menu Item",
              value: "Popular Categories",
            },
            {
              type: "page",
              key: "footerTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "footerTitleMedia",
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
              key: "footerText",
              displayer: "Menu Subitem",
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
                      value: "Accessories (0)",
                    },
                    {
                      type: "page",
                      displayer: "Navigate To",
                      key: "navNavigateTo",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Chairs (2)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Decoration (0)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Kitchen (2)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Lightning (0)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Livestyle (0)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Stools (3)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "navTitle",
                      displayer: "Text",
                      value: "Uncategorized (0)",
                    },
                    {
                      type: "page",
                      key: "navNavigateTo",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "navMedia",
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

    this.addProp({
      type: "object",
      key: "form",
      displayer: "Form",
      value: [
        {
          type: "string",
          key: "rightTitle",
          displayer: "Form Title",
          value: "Let's stay in touch",
        },
        {
          type: "string",
          key: "rightDescription",
          displayer: "Form Description",
          value: "Keep up to date with our latest news and special offers.",
        },
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
      value: [INPUTS.BUTTON("button", "Button", "Subscribe", "", null, null, "Black")],
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
          displayer: "Content Elements",
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
          displayer: "Content Elements",
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

    this.setComponentState("placeholderText", "Type your e-mail");
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
    const media = this.castToObject<any[]>("media");

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const brandButtons = this.castToObject<INPUTS.CastedButton[]>("brandButtons") || [];
    const hasBrandButtons = brandButtons.some((btn) => this.castToString(btn.text));

    const formProps = this.castToObject<any>("form");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const submitText = this.castToString(formProps?.submitText);
    const placeHolderExist = this.castToString(formProps?.subscriptionPlaceholder);

    const leftExist = subtitleExist || titleExist || descriptionExist || hasBrandButtons || media.length > 0;

    const rightTitleExist = this.castToString(formProps?.rightTitle);
    const rightDescExist = this.castToString(formProps?.rightDescription);
    const buttonTextExist = buttons.some((btn) => this.castToString(btn?.text));

    const rightExist = rightTitleExist || rightDescExist || (placeHolderExist && buttonTextExist);

    const line = this.getPropValue("line");

    const links = this.castToObject<any[]>("links");

    const footerText = this.getPropValue("footerText");
    const footerTextExist = this.castToString(footerText);


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
                      {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                      {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                      {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                      {hasBrandButtons && (
                        <div className={this.decorateCSS("button-container")}>
                          {brandButtons.map(
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
                      {media.length > 0 && (
                        <div className={this.decorateCSS("images")}>
                          <Base.Row className={this.decorateCSS("image-container")}>
                            {media.map((item: any, index: number) => {
                              return (
                                item.media && (
                                  <div className={this.decorateCSS("image-element")} key={index}>
                                    <ComposerLink path={item.url}>
                                      <Base.Media value={item.media} className={`${this.decorateCSS("image")} ${item.media?.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                    </ComposerLink>
                                  </div>
                                )
                              );
                            })}
                          </Base.Row>
                        </div>
                      )}
                    </Base.VerticalContent>
                  )}

                  {this.castToObject<any[]>("footer").length > 0 &&
                    this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => {
                      const footerTitleExist = this.castToString(item.footerTitle);
                      const footerTitleMediaExist = hasMedia(item.footerTitleMedia);
                      const footerExist = footerTitleExist || footerTitleMediaExist || item.footerText.length > 0;
                      return (
                        footerExist && (
                          <Base.VerticalContent key={indexFooter} className={this.decorateCSS("list-group")}>
                            {(footerTitleExist || footerTitleMediaExist) && (
                              <ComposerLink path={item.footerTitleLink}>
                                <div className={this.decorateCSS("menu-media-wrapper")}>
                                  {footerTitleMediaExist && (
                                    <Base.Media value={item.footerTitleMedia} className={this.decorateCSS("menu-title-media")} />
                                  )}
                                  {footerTitleExist && <Base.H6 className={this.decorateCSS("title")}>{item.footerTitle}</Base.H6>}
                                </div>
                              </ComposerLink>
                            )}
                            {item.footerText.length > 0 && (
                              <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                {item.footerText.map((v: FooterTextValues, indexFooterText: number) => {
                                  const footerTextExist = this.castToString(v.navTitle);
                                  const navMediaExist = hasMedia(v.navMedia);
                                  return (
                                    (footerTextExist || navMediaExist) && (
                                      <ComposerLink key={indexFooterText} path={v.navNavigateTo}>
                                        <div className={this.decorateCSS("menu-media-wrapper")}>
                                          {navMediaExist && (
                                            <Base.Media value={v.navMedia} className={this.decorateCSS("menu-item-media")} />
                                          )}
                                          {footerTextExist && (
                                            <Base.P
                                              className={this.decorateCSS("text")}
                                              data-animation={v.navNavigateTo ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                              data-has-link={Boolean(v.navNavigateTo)}
                                            >
                                              {v.navTitle}
                                            </Base.P>
                                          )}
                                        </div>
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

                  {rightExist && (
                    <div className={this.decorateCSS("right")}>
                      {rightTitleExist && <Base.H6 className={this.decorateCSS("title")}>{formProps?.rightTitle}</Base.H6>}
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

                          this.insertForm("Footer 4 - NewsletterForm", data);
                          resetForm();
                        }}
                      >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                          <Form className={this.decorateCSS("form")} onSubmit={handleSubmit}>
                            {placeHolderExist && (
                              <div className={this.decorateCSS("input-element")}>
                                <input
                                  className={this.decorateCSS("input")}
                                  type="text"
                                  placeholder={this.getComponentState("placeholderText") || placeHolderExist || ""}
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                />
                                {errors.email && touched.email && <div className={this.decorateCSS("error")}>{errors.email}</div>}
                              </div>
                            )}

                            {placeHolderExist && buttonTextExist && (
                              <div className={this.decorateCSS("buttons")}>
                                {buttons.map((btn: INPUTS.CastedButton, btnIndex: number) =>
                                  this.castToString(btn?.text) ? (
                                    <ComposerLink key={btnIndex} path={btn.url} className={this.decorateCSS("button-link")}>
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
                      {rightDescExist && <Base.P className={this.decorateCSS("description")}>{formProps?.rightDescription}</Base.P>}
                    </div>
                  )}
                </div>
              </div>
            </Base.MaxContent>
          </Base.Container>

          {line && <div className={this.decorateCSS("line")}></div>}

          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={this.decorateCSS("bottom")}>
                {footerTextExist && <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerText")}</Base.P>}

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
              </div>
            </Base.MaxContent>
          </Base.Container>
        </div>
      </div>
    );
  }
}

export default Footer4Page;
