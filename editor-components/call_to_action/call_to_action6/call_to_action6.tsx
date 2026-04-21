import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import * as Yup from "yup";

type MediaObject = {
  backgroundImage: TypeMediaInputValue;
  overlay: boolean;
};

type InputData = {
  placeholder: string;
  submitText: string;
  buttonText: React.JSX.Element;
  buttonType: TypeButton;
};

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "backgroundImage",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdaa2707399d002cb4130f?alt=media",
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
      value: "Get notified on latest updates and new releases.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "spaceLine",
      displayer: "Line",
      value: true,
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
          value: "Enter E-mail Address",
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
          value: "Subscribe",
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
    this.setComponentState(
      "placeholderText",
      this.castToString(inputData.placeholder)
    );
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
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  static getName(): string {
    return "Call To Action 6";
  }

  render() {
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const backgroundImage = mediaObject.backgroundImage;
    const overlay = mediaObject.overlay;
    const spaceLineExist = this.getPropValue("spaceLine");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const inputData = this.castToObject<InputData>("inputData");
    const placeholderExist = this.castToString(inputData.placeholder);
    const submitText = this.castToString(inputData.submitText);
    const buttonText = this.castToString(inputData.buttonText);
    const buttonType = inputData.buttonType;

    const commentExist = this.castToString(this.getPropValue("comment"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${overlay && backgroundImage && this.decorateCSS("overlay-active")} ${backgroundImage && this.decorateCSS("has-background")}`}>
        {backgroundImage && (<Base.Media value={backgroundImage} className={this.decorateCSS("background-image")} />)}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {subtitleExist && (<Base.SectionSubTitle className={`${this.decorateCSS("subtitle")}`}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
            {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
            {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>)}
            {spaceLineExist && (
              <div className={this.decorateCSS("space-container")}>
                <div className={this.decorateCSS("space")} />
              </div>
            )}
            {(commentExist || buttonText) &&
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.setComponentState("placeholderText", submitText);
                  this.insertForm("CTA6 – NewsletterForm", data);
                  setTimeout(() => {
                    const defaultPlaceholder = this.castToString(inputData.placeholder);
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
                    {buttonText &&
                      <div className={this.decorateCSS("input-container")}>
                        <input
                          placeholder={
                            this.getComponentState("placeholderText") ||
                            placeholderExist
                          }
                          onChange={handleChange}
                          className={`${this.decorateCSS("placeholder")} ${!backgroundImage && this.decorateCSS("no-image")}`}
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

                    {(commentExist || buttonText) && (
                      <div className={this.decorateCSS("bottom-container")}>
                        {commentExist && (
                          <Base.P className={this.decorateCSS("comment")}>
                            {this.getPropValue("comment")}
                          </Base.P>
                        )}
                        {buttonText && (
                          <div className={this.decorateCSS("button-container")}>
                            <Base.Button buttonType={buttonType} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{inputData.buttonText}</Base.P>
                            </Base.Button>
                          </div>
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