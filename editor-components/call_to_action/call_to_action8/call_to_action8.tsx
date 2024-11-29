import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class CallToAction8Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Discover new perspectives in a vibrant and inclusive community.",
    });

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button",
      value: "Get Started",
    });
    this.addProp({
      type: "page",
      key: "button_url",
      displayer: "Button Url",
      value: ""
    })

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6683ec390181a1002c338033?alt=media&timestamp=1719921738698",
    });
  }

  getName(): string {
    return "Call To Action 8";
  }
  render() {
    const title = this.castToString(this.getPropValue("title"));
    const buttonText = this.castToString(this.getPropValue("button-text"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(title || buttonText) && (
              <div className={this.decorateCSS("title-box")}>
                {title && (
                  <Base.VerticalContent className={this.decorateCSS("title")}>
                    <Base.SectionTitle className={this.decorateCSS("text")}>{this.getPropValue("title")}</Base.SectionTitle>
                  </Base.VerticalContent>
                )}
                {buttonText && (
                  <ComposerLink path={this.getPropValue("button_url")}>
                    <div className={this.decorateCSS("button")}>
                      <Base.Button className={this.decorateCSS("button-element")}>
                        {this.getPropValue("button-text")}
                      </Base.Button>
                    </div>
                  </ComposerLink>
                )}
              </div>
            )}
            {this.getPropValue("image") && (
              <div className={(title || buttonText) ? this.decorateCSS("image-box") : this.decorateCSS("image-box-no-radius")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")} alt={this.getPropValue("image")} />
              </div>)
            }
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction8Page;