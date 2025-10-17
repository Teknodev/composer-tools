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

    /* ------------------------------ Left Content ------------------------------ */
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

    /* --------------------------------- Inputs -------------------------------- */
    this.addProp({
      type: "array",
      key: "input_items",
      displayer: "Input Items",
      value: [
        /* Email */
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

        /* Full Name: Name + Surname */
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

        /* Phone Number: +90 (Text) + Phone (Number) */
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

        /* Message */
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

    /* ------------------------------- Consent ------------------------------- */
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
        { type: "string", key: "link_url", displayer: "Link URL", value: "#" },
      ],
    });

    /* --------------------------------- Button  -------------------------------- */
    this.addProp(
      INPUTS.BUTTON("button", "Button", "Let's Go", null, null, null, "Primary")
    );
  }

  static getName(): string {
    return "Form 9";
  }

  /* ---------------------------------- Render ---------------------------------- */
  render() {
    /* ---- left props ---- */
    const title = this.getPropValue("title");
    const features = this.getPropValue(
      "features"
    ) as TypeUsableComponentProps[];

    /* ---- right props ---- */
    const inputItems = (this.getPropValue("input_items") || []) as any[];

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

    const hasButton = !!(button && button.text);

    /* ---------------- helpers ---------------- */
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
      if (consent) value["consent"] = false;
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
            if (isRequired) {
              fieldSchema = fieldSchema.required(reqMsg);
            } else {
              fieldSchema = fieldSchema.nullable();
            }
            if (isEmail) {
              fieldSchema = fieldSchema.email(typeMsg);
            }

            schema = schema.shape({ [key]: fieldSchema });
          });
      });

      if (consent && !!consent.required) {
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

    const formContainerExist =
      (Array.isArray(inputItems) && inputItems.length > 0) || hasButton;

    /* ------------------------------- render ------------------------------- */
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* ---------------- LEFT CONTENT -------------- */}
          <div className={this.decorateCSS("left-container")}>
            <Base.VerticalContent>
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>

              <div className={this.decorateCSS("features")}>
                {features?.map((item: any, i: number) => {
                  const icon = item.getPropValue("icon", {
                    as_string: true,
                  }) as string;
                  const ft = this.castToString(item.getPropValue("title"));
                  const fd = this.castToString(
                    item.getPropValue("description")
                  );
                  if (!(icon || ft || fd)) return null;

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
                          <Base.P className={this.decorateCSS("feature-title")}>
                            {item.getPropValue("title")}
                          </Base.P>
                        )}
                        {fd && (
                          <Base.P
                            className={this.decorateCSS("feature-description")}
                          >
                            {item.getPropValue("description")}
                          </Base.P>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Base.VerticalContent>
          </div>

          {/* ---------------- RIGHT CONTENT (Formik) ---------------- */}
          <div className={this.decorateCSS("right-container")}>
            <Base.VerticalContent>
              {formContainerExist && (
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
                              <span className={this.decorateCSS("label")}>
                                {inputItem.getPropValue("label", {
                                  suffix: {
                                    label: isRequiredInput(inputItem)
                                      ? "*"
                                      : "",
                                    className: this.decorateCSS("require-star"),
                                  },
                                })}
                              </span>

                              <div className={this.decorateCSS("inputs")}>
                                {inputItem
                                  .getPropValue("inputs")
                                  ?.map((inputObj: any, inputIndex: number) => {
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
                                      (inputObj.getPropValue("placeholder", {
                                        as_string: true,
                                      }) as string) || "";
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
                                        <ErrorMessage
                                          className={this.decorateCSS(
                                            "error-message"
                                          )}
                                          name={name}
                                          component={"span"}
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )
                        )}

                        {consent && (
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
                                {consent?.label_prefix}{" "}
                                <a
                                  href={consent?.link_url || "#"}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {consent?.link_text}
                                </a>
                              </span>
                            </label>
                            <ErrorMessage
                              className={this.decorateCSS("error-message")}
                              name="consent"
                              component={"span"}
                            />
                          </div>
                        )}

                        {hasButton && (
                          <Base.Button
                            buttonType={button!.type}
                            className={this.decorateCSS("submit-button")}
                            type="submit"
                          >
                            {button!.text}
                          </Base.Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form9;
