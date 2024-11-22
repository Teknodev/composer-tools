import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a793902f8a5b002ce6e47f?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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
      value: "Please pay premium by 05 Dec 2021, otherwise you will be charged 20% amount of your premium.",
    });
    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
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
    const exitIcon = this.getPropValue("exitIcon");
    const firstTitleExist = this.castToString(this.getPropValue("firstTitle"));
    const secondTitleExist = this.castToString(this.getPropValue("secondTitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const validButtons = buttons.filter((item: Button) => this.castToString(item.buttonText));

    if (!backgroundImage && !firstTitleExist && !secondTitleExist && !descriptionExist && validButtons.length === 0) {
      return null;
    }

    return (
      <Base.Container isModal="true" className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(exitIcon || secondTitleExist || descriptionExist) && (
              <div className={this.decorateCSS("top-wrapper")}>
                {exitIcon && (
                  <div className={this.decorateCSS("exit-icon")}>
                    <ComposerModalClose>
                      <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
                    </ComposerModalClose>
                  </div>
                )}
                {(backgroundImage || firstTitleExist) && (
                  <div className={`${this.decorateCSS("wrapper")} ${!backgroundImage && this.decorateCSS("without-image")}`}>
                    {backgroundImage && <img className={this.decorateCSS("image")} src={backgroundImage} />}
                    <Base.H1 className={this.decorateCSS("first-header")}>{this.getPropValue("firstTitle")}</Base.H1>
                    {overlay && <div className={this.decorateCSS("overlay")}></div>}
                  </div>
                )}
              </div>
            )}
            {(secondTitleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("second-div")}>
                {secondTitleExist && <Base.H1 className={this.decorateCSS("second-header")}>{this.getPropValue("secondTitle")}</Base.H1>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("notice-content")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}

            {validButtons.length > 0 && (
              <div className={this.decorateCSS("button-background")}>
                {validButtons.map((item: Button) => (
                  <ComposerLink path={item.link}>
                    <div className={`${this.decorateCSS("button")} `}>{item.buttonText}</div>
                  </ComposerLink>
                ))}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default NotificationModal1;
