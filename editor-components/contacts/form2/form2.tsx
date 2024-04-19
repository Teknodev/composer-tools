import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form2.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class Form2Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-img",
      displayer: "Background Image",
      value: "https://static.tildacdn.com/tild6534-3036-4165-a632-363563666466/photo1432821596592e2c18b78144f",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CONTACT US",
    });
    this.addProp({
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
              value: "First&Last Name",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Is Required",
              value: true
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required"
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
          ]
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
              value: "E-mail",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Is Required",
              value: true
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required"
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
          ]
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
              value: "Phone",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Is Required",
              value: true
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required"
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
          ]
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
              value: "Message",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Is Required",
              value: true
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required"
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
          ]
        },
      ]
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Email",
    });

  }

  getName(): string {
    return "Form 2";
  }

  render() {

    const inputs = this.getPropValue("inputs")
    const initialValue = getInitialValue();


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
    function getInputName(indexOfInput: number): string {
      const name = `input_${indexOfInput}`;
      return name;
    }
    function getInitialValue() {
      let value: any = {};
      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        value[getInputName(indexOfInput)] = ""
      });


      return value;
    }
    const getSchema = () => {
      let schema = Yup.object().shape({});

      const inputs = this.getPropValue("inputs");

      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        const isRequired = input.getPropValue("is_required");
        const isEmail = getInputType(input.getPropValue("type")) == "email";

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
          [getInputName(indexOfInput)]: fieldSchema,
        });
      });

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

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

          <div className={this.decorateCSS("input-items")}>
            <div className={this.decorateCSS("input-item")}>
              <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
              <Formik
                initialValues={initialValue}
                validationSchema={getSchema()}
                onSubmit={(data, { resetForm }) => {
                  const formData = getFormDataWithConvertedKeys(data)
                  this.insertForm("Contact Me", formData);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    {this.getPropValue("inputs").map((input: any, index: number) =>

                      <>
                        <div className={this.decorateCSS("input-container")}>
                          {input.getPropValue("type") == "Text Area" ?
                            <textarea
                              value={values[getInputName(index)]}
                              placeholder=" "
                              className={`${this.decorateCSS("input")} ${this.decorateCSS("textarea")}`} rows={12} onChange={handleChange}
                            ></textarea> :

                            <><input
                              placeholder=" "
                              type={getInputType(input.getPropValue("type"))}
                              onChange={handleChange}
                              value={values[getInputName(index)]}
                              name={getInputName(index)}
                              className={this.decorateCSS("input")} /></>

                          }
                          <span className={this.decorateCSS("placeholder")}>{input.getPropValue("placeholder")} </span>
                          <ErrorMessage
                            className={this.decorateCSS("error-message")}
                            name={getInputName(index)}
                            component={"span"}
                          />
                        </div>



                      </>

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

            <div className={this.decorateCSS("background-image")}>
              <img
                src={this.getPropValue("background-img")}
                alt="backgroundPhoto"
                className={this.decorateCSS("img")}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Form2Page;
