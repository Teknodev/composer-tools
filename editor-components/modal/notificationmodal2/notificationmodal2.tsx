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
      type: "string",
      key: "notification-title",
      displayer: "Title",
      value: "Notifications",
    });

    this.addProp({
      type: "string",
      key: "displayer-message",
      displayer: "Description",
      value: "Receive an email every time a new lesson is added to the website.",
    });

    this.addProp({
      type: "string",
      key: "e-mail",
      displayer: "E-mail",
      value: "Your e-mail",
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Subscribe",
        },
      ],
    });
  }

  getName(): string {
    return "Notification Modal 2";
  }

  render() {
    const icon = this.getPropValue("icon");
    const buttonval = this.getPropValue("button");
    const emailPlaceholder = this.getPropValue("e-mail", {as_string: true});
    const description = this.getPropValue("displayer-message", {as_string: true});

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {icon && <div className={this.decorateCSS("icon")}>
              <ComposerIcon
                propsIcon={{ className: this.decorateCSS("text")}}
                name={this.getPropValue("icon")}
              />
            </div>}
            <h2 className={this.decorateCSS("notification-title")}>
              {this.getPropValue("notification-title")}
            </h2>
            {description && (
              <p className={this.decorateCSS("displayer-message")}>
              {description}
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
                   {buttonval[0].value && (
                        <button className={this.decorateCSS("button")}>
                          {buttonval[0].value}
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