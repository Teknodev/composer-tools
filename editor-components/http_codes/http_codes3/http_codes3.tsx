import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class HTTP_CODES3 extends BaseHTTPCodes {
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

    this.addProp({
      type: "page",
      key: "url",
      displayer: "URL",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button Text",
      value: "GO TO HOME PAGE",
    });

    this.addProp({
      type: "string",
      key: "404",
      displayer: "Error Code",
      value: "ERROR 404",
    });
  }

  getName(): string {
    return "HTTP Codes 3";
  }

  render() {
    const error = this.getPropValue("404");
    const buttonText = this.getPropValue("button");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("title-wrapper")}>
              <div className={this.decorateCSS("line-left")}></div>
              <div className={this.decorateCSS("title")}>
                <div className={this.decorateCSS("title-text")}>
                  {title}
                </div>
                {this.castToString(error) &&
                  <div className={this.decorateCSS("error-message")}>
                    <div className={this.decorateCSS("text")}>
                      {this.getPropValue("404")}
                    </div>
                  </div>
                }
              </div>
              <div className={this.decorateCSS("line-right")}></div>
            </div>
            <div className={this.decorateCSS("description")}>{description}</div>
            {this.castToString(buttonText) && (
              <Base.Button className={this.decorateCSS("button")}>
                <ComposerLink path={this.getPropValue("url")}>{this.getPropValue("button")}</ComposerLink>
              </Base.Button>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HTTP_CODES3;
