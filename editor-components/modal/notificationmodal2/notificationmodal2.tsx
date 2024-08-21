import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class NotificationModal2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "PiBellRingingThin",
    });

    this.addProp({
      type: "icon",
      key: "exit-icon",
      displayer: "exit-icon",
      value: "RxCross1",
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
      value:
        "Receive an email every time a new lesson is added to the website.",
    });

    this.addProp({
      type: "string",
      key: "email",
      displayer: "E-mail",
      value: "Your e-mail",
    });

    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button",
      value: "Subscribe",
    });
  }

  getName(): string {
    return "Notification Modal 2";
  }

  render() {
    const icon = this.getPropValue("icon");
    const exitIcon = this.getPropValue("exit-icon");
    const buttonval = this.getPropValue("button", { as_string: true });
    const emailPlaceholder = this.getPropValue("email", { as_string: true });
    const description = this.getPropValue("displayerMessage", {
      as_string: true,
    });

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <button className={this.decorateCSS("exit-icon")}>
            {exitIcon && (
              <ComposerIcon
                propsIcon={{ className: this.decorateCSS("Icon") }}
                name={exitIcon}
              />
            )}
          </button>
          <div className={this.decorateCSS("content")}>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <ComposerIcon
                  propsIcon={{ className: this.decorateCSS("Icon") }}
                  name={this.getPropValue("icon")}
                />
              </div>
            )}
            <h2 className={this.decorateCSS("notification-title")}>
              {this.getPropValue("notificationTitle")}
            </h2>
            {description && (
              <p className={this.decorateCSS("displayer-message")}>
                {this.getPropValue("displayerMessage")}
              </p>
            )}

            {emailPlaceholder && (
              <div className={this.decorateCSS("send-mail")}>
                <div className={this.decorateCSS("input-group")}>
                  <input
                    placeholder={emailPlaceholder}
                    type="text"
                    className={this.decorateCSS("input")}
                  />

                  {buttonval && (
                    <button className={this.decorateCSS("button")}>
                      {this.getPropValue("button")}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationModal2;
