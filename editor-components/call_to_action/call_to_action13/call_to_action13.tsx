import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

class CallToAction13Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "Don't be weird.",
      displayer: "Subtitle",
    });

    this.addProp({
      type: "string",
      key: "title",
      value: "Would you like more information or do you have a question?",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("tertiary", "Button", "CONTACT US", "", null, null, "Tertiary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 13";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitle || buttons.length > 0) && (
            <div className={this.decorateCSS("header")}>
              {(titleExist || subtitle) && (
                <Base.VerticalContent className={this.decorateCSS("titles")}>
                  {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                  {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                  {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")} </Base.SectionDescription>)}
                </Base.VerticalContent>
              )}
              {buttons?.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        buttonType={button.type}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {button.text}
                        </Base.P>
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

export default CallToAction13Page;