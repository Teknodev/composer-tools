import * as React from "react";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form2.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

class Form2 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "background-img",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67614bdb0655f8002ca7aef6?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
              displayer: "Required Message",
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
              displayer: "Required Error Message",
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
              displayer: "Required Message",
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
              displayer: "Required Error Message",
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
              key: "placeholder",
              displayer: "Placeholder",
              value: "Phone",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Required Message",
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
              displayer: "Required Error Message",
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
              key: "placeholder",
              displayer: "Placeholder",
              value: "Message",
            },
            {
              type: "boolean",
              key: "is_required",
              displayer: "Required Message",
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
              displayer: "Required Error Message",
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
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const buttonText = button.text;
    const buttonTextExist = this.castToString(button.text);

    const background = this.castToObject<any>("background");
    const backgroundImage = background["background-img"];
    const imageExist = backgroundImage?.url;
    const overlay = background.overlay;

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

    const getInputName = (indexOfInput: number): string => {
      return toObjectKey(`${indexOfInput}`);
    };

    function getInitialValue() {
      let value: any = {};
      inputs.map((input: TypeUsableComponentProps, indexOfInput: number) => {
        value[getInputName(indexOfInput)] = "";
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

    const subtitleType = Base.getSectionSubTitleType()

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.Media value={backgroundImage} className={this.decorateCSS("background-media")} />
        {overlay && imageExist && <div className={this.decorateCSS("overlay")}></div>}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {((inputs.length > 0 || buttonTextExist) || (titleExist || subtitleExist || descriptionExist)) && (
            <div className={this.decorateCSS("input-items")}>
              <div className={`${this.decorateCSS("input-item")} ${!imageExist && this.decorateCSS("input-item-no-image")}`}>
                {(subtitleExist || titleExist || descriptionExist) && <Base.VerticalContent className={this.decorateCSS("header")}>
                  {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${imageExist && this.decorateCSS("subtitle-with-image")} ${subtitleType === "badge" && this.decorateCSS("subtitle-badge")}`}>{subtitle}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("title-with-image")}`}>{title}</Base.SectionTitle>}
                  {descriptionExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("description-with-image")}`}>{description}</Base.SectionDescription>}
                </Base.VerticalContent>}
                {(inputs.length > 0 || buttonTextExist) && (
                  <Formik
                    initialValues={initialValue}
                    validationSchema={getSchema}
                    onSubmit={(data, { resetForm }) => {
                      const formData = getFormDataWithConvertedKeys(data);
                      this.insertForm("Form 2 - ContactUsForm", formData);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {this.getPropValue("inputs").map((input: any, index: number) => (
                          <>
                            <div key={index} className={this.decorateCSS("input-container")}>
                              {input.getPropValue("type") == "Text Area" ? (
                                <textarea
                                  id={getInputName(index)}
                                  value={values[getInputName(index)]}
                                  placeholder=" "
                                  className={`${this.decorateCSS("input")} ${!imageExist && this.decorateCSS("input-no-image")} ${this.decorateCSS("textarea")}`}
                                  rows={12}
                                  onChange={handleChange}
                                  name={getInputName(index)}
                                />
                              ) : (
                                <input
                                  id={getInputName(index)}
                                  placeholder=" "
                                  type={getInputType(input.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(index)]}
                                  name={getInputName(index)}
                                  className={`${this.decorateCSS("input")} ${!imageExist && this.decorateCSS("input-no-image")} `}
                                />
                              )}
                              {this.castToString(input.getPropValue("placeholder")) && <Base.P className={`${this.decorateCSS("placeholder")} ${!imageExist && this.decorateCSS("placeholder-no-image")}`}>{input.getPropValue("placeholder")}</Base.P>}
                              <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(index)} component={"span"} />
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

