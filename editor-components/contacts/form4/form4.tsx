import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ReCAPTCHA from "react-google-recaptcha";

class Form4 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c55dbd2970002c6290b4?alt=media&timestamp=1719564433797",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CONTACT ME",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Feel free to get in touch with me via the form below or by emailing me directly at",
    });

    this.addProp({
      type: "string",
      key: "mail",
      displayer: "Mail",
      value: "hello@yelizsarioglu.com",
    });

    this.addProp({
      type: "string",
      key: "location",
      displayer: "Location Title",
      value: "CURRENTLY",
    });

    this.addProp({
      type: "string",
      key: "locationDetails",
      displayer: "Location Details",
      value: "Dubai, UNITED ARAB EMIRATES. Able to travel for commissions and projects",
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
                      value: "First name",
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
                      value: "Last name",
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
                      value: "example@gmail.com",
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
                      value: "E-mail",
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
                      value: "ex: Suggestion",
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
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "",
                    },
                  ],
                },
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
                      value: "Write your message...",
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
                      value: "Text Area",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Send Email", null, null, null, "Primary"));
    this.setComponentState("recaptchaResponse", false);
  }

  static getName(): string {
    return "Form 4";
  }

  render() {
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const isContactVisible = titleExist || descriptionExist;

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const locationExist = this.castToString(this.getPropValue("location"));
    const locationDetailsExist = this.castToString(this.getPropValue("locationDetails"));
    const isAddressVisible = locationExist || locationDetailsExist;

    const inputItems = this.getPropValue("input_items")!;
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
      let nameParts: string[] = [];

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          let adjustedKey = key.startsWith("_") ? key.slice(1) : key;
          const parts = adjustedKey.split("_");

          let newKey = "";
          for (let i = 1; i < parts.length - 1; i++) {
            newKey += (i > 1 ? "_" : "") + parts[i];
          }

          if (newKey === "name") {
            nameParts.push(obj[key]);
          } else {
            newObj[newKey] = obj[key];
          }
        }
      }

      if (nameParts.length > 0) {
        newObj["name"] = nameParts.join(" ");
      }

      return newObj;
    }

    function isRequiredInput(inputItem: any): boolean {
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("is_required"));
    }

    const buttonText = button.text;
    const buttonTextExist = this.castToString(buttonText);

    const formContainerExist = inputItems.length > 0 || buttonTextExist;

    const handleRecaptchaChange = (value: string | null) => {
      this.setComponentState("recaptchaResponse", value); 
      this.setComponentState("recaptchaRef", React.createRef());
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("top-container")}>
            {isContactVisible && (
              <div className={this.decorateCSS("contact")}>
                {titleExist && <Base.P className={this.decorateCSS("title")}> {this.getPropValue("title")} </Base.P>}
                {descriptionExist && (
                  <Base.P className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                    {this.getPropValue("mail")}
                  </Base.P>
                )}
              </div>
            )}
            {isAddressVisible && (
              <div className={this.decorateCSS("address")}>
                {locationExist && <Base.P className={this.decorateCSS("title-2")}>{this.getPropValue("location")}</Base.P>}
                {locationDetailsExist && <Base.P className={this.decorateCSS("description-2")}>{this.getPropValue("locationDetails")}</Base.P>}
              </div>
            )}
          </div>
          <div className={this.decorateCSS("lower-container")}>
            {formContainerExist && (
              <div className={this.decorateCSS("form-container")}>
                <Formik
                  initialValues={getInitialValue()}
                  validationSchema={getSchema()}
                  onSubmit={(data, { resetForm }) => {
                    const recaptchaResponse = this.getComponentState("recaptchaResponse");
                  
                    if (!recaptchaResponse) {
                      alert("reCAPTCHA doğrulaması yapılmadı.");
                      return;
                    }
                  
                    const formData = getFormDataWithConvertedKeys(data);
                  
                    this.insertForm("Contact Us", formData, recaptchaResponse)
                      .then(response => {
                        console.log(response);
                        resetForm();
                      })
                      .catch(error => {
                        console.error(error);
                      });
                  
                    resetForm();
                    this.setComponentState("recaptchaResponse", null);
                    if (this.getComponentState("recaptchaRef").current) {
                      this.getComponentState("recaptchaRef").current.reset();
                    }
                  }}
                >
                  {({ handleChange, values }) => (
                    <Form className={this.decorateCSS("form")}>
                      {inputItems.map((inputItem: any, inputItemIndex: number) => (
                        <div className={this.decorateCSS("input-container")}>
                          <span className={this.decorateCSS("label")}>
                            {inputItem.getPropValue("label", {
                              suffix: {
                                label: isRequiredInput(inputItem) && "*",
                                className: this.decorateCSS("require-star"),
                              },
                            })}
                          </span>
                          <div className={this.decorateCSS("inputs")}>
                            {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) => (
                              <div className={this.decorateCSS("input-box")}>
                                {inputObj.getPropValue("type") === "Text Area" ? (
                                  <textarea
                                    value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                    className={this.decorateCSS("input")}
                                    placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                                    rows={12}
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
                                <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)} component={"span"} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Base.Button buttonType={button.type} className={this.decorateCSS("submit-button")} type="submit">
                        {button.text}
                      </Base.Button>
                      <ReCAPTCHA
                        theme="dark"
                        size="normal"
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        ref={this.getComponentState("recaptchaRef")}
                        />
                    </Form>
                  )}
                </Formik>
              </div>
            )}
            {image && (
              <div className={`${this.decorateCSS("image-container")} ${!formContainerExist && this.decorateCSS("image-container-no-form")}`}>
                <img className={this.decorateCSS("image")} src={image} alt="" />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form4;
