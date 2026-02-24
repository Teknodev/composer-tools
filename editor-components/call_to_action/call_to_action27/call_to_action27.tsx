import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action27.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction27 extends BaseCallToAction {
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
      value: "New Edge of the Theme Experience with Blinkpage",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Credibly innovate granular internal or \"organic\" sources whereas high standards in web-readiness."

    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")]

    });
  }

  static getName(): string {
    return "Call To Action 27";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons") || [];
    const visibleButtons = buttons.filter((btn) => this.castToString(btn.text));
    const hasBackground = this.getPropValue("coloredBackground");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${hasBackground ? this.decorateCSS("has-background") : ""}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(subtitleExist || titleExist) && (
              <div className={this.decorateCSS("header-group")}>
                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                  {subtitleExist && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {this.getPropValue("subtitle")}
                    </Base.SectionSubTitle>
                  )}
                  {titleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}
                </Base.VerticalContent>
              </div>
            )}
            {(descriptionExist || visibleButtons.length > 0) && (
              <div className={this.decorateCSS("footer-group")}>
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("button-group")}>
                    {visibleButtons.map((item: Button, index: number) => (
                      <ComposerLink key={`button-${index}`} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction27;