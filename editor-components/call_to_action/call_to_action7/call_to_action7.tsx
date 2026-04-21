import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import * as Yup from "yup";

type MediaObject = {
  image: TypeMediaInputValue;
  overlay: boolean;
};

type InputData = {
  placeholder: string;
  submitText: string;
  buttonText: React.JSX.Element;
  buttonType: TypeButton;
};

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Get your free e-book",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Level up your portfolio, read the book today!",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://vault.uicore.co/e-book/wp-content/uploads/sites/51/2022/08/E-Book-Book.webp",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
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
          value: "Email",
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
          value: "Get your FREE copy",
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

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
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
    return "Call To Action 7";
  }

  render() {
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const image = mediaObject.image;
    const overlay = mediaObject.overlay;
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const inputData = this.castToObject<InputData>("inputData");
    const placeholder = this.castToString(inputData.placeholder);
    const submitText = this.castToString(inputData.submitText);
    const buttonText = this.castToString(inputData.buttonText);
    const buttonType = inputData.buttonType;
    const hasRightContent = subtitle || title || description || placeholder;
    const onlyImage = image && !hasRightContent;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!image && this.decorateCSS("no-image")} ${onlyImage && this.decorateCSS("only-image")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid gridCount={{ pc: 2, tablet: 2 }} className={this.decorateCSS("wrapper")}>
            {image &&
              (<Base.GridCell className={this.decorateCSS("left-page")}>
                <div className={`${this.decorateCSS("image-container")} ${!(subtitle || title || description) && this.decorateCSS("no-content")}`}>
                  <Base.Media
                    value={image}
                    className={this.decorateCSS("image")}
                  />
                  {overlay && <div className={this.decorateCSS("overlay")} />}
                </div>
              </Base.GridCell>)
            }
            {(subtitle || title || description || placeholder) &&
              (<Base.GridCell className={this.decorateCSS("right-page")}>
                <Base.VerticalContent className={this.decorateCSS("right-content")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                  {placeholder &&
                    <div className={this.decorateCSS("input-button-wrapper")}>
                      <Formik
                        initialValues={{ email: "" }}
                        validationSchema={this.validationSchema}
                        onSubmit={(data, { resetForm }) => {
                          this.setComponentState("placeholderText", submitText);
                          this.insertForm("CTA7 – NewsletterForm", data);
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
                        {({ handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched, }) => (
                          <Form className={this.decorateCSS("input-div")}
                            onSubmit={handleSubmit}>
                            {placeholder && (
                              <input
                                placeholder={
                                  this.getComponentState("placeholderText") ||
                                  placeholder
                                }
                                type="text"
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                className={this.decorateCSS("input")}
                              />
                            )}
                            {errors.email && touched.email && (
                              <div className={this.decorateCSS("error")}>
                                {errors.email}
                              </div>
                            )}
                            {buttonText && (
                              <Base.Button buttonType={buttonType} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{inputData.buttonText}</Base.P>
                              </Base.Button>
                            )}
                          </Form>
                        )}
                      </Formik>
                    </div>
                  }
                  {(!placeholder && buttonText && (
                    <Base.Button className={this.decorateCSS("button")} buttonType={buttonType}>
                      <Base.P className={this.decorateCSS("button-text")}>{inputData.buttonText}</Base.P>
                    </Base.Button>
                  ))}
                </Base.VerticalContent>
              </Base.GridCell>)}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction7Page;
