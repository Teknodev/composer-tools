import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./survey-modal.module.scss";
import * as Yup from "yup";
import {  Formik, Form } from "formik";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


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
      key: "question3",
      value: "What are your suggestions ?",
      displayer: "Question",
    })

    
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Submit",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Path",
          value: "",
        },
      ],
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
    const button = this.getPropValue("button");
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            <img
              alt=""
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
              <ComposerLink path={this.getPropValue("button")[1].value}>
              <button
                className={this.decorateCSS("button")}
                type="submit"
              >
               {button[0].value}
              </button>
              </ComposerLink>
            </ComposerModalClose>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyModal;
