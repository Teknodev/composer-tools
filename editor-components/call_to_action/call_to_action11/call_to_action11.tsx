import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

class CallToAction11 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      value: "Get answers and advice from people you want it from. Intact designers and developers will help you create awesome websites for your startup.",
      displayer: "Description",
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
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description")) || buttons.length > 0) && (
            <div className={this.decorateCSS("content")}>
              {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"))) && (
                <Base.VerticalContent className={this.decorateCSS("text-container")}>
                  {this.castToString(this.getPropValue("subtitle")) && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                  {this.castToString(this.getPropValue("title")) && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                  {this.castToString(this.getPropValue("description")) && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                </Base.VerticalContent>
              )}
              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button, idx) => this.castToString(button.text) && (
                    <ComposerLink path={button.url} key={idx}>
                      <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                        <Base.P className={this.decorateCSS("button-text")}>  {button.text} </Base.P>
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