import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts9.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

type Item = {
  title: string;
  Text1st: string;
  Text2nd: string;
};

class Contacts9Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Contact Us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Subtitle",
      value: "Meet the group, explore the school, and get a free consultation",
    });
    this.addProp({
      type: "image",
      key: "background-img",
      displayer: "Background Image",
      value:
        "https://static.tildacdn.com/tild6534-3036-4165-a632-363563666466/photo1432821596592e2c18b78144f",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1th Placeholder",
      value: "First & last name",
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "2th Placeholder",
      value: "Email address",
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "3th Placeholder",
      value: "Write message",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Message",
    });
    this.addProp({
      type: "string",
      key: "below_text",
      displayer: "Text Below",
      value: "Thank you for your feedback!",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Contacts 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("background-image")}>
            <img
              src={this.getPropValue("background-img")}
              alt="backgroundPhoto"
              className={this.decorateCSS("img")}
            />
          </div>
          <div className={this.decorateCSS("contacts9")}>
            <div className={this.decorateCSS("contacts-top")}>
              <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
              <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
            </div>
            <div className={this.decorateCSS("contacts-form")}>
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
                    <h3>{this.getPropValue("name")}</h3>
                    <input
                      placeholder={this.getPropValue("name")}
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="name"
                      component={"span"}
                    />
                    <h3>{this.getPropValue("email")}</h3>
                    <input
                      placeholder={this.getPropValue("email")}
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="email"
                      component={"span"}
                    />
                    <h3>{this.getPropValue("message")}</h3>
                    <textarea
                      placeholder={this.getPropValue("message")}
                      id="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                      rows={5}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="message"
                      component={"span"}
                    />
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
            <div className={this.decorateCSS("below-text")}>{this.getPropValue("below_text")}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts9Page;
