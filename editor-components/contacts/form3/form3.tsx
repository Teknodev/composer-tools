import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form3.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";

type Left = {
  contactName: string;
  contactIcon: string;
};

type Social = {
  social: { icon: string, url: string }[],
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
      value: "https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              value: "ImLocation2",
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
              value: "FaPhone",
              displayer: "phone Icon",
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
              value: "FiMail",
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
          key:"social",
          displayer:"Social",
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
          key:"social",
          displayer:"Social",
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
          key:"social",
          displayer:"Social",
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
          key:"social",
          displayer:"Social",
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
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Contact Us",
    });

  }

  getName(): string {
    return "Form 3";
  }

  render() {

    const topTitle = this.getPropValue("topTitle", { as_string: true });
    const leftTitle = this.getPropValue("leftTitle", { as_string: true });
    const leftSubtitle = this.getPropValue("leftSubtitle",  { as_string: true });

    const rightTitle = this.getPropValue("rightTitle", { as_string: true });
    const rightSubtitle = this.getPropValue("rightSubtitle",  { as_string: true });

    const contactInfo = this.getPropValue("contactInfo");

    const inputItems = this.getPropValue("input_items")!

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

    function getInputName(indexOfLabel: number, inputLabel: string, indexOfInput: number): string {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`)
      return toObjectKey(name);
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem.getPropValue("inputs")?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
          const key = getInputName(indexOfItem, inputItem.getPropValue("label"), indexOfInput);
          value[key] = "";
        })
      })
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

    function isRequiredInput(inputItem: any): boolean {
      return inputItem.getPropValue("inputs").some((input: any) => input.getPropValue("is_required"))
    }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("top")}>
            <h3 className={this.decorateCSS("topSubtitle")}> {this.getPropValue("topSubtitle")} </h3>
            <h1 className={this.decorateCSS("topTitle")}> {this.getPropValue("topTitle")} </h1>
          </div>
      <div className={this.decorateCSS("box")}>
        <div className={this.decorateCSS("left-container")}>
        
          <img
            className={this.decorateCSS("background")}
            src={this.getPropValue("background")}
          />  
          <div className={this.decorateCSS("left")}>
                <div className={this.decorateCSS("title1")}>
                  <h3 className={this.decorateCSS("leftTitle")}> {this.getPropValue("leftTitle")} </h3>
                  <h1 className={this.decorateCSS("leftSubtitle")}>{this.getPropValue("leftSubtitle")}  </h1>
                </div>

                <div className={this.decorateCSS("contacts")}>
                {this.castToObject<Left[]>("contactInfo").map((contact: any, index: number) => (
                <div className={this.decorateCSS("contact")}>  
                  <ComposerIcon name={contact.contactIcon} propsIcon={{ className: this.decorateCSS("icon") }} /> 
                  <div className={this.decorateCSS("contactName")}> {contact.contactName} </div>
                </div>
                ))}
                </div>

              <div className={this.decorateCSS("socials")}>
              {this.castToObject<Social[]>("socials").map((social: any, index: number) => (
                <div className={this.decorateCSS("icon-container")}>
               <ComposerLink key={index} path={social.url}>
                  <ComposerIcon
                    name={social.icon}
                    propsIcon={{
                      className: this.decorateCSS("icon")
                    }}/>
                </ComposerLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={this.decorateCSS("right-container")}>
            
          <div className={this.decorateCSS("title2")} >
            <h1 className={this.decorateCSS("rightTitle")}> {this.getPropValue("rightTitle")} </h1>
            <h3 className={this.decorateCSS("rightSubtitle")}> {this.getPropValue("rightSubtitle")} </h3>
          </div>
          
          <div className={this.decorateCSS("form-container")} >
            <Formik
              initialValues={getInitialValue()}
              validationSchema={getSchema()}
              onSubmit={(data, { resetForm }) => {
                const formData = getFormDataWithConvertedKeys(data)
                this.insertForm("Contact Us", formData);
                resetForm();
              }}
            >
              {({ handleChange, values }) => (
                <Form className={this.decorateCSS("form")}>
                  {inputItems.map((inputItem: any, inputItemIndex: number) =>
                    <div className={this.decorateCSS("input-container")} key={inputItemIndex}>
                      {inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) =>
                        <div className={this.decorateCSS("input-box")} key={inputIndex}>
                          <span className={this.decorateCSS("label")}>
                            {inputObj.getPropValue("label")}
                            <p className={this.decorateCSS("require-star")}>
                              {inputObj.getPropValue("is_required") && "*"}
                            </p>
                          </span>
                          {inputObj.getPropValue("type") == "Text Area" ? (
                            <textarea
                              value={values[getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)]}
                              className={this.decorateCSS("input")}
                              placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                              rows={3}
                              onChange={handleChange}
                              name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)}
                            ></textarea>
                          ) : (
                            <input
                              placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                              type={getInputType(inputObj.getPropValue("type"))}
                              onChange={handleChange}
                              value={values[getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)]}
                              name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)}
                              className={this.decorateCSS("input")}
                            />
                          )}
                          <ErrorMessage
                            className={this.decorateCSS("error-message")}
                            name={getInputName(inputItemIndex, inputObj.getPropValue("label"), inputIndex)}
                            component={"span"}
                          />
                        </div>
                      )}
                    </div>
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
         </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Form3Page;
