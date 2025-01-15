import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

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
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675828500655f8002ca53fbd?alt=media",
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
      displayer: "Button Text",
      value: "TAKE ME HOME",
    });

    this.addProp({
      type: "string",
      key: "404",
      displayer: "Error Code",
      value: "404",
    });
  }

  static getName(): string {
    return "HTTP Codes 2";
  }

  render() {
    const title = this.getPropValue("title");
    const label_404 = this.getPropValue("404");
    const home = this.castToString(this.getPropValue("home"));

    return (
      <Base.Container className={this.decorateCSS("container")} style={{ backgroundImage: `url(${this.getPropValue("backgroundImage")})` }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(this.castToString(label_404) || this.castToString(title)) && (
              <div className={this.decorateCSS("left-side")}>
                <div className={this.decorateCSS("left-text")}>
                  {this.castToString(label_404) && (
                    <div className={this.decorateCSS("error-message")}>
                      <div className={this.decorateCSS("text")}>{label_404}</div>
                    </div>
                  )}
                  {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                </div>
              </div>
            )}
            {home && (
              <div className={this.decorateCSS("right-side")}>
                <ComposerLink path={this.getPropValue("url")}>
                  <div className={this.decorateCSS("home")}>
                    <div className={this.decorateCSS("home-text")}>
                      <div>{this.getPropValue("home")}</div>
                    </div>
                  </div>
                </ComposerLink>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HTTP_CODES2;
