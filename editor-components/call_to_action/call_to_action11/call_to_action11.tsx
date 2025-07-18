// call_to_action11.tsx
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

    // Text prop eklendi (title yerine description olarak) - İstek 1 ve 2
    this.addProp({
      type: "string",
      key: "text", // key değiştirildi: title -> text
      value: "Get answers and advice from people you want it from. Intact designers and developers will help you create awesome websites for your startup.",
      displayer: "Text", // displayer değiştirildi: Title -> Text
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
    const alignment = Base.getContentAlignment();
    const buttons = this.castToObject<Button[]>("buttons") || [];
    const text = this.castToString(this.getPropValue("text")); // title -> text değiştirildi

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* wrapper div'i kaldırıldı - gereksiz class - İstek 7 */}
          {(text || buttons.length > 0) && (
            <div className={this.decorateCSS("content")}>
              {/* header -> content olarak değiştirildi, center class kaldırıldı - İstek 7 */}
              {text && (
                <div className={this.decorateCSS("text-container")}>
                  {/* titles -> text-container, VerticalContent kaldırıldı - İstek 7 */}
                  <Base.SectionDescription className={this.decorateCSS("text")}>
                    {/* SectionTitle -> SectionDescription (title değil description) - İstek 1 */}
                    {text}
                  </Base.SectionDescription>
                </div>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button, idx) => (
                    <ComposerLink path={button.url} key={idx}>
                      <Base.Button className={`${this.decorateCSS("button")} ${button.type?.toLowerCase() || 'primary'}`} buttonType={button.type}>


                        <span className={this.decorateCSS("button-text")}>
                          {/* Button text için class eklendi - İstek 8 */}
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
