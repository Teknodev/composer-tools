import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form5.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Form5 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "CONTACT",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "SAY HELLO",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Submit", null, null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "first_inputs",
      displayer: "Left Inputs",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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
                  value: "Under $1000",
                },
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
                  value: "$1000 - $5000",
                },
                {
                  type: "string",
                  key: "option",
                  displayer: "Option",
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
      displayer: "Right Inputs",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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
              displayer: "Required Error Message",
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
              displayer: "Type Error Message",
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

  static getName(): string {
    return "Form 5";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const buttonText = this.castToString(button.text);

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

    function getInputName(indexOfInput: number): string {
      return `input_${indexOfInput}`;
    }

    function getInitialValue(inputs: any[]) {
      let value: any = {};
      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        value[getInputName(indexOfInput)] = "";
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
          [getInputName(indexOfInput)]: validator,
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

          if (parts.length > 2) {
            for (let i = 2; i < parts.length; i++) {
              newKey += (i > 2 ? "_" : "") + parts[i];
            }
            newObj[newKey] = obj[key];
          } else {
            newObj[adjustedKey] = obj[key];
          }
        }
      }

      return newObj;
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {(subtitle || title) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              </Base.VerticalContent>
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
                        <div className={this.decorateCSS("left-inputs")}>
                          {firstInputs.map((input: any, index: number) => (
                            <div key={index} className={this.decorateCSS("input-container")}>
                              {getInputType(input.getPropValue("type")) === "textarea" ? (
                                <textarea value={values[getInputName(index)]} placeholder=" " className={`${this.decorateCSS("input")} ${this.decorateCSS("textarea")}`} rows={12} onChange={handleChange} name={getInputName(index)}></textarea>
                              ) : getInputType(input.getPropValue("type")) === "select" ? (
                                <select value={values[getInputName(index)]} onChange={handleChange} name={getInputName(index)} className={`${this.decorateCSS("select")} ${this.decorateCSS("custom-select")}`}>
                                  <option value="" disabled hidden>
                                    {input.getPropValue("placeholder")}
                                  </option>
                                  {input.getPropValue("options").map((option: any, idx: number) => (
                                    <option key={idx} value={option.value}>
                                      {option.value}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <input placeholder=" " type={getInputType(input.getPropValue("type"))} onChange={handleChange} value={values[getInputName(index)]} name={getInputName(index)} className={this.decorateCSS("input")} />
                              )}
                              {getInputType(input.getPropValue("type")) === "select" ? "" : <Base.P className={this.decorateCSS("placeholder")}>{input.getPropValue("placeholder")}</Base.P>}
                              <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index)} component={"span"} />
                            </div>
                          ))}
                        </div>
                      )}
                      {secondInputs.length > 0 && (
                        <div className={this.decorateCSS("right-inputs")}>
                          {secondInputs.map((input: any, index: number) => (
                            <div key={index} className={this.decorateCSS("input-container")}>
                              {getInputType(input.getPropValue("type")) === "textarea" ? (
                                <textarea
                                  placeholder=" "
                                  className={`${this.decorateCSS("input")} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                  name={getInputName(index + firstInputs.length)}
                                  value={values[getInputName(index + firstInputs.length)]}
                                ></textarea>
                              ) : getInputType(input.getPropValue("type")) === "select" ? (
                                <select value={values[getInputName(index + firstInputs.length)]} onChange={handleChange} name={getInputName(index + firstInputs.length)} className={`${this.decorateCSS("select")} ${this.decorateCSS("custom-select")}`}>
                                  <option value="" disabled hidden>
                                    {input.getPropValue("placeholder")}
                                  </option>
                                  {input.getPropValue("options").map((option: any, idx: number) => (
                                    <option key={idx} value={option.value}>
                                      {option.value}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  placeholder=" "
                                  type={getInputType(input.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(index + firstInputs.length)]}
                                  name={getInputName(index + firstInputs.length)}
                                  className={this.decorateCSS("input")}
                                />
                              )}
                              {getInputType(input.getPropValue("type")) === "select" ? "" : <Base.P className={this.decorateCSS("placeholder")}>{input.getPropValue("placeholder")}</Base.P>}
                              <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index + firstInputs.length)} component={"span"} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {buttonText && (
                      <Base.Button buttonType={button.type} className={this.decorateCSS("submit-button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form5;
