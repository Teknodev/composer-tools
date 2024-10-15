import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HTTP_CODES4 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Accept our apologies!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "The page you are looking for does not exist or the page may have moved.",
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
              displayer: "Text",
              value: "Go to Home page",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GoArrowLeft",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "right",
      displayer: "Right Text",
      value: "404",
    });
  }

  getName(): string {
    return "HTTP Codes 4";
  }

  render() {
    const title_words = this.getPropValue("title");
    const titleWords = title_words.props.html;
    const description_words = this.getPropValue("description");
    const descriptionWords = description_words.props.html;

    const buttons = this.castToObject<any[]>("buttons");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-side")}>
              {titleWords && <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>}
              {descriptionWords && <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>}

              {buttons?.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: any, index: number) => {
                    const buttonTextExist = this.castToString(button.text);

                    if (buttonTextExist || button.icon)
                      return (
                        <ComposerLink path={button.link}>
                          <div key={index} className={this.decorateCSS("button")}>
                            <div className={this.decorateCSS("icon")}> {button.icon && <ComposerIcon name={button.icon} />}</div>
                            <div className={this.decorateCSS("button-text")}> {buttonTextExist && button.text}</div>
                          </div>
                        </ComposerLink>
                      );

                    return <></>;
                  })}
                </div>
              )}
            </div>
            <div className={this.decorateCSS("right-side")}>
              <div className={this.decorateCSS("text")}>{this.getPropValue("right")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HTTP_CODES4;
