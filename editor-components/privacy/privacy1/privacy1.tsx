import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePrivacy } from "../../EditorComponent";
import styles from "./privacy1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Privacy1 extends BasePrivacy {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "label",
      displayer: "Label",
      value: "AI Website Builder",
    });

    this.addProp({
      type: "string",
      key: "headingStatic",
      displayer: "Heading Static",
      value: "Turn your idea into",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Input Placeholder",
      value: "Describe your dream website...",
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
    return "Privacy 1";
  }

  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("bg")} aria-hidden="true">
          <div className={this.decorateCSS("noise")} />
          <div className={this.decorateCSS("hline")} />
          <div className={this.decorateCSS("hline")} />
          <div className={this.decorateCSS("vline")} />
          <div className={this.decorateCSS("vline")} />
        </div>

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>

            {this.castToString(this.getPropValue("label")) && (
              <div className={this.decorateCSS("step")}>
                <span className={this.decorateCSS("step-line")} />
                <span className={this.decorateCSS("step-text")}>
                  {this.getPropValue("label")}
                </span>
              </div>
            )}

            {this.castToString(this.getPropValue("headingStatic")) && (
              <Base.SectionTitle className={this.decorateCSS("heading-static")}>
                {this.getPropValue("headingStatic")}
              </Base.SectionTitle>
            )}

            <div className={this.decorateCSS("heading-typewriter")} id="tw">
              <span className={this.decorateCSS("tw-text")}>a website</span>
              <span className={this.decorateCSS("tw-cursor")} />
            </div>

            <div className={this.decorateCSS("input-row")}>
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

            {this.castToString(this.getPropValue("hint")) && (
              <span className={this.decorateCSS("hint")}>
                {this.getPropValue("hint")}
              </span>
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Privacy1;