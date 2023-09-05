import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./terms-of-use.module.scss";

class TermsOfUseModal extends BaseModal {
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
      key: "terms-of-use-title",
      value: "Acceptance of Terms",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "term-of-use-content",
      value: "By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms, as well as any additional terms and conditions provided within our services.",
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "Close",
    });
  }

  getName(): string {
    return "Terms of Use Modal";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            <img
              alt=""
              className={this.decorateCSS("image")}
              
              src={this.getPropValue("image")}
            ></img>
            <h2 className={this.decorateCSS("first-header")} >
              {this.getPropValue("terms-of-use-title")}
            </h2>
            <span>{this.getPropValue("term-of-use-content")}</span>
            <ComposerModalClose>
              <button className={this.decorateCSS("button")} >
                {this.getPropValue("button-text")}
              </button>
            </ComposerModalClose>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsOfUseModal;
