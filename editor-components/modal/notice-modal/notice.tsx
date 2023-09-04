import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./notice.module.scss";

class Notice extends BaseModal {
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
      key: "notice-title",
      value: "Important Announcement",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "notice-content",
      value: "Dear users, we would like to inform you about an important announcement. Due to a scheduled maintenance work on our website, there will be a temporary interruption between 22:00 and 23:59 on June 8, 2023. Please take note that there might be limitations in accessing our website during this period. This planned maintenance is being carried out to enhance the performance and user experience of our website. As a team, we are constantly working to provide you with a better service, and this maintenance work is part of our efforts.",
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "Okay",
    });
  }

  getName(): string {
    return "Notice Modal";
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
              {this.getPropValue("notice-title")}
            </h2>
            <span>{this.getPropValue("notice-content")}</span>
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

export default Notice;
