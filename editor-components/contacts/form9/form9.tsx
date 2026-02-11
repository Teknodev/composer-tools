import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Form9 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

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
              type: "media",
              key: "icon",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaCheckCircle" },
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
              type: "media",
              key: "icon",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaCheckCircle" },
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
              type: "media",
              key: "icon",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaCheckCircle" },
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
                      displayer: "Required Error Message",
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
                      displayer: "Type Error Message",
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
                      displayer: "Required Error Message",
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
                      displayer: "Type Error Message",
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
                      displayer: "Required Error Message",
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
                      displayer: "Type Error Message",
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
                      value: "+44 (000)000-000",
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
                      displayer: "Required Error Message",
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
                      displayer: "Type Error Message",
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
                      displayer: "Required Error Message",
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
                      displayer: "Type Error Message",
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
          displayer: "Label",
          value: "I agree to the",
        },
        {
          type: "string",
          key: "link_text",
          displayer: "Link Text",
          value: "Terms and Conditions",
        },
        { type: "page", key: "link_url", displayer: "Navigate To", value: "" },
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
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");
    const features = this.getPropValue(
      "features"
    ) as TypeUsableComponentProps[];
    const inputItems = (this.getPropValue("input_items") || []) as any[];

    const titleStr = this.castToString(title) || "";

    const consent = this.castToObject<any>("consent");
    const hasButton = !!(this.castToString(button?.text) || "");
    const consentLabelPrefix = this.castToString(consent?.label_prefix) || "";
    const consentLinkText = this.castToString(consent?.link_text) || "";
    const consentLinkUrl = this.castToString(consent?.link_url) || "";
    const showConsent = !!(consent && (consentLabelPrefix || consentLinkText));

    const subtitle = this.getPropValue("subtitle");
    const subtitleText = this.castToString(subtitle);

    const hasAnyFeature =
      Array.isArray(features) &&
      features.some((item: any) => {
        const icon = item.getPropValue("icon");
        const featureTitle = this.castToString(item.getPropValue("title"));
        const featureDescription = this.castToString(
          item.getPropValue("description")
        );
        return !!(
          icon ||
          (featureTitle && featureTitle) ||
          (featureDescription && featureDescription)
        );
      });
    const showLeft = !!(titleStr || hasAnyFeature);

    function toObjectKey(str: string) {
      if (/^\d/.test(str)) str = "_" + str;
      return str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
    }

    function getInputType(type: string): string {
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
    }

    const getInputName = (
      groupIndex: number,
      label: any,
      inputIndex: number
    ): string => {
      const labelText = (this.castToString(label) || "") as string;
      return toObjectKey(`${groupIndex} ${labelText} ${inputIndex}`);
    };

    const getInitialValue = () => {
      const value: Record<string, any> = {};
      inputItems.forEach((inputItem: any, groupIndex: number) => {
        inputItem
          .getPropValue("inputs")
          ?.forEach((_in: TypeUsableComponentProps, inputIndex: number) => {
            const key = getInputName(
              groupIndex,
              inputItem.getPropValue("label"),
              inputIndex
            );
            value[key] = "";
          });
      });
      if (showConsent) value["consent"] = false;
      return value;
    };

    const getSchema = () => {
      let schema = Yup.object().shape({});
      inputItems.forEach((inputItem: any, groupIndex: number) => {
        inputItem
          .getPropValue("inputs")
          ?.forEach((input: any, inputIndex: number) => {
            const key = getInputName(
              groupIndex,
              inputItem.getPropValue("label"),
              inputIndex
            );
            const isRequired = !!input.getPropValue("is_required");
            const typeStr =
              (input.getPropValue("type", { as_string: true }) as string) ||
              "Text";
            const isEmail = getInputType(typeStr) === "email";

            let fieldSchema: any = Yup.string();
            fieldSchema = isRequired
              ? fieldSchema.required(
                  (input.getPropValue("required_error_message", {
                    as_string: true,
                  }) as string) || "Required"
                )
              : fieldSchema.nullable();
            if (isEmail) {
              fieldSchema = fieldSchema.email(
                (input.getPropValue("type_error_message", {
                  as_string: true,
                }) as string) || "Invalid"
              );
            }

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
          ${showLeft && !showRight ? this.decorateCSS("only-left") : ""}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showLeft && (
            <div className={this.decorateCSS("left-container")}>
              <Base.VerticalContent
                className={this.decorateCSS("left-vertical-content")}
              >
                {subtitleText && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleStr && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {hasAnyFeature && (
                  <div className={this.decorateCSS("features")}>
                    {features?.map((item: any, i: number) => {
                      const media = item.getPropValue("icon");
                      const featureTitle = this.castToString(
                        item.getPropValue("title")
                      );
                      const featureDescription = this.castToString(
                        item.getPropValue("description")
                      );
                      const hasMedia =
                        !!media &&
                        ((media.type === "icon" && !!media.name) ||
                          (media.type === "image" &&
                            !!(media.url || media.src)));
                      if (
                        !(
                          hasMedia ||
                          (featureTitle && featureTitle) ||
                          (featureDescription && featureDescription)
                        )
                      )
                        return null;

                      return (
                        <div key={i} className={this.decorateCSS("feature")}>
                          {hasMedia && (
                            <Base.Media
                              value={media}
                              className={this.decorateCSS("feature-icon")}
                            />
                          )}
                          <div className={this.decorateCSS("feature-content")}>
                            {featureTitle && (
                              <Base.P
                                className={this.decorateCSS("feature-title")}
                              >
                                {item.getPropValue("title")}
                              </Base.P>
                            )}
                            {featureDescription && (
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

          {showRight && (
            <div className={this.decorateCSS("right-container")}>
              <Base.VerticalContent
                className={this.decorateCSS("right-vertical-content")}
              >
                {formContainerExists && (
                  <div className={this.decorateCSS("form-container")}>
                    <Formik
                      initialValues={getInitialValue()}
                      validationSchema={getSchema()}
                      onSubmit={(data, { resetForm }) => {
                        const formData = getFormDataWithConvertedKeys(data);
                        this.insertForm("Form 9 - ContactUsForm", formData);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values }) => (
                        <Form className={this.decorateCSS("form")}>
                          {inputItems.map(
                            (inputItem: any, inputItemIndex: number) => {
                              const inputs =
                                (inputItem.getPropValue(
                                  "inputs"
                                ) as TypeUsableComponentProps[]) || [];
                              const isTwoInputs =
                                Array.isArray(inputs) && inputs.length === 2;

                              return (
                                <div
                                  key={inputItemIndex}
                                  className={this.decorateCSS(
                                    "input-container"
                                  )}
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
                                  <div
                                    className={`${this.decorateCSS("inputs")} ${
                                      isTwoInputs
                                        ? this.decorateCSS("inputs-two")
                                        : ""
                                    }`}
                                  >
                                    {inputs?.map(
                                      (inputObj: any, inputIndex: number) => (
                                        <div
                                          key={inputIndex}
                                          className={this.decorateCSS(
                                            "input-box"
                                          )}
                                        >
                                          {inputObj.getPropValue("type", {
                                            as_string: true,
                                          }) === "Text Area" ? (
                                            <textarea
                                              rows={12}
                                              className={this.decorateCSS(
                                                "input"
                                              )}
                                              name={getInputName(
                                                inputItemIndex,
                                                inputItem.getPropValue("label"),
                                                inputIndex
                                              )}
                                              value={
                                                (values as any)[
                                                  getInputName(
                                                    inputItemIndex,
                                                    inputItem.getPropValue(
                                                      "label"
                                                    ),
                                                    inputIndex
                                                  )
                                                ]
                                              }
                                              placeholder={
                                                (inputObj.getPropValue(
                                                  "placeholder",
                                                  {
                                                    as_string: true,
                                                  }
                                                ) as string) || ""
                                              }
                                              onChange={handleChange}
                                            />
                                          ) : (
                                            <input
                                              className={this.decorateCSS(
                                                "input"
                                              )}
                                              name={getInputName(
                                                inputItemIndex,
                                                inputItem.getPropValue("label"),
                                                inputIndex
                                              )}
                                              value={
                                                (values as any)[
                                                  getInputName(
                                                    inputItemIndex,
                                                    inputItem.getPropValue(
                                                      "label"
                                                    ),
                                                    inputIndex
                                                  )
                                                ]
                                              }
                                              placeholder={
                                                (inputObj.getPropValue(
                                                  "placeholder",
                                                  {
                                                    as_string: true,
                                                  }
                                                ) as string) || ""
                                              }
                                              onChange={handleChange}
                                              type={getInputType(
                                                inputObj.getPropValue("type", {
                                                  as_string: true,
                                                }) as string
                                              )}
                                            />
                                          )}
                                          <ErrorMessage
                                            className={this.decorateCSS(
                                              "error-message"
                                            )}
                                            name={getInputName(
                                              inputItemIndex,
                                              inputItem.getPropValue("label"),
                                              inputIndex
                                            )}
                                            component={"span"}
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          )}

                          {showConsent && (
                            <div className={this.decorateCSS("consent")}>
                              <label
                                className={this.decorateCSS("consent-label")}
                              >
                                <input
                                  type="checkbox"
                                  name="consent"
                                  onChange={handleChange}
                                  checked={(values as any).consent || false}
                                />
                                <Base.P
                                  className={this.decorateCSS(
                                    "consent-container"
                                  )}
                                >
                                  <span
                                    className={this.decorateCSS("consent-text")}
                                  >
                                    {consentLabelPrefix}
                                    {(consentLinkText || consentLinkUrl) &&
                                    consentLinkUrl ? (
                                      <ComposerLink path={consentLinkUrl}>
                                        <span
                                          className={this.decorateCSS(
                                            "consent-link"
                                          )}
                                        >
                                          {consentLinkText || consentLinkUrl}
                                        </span>
                                      </ComposerLink>
                                    ) : (
                                      consentLinkText && (
                                        <span
                                          className={this.decorateCSS(
                                            "consent-link"
                                          )}
                                        >
                                          {consentLinkText}
                                        </span>
                                      )
                                    )}
                                  </span>
                                </Base.P>
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
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {button!.text}
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
