import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./subscription-modal.module.scss";

class SubscriptionModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://picsum.photos/200",
    });
    this.addProp({
      type: "string",
      key: "subscription-title",
      value: "Subscription agreement",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "subscription-content",
      value: "Do you want to accept the subscription agreement?",
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "Yes",
    });
    this.addProp({
      type: "string",
      key: "button-text2",
      displayer: "Button Text2",
      value: "No",
    });
  }

  getName(): string {
    return "Subscription Modal";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            <img
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
            <h2 className={this.decorateCSS("first-header")} >
              {this.getPropValue("subscription-title")}
            </h2>
            <span>{this.getPropValue("subscription-content")}</span>
            <ComposerModalClose>
              <div className={this.decorateCSS("button-group")}>
              <button className={this.decorateCSS("button")} >
                {this.getPropValue("button-text")}
              </button>
              <button className={this.decorateCSS("button")} >
                {this.getPropValue("button-text2")}
              </button>
              </div>
            </ComposerModalClose>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionModal;
