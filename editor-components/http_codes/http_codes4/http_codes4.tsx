import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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
    const titleWords = this.castToString(this.getPropValue("title"));
    const description_words = this.getPropValue("description");
    const descriptionWords = description_words.props.html;
    const buttons = this.castToObject<any[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(titleWords || descriptionWords || (buttons?.length > 0)) && (
              <div className={this.decorateCSS("left-side")}>
                {titleWords && <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>}
                {descriptionWords && <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>}

                {(buttons?.length > 0) && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: any, index: number) => {
                      const buttonTextExist = this.castToString(button.text);
                      return (
                        <ComposerLink path={button.link}>
                          <div key={index} className={this.decorateCSS("button")}>
                            {button.icon && (
                              <ComposerIcon name={button.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                            )}
                            {buttonTextExist && (
                              <div className={this.decorateCSS("button-text")}> {button.text}</div>
                            )}
                          </div>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {this.castToString(this.getPropValue("right")) && (
              <div className={this.decorateCSS("right-side")}>
                <div className={this.decorateCSS("text")}>{this.getPropValue("right")}</div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HTTP_CODES4;
