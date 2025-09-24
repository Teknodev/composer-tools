import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form6.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Form6 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c6a2bd2970002c62912f?alt=media&timestamp=1719564433797",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Let's Get In Touch.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Or just react out manually to hello@example.com",
    });

    this.addProp({
      type: "array",
      key: "inputs",
      displayer: "Form Items",
      value: [
        {
          type: "object",
          key: "form-item",
          displayer: "Form Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "First Name",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUser",
            },
            {
              type: "select",
              key: "type",
              displayer: "Input Type",
              value: "Text",
              additionalParams: {
                selectItems: ["Text", "Text Area", "Phone", "Email"],
              },
            },
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Enter your first name...",
            },
            {
              type: "boolean",
              key: "isFull",
              displayer: "Is Full Width?",
              value: false,
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
          ],
        },
        {
          type: "object",
          key: "form-item",
          displayer: "Form Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Last Name",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUser",
            },
            {
              type: "select",
              key: "type",
              displayer: "Input Type",
              value: "Text",
              additionalParams: {
                selectItems: ["Text", "Text Area", "Phone", "Email"],
              },
            },
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Enter your last name...",
            },
            {
              type: "boolean",
              key: "isFull",
              displayer: "Is Full Width?",
              value: false,
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
          ],
        },
        {
          type: "object",
          key: "form-item",
          displayer: "Form Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Email Address",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaEnvelope",
            },
            {
              type: "select",
              key: "type",
              displayer: "Input Type",
              value: "Email",
              additionalParams: {
                selectItems: ["Text", "Text Area", "Phone", "Email"],
              },
            },
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Enter your email address...",
            },
            {
              type: "boolean",
              key: "isFull",
              displayer: "Is Full Width?",
              value: true,
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
          ],
        },
        {
          type: "object",
          key: "form-item",
          displayer: "Form Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Phone Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPhoneAlt",
            },
            {
              type: "select",
              key: "type",
              displayer: "Input Type",
              value: "Phone",
              additionalParams: {
                selectItems: ["Text", "Text Area", "Phone", "Email"],
              },
            },
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "+44 (000)000-0000",
            },
            {
              type: "boolean",
              key: "isFull",
              displayer: "Is Full Width?",
              value: true,
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
          ],
        },
        {
          type: "object",
          key: "form-item",
          displayer: "Form Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Message",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaMail",
            },
            {
              type: "select",
              key: "type",
              displayer: "Input Type",
              value: "Text Area",
              additionalParams: {
                selectItems: ["Text", "Text Area", "Phone", "Email"],
              },
            },
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Enter your message here...",
            },
            {
              type: "boolean",
              key: "isFull",
              displayer: "Is Full Width?",
              value: true,
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
          ],
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Submit Form", null, null, null, "Primary"));
  }

  static getName(): string {
    return "Form 6";
  }

  getFormDataWithConvertedKeys(obj: any) {
    const newObj: any = {};
    const inputs = this.getPropValue("inputs");

    inputs.forEach((input: any, index: number) => {
      const label = input.value.find((prop: any) => prop.key === "label")?.value;
      const key = label.replace(/\s+/g, "_").toLowerCase();
      const formKey = `input_${index}`;
      newObj[key] = obj[formKey];
    });

    return newObj;
  }

  render() {
    const inputs = this.getPropValue("inputs");
    const imageExist = !!this.getPropValue("image");

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const buttonText = button.text;
    const buttonTextExist = this.castToString(buttonText);

    const rightItemsExist = titleExist || descriptionExist || buttonTextExist || inputs.length > 0;

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

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {imageExist && (
              <div
                className={`${this.decorateCSS("image-container")} 
              ${!rightItemsExist && this.decorateCSS("image-full-width")}`}
              >
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="contact" />
              </div>
            )}
            {rightItemsExist && (
              <div
                className={`
                ${this.decorateCSS("form-container")}
                ${!imageExist && this.decorateCSS("without-image")}
              `}
              >
                {(titleExist || descriptionExist) && (
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  </Base.VerticalContent>
                )}
                {(inputs.length > 0 || buttonTextExist) && (
                  <Formik
                    initialValues={getInitialValue()}
                    validationSchema={getSchema()}
                    onSubmit={(data, { resetForm }) => {
                      const formData = this.getFormDataWithConvertedKeys(data);
                      this.insertForm("Form 6 - ContactUsForm", formData);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {this.castToObject<any>("inputs").map((input: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className={`
                              ${this.decorateCSS("form-item")}
                              ${input.getPropValue("isFull") ? this.decorateCSS("full") : ""}`}
                            >
                              {this.castToString(input.getPropValue("label")) && <label className={this.decorateCSS("form-item-label")}>{input.getPropValue("label")}</label>}

                              <div className={this.decorateCSS("input-container")}>
                                {input.getPropValue("type") == "Text Area" ? (
                                  <textarea
                                    id={getInputName(index)}
                                    name={getInputName(index)}
                                    value={values[getInputName(index)]}
                                    placeholder={this.castToString(input.getPropValue("placeholder"))}
                                    className={this.decorateCSS("input-textarea")}
                                    rows={6}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  <>
                                    <Base.Icon name={input.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("input-icon") }} />

                                    <input
                                      id={getInputName(index)}
                                      name={getInputName(index)}
                                      placeholder={this.castToString(input.getPropValue("placeholder"))}
                                      type={getInputType(input.getPropValue("type"))}
                                      onChange={handleChange}
                                      value={values[getInputName(index)]}
                                      className={this.decorateCSS("input")}
                                    />
                                  </>
                                )}
                                <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index)} component={"span"} />
                              </div>
                            </div>
                          );
                        })}
                        {buttonTextExist && (
                          <div className={this.decorateCSS("button-div")}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("submit-button")} type="submit">
                              {buttonText}
                            </Base.Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form6;
