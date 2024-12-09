import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form9.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

type FormItem = {
  label: JSX.Element;
  placeholder: JSX.Element;
  icon: string;
  isFull: boolean;
  type: "Text" | "Text Area" | "Phone" | "Email";
  errorMessage: JSX.Element;
};

class Form9Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c6a2bd2970002c62912f?alt=media&timestamp=1719564433797",
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
      key: "form-items",
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
                selectItems: ["Text", "Text Area", "Phone", "Email"]
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
              type: "string",
              key: "errorMessage",
              displayer: "Error Message",
              value: "Error"
            }
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
                selectItems: ["Text", "Text Area", "Phone", "Email"]
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
              type: "string",
              key: "errorMessage",
              displayer: "Error Message",
              value: "Error"
            }
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
                selectItems: ["Text", "Text Area", "Phone", "Email"]
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
              type: "string",
              key: "errorMessage",
              displayer: "Error Message",
              value: "Error"
            }
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
                selectItems: ["Text", "Text Area", "Phone", "Email"]
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
              type: "string",
              key: "errorMessage",
              displayer: "Error Message",
              value: "Error"
            }
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "Submit Form",
    });

    this.addProp({
      type: "icon",
      key: "button-icon",
      displayer: "Button Icon",
      value: "FaArrowRight",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form 9";
  }

  getInputType(type: string): string {
    switch (type) {
      case "Text":
        return "text";
      case "Text Area":
        return "textarea";
      case "Phone":
        return "phone";
      case "Email":
        return "email";
      default:
        return "text";
    }
  }

  render() {
    const imageExist = !!this.getPropValue("image");

    const formItems = this.castToObject<FormItem[]>("form-items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {imageExist && (
              <div className={this.decorateCSS("image-container")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt="contact"
                />
              </div>
            )}
            <div className={this.decorateCSS("form-container")}>
              <Base.VerticalContent className={this.decorateCSS("header")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              </Base.VerticalContent>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    {formItems.map((item, index) => {

                      return (
                        <div
                          key={index}
                          className={`
                            ${this.decorateCSS("form-item")}
                            ${item.isFull ? this.decorateCSS("full") : ""}
                          `}
                        >
                          <label className={this.decorateCSS("form-item-label")}>
                            {item.label}
                          </label>
                          <div className={this.decorateCSS("input-container")}>
                            {this.getInputType(item.type) === "textarea"
                              ? (
                                <textarea
                                  className={this.decorateCSS("input-textarea")}
                                  placeholder={this.castToString(item.placeholder)}
                                ></textarea>
                              )
                              : <>
                                <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("input-icon") }} />
                                <input
                                  placeholder={this.castToString(item.placeholder)}
                                  type={item.type}
                                  value={values.name}
                                  onChange={handleChange}
                                  className={this.decorateCSS("input")}
                                />
                              </>}
                          </div>
                          <ErrorMessage
                            className={this.decorateCSS("error-message")}
                            name="error-message"
                            component={"span"}
                            children={() => <>{item.errorMessage}</>}
                          />
                        </div>
                      );
                    })}
                    <Base.Button
                      className={this.decorateCSS("submit-button")}
                      type="submit"
                    >
                      <div className={this.decorateCSS("button-inner")}>
                        {this.getPropValue("button-text")}
                        <ComposerIcon name={this.getPropValue("button-icon")} />
                      </div>
                    </Base.Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form9Page;
