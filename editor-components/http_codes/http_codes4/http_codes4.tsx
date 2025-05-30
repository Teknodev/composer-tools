import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HttpCodes4 extends BaseHTTPCodes {
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
      value: [INPUTS.BUTTON("button", "Button", "Go to Home page", "", "GoArrowLeft", null, "Link")],
    });

    this.addProp({
      type: "string",
      key: "right",
      displayer: "Right Text",
      value: "404",
    });
  }

  static getName(): string {
    return "HTTP Codes 4";
  }

  render() {
    const titleWords = this.castToString(this.getPropValue("title"));
    const description_words = this.getPropValue("description");
    const descriptionWords = this.castToString(description_words);
    const buttons = this.castToObject<any[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(titleWords || descriptionWords || buttons?.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS("left-side")}>
                {titleWords && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionWords && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}

                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: any, index: number) => {
                      const buttonTextExist = this.castToString(button.text);
                      const buttonExist = buttonTextExist || button.icon;
                      return (
                        buttonExist && (
                          <ComposerLink path={button.link}>
                            <Base.Button buttonType={button.type} key={index} className={this.decorateCSS("button")}>
                              {button.icon && <Base.Icon name={button.icon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                              {buttonTextExist && <div className={this.decorateCSS("button-text")}> {button.text}</div>}
                            </Base.Button>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
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

export default HttpCodes4;
