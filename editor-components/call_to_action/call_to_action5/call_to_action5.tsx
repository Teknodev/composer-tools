import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import styles from "./call_to_action5.module.scss";

type InputItem = {
  inputs: Input[];
}

type Input = {
  placeholder: JSX.Element;
  is_required: boolean;
  required_error_message: JSX.Element;
  type: string;
  type_error_message: JSX.Element;
}

class CallToAction5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "NEWSLETTER SIGNUP",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "JOIN FOR NEWS UPDATES.",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "SUBSCRIBE NOW",
    });

    this.addProp({
      type: "array",
      key: "input_items",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "input_item_1",
          displayer: "Input Item 1",
          value: [
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "string",
                  displayer: "Placeholder",
                  key: "placeholder",
                  value: "Email Address",
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
                  value: "The email field is required.",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "E-mail",
                  additionalParams: {
                    selectItems: ["E-mail", "Number"],
                  },
                },
                {
                  type: "string",
                  key: "type_error_message",
                  displayer: "Type error message",
                  value: "Please enter a valid email address.",
                },
              ],
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Call To Action 5";
  }
  render() {
    function toObjectKey(str: string) {
      if (/^\d/.test(str)) {
        str = "_" + str;
      }
      str = str.replace(/[^a-zA-Z0-9]/g, "_");
      return str;
    }
    function getInputName(indexOfLabel: number, inputItemIndex: number, indexOfInput: number) {
      const name = toObjectKey(`${indexOfLabel}_${inputItemIndex}_${indexOfInput}`);
      return toObjectKey(name);
    }
    function getInitialValue() {
      let value: any = {};
      inputItems.forEach((inputItem: any, sectionIndex: number) => {
        inputItem.getPropValue("inputs").forEach((_: any, indexOfInput: number) => {
          const key = getInputName(sectionIndex, sectionIndex, indexOfInput);
          value[key] = "";
        });
      });
      return value;
    }
    function getInputType(type: string): string {
      switch (type) {
        case "E-mail":
          return "email";
        case "Number":
          return "number";
        default:
          return "text";
      }
    }
    const getSchema = () => {
      let schema = Yup.object().shape({});
      const inputItems = this.castToObject<InputItem[]>("input_items")!;
      inputItems.forEach((inputItem: InputItem, sectionIndex: number) => {
        inputItem.inputs.forEach((input: Input, indexOfInput: number) => {
          const isRequired = input.is_required;
          const inputType = getInputType(input.type);
          const isEmail = inputType === "email";
          let fieldSchema = Yup.string() as any;
          const requiredErrorMessage = inputType === "number"
            ? "The phone number field is required."
            : input.required_error_message;
          const typeErrorMessage = inputType === "number"
            ? "Please enter a valid phone number."
            : input.type_error_message;
          if (isRequired) {
            fieldSchema = fieldSchema.required(requiredErrorMessage);
          } else {
            fieldSchema = fieldSchema.nullable();
          }
          if (isEmail) {
            fieldSchema = fieldSchema.email(typeErrorMessage);
          } else if (inputType === "number") {
            fieldSchema = fieldSchema
              .min(6, "Phone number must be at least 6 characters")
              .max(20, "Phone number must be at most 20 characters");
          }
          schema = schema.shape({
            [getInputName(sectionIndex, sectionIndex, indexOfInput)]: fieldSchema,
          });
        });
      });
      return schema;
    };
    const inputItems = this.castToObject<any>("input_items")!;
    const initialValues = getInitialValue();

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });
    const buttonTextExist = this.getPropValue("buttonText", { as_string: true });

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) &&
            <div className={this.decorateCSS("top")}>
              {titleExist && (
                <div className={this.decorateCSS("action")}>
                  <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                </div>
              )}
              {subtitleExist && (
                <div className={this.decorateCSS("action2")}>
                  <p className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</p>
                </div>
              )}
            </div>
          }
          <div className={this.decorateCSS("bottom")}>
            <Formik
              initialValues={initialValues}
              validationSchema={getSchema()}
              onSubmit={(data, { resetForm }) => {
                this.insertForm("Contact Us", data);
                resetForm();
              }}
            >
              {({ handleChange, values }) => (
                <Form className={this.decorateCSS("form")}>
                  <h3 className={this.decorateCSS("email")}>
                    email
                    {/* {this.getPropValue("email")} */}
                  </h3>
                  {inputItems.map((inputItem: InputItem, inputItemIndex: number) => (
                    <div key={inputItemIndex} className={this.decorateCSS("input-container")}>
                      <div className={this.decorateCSS("input-text")}>
                        {inputItem.inputs.map((inputObj: Input, inputIndex: number) => (
                          <React.Fragment key={inputIndex}>
                            {getInputType(inputObj.type) === "number" && (
                              <div className={this.decorateCSS("prefix")}>+</div>
                            )}
                            <input
                              placeholder={
                                getInputType(inputObj.type) === "number"
                                  ? "Enter your phone number"
                                  : this.castToString(inputObj.placeholder)
                              }
                              type={inputObj.type}
                              name={getInputName(inputItemIndex, inputItemIndex, inputIndex)}
                              onChange={handleChange}
                              className={this.decorateCSS("input")}
                            />
                            <ErrorMessage
                              className={this.decorateCSS("error-message")}
                              name={getInputName(inputItemIndex, inputItemIndex, inputIndex)}
                              component={"span"}
                            />
                          </React.Fragment>
                        ))}
                      </div>
                      {buttonTextExist &&
                        <button
                          className={this.decorateCSS("submit-button")}
                          type="submit"
                        >
                          {this.getPropValue("buttonText")}
                        </button>
                      }
                    </div>
                  ))}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
export default CallToAction5Page;