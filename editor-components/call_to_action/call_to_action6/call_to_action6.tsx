import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
};

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background_image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdaa2707399d002cb4130f?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get notified on latest updates and new releases.",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Place Holder",
      value: "Enter E-mail Address",
    });

    this.addProp({
      type: "string",
      key: "comment",
      displayer: "Comment",
      value: "* We promise we will never spam your account. *",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button Array",
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
              value: "Subscribe",
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
              displayer: "Icon",
              value: "IoIosArrowRoundForward",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "spaceLine",
      displayer: "Space Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "removeBackgroundColor",
      displayer: "Remove Background Color",
      value: false,
    });
  }

  getName(): string {
    return "Call To Action 6";
  }

  render() {
    const spaceLineExist = this.getPropValue("spaceLine");
    const removeBackground = this.getPropValue("removeBackgroundColor");

    const titleExist = this.getPropValue("title", { as_string: true });
    const placeholderExist = this.getPropValue("placeholder", {
      as_string: true,
    });
    const commentExist = this.getPropValue("comment", { as_string: true });

    const buttons = this.castToObject<Button[]>("buttons");
    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("background_image")})`,
        }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`
            ${this.decorateCSS("call-to-action6-page")}
            ${removeBackground ? this.decorateCSS("remove-background-color") : ""}
            `}
          >
            {titleExist && (
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            )}

            {spaceLineExist && (
              <div className={this.decorateCSS("space-container")}>
                <hr className={this.decorateCSS("space")} />
              </div>
            )}

            {placeholderExist && (
              <input
                type="text"
                className={this.decorateCSS("placeholder")}
                placeholder={placeholderExist}
              />
            )}

            {commentExist && (
              <h3 className={this.decorateCSS("comment")}>
                {this.getPropValue("comment")}
              </h3>
            )}
            {buttons?.length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((item: Button, index: number) => {
                  const textExist = this.castToString(item.text);

                  if (textExist || item.icon)
                    return (
                      <ComposerLink key={index} path={item.link}>
                        <div className={this.decorateCSS("button")}>
                          {textExist && (
                            <div className={this.decorateCSS("button_text")}>
                              {item.text}
                            </div>
                          )}
                          {item.icon && (
                            <div className={this.decorateCSS("icon-container")}>
                              <ComposerIcon
                                name={item.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </ComposerLink>
                    );
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction6Page;
