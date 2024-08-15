import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
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
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "title",
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
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Button Text",
              value: "Download for Android",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "FaAndroid",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Button Text",
              value: "Download for iOS",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "FaApple",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 4,
      },
    });
  }

  getName(): string {
    return "Download-7";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.getPropValue("title", {
      as_string: true,
    });
    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<Button[]>("buttons");

    const conditionalOverlay = overlay
      ? {
          backgroundColor: `rgba(var(--composer-html-background-rgb), 0.3)`,
        }
      : {};

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("wrapper")}
            style={{ backgroundImage: `url(${this.getPropValue("image")})` }}
          >
            <div
              className={this.decorateCSS("content-container")}
              style={conditionalOverlay}
            >
              {titleExist && (
                <h2 className={this.decorateCSS("title")}>{title}</h2>
              )}
              {descExist && (
                <p className={this.decorateCSS("description")}>{description}</p>
              )}
              {buttons?.length > 0 && (
                <div className={this.decorateCSS("buttons-container")}>
                  {buttons.map((button: Button, index: number) => {
                    if (this.castToString(button.text))
                      return (
                        <ComposerLink key={index} path={button.link}>
                          <button className={this.decorateCSS("button")}>
                            {button.icon && (
                              <ComposerIcon
                                propsIcon={{
                                  className: this.decorateCSS("button-icon"),
                                }}
                                name={button.icon}
                              />
                            )}
                            {button.text}
                          </button>
                        </ComposerLink>
                      );
                    return null;
                  })}
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
