import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type LeftCol = {
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  button_text: JSX.Element;
  link: string;
  icon: string;
};

type RightCol = {
  image: string;
};

class Download6 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "left-column",
      displayer: "Left Column",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Create amazing posts and share with the world.",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        },
      ],
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
              key: "button_text",
              displayer: "Button Text",
              value: "Download Now",
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
              value: "IoIosArrowRoundForward",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "right-column",
      displayer: "Right Column",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdb43307399d002cb4160b?alt=media",
        },
      ],
    });
  }

  getName(): string {
    return "Download-6";
  }

  render() {
    const leftcolumn = this.castToObject<LeftCol>("left-column");
    const rightcolumn = this.castToObject<RightCol>("right-column");
    const buttons = this.castToObject<Button[]>("buttons");

    const isLeftColumnVisible =
      this.castToString(leftcolumn.title) ||
      this.castToString(leftcolumn.description) ||
      buttons?.length > 0;

    const isRightColumnVisible = rightcolumn.image;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {isLeftColumnVisible && (
            <div className={this.decorateCSS("left-column")}>
              {leftcolumn.title && (
                <h1 className={this.decorateCSS("title")}>
                  {leftcolumn.title}
                </h1>
              )}

              {leftcolumn.description && (
                <h3 className={this.decorateCSS("description")}>
                  {leftcolumn.description}
                </h3>
              )}

              {buttons?.length > 0 && (
                <div className={this.decorateCSS("buttons-container")}>
                  {buttons.map((button: Button, index: number) => {
                    const buttonTextExist = this.castToString(
                      button.button_text,
                    );

                    const buttonExist = button.icon || buttonTextExist;

                    if (buttonExist)
                      return (
                        <ComposerLink
                          key={index}
                          path={button.link}
                          isFullWidth={false}
                        >
                          <button className={this.decorateCSS("button")}>
                            {buttonTextExist && (
                              <div className={this.decorateCSS("button_text")}>
                                {button.button_text}
                              </div>
                            )}
                            {button.icon && (
                              <ComposerIcon
                                name={button.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            )}
                          </button>
                        </ComposerLink>
                      );
                    return null;
                  })}
                </div>
              )}
            </div>
          )}

          {isRightColumnVisible && (
            <div className={this.decorateCSS("right-column")}>
              <img
                className={this.decorateCSS("image")}
                src={rightcolumn.image}
                alt={"download"}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Download6;
