import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Form7 extends BaseContacts {
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
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Name",
            },
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
                      value: "What's your name?*",
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
                      value: "E-mail",
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
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Text Area",
            },
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

    this.addProp(INPUTS.BUTTON("button", "Button", "SEND MESSAGE", null, null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We are committed to protecting your privacy. We will never collect information about you without your explicit consent.",
    });
  }

  static getName(): string {
    return "Form 7";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const inputItems = this.getPropValue("inputItems")!;
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const buttonTextExist = this.castToString(button.text);
    const rightItemsExist = inputItems.length > 0 || descriptionExist || buttonTextExist;

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

    const getInputName = (indexOfLabel: number, inputLabel: any, indexOfInput: number): string => {
      const labelText = inputLabel && this.castToString(inputLabel);
      return `input_${indexOfLabel}_${labelText}_${indexOfInput}`;
    };

    const getInitialValue = () => {
      const value: any = {};
      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.forEach((_: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          value[key] = "";
        });
      });
      return value;
    };

    const getSchema = () => {
      let schema = Yup.object().shape({});
      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").forEach((input: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          let fieldSchema = Yup.string();

          if (input.getPropValue("isRequired")) {
            fieldSchema = fieldSchema.required(input.getPropValue("requiredErrorMessage"));
          } else {
            fieldSchema = fieldSchema.nullable();
          }

          if (getInputType(input.getPropValue("type")) === "E-mail") {
            fieldSchema = fieldSchema.email(input.getPropValue("typeErrorMessage"));
          }

          schema = schema.shape({ [key]: fieldSchema });
        });
      });
      return schema;
    };

    function isRequiredInput(inputItem: any): boolean {
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("isRequired"));
    }

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={alignmentValue === "left" ? this.decorateCSS("wrapper") : alignmentValue === "center" ? this.decorateCSS("wrapper-center") : ""}>
            {titleExist && (
              <div className={this.decorateCSS("left-container")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              </div>
            )}
            {rightItemsExist && (
              <div className={this.decorateCSS("right-container")}>
                <div className={this.decorateCSS("form-container")}>
                  <Formik
                    initialValues={getInitialValue()}
                    validationSchema={getSchema}
                    onSubmit={(data, { resetForm }) => {
                      const formData = data;
                      this.insertForm("Form 7 - ContactUsForm", formData);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {inputItems.map((inputItem: any, inputItemIndex: number) => (
                          <div className={this.decorateCSS("input-container")}>
                            {!!inputItem.getPropValue("placeholder", { as_string: true }) && (
                              <span className={this.decorateCSS("placeholder")}>
                                {inputItem.getPropValue("placeholder", {
                                  suffix: {
                                    label: isRequiredInput(inputItem) && "*",
                                    className: this.decorateCSS("require-star"),
                                  },
                                })}
                              </span>
                            )}
                            <div className={this.decorateCSS("inputs")}>
                              {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) => {
                                return (
                                  <div key={inputIndex} className={this.decorateCSS("input-box")}>
                                    <div className={this.decorateCSS("input-container")}>
                                      {inputObj.getPropValue("type") === "Text Area" ? (
                                        <textarea
                                          value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                          className={this.decorateCSS("input")}
                                          placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                                          rows={9}
                                          onChange={handleChange}
                                          name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                        ></textarea>
                                      ) : (
                                        <input
                                          placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                                          type={getInputType(inputObj.getPropValue("type"))}
                                          onChange={handleChange}
                                          value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                          name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                          className={this.decorateCSS("input")}
                                        />
                                      )}
                                      <Base.Icon name={inputObj.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                                    </div>
                                    <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)} component={"span"} />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        {(descriptionExist || buttonTextExist) && (
                          <div className={this.decorateCSS("bottom-section")}>
                            {descriptionExist && (
                              <div className={this.decorateCSS("description")}>
                                <Base.P className={this.decorateCSS("description-text")}>{description}</Base.P>
                              </div>
                            )}
                            {buttonTextExist && (
                              <div className={this.decorateCSS("button-box")}>
                                <Base.Button buttonType={button.type} className={this.decorateCSS("submit-button")} type="submit">
                                  <span className={this.decorateCSS("button-text")}>{button.text}</span>
                                </Base.Button>
                              </div>
                            )}
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form7;
