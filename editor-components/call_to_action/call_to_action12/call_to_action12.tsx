import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import * as Yup from "yup";

class CallToAction12Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Newsletter",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Subscribe for newsletter",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Get updates by subscribe our weekly newsletter to receive the latest news, evens & promotions"
    });
    
    this.addProp(INPUTS.BUTTON("button", "Button", "SUBSCRIBE", "", null, null, "Black"));

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Email Address",
    });

    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });
    this.setComponentState("isInputFocused", false);
    this.setComponentState("placeholderText", this.castToString(this.getPropValue("placeholder")));
  }

  onComponentDidUpdate() {
    const currentPlaceholder = this.castToString(this.getPropValue("placeholder"));
    const prevPlaceholder = this.getComponentState("placeholderText");

    if (currentPlaceholder !== prevPlaceholder) {
      this.setComponentState("placeholderText", currentPlaceholder);
    }
  }

  validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  static getName(): string {
    return "Call To Action 12";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const submitText = this.castToString(this.getPropValue("submitText"));

    return (
      <Base.Container
        className={`${this.decorateCSS("container")}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist || subtitleExist) && (
            <Base.VerticalContent className={`${this.decorateCSS("header")} ${this.getPropValue("background") && this.decorateCSS("with-image")}`}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          {this.castToString(button.text) && this.castToString(this.getPropValue("placeholder")) && (
            <div className={this.decorateCSS("form")}>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.setComponentState("placeholderText", submitText);
                  this.insertForm("Call Me Back", data);
                  setTimeout(() => {
                    const defaultPlaceholder = this.castToString(this.getPropValue("placeholder"));
                    this.setComponentState("placeholderText", defaultPlaceholder);
                  }, 2000);
                  resetForm();
                }}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <Form className={this.decorateCSS("newsletter")} onSubmit={handleSubmit}>
                    {this.castToString(this.getPropValue("placeholder")) && this.castToString(button.text) && (
                      <div className={this.decorateCSS("inputs")}>
                        <input
                        onFocus={() => this.setComponentState("isInputFocused", true)}
                        onBlur={() => this.setComponentState("isInputFocused", false)}
                          placeholder={this.getComponentState("isInputFocused") ? "" : this.getComponentState("placeholderText") || placeholder}
                          type="text"
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          className={`${this.decorateCSS("input")} ${!this.getPropValue("background") && this.decorateCSS("no-image")}}`}
                        />
                        {errors.email && touched.email && <div className={this.decorateCSS("error")}>{errors.email}</div>}
                      </div>
                    )}
                    {this.castToString(button.text) && (
                      <Base.Button className={this.decorateCSS("submit-button")} buttonType={button.type}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          )}
          {this.castToString(button.text) && !this.castToString(this.getPropValue("placeholder")) && (
            <div className={this.decorateCSS("button-container")}>
              <ComposerLink path={button.url}>
                <Base.Button buttonType={button.type} className={`${this.decorateCSS("button")} ${!this.castToString(this.getPropValue("placeholder")) && this.decorateCSS("button-no-item")}`}>
                  <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default CallToAction12Page;
