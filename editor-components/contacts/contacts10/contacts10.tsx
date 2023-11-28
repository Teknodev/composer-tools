import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts10.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

class Contacts10Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://static.tildacdn.com/tild3762-3231-4233-b232-346564323461/dawid-sobolewski-359.jpg",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Message for a lesson with one of our teachers",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Meet the group, explore the school, and get a consultation",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1st Placeholder",
      value: "Your Full Name",
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "2nd Placeholder",
      value: "Your Email",
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "3rd Placeholder",
      value: "Your Message",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Message",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Contacts 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("image-container")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt="contact"
              />
            </div>
            <div className={this.decorateCSS("form-container")}>
              <div className={this.decorateCSS("main-wrapper")}>
                <h1 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h1>
                <p className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </p>
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
                      <ErrorMessage
                        className={this.decorateCSS("error-message")}
                        name="email"
                        component={"span"}
                      />
                      <input
                        placeholder={this.getPropValue("message")}
                        type="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts10Page;
