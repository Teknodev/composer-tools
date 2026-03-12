import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePrivacy } from "../../EditorComponent";
import styles from "./privacy3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Privacy3 extends BasePrivacy {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "eyebrow",
      displayer: "Eyebrow Label",
      value: "AI Website Builder",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What kind of website",
    });

    this.addProp({
      type: "string",
      key: "titleEmphasis",
      displayer: "Title Emphasis",
      value: "should we build for you?",
    });

    this.addProp({
      type: "string",
      key: "inputLabel",
      displayer: "Input Label",
      value: "Your prompt",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Input Placeholder",
      value: "e.g. A bold agency site with dark theme and animations",
    });

    this.addProp({
      type: "string",
      key: "hint",
      displayer: "Hint Text",
      value: "Press Enter to generate",
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "Generate", "", null, null, "Primary")
    );
  }

  static getName(): string {
    return "Privacy 3";
  }

  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("bg")} aria-hidden="true">
          <div className={this.decorateCSS("bg-strip")} />
          <div className={this.decorateCSS("dot-grid")} />
        </div>

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>

            {this.castToString(this.getPropValue("eyebrow")) && (
              <span className={this.decorateCSS("eyebrow")}>
                {this.getPropValue("eyebrow")}
              </span>
            )}

            {(this.castToString(this.getPropValue("title")) ||
              this.castToString(this.getPropValue("titleEmphasis"))) && (
              <Base.SectionTitle className={this.decorateCSS("heading")}>
                {this.castToString(this.getPropValue("title")) && (
                  <span className={this.decorateCSS("heading-plain")}>
                    {this.getPropValue("title")}
                  </span>
                )}
                {this.castToString(this.getPropValue("titleEmphasis")) && (
                  <>
                    <br />
                    <strong className={this.decorateCSS("heading-strong")}>
                      {this.getPropValue("titleEmphasis")}
                    </strong>
                  </>
                )}
              </Base.SectionTitle>
            )}

            <div className={this.decorateCSS("input-area")}>
              {this.castToString(this.getPropValue("inputLabel")) && (
                <p className={this.decorateCSS("input-label")}>
                  {this.getPropValue("inputLabel")}
                </p>
              )}

              <div className={this.decorateCSS("input-box")}>
                <input
                  type="text"
                  className={this.decorateCSS("input")}
                  placeholder={
                    this.castToString(this.getPropValue("placeholder")) || ""
                  }
                  maxLength={300}
                />
                {this.castToString(button.text) && (
                  <ComposerLink path={button.url}>
                    <Base.Button
                      className={this.decorateCSS("button")}
                      buttonType={button.type}
                    >
                      <Base.P className={this.decorateCSS("button-text")}>
                        {button.text}
                      </Base.P>
                      <svg
                        className={this.decorateCSS("button-icon")}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Base.Button>
                  </ComposerLink>
                )}
              </div>

              <div className={this.decorateCSS("meta")}>
                {this.castToString(this.getPropValue("hint")) && (
                  <span className={this.decorateCSS("meta-hint")}>
                    {this.getPropValue("hint")}
                  </span>
                )}
                <span className={this.decorateCSS("meta-count")} />
              </div>
            </div>

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Privacy3;