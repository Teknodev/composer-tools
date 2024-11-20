import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./subscription-modal.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class SubscriptionModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/672b78707acba6002c5ef5c2?alt=media&timestamp=1730902183410",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Subscribe to our newsletter!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We'll send you the best of our blog just once a month. We promise.",
    });

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Enter e-mail",
    });

    this.addProp({
      type: "string",
      key: "errorMessage",
      displayer: "Error Message",
      value: "Error",
    });

    this.addProp({
      type: "string",
      key: "invalidEmail",
      displayer: "Invalid Email Message",
      value: "Invalid email",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Subscribe",
    });

    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button Link",
      value: "",
    });
  }

  getName(): string {
    return "SubscriptionModal";
  }

  render() {
    const image = this.getPropValue("image");
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const errorMessage = this.castToString(this.getPropValue("errorMessage"));
    const invalidEmail = this.castToString(this.getPropValue("invalidEmail"));
    const buttonText = this.castToString(this.getPropValue("buttonText"));

    const SubscriptionSchema = Yup.object().shape({
      email: Yup.string().email(invalidEmail).required(errorMessage),
    });

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("modal-content")}>
            <div className={this.decorateCSS("close-icon-wrapper")}>
              <ComposerModalClose>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>

            {image && <img className={this.decorateCSS("image")} src={image} alt="Subscription Image" />}

            <Base.VerticalContent className={this.decorateCSS("right")}>
              <Base.VerticalContent>
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
              </Base.VerticalContent>

              <Formik
                initialValues={{ email: "" }}
                validationSchema={SubscriptionSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Subscribe", data);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={this.decorateCSS("form")}>
                    <Base.VerticalContent className={this.decorateCSS("form-group")}>
                      {placeholder && <Field type="email" name="email" placeholder={placeholder} className={this.decorateCSS("input")} />}
                      {errorMessage && <ErrorMessage name="email" component="div" className={this.decorateCSS("error")} />}
                    </Base.VerticalContent>

                    {buttonText && (
                      <ComposerLink path={this.getPropValue("buttonUrl")}>
                        <button type="submit" className={this.decorateCSS("button")} disabled={isSubmitting}>
                          {buttonText}
                        </button>
                      </ComposerLink>
                    )}
                  </Form>
                )}
              </Formik>
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default SubscriptionModal;
