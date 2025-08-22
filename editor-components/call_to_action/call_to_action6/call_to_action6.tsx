import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Form, Formik } from "formik";
import * as Yup from "yup";

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdaa2707399d002cb4130f?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get notified on latest updates and new releases.",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Place Holder",
      value: "Enter E-mail Address",
    });

    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp({
      type: "string",
      key: "comment",
      displayer: "Comment",
      value: "* We promise we will never spam your account. *",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Subscribe", null, null, null, "Primary"));



    this.addProp({
      type: "boolean",
      key: "spaceLine",
      displayer: "Space Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.setComponentState(
      "placeholderText",
      this.castToString(this.getPropValue("placeholder"))
    );
  }

  onComponentDidUpdate() {
    const currentPlaceholder = this.castToString(this.getPropValue("placeholder"));
    const prevPlaceholder = this.getComponentState("placeholderText");

    if (currentPlaceholder !== prevPlaceholder) {
      this.setComponentState("placeholderText", currentPlaceholder);
    }
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  static getName(): string {
    return "Call To Action 6";
  }

  render() {
    const spaceLineExist = this.getPropValue("spaceLine");

    const titleExist = this.castToString(this.getPropValue("title"));
    const placeholderExist = this.castToString(this.getPropValue("placeholder"));
    const commentExist = this.castToString(this.getPropValue("comment"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const submitText = this.castToString(this.getPropValue("submitText"));

    return (
      <Base.Container
        className={`${this.decorateCSS("container")}
        ${this.getPropValue("overlay") ? this.decorateCSS("overlay-active") : ""}`}
        style={{
          backgroundImage: `url(${this.getPropValue("backgroundImage")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            {spaceLineExist && (
              <div className={this.decorateCSS("space-container")}>
                <div className={this.decorateCSS("space")} />
              </div>
            )}

            {(commentExist || this.castToString(button.text)) &&
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.setComponentState("placeholderText", submitText);
                  this.insertForm("Call Me Back", data);
                  setTimeout(() => {
                    const defaultPlaceholder = this.castToString(this.getPropValue("placeholder"));
                    this.setComponentState(
                      "placeholderText",
                      defaultPlaceholder
                    );
                  }, 2000);
                  resetForm();
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form
                    className={this.decorateCSS("form")}
                    onSubmit={handleSubmit}
                  >
                    {this.castToString(button.text) &&
                      <div className={this.decorateCSS("input-container")}>
                        <input
                          placeholder={
                            this.getComponentState("placeholderText") ||
                            placeholderExist
                          }
                          onChange={handleChange}
                          className={this.decorateCSS("placeholder")}
                          type="text"
                          name="email"
                          value={values.email}
                        />
                        {errors.email && touched.email && (
                          <div className={this.decorateCSS("error")}>
                            {errors.email}
                          </div>
                        )}
                      </div>}

                    {(commentExist || this.castToString(button.text)) && (
                      <div className={this.decorateCSS("bottom-container")}>
                        {commentExist && (
                          <h4 className={this.decorateCSS("comment")}>
                            {this.getPropValue("comment")}
                          </h4>
                        )}
                        {this.castToString(button.text) && (
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            {button.text}
                          </Base.Button>
                        )}
                      </div>
                    )}
                  </Form>
                )}
              </Formik>}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default CallToAction6Page;
