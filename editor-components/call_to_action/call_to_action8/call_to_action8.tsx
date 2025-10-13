import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6683ec390181a1002c338033?alt=media&timestamp=1719921738698",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"));
  }

  static getName(): string {
    return "Call To Action 8";
  }
  render() {

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const buttonText = this.castToString(button.text);
    const title = this.castToString(this.getPropValue("title"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(title || buttonText) && (
              <div className={this.decorateCSS("title-box")}>
                {title && (
                  <Base.VerticalContent className={this.decorateCSS("title")}>
                    <Base.SectionTitle className={this.decorateCSS("text")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  </Base.VerticalContent>
                )}
                {buttonText && (
                  <Base.Row className={this.decorateCSS("button")}>
                    <ComposerLink path={button.url}>
                      <Base.Button
                        buttonType={button.type}
                        className={this.decorateCSS("button-element")}
                      >
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
                  </Base.Row>
                )}
              </div>
            )}
            {this.getPropValue("image") && (
              <div
                className={this.decorateCSS("image-box")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt={this.getPropValue("image")}
                />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction8Page;
