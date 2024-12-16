import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form2.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

export type Button = {
  buttonText?: string;
};

class Form2Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-img",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67602f840655f8002ca77765?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Contact Us",
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
              value: "Full Name",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Is Required",
              value: true,
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required",
            },
            {
              type: "string",
              key: "required_error_message",
              displayer: "Required error message",
              value: "*Required",
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
          ],
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
              value: true,
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required",
            },
            {
              type: "string",
              key: "required_error_message",
              displayer: "Required error message",
              value: "*Required",
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
          ],
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
              value: true,
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required",
            },
            {
              type: "string",
              key: "required_error_message",
              displayer: "Required error message",
              value: "*Required",
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
          ],
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
              value: true,
            },
            {
              type: "string",
              key: "type_error_message",
              displayer: "Type Error Message",
              value: "Required",
            },
            {
              type: "string",
              key: "required_error_message",
              displayer: "Required error message",
              value: "*Required",
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
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Contact Us",
    });
  }

  getName(): string {
    return "Form 2";
  }

  render() {
    const inputs = this.getPropValue("inputs");
    const initialValue = getInitialValue();
    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const buttonText = this.getPropValue("buttonText");
    const buttonTextExist = !!this.getPropValue("buttonText", { as_string: true });

    const imageExist = this.getPropValue("background-img");
    const overlay = this.getPropValue("overlay");
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
    function getInputName(indexOfInput: number): string {
      const name = `input_${indexOfInput}`;
      return name;
    }
    function getInitialValue() {
      let value: any = {};
      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        value[getInputName(indexOfInput)] = "";
      });

      return value;
    }
    const getSchema = () => {
      let schema = Yup.object().shape({});

      const inputs = this.getPropValue("inputs");

      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        if (!input["getPropValue"]) return;
        const isRequired = input.getPropValue("is_required");
        const isEmail = getInputType(input.getPropValue("type")) == "email";

        let fieldSchema: Yup.StringSchema<string | null | undefined> = Yup.string();

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

    return (
      <Base.Container style={{ backgroundImage: `url(${this.getPropValue("background-img")})` }} className={this.decorateCSS("container")}>
        {overlay && imageExist && <div className={this.decorateCSS("overlay")}></div>}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(inputs.length > 0 || (titleExist && buttonTextExist)) && (
            <div className={this.decorateCSS("input-items")}>
              <div className={imageExist ? this.decorateCSS("input-item") : this.decorateCSS("input-item-no-image")}>
                {titleExist && <Base.SectionTitle className={imageExist ? this.decorateCSS("title") : ""}>{title}</Base.SectionTitle>}
                {(inputs.length > 0 || buttonTextExist) && (
                  <Formik
                    initialValues={initialValue}
                    validationSchema={getSchema()}
                    onSubmit={(data, { resetForm }) => {
                      const formData = getFormDataWithConvertedKeys(data);
                      this.insertForm("Contact Me", formData);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {this.getPropValue("inputs").map((input: any, index: number) => (
                          <>
                            <div className={this.decorateCSS("input-container")}>
                              {input.getPropValue("type") == "Text Area" ? (
                                <textarea
                                  id={getInputName(index)}
                                  value={values[getInputName(index)]}
                                  placeholder=" "
                                  className={`${imageExist ? this.decorateCSS("input") : this.decorateCSS("input-no-image")} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                />
                              ) : (
                                <input
                                  id={getInputName(index)}
                                  placeholder=" "
                                  type={getInputType(input.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(index)]}
                                  name={getInputName(index)}
                                  className={imageExist ? this.decorateCSS("input") : this.decorateCSS("input-no-image")}
                                />
                              )}
                              {input.getPropValue("placeholder", { as_string: true }) && <span className={imageExist ? this.decorateCSS("placeholder") : this.decorateCSS("placeholder-no-image")}>{input.getPropValue("placeholder")}</span>}
                              <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index)} component={"span"} />
                            </div>
                          </>
                        ))}
                        {buttonTextExist && (
                          <div className={this.decorateCSS("button-div")}>
                            <Base.Button className={this.decorateCSS("submit-button")} type="submit">
                              {buttonText}
                            </Base.Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form2Page;
