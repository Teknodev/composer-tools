import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePrivacy } from "../../EditorComponent";
import styles from "./privacy5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Privacy5 extends BasePrivacy {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "tickerText",
      displayer: "Ticker Text",
      value: "AI Website Builder — No Code Required — Launch in Seconds — Powered by AI —",
    });

    this.addProp({
      type: "string",
      key: "eyebrow",
      displayer: "Eyebrow Label",
      value: "Website Builder",
    });

    this.addProp({
      type: "string",
      key: "titleLine1",
      displayer: "Title Line 1",
      value: "Build",
    });

    this.addProp({
      type: "string",
      key: "titleLine2",
      displayer: "Title Line 2",
      value: "anything",
    });

    this.addProp({
      type: "string",
      key: "titleAccent",
      displayer: "Title Accent",
      value: "fast.",
    });

    this.addProp({
      type: "string",
      key: "tagline",
      displayer: "Tagline",
      value: "Describe your idea in plain English. We'll handle the rest.",
    });

    this.addProp({
      type: "string",
      key: "inputLabel",
      displayer: "Input Label",
      value: "Describe your website",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Input Placeholder",
      value: "e.g. A dark SaaS landing page for a design tool...",
    });

    this.addProp({
      type: "string",
      key: "hint",
      displayer: "Hint Text",
      value: "Press Enter to generate",
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "Generate Website", "", null, null, "Primary")
    );
  }

  static getName(): string {
    return "Privacy 5";
  }

  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");

    const tickerContent = this.castToString(this.getPropValue("tickerText"));

    return (
      <Base.Container className={this.decorateCSS("container")}>

        {tickerContent && (
          <div className={this.decorateCSS("ticker-wrap")}>
            <div className={this.decorateCSS("ticker")}>
              <div className={this.decorateCSS("ticker-track")}>
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className={this.decorateCSS("ticker-item")}>
                    <span className={this.decorateCSS("ticker-dot")} />
                    {tickerContent}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={this.decorateCSS("main")}>

          {/* LEFT */}
          <div className={this.decorateCSS("left")}>
            <span className={this.decorateCSS("big-num")} aria-hidden="true">
              AI
            </span>

            {this.castToString(this.getPropValue("eyebrow")) && (
              <p className={this.decorateCSS("eyebrow")}>
                {this.getPropValue("eyebrow")}
              </p>
            )}

            <Base.SectionTitle className={this.decorateCSS("heading")}>
              {this.castToString(this.getPropValue("titleLine1")) && (
                <span className={this.decorateCSS("heading-line")}>
                  {this.getPropValue("titleLine1")}
                </span>
              )}
              {this.castToString(this.getPropValue("titleLine2")) && (
                <span className={this.decorateCSS("heading-line")}>
                  {this.getPropValue("titleLine2")}
                </span>
              )}
              {this.castToString(this.getPropValue("titleAccent")) && (
                <span className={this.decorateCSS("heading-accent")}>
                  {this.getPropValue("titleAccent")}
                </span>
              )}
            </Base.SectionTitle>

            {this.castToString(this.getPropValue("tagline")) && (
              <Base.SectionDescription className={this.decorateCSS("tagline")}>
                {this.getPropValue("tagline")}
              </Base.SectionDescription>
            )}
          </div>

          {/* RIGHT */}
          <div className={this.decorateCSS("right")}>

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
            </div>

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
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8h12M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Base.Button>
              </ComposerLink>
            )}

            {this.castToString(this.getPropValue("hint")) && (
              <p className={this.decorateCSS("hint")}>
                {this.getPropValue("hint")}
              </p>
            )}

          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Privacy5;