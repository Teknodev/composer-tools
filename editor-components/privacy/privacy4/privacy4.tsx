import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePrivacy, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./privacy4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Privacy4 extends BasePrivacy {
  private handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    this.setComponentState("mouseX", e.clientX - rect.left);
    this.setComponentState("mouseY", e.clientY - rect.top);
    this.setComponentState("inside", true);
  };

  private handleMouseLeave = () => {
    this.setComponentState("inside", false);
  };

  constructor(props?: any) {
    super(props, styles);

    this.setComponentState("mouseX", -999);
    this.setComponentState("mouseY", -999);
    this.setComponentState("inside", false);

    this.addProp({
      type: "string",
      key: "label",
      displayer: "Label",
      value: "AI Website Builder",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Describe your website,",
    });

    this.addProp({
      type: "string",
      key: "titleEmphasis",
      displayer: "Title Emphasis",
      value: "we'll build it instantly",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Input Placeholder",
      value: "A modern portfolio for a photographer...",
    });

    this.addProp({
      type: "string",
      key: "hint",
      displayer: "Hint Text",
      value: "Press Enter to generate",
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "Generate", "", "FaArrowRight", null, "Tertiary")
    );
  }

  static getName(): string {
    return "Privacy 4";
  }

  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");
    const mouseX: number = this.getComponentState("mouseX");
    const mouseY: number = this.getComponentState("mouseY");
    const inside: boolean = this.getComponentState("inside");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        {inside && (
          <div
            className={this.decorateCSS("mouse-glow")}
            style={{ left: mouseX, top: mouseY }}
            aria-hidden="true"
          />
        )}
        <div className={this.decorateCSS("rings-wrapper")} aria-hidden="true">
          <div className={this.decorateCSS("ring") + " " + this.decorateCSS("ring-1")} />
          <div className={this.decorateCSS("ring") + " " + this.decorateCSS("ring-2")} />
          <div className={this.decorateCSS("ring") + " " + this.decorateCSS("ring-3")} />
          <div className={this.decorateCSS("center-glow")} />
          <div className={this.decorateCSS("grid-bg")} />
          <div className={this.decorateCSS("corner") + " " + this.decorateCSS("corner-tl")} />
          <div className={this.decorateCSS("corner") + " " + this.decorateCSS("corner-tr")} />
          <div className={this.decorateCSS("corner") + " " + this.decorateCSS("corner-bl")} />
          <div className={this.decorateCSS("corner") + " " + this.decorateCSS("corner-br")} />
        </div>

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>

            {this.castToString(this.getPropValue("label")) && (
              <Base.P className={this.decorateCSS("label")}>
                {this.getPropValue("label")}
              </Base.P>
            )}

            {(this.castToString(this.getPropValue("title")) ||
              this.castToString(this.getPropValue("titleEmphasis"))) && (
              <div className={this.decorateCSS("heading")}>
                {this.castToString(this.getPropValue("title")) && (
                  <Base.H1 className={this.decorateCSS("heading-primary")}>
                    {this.getPropValue("title")}
                  </Base.H1>
                )}
                {this.castToString(this.getPropValue("titleEmphasis")) && (
                  <Base.H1 className={this.decorateCSS("heading-accent")}>
                    {this.getPropValue("titleEmphasis")}
                  </Base.H1>
                )}
              </div>
            )}

            <div className={this.decorateCSS("input-wrapper")}>
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
                      {this.castToString(button.text) &&
                        <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                        </Base.P>
                      }
                      {(button.icon as any) && (
                        <Base.Media
                          value={button.icon as TypeMediaInputValue}
                          className={this.decorateCSS("button-icon")}
                        />
                      )}
                    </Base.Button>
                  </ComposerLink>
                )}
              </div>
            </div>

            {this.castToString(this.getPropValue("hint")) && (
              <Base.P className={this.decorateCSS("hint")}>
                {this.getPropValue("hint")}
              </Base.P>
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Privacy4;