import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form7.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

class Form7 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "I want to",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "SAY HELLO",
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "CONTACT",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Submit",
    });
    this.addProp({
      type: "array",
      key: "first_inputs",
      displayer: "First Inputs",
      value: [
        {
          type: "object",
          key: "input",
          displayer: "Input",
          value: [
            {
              type: "string",
              displayer: "Placeholder",
              key: "placeholder",
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
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "Lorem ipsum",
                },
              ],
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
              value: "Last Name",
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
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "Lorem ipsum",
                },
              ],
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
              value: "Budget",
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
              value: "Select",
              additionalParams: {
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option1",
                  displayer: "Option1",
                  value: "Under $1000",
                },
                {
                  type: "string",
                  key: "option2",
                  displayer: "Option2",
                  value: "$1000 - $5000",
                },
                {
                  type: "string",
                  key: "option3",
                  displayer: "Option3",
                  value: "Above $5000",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "second_inputs",
      displayer: "Second Inputs",
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
              value: "Email",
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
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "Lorem ipsum",
                },
              ],
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
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "Lorem ipsum",
                },
              ],
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
              value: "Description",
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
                selectItems: ["Text", "E-mail", "Number", "Select"],
              },
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type error message",
              value: "Invalid type",
            },
            {
              type: "array",
              key: "options",
              displayer: "Options",
              value: [
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "Lorem ipsum",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Form 7";
  }

  render() {
    const badge = this.castToString(this.getPropValue("badge"));
    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const buttonText = this.castToString(this.getPropValue("button_text"));

    const firstInputs = this.getPropValue("first_inputs");
    const secondInputs = this.getPropValue("second_inputs");
    const allInputs = [...firstInputs, ...secondInputs];
    const initialValues = getInitialValue(allInputs);

    function getInputType(type: string): string {
      switch (type) {
        case "E-mail":
          return "email";
        case "Tel":
          return "tel";
        case "Number":
          return "number";
        case "Select":
          return "select";
        default:
          return "text";
      }
    }

    function getInputName(indexOfInput: number, prefix: string): string {
      return `${prefix}_input_${indexOfInput}`;
    }

    function getInitialValue(inputs: any[]) {
      let value: any = {};
      inputs.forEach((input: any, indexOfInput: number) => {
        value[getInputName(indexOfInput, input.prefix)] = "";
      });
      return value;
    }

    const getSchema = (inputs: any[]) => {
      let schema = Yup.object().shape({});

      inputs.forEach((input: any, indexOfInput: number) => {
        const isRequired = input.getPropValue("is_required");
        const isEmail = getInputType(input.getPropValue("type")) === "email";
        const requiredMessage = input.getPropValue("required_error_message");
        const typeErrorMessage = input.getPropValue("type_error_message");

        let validator = Yup.string();

        if (isEmail) validator = validator.email(typeErrorMessage);
        if (isRequired) validator = validator.required(requiredMessage);

        schema = schema.shape({
          [getInputName(indexOfInput, input.prefix)]: validator,
        });
      });

      return schema;
    };

    function getFormDataWithConvertedKeys(obj: any) {
      const newObj: any = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          let adjustedKey = key.startsWith("_") ? key.slice(1) : key;
          const parts = adjustedKey.split("_");
          let newKey = "";
          for (let i = 2; i < parts.length - 1; i++) {
            newKey += (i > 2 ? "_" : "") + parts[i];
          }
          newObj[newKey] = obj[key];
        }
      }
      return newObj;
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(badge || title || subtitle) && (
              <div className={this.decorateCSS("texts")}>
                {badge && (
                  <span className={this.decorateCSS("badge")}>{badge}</span>
                )}
                {(title || subtitle) && (
                  <div className={this.decorateCSS("text")}>
                    {subtitle && (
                      <span className={this.decorateCSS("subtitle")}>
                        {subtitle}
                      </span>
                    )}
                    {title && (
                      <span className={this.decorateCSS("title")}>{title}</span>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className={this.decorateCSS("input-items")}>
              <Formik
                initialValues={initialValues}
                validationSchema={getSchema(allInputs)}
                onSubmit={(data, { resetForm }) => {
                  const formData = getFormDataWithConvertedKeys(data);
                  this.insertForm("Contact Me", formData);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    <div className={this.decorateCSS("inputs")}>
                      {firstInputs.length > 0 && (
                        <div className={this.decorateCSS("first-inputs")}>
                          {firstInputs.map((input: any, index: number) => (
                            <div
                              key={index}
                              className={this.decorateCSS("input-container")}
                            >
                              {getInputType(input.getPropValue("type")) ===
                              "textarea" ? (
                                <textarea
                                  value={
                                    values[getInputName(index, input.prefix)]
                                  }
                                  placeholder=" "
                                  className={`${this.decorateCSS(
                                    "input"
                                  )} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                  name={getInputName(index, input.prefix)}
                                ></textarea>
                              ) : getInputType(input.getPropValue("type")) ===
                                "select" ? (
                                <select
                                  value={
                                    values[getInputName(index, input.prefix)]
                                  }
                                  onChange={handleChange}
                                  name={getInputName(index, input.prefix)}
                                  className={`${this.decorateCSS(
                                    "select"
                                  )} ${this.decorateCSS("custom-select")}`}
                                >
                                  <option value="" disabled hidden>
                                    {input.getPropValue("placeholder")}
                                  </option>
                                  {input
                                    .getPropValue("options")
                                    .map((option: any, idx: number) => (
                                      <option key={idx} value={option.value}>
                                        {option.value}
                                      </option>
                                    ))}
                                </select>
                              ) : (
                                <input
                                  placeholder=" "
                                  type={getInputType(
                                    input.getPropValue("type")
                                  )}
                                  onChange={handleChange}
                                  value={
                                    values[getInputName(index, input.prefix)]
                                  }
                                  name={getInputName(index, input.prefix)}
                                  className={this.decorateCSS("input")}
                                />
                              )}
                              {getInputType(input.getPropValue("type")) ===
                              "select" ? (
                                ""
                              ) : (
                                <span
                                  className={this.decorateCSS("placeholder")}
                                >
                                  {input.getPropValue("placeholder")}
                                </span>
                              )}
                              <ErrorMessage
                                className={this.decorateCSS("error-message")}
                                name={getInputName(index, input.prefix)}
                                component={"span"}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {secondInputs.length > 0 && (
                        <div className={this.decorateCSS("second-inputs")}>
                          {secondInputs.map((input: any, index: number) => (
                            <div
                              key={index}
                              className={this.decorateCSS("input-container")}
                            >
                              {getInputType(input.getPropValue("type")) ===
                              "textarea" ? (
                                <textarea
                                  placeholder=" "
                                  className={`${this.decorateCSS(
                                    "input"
                                  )} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                  name={getInputName(
                                    index + firstInputs.length,
                                    input.prefix
                                  )}
                                  value={
                                    values[
                                      getInputName(
                                        index + firstInputs.length,
                                        input.prefix
                                      )
                                    ]
                                  }
                                ></textarea>
                              ) : getInputType(input.getPropValue("type")) ===
                                "select" ? (
                                <select
                                  value={
                                    values[
                                      getInputName(
                                        index + firstInputs.length,
                                        input.prefix
                                      )
                                    ]
                                  }
                                  onChange={handleChange}
                                  name={getInputName(
                                    index + firstInputs.length,
                                    input.prefix
                                  )}
                                  className={`${this.decorateCSS(
                                    "select"
                                  )} ${this.decorateCSS("custom-select")}`}
                                >
                                  <option value="" disabled hidden>
                                    {input.getPropValue("placeholder")}
                                  </option>
                                  {input
                                    .getPropValue("options")
                                    .map((option: any, idx: number) => (
                                      <option key={idx} value={option.value}>
                                        {option.value}
                                      </option>
                                    ))}
                                </select>
                              ) : (
                                <input
                                  placeholder=" "
                                  type={getInputType(
                                    input.getPropValue("type")
                                  )}
                                  onChange={handleChange}
                                  value={
                                    values[
                                      getInputName(
                                        index + firstInputs.length,
                                        input.prefix
                                      )
                                    ]
                                  }
                                  name={getInputName(
                                    index + firstInputs.length,
                                    input.prefix
                                  )}
                                  className={this.decorateCSS("input")}
                                />
                              )}
                              {getInputType(input.getPropValue("type")) ===
                              "select" ? (
                                ""
                              ) : (
                                <span
                                  className={this.decorateCSS("placeholder")}
                                >
                                  {input.getPropValue("placeholder")}
                                </span>
                              )}
                              <ErrorMessage
                                className={this.decorateCSS("error-message")}
                                name={getInputName(
                                  index + firstInputs.length,
                                  input.prefix
                                )}
                                component={"span"}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {buttonText && (
                      <button className={this.decorateCSS("submit-button")}>
                        <div className={this.decorateCSS("button-inner")}>
                          <div
                            className={this.decorateCSS("button-circle")}
                          ></div>
                          <span className={this.decorateCSS("button-text")}>
                            {this.getPropValue("button_text")}
                          </span>
                        </div>
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form7;
