import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import * as Yup from "yup";
import styles from "./form11.module.scss";
import { ErrorMessage, Formik, Form } from "formik";


class Form11Page extends BaseContacts {
  getName(): string {
    return "Form 11";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        "Let's work together! <br> Feel free to <span><i>contact</i></span> us any time.",
    });
    this.addProp({
      type: "string",
      key: "1th-text",
      displayer: "1th Text",
      value:
        "Phasellus sit amet scelerisque sapien. Aliquam erat volutpat. Nam ut lectus at velit dapibus sollicitudin eu.",
    });
    this.addProp({
      type: "string",
      key: "2th-text",
      displayer: "2th Text",
      value:
        "Because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone and one.",
    });

    this.addProp({
      type: "array",
      key: "contact-items",
      displayer: "Contact Items",
      value: [
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "text",
              value: "<b>Email:</b>hello@yoursite.com",
              displayer: "Text",
            }
          ],
        },
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "text",
              value: "<b>Phone:</b>+123.456.789",
              displayer: "Text",
            }
          ],
        },
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "text",
              value: "<b>Skype:</b>donec.sit.amet",
              displayer: "Text",
            }
          ],
        }
      ],
    });

    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "SEND",
    });

    this.addProp({
      type: "array",
      key: "input-items",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "input-item",
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
                      key: "isRequired",
                      displayer: "isRequired",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "requared_error_message",
                      displayer: "Requared error message",
                      value: "Requared",
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
                      key: "error_type_message",
                      displayer: "Error Type Message",
                      value: "Invalid Type",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "input-item",
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
                      value: "Email",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "isRequired",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "requared_error_message",
                      displayer: "Requared Error Message",
                      value: "Requared",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "text",
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
          key: "input-item",
          displayer: "Input Item",
          value: [
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
                      value: "Message",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "isRequired",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "requared_error_message",
                      displayer: "Requared Error Message",
                      value: "Requared",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "text",
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
      ],
    });
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const text1th = this.getPropValue("1th-text", { as_string: true });
    const text2th = this.getPropValue("2th-text", { as_string: true });
    const text3th = this.getPropValue("3th-text", { as_string: true });

    const inputItems = this.getPropValue("input-items")!;



    function toObjectKey(str: string) {
      if (/^\d/.test(str)) {
        str = "_" + str;
      }
      str = str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      return str;
    }

    function getInputType(type: string): string {
      switch (type) {
        case "TextArea":
          return "text-area";
        case "Email":
          return "e-mail";
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
      indexOfInput: number
    ): string {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
      return toObjectKey(name);
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem
          .getPropValue("inputs")
          ?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
            const key = getInputName(
              indexOfItem,
              inputItem.getPropValue("label"),
              indexOfInput
            );
            value[key] = "";
          });
      });
      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem
          .getPropValue("inputs")
          .map((input: any, indexOfInput: number) => {
            const key = getInputName(
              indexOfItem,
              inputItem.getPropValue("label"),
              indexOfInput
            );

            const isRequired = input.getPropValue("is_Requared");
            const isEmail = getInputType(input.getPropValue("type")) == "email";

            let fieldSchema = Yup.string() as any;

            if (isRequired) {
              fieldSchema = fieldSchema.requared(
                input.getPropValue("requared_error_message")
              );
            } else {
              fieldSchema = fieldSchema.nullable();
            }
            if (isEmail) {
              fieldSchema = fieldSchema.email(
                input.getPropValue("type_error_message")
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
          for (let i = 0; i < parts.length; i++) {
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
        .some((input: any) => input.getPropValue("is_Requared"));
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("title")}>
            <h1>{title && this.getPropValue("title")}</h1>
          </div>
          <div className={this.decorateCSS("page-content")}>
            <div className={this.decorateCSS("text-content")}>
             <p className={this.decorateCSS("th1-text")}> {text1th && this.getPropValue("1th-text")} </p>
              <p className={this.decorateCSS("th2-text")}> {text2th && this.getPropValue("2th-text")} </p>
              {
                this.castToObject<string[]>("contact-items").map(
                  (item : any , index:number)=>(
                      <p key={index} className={this.decorateCSS("th3-text")}>{item.text}</p>
                  ))
              }
            </div>
            <div>
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
                  <Form className={this.decorateCSS("form-content")}>
                    {inputItems.map((inputItem: any, inputItemIndex: number) =>
                      <div>
                        <div>
                          {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                            <div className={this.decorateCSS("input-box")}>
                              {inputObj.getPropValue("type") == "Text Area" ?
                                <textarea
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  className={this.decorateCSS("form-input")} placeholder={inputObj.getPropValue("placeholder",{ as_string: true })} rows={12} onChange={handleChange}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)} cols={30}></textarea> :
                                <input
                                  placeholder={inputObj.getPropValue("placeholder",{ as_string: true })}
                                  type={getInputType(inputObj.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                  className={this.decorateCSS("form-input")}
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
                      className={this.decorateCSS("form-button")}
                      type="submit"
                    >
                      {this.getPropValue("button_text")}
                    </button>
                  </Form>
                )}
              </Formik>

              {/* <form className={this.decorateCSS("form-content")}>
                    <input className={this.decorateCSS("form-input")} type="text"  placeholder={"Name"}/>
                    <input className={this.decorateCSS("form-input")} type="text" placeholder={"Email"}/>
                    <textarea className={this.decorateCSS("form-input")} cols={30} rows={10} placeholder={"Message..."}></textarea>
                    <button className={this.decorateCSS("form-button")}>{this.getPropValue("button-text")}</button>
                  </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form11Page;
