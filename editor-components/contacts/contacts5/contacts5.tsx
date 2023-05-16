import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts5.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

class Contacts5Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Hello",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We have great UI designs",
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
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://wallpaperaccess.com/full/754632.jpg",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Contacts 5";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contacts5")}>
            <div className={this.decorateCSS("title")}>
              <p>{this.getPropValue("subtitle")}</p>
              <h1>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("contact-form")} style={styling}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts5Page;
