import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form10.module.scss";

class Form10 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "SubTitle",
      value: "CONTACT US",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Let us help you get your project started",
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
                        selectItems:["E-mail "],
                      },
                    },

                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                }
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
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ]
                },
              ]
            }
          ]
        }
      ]
    })
    this.addProp({
      type: "string",
      key: "button_text",
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
    const subtitle = this.getPropValue("subtitle", { as_string: true });
    const title = this.getPropValue("title", { as_string: true });
    const description = this.getPropValue("description", { as_string: true });
    const inputItems = this.getPropValue("input_items")!;
    const isContactVisible = title || subtitle;
    const isDescriptionVisible = description;

  
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
  
    function getInputName(indexOfLabel: number, inputLabel: string, indexOfInput: number) {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
      return toObjectKey(name);
    }
  
    function getInitialValue() {
      let value: any = {};
      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.forEach((_: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          value[key] = "";
        });
      });
      return value;
    }
  
    function getSchema() {
      let schema = Yup.object().shape({});
  
      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").forEach((input: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
  
          const isRequired = input.getPropValue("is_required");
          const isEmail = getInputType(input.getPropValue("type")) === "E-mail";
  
          let fieldSchema = Yup.string();
  
          if (isRequired) {
            fieldSchema = fieldSchema.required(input.getPropValue("required_error_message"));
          } else {
            fieldSchema = fieldSchema.nullable();
          }
  
          if (isEmail) {
            fieldSchema = fieldSchema.email(input.getPropValue("type_error_message"));
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
          let adjustedKey = key.startsWith('_') ? key.slice(1) : key;
          const parts = adjustedKey.split('_');
          let newKey = '';
          for (let i = 1; i < parts.length - 1; i++) {
            newKey += (i > 1 ? '_' : '') + parts[i];
          }
          newObj[newKey] = obj[key];
        }
      }
      return newObj;
    }
    function isRequiredInput(inputItem: any): boolean {
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("is_required"))
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("left-container")} >
            {isContactVisible &&
              <div className={this.decorateCSS("contact")} >
                {subtitle && <h1 className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")} </h1>}
                {title && <h3 className={this.decorateCSS("title")}> {this.getPropValue("title")}  </h3>}
              </div>
            }
          </div>
          <div className={this.decorateCSS("right-container")} >
            <div className={this.decorateCSS("form-container")} >
              <Formik
                initialValues={getInitialValue()}
                validationSchema={getSchema()}
                onSubmit={(data, { resetForm }) => {
                  const formData = getFormDataWithConvertedKeys(data)
                  this.insertForm("CONTACT US", formData);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                   {inputItems.map((inputItem: any, inputItemIndex: number) =>
                    <div className={this.decorateCSS("input-container")}>
                      <span className={this.decorateCSS("placeholder")}>{inputItem.getPropValue("placeholder", {
                        suffix: {
                          label: isRequiredInput(inputItem) && "*",
                          className: this.decorateCSS("require-star")
                        }
                      })}</span>
                      <div className={this.decorateCSS("inputs")}>
                        {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                          <div className={this.decorateCSS("input-box")}>

                            {inputObj.getPropValue("type") === "Text Area" ?
                              <textarea
                                value={values[getInputName(inputItemIndex, inputItem.getPropValue("placeholder"), inputIndex)]}
                                className={this.decorateCSS("input")} 
                                placeholder={inputObj.getPropValue("placeholder", { as_string: true })} 
                                rows={9} 
                                onChange={handleChange} 
                                name={getInputName(inputItemIndex, inputItem.getPropValue("placeholder"), inputIndex)}>
                                </textarea> :
                              <input
                                placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                type={getInputType(inputObj.getPropValue("type"))}
                                onChange={handleChange}
                                value={values[getInputName(inputItemIndex, inputItem.getPropValue("placeholder"), inputIndex)]}
                                name={getInputName(inputItemIndex, inputItem.getPropValue("placeholder"), inputIndex)}
                                className={this.decorateCSS("input")}
                              />}
                            <ErrorMessage
                              className={this.decorateCSS("error-message")}
                              name={getInputName(inputItemIndex, inputItem.getPropValue("placeholder"), inputIndex)}
                              component={"span"}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                    <div className={this.decorateCSS("bottom-section")}>
                    {isDescriptionVisible &&
                      <div className={this.decorateCSS("description")}>
                        {description && <h1 className={this.decorateCSS("description-text")}>{description}</h1>}
                      </div>
                    }
                    <button
                      className={this.decorateCSS("submit-button")}
                      type="submit"
                    >
                      <span>{this.getPropValue("button_text")}</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
    
            </div>
          </div>
        </div>
      </div >
    );
    
  
}
}

export default Form10;