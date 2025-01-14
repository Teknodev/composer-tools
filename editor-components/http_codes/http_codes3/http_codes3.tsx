import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HttpCodes3 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "PAGE NOT FOUND",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "The page you were looking for could not bu found. It might have been removed, renamed or did not exist in the first place.",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "GO TO HOME PAGE", "", null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "404",
      displayer: "Error Code",
      value: "ERROR 404",
    });
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "animationActive",
      displayer: "Animation Active",
      value: true,
    });
  }

  getName(): string {
    return "HTTP Codes 3";
  }

  render() {
    const error = this.getPropValue("404");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const animationActive = this.getPropValue("animationActive");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={`${this.decorateCSS("title-wrapper")} ${animationActive && this.decorateCSS("title-wrapper-animation")}`}>
              {this.getPropValue("lineActive") && <div className={this.decorateCSS("line-left")}></div>}
              {(this.castToString(title) || this.castToString(error)) && (
                <div className={this.decorateCSS("title")}>
                  {this.castToString(title) && <div className={this.decorateCSS("title-text")}>{title}</div>}
                  {this.castToString(error) && (
                    <div className={this.decorateCSS("error-message")}>
                      <div className={this.decorateCSS("text")}>{this.getPropValue("404")}</div>
                    </div>
                  )}
                </div>
              )}
              {this.getPropValue("lineActive") && <div className={this.decorateCSS("line-right")}></div>}
            </div>
            {this.castToString(description) && <div className={`${this.decorateCSS("description")} ${animationActive && this.decorateCSS("description-animation")}`}>{description}</div>}
            {this.castToString(button.text) && (
              <ComposerLink path={button.url}>
                <Base.Button buttonType={button.type} className={`${this.decorateCSS("button")} ${animationActive && this.decorateCSS("button-animation")}`}>
                  {button.text}
                </Base.Button>
              </ComposerLink>
            )}
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default HttpCodes3;
