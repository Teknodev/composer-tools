import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
              value: "https://www.google.com/",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "icon",
      value: "IoIosArrowRoundForward",
    });

    this.addProp({
      type: "object",
      key: "right-column",
      displayer: "Right Column",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Right Image",
          value: "https://ela.bz/zappy/images/mockups/07.jpg",
        },
      ],
    });
  }

  getName(): string {
    return "Download-6";
  }

  render() {
    const leftcolumn = this.castToObject<{
      title: JSX.Element;
      description: JSX.Element;
      button: {
        button_text: JSX.Element;
        link: string;
      };
    }>("left-column");

    const rightcolumn = this.castToObject<{
      image: string;
    }>("right-column");

    const icon = this.getPropValue("icon");

    const isLeftColumnVisible =
      leftcolumn &&
      (this.castToString(leftcolumn.title) ||
        this.castToString(leftcolumn.description) ||
        leftcolumn.button);

    const isButtonEmpty =
      icon || this.castToString(leftcolumn.button.button_text);

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

              {isButtonEmpty && (
                <ComposerLink
                  path={leftcolumn.button.link}
                  isFullWidth={true}
                  className={this.decorateCSS("button")}
                >
                  <div className={this.decorateCSS("button-container")}>
                    <button className={this.decorateCSS("button")}>
                      {leftcolumn.button.button_text && (
                        <div className={this.decorateCSS("button_text")}>
                          {leftcolumn.button.button_text}
                        </div>
                      )}
                      {icon && (
                        <ComposerIcon
                          name={icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      )}
                    </button>
                  </div>
                </ComposerLink>
              )}
            </div>
          )}

          {isRightColumnVisible && (
            <div className={this.decorateCSS("right-column")}>
              <img
                className={this.decorateCSS("image")}
                src={rightcolumn.image}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Download6;
