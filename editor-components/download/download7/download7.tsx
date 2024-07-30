import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: string;
  url: string;
  buttonIcon: string;
};

class Download7 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3651b2f8a5b002ce69dbd?alt=media",
    });

    this.addProp({
      type: "string",
      key: "contentTitle",
      displayer: "Card Title",
      value: "DO IT NOW",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Join millions of users worldwide on Dash, where the power of social networking lies in your hands.",
    });

    this.addProp({
      type: "array",
      key: "buttonsLeft",
      displayer: "Button Left",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download for Android",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaAndroid",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });
    this.addProp({
      type: "array",
      key: "buttonsRight",
      displayer: "Button Right",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download for iOS",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaApple",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });

    this.addProp({
      type: "boolean",
      key: "enableAnimation",
      displayer: "Enable Animation",
      value: true,
    });
  }

  getName(): string {
    return "Download-7";
  }

  render() {
    const enableAnimation = this.getPropValue("enableAnimation");
    const contentTitle = this.castToString(this.getPropValue("contentTitle"));
    const hasContentTitle = contentTitle && contentTitle.length > 0;
    const description = this.castToString(this.getPropValue("description"));
    const hasDescription = description && description.length > 0;
    const hasButtonsLeft =
      this.castToObject<Button[]>("buttonsLeft").length > 0;
    const hasButtonsRight =
      this.castToObject<Button[]>("buttonsRight").length > 0;

    setTimeout(() => {
      if (enableAnimation) {
        const content = document.querySelector(
          `.${this.decorateCSS("content")}`
        );
        if (content) {
          const elements = content.querySelectorAll(
            `.${this.decorateCSS("contentTitle")}, .${this.decorateCSS(
              "description"
            )}, .${this.decorateCSS("button-groups")}`
          );

          elements.forEach((el, index) => {
            setTimeout(() => {
              (el as HTMLElement).style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      }
    }, 100);
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("page")}
            style={{ backgroundImage: `url(${this.getPropValue("image")})` }}
          >
            <div className={this.decorateCSS("content")}>
              {hasContentTitle && (
                <h6 className={this.decorateCSS("contentTitle")}>
                  {this.getPropValue("contentTitle")}
                </h6>
              )}
              {hasDescription && (
                <h3 className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </h3>
              )}
              {(hasButtonsLeft || hasButtonsRight) && (
                <div className={this.decorateCSS("button-groups")}>
                  {hasButtonsLeft && (
                    <div className={this.decorateCSS("button-group-left")}>
                      {this.castToObject<Button[]>("buttonsLeft").map(
                        (button: Button, index: number) => {
                          return (
                            <ComposerLink
                              key={`dw-7-btn-left-${index}`}
                              path={button.url}
                            >
                              <button className={this.decorateCSS("button")}>
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("button-icon"),
                                  }}
                                  name={button.buttonIcon}
                                />
                                {button.buttonText}
                              </button>
                            </ComposerLink>
                          );
                        }
                      )}
                    </div>
                  )}
                  {hasButtonsRight && (
                    <div className={this.decorateCSS("button-group-right")}>
                      {this.castToObject<Button[]>("buttonsRight").map(
                        (button: Button, index: number) => {
                          return (
                            <ComposerLink
                              key={`dw-7-btn-right-${index}`}
                              path={button.url}
                            >
                              <button className={this.decorateCSS("button")}>
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("button-icon"),
                                  }}
                                  name={button.buttonIcon}
                                />
                                {button.buttonText}
                              </button>
                            </ComposerLink>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download7;
