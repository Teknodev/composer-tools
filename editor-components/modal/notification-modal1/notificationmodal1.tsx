import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal1.module.scss";


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
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Visit Page",
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
    const isTitleExist = this.castToString(this.getPropValue("secondTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("image-container")}>
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
              {overlay && (
                <div className={this.decorateCSS("overlay")}></div>
              )}
              {!backgroundImage && overlay && (
                <div className={this.decorateCSS("overlay2")}>
                 <h2 className={this.decorateCSS("first-header")}>
                  {this.getPropValue("firstTitle")}
                </h2> 
                </div>
              )}
            </div>
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
            <div className={this.decorateCSS("button-background")}>
            {this.castToObject<Button[]>("buttonprops").map((item: Button, index: number) => {
                if(this.castToString(item.buttonText))
                  return (
                  <ComposerModalClose key={index}>
                    <a href={item.link} className={this.decorateCSS("button")}>
                      {item.buttonText}
                    </a>
                  </ComposerModalClose>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationModal1;
