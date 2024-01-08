import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts11.module.scss";

class Form11 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      displayer: "Title",
      value: "FREE CONSULTATION REQUEST",
      key: "title",
    });
    this.addProp({
        type: "string",
        displayer: "text1",
        value: "Your Name",
        key: "text1",
      });
      this.addProp({
        type: "string",
        displayer: "text2",
        value: "Your Email",
        key: "text2",
      });
      this.addProp({
        type: "string",
        displayer: "text3",
        value: "Your Phone",
        key: "text3",
      });
      this.addProp({
        type: "string",
        displayer: "text4",
        value: "Select Treatment",
        key: "text4",
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
        key: "treatment",
        displayer: "Treatment",
        value: "-",
      });

    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "SEND REQUEST",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form11";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
         
            <h1 className={this.decorateCSS("title")} >
              {this.getPropValue("title")}
            </h1>

            <div className={this.decorateCSS("text-box")}>
            <h2 className={this.decorateCSS("text1")}>
             {this.getPropValue("text1")}
            </h2>
            <h2 className={this.decorateCSS("text2")}>
             {this.getPropValue("text2")}
            </h2>
            <h2 className={this.decorateCSS("text3")}>
             {this.getPropValue("text3")}
            </h2>
            <h2 className={this.decorateCSS("text4")}>
             {this.getPropValue("text4")}
            </h2>
            </div>
            <div
            className={this.decorateCSS("form-container")}
            
          >

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
                    placeholder={this.getPropValue("phone")}
                    type="text"
                    name="phone"
                    value={values.message}
                    onChange={handleChange}
                    className={this.decorateCSS("input")}
                    
                  />
                   <input
                    placeholder={this.getPropValue("treatment")}
                    type="text"
                    name="treatment"
                    value={values.message}
                    onChange={handleChange}
                    className={this.decorateCSS("input")}
                    
                  />
                  <ErrorMessage
                    className={this.decorateCSS("error-message")}
                    name="message"
                    component={"span"}
                  />
                 
                </Form>
              )}
            </Formik>
            <button
                    className={this.decorateCSS("submit-button")}
                    
                    type="submit"
                  >
                    {this.getPropValue("button_text")}
                  </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form11;
