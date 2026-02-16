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
      key: "cardBackground",
      displayer: "Card Background",
      value: false,
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
      value: "New Edge of the Theme Experience with Impreza",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")],
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
    const coloredBackground = this.getPropValue("coloredBackground");
    const cardBackground = this.getPropValue("cardBackground");

    const alignment = Base.getContentAlignment() || "left";
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${coloredBackground ? this.decorateCSS("colored-background") : ""} ${cardBackground ? this.decorateCSS("card-has-bg") : ""}`}
        data-alignment={alignment}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
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
         
            {(descriptionExist || visibleButtons.length > 0) && (
              <div className={this.decorateCSS("subtitle-button-row")}>
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {visibleButtons.map((item: Button, index: number) =>
                      this.castToString(item.text) ? (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      ) : null
                    )}
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
