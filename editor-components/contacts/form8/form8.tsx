import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import * as Yup from "yup";
import styles from "./form8.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ContactItem = {
  text: React.JSX.Element;
  title: React.JSX.Element;
};

class Form8 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Contact Us",
    });

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
              displayer: "Title",
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
              displayer: "Title",
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
              displayer: "Title",
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

    this.addProp(INPUTS.BUTTON("button", "Button", "Send", null, null, null, "Primary"));
  }

  static getName(): string {
    return "Form 8";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const firstTextExist = this.castToString(this.getPropValue("first-text"));
    const secondTextExist = this.castToString(this.getPropValue("second-text"));
    const contactTexts = this.castToObject<ContactItem[]>("contact-items");

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

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

    const getInputName = (indexOfLabel: number, inputLabel: any, indexOfInput: number): string => {
      const labelText = inputLabel && this.castToString(inputLabel);

      return toObjectKey(`${indexOfLabel} ${labelText} ${indexOfInput}`);
    };

    function getInitialValue() {
      let value: Record<string, string> = {};

      inputItems.forEach((inputItem: any, indexOfItem: number) => {
        const inputs = inputItem.getPropValue("inputs");
        const label = inputItem.getPropValue("label");

        if (Array.isArray(inputs)) {
          inputs.forEach((_: TypeUsableComponentProps, indexOfInput: number) => {
            const key = getInputName(indexOfItem, label, indexOfInput);
            value[key] = "";
          });
        }
      });

      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").map((input: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);

          const isRequired = input.getPropValue("isRequired");
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

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist) && <Base.VerticalContent className={this.decorateCSS("header")}>
            {subtitleExist && 
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
            }
            {titleExist && 
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            }
          </Base.VerticalContent>}
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
                          <Base.H5 className={this.decorateCSS("contact-title")}>{item.title}</Base.H5>
                          <Base.P className={this.decorateCSS("contact-text")}>{item.text}</Base.P>
                        </div>
                      )
                    );
                  })}
                </Base.VerticalContent>
              </Base.VerticalContent>
            )}

           {(inputItems.length > 0 || this.castToString(button.text)) && 
            <Base.VerticalContent className={this.decorateCSS("form-content")}>
              <Formik
                initialValues={getInitialValue()}
                validationSchema={getSchema}
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
                              placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                              rows={12}
                              onChange={handleChange}
                              name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                              cols={30}
                            ></textarea>
                          ) : (
                            <input
                              placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                              type={getInputType(inputObj.getPropValue("type"))}
                              onChange={handleChange}
                              value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                              name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                              className={this.decorateCSS("form-input")}
                            />
                          )}
                          <div className={this.decorateCSS("error-container")}>
                            <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)} component={"span"} />
                          </div>
                        </div>
                      ))
                    )}
                   {this.castToString(button.text) && 
                   <Base.Button buttonType={button.type} type="submit" className={this.decorateCSS("form-button")}>
                     <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>}
                  </Form>
                )}
              </Formik>
            </Base.VerticalContent>}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form8;
