import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action5.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import * as Yup from "yup";

type MediaObject = {
  background: TypeMediaInputValue;
  overlay: boolean;
};

type InputData = {
  placeholder: string;
  submitText: string;
  buttonText: React.JSX.Element;
  buttonType: TypeButton;
};

class CallToAction5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "background",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749ac99506a40002c2f82f5?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Subscribe for now",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start building today",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Get immediate and full access to our solution for 10 days completely free. Onlt $19 per month afterwards.",
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
          value: "Enter e-mail address",
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
          value: "SUBSCRIBE NOW",
        },
        {
          type: "select",
          key: "buttonType",
          displayer: "Button Type",
          value: "Primary",
          additionalParams: {
            selectItems: ["Primary", "Secondary", "Tertiary", "Link", "White", "Black", "Bare"],
          },
        },
      ],
    });

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
    return "Call To Action 5";
  }

  render() {
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const background = mediaObject.background;
    const overlay = mediaObject.overlay;

    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const inputData = this.castToObject<InputData>("inputData");
    const placeholder = this.castToString(inputData.placeholder);
    const submitText = this.castToString(inputData.submitText);
    const buttonText = this.castToString(inputData.buttonText);
    const buttonType = inputData.buttonType;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${overlay && background && this.decorateCSS("overlay-active")} ${background && this.decorateCSS("has-background")}`}>
        {background && (<Base.Media value={background} className={this.decorateCSS("background")} />)}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist || subtitleExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
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
                  this.insertForm("CTA5 – NewsletterForm", data);
                  setTimeout(() => {
                    const defaultPlaceholder = placeholder;
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
                          placeholder={this.getComponentState("placeholderText") || placeholder}
                          type="text"
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          className={`${this.decorateCSS("input")} ${!background && this.decorateCSS("no-image")}`}
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
          {buttonText && !placeholder && (
            <div className={this.decorateCSS("button-container")}>
              <Base.Button buttonType={buttonType} className={`${this.decorateCSS("button")} ${!placeholder && this.decorateCSS("button-no-item")}`}>
                <Base.P className={this.decorateCSS("button-text")}>{inputData.buttonText}</Base.P>
              </Base.Button>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default CallToAction5Page;
