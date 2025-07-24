import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction11 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "text",
      value: "Get answers and advice from people you want it from. Intact designers and developers will help you create awesome websites for your startup.",
      displayer: "Text",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "HIRE US!", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Call To Action 11";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons") || [];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.getPropValue("text") || buttons.length > 0) && (
            <div className={this.decorateCSS("content")}>
              {this.getPropValue("text") && (
                <div className={this.decorateCSS("text-container")}>
                  <Base.SectionDescription className={this.decorateCSS("text")}>
                    {this.getPropValue("text")}
                  </Base.SectionDescription>
                </div>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button, idx) => (
                    <ComposerLink path={button.url} key={idx}>
                      <Base.Button
                        className={`${this.decorateCSS("button")} ${button.type?.toLowerCase() || "primary"}`}
                        buttonType={button.type}
                      >
                        <span className={this.decorateCSS("button-text")}>
                          {button.text}
                        </span>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction11;