import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerModalClose from "../../../composer-base-components/close/close";

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

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });
  }

  getName(): string {
    return "Notification Modal 2";
  }

  render() {
    const icon = this.getPropValue("icon");
    const buttonval = this.getPropValue("button", { as_string: true });
    const emailPlaceholder = this.getPropValue("email", { as_string: true });
    const title = this.getPropValue("notificationTitle", {
      as_string: true,
    });
    const description = this.getPropValue("displayerMessage", {
      as_string: true,
    });

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("close-icon-wrapper")}>
            <ComposerModalClose>
              <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
            </ComposerModalClose>
          </div>

          <Base.VerticalContent className={this.decorateCSS("content")}>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("icon-element") }} name={this.getPropValue("icon")} />
              </div>
            )}
            {title && <Base.SectionTitle className={this.decorateCSS("notification-title")}>{this.getPropValue("notificationTitle")}</Base.SectionTitle>}
            {description && <Base.SectionDescription className={this.decorateCSS("displayer-message")}>{this.getPropValue("displayerMessage")}</Base.SectionDescription>}

            {emailPlaceholder && (
              <div className={this.decorateCSS("send-mail")}>
                <div className={this.decorateCSS("input-group")}>
                  <input placeholder={emailPlaceholder} type="text" className={this.decorateCSS("input")} />
                  {buttonval && <button className={this.decorateCSS("button")}>{this.getPropValue("button")}</button>}
                </div>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default NotificationModal2;
