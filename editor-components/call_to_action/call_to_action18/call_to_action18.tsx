import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action18.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction18 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Have Any Project?",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Feel free to send us a message",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Start Now", "", null, null, "Primary"));
  }

  static getName(): string {
    return "Call To Action 18";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
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
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          {this.castToString(button.text) && (
            <ComposerLink path={button.url}>
              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
              </Base.Button>
            </ComposerLink>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction18;
