import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action18.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction18 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "cardBackgroundEnabled",
      displayer: "Colored Background",
      value: true,
    });

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

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Start Now", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 18";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const cardBackgroundEnabled = this.getPropValue("cardBackgroundEnabled");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${cardBackgroundEnabled ? this.decorateCSS("card-background-enabled") : ""}`}>
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
          {buttons.length > 0 && (
            <div className={this.decorateCSS("buttons")}>
              {buttons.map((button: Button, index: number) => (
                <ComposerLink path={button.url} key={index}>
                  {this.castToString(button.text) && (
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  )}
                </ComposerLink>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction18;
