import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background_image",
      displayer: "Background Image",
      value:
        "https://c4.wallpaperflare.com/wallpaper/869/24/987/hand-writing-book-man-wallpaper-preview.jpg",
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
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "button_text",
          displayer: "Button Text",
          value: "Subscribe",
        },
        {
          type: "page",
          key: "link",
          displayer: "Button Link",
          value: "https://www.google.com/",
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoIosArrowRoundForward",
    });

    this.addProp({
      type: "object",
      key: "space",
      displayer: "Empty Space",
      value: [],
    });
  }

  getName(): string {
    return "Call To Action 6";
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const placeholder = this.getPropValue("placeholder", { as_string: true });
    const comment = this.getPropValue("comment", { as_string: true });

    const button = this.castToObject<{
      button_text: JSX.Element;
      link: string;
    }>("button");

    const icon = this.getPropValue("icon");

    const isButtonEmpty = icon || this.castToString(button.button_text);

    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("background_image")})`,
        }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action6-page")}>
            {title && (
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            )}

            {placeholder && (
              <input
                type="text"
                className={this.decorateCSS("placeholder")}
                placeholder={placeholder}
              />
            )}

            {comment && (
              <h3 className={this.decorateCSS("comment")}>
                {this.getPropValue("comment")}
              </h3>
            )}

            {isButtonEmpty && (
              <ComposerLink
                path={button.link}
                isFullWidth={true}
                className={this.decorateCSS("button-link")}
              >
                <div className={this.decorateCSS("button-container")}>
                  <button className={this.decorateCSS("button")}>
                    {button.button_text && (
                      <div className={this.decorateCSS("button_text")}>
                        {button.button_text}
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
        </div>
      </div>
    );
  }
}

export default CallToAction6Page;
