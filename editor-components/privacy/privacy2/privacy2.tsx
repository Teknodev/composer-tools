import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePrivacy } from "../../EditorComponent";
import styles from "./privacy2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Privacy2 extends BasePrivacy {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge Text",
      value: "AI Website Builder",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Build your website",
    });

    this.addProp({
      type: "string",
      key: "titleEmphasis",
      displayer: "Title Emphasis",
      value: "with one prompt",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "No code. No design skills. Just describe what you want.",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Input Placeholder",
      value: "A minimal portfolio for a UI designer...",
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
    return "Privacy 2";
  }

  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("bg")} aria-hidden="true">
          <div className={this.decorateCSS("hex") + " " + this.decorateCSS("hex-1")}>
            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,10 280,80 280,220 150,290 20,220 20,80" stroke="#88e788" strokeWidth="1" />
            </svg>
          </div>
          <div className={this.decorateCSS("hex") + " " + this.decorateCSS("hex-2")}>
            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,10 280,80 280,220 150,290 20,220 20,80" stroke="#88e788" strokeWidth="1" />
            </svg>
          </div>
          <div className={this.decorateCSS("hex") + " " + this.decorateCSS("hex-3")}>
            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,10 280,80 280,220 150,290 20,220 20,80" stroke="#88e788" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>

            {this.castToString(this.getPropValue("badge")) && (
              <div className={this.decorateCSS("badge")}>
                <span className={this.decorateCSS("badge-dot")} />
                <span className={this.decorateCSS("badge-text")}>
                  {this.getPropValue("badge")}
                </span>
              </div>
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
                    <span className={this.decorateCSS("heading-em")}>
                      {this.getPropValue("titleEmphasis")}
                    </span>
                  </>
                )}
              </Base.SectionTitle>
            )}

            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
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
                    <svg
                      className={this.decorateCSS("button-icon")}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8h12M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Base.Button>
                </ComposerLink>
              )}
            </div>

            <div className={this.decorateCSS("footer")}>
              {this.castToString(this.getPropValue("hint")) && (
                <span className={this.decorateCSS("hint")}>
                  {this.getPropValue("hint")}
                </span>
              )}
              <div className={this.decorateCSS("dots")}>
                <span className={this.decorateCSS("dot") + " " + this.decorateCSS("dot-active")} />
                <span className={this.decorateCSS("dot")} />
                <span className={this.decorateCSS("dot")} />
              </div>
            </div>

          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Privacy2;