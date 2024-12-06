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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6708e99597fe08002c753614?alt=media&timestamp=1728637379799",
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
      <Base.Container className={this.decorateCSS("container")} style={{ backgroundImage: `url(${this.getPropValue("backgroundImage")})` }} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
