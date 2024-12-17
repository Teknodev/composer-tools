import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import * as Yup from "yup";
import styles from "./form11.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import { Base } from "../../../composer-base-components/base/base";

type ContactItem = {
  text: JSX.Element;
  title: JSX.Element;
};

class Form11Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Let's work together! Feel free to contact us any time.",
    });
    this.addProp({
      type: "string",
      key: "first-text",
      displayer: "First Text",
      value: "Phasellus sit amet scelerisque sapien. Aliquam erat volutpat. Nam ut lectus at velit dapibus sollicitudin eu.",
    });
    this.addProp({
      type: "string",
      key: "second-text",
      displayer: "Second Text",
      value: "Because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone and one.",
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
              key: "title",
              value: "Email:",
              displayer: "Text",
            },
            {
              type: "string",
              key: "text",
              value: "hello@yoursite.com",
              displayer: "Text",
            },
          ],
        },
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "title",
              value: "Phone:",
              displayer: "Text",
            },
            {
              type: "string",
              key: "text",
              value: "+123.456.789",
              displayer: "Text",
            },
          ],
        },
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "title",
              value: "Skype:",
              displayer: "Text",
            },
            {
              type: "string",
              key: "text",
              value: "donec.sit.amet",
              displayer: "Text",
            },
          ],
        },
      ],
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
                      value: "Message...",
                    },
                    {
                      type: "boolean",
                      key: "isRequired",
                      displayer: "isRequired",
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
                      value: "Text Area",
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

    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send",
    });
  }

  getName(): string {
    return "Form 11";
  }

  render() {
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const firstTextExist = !!this.getPropValue("first-text", { as_string: true });
    const secondTextExist = !!this.getPropValue("second-text", { as_string: true });
    const contactTexts = this.castToObject<ContactItem[]>("contact-items");

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

    function getInputName(indexOfLabel: number, inputLabel: string, indexOfInput: number): string {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
      return toObjectKey(name);
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          value[key] = "";
        });
      });
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
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("is_required"));
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExist && <Base.SectionTitle className={this.decorateCSS("section-title")}>{this.getPropValue("title")}</Base.SectionTitle>}
          <div className={this.decorateCSS("page-content")}>
            {(firstTextExist || secondTextExist || contactTexts?.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS("text-content")}>
                {firstTextExist && <Base.P className={this.decorateCSS("paragraph")}> {this.getPropValue("first-text")} </Base.P>}
                {secondTextExist && <Base.P className={this.decorateCSS("paragraph")}> {this.getPropValue("second-text")} </Base.P>}
                <Base.VerticalContent className={this.decorateCSS("contact-texts")}>
                  {contactTexts.map((item, i) => {
                    const titleExist = !!this.castToString(item.title);
                    const textExist = !!this.castToString(item.text);
                    const contactItemExist = titleExist || textExist;

                    return (
                      contactItemExist && (
                        <div key={i} className={this.decorateCSS("contact-element")}>
                          <Base.P className={this.decorateCSS("contact-title")}>{item.title}</Base.P>
                          <Base.P className={this.decorateCSS("contact-text")}>{item.text}</Base.P>
                        </div>
                      )
                    );
                  })}
                </Base.VerticalContent>
              </Base.VerticalContent>
            )}

            <Base.VerticalContent className={this.decorateCSS("form-content")}>
              <Formik
                initialValues={getInitialValue()}
                validationSchema={getSchema()}
                onSubmit={(data, { resetForm }) => {
                  const formData = getFormDataWithConvertedKeys(data);
                  this.insertForm("Contact Me", formData);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    {inputItems.map((inputItem: any, inputItemIndex: number) =>
                      inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) => (
                        <div className={this.decorateCSS("input-box")}>
                          {inputObj.getPropValue("type") == "Text Area" ? (
                            <textarea
                              value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                              className={this.decorateCSS("form-input")}
                              placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                              rows={12}
                              onChange={handleChange}
                              name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                              cols={30}
                            ></textarea>
                          ) : (
                            <input
                              placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                              type={getInputType(inputObj.getPropValue("type"))}
                              onChange={handleChange}
                              value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                              name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                              className={this.decorateCSS("form-input")}
                            />
                          )}
                          <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)} component={"span"} />
                        </div>
                      ))
                    )}
                    <Base.Button className={this.decorateCSS("form-button")}>{this.getPropValue("button_text")}</Base.Button>
                  </Form>
                )}
              </Formik>
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form11Page;
