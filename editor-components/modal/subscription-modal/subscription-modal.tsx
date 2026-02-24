import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./subscription-modal.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ButtonNavigator from "components/button-navigator/button-navigator";

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
    this.addProp(INPUTS.BUTTON("button", "Button", "Subscribe", null, null, null, "Primary"));
  }

  static getName(): string {
    return "Subscription Modal";
  }

  render() {
    const image = this.getPropValue("image");
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const errorMessage = this.castToString(this.getPropValue("errorMessage"));
    const invalidEmail = this.castToString(this.getPropValue("invalidEmail"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const SubscriptionSchema = Yup.object().shape({
      email: Yup.string().email(invalidEmail).required(errorMessage),
    });

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("modal-content")}>
            <div className={this.decorateCSS("close-icon-wrapper")}>
              <ComposerModalClose>
                <Base.Icon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>

            {image && <img className={this.decorateCSS("image")} src={image} alt="" />}

            {(title || description || placeholder || this.castToString(button.text)) && (
              <Base.VerticalContent className={this.decorateCSS("right")}>
                {(title || description) &&
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  </Base.VerticalContent>}

                {(placeholder && this.castToString(button.text)) && (
                  <Formik
                    initialValues={{ email: "" }}
                    validationSchema={SubscriptionSchema}
                    onSubmit={(data, { resetForm }) => {
                      this.insertForm("Subscription Modal - NewsletterForm", data);
                      resetForm();
                    }}
                  >
                    {({ values, isSubmitting }) =>
                      <Form className={this.decorateCSS("form")}>
                        {placeholder && (
                          <Base.VerticalContent className={this.decorateCSS("form-group")}>
                            <Field type="email" name="email" placeholder={placeholder} className={this.decorateCSS("input")} />
                            {errorMessage && <ErrorMessage name="email" component="div" className={this.decorateCSS("error")} />}
                          </Base.VerticalContent>
                        )}

                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}
                          disabled={isSubmitting}>
                          {button.text}
                        </Base.Button>
                      </Form>
                    }
                  </Formik>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default SubscriptionModal;
