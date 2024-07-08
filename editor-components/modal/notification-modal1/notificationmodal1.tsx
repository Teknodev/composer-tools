import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./notificationmodal1.module.scss";

type ButtonValues = {
  buttonTitle: string;
  urlText: string;
};

class NotificationModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

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
        "Please pay premium by"+ <span className={styles.highlight}>"05  2021"</span>+ "otherwise you will be charged 20% amount of your premium.",
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
              key: "url",
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
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "imageProps",
      displayer: "Images",
      additionalParams: {
        maxElementCount: 1,
      },
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "firstTitle",
              displayer: "FirstTitle",
              value: "Endowment premium Pay",
            },
            {
              type: "image",
              key: "background_image",
              displayer: "Image",
              value:
                "https://c4.wallpaperflare.com/wallpaper/149/547/831/violet-gradient-abstract-wallpaper-preview.jpg",
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
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<any[]>("imageProps").map((item: any, index: number) => (
              <div key={index} className={this.decorateCSS("image-container")}>
                <img
                  className={this.decorateCSS("image")}
                  src={item.background_image}
                />
                <h2 className={this.decorateCSS("first-header")}>
                  {item.firstTitle}
                </h2>
              </div>
            ))}
            <div>
              <h3 className={this.decorateCSS("second-header")}>
                {this.getPropValue("secondTitle")}
              </h3>
              <p className={this.decorateCSS("notice-content")}>
                {this.getPropValue("description")}
              </p>
            </div>
            <div className={this.decorateCSS("button-background")}>
              {this.castToObject<any[]>("buttonprops").map((item: any, index: number) => (
                <ComposerModalClose key={index}>
                  <a href={item.url} className={this.decorateCSS("button")}>
                    {item.buttonText}
                  </a>
                </ComposerModalClose>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationModal1;