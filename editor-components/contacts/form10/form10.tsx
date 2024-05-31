import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Form10Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "SubTitle",
      value: "Contact Us",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Let us help you get your project started",
    });

    this.addProp({
      type: "string",
      displayer: "text1",
      value: "What's your good name?*",
      key: "text1",
    });
    this.addProp({
      type: "icon",
      key: "Name",
      displayer: "Icon",
      value: "BsPerson",
    });
    this.addProp({
      type: "string",
      displayer: "text2",
      value: "Enter your email address*",
      key: "text2",
    });
    this.addProp({
      type: "icon",
      key: "e-mail",
      displayer: "Icon",
      value: "MdOutlineLocalPostOffice",
    });
    this.addProp({
      type: "string",
      displayer: "text3",
      value: "Enter your message",
      key: "text3",
    });
    this.addProp({
      type: "icon",
      key: "message",
      displayer: "Icon",
      value: "RiMessage2Line",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1th Placeholder",
      value: "Name",
    });

    this.addProp({
      type: "string",
      key: "email",
      displayer: "2th Placeholder",
      value: "E-mail",
    });

    this.addProp({
      type: "string",
      key: "phone",
      displayer: "Phone",
      value: "Phone-number",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Request",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        " We are committed to protecting your privacy. We will never collect information about you without your explicit consent",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-page")}>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            </div>

            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("form-container")}>
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
                      <input
                        placeholder={this.getPropValue("name")}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                      />
                      <div className={this.decorateCSS("name-box")}>
                        <ComposerIcon
                          name={this.getPropValue("Name")}
                          propsIcon={{ className: this.decorateCSS("icon") }}
                        />
                        <h2 className={this.decorateCSS("text")}>
                          {this.getPropValue("text1")}
                        </h2>
                      </div>
                      <ErrorMessage
                        className={this.decorateCSS("error-message")}
                        name="name"
                        component={"span"}
                      />
                      <input
                        placeholder={this.getPropValue("email")}
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                      />
                      <div className={this.decorateCSS("email-box")}>
                        <ComposerIcon
                          name={this.getPropValue("e-mail")}
                          propsIcon={{ className: this.decorateCSS("icon") }}
                        />

                        <h2 className={this.decorateCSS("text")}>
                          {this.getPropValue("text2")}
                        </h2>
                      </div>
                      <ErrorMessage
                        className={this.decorateCSS("error-message")}
                        name="email"
                        component={"span"}
                      />
                      <input
                        placeholder={this.getPropValue("phone")}
                        type="text"
                        name="phone"
                        value={values.message}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                      />
                      <div className={this.decorateCSS("message-box")}>
                        <ComposerIcon
                          name={this.getPropValue("message")}
                          propsIcon={{ className: this.decorateCSS("icon") }}
                        />

                        <h2 className={this.decorateCSS("text")}>
                          {this.getPropValue("text3")}
                        </h2>
                      </div>
                      <ErrorMessage
                        className={this.decorateCSS("error-message")}
                        name="message"
                        component={"span"}
                      />
                    </Form>
                  )}
                </Formik>
              </div>
              <button
                className={this.decorateCSS("submit-button")}
                type="submit"
              >
                {this.getPropValue("button_text")}
              </button>
              <div className={this.decorateCSS("right-description")}>
                <h1 className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form10Page;
