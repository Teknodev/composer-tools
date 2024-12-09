import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form10.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

class Form10 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Let us help you get your project started",
    });

    this.addProp({
      type: "array",
      key: "inputItems",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Placeholder",
                      key: "placeholder",
                      value: "What's your good name?*",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "requiredErrorMessage",
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
                      key: "typeErrorMessage",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FaUser",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Placeholder",
                      key: "placeholder",
                      value: "Enter your email address*",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "requiredErrorMessage",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["E-mail "],
                      },
                    },
                    {
                      type: "string",
                      key: "typeErrorMessage",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FaEnvelope",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Placeholder",
                      key: "placeholder",
                      value: "Enter your message",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "Is Required",
                      value: false,
                    },
                    {
                      type: "string",
                      key: "requiredErrorMessage",
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
                      key: "typeErrorMessage",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FaMessage",
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
      key: "buttonText",
      displayer: "Button Text",
      value: "SEND MESSAGE",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "We are committed to protecting your privacy. We will never collect information about you without your explicit consent.",
    });
  }

  getName(): string {
    return "Form 10";
  }

  render() {
    const titleExist = this.getPropValue("title", { as_string: true });
    const descriptionExist = this.getPropValue("description", { as_string: true });
    const inputItems = this.getPropValue("inputItems")!;

    function toObjectKey(str: string) {
      if (/^\d/.test(str)) {
        str = "_" + str;
      }
      str = str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      return str;
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

    function getInputName(
      indexOfLabel: number,
      inputLabel: string,
      indexOfInput: number,
    ) {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
      return toObjectKey(name);
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem
          .getPropValue("inputs")
          ?.forEach((_: any, indexOfInput: number) => {
            const key = getInputName(
              indexOfItem,
              inputItem.getPropValue("label"),
              indexOfInput,
            );
            value[key] = "";
          });
      });
      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem
          .getPropValue("inputs")
          .forEach((input: any, indexOfInput: number) => {
            const key = getInputName(
              indexOfItem,
              inputItem.getPropValue("label"),
              indexOfInput,
            );

            const isRequired = input.getPropValue("isRequired");
            const isEmail =
              getInputType(input.getPropValue("type")) === "E-mail";

            let fieldSchema = Yup.string();

            if (isRequired) {
              fieldSchema = fieldSchema.required(
                input.getPropValue("requiredErrorMessage"),
              );
            } else {
              fieldSchema = fieldSchema.nullable();
            }

            if (isEmail) {
              fieldSchema = fieldSchema.email(
                input.getPropValue("typeErrorMessage"),
              );
            }

            schema = schema.shape({
              [key]: fieldSchema,
            });
          });
      });

      return schema;
    }

    function getFormDataWithConvertedKeys(obj: any) {
      const newObj: any = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          let adjustedKey = key.startsWith("_") ? key.slice(1) : key;
          const parts = adjustedKey.split("_");
          let newKey = "";
          for (let i = 1; i < parts.length - 1; i++) {
            newKey += (i > 1 ? "_" : "") + parts[i];
          }
          newObj[newKey] = obj[key];
        }
      }
      return newObj;
    }
    function isRequiredInput(inputItem: any): boolean {
      return inputItem
        .getPropValue("inputs")
        .some((input: any) => input.getPropValue("isRequired"));
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={this.decorateCSS("wrapper")} gridCount={{ pc: 2, tablet: 1, phone: 1 }}>
            {titleExist && (
              <div className={this.decorateCSS("left-container")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              </div>
            )}
            {inputItems.length > 0 && (
              <div className={this.decorateCSS("right-container")}>
                <div className={this.decorateCSS("form-container")}>
                  <Formik
                    initialValues={getInitialValue()}
                    validationSchema={getSchema()}
                    onSubmit={(data, { resetForm }) => {
                      const formData = getFormDataWithConvertedKeys(data);
                      this.insertForm("CONTACT US", formData);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {inputItems.map(
                          (inputItem: any, inputItemIndex: number) => (
                            <div className={this.decorateCSS("input-container")}>
                              <span className={this.decorateCSS("placeholder")}>
                                {inputItem.getPropValue("placeholder", {
                                  suffix: {
                                    label: isRequiredInput(inputItem) && "*",
                                    className: this.decorateCSS("require-star"),
                                  },
                                })}
                              </span>
                              <div className={this.decorateCSS("inputs")}>
                                {inputItem
                                  .getPropValue("inputs")
                                  .map((inputObj: any, inputIndex: number) => (
                                    <div key={inputIndex} className={this.decorateCSS("input-box")}>
                                      <div className={this.decorateCSS("input-container")}>
                                        {inputObj.getPropValue("type") ===
                                          "Text Area" ? (
                                          <textarea
                                            value={values[getInputName(
                                              inputItemIndex,
                                              inputItem.getPropValue(
                                                "placeholder",
                                              ),
                                              inputIndex,
                                            )]}
                                            className={this.decorateCSS("input")}
                                            placeholder={inputObj.getPropValue(
                                              "placeholder", { as_string: true }
                                            )}
                                            rows={9}
                                            onChange={handleChange}
                                            name={getInputName(
                                              inputItemIndex,
                                              inputItem.getPropValue("placeholder"),
                                              inputIndex,
                                            )}
                                          ></textarea>
                                        ) : (
                                          <input
                                            placeholder={inputObj.getPropValue(
                                              "placeholder",
                                              { as_string: true },
                                            )}
                                            type={getInputType(
                                              inputObj.getPropValue("type"),
                                            )}
                                            onChange={handleChange}
                                            value={
                                              values[
                                              getInputName(
                                                inputItemIndex,
                                                inputItem.getPropValue(
                                                  "placeholder",
                                                ),
                                                inputIndex,
                                              )
                                              ]
                                            }
                                            name={getInputName(
                                              inputItemIndex,
                                              inputItem.getPropValue("placeholder"),
                                              inputIndex,
                                            )}
                                            className={this.decorateCSS("input")}
                                          />
                                        )}
                                        <ComposerIcon name={inputObj.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                                      </div>
                                      <ErrorMessage
                                        className={this.decorateCSS(
                                          "error-message",
                                        )}
                                        name={getInputName(
                                          inputItemIndex,
                                          inputItem.getPropValue("placeholder"),
                                          inputIndex,
                                        )}
                                        component={"span"}
                                      />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ),
                        )}

                        <div className={this.decorateCSS("bottom-section")}>
                          {descriptionExist && (
                            <div className={this.decorateCSS("description")}>
                              <Base.P className={this.decorateCSS("description-text")}>
                                {descriptionExist}
                              </Base.P>
                            </div>
                          )}
                          {this.getPropValue("buttonText", { as_string: true }) && (
                            <div className={this.decorateCSS("button-box")}>
                              <Base.Button
                                className={this.decorateCSS("submit-button")}
                                type="submit"
                              >
                                <span className={this.decorateCSS("button-text")}>{this.getPropValue("buttonText")}</span>
                              </Base.Button>
                            </div>
                          )}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form10;
