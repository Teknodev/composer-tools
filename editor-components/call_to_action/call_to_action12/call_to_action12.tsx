import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action12.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import * as Yup from "yup";

type InputData = {
  placeholder: string;
  submitText: string;
  buttonText: React.JSX.Element;
  buttonType: TypeButton;
};

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

    this.addProp({
      type: "object",
      key: "inputData",
      displayer: "Input",
      value: [
        {
          type: "string",
          key: "placeholder",
          displayer: "Placeholder",
          value: "Email Address",
        },
        {
          type: "string",
          key: "submitText",
          displayer: "Submit Text",
          value: "Form successfully submitted!",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "SUBSCRIBE",
        },
        {
          type: "select",
          key: "buttonType",
          displayer: "Button Type",
          value: "Black",
          additionalParams: {
            selectItems: ["Primary", "Secondary", "Tertiary", "Link", "White", "Black", "Bare"],
          },
        },
      ],
    });

    this.setComponentState("isInputFocused", false);
    const inputData = this.castToObject<InputData>("inputData");
    this.setComponentState("placeholderText", this.castToString(inputData.placeholder));
  }

  onComponentDidUpdate() {
    const inputData = this.castToObject<InputData>("inputData");
    const currentPlaceholder = this.castToString(inputData.placeholder);
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
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    const inputData = this.castToObject<InputData>("inputData");
    const placeholder = this.castToString(inputData.placeholder);
    const submitText = this.castToString(inputData.submitText);
    const buttonText = this.castToString(inputData.buttonText);
    const buttonType = inputData.buttonType;

    return (
      <Base.Container className={`${this.decorateCSS("container")}`} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist || subtitleExist) && (
            <Base.VerticalContent className={`${this.decorateCSS("header")} ${this.getPropValue("background") && this.decorateCSS("with-image")}`}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          {buttonText && placeholder && (
            <div className={this.decorateCSS("form")}>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.setComponentState("placeholderText", submitText);
                  this.insertForm("CTA12 – NewsletterForm", data);
                  setTimeout(() => {
                    const defaultPlaceholder = this.castToString(inputData.placeholder);
                    this.setComponentState("placeholderText", defaultPlaceholder);
                  }, 2000);
                  resetForm();
                }}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <Form className={this.decorateCSS("newsletter")} onSubmit={handleSubmit}>
                    {placeholder && buttonText && (
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
                    {buttonText && (
                      <Base.Button className={this.decorateCSS("submit-button")} buttonType={buttonType}>
                        <Base.P className={this.decorateCSS("button-text")}>{inputData.buttonText}</Base.P>
                      </Base.Button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default CallToAction12Page;