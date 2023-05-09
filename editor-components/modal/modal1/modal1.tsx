import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseModal } from "../../EditorComponent";
import styles from "./modal1.module.scss";

class ModalComponent1 extends BaseModal {
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
      value: PlaceholderFiller.string(),
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "term-of-use-content",
      value: PlaceholderFiller.extraLongText(),
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
    return "Modal 1";
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

export default ModalComponent1;
