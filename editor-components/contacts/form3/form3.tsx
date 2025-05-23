import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form3.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Left = {
  contactName: string;
  contactIcon: string;
  image: React.JSX.Element;
};

type Social = {
  url: string;
  icon: string;
};

class Form3 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "topTitle",
      displayer: "Top Title",
      value: "Contact Us",
    });

    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb57653292c6002b23ff58?alt=media",
    });

    this.addProp({
      type: "string",
      key: "leftTitle",
      displayer: "Left Title",
      value: "Hey There,",
    });
    this.addProp({
      type: "string",
      key: "leftSubtitle",
      displayer: "Left Subtitle",
      value: "Let's Get In Touch",
    });
    this.addProp({
      type: "array",
      key: "contactInfo",
      displayer: "Contact Info",
      value: [
        {
          type: "object",
          key: "contact",
          displayer: "Contact",
          value: [
            {
              type: "string",
              key: "contactName",
              value: "Moldova, str. Gagarin 10",
              displayer: "Location Detail",
            },
            {
              type: "icon",
              key: "contactIcon",
              value: "FaLocationDot",
              displayer: "locationIcon",
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
              key: "contactName",
              value: "+373 68 324 028",
              displayer: "Number",
            },
            {
              type: "icon",
              key: "contactIcon",
              value: "FaPhoneAlt",
              displayer: "phoneIcon",
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
              key: "contactName",
              value: "test@test.com",
              displayer: "E-mail",
            },
            {
              type: "icon",
              key: "contactIcon",
              value: "IoIosMail",
              displayer: "mailIcon",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "BiLogoFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "SiGmail",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "FaLinkedinIn",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "rightTitle",
      displayer: "Right Title",
      value: "Contact Us",
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
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              additionalParams: {
                maxElementCount: 2,
              },
              value: [
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Label",
                      key: "label",
                      value: "First Name",
                    },
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
                      displayer: "Label",
                      key: "label",
                      value: "Last Name",
                    },
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
                      displayer: "Label",
                      key: "label",
                      value: "E-mail",
                    },
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
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Label",
                      key: "label",
                      value: "Phone",
                    },
                    {
                      type: "string",
                      displayer: "Placeholder",
                      key: "placeholder",
                      value: "+111 11 111 111",
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
                      value: "Number",
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
                      displayer: "Label",
                      key: "label",
                      value: "Message",
                    },
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
                      value: false,
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
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [INPUTS.BUTTON("button", "Button", "Contact Us", null, null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Form 3";
  }

  render() {
    const buttons = this.getPropValue("buttons");
    const topTitle = this.castToString(this.getPropValue("topTitle"));
    const leftTitle = this.castToString(this.getPropValue("leftTitle"));
    const leftSubtitle = this.castToString(this.getPropValue("leftSubtitle"));
    const rightTitle = this.castToString(this.getPropValue("rightTitle"));
    const contactInfo = this.getPropValue("contactInfo");
    const contactIcon = this.getPropValue("contactIcon");
    const inputItems = this.getPropValue("input_items");

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
      return `input_${indexOfLabel}_${labelText}_${indexOfInput}`;
    };

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.map((input: TypeUsableComponentProps, indexOfInput: number) => {
          const key = getInputName(indexOfItem, input.getPropValue("label"), indexOfInput);
          value[key] = "";
        });
      });
      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").map((input: any, indexOfInput: number) => {
          const key = getInputName(indexOfItem, input.getPropValue("label"), indexOfInput);

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

    const icons = this.castToObject<Social[]>("socials");
    const background = this.getPropValue("background");

    const leftItemsExist = icons.length > 0 || background || leftSubtitle || leftTitle || contactInfo.length > 0 || contactIcon;
    const rightItemsExist = rightTitle || buttons.length > 0 || inputItems.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {topTitle && (
            <Base.VerticalContent>
              <Base.SectionTitle className={this.decorateCSS("topTitle")}> {this.getPropValue("topTitle")} </Base.SectionTitle>
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("box")}>
            {leftItemsExist && (
              <div className={this.decorateCSS("left-container")}>
                {background && <img className={`${this.decorateCSS("background")} ${!rightItemsExist && this.decorateCSS("background-full")}`} src={this.getPropValue("background")} alt="" />}
                <div className={this.decorateCSS("left")}>
                  <div className={`${this.decorateCSS("textSide")} ${!rightItemsExist && this.decorateCSS("textSide-full")}`}>
                    <div className={this.decorateCSS("left-top")}>
                      {(leftTitle || leftSubtitle) && (
                        <div className={this.decorateCSS("title1")}>
                          {leftTitle && <Base.P className={this.decorateCSS("leftTitle")}> {this.getPropValue("leftTitle")} </Base.P>}
                          {leftSubtitle && <Base.P className={this.decorateCSS("leftSubtitle")}>{this.getPropValue("leftSubtitle")} </Base.P>}
                        </div>
                      )}
                      {(contactInfo || contactIcon) && (
                        <div className={this.decorateCSS("contacts")}>
                          {this.castToObject<Left[]>("contactInfo").map((contact: any, index: number) => (
                            <div className={this.decorateCSS("contact")}>
                              <Base.Icon name={contact.contactIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              {this.castToString(contact.contactName) && <div className={this.decorateCSS("contactName")}> {contact.contactName} </div>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {icons.length > 0 && (
                      <div className={`${this.decorateCSS("socials")} ${!rightItemsExist && this.decorateCSS("socials-full")}`}>
                        {icons.map((social: Social, index: number) => {
                          if (!social.icon) return null;

                          return (
                            <div className={`${this.decorateCSS("icon-container")} ${!background && this.decorateCSS("icon-container-no-image")}`}>
                              <ComposerLink key={index} path={social.url}>
                                <Base.Icon
                                  name={social.icon}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              </ComposerLink>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {rightItemsExist && (
              <div className={`${this.decorateCSS("right-container")} ${!leftItemsExist && this.decorateCSS("right-container-no-image")}`}>
                {rightTitle && <div className={this.decorateCSS("title2")}>{rightTitle && <Base.P className={this.decorateCSS("rightTitle")}> {this.getPropValue("rightTitle")} </Base.P>}</div>}
                {(buttons || inputItems).length > 0 && (
                  <div className={this.decorateCSS("form-container")}>
                    <Formik
                      initialValues={getInitialValue()}
                      validationSchema={getSchema()}
                      onSubmit={(data, { resetForm }) => {
                        this.insertForm("Contact Us", data);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values }) => (
                        <Form className={this.decorateCSS("form")}>
                          {inputItems && (
                            <div className={this.decorateCSS("inputSide")}>
                              {inputItems.map((inputItem: any, inputItemIndex: number) => (
                                <div className={this.decorateCSS("input-container")} key={inputItemIndex}>
                                  {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                                    inputObj.getPropValue("label", { as_string: true }) ? (
                                      <div className={this.decorateCSS("input-box")} key={inputIndex}>
                                        <span className={this.decorateCSS("label")}>
                                          {inputObj.getPropValue("label")}
                                          <Base.P className={this.decorateCSS("require-star")}>{inputObj.getPropValue("is_required") && "*"}</Base.P>
                                        </span>
                                        {inputObj.getPropValue("type") == "Text Area" ? (
                                          <textarea
                                            value={values[getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)]}
                                            className={`
                                              ${this.decorateCSS("input")}
                                              ${this.decorateCSS("textarea")}  
                                            `}
                                            placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                                            onChange={handleChange}
                                            rows={1}
                                            name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)}
                                          ></textarea>
                                        ) : (
                                          <input
                                            placeholder={this.castToString(inputObj.getPropValue("placeholder"))}
                                            type={getInputType(inputObj.getPropValue("type"))}
                                            onChange={handleChange}
                                            value={values[getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)]}
                                            name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)}
                                            className={this.decorateCSS("input")}
                                          />
                                        )}
                                        <ErrorMessage className={this.decorateCSS("error-message")} name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)} component={"span"} />
                                      </div>
                                    ) : null
                                  )}
                                </div>
                              ))}
                              <div className={this.decorateCSS("form-button")}>
                                {buttons.length > 0 &&
                                  buttons.map((buttonText: any, index: number) => {
                                    const buttonExist = this.castToString(buttonText.getPropValue("text"));
                                    return (
                                      buttonExist && (
                                        <div className={this.decorateCSS("buttonSide")} key={index}>
                                          <Base.Button buttonType={buttonText.getPropValue("type")} className={this.decorateCSS("submit-button")} type="submit">
                                            {buttonText.getPropValue("text")}
                                          </Base.Button>
                                        </div>
                                      )
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form3;
