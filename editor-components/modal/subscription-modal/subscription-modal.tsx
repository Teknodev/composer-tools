import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./subscription-modal.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
      type: "object",
      key: "button1",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Yes",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Path",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "button2",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "No",
        },
      
      ],
    });
  }

  getName(): string {
    return "Subscription Modal";
  }

  render() {
    const button1 = this.getPropValue("button1");
    const button2 = this.getPropValue("button2");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <img
              alt=""
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
            <div className={this.decorateCSS("texts")}>
              <h2 className={this.decorateCSS("first-header")}>
                {this.getPropValue("subscription-title")}
              </h2>
              <span>{this.getPropValue("subscription-content")}</span>
            </div>
            <ComposerModalClose>
              <div className={this.decorateCSS("button-group")}>
                <ComposerLink path={this.getPropValue("button1")[1].value}>
                  <button className={this.decorateCSS("button")}>
                    {button1[0].value}
                  </button>
                </ComposerLink>

                <button className={this.decorateCSS("button")}>
                  {button2[0].value}
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
