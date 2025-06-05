import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal2.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerModalClose from "../../../composer-base-components/close/close";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class NotificationModal2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoIosNotifications",
    });

    this.addProp({
      type: "string",
      key: "notificationTitle",
      displayer: "Title",
      value: "Notifications",
    });

    this.addProp({
      type: "string",
      key: "displayerMessage",
      displayer: "Description",
      value: "Receive an email every time a new lesson is added to the website.",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "E-mail Placeholder",
      value: "Your e-mail",
    });


    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Subscribe", null, null, null, "Primary"));

    this.setComponentState(
      "placeholderText",
      this.castToString(this.getPropValue("placeholder"))
    );
  }

  static getName(): string {
    return "Notification Modal 2";
  }

  validationSchema = Yup.object().shape({
    email: Yup.string().required("Required")
      .email("Invalid email"),
  });

  render() {
    const icon = this.getPropValue("icon");
    const title = this.castToString(this.getPropValue("notificationTitle"));
    const description = this.castToString(this.getPropValue("displayerMessage"));

    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const submitText = this.getPropValue("submitText");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("close-icon-wrapper")}>
            <ComposerModalClose>
              <Base.Icon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
            </ComposerModalClose>
          </div>

          <Base.VerticalContent className={this.decorateCSS("content")}>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <Base.Icon propsIcon={{ className: this.decorateCSS("icon-element") }} name={this.getPropValue("icon")} />
              </div>
            )}
            {title &&
              <Base.SectionTitle className={this.decorateCSS("notification-title")}>
                {this.getPropValue("notificationTitle")}
              </Base.SectionTitle>}
            {description &&
              <Base.SectionDescription className={this.decorateCSS("displayer-message")}>
                {this.getPropValue("displayerMessage")}
              </Base.SectionDescription>}

            {placeholder && this.castToString(button.text) && (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.setComponentState("placeholderText", submitText);
                  this.insertForm("Call Me Back", data);
                  setTimeout(() => {
                    this.setComponentState(
                      "placeholderText",
                      placeholder
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
                    <div className={this.decorateCSS("input-container")}>
                      <input
                        placeholder={
                          this.castToString(this.getComponentState("placeholderText")) ||
                          placeholder
                        }
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                        type="text"
                        name="email"
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <div className={this.decorateCSS("error")}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {this.castToString(button.text) && (
                      <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                        {button.text}
                      </Base.Button>
                    )}
                  </Form>
                )}
              </Formik>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default NotificationModal2;
