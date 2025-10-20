import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form2.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Form2 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "background-img",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67614bdb0655f8002ca7aef6?alt=media"
      },
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Get in touch",
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
              key: "label",
              displayer: "Label",
              value: "Full Name",
            },
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
              key: "label",
              displayer: "Label",
              value: "E-mail",
            },
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
              value: "E-mail",
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
              key: "label",
              displayer: "Label",
              value: "Phone",
            },
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
              value: "Number",
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
              key: "label",
              displayer: "Label",
              value: "Message",
            },
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

    this.addProp(INPUTS.BUTTON("button", "Button", "Contact Us", null, null, null, "Primary"));
  }

  static getName(): string {
    return "Form 2";
  }

  render() {
    const inputs = this.getPropValue("inputs");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(this.getPropValue("title"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const buttonText = button.text;
    const buttonTextExist = this.castToString(button.text);

    const backgroundImage = this.getPropValue("background-img");
    const imageExist = backgroundImage?.url;
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

    function toObjectKey(str: string) {
      if (/^\d/.test(str)) {
        str = "_" + str;
      }
      str = str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      return str;
    }

    const getInputName = (indexOfLabel: number, inputLabel: any): string => {
      const labelText = inputLabel && this.castToString(inputLabel);

      return toObjectKey(`${indexOfLabel} ${labelText}`);
    };

    function getInitialValue() {
      let value: any = {};
      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        const label = input.getPropValue("label");
        value[getInputName(indexOfInput, label)] = "";
      });

      return value;
    }

    const initialValue = getInitialValue();

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
          [getInputName(indexOfInput, input.getPropValue("label"))]: fieldSchema,
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

          if (parts.length === 2) {
            newObj[parts[1]] = obj[key];
          } else if (parts.length > 2) {
            let newKey = parts.slice(1).join("_");
            newObj[newKey] = obj[key];
          } else {
            newObj[adjustedKey] = obj[key];
          }
        }
      }
      return newObj;
    }

    return (
      <Base.Container style={{ backgroundImage: `url(${backgroundImage?.url})` }} className={this.decorateCSS("container")}>
        {overlay && imageExist && <div className={this.decorateCSS("overlay")}></div>}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(inputs.length > 0 || (titleExist || subtitleExist && buttonTextExist)) && (
            <div className={this.decorateCSS("input-items")}>
              <div className={`${this.decorateCSS("input-item")} ${!imageExist && this.decorateCSS("input-item-no-image")}`}>
                {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${imageExist && this.decorateCSS("subtitle-with-image")}`}>{subtitle}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("title-with-image")}`}>{title}</Base.SectionTitle>}
                {(inputs.length > 0 || buttonTextExist) && (
                  <Formik
                    initialValues={initialValue}
                    validationSchema={getSchema()}
                    onSubmit={(data, { resetForm }) => {
                      const formData = getFormDataWithConvertedKeys(data);
                      this.insertForm("Contact Us", formData);
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
                                  id={getInputName(index, input.getPropValue("label"))}
                                  value={values[getInputName(index, input.getPropValue("label"))]}
                                  placeholder=" "
                                  className={`${this.decorateCSS("input")} ${!imageExist && this.decorateCSS("input-no-image")} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                  name={getInputName(index, input.getPropValue("label"))}
                                />
                              ) : (
                                <input
                                  id={getInputName(index, input.getPropValue("label"))}
                                  placeholder=" "
                                  type={getInputType(input.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(index, input.getPropValue("label"))]}
                                  name={getInputName(index, input.getPropValue("label"))}
                                  className={`${this.decorateCSS("input")} ${!imageExist && this.decorateCSS("input-no-image")} `}
                                />
                              )}
                              {this.castToString(input.getPropValue("placeholder")) && <Base.P className={`${this.decorateCSS("placeholder")} ${!imageExist && this.decorateCSS("placeholder-no-image")}`}>{input.getPropValue("placeholder")}</Base.P>}
                              <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index, input.getPropValue("label"))} component={"span"} />
                            </div>
                          </>
                        ))}
                        {buttonTextExist && (
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")} type="submit">
                            <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
                          </Base.Button>
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

export default Form2;
