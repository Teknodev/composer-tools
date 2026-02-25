import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action23.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction23Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "coloredBackground",
      displayer: "Colored Background",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Sign up for web hosting today!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "infoLabel",
      displayer: "Label",
      value: "STARTING AT ONLY",
    });

    this.addProp({
      type: "string",
      key: "infoText",
      displayer: "Info Text",
      value: "$2.95/mo",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get started", "", null, null, "Primary"),]
    });
  }

  static getName(): string {
    return "Call To Action 23";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const infoLabel = this.castToString(this.getPropValue("infoLabel"));
    const infoText = this.castToString(this.getPropValue("infoText"));
    const coloredBackground = this.getPropValue("coloredBackground");
    const hasColoredBackground = !!coloredBackground;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${hasColoredBackground ? this.decorateCSS("has-background") : ""}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("main-row")}>
              {(subtitle || title || description) && (
                <div className={this.decorateCSS("header-group")}>
                  <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                    {subtitle && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {title && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {description && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                </div>
              )}

              {(infoLabel || infoText) && (
                <div className={this.decorateCSS("info-group")}>
                  {infoLabel && (
                    <Base.P className={this.decorateCSS("info-label")}>
                      {infoLabel}
                    </Base.P>
                  )}
                  {infoText && (
                    <Base.H3 className={this.decorateCSS("info-text")}>
                      {infoText}
                    </Base.H3>
                  )}
                </div>
              )}

              {buttons?.length > 0 && (
                <div className={this.decorateCSS("button-group")}>
                  {buttons.map((button: Button, index: number) =>
                    this.castToString(button.text) ? (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button className={this.decorateCSS("button")}>
                          <span className={this.decorateCSS("button-text")}>
                            {button.text}
                          </span>
                        </Base.Button>
                      </ComposerLink>
                    ) : null
                  )}
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction23Page;
