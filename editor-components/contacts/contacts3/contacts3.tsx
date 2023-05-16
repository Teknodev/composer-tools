import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts3.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

type Item = {
  title: string;
  Text1th: string;
  Text2th: string;
};
class Contacts3Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Please sent message",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
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
      type: "array",
      key: "info-items",
      displayer: "Info Items",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "EMAIL",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "info@mail.com",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "support@mail.com",
              displayer: "2th Text",
            },
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "PHONE",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "+1 111 2222 333",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "+1 111 2222 333",
              displayer: "2th Text",
            },
          ],
        },
      ],
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Contacts 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contacts3")}>
            <div className={this.decorateCSS("contact-left")}>
              <p>{this.getPropValue("subtitle")}</p>
              <h1>{this.getPropValue("title")}</h1>
              <div className={this.decorateCSS("contact-info")}>
                {this.castToObject<Item[]>("info-items").map(
                  (data: any, index: number) => (
                    <div key={index}>
                      <h3>{data.title}</h3>
                      <h2>{data.Text1th}</h2>
                      <h2>{data.Text2th}</h2>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={this.decorateCSS("contact-right")}>
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
                    <button className={this.decorateCSS("submit-button")} type="submit">
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

export default Contacts3Page;
