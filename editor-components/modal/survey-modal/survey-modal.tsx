import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./survey-modal.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";

class SurveyModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://picsum.photos/200",
    });
    this.addProp({
      type: "string",
      key: "survey-title",
      value: "Web Site Survey",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "question1",
      value: "What your name ?",
      displayer: "Question",
    })
    this.addProp({
      type: "string",
      key: "question2",
      value: "Did you like our site ?",
      displayer: "Question",
    })
    this.addProp({
      type: "string",
      key: "question3",
      value: "what are your suggestions ?",
      displayer: "Question",
    })

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "Send",
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
    message: Yup.string().min(4, "Min 4 character!").required("Required"),
  });

  getName(): string {
    return "Survey Modal";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            <img
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
            <h2 className={this.decorateCSS("first-header")} >
              {this.getPropValue("survey-title")}
            </h2>
            <div className={this.decorateCSS("form-container")}>
              <h1 className={this.decorateCSS("title")}>
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
                    <p>{this.getPropValue("question1")}</p>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <p>{this.getPropValue("question2")}</p>
                    <input
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <p>{this.getPropValue("question3")}</p>
                    <input
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <ComposerModalClose>
              <button
                className={this.decorateCSS("button")}
                type="submit"
              >
                {this.getPropValue("button_text")}
              </button>
            </ComposerModalClose>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyModal;
