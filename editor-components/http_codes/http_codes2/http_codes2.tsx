import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HTTP_CODES2 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "PAGE NOT FOUND",
    });

    this.addProp({
      type: "page",
      key: "url",
      displayer: "URL",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "home",
      displayer: "home",
      value: "TAKE ME HOME",
    });

    this.addProp({
      type: "string",
      key: "404",
      displayer: "404",
      value: "404",
    });
  }

  getName(): string {
    return "HTTP Codes 2";
  }

  render() {
    const title = this.getPropValue("title");
    const label_404 = this.getPropValue("404");
    const home = this.getPropValue("home");
    const homeText = home.props.html;

    const words = title.props.html.split(" ");
    const errorCode = label_404.props.html;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-side")}>
              <div>
                {words.length > 0 ? (
                  <>
                    <div className={this.decorateCSS("title")}>{words[0]}</div>
                    <div className={this.decorateCSS("error-code")}>
                      {errorCode.length > 0 && <div className={this.decorateCSS("label-404")}>{errorCode}</div>}
                      <div className={this.decorateCSS("title")}>{words[1]}</div>
                    </div>
                    <div className={this.decorateCSS("title")}>{words.slice(2).join(" ")}</div>
                  </>
                ) : (
                  <span>No title provided</span>
                )}
              </div>
            </div>
            {homeText && (
              <div className={this.decorateCSS("home")}>
                <div className={this.decorateCSS("home-text")}>
                  <ComposerLink path={this.getPropValue("url")}>
                    <span>{this.getPropValue("home")}</span>
                  </ComposerLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HTTP_CODES2;
