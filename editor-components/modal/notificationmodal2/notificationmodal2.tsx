import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal2.module.scss";
import * as Yup from "yup";

class NotificationModal2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://w7.pngwing.com/pngs/605/406/png-transparent-notifications-notification-bell-alarm-alert-notification-bell-3d-icon-thumbnail.png",
    });
    this.addProp({
      type: "string",
      key: "notification-title",
      displayer: "Notification",
      value: "Notifications",
    });
    this.addProp({
      type: "string",
      key: "displayer-message",
      displayer: "Message",
      value: "Receive an email every time a new lesson is added to the website.",
    });
    this.addProp({
      type: "string",
      key: "e-mail",
      displayer: "E-mail",
      value: "Your e-mail",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Subscribe",
    });
  }

  validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  getName(): string {
    return "Notification Modal 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <img
              alt="notification-icon"
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            />
            <h2 className={this.decorateCSS("notification-title")}>
              {this.getPropValue("notification-title")}
            </h2>
            <p className={this.decorateCSS("displayer-message")}>
              {this.getPropValue("displayer-message")}
            </p>
            <div className={this.decorateCSS("send-mail")}>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    <div className={this.decorateCSS("input-group")}>
                      <input
                        placeholder={this.getPropValue("e-mail")}
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                      />
                      <button
                        className={this.decorateCSS("button")}
                        type="submit"
                      >
                        {this.getPropValue("button_text")}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationModal2;
