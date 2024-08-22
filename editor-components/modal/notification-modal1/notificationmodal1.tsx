import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type Button = {
  buttonText: JSX.Element;
  link: string;
};

class NotificationModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background_image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a793902f8a5b002ce6e47f?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "firstTitle",
      displayer: "First Title",
      value: "Endowment premium Pay",
    });

    this.addProp({
      type: "string",
      key: "secondTitle",
      displayer: "SecondTitle",
      value: "2 Days remaining",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Please pay premium by 05 Dec 2021, otherwise you will be charged 20% amount of your premium.",
    });
    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value:
        "IoCloseSharp"
    });

    this.addProp({
      type: "array",
      key: "buttonprops",
      displayer: "Button",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Pay Now",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "NotificationModal1";
  }

  render() {
    const backgroundImage = this.getPropValue("background_image");
    const overlay = this.getPropValue("overlay");
    const firstTitle = this.castToString(this.getPropValue("firstTitle"));
    const isTitleExist = this.castToString(this.getPropValue("secondTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const buttonProps = this.castToObject<Button[]>("buttonprops");
    const validButtons = buttonProps.filter((item: Button) => this.castToString(item.buttonText));

    console.log("backgroundImage  " + backgroundImage)
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("exit-icon")}>
              <ComposerModalClose>
                <a href={""} >
                  <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon"), style: { width: "25px", height: "25px" } }} name={this.getPropValue("exitIcon")} />
                </a>
              </ComposerModalClose>
            </div>
            {(backgroundImage || firstTitle) && (
              <div className={backgroundImage || overlay ? this.decorateCSS("image-container") : ""}>
                {backgroundImage && (
                  <>
                    <img
                      className={this.decorateCSS("image")}
                      src={backgroundImage}
                    />
                    <h2 className={this.decorateCSS("first-header")}>
                      {this.getPropValue("firstTitle")}
                    </h2>
                  </>
                )}

                {overlay && backgroundImage && (
                  <div className={this.decorateCSS("overlay")}></div>
                )}

                {!backgroundImage && overlay && (
                  <div className={this.decorateCSS("overlay2")}>
                    <h2 className={this.decorateCSS("first-header")}>
                      {this.getPropValue("firstTitle")}
                    </h2>
                  </div>
                )}

                {!backgroundImage && !overlay && (
                  <h2 className={this.decorateCSS("first-header2")}>
                    {this.getPropValue("firstTitle")}
                  </h2>
                )}
              </div>
            )}

            <div>
              {isTitleExist &&
                <h3 className={this.decorateCSS("second-header")}>
                  {this.getPropValue("secondTitle")}
                </h3>}
              {isDescriptionExist &&
                <p className={this.decorateCSS("notice-content")}>
                  {this.getPropValue("description")}
                </p>}
            </div>

            {validButtons.length > 0 && (
              <div className={this.decorateCSS("button-background")}>
                {validButtons.map((item: Button, index: number) => (
                  <ComposerModalClose key={index}>
                    <a href={item.link} className={this.decorateCSS("button")}>
                      {item.buttonText}
                    </a>
                  </ComposerModalClose>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationModal1;
