import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Form9 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get Started with Apcopay",
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Flexible, fast setup",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Effortless integration, so you can start accepting credit cards the easy way",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Better customer experience",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "An optimised, streamlined payment journey, and one unified interface",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Global growth",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Reach new customers and diverse markets all over the world",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "input_items",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Email",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Email Address",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "E-mail",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid email",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Full Name",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Name",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Surname",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Phone Number",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Phone",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Number",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid number",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Message",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: false,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text Area",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
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
      type: "object",
      key: "consent",
      displayer: "Consent",
      value: [
        {
          type: "boolean",
          key: "required",
          displayer: "Require Consent",
          value: true,
        },
        {
          type: "string",
          key: "label_prefix",
          displayer: "Label Prefix",
          value: "I agree to the",
        },
        {
          type: "string",
          key: "link_text",
          displayer: "Link Text",
          value: "Terms and Conditions",
        },
        {
          type: "string",
          key: "link_url",
          displayer: "Navigate To",
          value: "",
        },
      ],
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "Let's Go", null, null, null, "Primary")
    );
  }

  static getName(): string {
    return "Form 9";
  }

  render() {
    const title = this.getPropValue("title");
    const features = this.getPropValue(
      "features"
    ) as TypeUsableComponentProps[];
    const inputItems = (this.getPropValue("input_items") || []) as any[];

    const titleStr = this.castToString(title)?.trim() || "";
    const hasAnyFeature =
      Array.isArray(features) &&
      features.some((item: any) => {
        const icon = item.getPropValue("icon", { as_string: true }) as string;
        const ft = this.castToString(item.getPropValue("title"));
        const fd = this.castToString(item.getPropValue("description"));
        return !!(
          icon ||
          (ft && String(ft).trim()) ||
          (fd && String(fd).trim())
        );
      });

    const showLeft = !!(titleStr || hasAnyFeature);

    let consent: any | undefined;
    try {
      consent = this.castToObject<any>("consent");
    } catch {
      consent = undefined;
    }

    let button: INPUTS.CastedButton | undefined;
    try {
      button = this.castToObject<INPUTS.CastedButton>("button");
    } catch {
      button = undefined;
    }

    const buttonTextExist = this.castToString(button?.text)?.trim() || "";
    const hasButton = !!buttonTextExist;

    const consentLabelPrefix =
      this.castToString(consent?.label_prefix)?.trim() || "";
    const consentLinkText = this.castToString(consent?.link_text)?.trim() || "";
    const consentLinkUrl = this.castToString(consent?.link_url)?.trim() || "#";
    const showConsent = !!(consent && (consentLabelPrefix || consentLinkText));

    const stripHtml = (s?: string) =>
      (s ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const toObjectKey = (str: string) => {
      if (/^\d/.test(str)) str = "_" + str;
      return str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
    };

    const getInputType = (type: string): string => {
      switch (type) {
        case "Text Area":
          return "textarea";
        case "E-mail":
          return "email";
        case "Tel":
          return "tel";
        case "Number":
          return "number";
        default:
          return "text";
      }
    };

    const mapToRenderedType = (t: string) => {
      const base = getInputType(t);
      if (base === "number") {
        return {
          htmlType: "text" as const,
          extra: { inputMode: "numeric", pattern: "[0-9]*" },
        };
      }
      return {
        htmlType: base as "text" | "email" | "tel" | "textarea",
        extra: {} as Record<string, any>,
      };
    };

    const getInputName = (
      groupIndex: number,
      groupLabelRaw: string,
      inputIndex: number
    ): string => {
      const groupLabel = stripHtml(groupLabelRaw || "");
      return toObjectKey(`${groupIndex} ${groupLabel} ${inputIndex}`);
    };

    const getInitialValue = () => {
      const value: Record<string, any> = {};
      inputItems.forEach((inputItem: any, groupIndex: number) => {
        const labelStr = stripHtml(
          (inputItem.getPropValue("label", { as_string: true }) as string) || ""
        );
        inputItem
          .getPropValue("inputs")
          ?.forEach((_in: TypeUsableComponentProps, inputIndex: number) => {
            const key = getInputName(groupIndex, labelStr, inputIndex);
            value[key] = "";
          });
      });
      if (showConsent) value["consent"] = false;
      return value;
    };

    const getSchema = () => {
      let schema = Yup.object().shape({});
      inputItems.forEach((inputItem: any, groupIndex: number) => {
        const labelStr = stripHtml(
          (inputItem.getPropValue("label", { as_string: true }) as string) || ""
        );
        inputItem
          .getPropValue("inputs")
          ?.forEach((input: any, inputIndex: number) => {
            const key = getInputName(groupIndex, labelStr, inputIndex);
            const isRequired = !!input.getPropValue("is_required");
            const typeStr =
              (input.getPropValue("type", { as_string: true }) as string) ||
              "Text";
            const isEmail = getInputType(typeStr) === "email";
            const reqMsg = stripHtml(
              (input.getPropValue("required_error_message", {
                as_string: true,
              }) as string) || "Required"
            );
            const typeMsg = stripHtml(
              (input.getPropValue("type_error_message", {
                as_string: true,
              }) as string) || "Invalid"
            );

            let fieldSchema: any = Yup.string();
            fieldSchema = isRequired
              ? fieldSchema.required(reqMsg)
              : fieldSchema.nullable();
            if (isEmail) fieldSchema = fieldSchema.email(typeMsg);

            schema = schema.shape({ [key]: fieldSchema });
          });
      });

      if (showConsent && !!consent?.required) {
        schema = schema.shape({
          consent: Yup.boolean().oneOf([true], "Required"),
        });
      }
      return schema;
    };

    const getFormDataWithConvertedKeys = (obj: any) => {
      const newObj: any = {};
      const nameParts: string[] = [];

      for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

        const adjustedKey = key.startsWith("_") ? key.slice(1) : key;
        const parts = adjustedKey.split("_");

        let newKey = "";
        for (let i = 1; i < parts.length - 1; i++) {
          newKey += (i > 1 ? "_" : "") + parts[i];
        }

        if (newKey === "name") {
          nameParts.push(obj[key]);
        } else if (key !== "consent") {
          newObj[newKey] = obj[key];
        }
      }

      if (nameParts.length > 0) newObj["name"] = nameParts.join(" ");
      return newObj;
    };

    function isRequiredInput(inputItem: any): boolean {
      return !!inputItem
        .getPropValue("inputs")
        ?.some((input: any) => input.getPropValue("is_required"));
    }

    const formContainerExists =
      (Array.isArray(inputItems) && inputItems.length > 0) ||
      hasButton ||
      showConsent;

    const showRight = !!formContainerExists;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")}
          ${!showLeft && showRight ? this.decorateCSS("only-form") : ""}
          ${showLeft && !showRight ? this.decorateCSS("only-left") : ""}
        `}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* ---------- LEFT CONTENT --------- */}

          {showLeft && (
            <div className={this.decorateCSS("left-container")}>
              <Base.VerticalContent
                className={this.decorateCSS("left-vc")}
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                {/* ---------- LEFT TITLE --------- */}

                {titleStr && (
                  <Base.SectionTitle
                    className={this.decorateCSS("title")}
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    {title}
                  </Base.SectionTitle>
                )}
                {/* ---------- FEATURES --------- */}

                {hasAnyFeature && (
                  <div className={this.decorateCSS("features")}>
                    {features?.map((item: any, i: number) => {
                      const icon = item.getPropValue("icon", {
                        as_string: true,
                      }) as string;
                      const ft = this.castToString(item.getPropValue("title"));
                      const fd = this.castToString(
                        item.getPropValue("description")
                      );
                      if (
                        !(
                          icon ||
                          (ft && String(ft).trim()) ||
                          (fd && String(fd).trim())
                        )
                      )
                        return null;

                      return (
                        <div key={i} className={this.decorateCSS("feature")}>
                          {icon && (
                            <div className={this.decorateCSS("feature-check")}>
                              <Base.Icon
                                name={icon}
                                propsIcon={{
                                  className: this.decorateCSS("feature-icon"),
                                }}
                              />
                            </div>
                          )}
                          <div className={this.decorateCSS("feature-content")}>
                            {ft && (
                              <Base.P
                                className={this.decorateCSS("feature-title")}
                              >
                                {item.getPropValue("title")}
                              </Base.P>
                            )}
                            {fd && (
                              <Base.P
                                className={this.decorateCSS(
                                  "feature-description"
                                )}
                              >
                                {item.getPropValue("description")}
                              </Base.P>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            </div>
          )}

          {/* ---------- RIGHT CONTENT --------- */}

          {showRight && (
            <div className={this.decorateCSS("right-container")}>
              <Base.VerticalContent>
                {formContainerExists && (
                  <div className={this.decorateCSS("form-container")}>
                    <Formik
                      initialValues={getInitialValue()}
                      validationSchema={getSchema()}
                      onSubmit={(data, { resetForm }) => {
                        const formData = getFormDataWithConvertedKeys(data);
                        const formTitle =
                          (this.getPropValue("title", {
                            as_string: true,
                          }) as string) || "Contact";
                        this.insertForm(formTitle, formData);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values }) => (
                        <Form className={this.decorateCSS("form")}>
                          {inputItems.map(
                            (inputItem: any, inputItemIndex: number) => (
                              <div
                                key={inputItemIndex}
                                className={this.decorateCSS("input-container")}
                              >
                                <Base.P className={this.decorateCSS("label")}>
                                  {inputItem.getPropValue("label", {
                                    suffix: {
                                      label: isRequiredInput(inputItem)
                                        ? "*"
                                        : "",
                                      className:
                                        this.decorateCSS("require-star"),
                                    },
                                  })}
                                </Base.P>

                                <div className={this.decorateCSS("inputs")}>
                                  {inputItem
                                    .getPropValue("inputs")
                                    ?.map(
                                      (inputObj: any, inputIndex: number) => {
                                        const name = getInputName(
                                          inputItemIndex,
                                          (inputItem.getPropValue("label", {
                                            as_string: true,
                                          }) as string) || "",
                                          inputIndex
                                        );

                                        const typeStr =
                                          (inputObj.getPropValue("type", {
                                            as_string: true,
                                          }) as string) || "Text";
                                        const { htmlType, extra } =
                                          mapToRenderedType(typeStr);

                                        const placeholderRaw =
                                          (inputObj.getPropValue(
                                            "placeholder",
                                            {
                                              as_string: true,
                                            }
                                          ) as string) || "";
                                        const placeholderStr =
                                          stripHtml(placeholderRaw);

                                        return (
                                          <div
                                            key={inputIndex}
                                            className={this.decorateCSS(
                                              "input-box"
                                            )}
                                          >
                                            {htmlType === "textarea" ? (
                                              <textarea
                                                rows={12}
                                                className={this.decorateCSS(
                                                  "input"
                                                )}
                                                name={name}
                                                value={(values as any)[name]}
                                                placeholder={placeholderStr}
                                                onChange={handleChange}
                                              />
                                            ) : (
                                              <input
                                                className={this.decorateCSS(
                                                  "input"
                                                )}
                                                name={name}
                                                value={(values as any)[name]}
                                                placeholder={placeholderStr}
                                                onChange={handleChange}
                                                type={htmlType}
                                                {...extra}
                                              />
                                            )}
                                            <div
                                              className={this.decorateCSS(
                                                "error-slot"
                                              )}
                                              aria-live="polite"
                                              aria-atomic="true"
                                            >
                                              <ErrorMessage
                                                name={name}
                                                render={(msg) => (
                                                  <span
                                                    key={msg || "empty"}
                                                    className={this.decorateCSS(
                                                      "error-message"
                                                    )}
                                                  >
                                                    {msg}
                                                  </span>
                                                )}
                                              />
                                            </div>
                                          </div>
                                        );
                                      }
                                    )}
                                </div>
                              </div>
                            )
                          )}

                          {showConsent && (
                            <div className={this.decorateCSS("consent")}>
                              <label
                                className={this.decorateCSS("consent-label")}
                              >
                                <input
                                  type="checkbox"
                                  name="consent"
                                  checked={(values as any).consent || false}
                                  onChange={handleChange}
                                />
                                <span>
                                  {consentLabelPrefix}{" "}
                                  {(consentLinkText || consentLinkUrl) && (
                                    <a
                                      href={consentLinkUrl || "#"}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {consentLinkText || consentLinkUrl}
                                    </a>
                                  )}
                                </span>
                              </label>
                              <div
                                className={this.decorateCSS("error-slot")}
                                aria-live="polite"
                                aria-atomic="true"
                              >
                                <ErrorMessage
                                  name="consent"
                                  render={(msg) => (
                                    <span
                                      key={msg || "empty"}
                                      className={this.decorateCSS(
                                        "error-message"
                                      )}
                                    >
                                      {msg}
                                    </span>
                                  )}
                                />
                              </div>
                            </div>
                          )}

                          {hasButton && (
                            <Base.Button
                              buttonType={button!.type}
                              className={this.decorateCSS("submit-button")}
                              type="submit"
                            >
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {buttonTextExist}
                              </Base.P>
                            </Base.Button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
              </Base.VerticalContent>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form9;
