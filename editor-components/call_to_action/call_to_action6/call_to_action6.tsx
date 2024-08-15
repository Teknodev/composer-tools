import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { array } from "yup";

type ButtonItem = {
  buttonText: JSX.Element;
  link: string;
  icon: string;
}

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
      key: "arrayItem",
      displayer: "Button Array",
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
              value: "Subscribe",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosArrowRoundForward",
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
    return "Call To Action 6";
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const placeholder = this.getPropValue("placeholder", { as_string: true });
    const comment = this.getPropValue("comment", { as_string: true });
    const arrayItem = this.castToObject<ButtonItem[]>("arrayItem");
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
            {title &&
              <div className={this.decorateCSS("Space")}>
                <hr className={this.decorateCSS("space")} />
              </div>}
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
            {arrayItem?.length > 0 && (
              <div className={this.decorateCSS("buttonS")}>
                {arrayItem.map((item: ButtonItem, index: number) => (
                  <ComposerLink key={index} path={item.link}>
                    {(this.castToString(item.buttonText) || item.icon) &&
                      <div className={this.decorateCSS("button")}>
                        <div className={this.decorateCSS("button_text")}>
                          {item.buttonText}
                        </div>
                        <div className={this.decorateCSS("icon-container")}>
                          <ComposerIcon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon")
                            }}
                          />
                        </div>
                      </div>
                    }
                  </ComposerLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction6Page;
