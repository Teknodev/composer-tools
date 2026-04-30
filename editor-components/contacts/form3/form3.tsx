import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form3.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ContactItem = {
  contactName: JSX.Element;
  contactIcon: { type: string; name?: string; url?: string };
};

type Social = {
  icon: { type: string; name?: string; url?: string };
  url: string;
};

class Form3 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundSettings",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "background",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb57653292c6002b23ff58?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
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
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "leftSection",
      displayer: "Left Section",
      value: [
        {
          type: "string",
          key: "leftSubtitle",
          displayer: "Left Subtitle",
          value: "Hey There,",
        },
        {
          type: "string",
          key: "leftTitle",
          displayer: "Left Title",
          value: "Let's Get In Touch",
        },
        {
          type: "string",
          key: "leftDescription",
          displayer: "Left Description",
          value: "",
        },
        {
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
                  displayer: "Text",
                },
                {
                  type: "media",
                  key: "contactIcon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaLocationDot",
                  },
                  displayer: "Icon",
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
                  displayer: "Text",
                },
                {
                  type: "media",
                  key: "contactIcon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaPhoneAlt",
                  },
                  displayer: "Icon",
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
                  displayer: "Text",
                },
                {
                  type: "media",
                  key: "contactIcon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "IoIosMail",
                  },
                  displayer: "Icon",
                },
              ],
            },
          ],
        },
        {
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
                  type: "media",
                  key: "icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "BiLogoFacebook",
                  },
                  displayer: "Icon",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Navigate To",
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
                  type: "media",
                  key: "icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "SiGmail",
                  },
                  displayer: "Icon",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Navigate To",
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
                  type: "media",
                  key: "icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaLinkedinIn",
                  },
                  displayer: "Icon",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Navigate To",
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
                  type: "media",
                  key: "icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaInstagram",
                  },
                  displayer: "Icon",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Navigate To",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "rightSection",
      displayer: "Right Section",
      value: [
        {
          type: "string",
          key: "rightSubtitle",
          displayer: "Right Subtitle",
          value: "Work With Us",
        },
        {
          type: "string",
          key: "rightTitle",
          displayer: "Right Title",
          value: "Contact Us",
        },
        {
          type: "string",
          key: "rightDescription",
          displayer: "Right Description",
          value: "",
        },
        INPUTS.BUTTON("button", "Button", "Contact Us", null, null, null, "Primary"),
        {
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
                          displayer: "Required Message",
                          value: true,
                        },
                        {
                          type: "string",
                          key: "required_error_message",
                          displayer: "Required Error Message",
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
                          displayer: "Type Error Message",
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
                          displayer: "Required Message",
                          value: true,
                        },
                        {
                          type: "string",
                          key: "required_error_message",
                          displayer: "Required Error Message",
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
                          displayer: "Type Error Message",
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
                          displayer: "Required Message",
                          value: true,
                        },
                        {
                          type: "string",
                          key: "required_error_message",
                          displayer: "Required Error Message",
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
                          displayer: "Type Error Message",
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
                          displayer: "Required Message",
                          value: false,
                        },
                        {
                          type: "string",
                          key: "required_error_message",
                          displayer: "Required Error Message",
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
                          displayer: "Type Error Message",
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
                          displayer: "Required Message",
                          value: false,
                        },
                        {
                          type: "string",
                          key: "required_error_message",
                          displayer: "Required Error Message",
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
                          displayer: "Type Error Message",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Form 3";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const btnText = this.castToString(btn.text);
      return btnText || !!btn.icon;
    });

    const backgroundSettings = this.castToObject<any>("backgroundSettings");
    const background = backgroundSettings.background;
    const backgroundImage = background?.url;
    const overlay = backgroundSettings.overlay;

    const leftSection = this.castToObject<any>("leftSection");
    const leftSubtitle = this.castToString(leftSection.leftSubtitle);
    const leftTitle = this.castToString(leftSection.leftTitle);
    const leftDescription = this.castToString(leftSection.leftDescription);
    const contactInfo: ContactItem[] = (leftSection.contactInfo || []).map((prop: any) => ({
      contactName: prop.getPropValue("contactName"),
      contactIcon: prop.getPropValue("contactIcon"),
    }));
    const socials: Social[] = (leftSection.socials || []).map((prop: any) => ({
      icon: prop.getPropValue("icon"),
      url: prop.getPropValue("url"),
    }));
    const rightSectionArray = this.getPropValue("rightSection");
    const rightSection = this.castToObject<any>("rightSection");
    const inputItems = rightSection.input_items;
    const rightSubtitle = this.castToString(rightSection.rightSubtitle);
    const rightTitle = this.castToString(rightSection.rightTitle);
    const rightDescription = this.castToString(rightSection.rightDescription);

    const buttonProp = rightSectionArray.find((item: any) => item.key === "button");
    const button: any = { type: "Primary", text: "" };
    if (buttonProp && buttonProp.getPropValue) {
      button.text = buttonProp.getPropValue("text");
      button.type = buttonProp.getPropValue("type");
    }
    const buttonText = this.castToString(button.text);

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

    const leftItemsExist = socials.length > 0 || !!backgroundImage || !!leftSubtitle || !!leftTitle || !!leftDescription || contactInfo.length > 0;
    const rightItemsExist = !!rightTitle || !!rightSubtitle || !!rightDescription || !!buttonText || (inputItems && inputItems.length > 0);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(title || subtitle || description || hasValidButtons) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const btnText = this.castToString(item.text);
                    const iconExist = !!item.icon;
                    if (!btnText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {btnText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          {iconExist && <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("box")}>
            {leftItemsExist && (
              <div className={`${this.decorateCSS("left-container")} ${backgroundImage && this.decorateCSS("with-background")}`}>
                {backgroundImage && (
                  <div className={`${this.decorateCSS("background-wrapper")} ${!rightItemsExist && this.decorateCSS("background-full")}`}>
                    <Base.Media
                      value={background}
                      className={`${this.decorateCSS("background")} ${!rightItemsExist && this.decorateCSS("background-full")}`}
                    />
                    {overlay && <div className={this.decorateCSS("overlay")} />}
                  </div>
                )}
                <div className={this.decorateCSS("left")}>
                  <div className={`${this.decorateCSS("content")} ${!rightItemsExist && this.decorateCSS("content-full")}`}>
                    <div className={this.decorateCSS("left-top")}>
                      {(leftTitle || leftSubtitle || leftDescription) && (
                        <Base.VerticalContent className={this.decorateCSS("left-top-content")}>
                          {leftSubtitle && <Base.P className={this.decorateCSS("leftSubtitle")}>{leftSection.leftSubtitle}</Base.P>}
                          {leftTitle && <Base.H3 className={this.decorateCSS("leftTitle")}>{leftSection.leftTitle}</Base.H3>}
                          {leftDescription && <Base.P className={this.decorateCSS("leftDescription")}>{leftSection.leftDescription}</Base.P>}
                        </Base.VerticalContent>
                      )}
                      {contactInfo.length > 0 && (
                        <div className={this.decorateCSS("contacts")}>
                          {contactInfo.map((contact: ContactItem, index: number) => {
                            const contactNameExist = this.castToString(contact.contactName);
                            return (
                              <div key={index} className={this.decorateCSS("contact")}>
                                {contact.contactIcon && <Base.Media value={contact.contactIcon as any} className={this.decorateCSS("icon")} />}
                                {contactNameExist && <Base.P className={this.decorateCSS("contactName")}>{contact.contactName}</Base.P>}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {socials.length > 0 && (
                      <div className={`${this.decorateCSS("socials")} ${!rightItemsExist && this.decorateCSS("socials-full")}`}>
                        {socials.map((social: Social, index: number) => {
                          if (!social.icon) return null;

                          return (
                            <div key={index} className={`${this.decorateCSS("icon-container")} ${!backgroundImage && this.decorateCSS("icon-container-no-image")}`}>
                              <ComposerLink path={social.url}>
                                <Base.Media
                                  value={social.icon as any}
                                  className={this.decorateCSS("icon")}
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
                {(rightSubtitle || rightTitle || rightDescription) && (
                  <Base.VerticalContent className={this.decorateCSS("right-header")}>
                    {rightSubtitle && <Base.P className={this.decorateCSS("rightSubtitle")}>{rightSection.rightSubtitle}</Base.P>}
                    {rightTitle && <Base.H3 className={this.decorateCSS("rightTitle")}>{rightSection.rightTitle}</Base.H3>}
                    {rightDescription && <Base.P className={this.decorateCSS("rightDescription")}>{rightSection.rightDescription}</Base.P>}
                  </Base.VerticalContent>
                )}
                {(buttonText || (inputItems && inputItems.length > 0)) && (
                  <div className={this.decorateCSS("form-container")}>
                    <Formik
                      initialValues={getInitialValue()}
                      validationSchema={getSchema}
                      onSubmit={(data, { resetForm }) => {
                        this.insertForm("Form 3 - ContactUsForm", data);
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
                                            className={`${this.decorateCSS("input")} ${this.decorateCSS("textarea")}`}
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
                                {buttonText && (
                                  <Base.Button buttonType={button.type} className={this.decorateCSS("submit-button")} type="submit">
                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                  </Base.Button>
                                )}
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

