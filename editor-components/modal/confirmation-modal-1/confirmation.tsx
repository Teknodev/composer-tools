import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./confirmation.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class ConfirmationModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "image",
      value:
        "https://raw.githubusercontent.com/Teknodev/composer-tools/d38bb0cff1de73e3d534104be7f3b9b7e622870b/editor-components/modal/confirmation-modal-1/image1-2.png",
    });

    this.addProp({
      type: "icon",
      key: "close-icon",
      displayer: "icon",
      value: "AiOutlineClose",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hang On a Sec !",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Ready to rock and roll? Confirm your choice, and let's make some magic happen!",
    });

    this.addProp({
      type: "object",
      key: "button-1",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "button1-text",
          displayer: "Button Text",
          value: "Count Me In",
        },
        {
          type: "page",
          key: "button-path",
          displayer: "Button Path",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "button-2",
      displayer: "Button 2",
      value: [
        {
          type: "string",
          key: "button2-text",
          displayer: "Button Text",
          value: "Let Me Rethink",
        },
      ],
    });
  }

  getName(): string {
    return "Confirmation Modal";
  }

  render() {
    const closeIcon = this.getPropValue("close-icon");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("box")}>
            <div className={this.decorateCSS("head-content")}>
              {this.getPropValue("image") && (
                <img
                  alt=""
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                ></img>
              )}
              <button className={this.decorateCSS("close-button")}>
                <ComposerIcon
                  name={closeIcon}
                  propsIcon={{
                    size: 18,
                    color: "--composer-font-color-primary",
                  }}
                />
              </button>
            </div>
            <div className={this.decorateCSS("bottom-content")}>
              {this.getPropValue("title") &&
                this.getPropValue("title") !== "" && (
                  <h1 className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </h1>
                )}
              {this.getPropValue("description") &&
                this.getPropValue("description") !== "" && (
                  <p className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </p>
                )}

              <ComposerModalClose>
                <div className={this.decorateCSS("buttons")}>
                  <ComposerLink path={this.getPropValue("button-1")[1].value}>
                    <button className={this.decorateCSS("button-1")}>
                      {this.getPropValue("button-1")[0].value}
                    </button>
                  </ComposerLink>

                  <button className={this.decorateCSS("button-2")}>
                    {this.getPropValue("button-2")[0].value}
                  </button>
                </div>
              </ComposerModalClose>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationModal;
