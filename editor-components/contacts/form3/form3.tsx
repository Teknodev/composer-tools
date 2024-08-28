import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form3.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { Label } from "@mui/icons-material";

type Left = {
  contactName: string;
  contactIcon: string;
  image: JSX.Element
};

type Social = {
  url: string;
  icon: string;
};


class Form3Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "topSubtitle",
      displayer: "Top Subtitle",
      value: "Reach Out",
    });

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
          ]
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
          ]
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
          ]
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
          ]
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
      type: "string",
      key: "rightSubtitle",
      displayer: "Right Subtitle",
      value: "Work With Us",
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
                      value: "First name"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
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
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
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
                      value: "Last name"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
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
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
                },
              ]
            }
          ]
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
                      value: "example@gmail.com"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true
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
                      value: "E-mail",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type"
                    },
                  ]
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
                      value: "+111 11 111 111"
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: false
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Number",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: ""
                    },
                  ]
                },
              ]
            }
          ]
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
                      value: "Write your message..."
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: false
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
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: ""
                    },
                  ]
                },
              ]
            }
          ]
        }
      ]
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "button",
          displayer: "button",
          value: [
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "Contact Us"
            }

          ]
        }
      ]
    })
  }

  getName(): string {
    return "Form 3";
  }

  render() {
    const button = this.getPropValue("buttons");
    console.log("button value ", button);

    const topTitle = this.getPropValue("topTitle", { as_string: true });
    console.log("topTitle ", topTitle)
    const topSubtitle = this.getPropValue("topSubtitle", { as_string: true });
    const leftTitle = this.getPropValue("leftTitle", { as_string: true });
    const leftSubtitle = this.getPropValue("leftSubtitle", { as_string: true });

    const rightTitle = this.getPropValue("rightTitle", { as_string: true });
    const rightSubtitle = this.getPropValue("rightSubtitle", { as_string: true });

    const contactInfo = this.getPropValue("contactInfo");
    const contactIcon = this.getPropValue("contactIcon");

    const inputItems = this.getPropValue("input_items");
    console.log("inputItems ", inputItems)

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
          return "number"
        default:
          return "text"
      }
    }
    function getInputValue(indexOfLabel: number, inputLabel: string, indexOfInput: number): string {

      const name = toObjectKey(`${indexOfLabel} ${indexOfInput}`);
      return toObjectKey(name);

    }
    function getInputName(indexOfLabel: number, inputLabel: string, indexOfInput: number): string {
      const name = toObjectKey(`input_${indexOfLabel + indexOfInput}`);

      return toObjectKey(name);

    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.map((input: TypeUsableComponentProps, indexOfInput: number) => {
          const key = getInputValue(indexOfItem, input.getPropValue("label", { as_string: true }), indexOfInput);
          value[key] = "";
        })
      })
      return value;
    }

    function getSchema() {
      let schema = Yup.object().shape({});

      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs").map((input: any, indexOfInput: number) => {

          const key = getInputValue(indexOfItem, input.getPropValue("label", { as_string: true }), indexOfInput);


          const isRequired = input.getPropValue("is_required");
          const isEmail = getInputType(input.getPropValue("type")) == "email";

          let fieldSchema = Yup.string() as any;

          if (isRequired) {
            fieldSchema = fieldSchema.required(input.getPropValue("required_error_message"))
          } else {
            fieldSchema = fieldSchema.nullable();
          }

          if (isEmail) {
            fieldSchema = fieldSchema.email(input.getPropValue("type_error_message"))
          }

          schema = schema.shape({
            [key]: fieldSchema,
          });
        })
      })

      return schema;
    };

    function getFormData(obj: any) {
      const newObj: any = {};
      Object.values(obj).forEach((value, index) => {
        newObj["input_" + index] = value;
      })
      return newObj;
    }

    function isRequiredInput(inputItem: any): boolean {
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("is_required"))
    }

    const icons = this.castToObject<Social[]>("socials");
    const background = this.getPropValue("background");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(topSubtitle || topTitle) && (
            <div className={this.decorateCSS("top")}>
              {topSubtitle && (
                <h3 className={this.decorateCSS("topSubtitle")}> {this.getPropValue("topSubtitle")} </h3>)}
              {topTitle && (
                <h1 className={this.decorateCSS("topTitle")}> {this.getPropValue("topTitle")} </h1>)}
              {!topTitle && (
                <h1 className={this.decorateCSS("topTitle")}> {this.getPropValue("no-topTitle")} </h1>)}
            </div>)}
          <div className={this.decorateCSS("box")}>
            {(icons || background || leftSubtitle || leftTitle || contactInfo || contactIcon).length > 1 &&
              <div className={this.decorateCSS("left-container")}>
                {background && (
                  <img
                    className={this.decorateCSS("background")}
                    src={this.getPropValue("background")}
                  />)}
                <div className={this.decorateCSS("left")}>
                  <div className={this.decorateCSS("textSide")}>
                    <div className={this.decorateCSS("left-top")}>
                      {(leftTitle || leftSubtitle) && (
                        <div className={this.decorateCSS("title1")}>
                          {leftTitle && (
                            <h3 className={this.decorateCSS("leftTitle")}> {this.getPropValue("leftTitle")} </h3>)}
                          {leftSubtitle && (
                            <h1 className={this.decorateCSS("leftSubtitle")}>{this.getPropValue("leftSubtitle")}  </h1>)}
                        </div>)}
                      {(contactInfo || contactIcon) && (
                        <div className={this.decorateCSS("contacts")}>
                          {this.castToObject<Left[]>("contactInfo").map((contact: any, index: number) => (
                            <div className={this.decorateCSS("contact")}>
                              <ComposerIcon name={contact.contactIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              {(this.castToString(contact.contactName)) && (
                                <div className={this.decorateCSS("contactName")}> {contact.contactName} </div>)}
                            </div>
                          ))}
                        </div>)}

                    </div>
                    {
                      icons.length > 0 &&
                      <div className={this.decorateCSS("socials")}>
                        {icons.map((social: Social, index: number) => {

                          if (social.icon)
                            return (
                              <div className={this.decorateCSS("icon-container")}>
                                <ComposerLink key={index} path={social.url}>
                                  <ComposerIcon
                                    name={social.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon")
                                    }} />
                                </ComposerLink>
                              </div>
                            )
                        })}
                      </div>
                    }
                  </div>


                </div>
              </div>}
            {((rightSubtitle || rightTitle) || button || inputItems).length > 0 &&
              <div className={this.decorateCSS("right-container")}>
                {(rightTitle || rightSubtitle) && (
                  <div className={this.decorateCSS("title2")} >
                    {rightTitle && (
                      <h1 className={this.decorateCSS("rightTitle")}> {this.getPropValue("rightTitle")} </h1>)}
                    {rightSubtitle && (
                      <h3 className={this.decorateCSS("rightSubtitle")}> {this.getPropValue("rightSubtitle")} </h3>)}
                    {!rightTitle && (
                      <h3 className={this.decorateCSS("rightTitle")}> {this.getPropValue("no-rightTitle")} </h3>)}
                  </div>)}

                {(button || inputItems).length > 0 &&
                  <div className={this.decorateCSS("form-container")} >
                    <Formik
                      initialValues={getInitialValue()}
                      validationSchema={getSchema()}
                      onSubmit={(data, { resetForm }) => {
                        const formData = getFormData(data)
                        this.insertForm("Contact Us", formData);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values }) => (
                        <Form className={this.decorateCSS("form")}>
                          {inputItems &&
                            <div className={this.decorateCSS("inputSide")}>
                              {inputItems.map((inputItem: any, inputItemIndex: number) =>
                                <div className={this.decorateCSS("input-container")} key={inputItemIndex}>
                                  {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                                    inputObj.getPropValue("label", { as_string: true }) ?
                                      <div className={this.decorateCSS("input-box")} key={inputIndex}>
                                        <span className={this.decorateCSS("label")}>
                                          {inputObj.getPropValue("label")}
                                          <p className={this.decorateCSS("require-star")}>
                                            {inputObj.getPropValue("is_required") && "*"}
                                          </p>
                                        </span>
                                        {inputObj.getPropValue("type") == "Text Area" ? (
                                          <textarea
                                            value={values[getInputName(inputItemIndex, inputObj.getPropValue("label", { as_string: true }), inputIndex)]}
                                            className={this.decorateCSS("input")}
                                            placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                            rows={3}
                                            onChange={handleChange}
                                            name={getInputValue(inputItemIndex, inputObj.getPropValue("label", { as_string: true }), inputIndex)}
                                          ></textarea>
                                        ) : (
                                          <input
                                            placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                            type={getInputType(inputObj.getPropValue("type"))}
                                            onChange={handleChange}
                                            value={values[getInputName(inputItemIndex, inputObj.getPropValue("label", { as_string: true }), inputIndex)]}
                                            name={getInputValue(inputItemIndex, inputObj.getPropValue("label", { as_string: true }), inputIndex)}
                                            className={this.decorateCSS("input")}
                                          />
                                        )}
                                        <ErrorMessage
                                          className={this.decorateCSS("error-message")}
                                          name={getInputValue(inputItemIndex, inputObj.getPropValue("label", { as_string: true }), inputIndex)}
                                          component={"span"}
                                        />
                                      </div> : null
                                  )}
                                </div>

                              )}</div>}

                        </Form>
                      )}
                    </Formik>
                  </div>}
                <div className={this.decorateCSS("form-button")}>
                  {button.length > 0 && (
                    button.map((buttonText: any, buttonIndex: number) => {
                      console.log("buttontext ", buttonText.getPropValue("button_text", { as_string: true }));
                      return (
                        <div className={this.decorateCSS("buttonSide")}>
                          <button
                            className={this.decorateCSS("submit-button")}
                            type="submit"
                          >
                            {buttonText.getPropValue("button_text", { as_string: true })}
                          </button>
                        </div>
                      )

                    })
                  )
                  }
                </div>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Form3Page;
