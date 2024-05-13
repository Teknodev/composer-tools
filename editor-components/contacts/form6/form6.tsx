import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form6.module.scss";

class Form6 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec6a8c057bdf002c2aa09a?alt=media&timestamp=1693215349696",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CONTACT ME"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Feel free to get in touch with me via the form below or by emailing me directly at hello@test.com"
    });

    this.addProp({
      type: "string",
      key: "location",
      displayer: "Location Title",
      value: "CURRENTLY"
    });

    this.addProp({
      type: "string",
      key: "locationDetails",
      displayer: "Location Details",
      value: "Dubai, UNITED ARAB EMIRATES. Able to travel for commissions and projects"
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
              displayer: "Label",
              key: "label",
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
                      value: "First name"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required"
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
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
                      value: "Last name"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required"
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              displayer: "Label",
              key: "label",
              value: "E-mail",
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
                      value: "example@gmail.com"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required"
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              displayer: "Label",
              key: "label",
              value: "Subject",
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
                      value: "ex: Suggestion"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: false
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: ""
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              displayer: "Label",
              key: "label",
              value: "Message",
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
                      value: "Write your message..."
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required"
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text Area",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: ""
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
      value: "Send Email",
    });
  }



  getName(): string {
    return "Form6";
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const description = this.getPropValue("description", { as_string: true });
    const isContactVisible = title || description;

    const location = this.getPropValue("location", { as_string: true });
    const locationDetails = this.getPropValue("locationDetails", { as_string: true });
    const isAddressVisible = location || locationDetails;

    const inputItems = this.getPropValue("input_items")!
    const image = this.getPropValue("image");

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
          return "number"
        default:
          return "text"
      }
    }

    function getInputName(indexOfLabel: number, inputLabel: string, indexOfInput: number): string {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`)
      return toObjectKey(name);
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          value[key] = "";
        })
      })
      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").map((input: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);

          const isRequired = input.getPropValue("is_required");
          const isEmail = getInputType(input.getPropValue("type")) == "email";

          let fieldSchema = Yup.string() as any;

          if (isRequired) {
            fieldSchema = fieldSchema.required(input.getPropValue("required_error_message"))
          } else {
            fieldSchema = fieldSchema.nullable();
          }

          if (isEmail) {
            fieldSchema = fieldSchema.email(input.getPropValue("type_error_message"))
          }

          schema = schema.shape({
            [key]: fieldSchema,
          });
        })
      })

      return schema;
    };

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
          <div className={this.decorateCSS("top-container")} >
            {isContactVisible &&
              <div className={this.decorateCSS("contact")} >
                {title && <h1 className={this.decorateCSS("title")}> {this.getPropValue("title")} </h1>}
                {description && <h3 className={this.decorateCSS("description")}> {this.getPropValue("description")} </h3>}
              </div>
            }
            {isAddressVisible &&
              <div className={this.decorateCSS("address")}>
                {location && <h1 className={this.decorateCSS("title")}> {this.getPropValue("location")} </h1>}
                {locationDetails && <h3 className={this.decorateCSS("description")}> {this.getPropValue("locationDetails")} </h3>}
              </div>
            }
          </div>
          <div className={this.decorateCSS("lower-container")} >
            <div className={this.decorateCSS("form-container")} >
              <Formik
                initialValues={getInitialValue()}
                validationSchema={getSchema()}
                onSubmit={(data, { resetForm }) => {
                  const formData = getFormDataWithConvertedKeys(data)
                  this.insertForm("Contact Me", formData);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    {inputItems.map((inputItem: any, inputItemIndex: number) =>
                      <div className={this.decorateCSS("input-container")}>
                        <span className={this.decorateCSS("label")}>{inputItem.getPropValue("label")} <p className={this.decorateCSS("require-star")}>{isRequiredInput(inputItem) && "*"}</p></span>
                        <div className={this.decorateCSS("inputs")}>
                          {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                            <div className={this.decorateCSS("input-box")}>
                              {inputObj.getPropValue("type") == "Text Area" ?
                                <textarea
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  className={this.decorateCSS("input")} placeholder={inputObj.getPropValue("placeholder")} rows={12} onChange={handleChange}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}></textarea> :
                                <input
                                  placeholder={inputObj.getPropValue("placeholder")}
                                  type={getInputType(inputObj.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                  className={this.decorateCSS("input")}
                                />}
                              <ErrorMessage
                                className={this.decorateCSS("error-message")}
                                name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                component={"span"}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <button
                      className={this.decorateCSS("submit-button")}
                      type="submit"
                    >
                      {this.getPropValue("button_text")}
                    </button>
                  </Form>
                )}
              </Formik>

            </div>
            {image && <div className={this.decorateCSS("image-container")}>
              <img
                className={this.decorateCSS("image")}
                src={image}
                alt="contact image"
              />
            </div>}
          </div>
        </div>
      </div >
    );
  }
}

export default Form6;
