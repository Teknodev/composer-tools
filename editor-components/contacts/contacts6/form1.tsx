import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form1.module.scss";

class Form1 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      displayer: "Title",
      value: "Contact Us",
      key: "title",
    });
    this.addProp({
      type: "image",
      displayer: "Image",
      value:
        "https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?w=1380&t=st=1676887003~exp=1676887603~hmac=abdac364434d1a9dd93276315c3c25c0ac0383484d75a4686e899022d1de8312",
      key: "image",
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
      key: "message",
      displayer: "3th Placeholder",
      value: "Message",
    });

    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Submit",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("image-container")}
            
          >
            <img
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
              
              alt="contact image"
            />
          </div>
          <div
            className={this.decorateCSS("form-container")}
            
          >
            <h1 className={this.decorateCSS("title")} >
              {this.getPropValue("title")}
            </h1>
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
    );
  }
}

export default Form1;
